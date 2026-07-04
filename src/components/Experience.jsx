import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Summer Research Intern',
      company: 'IIT Bombay',
      location: 'Mumbai, Maharashtra',
      duration: 'May 2026 – July 2026',
      description: 'Extended a Points-To Analysis (PTA) visualizer to handle interprocedural memory tracking for global pointers and parametric functions. Modified the PLY lexer/parser and proved system correctness by validating outputs against Andersen’s, Steensgaard’s, LFCPA, and FSPTA algorithms.',
      skills: ['Python', 'PLY (Lex-Yacc)', 'Static Analysis (PTA)', 'Parser Design', 'Graphviz', 'Compilers']
    },
    {
      role: 'Summer Research Intern',
      company: 'IvLabs, VNIT Nagpur',
      location: 'Nagpur, Maharashtra',
      duration: 'Summer Intern',
      description: 'Worked on a Rocket Lander reinforcement learning project involving simulation-based control. Developed a Gymnasium-compatible environment wrapper for an open-source Rocket Lander simulator. Trained and evaluated reinforcement learning agents using Proximal Policy Optimization (PPO) with Stable-Baselines3.',
      skills: ['Python', 'Reinforcement Learning', 'Stable-Baselines3', 'Gymnasium', 'PPO', 'Simulation Control']
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <h2 className="section-title">Work & Research Experience</h2>
        <p className="section-subtitle">
          Hands-on internship experience in compiler static analysis and reinforcement learning simulation control.
        </p>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--border-color)',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                
                {/* Timeline Icon Badge */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--border-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
                }}>
                  <Briefcase size={18} style={{ color: '#fff' }} />
                </div>

                {/* Card content */}
                <div className="glass-card" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{exp.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 600 }}>{exp.company}</h4>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)'
                    }}>
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.7 }}>
                    {exp.description}
                  </p>

                  {/* Skills used tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-main)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.7rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.12)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
