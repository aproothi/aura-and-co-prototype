import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Aetherial Platform',
    category: 'Brand Design',
    tag: 'Brand',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    size: 'tall'
  },
  {
    id: 2,
    title: 'Vesper Systems',
    category: 'Digital Interface',
    tag: 'Digital',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    size: 'wide'
  },
  {
    id: 3,
    title: 'Chronos Publication',
    category: 'Editorial Print',
    tag: 'Editorial',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    size: 'normal'
  },
  {
    id: 4,
    title: 'Lumina Spatial',
    category: 'Brand Design',
    tag: 'Brand',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    size: 'normal'
  },
  {
    id: 5,
    title: 'Nox Studio Space',
    category: 'Digital Interface',
    tag: 'Digital',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    size: 'wide'
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Digital', 'Brand', 'Editorial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tag === filter);

  return (
    <section id="portfolio" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.5s' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '4rem',
        }} className="portfolio-header">
          <span style={{
            fontSize: '0.9rem',
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            transition: 'color 0.5s'
          }}>SELECTED WORKS</span>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            letterSpacing: '-1px',
          }}>
            Pioneering beauty across platforms
          </h2>

          {/* Filters */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'var(--accent)' : 'transparent',
                  color: filter === cat ? '#000' : 'var(--text-secondary)',
                  border: filter === cat ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
        }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${project.size}`}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: project.size === 'wide' ? '16/10' : project.size === 'tall' ? '3/4' : '1/1',
                cursor: 'pointer',
                group: 'true',
              }}
            >
              {/* Main Image */}
              <img 
                src={project.image} 
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="project-image"
              />

              {/* Glassmorphic Overlay Details */}
              <div 
                className="project-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.4) 50%, rgba(15,15,15,0) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'end',
                  padding: '2.5rem',
                }}
              >
                <div style={{
                  transform: 'translateY(20px)',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'end',
                }} className="project-details">
                  <div>
                    <span style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      display: 'block',
                      transition: 'color 0.5s'
                    }}>
                      {project.category}
                    </span>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}>
                      {project.title}
                    </h3>
                  </div>

                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease, background-color 0.5s',
                  }} className="project-btn">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .project-card.wide {
            grid-column: span 2;
            aspect-ratio: 21/9 !important;
          }
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
        .project-card:hover .project-details {
          transform: translateY(0) !important;
        }
        .project-card:hover .project-btn {
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  );
}
