import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code2, Terminal, ExternalLink } from 'lucide-react';
import Dither from './Dither.jsx';
import TiltCard from './TiltCard.jsx';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '7rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Interactive WebGL Dithered Wave Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'auto' }}>
        <Dither
          waveColor={[0.35, 0.55, 0.85]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.45}
          colorNum={4}
          waveAmplitude={0.35}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Background Ambient Glow Blobs */}
      <div className="glow-blob" style={{ top: '10%', left: '5%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)' }} />
      <div className="glow-blob" style={{ bottom: '10%', right: '5%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, transparent 70%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '3.5rem', 
          alignItems: 'center',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          
          {/* Left Column: Headline, Bio & Actions */}
          <div style={{ textAlign: 'left' }}>
            
            {/* Live Availability Badge */}
            <div className="animate-fade-in" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1rem',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              boxShadow: '0 0 25px rgba(56, 189, 248, 0.1)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00ed64',
                boxShadow: '0 0 8px #00ed64',
                display: 'inline-block'
              }} />
              <span style={{ color: 'var(--text-main)' }}>Available for Research & SWE Internships</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ color: '#38bdf8' }}>VNIT Nagpur '28</span>
            </div>

            {/* Main Title */}
            <h1 className="animate-fade-in" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.3rem)',
              letterSpacing: '-0.035em',
              marginBottom: '1.4rem',
              lineHeight: 1.12,
              fontWeight: 800
            }}>
              Engineering <br />
              <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #c084fc 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Intelligent Systems
              </span><br />
              & Compilers
            </h1>

            {/* Concise Impact Description */}
            <p className="animate-fade-in" style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--text-muted)',
              marginBottom: '2.4rem',
              maxWidth: '640px',
              lineHeight: 1.75
            }}>
              Hi, I'm <strong style={{ color: '#fff', fontWeight: 700 }}>Raj Patil</strong> — Computer Science undergrad at <strong>VNIT Nagpur</strong> (CGPA: 8.52). Former Research Intern at <strong>IIT Bombay</strong> & <strong>IvLabs</strong>, specializing in compiler static analysis, reinforcement learning simulation control, and algorithmic optimization.
            </p>

            {/* Action Buttons */}
            <div className="animate-fade-in" style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}>
              <a href="#projects" className="btn-primary">
                <span>View Engineering Projects</span>
                <ArrowRight size={18} />
              </a>
              
              <a href="#competitive" className="btn-secondary">
                <Sparkles size={18} style={{ color: '#38bdf8' }} />
                <span>Contests & Stats</span>
              </a>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Download size={18} />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Social & Coding Handles */}
            <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Profiles:</span>
              <a
                href="https://github.com/RAJ-A58"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', fontWeight: 600 }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', fontWeight: 600 }}
                onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Code2 size={18} />
                <span>LeetCode (1561)</span>
              </a>
              <a
                href="https://codeforces.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', fontWeight: 600 }}
                onMouseOver={(e) => e.currentTarget.style.color = '#c084fc'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Terminal size={18} />
                <span>Codeforces (1281)</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', fontWeight: 600 }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Profile & Live Rating TiltCard */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative', zIndex: 10 }}>
            <TiltCard maxAngle={15} glareOpacity={0.25} style={{ width: '100%', maxWidth: '430px' }}>
              <div style={{
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.88), rgba(7, 7, 10, 0.95))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '28px',
                padding: '2.5rem 2rem',
                boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Subtle Radial Glow Effect */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '220px',
                  height: '110px',
                  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                {/* Avatar with Halo Glow */}
                <div style={{
                  width: '135px',
                  height: '135px',
                  borderRadius: '50%',
                  border: '3px solid rgba(56, 189, 248, 0.5)',
                  padding: '5px',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(168, 85, 247, 0.25))',
                  marginBottom: '1.4rem',
                  boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.35)'
                }}>
                  <img
                    src="/raj-avatar.png"
                    alt="Raj Patil"
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>

                {/* Name & Academic Credentials */}
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', margin: '0 0 0.3rem 0', letterSpacing: '-0.03em' }}>
                  RAJ PATIL
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#38bdf8', fontWeight: 600, margin: '0 0 0.4rem 0' }}>
                  B.Tech CSE • VNIT Nagpur
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 1.8rem 0' }}>
                  Systems Software & ML Researcher
                </p>

                {/* Competitive Stats Bento */}
                <div style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.2rem 1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  position: 'relative'
                }}>
                  <div style={{ position: 'absolute', top: '15%', bottom: '15%', left: '50%', width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
                  
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                      LEETCODE
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8' }}>
                      1561
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.1rem' }}>
                      350+ Solved
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                      CODEFORCES
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#c084fc' }}>
                      1281
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.1rem' }}>
                      Pupil Rating
                    </div>
                  </div>
                </div>

                {/* Research Intern Tag Badge */}
                <div style={{
                  marginTop: '1.2rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  color: '#e2e8f0',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <Sparkles size={14} style={{ color: '#38bdf8' }} />
                  <span>Research Intern @ <strong>IIT Bombay</strong> (Summer '26)</span>
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
