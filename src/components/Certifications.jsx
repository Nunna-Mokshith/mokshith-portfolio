import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '80px 0', background: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="section-container">
        
        <div className="section-header">
          <div className="badge-glow" style={{ marginBottom: '12px' }}>
            <Award size={14} />
            VERIFIED CREDENTIALS & CERTIFICATIONS
          </div>
          <h2 className="section-title">
            Industry <span className="gradient-text">Micro-Credentials</span>
          </h2>
          <p className="section-subtitle">
            Google SkillsBuild micro-credentials in Responsible AI & MLOps alongside IBM Quantum, Infosys, Scaler, and Cloud credentials.
          </p>
        </div>

        {/* 3D Certifications Grid */}
        <div className="grid-3">
          {certificationsData.map((cert, idx) => (
            <TiltCard key={idx}>
              <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span className="badge-glow" style={{ fontSize: '0.78rem' }}>{cert.issuer}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {cert.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.35 }}>
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {cert.description}
                  </p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--color-emerald)' }}>
                  <CheckCircle2 size={14} />
                  <span>Verified Micro-Credential</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
