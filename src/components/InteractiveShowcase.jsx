import React from 'react';
import { Palette, Play, CheckCircle } from 'lucide-react';

const ACCENTS = [
  { name: 'Warm Gold', class: 'accent-gold', hex: '#D4AF37', desc: 'Elegant & timeless' },
  { name: 'Emerald', class: 'accent-emerald', hex: '#10B981', desc: 'Fresh & modern' },
  { name: 'Vivid Cyan', class: 'accent-cyan', hex: '#06B6D4', desc: 'Vibrant & digital' },
  { name: 'Rosewood', class: 'accent-rose', hex: '#F43F5E', desc: 'Edgy & expressive' }
];

export default function InteractiveShowcase({ activeAccent, onAccentChange }) {
  return (
    <section id="creative-lab" style={{ padding: '8rem 0', position: 'relative' }}>
      {/* Dynamic light gradient background that morphs with the accent */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-light) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: -1,
        pointerEvents: 'none',
        transition: 'background 0.5s',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="showcase-grid">
          
          {/* Information & Interactive Controls */}
          <div>
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
              marginBottom: '1.5rem',
            }}>
              <Palette size={14} style={{ color: 'var(--accent)', transition: 'color 0.5s' }} />
              <span>THE DESIGN LAB</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              letterSpacing: '-1px',
              marginBottom: '1.5rem',
              lineHeight: 1.15
            }}>
              Interactive Design System
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              fontWeight: 300
            }}>
              This component simulates a direct live interface prototype. Click any custom swatch to alter the global theme accent color instantly across headers, highlights, badges, and interfaces.
            </p>

            {/* Selector Grid */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              {ACCENTS.map((accent) => {
                const isActive = activeAccent === accent.class;
                return (
                  <div
                    key={accent.name}
                    onClick={() => onAccentChange(accent.class)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.2rem 1.8rem',
                      borderRadius: '12px',
                      backgroundColor: isActive ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                      border: isActive ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = 'var(--glass-border)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: accent.hex,
                        display: 'block',
                        boxShadow: `0 0 10px ${accent.hex}40`
                      }} />
                      <div>
                        <h4 style={{ fontWeight: 600, fontSize: '1rem', color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                          {accent.name}
                        </h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{accent.desc}</p>
                      </div>
                    </div>

                    {isActive && <CheckCircle size={18} style={{ color: 'var(--accent)', transition: 'color 0.5s' }} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Interface Mockup */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 30px 60px -30px rgba(0,0,0,0.8)',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '1.2rem',
              marginBottom: '1.8rem'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '1px' }}>PROTOTYPE VIEWER</span>
              <div style={{ display: 'flex', gap: '5px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                padding: '1.2rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>ACTIVE BRAND ACCENT</p>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '0.2rem' }}>
                    {ACCENTS.find(a => a.class === activeAccent)?.name || 'Warm Gold'}
                  </h3>
                </div>
                <Play size={18} style={{ color: 'var(--accent)', transition: 'color 0.5s' }} />
              </div>

              {/* Fake Micro dashboard details */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '10px',
                  borderLeft: '3px solid var(--accent)',
                  transition: 'border-color 0.5s'
                }}>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>CONVERSIONS</p>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.1rem' }}>+24.8%</h4>
                </div>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '10px',
                  borderLeft: '3px solid var(--accent)',
                  transition: 'border-color 0.5s'
                }}>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ENGAGEMENT</p>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.1rem' }}>98.2%</h4>
                </div>
              </div>

              {/* Aesthetic dummy text blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '0.5rem' }}>
                <span style={{ width: '40%', height: '8px', backgroundColor: 'var(--accent)', transition: 'background-color 0.5s', borderRadius: '4px', opacity: 0.6 }} />
                <span style={{ width: '85%', height: '8px', backgroundColor: 'var(--bg-primary)', borderRadius: '4px' }} />
                <span style={{ width: '65%', height: '8px', backgroundColor: 'var(--bg-primary)', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .showcase-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
