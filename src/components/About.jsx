import React from 'react';
import { Code, Cpu, Database, Cloud, GitBranch, Layers } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages & Core',
      icon: <Code size={24} style={{ color: 'var(--accent-cyan)' }} />,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'HTML5 & CSS3', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers size={24} style={{ color: 'var(--accent-purple)' }} />,
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Vite', 'Tailwind CSS']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} style={{ color: 'var(--accent-violet)' }} />,
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Git & GitHub', 'CI/CD Pipelines', 'REST APIs', 'PostgreSQL']
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A glimpse into my background, engineering philosophy, and technical toolset.
        </p>

        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '4rem', gap: '4rem' }}>
          
          {/* Bio text */}
          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', color: '#fff' }}>
              Architecting Digital Experiences
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.8 }}>
              As a Software Engineer, I thrive at the intersection of robust backend engineering and seamless frontend design. I believe clean code, well-tested architecture, and user-centric design are the foundations of truly exceptional software.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Whether building cloud-native distributed microservices or responsive single-page web applications, I am driven by continuous learning, agile collaboration, and delivering tangible business value.
            </p>
          </div>

          {/* Quick Stats or Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                3+
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Years of Experience</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                15+
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Projects Completed</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                100%
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Commitment to Quality</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                5+
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Certifications & Badges</p>
            </div>
          </div>

        </div>

        {/* Technical Skills Grid */}
        <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>
          Technical Competencies
        </h3>
        
        <div className="grid-3">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                {category.icon}
                <h4 style={{ fontSize: '1.3rem' }}>{category.title}</h4>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--text-main)',
                      fontWeight: 500,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                      e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
