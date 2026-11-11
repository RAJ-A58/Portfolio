import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'experience', 'projects', 'competitive', 'skills', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contests & Stats', href: '#competitive', id: 'competitive' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      padding: isScrolled ? '0.75rem 0' : '1.35rem 0',
      background: isScrolled ? 'rgba(7, 7, 9, 0.82)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em' }}>
          <div style={{
            background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
            padding: '0.45rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.35)'
          }}>
            <Terminal size={20} strokeWidth={2.5} />
          </div>
          <span style={{ color: '#fff' }}>
            Raj Patil<span style={{ color: '#38bdf8' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Floating Navigation Island */}
        <nav style={{
          display: 'flex',
          gap: '0.4rem',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '50px',
          padding: '0.35rem 0.6rem',
          backdropFilter: 'blur(10px)'
        }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '0.45rem 1rem',
                  borderRadius: '30px',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 15px rgba(255, 255, 255, 0.08)' : 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="desktop-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem', borderRadius: '30px' }}
          >
            <Download size={15} />
            <span>Resume</span>
          </a>
          <a
            href="mailto:rajpatil280906@gmail.com"
            className="btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '30px' }}
          >
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            color: 'var(--text-main)',
            display: 'none',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(10, 11, 15, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: activeSection === link.id ? '#38bdf8' : 'var(--text-main)',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '0.5rem 0.8rem',
                borderRadius: '8px',
                background: activeSection === link.id ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
            <a
              href="mailto:rajpatil280906@gmail.com"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 950px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
