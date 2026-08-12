import React from 'react';
import { Users, Trophy, Flame, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" style={{ padding: '80px 0' }}>
      <div className="section-container">
        
        <div className="section-header">
          <div className="badge-glow" style={{ marginBottom: '12px' }}>
            <Trophy size={14} />
            ATHLETIC CAPTAINCY & HACKATHONS
          </div>
          <h2 className="section-title">
            Leadership & <span className="gradient-text">High-Pressure Execution</span>
          </h2>
          <p className="section-subtitle">
            Field Hockey Team Captaincy leading 20-member squads alongside competitive hackathons and civic outreach initiatives.
          </p>
        </div>

        {/* Top Hero Card for Athletic Leadership */}
        <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px', borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #00f2fe, #6366f1)',
              padding: '12px',
              borderRadius: '12px',
              color: '#070a12',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Flame size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{leadershipData.athletic.role}</h3>
              <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                Squad Management: {leadershipData.athletic.squadSize}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {leadershipData.athletic.highlights.map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(0, 0, 0, 0.25)',
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: '8px', fontSize: '0.92rem' }}>
                  {idx === 0 ? "Squad Tactical Alignment" : idx === 1 ? "Rapid Crisis Decisioning" : "High-Confidence Communication"}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons Grid */}
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>
          Competitive Hackathons & Civic Ideathons
        </h3>

        <div className="grid-2">
          {leadershipData.hackathons.map((h, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge-glow">{h.organizer}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {h.date}
                </span>
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                {h.name} ({h.team})
              </h4>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                {h.details}
              </p>

              <div style={{ fontSize: '0.8rem', color: 'var(--color-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} />
                <span>{h.signoff}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
