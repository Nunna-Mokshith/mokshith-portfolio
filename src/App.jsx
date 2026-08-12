import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveTerminal from './components/InteractiveTerminal';
import Projects from './components/Projects';
import Research from './components/Research';
import SkillsMatrix from './components/SkillsMatrix';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import ResumeModal from './components/ResumeModal';
import ContactFooter from './components/ContactFooter';
import Canvas3D from './components/Canvas3D';
import SpotlightCursor from './components/SpotlightCursor';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToTerminal = () => {
    const el = document.getElementById('terminal-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* 3D WebGL Canvas Scene */}
      <Canvas3D theme={theme} />

      {/* 3D Glowing Cursor Spotlight */}
      <SpotlightCursor />

      <Navbar
        onOpenTerminal={scrollToTerminal}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main style={{ flex: 1, zIndex: 2, position: 'relative' }}>
        <Hero
          onOpenTerminal={scrollToTerminal}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <InteractiveTerminal />

        <Projects />

        <Research />

        <SkillsMatrix />

        <Certifications />

        <Leadership />
      </main>

      <ContactFooter />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
