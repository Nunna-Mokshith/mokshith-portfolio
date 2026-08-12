import React, { useState, useRef } from 'react';

export default function TiltCard({ children, className = '', style = {}, maxTilt = 12 }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: tiltX, y: tiltY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card-container ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        ...style
      }}
    >
      <div
        style={{
          transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${tilt.isHovered ? '12px' : '0px'})`,
          transformStyle: 'preserve-3d',
          position: 'relative',
          height: '100%'
        }}
      >
        {children}

        {/* 3D Glare Reflection Overlay */}
        {tilt.isHovered && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '16px',
              pointerEvents: 'none',
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)`,
              mixBlendMode: 'overlay',
              zIndex: 10
            }}
          />
        )}
      </div>
    </div>
  );
}
