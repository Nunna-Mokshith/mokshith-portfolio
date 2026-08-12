import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Cpu } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ContactFooter({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      if (onClose) onClose();
    }, 2500);
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: '#05070d', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="section-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        
        <div className="grid-2" style={{ marginBottom: '60px' }}>
          
          {/* Left Column: Direct Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #00f2fe, #6366f1)',
                padding: '8px',
                borderRadius: '8px',
                color: '#070a12'
              }}>
                <Cpu size={20} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{profileData.name}</h3>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '440px', marginBottom: '24px' }}>
              {profileData.bio}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="var(--color-primary)" />
                <span>{profileData.location}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--color-emerald)" />
                <a href={`mailto:${profileData.email}`} style={{ color: 'var(--text-main)', textDecoration: 'none' }}>
                  {profileData.email}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '28px' }}>
              <a href={profileData.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '10px 18px' }}>
                <Github size={18} />
                GitHub
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '10px 18px' }}>
                <Linkedin size={18} color="#0a66c2" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '18px' }}>
              Initiate Direct Collaboration
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--color-emerald)' }}>
                <CheckCircle2 size={48} style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Transmission Received!</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  Thank you for reaching out. Nunna Mokshith will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                    placeholder="e.g. Dr. Alex Vance"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                    placeholder="e.g. alex@research.org"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Message / Proposal</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      outline: 'none',
                      resize: 'none'
                    }}
                    placeholder="Inquire about Agentic AI systems, PIML research, or robotics opportunities..."
                  />
                </div>

                <button type="submit" className="btn-cyber" style={{ justifyContent: 'center', marginTop: '8px' }}>
                  <Send size={16} />
                  Transmit Message
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-dim)',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            © 2026 Nunna Mokshith. Built with Agentic AI Precision & Glassmorphism Design.
          </div>
          <div>
            Amrita Vishwa Vidyapeetham | Robotics & AI B.Tech
          </div>
        </div>

      </div>
    </footer>
  );
}
