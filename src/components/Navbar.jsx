import React, { useState, useEffect } from 'react';
import { Menu, X, Wine } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    transition: 'var(--transition-smooth)',
    padding: scrolled ? '1rem 0' : '1.5rem 0',
    backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
  };

  const linkStyles = {
    position: 'relative',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    transition: 'var(--transition-fast)',
    cursor: 'pointer',
  };

  const btnStyles = {
    background: 'transparent',
    border: '1px solid var(--accent)',
    color: 'var(--text-primary)',
    padding: '0.6rem 1.2rem',
    borderRadius: '30px',
    fontSize: '0.9rem',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            letterSpacing: '-0.5px' 
          }}>
            ARTISTRY <span style={{ color: 'var(--accent)' }}>AVENUE</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
          {['Packages', 'Book Party', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="nav-link"
              style={linkStyles}
            >
              {item}
            </a>
          ))}
          <a href="#book-party">
            <button 
              style={btnStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              Book Event <Wine size={16} />
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'block', cursor: 'pointer' }} className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {['Packages', 'Book Party', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              style={{ fontSize: '1.1rem', fontWeight: 500 }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#book-party" onClick={() => setIsOpen(false)}>
            <button style={{ ...btnStyles, backgroundColor: 'var(--accent)', color: '#fff' }}>
              Book Event <Wine size={16} />
            </button>
          </a>
        </div>
      )}

      {/* Quick responsive overrides via embedded style tag */}
      <style>{`
        .desktop-menu { display: none !important; }
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent);
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-primary) !important;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
