import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'rajpatil280906@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-neon badge-glow-cyan" style={{ marginBottom: '1rem' }}>
            <MessageSquare size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in research collaboration, systems engineering, internship opportunities, or discussing algorithms? Let's connect!
          </p>
        </div>

        <div className="grid-2" style={{ gap: '3rem', maxWidth: '1050px', margin: '0 auto', alignItems: 'flex-start' }}>
          
          {/* Left Column: Quick Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            {/* Email Card with One-Click Copy */}
            <TiltCard className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, marginBottom: '0.15rem' }}>Email Me</h4>
                    <a href={`mailto:${emailAddress}`} style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.9rem',
                    background: copied ? 'rgba(0, 237, 100, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: copied ? '1px solid rgba(0, 237, 100, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: copied ? '#00ed64' : 'var(--text-main)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </TiltCard>

            {/* Location Card */}
            <TiltCard className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c084fc'
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, marginBottom: '0.15rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    Nagpur & Mumbai, Maharashtra • Open to Relocation / Remote
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Direct Phone / WhatsApp Card */}
            <TiltCard className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(0, 237, 100, 0.1)',
                  border: '1px solid rgba(0, 237, 100, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ed64'
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, marginBottom: '0.15rem' }}>Phone & WhatsApp</h4>
                  <a href="tel:+919307704201" style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    +91-9307704201
                  </a>
                </div>
              </div>
            </TiltCard>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <TiltCard className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 237, 100, 0.1)',
                  border: '2px solid #00ed64',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem auto',
                  color: '#00ed64',
                  boxShadow: '0 0 25px rgba(0, 237, 100, 0.3)'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>Message Dispatched!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. Raj will review your inquiry and follow up promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.2rem' }}>
                  Send a Direct Message
                </h3>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s, background 0.2s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#38bdf8';
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s, background 0.2s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#38bdf8';
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your research project, role, or team..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s, background 0.2s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#38bdf8';
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <span>Transmit Message</span>
                  <Send size={17} />
                </button>
              </form>
            )}
          </TiltCard>

        </div>

      </div>
    </section>
  );
};

export default Contact;
