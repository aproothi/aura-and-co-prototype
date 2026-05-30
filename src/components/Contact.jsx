import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate premium async transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.5s' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem'
        }} className="contact-grid">
          
          {/* Contact Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{
              fontSize: '0.9rem',
              color: 'var(--accent)',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              transition: 'color 0.5s'
            }}>PARTNER WITH US</span>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              letterSpacing: '-1px',
              marginBottom: '1.5rem',
              lineHeight: 1.15
            }}>
              Let’s create something breathtaking
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              fontWeight: 300
            }}>
              Have an idea, project blueprint, or design vision? Get in touch with our design leads today.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>DIRECT CONTACT</p>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500 }}>collaborate@auraand.co</h3>
            </div>
          </div>

          {/* Dynamic Form Panel */}
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {submitted ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '350px',
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease forwards'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transition: 'color 0.5s, background-color 0.5s'
                }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '300px' }}>
                  Our creative director will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                {/* Input Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '8px',
                      padding: '1rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                {/* Input Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '8px',
                      padding: '1rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                {/* Input Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>PROJECT DESCRIPTION</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand goals..."
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '8px',
                      padding: '1rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                      transition: 'var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '1.1rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px var(--accent-light)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isSubmitting ? 'Sending Request...' : <>Send Inquiry <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
