import React from 'react';
import { Download, ArrowRight, ChevronDown, ShieldCheck, HeartPulse, Stethoscope, Award, MapPin } from './Icons';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  openCVModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openCVModal }) => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        position: 'relative',
        paddingTop: 'clamp(2.5rem, 5vw, 5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Geometric Grid Lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, var(--border-color-subtle) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-color-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.65,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, #000 60%, transparent 100%)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2.5rem, 4vw, 4rem)',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Typography & Actions */}
          <div style={{ maxWidth: '680px' }}>
            
            {/* Live Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                marginBottom: '1.5rem',
                boxShadow: '0 2px 8px var(--teal-glow)'
              }}
            >
              <span className="live-pulse" />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--badge-text)',
                  letterSpacing: '0.01em'
                }}
              >
                {CANDIDATE_PROFILE.currentRole} · {CANDIDATE_PROFILE.currentFacility}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center' }}>
              <span className="eyebrow-dot" />
              <span>{CANDIDATE_PROFILE.heroEyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                marginBottom: '1.35rem',
                color: 'var(--text-primary)',
                fontWeight: 400
              }}
            >
              “Clinical excellence. Compassionate care. A commitment to every patient.”
            </h1>

            {/* Supporting Introduction */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2.25rem',
                maxWidth: '620px'
              }}
            >
              {CANDIDATE_PROFILE.heroSummary}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              <a href="#experience" className="btn btn-primary" id="hero-explore-btn">
                <span>Explore My Experience</span>
                <ArrowRight size={17} />
              </a>

              <button
                onClick={openCVModal}
                className="btn btn-secondary"
                id="hero-download-cv-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Download size={17} />
                <span>Download My CV</span>
              </button>

              <a
                href="#contact"
                className="btn btn-ghost"
                id="hero-contact-link"
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px'
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Quick Fact Micro-Indicators */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={17} className="text-teal" style={{ color: 'var(--teal)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  N&MC Ghana Licensed RGN
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={17} className="text-teal" style={{ color: 'var(--teal)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  First Class Honours (2023)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={17} className="text-teal" style={{ color: 'var(--teal)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Accra, Ghana
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Typographic Identity Crest & Interactive Clinical Composition */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow-hover)',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Ambient Radial Glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--teal-glow) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Header of the Identity Crest */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--navy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FAF8F3',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      border: '2px solid rgba(22, 125, 131, 0.45)',
                      boxShadow: '0 6px 16px rgba(16, 42, 67, 0.22)'
                    }}
                  >
                    BT
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.15rem', color: 'var(--text-primary)' }}>
                      Belinda Twumasiwaa
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600 }}>
                      Registered General Nurse
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--badge-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--teal)'
                  }}
                  title="Verified Clinical Professional"
                >
                  <ShieldCheck size={20} />
                </div>
              </div>

              {/* Dynamic ECG Cardiogram Rhythm Line (SVG) */}
              <div
                style={{
                  margin: '1.25rem 0',
                  padding: '1.15rem 1rem',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color-subtle)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Clinical Rhythm Monitor
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--teal)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <HeartPulse size={14} /> Active Practice
                  </span>
                </div>

                <svg viewBox="0 0 360 60" style={{ width: '100%', height: '52px', overflow: 'visible' }}>
                  {/* Subtle Grid line */}
                  <line x1="0" y1="30" x2="360" y2="30" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Cardiogram path with animated stroke */}
                  <path
                    d="M0,30 L40,30 L55,26 L65,34 L75,30 L110,30 L120,8 L130,52 L140,24 L148,34 L155,30 L210,30 L220,10 L230,50 L240,22 L248,32 L255,30 L310,30 L320,12 L330,48 L340,30 L360,30"
                    fill="none"
                    stroke="var(--teal)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ecg-line"
                  />
                </svg>
              </div>

              {/* Credential Data Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color-subtle)'
                  }}
                >
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Current Appointment</span>
                  <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Ghanaian-German Specialist Hospital
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color-subtle)'
                  }}
                >
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Academic Standing</span>
                  <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--teal)' }}>
                    First Class Honours · Top 10%
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color-subtle)'
                  }}
                >
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Leadership Distinction</span>
                  <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    NSA President (2022)
                  </span>
                </div>
              </div>

              {/* Verification Seal Footer */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Stethoscope size={15} style={{ color: 'var(--teal)' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    The Art of Care · Nursing Portfolio
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--teal)',
                    letterSpacing: '0.04em'
                  }}
                >
                  ACCRA · GH
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Restrained Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            opacity: 0.75
          }}
        >
          <a
            href="#highlights"
            aria-label="Scroll to Professional Highlights"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <span>Explore Credentials</span>
            <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
