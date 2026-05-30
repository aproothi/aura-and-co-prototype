import React, { useState } from 'react';
import { Calendar, Users, GlassWater, Sparkles, CheckCircle2 } from 'lucide-react';

const PACKAGES = [
  { name: 'Bronze (Classic)', basePrice: 39 },
  { name: 'Silver (Premium)', basePrice: 55 },
  { name: 'Gold (VIP)', basePrice: 89 }
];

const UPGRADES = [
  { id: 'wine', name: 'Premium Wine Flight (4 pours)', price: 15 },
  { id: 'apron', name: 'Custom Embroidered Keepsake Apron', price: 12 },
  { id: 'frame', name: 'Custom Wooden Canvas Floating Frame', price: 18 }
];

export default function BookingTool() {
  const [selectedPack, setSelectedPack] = useState(PACKAGES[1]); // Default to Silver
  const [guests, setGuests] = useState(12);
  const [selectedUpgrades, setSelectedUpgrades] = useState([]);
  const [date, setDate] = useState('2026-06-12');
  const [confirmed, setConfirmed] = useState(false);

  const toggleUpgrade = (upgradeId) => {
    if (selectedUpgrades.includes(upgradeId)) {
      setSelectedUpgrades(selectedUpgrades.filter(id => id !== upgradeId));
    } else {
      setSelectedUpgrades([...selectedUpgrades, upgradeId]);
    }
  };

  const calculateSubtotal = () => {
    const baseTotal = selectedPack.basePrice * guests;
    const upgradeTotal = selectedUpgrades.reduce((sum, currentId) => {
      const upgrade = UPGRADES.find(u => u.id === currentId);
      return sum + (upgrade ? upgrade.price * guests : 0);
    }, 0);
    return baseTotal + upgradeTotal;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <section id="book-party" style={{ padding: '8rem 0', position: 'relative' }}>
      {/* Decorative ambient watercolor glow */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-light) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: -1,
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="booking-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Booking Tool Controls */}
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
              <Sparkles size={14} style={{ color: 'var(--accent)' }} />
              <span>INTERACTIVE BUILDER</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              letterSpacing: '-1px',
              marginBottom: '1.5rem',
              lineHeight: 1.15
            }}>
              Design your Paint &amp; Sip Party
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              fontWeight: 300
            }}>
              Select your package tier, drag to adjust guest counts, and toggle optional luxury items to calculate your custom reservation price immediately.
            </p>

            {confirmed ? (
              <div style={{
                padding: '3rem 2rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '16px',
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease forwards'
              }}>
                <CheckCircle2 size={48} style={{ color: 'var(--accent)', margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Reservation Pending!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '380px', margin: '0 auto 1.5rem auto' }}>
                  We've blocked out {date} for your paint party of {guests} guests. Check your inbox for confirmation.
                </p>
                <button
                  onClick={() => setConfirmed(false)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '20px',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  Edit Booking Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Package Selectors */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>SELECT TIER PACKAGE</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {PACKAGES.map((p) => {
                      const isActive = selectedPack.name === p.name;
                      return (
                        <button
                          key={p.name}
                          type="button"
                          onClick={() => setSelectedPack(p)}
                          style={{
                            padding: '1rem 0.5rem',
                            borderRadius: '12px',
                            backgroundColor: isActive ? 'var(--accent)' : 'var(--bg-secondary)',
                            color: isActive ? '#fff' : 'var(--text-secondary)',
                            border: isActive ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          {p.name.split(' ')[0]}
                          <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 400, opacity: 0.8, marginTop: '0.2rem' }}>${p.basePrice}/ea</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Guest Slider */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>GUEST COUNT</label>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>{guests} Painters</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="50"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: 'var(--accent)',
                      cursor: 'pointer',
                      height: '6px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: '3px'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <span>Min: 6 guests</span>
                    <span>Max: 50 guests</span>
                  </div>
                </div>

                {/* Calendar Date Selection */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label htmlFor="date" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>PARTY DATE</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="date"
                      id="date"
                      value={date}
                      required
                      onChange={(e) => setDate(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        padding: '1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Optional Upgrades */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>ADDITIONAL UPGRADES (PER GUEST)</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {UPGRADES.map((upgrade) => {
                      const isSelected = selectedUpgrades.includes(upgrade.id);
                      return (
                        <div
                          key={upgrade.id}
                          onClick={() => toggleUpgrade(upgrade.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '1rem',
                            borderRadius: '10px',
                            backgroundColor: isSelected ? 'rgba(var(--accent-rgb), 0.08)' : 'var(--bg-secondary)',
                            border: isSelected ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
                            cursor: 'pointer',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          <span style={{ fontSize: '0.9rem', color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                            {upgrade.name}
                          </span>
                          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)' }}>
                            +${upgrade.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Final Submit Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '1.2rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  Proceed with Booking
                </button>
              </form>
            )}
          </div>

          {/* Pricing Estimation Card */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 30px 60px -30px rgba(0,0,0,0.8)',
            position: 'sticky',
            top: '7rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              PRICE ESTIMATION SUMMARY
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Package Breakdown */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{selectedPack.name} Package ({guests} x ${selectedPack.basePrice})</span>
                <span style={{ fontWeight: 600 }}>${selectedPack.basePrice * guests}</span>
              </div>

              {/* Upgrades Breakdown */}
              {selectedUpgrades.map((uId) => {
                const upgrade = UPGRADES.find(u => u.id === uId);
                if (!upgrade) return null;
                return (
                  <div key={uId} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{upgrade.name} ({guests} x ${upgrade.price})</span>
                    <span style={{ fontWeight: 600 }}>${upgrade.price * guests}</span>
                  </div>
                );
              })}

              {/* Total Calculation */}
              <div style={{
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '1.5rem',
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
              }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Total Booking Est:</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--accent)' }}>
                  ${calculateSubtotal()}
                </span>
              </div>

              {/* Details details */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '1rem', backgroundColor: 'var(--bg-primary)', padding: '0.8rem', borderRadius: '8px' }}>
                <Calendar size={16} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Target Session Date: {date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .booking-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
