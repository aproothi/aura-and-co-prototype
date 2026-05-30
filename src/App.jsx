import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BookingTool from './components/BookingTool';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Hero />
        <Pricing />
        <BookingTool />
        <Contact />
      </main>

      {/* Aesthetic Footer */}
      <footer style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--glass-border)',
        backgroundColor: 'var(--bg-primary)',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center'
        }} className="footer-flex">
          <span>&copy; {new Date().getFullYear()} ARTISTRY AVENUE STUDIO. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" className="footer-link">PRIVACY POLICY</a>
            <a href="#" className="footer-link">TERMS OF USE</a>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-link {
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--accent);
        }
        @media (min-width: 768px) {
          .footer-flex {
            flex-direction: row !important;
          }
        }
      `}</style>
    </div>
  );
}
