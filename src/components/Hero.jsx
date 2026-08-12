import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Award, Sparkles, ChevronRight, BookOpen, Layers, Cpu } from 'lucide-react';
import { profileData, statsData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const [typedIndex, setTypedIndex] = useState(0);
  const titles = [
    "Agentic AI Systems Engineer",
    "Physics-Informed ML Researcher",
    "Robotics B.Tech @ Amrita (8.94 CGPA)",
    "Creator of Wellsy v2.0 Autonomous Daemon"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ paddingTop: '140px', paddingBottom: '60px', position: 'relative' }}>
      <div className="section-container" style={{ paddingTop: '20px' }}>
        
        {/* Status Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div className="badge-glow" style={{ padding: '6px 18px', fontSize: '0.88rem' }}>
            <span className="pulse-dot"></span>
            <span>{profileData.badge}</span>
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 28px' }}>
          <h1 style={{ fontSize: '3.4rem', fontWeight: 800, lineHeight: 1.15, tracking: '-1px' }}>
            Hi, I'm <span className="gradient-text">{profileData.name}</span>
          </h1>
          <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.4rem',
              color: 'var(--color-primary)',
              fontWeight: 600
            }}>
              &gt; {titles[typedIndex]}
            </span>
          </div>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            marginTop: '18px',
            lineHeight: 1.7,
            maxWidth: '780px',
            margin: '18px auto 0'
          }}>
            {profileData.bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '64px', flexWrap: 'wrap' }}>
          <button onClick={onOpenTerminal} className="btn-cyber" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            <Terminal size={18} />
            Launch HUD CLI Simulator
          </button>
          
          <a href="#projects" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem', textDecoration: 'none' }}>
            <Layers size={18} color="var(--color-primary)" />
            View Flagship Projects
          </a>

          <button onClick={onOpenResume} className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            <BookOpen size={18} color="var(--color-emerald)" />
            View Full Resume
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid-4">
          {statsData.map((stat, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{
                fontSize: '2.4rem',
                fontWeight: 800,
                color: idx === 0 ? 'var(--color-primary)' : idx === 1 ? 'var(--color-secondary)' : idx === 2 ? 'var(--color-emerald)' : 'var(--color-accent)',
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '1rem' }}>{stat.label}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '4px' }}>{stat.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
