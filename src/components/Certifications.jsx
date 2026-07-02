import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Issued 2024',
      credentialId: 'AWS-12345-ARCH',
      link: 'https://aws.amazon.com/verification',
      badgeColor: '#ff9900'
    },
    {
      title: 'Google Cloud Certified – Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: 'Issued 2023',
      credentialId: 'GCP-98765-DEV',
      link: 'https://cloud.google.com/certification',
      badgeColor: '#4facfe'
    },
    {
      title: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Coursera & Meta',
      date: 'Issued 2023',
      credentialId: 'META-55443-FE',
      link: 'https://coursera.org/verify',
      badgeColor: '#0080fb'
    },
    {
      title: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      date: 'Issued 2023',
      credentialId: 'MDB-33221-ASSOC',
      link: 'https://university.mongodb.com',
      badgeColor: '#00ed64'
    }
  ];

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(18, 22, 31, 0.4)' }}>
      <div className="container">
        
        <h2 className="section-title">Professional Certifications</h2>
        <p className="section-subtitle">
          Verified industry credentials demonstrating mastery in cloud architecture, database design, and modern web development.
        </p>

        <div className="grid-2">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              
              {/* Badge Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${cert.badgeColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: `0 0 20px ${cert.badgeColor}33`
              }}>
                <Award size={28} style={{ color: cert.badgeColor }} />
              </div>

              {/* Details */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  <ShieldCheck size={16} />
                  <span>Verified Credential</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.4rem' }}>
                  {cert.title}
                </h3>

                <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1rem' }}>
                  {cert.issuer} • <span style={{ color: 'var(--text-dim)' }}>{cert.date}</span>
                </h4>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>
                    ID: {cert.credentialId}
                  </span>

                  <a
                    href={cert.link}
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
                    <span>Verify</span>
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
