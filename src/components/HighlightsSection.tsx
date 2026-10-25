import React from 'react';
import { PROFESSIONAL_HIGHLIGHTS } from '../data/portfolioData';
import { Award, GraduationCap, Building2, ShieldCheck, HeartPulse } from './Icons';

export const HighlightsSection: React.FC = () => {
  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0: return <GraduationCap size={22} />;
      case 1: return <Award size={22} />;
      case 2: return <HeartPulse size={22} />;
      case 3: return <ShieldCheck size={22} />;
      case 4: return <Building2 size={22} />;
      default: return <Award size={22} />;
    }
  };

  return (
    <section
      id="highlights"
      aria-label="Professional Highlights"
      style={{
        backgroundColor: 'var(--bg-subtle)',
        borderTop: '1px solid var(--border-color-subtle)',
        borderBottom: '1px solid var(--border-color-subtle)',
        padding: 'clamp(3rem, 5vw, 4.5rem) 0'
      }}
    >
      <div className="container">
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" />
            <span>Verified Career & Academic Distinctions</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', maxWidth: '680px', margin: '0 auto' }}>
            Distinction in Clinical Acumen and Academic Rigor
          </h2>
        </div>

        {/* 5-Column Responsive Highlight Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {PROFESSIONAL_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="card-surface"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem 1.5rem',
                borderLeft: index === 0 ? '3px solid var(--teal)' : '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Row: Icon & Source */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--badge-bg)',
                    color: 'var(--teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getIconForIndex(index)}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.source}
                </span>
              </div>

              {/* Oversized Numeral */}
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.2rem)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}
              >
                {item.numeral}
              </div>

              {/* Label & Description */}
              <div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem'
                  }}
                >
                  {item.label}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
