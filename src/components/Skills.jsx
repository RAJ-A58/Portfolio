import React, { useState } from 'react';
import { Code, Terminal, Cpu, Layers, BookOpen, Sparkles, CheckCircle } from 'lucide-react';
import TiltCard from './TiltCard.jsx';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: <Code size={22} />,
      accentColor: '#38bdf8',
      description: 'Primary programming languages utilized across high-performance systems engineering, algorithmic contests, and compiler design.',
      skills: [
        { name: 'Python', level: 'Advanced / Research', experience: 'Compilers, RL, AI & OR-Tools' },
        { name: 'C++', level: 'Competitive & Algorithms', experience: 'LeetCode, Codeforces, STL' },
        { name: 'C', level: 'Systems Programming', experience: 'Pointers, ASTs, Memory Layouts' },
        { name: 'JavaScript (ES6+)', level: 'Developer Tooling', experience: 'Manifest V3, React, DOM' },
        { name: 'SQL', level: 'Database Queries', experience: 'Relational Schemas & Normalization' },
        { name: 'HTML5 / CSS3', level: 'Modern Web UI', experience: 'Glassmorphism, Flex/Grid, Canvas' }
      ]
    },
    {
      title: 'Compilers & Static Analysis',
      icon: <Terminal size={22} />,
      accentColor: '#c084fc',
      description: 'Low-level program analysis, lexer/parser grammar specification, and interprocedural alias tracking.',
      skills: [
        { name: 'PLY (Python Lex-Yacc)', level: 'Advanced', experience: 'Grammar rules & Lexical tokenizers' },
        { name: 'Points-To Analysis (PTA)', level: 'Research', experience: 'IIT Bombay interprocedural tracker' },
        { name: 'Andersen’s Algorithm', level: 'Constraint Formulation', experience: 'Inclusion-based pointer analysis' },
        { name: 'Steensgaard’s Algorithm', level: 'Equivalence Classes', experience: 'Unification-based pointer analysis' },
        { name: 'LFCPA / FSPTA', level: 'Validation', experience: 'Flow-sensitive alias verification' },
        { name: 'Graphviz & AST Walkers', level: 'Visualization', experience: 'Memory graph automated rendering' }
      ]
    },
    {
      title: 'Machine Learning, RL & CV',
      icon: <Cpu size={22} />,
      accentColor: '#00ed64',
      description: 'Reinforcement learning simulation-based control, computer vision perception, and deep learning pipelines.',
      skills: [
        { name: 'Proximal Policy Optimization (PPO)', level: 'Advanced', experience: 'IvLabs rocket lander policy training' },
        { name: 'Stable-Baselines3', level: 'Simulation Framework', experience: 'Vectorized environment agents' },
        { name: 'Gymnasium (Farama)', level: 'Custom Environments', experience: 'Wrapper design & reward shaping' },
        { name: 'MediaPipe Face Mesh', level: 'Perception', experience: '468-point 3D landmark tracking' },
        { name: 'OpenCV & Head Pose', level: 'Real-time Video', experience: 'PnP 3D Euler angle estimation' },
        { name: 'NumPy & PyTorch', level: 'Tensor Ops', experience: 'Scientific computation & math kernels' }
      ]
    },
    {
      title: 'Optimization & Developer Tooling',
      icon: <Layers size={22} />,
      accentColor: '#ff9900',
      description: 'Combinatorial optimization solvers, browser extension ecosystems, and version control architecture.',
      skills: [
        { name: 'Google OR-Tools (CP-SAT)', level: 'Advanced', experience: 'Multi-depot VRP integer solver' },
        { name: 'Constraint Programming', level: 'Operations Research', experience: 'NP-hard scheduling & dispatch' },
        { name: 'Web Extensions API (Manifest V3)', level: 'Extension Dev', experience: 'CamelCatch Chrome extension' },
        { name: 'Chrome DevTools & DOM Injections', level: 'HUD Overlay', experience: 'Shadow DOM non-blocking alerts' },
        { name: 'Git & GitHub Workflows', level: 'Version Control', experience: 'Feature branch, CI/CD, releases' },
        { name: 'Linux / Bash Scripting', level: 'Dev Environment', experience: 'CLI tooling, pipes, automation' }
      ]
    },
    {
      title: 'Core Computer Science',
      icon: <BookOpen size={22} />,
      accentColor: '#38bdf8',
      description: 'Foundational computer engineering principles from VNIT Nagpur curriculum.',
      skills: [
        { name: 'Distributed System Design', level: 'Certified (Tutedude)', experience: 'Horizontal scaling, caching, sharding' },
        { name: 'Operating Systems (OS)', level: 'Core Foundations', experience: 'Processes, threads, locks, scheduling' },
        { name: 'Database Management (DBMS)', level: 'Relational Design', experience: 'ACID transactions, B-Trees, indexing' },
        { name: 'Computer Networks (CN)', level: 'Networking Layers', experience: 'TCP/IP stack, sockets, HTTP/3, TLS' },
        { name: 'Data Structures & Algorithms', level: '350+ LeetCode', experience: 'Trees, graphs, DP, segment trees' }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-neon badge-glow-cyan" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">Technical Skills & Toolset</h2>
          <p className="section-subtitle">
            Categorized overview of systems programming, compiler tools, reinforcement learning algorithms, and software architecture.
          </p>

          {/* Category Selector Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {skillGroups.map((group, idx) => {
              const isSelected = activeCategory === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.25s ease',
                    background: isSelected ? 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)' : 'rgba(255, 255, 255, 0.04)',
                    color: isSelected ? '#000' : 'var(--text-muted)',
                    border: isSelected ? '1px solid transparent' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: isSelected ? '0 4px 15px rgba(56, 189, 248, 0.3)' : 'none'
                  }}
                >
                  <span style={{ color: isSelected ? '#000' : group.accentColor }}>{group.icon}</span>
                  <span>{group.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Skill Group Detail Card */}
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <TiltCard
            className="glass-card"
            style={{
              padding: '3rem',
              borderTop: `4px solid ${skillGroups[activeCategory].accentColor}`
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${skillGroups[activeCategory].accentColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: skillGroups[activeCategory].accentColor
                }}>
                  {skillGroups[activeCategory].icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  {skillGroups[activeCategory].title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2.2rem' }}>
              {skillGroups[activeCategory].description}
            </p>

            {/* Grid of skills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
              {skillGroups[activeCategory].skills.map((item, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '1.2rem',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.borderColor = skillGroups[activeCategory].accentColor;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                      {item.name}
                    </h4>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: skillGroups[activeCategory].accentColor,
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '12px'
                    }}>
                      {item.level}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.experience}
                  </p>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};

export default Skills;
