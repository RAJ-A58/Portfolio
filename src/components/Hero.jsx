import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code2, Terminal } from 'lucide-react';
import Dither from './Dither.jsx';
import TiltCard from './TiltCard.jsx';

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
      {/* Interactive React Bits Dithered Wave Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'auto' }}>
        <Dither
          waveColor={[0.55, 0.65, 0.85]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.4}
          colorNum={4}
          waveAmplitude={0.35}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

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

          {/* Right Column: Interactive 3D Profile & Rating Card */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '520px', position: 'relative', zIndex: 10 }}>
            <TiltCard maxAngle={14} glareOpacity={0.25} style={{ width: '100%', maxWidth: '420px' }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(7, 7, 9, 0.95))',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '28px',
                padding: '2.5rem 2rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Top Subtle Glow */}
                <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

                {/* Avatar */}
                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  border: '3px solid rgba(56, 189, 248, 0.4)',
                  padding: '5px',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(168, 85, 247, 0.2))',
                  marginBottom: '1.5rem',
                  boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.3)'
                }}>
                  <img
                    src="/raj-avatar.png"
                    alt="Raj Patil"
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>

                {/* Name & Title */}
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0 0 0.3rem 0', letterSpacing: '-0.03em' }}>
                  RAJ PATIL
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500, margin: '0 0 2rem 0' }}>
                  Systems Software Engineer & RL Researcher
                </p>

                {/* Competitive Stats Box */}
                <div style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.25rem 1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  position: 'relative'
                }}>
                  {/* Vertical Divider */}
                  <div style={{ position: 'absolute', top: '15%', bottom: '15%', left: '50%', width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
                  
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                      LEETCODE
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#38bdf8' }}>
                      1561
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                      CODEFORCES
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#a855f7' }}>
                      1281
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
