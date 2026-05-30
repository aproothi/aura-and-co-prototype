import React from 'react';
import { Check, Flame, Award, Gift } from 'lucide-react';

const TIERS = [
  {
    name: 'Bronze Package',
    alias: 'Classic Canvas',
    price: 39,
    icon: Gift,
    description: 'Perfect for casual painters, date nights, and group hangouts.',
    features: [
      'Standard 12x16 Cotton Canvas',
      'Full Acrylic Paints & Brushes',
      '2 Hours Guided Painting Session',
      'Complementary Glass of House Wine',
      'Apron & Setup Materials included'
    ],
    popular: false
  },
  {
    name: 'Silver Package',
    alias: 'Premium Glow',
    price: 55,
    icon: Flame,
    description: 'Our most popular setup featuring advanced paints and materials.',
    features: [
      'Premium 16x20 Cotton Canvas',
      'Advanced Acrylics & Metallic Paints',
      '2.5 Hours Extended Painting Session',
      'Two Glasses of Premium Selected Wine',
      'Take-home souvenir Artistry Tote Bag',
      'Custom Stencils for guided outlines'
    ],
    popular: true
  },
  {
    name: 'Gold Package',
    alias: 'VIP Masterclass',
    price: 89,
    icon: Award,
    description: 'A lavish private party experience with premium catering integration.',
    features: [
      'Large 18x24 Gallery Canvas',
      'Professional Grade Paints & Pastels',
      '3 Hours Private Session with Lead Artist',
      'Bottomless Wine & Champagne selection',
      'Gourmet Charcuterie & Dessert Platter',
      'Individual Professional Photo Shoot'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="packages" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.5s' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
          marginBottom: '5rem',
        }}>
          <span style={{
            fontSize: '0.9rem',
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}>TRANSPARENT VALUE</span>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            letterSpacing: '-1px',
            maxWidth: '700px'
          }}>
            Curated party packages for every creative flow
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', fontSize: '1.05rem', fontWeight: 300 }}>
            Pick a tier below or use our dynamic estimator to design your custom party package.
          </p>
        </div>

        {/* Pricing Card Grid */}
        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'stretch',
        }}>
          {TIERS.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <div 
                key={tier.name}
                style={{
                  backgroundColor: tier.popular ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
                  border: tier.popular ? '2px solid var(--accent)' : '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '3rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: tier.popular ? '0 20px 40px -20px var(--accent-light)' : 'none',
                  transition: 'var(--transition-smooth)'
                }}
                className="pricing-card"
              >
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    letterSpacing: '1px'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <IconComponent size={22} style={{ color: 'var(--accent)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>{tier.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.5px' }}>{tier.alias.toUpperCase()}</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '44px', fontWeight: 300 }}>
                  {tier.description}
                </p>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', marginBottom: '2.5rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-serif)', lineHeight: 1 }}>${tier.price}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ guest</span>
                </div>

                {/* Feature List */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', marginBottom: '3rem', flex: 1 }}>
                  {tier.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'start', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button CTA */}
                <a href="#book-party" style={{ display: 'block', width: '100%' }}>
                  <button style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '30px',
                    border: 'none',
                    backgroundColor: tier.popular ? 'var(--accent)' : 'var(--bg-tertiary)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = tier.popular ? 'var(--accent)' : 'var(--bg-tertiary)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.color = '#fff';
                  }}
                  >
                    Select Package
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .pricing-card:hover {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
