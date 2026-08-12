import React, { useState } from 'react';
import { Layers, ShieldCheck, Zap, ExternalLink, Activity, ArrowRight, Code, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Agentic AI & Daemons', 'PIML & GenAI', 'Embedded & Robotics', 'Computer Vision'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" style={{ padding: '80px 0' }}>
      <div className="section-container">
        
        <div className="section-header">
          <div className="badge-glow" style={{ marginBottom: '12px' }}>
            <Layers size={14} />
            FLAGSHIP ENGINEERING SYSTEMS
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Architectures</span>
          </h2>
          <p className="section-subtitle">
            Autonomous agent daemons, physics-informed neural operators, industrial PIML diagnostics, soft robotics, and dual-mode hardware.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                background: activeTab === cat ? 'linear-gradient(135deg, #00f2fe, #6366f1)' : 'rgba(255, 255, 255, 0.04)',
                color: activeTab === cat ? '#070a12' : 'var(--text-muted)',
                border: activeTab === cat ? 'none' : '1px solid var(--border-subtle)',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Projects Cards Grid */}
        <div className="grid-2">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id}>
              <div
                className="glass-panel"
                style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
              >
                <div>
                  {/* Header Badge & Date */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="badge-glow">{project.badge}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {project.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    background: 'rgba(0, 0, 0, 0.35)',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '20px'
                  }}>
                    {project.metrics.map((m, idx) => (
                      <div key={idx} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{m.label}</div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        <ShieldCheck size={16} color="var(--color-primary)" style={{ shrink: 0, marginTop: '2px' }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags & Action Button */}
                <div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Inspect System Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(7, 10, 18, 0.88)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}>
            <div className="glass-panel" style={{ maxWidth: '680px', width: '100%', padding: '36px', maxHeight: '90vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span className="badge-glow">{selectedProject.badge}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '14px' }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--color-primary)' }}>
                System Architecture Highlights:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                {selectedProject.highlights.map((h, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                    <Zap size={16} color="var(--color-primary)" style={{ marginTop: '3px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--color-secondary)' }}>
                Technical Stack & Tools:
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="badge-glow" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn-cyber"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Close Inspector
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
