import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Trophy, Users, Code2, GraduationCap } from 'lucide-react';

const Certifications = () => {
  const achievements = [
    {
      title: 'Finalist — Meta PyTorch OpenEnv Hackathon × Scaler',
      issuer: 'India’s Biggest AI Hackathon • April 2026',
      description: 'Selected among the top 800 teams nationwide out of 31,000+ registered teams for building innovative AI and PyTorch open environment solutions.',
      credentialId: 'META-PYTORCH-TOP800',
      link: 'https://github.com/RAJ-A58',
      badgeColor: '#ff9900',
      icon: <Trophy size={28} style={{ color: '#ff9900' }} />
    },
    {
      title: 'Competitive Programming — LeetCode 1561 & CF 1281',
      issuer: 'LeetCode (1561 Contest Rating) • Codeforces (1281 Max)',
      description: 'Solved over 350 algorithmic challenges on LeetCode. Achieved a Contest Rating of 1561 on LeetCode and a max rating of 1281 on Codeforces, mastering dynamic programming, graphs, trees, and constraint programming.',
      credentialId: 'LEETCODE-1561-CF-1281',
      link: 'https://leetcode.com',
      badgeColor: '#00ed64',
      icon: <Code2 size={28} style={{ color: '#00ed64' }} />
    },
    {
      title: 'Workshop Organiser / Manager — AXIS Technical Fest',
      issuer: 'VNIT Nagpur • 2025 – 2026',
      description: 'Organized and managed technical workshops for VNIT’s annual national-level technical fest, handling logistics, speaker coordination, and registrations.',
      credentialId: 'AXIS-VNIT-MANAGER',
      link: 'https://vnit.ac.in',
      badgeColor: '#4facfe',
      icon: <Users size={28} style={{ color: '#4facfe' }} />
    },
    {
      title: 'B.Tech in Computer Science & Engineering (CGPA: 8.52)',
      issuer: 'Visvesvaraya National Institute of Technology (VNIT), Nagpur',
      description: 'Pursuing undergraduate degree in CSE (2024–2028). Strong academic excellence in core subjects like DBMS, OS, Computer Networks, and System Design.',
      credentialId: 'BT24CSE097',
      link: 'https://vnit.ac.in',
      badgeColor: '#a855f7',
      icon: <GraduationCap size={28} style={{ color: '#a855f7' }} />
    }
  ];

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <h2 className="section-title">Honors, Awards & Achievements</h2>
        <p className="section-subtitle">
          National hackathon achievements, competitive programming milestones, leadership roles, and academic excellence.
        </p>

        <div className="grid-2">
          {achievements.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              
              {/* Badge Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${item.badgeColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: `0 0 20px ${item.badgeColor}33`
              }}>
                {item.icon}
              </div>

              {/* Details */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  <ShieldCheck size={16} />
                  <span>Verified Achievement</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.8rem' }}>
                  {item.issuer}
                </h4>

                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>
                    REF: {item.credentialId}
                  </span>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.85rem',
                      color: 'var(--accent-purple)',
                      fontWeight: 600
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
