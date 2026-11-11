import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Eye, ShieldCheck, Trophy, Users, GraduationCap, X, Download, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard.jsx';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 'system-design',
      title: 'Tutedude Advanced System Design & Distributed Systems',
      issuer: 'Tutedude • Issued 15th July 2026',
      description: 'Comprehensive software engineering certification mastering scalable systems architecture, distributed caching (Redis/Memcached), horizontal & vertical scaling, load balancing algorithms, database sharding, replication, and microservices.',
      credentialId: 'TD-RAJ-SD-2132',
      link: 'https://tutedude.com',
      certificateImg: '/Tutedude-System-Design-Certificate.jpg',
      badgeColor: '#38bdf8',
      icon: <Award size={26} style={{ color: '#38bdf8' }} />,
      topics: ['Scalability & High Availability', 'Load Balancing & Reverse Proxies', 'Database Sharding & Replication', 'Distributed Caching', 'CAP & PACELC Theorems']
    },
    {
      id: 'vnit-cse',
      title: 'B.Tech in Computer Science & Engineering (CGPA: 8.52)',
      issuer: 'Visvesvaraya National Institute of Technology (VNIT), Nagpur',
      description: 'Pursuing undergraduate degree in CSE (2024–2028). Strong academic foundations in Operating Systems, Database Management Systems (DBMS), Computer Networks, and Compiler Design.',
      credentialId: 'BT24CSE097',
      link: 'https://vnit.ac.in',
      badgeColor: '#00ed64',
      icon: <GraduationCap size={26} style={{ color: '#00ed64' }} />,
      topics: ['Compilers & Lexer Design', 'Distributed Systems', 'Advanced Algorithms', 'Computer Networks (TCP/IP)', 'Database Management (DBMS)']
    },
    {
      id: 'axis-vnit',
      title: 'Workshop Organizer & Lead Manager — AXIS National Tech Fest',
      issuer: 'VNIT Nagpur • 2025 – 2026',
      description: 'Organized and managed national-level technical workshops for central India’s largest technical fest, coordinating curriculum delivery, industry speaker logistics, and attendee registration pipelines.',
      credentialId: 'AXIS-VNIT-MANAGER',
      link: 'https://vnit.ac.in',
      badgeColor: '#c084fc',
      icon: <Users size={26} style={{ color: '#c084fc' }} />,
      topics: ['Event Leadership', 'Technical Workshop Delivery', 'Speaker Coordination', 'Logistics Management']
    }
  ];

  return (
    <section id="certifications" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-neon badge-glow-cyan" style={{ marginBottom: '1rem' }}>
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">Certifications & Leadership</h2>
          <p className="section-subtitle">
            Formal system design credentials, institutional coursework at VNIT Nagpur, and technical event leadership.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', maxWidth: '1150px', margin: '0 auto' }}>
          {certifications.map((item) => (
            <TiltCard
              key={item.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                borderLeft: `4px solid ${item.badgeColor}`
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${item.badgeColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 15px ${item.badgeColor}33`
                  }}>
                    {item.icon}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: item.badgeColor, fontSize: '0.8rem', fontWeight: 700 }}>
                    <ShieldCheck size={16} />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#fff', fontWeight: 800, marginBottom: '0.3rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '1rem' }}>
                  {item.issuer}
                </h4>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.4rem' }}>
                  {item.description}
                </p>

                {/* Topics covered */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.6rem' }}>
                  {item.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.65rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        color: 'var(--text-main)',
                        fontWeight: 500
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>
                  REF: {item.credentialId}
                </span>

                {item.certificateImg ? (
                  <button
                    onClick={() => setSelectedCert(item)}
                    style={{
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      padding: '0.4rem 0.9rem',
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
                      e.currentTarget.style.background = 'rgba(56, 189, 248, 0.25)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Eye size={15} />
                    <span>View Certificate</span>
                  </button>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <span>Institution</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px' }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: selectedCert.badgeColor, fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              <ShieldCheck size={18} />
              <span>Official Verified Certificate</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
              {selectedCert.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Credential ID: <strong style={{ color: '#fff' }}>{selectedCert.credentialId}</strong> • Verified Coursework
            </p>

            {/* Certificate Image Frame */}
            <div style={{
              background: '#000',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8)',
              marginBottom: '1.5rem'
            }}>
              <img
                src={selectedCert.certificateImg}
                alt={selectedCert.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Modal Bottom Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                Issuer: {selectedCert.issuer}
              </div>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a
                  href={selectedCert.certificateImg}
                  download="Raj_Patil_System_Design_Certificate.jpg"
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.55rem 1.25rem' }}
                >
                  <Download size={16} />
                  <span>Download Certificate</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;
