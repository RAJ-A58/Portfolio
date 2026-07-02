import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Star } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Cloud-Native Distributed E-Commerce API',
      category: 'Backend & Cloud',
      description: 'Engineered a highly resilient, event-driven microservices backend using Node.js, AWS Lambda, DynamoDB, and SQS. Capable of handling over 10,000 requests/second with 99.99% uptime.',
      tags: ['Node.js', 'AWS Lambda', 'DynamoDB', 'Docker', 'REST API'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Real-Time Collaborative Code Editor',
      category: 'Full Stack',
      description: 'A browser-based collaborative IDE featuring real-time syntax highlighting, multi-cursor editing via WebSockets, and integrated code execution sandbox powered by Docker containers.',
      tags: ['React', 'WebSockets', 'Node.js', 'Docker', 'Monaco Editor'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'AI-Powered Resume Analytics Platform',
      category: 'Full Stack',
      description: 'Built a full-stack SaaS application that utilizes Natural Language Processing (NLP) to score software engineering resumes against job descriptions, offering actionable feedback to job seekers.',
      tags: ['React', 'Python', 'FastAPI', 'OpenAI API', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      role: 'DevOps CI/CD Pipeline Automator',
      category: 'DevOps',
      description: 'Automated infrastructure provisioning and continuous integration pipelines using Terraform, GitHub Actions, and AWS ECS for automated zero-downtime container deployments.',
      tags: ['Terraform', 'AWS ECS', 'GitHub Actions', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Backend & Cloud', 'DevOps'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of my recent engineering projects, cloud architectures, and full-stack applications.
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
                boxShadow: filter === cat ? '0 4px 15px rgba(0, 242, 254, 0.3)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
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
                  boxShadow: '0 4px 12px rgba(0, 242, 254, 0.4)'
                }}>
                  <Star size={12} fill="#000" />
                  <span>Featured</span>
                </div>
              )}

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem' }}>
                  <Layers size={16} />
                  <span>{project.category}</span>
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', transition: 'color 0.2s' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
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

              {/* Action Buttons: GitHub & Live Demo */}
              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.9rem' }}
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
                
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.9rem' }}
                >
                  <span>Live Demo</span>
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
