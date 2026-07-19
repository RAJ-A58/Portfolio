import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Eye, ShieldCheck, Trophy, Users, Code2, GraduationCap, X, Download } from 'lucide-react';
import TiltCard from './TiltCard.jsx';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

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
      title: 'Tutedude System Design Course Completion',
      issuer: 'Tutedude • Issued 15th July 2026',
      description: 'Successfully completed the comprehensive Tutedude System Design course, mastering scalable software architecture, distributed systems, horizontal & vertical scaling, load balancing, and high-availability design patterns.',
      credentialId: 'TD-RAJ-SD-2132',
      link: 'https://tutedude.com',
      certificateImg: '/Tutedude-System-Design-Certificate.jpg',
      certificatePdf: '/Tutedude-System-Design-Certificate.jpg',
      badgeColor: '#38bdf8',
      icon: <Award size={28} style={{ color: '#38bdf8' }} />
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
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        <h2 className="section-title">Honors, Awards & Achievements</h2>
        <p className="section-subtitle">
          National hackathon achievements, verified system design certifications, competitive programming milestones, leadership roles, and academic excellence.
        </p>

        <div className="grid-2">
          {achievements.map((item, idx) => (
            <TiltCard key={idx} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {item.certificateImg ? (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedCert(item);
                          }}
                          style={{
                            background: 'rgba(56, 189, 248, 0.15)',
                            border: '1px solid rgba(56, 189, 248, 0.4)',
                            padding: '0.4rem 0.85rem',
                            borderRadius: '8px',
                            color: '#38bdf8',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(56, 189, 248, 0.3)';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.3)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(56, 189, 248, 0.15)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <Eye size={14} />
                          <span>View Certificate</span>
                        </button>

                        <a
                          href={item.certificatePdf || item.certificateImg}
                          target="_blank"
                          rel="noreferrer"
                          title="Open Original PDF in New Tab"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            fontSize: '0.82rem',
                            color: 'var(--accent-purple)',
                            fontWeight: 600,
                            textDecoration: 'none'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                        >
                          <span>Open PDF</span>
                          <ExternalLink size={14} />
                        </a>
                      </>
                    ) : (
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
                          fontWeight: 600,
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                      >
                        <span>View Profile</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </TiltCard>
          ))}
        </div>

      </div>

      {/* Interactive Certificate Preview Lightbox Modal */}
      {selectedCert && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(7, 7, 9, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(7, 7, 9, 0.98))',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              borderRadius: '24px',
              padding: '2rem',
              maxWidth: '920px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 50px rgba(56, 189, 248, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  <Award size={18} />
                  <span>OFFICIAL VERIFIED CERTIFICATE</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  {selectedCert.title}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                  Credential ID: <strong style={{ color: '#fff' }}>{selectedCert.credentialId}</strong> • {selectedCert.issuer}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 60, 60, 0.25)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Center Certificate Display Area */}
            <div style={{ flex: 1, overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '1.25rem', minHeight: '420px' }}>
              {selectedCert.certificateImg ? (
                <img
                  src={selectedCert.certificateImg}
                  alt={selectedCert.title}
                  style={{ maxWidth: '100%', maxHeight: '62vh', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)' }}
                />
              ) : null}
            </div>

            {/* Modal Footer Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              {selectedCert.certificatePdf && (
                <a
                  href={selectedCert.certificatePdf}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '0.65rem 1.4rem',
                    borderRadius: '10px',
                    background: 'var(--accent-cyan)',
                    color: '#070709',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.35)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <Download size={16} />
                  <span>Download / Open Full PDF</span>
                </a>
              )}
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <span>Verify at Tutedude</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;
