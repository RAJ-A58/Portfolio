import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Star, Code2, Cpu, Compass } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'CamelCatch — Developer Tooling & Web Extensions',
      category: 'Developer Tooling',
      description: 'Engineered a real-time Chromium extension to analyze live LeetCode submissions and inject non-intrusive UI alerts for case-sensitivity mismatch errors, streamlining developer debugging workflows.',
      tags: ['JavaScript (ES6)', 'HTML5 / CSS3', 'Web Extensions API (Manifest V3)', 'Regex', 'Chrome DevTools'],
      github: 'https://github.com/RAJ-A58',
      live: 'https://github.com/RAJ-A58',
      featured: true
    },
    {
      title: 'Route Optimisation using OR-Tools',
      category: 'Algorithms & Optimization',
      description: 'Modeled and solved vehicle routing problems (VRP) with multiple depots, including Buldhana and Buttibori, and diverse demand locations using advanced constraint programming and CP-SAT solvers.',
      tags: ['Python', 'Google OR-Tools (CP-SAT)', 'Constraint Programming', 'Operations Research'],
      github: 'https://github.com/RAJ-A58',
      live: 'https://github.com/RAJ-A58',
      featured: true
    },
    {
      title: 'Real-time Driver Monitoring System (DMS)',
      category: 'Machine Learning & CV',
      description: 'Built a real-time computer-vision system to detect driver drowsiness and distraction using head pose estimation. Implemented facial landmark tracking via MediaPipe Face Mesh and utilized Eye Aspect Ratio (EAR) for precise blink detection.',
      tags: ['Python', 'OpenCV', 'MediaPipe Face Mesh', 'NumPy', 'Computer Vision'],
      github: 'https://github.com/RAJ-A58',
      live: 'https://github.com/RAJ-A58',
      featured: true
    }
  ];

  const categories = ['All', 'Developer Tooling', 'Algorithms & Optimization', 'Machine Learning & CV'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications spanning browser tooling extensions, constraint programming optimization, and computer vision systems.
        </p>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                background: filter === cat ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.05)',
                color: filter === cat ? '#000' : 'var(--text-muted)',
                border: filter === cat ? '1px solid transparent' : '1px solid var(--border-color)',
                boxShadow: filter === cat ? '0 4px 15px rgba(255, 255, 255, 0.2)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              
              {/* Featured Badge */}
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '20px',
                  background: 'var(--accent-gradient)',
                  color: '#000',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.8rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
                }}>
                  <Star size={12} fill="#000" />
                  <span>Featured</span>
                </div>
              )}

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem' }}>
                  <Layers size={16} />
                  <span>{project.category}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff', transition: 'color 0.2s', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-main)',
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.9rem' }}
                >
                  <Github size={18} />
                  <span>Repository</span>
                </a>
                
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.9rem' }}
                >
                  <span>View Code</span>
                  <ExternalLink size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
