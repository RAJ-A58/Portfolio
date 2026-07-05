import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code2, Terminal } from 'lucide-react';
import Canvas3D from './Canvas3D.jsx';
import Lanyard from './Lanyard.jsx';

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
      {/* Interactive 3D Particle & Neural Lattice Background */}
      <Canvas3D />

      {/* Background Glow Blobs */}
      <div className="glow-blob" style={{ top: '15%', left: '10%' }} />
      <div className="glow-blob" style={{ bottom: '15%', right: '10%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, transparent 70%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center',
          maxWidth: '1250px',
          margin: '0 auto'
        }}>
          
          {/* Left Column: Headline, Bio & Actions */}
          <div style={{ textAlign: 'left' }}>
            
            {/* Tagline badge */}
            <div className="animate-fade-in" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50px',
              color: 'var(--accent-cyan)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
            }}>
              <Sparkles size={16} />
              <span>LeetCode 1561 • Codeforces 1281 • IIT Bombay Intern</span>
            </div>

            {/* Main Title */}
            <h1 className="animate-fade-in" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              fontWeight: 800
            }}>
              Building Intelligent Systems, <br />
              <span style={{
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Compilers & Machine Learning
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in" style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              maxWidth: '620px',
              lineHeight: 1.7
            }}>
              Hi, I'm <strong style={{ color: '#fff' }}>Raj Patil</strong> — a Computer Science & Engineering undergrad at Visvesvaraya National Institute of Technology (VNIT), Nagpur. Passionate about static analysis, reinforcement learning, computer vision, and scalable software architecture.
            </p>

            {/* Call to action buttons */}
            <div className="animate-fade-in" style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}>
              <a href="#projects" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>
              
              {/* Resume link */}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Download size={18} />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connect:</span>
              <a
                href="https://github.com/RAJ-A58"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Github size={19} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Linkedin size={19} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Code2 size={19} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>LeetCode</span>
              </a>
              <a
                href="https://codeforces.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Terminal size={19} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Codeforces</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Lanyard VIP Conference Pass */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Lanyard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
