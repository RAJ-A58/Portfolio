import React from 'react';
import { Code, Cpu, Database, Cloud, GitBranch, Layers, BookOpen, Terminal, Shield } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} style={{ color: 'var(--accent-cyan)' }} />,
      skills: ['Python', 'C++', 'C', 'JavaScript (ES6+)', 'Algorithms', 'Data Structures']
    },
    {
      title: 'Compilers & Static Analysis',
      icon: <Terminal size={24} style={{ color: 'var(--accent-purple)' }} />,
      skills: ['PLY (Python Lex-Yacc)', 'Parser Design', 'Static Analysis (PTA)', 'Graphviz', 'Andersen / Steensgaard Algorithms', 'LFCPA / FSPTA']
    },
    {
      title: 'Machine Learning, RL & CV',
      icon: <Cpu size={24} style={{ color: 'var(--accent-violet)' }} />,
      skills: ['Stable-Baselines3', 'Proximal Policy Optimization (PPO)', 'Gymnasium', 'OpenCV', 'MediaPipe Face Mesh', 'TensorFlow', 'NumPy', 'Head Pose Estimation']
    },
    {
      title: 'Optimization & Developer Tools',
      icon: <Layers size={24} style={{ color: '#00ed64' }} />,
      skills: ['Google OR-Tools (CP-SAT)', 'Constraint Programming', 'Operations Research', 'Web Extensions API (Manifest V3)', 'Chrome DevTools', 'Git & GitHub']
    },
    {
      title: 'Core Computer Science',
      icon: <BookOpen size={24} style={{ color: '#ff9900' }} />,
      skills: ['System Design', 'Database Management Systems (DBMS)', 'Operating Systems (OS)', 'Computer Networks (CN)']
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          An overview of my academic foundation, research interests, and technical toolset.
        </p>

        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '4rem', gap: '4rem' }}>
          
          {/* Bio text */}
          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', color: '#fff' }}>
              B.Tech in Computer Science & Engineering
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.8 }}>
              I am an undergraduate student (2024–2028) at Visvesvaraya National Institute of Technology (VNIT), Nagpur, maintaining an academic CGPA of <strong>8.52</strong>. My engineering work spans low-level compiler static analysis, reinforcement learning simulation control, and real-time computer vision systems.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              With hands-on research internship experience at prestigious institutions like <strong>IIT Bombay</strong> and <strong>IvLabs (VNIT Nagpur)</strong>, I combine rigorous theoretical foundations with practical problem-solving—proven by a <strong>1561 LeetCode Contest Rating</strong> (350+ problems solved), a <strong>1281 Codeforces Max Rating</strong>, and reaching the national finals of the Meta PyTorch OpenEnv Hackathon.
            </p>
          </div>

          {/* Quick Stats or Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.2rem' }}>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                8.52
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>CGPA at VNIT Nagpur</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                1561
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>LeetCode Contest Rating</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                1281
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Codeforces Max Rating</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                350+
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>LeetCode Solved</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Top 800
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Meta PyTorch Hackathon</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                2
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Research Internships</p>
            </div>
          </div>

        </div>

        {/* Technical Skills Grid */}
        <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>
          Technical Competencies & Skills
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                {category.icon}
                <h4 style={{ fontSize: '1.25rem' }}>{category.title}</h4>
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
