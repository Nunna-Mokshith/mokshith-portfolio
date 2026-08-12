import React from 'react';
import { Cpu, Terminal, FileText, Send, Sun, Moon } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal, onOpenResume, onOpenContact, theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        <div style={{
          background: 'linear-gradient(135deg, #0284c7, #4f46e5)',
          padding: '8px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(2, 132, 199, 0.4)'
        }}>
          <Cpu size={20} color="#ffffff" />
        </div>
        <div>
          <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>MOKSHITH</span>
          <span style={{ color: 'var(--color-primary)', marginLeft: '4px', fontSize: '0.85rem' }}>.AI</span>
        </div>
      </a>

      <ul className="nav-links">
        <li><a href="#projects" className="nav-link">Flagship Systems</a></li>
        <li><a href="#research" className="nav-link">Research Papers</a></li>
        <li><a href="#skills" className="nav-link">Tech Stack</a></li>
        <li><a href="#certifications" className="nav-link">Credentials</a></li>
        <li><a href="#leadership" className="nav-link">Leadership</a></li>
      </ul>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="btn-secondary"
          style={{ padding: '8px 12px', fontSize: '0.85rem' }}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? <Moon size={16} color="var(--color-secondary)" /> : <Sun size={16} color="#f59e0b" />}
        </button>

        <button onClick={onOpenTerminal} className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
          <Terminal size={16} color="var(--color-primary)" />
          CLI Tool
        </button>

        <button onClick={onOpenResume} className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
          <FileText size={16} color="var(--color-emerald)" />
          Resume
        </button>

        <button onClick={onOpenContact} className="btn-cyber">
          <Send size={16} />
          Contact
        </button>
      </div>
    </nav>
  );
}
