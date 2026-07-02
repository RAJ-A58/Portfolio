import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Research & Software Development Intern',
      company: 'Plato Lab, IIT Bombay',
      duration: 'Second Year',
      description: 'Contributed to cutting-edge research and software development projects at the Indian Institute of Technology, Bombay. Collaborated with researchers and engineers to design scalable algorithms, analyze datasets, and build modular software architectures.',
      skills: ['Python', 'Algorithms', 'Data Analysis', 'Research & Development', 'Git']
    },
    {
      role: 'AI & Robotics Researcher / Developer',
      company: 'Ivlabs, VNIT Nagpur',
      duration: 'First Year',
      description: 'Explored core robotics algorithms, computer vision, and autonomous systems at Visvesvaraya National Institute of Technology. Engineered software modules using Python and C++, participated in technical research discussions, and developed foundational skills in systems programming.',
      skills: ['Python', 'C++', 'Computer Vision', 'ROS', 'Machine Learning', 'Linux']
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'rgba(18, 22, 31, 0.4)' }}>
      <div className="container">
        
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional engineering journey and career milestones.
        </p>

        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          
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
                  border: '2px solid var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
                }}>
                  <Briefcase size={18} style={{ color: 'var(--accent-cyan)' }} />
                </div>

                {/* Card content */}
                <div className="glass-card" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{exp.role}</h3>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', fontWeight: 500 }}>{exp.company}</h4>
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
                          background: 'rgba(0, 242, 254, 0.08)',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(0, 242, 254, 0.15)'
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
