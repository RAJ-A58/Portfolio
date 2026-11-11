import React from 'react';
import { Terminal, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2.5rem 1.5rem',
      background: 'radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.08) 0%, transparent 60%), #070709',
      color: '#f8fafc',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Navbar / Brand */}
      <header style={{
        width: '100%',
        maxWidth: '1100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: '1.25rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
            padding: '0.4rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000'
          }}>
            <Terminal size={18} strokeWidth={2.5} />
          </div>
          <span>Raj Patil<span style={{ color: '#38bdf8' }}>.dev</span></span>
        </div>

        <a
          href="mailto:rajpatil280906@gmail.com"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '0.45rem 1rem',
            borderRadius: '50px',
            color: '#fff',
            fontSize: '0.85rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = '#fff';
          }}
        >
          Contact
        </a>
      </header>

      {/* Main Clean Slate Card */}
      <main style={{
        maxWidth: '680px',
        margin: 'auto 0',
        padding: '3rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        {/* Status Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          background: 'rgba(56, 189, 248, 0.08)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          color: '#38bdf8',
          fontSize: '0.82rem',
          fontWeight: 600,
          letterSpacing: '0.04em'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#38bdf8',
            boxShadow: '0 0 10px #38bdf8'
          }} />
          <span>REBUILDING FROM SCRATCH</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          margin: 0
        }}>
          Crafting Something <br />
          <span style={{
            background: 'linear-gradient(135deg, #38bdf8 0%, #c084fc 60%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            New & Extraordinary
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          color: '#94a3b8',
          lineHeight: 1.7,
          maxWidth: '540px',
          margin: 0
        }}>
          My portfolio is currently undergoing a complete rebuild with a brand-new architecture and visual experience. Check back soon!
        </p>

        {/* Social Connection Handles */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginTop: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a
            href="https://github.com/RAJ-A58"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:rajpatil280906@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: '50px',
              background: '#ffffff',
              border: '1px solid #ffffff',
              color: '#000',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={18} />
            <span>Get in Touch</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        fontSize: '0.82rem',
        color: '#64748b'
      }}>
        © {new Date().getFullYear()} Raj Patil • Computer Science & Engineering, VNIT Nagpur
      </footer>
    </div>
  );
}

export default App;
