import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const sectionStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: '8rem',
    paddingBottom: '4rem',
    overflow: 'hidden',
  };

  return (
    <section style={sectionStyles} className="animate-fade-in">
      {/* Decorative blurred background shapes */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-light) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: -1,
        pointerEvents: 'none',
        transition: 'background 0.5s',
      }} />

      <div className="container">
        {/* Dynamic Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--glass-border)',
          padding: '0.5rem 1rem',
          borderRadius: '30px',
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
        }}>
          <Sparkles size={14} style={{ color: 'var(--accent)', transition: 'color 0.5s' }} />
          <span>INNOVATION DRIVES ARTISTRY</span>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          lineHeight: '1.05',
          fontWeight: 400,
          letterSpacing: '-2px',
          marginBottom: '2rem',
          maxWidth: '1000px',
        }}>
          Crafting <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600 }}>dynamic digital</span> masterpieces that elevate your <span style={{
            position: 'relative',
            display: 'inline-block',
            padding: '0 0.2ch',
          }}>
            brand identity
            <span style={{
              position: 'absolute',
              bottom: '10%',
              left: 0,
              width: '100%',
              height: '4px',
              backgroundColor: 'var(--accent)',
              zIndex: -1,
              opacity: 0.3,
              borderRadius: '2px',
              transition: 'background-color 0.5s',
            }} />
          </span>
        </h1>

        {/* Subtitle & CTA Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          marginTop: '3rem',
          alignItems: 'start',
        }} className="hero-footer-grid">
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            maxWidth: '540px',
            fontWeight: 300,
          }}>
            We partner with visionary companies to build exquisite, high-performance interfaces, tactile digital systems, and visual narratives.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#portfolio">
              <button style={{
                backgroundColor: 'var(--accent)',
                color: '#000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '40px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: '0 10px 30px -10px var(--accent-light)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 35px -5px var(--accent-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px var(--accent-light)';
              }}
              >
                Explore Works
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        letterSpacing: '1px',
      }} className="animate-float">
        <span>SCROLL DOWN</span>
        <ArrowDown size={14} />
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-footer-grid {
            grid-template-columns: 2fr 1fr;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
