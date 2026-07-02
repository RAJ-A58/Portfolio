import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in working together, discussing software architecture, or have a job opportunity? Let's connect!
        </p>

        <div className="grid-2" style={{ gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: '1.5rem' }}>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(0, 242, 254, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>Email Me</h3>
                <a href="mailto:raj@example.com" style={{ color: 'var(--text-muted)' }}>raj@example.com</a>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(79, 172, 254, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-purple)'
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>Location</h3>
                <p style={{ color: 'var(--text-muted)' }}>Open to Remote & Relocation</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-violet)'
              }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>Phone / WhatsApp</h3>
                <a href="tel:+1234567890" style={{ color: 'var(--text-muted)' }}>+1 (234) 567-890</a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={56} style={{ color: '#00ed64', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.4rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer copyright */}
        <div style={{ textAlign: 'center', marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} Raj. All rights reserved. Built with React & Vite.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
