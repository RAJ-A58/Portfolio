import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Sparkles, Code2, Cpu, Compass, X, CheckCircle, Info } from 'lucide-react';
import TiltCard from './TiltCard.jsx';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 'camelcatch',
      title: 'CamelCatch — Chromium Developer Tooling',
      category: 'Developer Tooling',
      subtitle: 'Real-time LeetCode Case-Sensitivity Linting & Error Interceptor',
      description: 'Engineered a real-time Chromium extension to analyze live LeetCode submissions and inject non-intrusive UI alerts for case-sensitivity mismatch errors, streamlining developer debugging workflows.',
      tags: ['JavaScript (ES6)', 'HTML5 / CSS3', 'Web Extensions API (Manifest V3)', 'Regex AST', 'Chrome DevTools'],
      github: 'https://github.com/RAJ-A58',
      live: 'https://github.com/RAJ-A58',
      accentColor: '#38bdf8',
      architecture: {
        problem: 'Competitive programmers frequently encounter subtle compilation or runtime penalty errors on LeetCode due to PascalCase vs camelCase method or variable naming mismatches.',
        solution: 'Built a lightweight Manifest V3 extension operating through content scripts and shadow DOM alerts to scan code editor buffers in real-time without causing input latency.',
        keyPoints: [
          'Manifest V3 declarative event listeners with low-overhead memory footprint (<12MB).',
          'Asynchronous token stream inspection matching against LeetCode function signatures.',
          'Custom non-intrusive HUD notifications injected alongside Monaco code editor.',
          'Active zero-telemetry client-side evaluation preserving full user privacy.'
        ]
      }
    },
    {
      id: 'route-optimisation',
      title: 'Route Optimisation via Google OR-Tools',
      category: 'Optimization & Algorithms',
      subtitle: 'Multi-Depot Vehicle Routing Problem (VRP) Solver with CP-SAT',
      description: 'Modeled and solved complex vehicle routing problems (VRP) with multiple regional depots, including Buldhana and Butibori, and diverse demand locations using advanced constraint programming and CP-SAT solvers.',
      tags: ['Python', 'Google OR-Tools (CP-SAT)', 'Constraint Programming', 'Operations Research', 'NumPy'],
      github: 'https://github.com/RAJ-A58',
      live: 'https://github.com/RAJ-A58',
      accentColor: '#c084fc',
      architecture: {
        problem: 'Logistics fleets face combinatorial NP-hard dispatch routing when serving multi-stop deliveries across multiple originating depots with vehicle capacity limits.',
        solution: 'Formulated an integer programming model solved with Google OR-Tools CP-SAT, balancing vehicle capacity limits, transit durations, and total road distance.',
        keyPoints: [
          'Euclidean and topological distance matrix generators supporting multi-depot configurations.',
          'Capacity constraints and time window boundary enforcement per carrier node.',
          'Guided local search (GLS) and Tabu Search metaheuristics for rapid convergence.',
          'Demonstrated 23%+ mileage reduction compared to naive nearest-neighbor baseline routing.'
        ]
      }
    },
    {
      id: 'driver-monitoring',
      title: 'Real-time Driver Monitoring System (DMS)',
      category: 'Computer Vision & ML',
      subtitle: 'Facial Landmark Tracking & Head Pose Drowsiness Classifier',
      description: 'Built a real-time computer-vision system to detect driver drowsiness and distraction using head pose estimation. Implemented facial landmark tracking via MediaPipe Face Mesh and utilized Eye Aspect Ratio (EAR) for precise blink detection.',
      tags: ['Python', 'OpenCV', 'MediaPipe Face Mesh', 'NumPy', 'Computer Vision', 'PnP Estimation'],
      github: 'https://github.com/RAJ-A58',
      live: 'https://github.com/RAJ-A58',
      accentColor: '#00ed64',
      architecture: {
        problem: 'Driver fatigue and micro-sleep events cause thousands of avoidable collisions annually, requiring instant zero-latency visual distraction alarms.',
        solution: 'Developed an OpenCV & MediaPipe pipeline calculating 3D head rotation vectors and Eye Aspect Ratios (EAR) across 30+ frames per second on consumer hardware.',
        keyPoints: [
          'MediaPipe 468-point 3D facial landmark mesh extraction in real-time.',
          'Perspective-n-Point (PnP) solver to estimate head yaw, pitch, and roll angular degrees.',
          'Temporal sliding-window verification of Eye Aspect Ratio (EAR) to prevent false-positive blink alarms.',
          'Auditory and visual warning dispatch triggers on prolonged gaze deflection >2.5 seconds.'
        ]
      }
    }
  ];

  const categories = ['All', 'Developer Tooling', 'Optimization & Algorithms', 'Computer Vision & ML'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-neon badge-glow-purple" style={{ marginBottom: '1rem' }}>
            <Layers size={14} />
            <span>Applied Engineering Showcases</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world systems spanning browser tooling extensions, constraint programming optimization, and computer vision pipelines.
          </p>

          {/* Filter Buttons */}
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

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.2rem' }}>
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.4rem',
                borderTop: `4px solid ${project.accentColor}`
              }}
            >
              <div>
                {/* Category & Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: project.accentColor
                  }}>
                    {project.category}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                      aria-label="View Source Code"
                    >
                      <Github size={19} />
                    </a>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: project.accentColor, fontWeight: 600, marginBottom: '1.2rem' }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.6rem' }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        color: 'var(--text-main)',
                        fontWeight: 500
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button
                  onClick={() => setActiveModalProject(project)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.25s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = project.accentColor;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  }}
                >
                  <Info size={16} style={{ color: project.accentColor }} />
                  <span>Architecture Deep Dive</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.65rem 1rem',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <Github size={15} />
                  <span>Code</span>
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Interactive Architecture Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: activeModalProject.accentColor,
                letterSpacing: '0.06em'
              }}>
                {activeModalProject.category}
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
              {activeModalProject.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: activeModalProject.accentColor, fontWeight: 600, marginBottom: '1.5rem' }}>
              {activeModalProject.subtitle}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>
                Engineering Context & Motivation
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                {activeModalProject.architecture.problem}
              </p>
            </div>

            <div style={{ marginBottom: '1.8rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>
                Technical Solution & Implementation
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                {activeModalProject.architecture.solution}
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.8rem', fontWeight: 700 }}>
                Key Technical Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {activeModalProject.architecture.keyPoints.map((pt, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                    <CheckCircle size={16} style={{ color: activeModalProject.accentColor, flexShrink: 0, marginTop: '3px' }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
              >
                <Github size={17} />
                <span>View Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
