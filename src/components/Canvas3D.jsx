import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Canvas3D({ theme = 'light' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. 3D Particle Sphere
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const isLight = theme === 'light';
    const color1 = new THREE.Color(isLight ? '#0284c7' : '#00f2fe');
    const color2 = new THREE.Color(isLight ? '#4f46e5' : '#6366f1');
    const color3 = new THREE.Color(isLight ? '#7c3aed' : '#a855f7');

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 8 + (Math.random() - 0.5) * 1.5;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixRatio = Math.random();
      const mixedColor = mixRatio < 0.5 ? color1.clone().lerp(color2, mixRatio * 2) : color2.clone().lerp(color3, (mixRatio - 0.5) * 2);

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.85 : 0.75,
      blending: THREE.NormalBlending
    });

    const particleSphere = new THREE.Points(geometry, material);
    scene.add(particleSphere);

    // 3. Central Wireframe Octahedron
    const octGeo = new THREE.OctahedronGeometry(4, 2);
    const octMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x0284c7 : 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.35 : 0.25
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    scene.add(octMesh);

    // Outer Torus Ring
    const torusGeo = new THREE.TorusGeometry(10, 0.05, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x4f46e5 : 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.45 : 0.35
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 3;
    scene.add(torusMesh);

    // 4. Mouse Motion
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // 5. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particleSphere.rotation.y = elapsedTime * 0.08 + targetX * 0.5;
      particleSphere.rotation.x = elapsedTime * 0.04 + targetY * 0.5;

      octMesh.rotation.y = -elapsedTime * 0.15;
      octMesh.rotation.x = elapsedTime * 0.1;

      torusMesh.rotation.z = elapsedTime * 0.05;
      torusMesh.rotation.y = targetX * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      octGeo.dispose();
      octMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: theme === 'light' ? 0.75 : 0.65
      }}
    />
  );
}
