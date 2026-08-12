import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(7, 10, 18, 0.9)',
      backdropFilter: 'blur(20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '840px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '36px',
        border: '1px solid rgba(0, 242, 254, 0.4)'
      }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={28} color="var(--color-primary)" />
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{profileData.name} - Candidate Profile</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{profileData.degree} | {profileData.cgpa} CGPA</p>
            </div>
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {/* Candidate Profile Summary Box */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '28px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', fontSize: '0.92rem' }}>
            <div>
              <span style={{ color: 'var(--text-dim)' }}>Institution:</span> <strong>{profileData.institution}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-dim)' }}>Academic Metric:</span> <strong style={{ color: 'var(--color-primary)' }}>{profileData.cgpa} CGPA (S5)</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-dim)' }}>Secondary Ed:</span> <strong>{profileData.secondaryEducation}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-dim)' }}>Discipline:</span> <strong>Agentic AI, Robotics & PIML</strong>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--color-primary)' }}>
          Profile Overview & Key Achievements
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
          <li style={{ marginBottom: '8px' }}>• <strong>Wellsy v2.0 Creator</strong>: Multi-interface autonomous daemon with 4-tier risk governance, WebSocket gates, and encrypted SQLite storage.</li>
          <li style={{ marginBottom: '8px' }}>• <strong>IEEE IES 2026 Finalist</strong>: Developed Physics-Guided Diffusion for 3D molecular generation (89.5% validity, 63% Gibbs MAE reduction).</li>
          <li style={{ marginBottom: '8px' }}>• <strong>Published Researcher</strong>: Author of "Small Scale Raspberry Pi Autonomous Car" (ICRM) & 3 manuscripts under review.</li>
          <li style={{ marginBottom: '8px' }}>• <strong>Certified AI Specialist</strong>: Earned 3 Google SkillsBuild micro-credentials in Responsible AI & MLOps (July 2026).</li>
          <li style={{ marginBottom: '8px' }}>• <strong>Athletic Leadership</strong>: Field Hockey Team Captain managing 20-player squad under high-pressure competitive scenarios.</li>
        </ul>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href={profileData.resumePath}
            download="Nunna_Mokshith_Resume.pdf"
            className="btn-cyber"
            style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}
          >
            <Download size={18} />
            Download PDF Resume File
          </a>
          
          <button onClick={onClose} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
