import React, { useEffect, useState } from 'react';

export default function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .glass-panel, input, textarea')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer 3D Spotlight Glow */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1,
          transform: `translate3d(${pos.x - 250}px, ${pos.y - 250}px, 0)`,
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 70%)',
          transition: 'transform 0.15s cubic-bezier(0.1, 0.7, 0.1, 1)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Cybernetic Dot & Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '40px' : '20px',
          height: isHovered ? '40px' : '20px',
          borderRadius: '50%',
          border: isHovered ? '1px solid #00f2fe' : '1px solid rgba(0, 242, 254, 0.5)',
          background: isHovered ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${pos.x - (isHovered ? 20 : 10)}px, ${pos.y - (isHovered ? 20 : 10)}px, 0)`,
          transition: 'width 0.2s, height 0.2s, background 0.2s, transform 0.05s linear',
          boxShadow: isHovered ? '0 0 15px rgba(0, 242, 254, 0.6)' : 'none'
        }}
      />
    </>
  );
}
