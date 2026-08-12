import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, Play, RefreshCw, CheckCircle2, ShieldAlert } from 'lucide-react';
import { projectsData, researchPapers, certificationsData, profileData } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Wellsy Autonomous Daemon CLI v2.0.8 [Connected: localhost:8765]' },
    { type: 'system', text: 'Type "help" or click action buttons below to inspect candidate profile.' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const rawCmd = (cmdStr || inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${rawCmd}` }];

    if (rawCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (rawCmd === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available CLI Commands:
  - wellsy status   : Check Wellsy v2.0 daemon security gate & risk engine status
  - projects       : List flagship projects & technical metrics
  - research       : View 4 research papers (ICRM, IEEE IES, Elsevier)
  - certs          : Display Google SkillsBuild micro-credentials (2026)
  - profile        : Summary of academic metrics (8.94 CGPA @ Amrita)
  - clear          : Clear terminal screen`
      });
    } else if (rawCmd === 'wellsy status' || rawCmd === 'status') {
      newHistory.push({
        type: 'output',
        text: `[WELLSY DAEMON STATUS]
  ● Daemon Status     : ACTIVE (pystray tray process running)
  ● HUD Web Interface : ONLINE (http://localhost:8765)
  ● Encryption Core   : AES-256 Fernet (Active DB Key)
  ● Risk Gate Engine  : 4-TIER GOVERNANCE (SAFE | LOW | HIGH | DANGER)
  ● Async Gate        : WebSocket Confirmation Interceptor ACTIVE
  ● Passive Scanner   : Session Diff Summary Engine READY`
      });
    } else if (rawCmd === 'projects') {
      const projText = projectsData.map(p => `• [${p.date}] ${p.title} (${p.category}) -> ${p.badge}`).join('\n');
      newHistory.push({ type: 'output', text: `Flagship Engineering Projects:\n${projText}` });
    } else if (rawCmd === 'research') {
      const resText = researchPapers.map(r => `• ${r.title}\n  Venue: ${r.venue} | Status: ${r.status}`).join('\n\n');
      newHistory.push({ type: 'output', text: `Research Publications & Manuscripts:\n${resText}` });
    } else if (rawCmd === 'certs') {
      const certText = certificationsData.slice(0, 5).map(c => `• ${c.title} (${c.issuer} | ${c.date})`).join('\n');
      newHistory.push({ type: 'output', text: `Google SkillsBuild & Core Credentials:\n${certText}` });
    } else if (rawCmd === 'profile') {
      newHistory.push({
        type: 'output',
        text: `Candidate Profile:
  Name        : ${profileData.name}
  Degree      : ${profileData.degree}
  Institution : ${profileData.institution}
  Academic CGPA: ${profileData.cgpa} (S5)
  High School : ${profileData.secondaryEducation}`
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${rawCmd}". Type "help" for a list of available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand();
  };

  return (
    <section id="terminal-section" style={{ padding: '40px 0 60px' }}>
      <div className="section-container">
        
        <div className="section-header">
          <div className="badge-glow" style={{ marginBottom: '12px' }}>
            <TermIcon size={14} />
            LIVE AGENT COMMAND CENTER
          </div>
          <h2 className="section-title">
            Interactive System <span className="gradient-text">CLI Terminal</span>
          </h2>
          <p className="section-subtitle">
            Simulate live commands from Wellsy v2.0 daemon, inspect research benchmarks, or query candidate credentials.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
          {['wellsy status', 'projects', 'research', 'certs', 'profile', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              style={{
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                color: 'var(--color-primary)',
                padding: '6px 14px',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.background = 'rgba(0, 242, 254, 0.2)'}
              onMouseOut={(e) => e.target.style.background = 'rgba(0, 242, 254, 0.08)'}
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="terminal-window" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              wellsy-daemon@mokshith-pc:~ (bash)
            </span>
            <button
              onClick={() => handleCommand('clear')}
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
              title="Clear terminal"
            >
              <RefreshCw size={14} />
            </button>
          </div>

          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '8px' }}>
                {item.type === 'user' && (
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{item.text}</span>
                )}
                {item.type === 'system' && (
                  <span style={{ color: 'var(--color-emerald)' }}>[SYSTEM] {item.text}</span>
                )}
                {item.type === 'output' && (
                  <pre style={{
                    color: 'var(--text-main)',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    borderLeft: '2px solid var(--color-primary)'
                  }}>
                    {item.text}
                  </pre>
                )}
                {item.type === 'error' && (
                  <span style={{ color: '#ef4444' }}>[ERROR] {item.text}</span>
                )}
              </div>
            ))}

            <form onSubmit={onSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
              <span className="terminal-prompt">mokshith@wellsy:~$</span>
              <input
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. 'help', 'wellsy status')..."
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </div>

      </div>
    </section>
  );
}
