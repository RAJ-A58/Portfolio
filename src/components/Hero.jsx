import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow Blobs */}
      <div className="glow-blob" style={{ top: '15%', left: '10%' }} />
      <div className="glow-blob" style={{ bottom: '15%', right: '10%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, transparent 70%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Tagline badge */}
          <div className="animate-fade-in" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(0, 242, 254, 0.08)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            borderRadius: '50px',
            color: 'var(--accent-cyan)',
            fontSize: '0.9rem',
            fontWeight: 500,
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={16} />
            <span>Available for Full-Time Software Engineering Roles</span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-in" style={{
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            Building Scalable, High-Impact <br />
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Software & Cloud Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            maxWidth: '650px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.7
          }}>
            Hi, I'm <strong style={{ color: '#fff' }}>Raj</strong> — a Software Engineer dedicated to crafting modern web applications, distributed architecture, and elegant user experiences.
          </p>

          {/* Call to action buttons */}
          <div className="animate-fade-in" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <a href="#projects" className="btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>
            
            {/* Resume link: opens in new tab or downloads */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Download size={18} />
              <span>Resume / CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontWeight: 500 }}>Connect with me:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:raj@example.com"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              aria-label="Email Me"
            >
              <Mail size={22} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
