import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard.jsx';

const Experience = () => {
  const [filter, setFilter] = useState('All');

  const experiences = [
    {
      id: 'iit-bombay',
      category: 'Compilers & Static Analysis',
      role: 'Summer Research Intern',
      institution: 'IIT Bombay',
      location: 'Mumbai, Maharashtra',
      period: 'May 2026 – July 2026',
      badgeColor: '#38bdf8',
      summary: 'Extended a Points-To Analysis (PTA) visualizer to handle interprocedural memory tracking for global pointers and parametric functions. Modified the PLY lexer/parser and proved system correctness by validating outputs against Andersen’s, Steensgaard’s, LFCPA, and FSPTA algorithms.',
      highlights: [
        'Architected interprocedural memory tracking for global variables & parametric functions in C.',
        'Engineered custom AST walkers and grammar rules within PLY (Python Lex-Yacc).',
        'Validated algorithmic soundness against Andersen’s, Steensgaard’s, LFCPA, and FSPTA.',
        'Visualized high-complexity points-to memory graphs using Graphviz dot pipelines.'
      ],
      skills: ['Python', 'PLY (Lex-Yacc)', 'Static Analysis (PTA)', 'Parser Design', 'Graphviz', 'Compiler Engineering']
    },
    {
      id: 'ivlabs-vnit',
      category: 'Reinforcement Learning & Robotics',
      role: 'Summer Research Intern',
      institution: 'IvLabs, VNIT Nagpur',
      location: 'Nagpur, Maharashtra',
      period: 'Summer Intern',
      badgeColor: '#c084fc',
      summary: 'Worked on a Rocket Lander reinforcement learning project involving simulation-based control. Developed a Gymnasium-compatible environment wrapper for an open-source Rocket Lander simulator. Trained and evaluated reinforcement learning agents using Proximal Policy Optimization (PPO) with Stable-Baselines3.',
      highlights: [
        'Developed a Gymnasium-compatible environment wrapper for autonomous multi-axis rocket landing.',
        'Trained and evaluated deep reinforcement learning policies using Proximal Policy Optimization (PPO).',
        'Engineered reward functions balancing fuel conservation, terminal touchdown velocity, and attitude tilt.',
        'Benchmarked policy convergence across varying wind shear and engine gimbal dynamics.'
      ],
      skills: ['Python', 'Reinforcement Learning', 'Stable-Baselines3', 'Gymnasium', 'PPO', 'Simulation Control']
    }
  ];

  const categories = ['All', 'Compilers & Static Analysis', 'Reinforcement Learning & Robotics'];

  const filteredExperiences = filter === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === filter);

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      {/* Decorative background grid line */}
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-neon badge-glow-cyan" style={{ marginBottom: '1rem' }}>
            <Briefcase size={14} />
            <span>Research & Industry Experience</span>
          </div>
          <h2 className="section-title">Work & Research Experience</h2>
          <p className="section-subtitle">
            Hands-on research internships at premier institutions pushing forward compiler verification and reinforcement learning control.
          </p>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1.25rem',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  background: filter === cat ? 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)' : 'rgba(255, 255, 255, 0.04)',
                  color: filter === cat ? '#000' : 'var(--text-muted)',
                  border: filter === cat ? '1px solid transparent' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: filter === cat ? '0 4px 15px rgba(56, 189, 248, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div style={{ maxWidth: '980px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical connecting line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'linear-gradient(to bottom, #38bdf8 0%, #a855f7 70%, rgba(255,255,255,0.05) 100%)',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {filteredExperiences.map((exp, idx) => (
              <div key={exp.id} style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                
                {/* Timeline Node */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  background: '#0d0e14',
                  border: `2px solid ${exp.badgeColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 0 20px ${exp.badgeColor}40`,
                  color: exp.badgeColor
                }}>
                  {exp.id === 'iit-bombay' ? <Terminal size={22} /> : <Cpu size={22} />}
                </div>

                {/* Card Content with 3D Tilt */}
                <TiltCard className="glass-card" style={{ flex: 1, padding: '2.2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '0.8rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 800, marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '1.15rem', color: exp.badgeColor, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{exp.institution}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)', fontSize: '0.82rem' }}>
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.4rem', fontSize: '0.98rem' }}>
                    {exp.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.6rem' }}>
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                        <CheckCircle2 size={16} style={{ color: exp.badgeColor, flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          color: 'var(--text-main)',
                          fontWeight: 500
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
