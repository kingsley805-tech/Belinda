import React from 'react';
import { BIOGRAPHY_CONTENT } from '../data/portfolioData';
import { HeartPulse, Stethoscope, BookOpen, ShieldCheck } from './Icons';

export const AboutSection: React.FC = () => {
  const pillarIcons = [<HeartPulse size={24} />, <Stethoscope size={24} />, <BookOpen size={24} />];

  return (
    <section id="about" className="section-padding" aria-label="About Belinda Twumasiwaa">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Professional Biography</span>
          </div>
          <h2>The Intersection of Clinical Precision and Human Empathy</h2>
          <p className="section-desc">
            A reflective overview of clinical training, practice philosophy, and the patient-first conviction that anchors Belinda's professional pathway.
          </p>
        </div>

        {/* Split-Screen Editorial Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start'
          }}
          className="about-split-grid"
        >
          {/* Left Column: Narrative Copy & Experience Foundations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {BIOGRAPHY_CONTENT.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8
                }}
              >
                {p}
              </p>
            ))}

            {/* Editorial Quote Callout */}
            <blockquote
              style={{
                marginTop: '1.25rem',
                padding: '1.75rem 2rem',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-subtle)',
                borderLeft: '4px solid var(--teal)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.18rem',
                color: 'var(--text-primary)',
                lineHeight: 1.6
              }}
            >
              “True healthcare begins the moment we see the human being behind the diagnosis. Rigorous clinical assessment and compassionate presence are not opposites—they are inseparable.”
              <footer
                style={{
                  marginTop: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  fontStyle: 'normal',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--teal)'
                }}
              >
                — Belinda Twumasiwaa, RGN
              </footer>
            </blockquote>

            {/* Quick Practice Attributes */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '0.5rem'
              }}
            >
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div style={{ color: 'var(--teal)' }}><ShieldCheck size={20} /></div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>Evidence-Informed</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Grounded in current clinical standards</div>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div style={{ color: 'var(--teal)' }}><BookOpen size={20} /></div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>Patient-Centered</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Respectful of individual dignity</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars of Professional Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--teal)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Core Foundations
              </span>
              <h3 style={{ fontSize: '1.45rem', marginTop: '0.35rem' }}>
                Three Tenets of Clinical Practice
              </h3>
            </div>

            {BIOGRAPHY_CONTENT.pillars.map((pillar, index) => (
              <div
                key={index}
                className="card-surface"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  borderLeft: '3px solid var(--teal)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--badge-bg)',
                      color: 'var(--teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {pillarIcons[index]}
                  </div>
                  <h4
                    style={{
                      fontSize: '1.15rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                  >
                    {pillar.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-split-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
