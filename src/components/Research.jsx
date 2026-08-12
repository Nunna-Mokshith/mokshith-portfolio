import React, { useState } from 'react';
import { BookOpen, Award, Copy, Check, FileText, Sparkles } from 'lucide-react';
import { researchPapers } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Research() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyCitation = (id, citationStr) => {
    navigator.clipboard.writeText(citationStr);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="research" style={{ padding: '80px 0', background: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="section-container">
        
        <div className="section-header">
          <div className="badge-glow" style={{ marginBottom: '12px' }}>
            <BookOpen size={14} />
            ACADEMIC RESEARCH & PUBLICATIONS
          </div>
          <h2 className="section-title">
            Peer-Reviewed <span className="gradient-text">Publications & Manuscripts</span>
          </h2>
          <p className="section-subtitle">
            Contributions to autonomous robotics, physics-informed diffusion models, industrial diagnostics, and renewable energy.
          </p>
        </div>

        {/* 3D Papers Grid */}
        <div className="grid-2">
          {researchPapers.map((paper) => (
            <TiltCard key={paper.id}>
              <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  {/* Status & Venue */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className={paper.status.includes('Published') ? "badge-glow badge-emerald" : "badge-glow badge-purple"}>
                      {paper.status}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {paper.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.4 }}>
                    "{paper.title}"
                  </h3>

                  <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '16px' }}>
                    {paper.venue}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {paper.abstract}
                  </p>
                </div>

                {/* Citation Copy Action */}
                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '16px',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    Author: Nunna Mokshith
                  </span>

                  <button
                    onClick={() => handleCopyCitation(paper.id, paper.citations)}
                    className="btn-secondary"
                    style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                  >
                    {copiedId === paper.id ? (
                      <>
                        <Check size={14} color="var(--color-emerald)" />
                        Citation Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy Citation
                      </>
                    )}
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
