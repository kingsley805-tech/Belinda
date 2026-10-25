import { useEffect, useMemo, useState } from 'react';
import type { PointerEvent } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

type Experience = {
  role: string;
  facility: string;
  period: string;
  category: 'Current Role' | 'Professional Nursing' | 'Student Placement';
  responsibilities: string[];
};

type Highlight = {
  value: string;
  label: string;
  detail: string;
};

const cvPath = '/Belinda_Twumasiwaa_RGN_CV.pdf';
const portraitPath = '/belinda-portrait.jpg';

const experiences: Experience[] = [
  {
    role: 'Nursing Officer',
    facility: 'Ghanaian-German Specialist Hospital',
    period: 'January 2026 - Present',
    category: 'Current Role',
    responsibilities: [
      'Provide direct nursing care to patients.',
      'Assess patients and identify their healthcare needs.',
      'Plan appropriate care based on assessment findings.',
      'Evaluate care and monitor patient progress.',
      'Collaborate with doctors, nurses, and other healthcare professionals.'
    ]
  },
  {
    role: 'Professional Registered Nurse Intern',
    facility: 'Ga North Municipal Hospital',
    period: 'December 2024 - December 2025',
    category: 'Professional Nursing',
    responsibilities: [
      'Observe and monitor patient vital signs.',
      'Administer chemotherapy treatments in accordance with relevant safety protocols and the responsibilities of the role.',
      'Maintain patient records and clinical documentation.',
      'Support patient advocacy and communication between patients and nurses.',
      'Assist patients with activities of daily living.',
      'Apply infection prevention and control practices.',
      'Use appropriate body mechanics when assisting patients and handling equipment.'
    ]
  },
  {
    role: 'General Nurse',
    facility: 'Total Care Home Nursing Services, Accra',
    period: 'November 2022 - October 2024',
    category: 'Professional Nursing',
    responsibilities: [
      'Provide compassionate palliative care to patients with chronic and life-limiting conditions.',
      'Assist patients with activities of daily living.',
      'Provide wound care and monitor patient conditions.',
      'Support the management of hypertension, diabetes, and cerebrovascular accident (CVA).',
      'Provide health education to patients and families.'
    ]
  },
  {
    role: 'Student Nurse Intern',
    facility: 'Accra Psychiatry Hospital',
    period: 'March 2023 - May 2023',
    category: 'Student Placement',
    responsibilities: [
      'Provide reassurance to patients and relatives.',
      'Assess patients and monitor vital signs.',
      'Maintain a safe and comfortable environment.',
      'Educate patients and families about medication administration at home.',
      'Support personal hygiene and monitor fluid intake and output.',
      'Participate in discharge planning and patient education.'
    ]
  },
  {
    role: 'Student Nurse Intern',
    facility: 'Greater Accra Regional Hospital',
    period: 'January 2022 - March 2022',
    category: 'Student Placement',
    responsibilities: [
      'Monitor vital signs and blood glucose levels.',
      'Report abnormalities to the supervising nurse.',
      'Provide emotional support to patients and families.',
      'Assist with patient nutrition and feeding.',
      'Perform physical assessments using observation, percussion, auscultation, and palpation.',
      'Perform aseptic wound care and maintain patient documentation.'
    ]
  },
  {
    role: 'Student Nurse Intern',
    facility: 'Korle-Bu Teaching Hospital',
    period: 'May 2021 - October 2021',
    category: 'Student Placement',
    responsibilities: [
      'Establish rapport with patients and provide reassurance.',
      'Participate in the nursing process and care planning.',
      'Support care planning based on patient problems.',
      'Follow infection prevention and control procedures.',
      'Participate in patient and family education.',
      'Pursue continuous learning to enhance nursing knowledge and skills.'
    ]
  }
];

const highlights: Highlight[] = [
  {
    value: '1st',
    label: 'First Class Honours',
    detail: 'Bachelor of Science in Nursing and Midwifery, 2023.'
  },
  {
    value: '10%',
    label: 'Top Class Standing',
    detail: 'Ranked in the top 10% of her class.'
  },
  {
    value: '2023',
    label: 'Best Nursing Student',
    detail: 'Awarded Best Nursing Student.'
  },
  {
    value: '2022',
    label: 'NSA President',
    detail: 'President of the Nursing Students Association.'
  },
  {
    value: 'RGN',
    label: 'Nursing Officer',
    detail: 'Ghanaian-German Specialist Hospital.'
  }
];

const competencyGroups = [
  {
    id: 'patient-care',
    title: 'Patient Care',
    intro: 'Respectful bedside care anchored in assessment, advocacy, comfort, and education.',
    items: [
      'Patient needs assessment',
      'Compassionate care',
      'Patient advocacy',
      'Patient and family education',
      'Palliative care',
      'Wound care',
      'Patient monitoring'
    ]
  },
  {
    id: 'clinical-knowledge',
    title: 'Clinical Knowledge',
    intro: 'Practical clinical judgment across monitoring, oncology exposure, IPC, and decision-making.',
    items: [
      'Oncology',
      'Vital signs monitoring',
      'Blood glucose monitoring',
      'Infection prevention and control',
      'Clinical judgment',
      'Critical thinking',
      'Decision-making'
    ]
  },
  {
    id: 'healthcare-communication',
    title: 'Healthcare Communication',
    intro: 'Clear, calm communication that supports patients, families, and nursing teams.',
    items: [
      'Clear patient communication',
      'Patient-nurse communication',
      'Health promotion',
      'Patient and family education'
    ]
  },
  {
    id: 'professional-practice',
    title: 'Professional Practice',
    intro: 'Reliable documentation, record maintenance, and multidisciplinary collaboration.',
    items: [
      'Healthcare management',
      'Clinical documentation',
      'Accurate record maintenance',
      'Collaboration with healthcare professionals'
    ]
  }
];

const awards = [
  'First Class Honours in Nursing, 2023.',
  'Best Nursing Student, 2023.',
  'President of the Nursing Students Association, 2022.',
  "Deputy Girl's Prefect, 2018.",
  'Best Biology and Chemistry Student, 2018.',
  'First runner-up in a debate competition, 2017.'
];

const researchInterests = [
  {
    title: 'Cancer Genetics and Metabolism',
    description: 'A documented research interest in cancer biology, metabolism, and oncology-related learning.',
    label: 'Oncology science'
  },
  {
    title: 'Functional Genomics and Bioinformatics',
    description: 'A documented research interest in genomic insight, data-oriented biology, and precision health.',
    label: 'Molecular systems'
  },
  {
    title: 'Diabetes, Interactions in Diet, Nutrition and Metabolism',
    description: 'A documented research interest in nutrition, metabolism, diabetes care, and health education.',
    label: 'Metabolic health'
  }
];

const carePrinciples = [
  'Treat every patient with dignity and respect.',
  'Listen carefully and communicate clearly.',
  'Monitor patient conditions attentively.',
  'Support patients and families through education and reassurance.',
  'Maintain accurate documentation and professional responsibility.',
  'Work collaboratively with the healthcare team.',
  'Continue learning and improving nursing practice.'
];

function App() {
  const [activeExperience, setActiveExperience] = useState(experiences[0].facility);
  const [activeCompetency, setActiveCompetency] = useState(competencyGroups[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      offset: 80,
      once: false,
      mirror: false,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });

    const refresh = window.setTimeout(() => AOS.refreshHard(), 250);
    return () => window.clearTimeout(refresh);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.14 }
    );

    const revealTargets = document.querySelectorAll('.reveal:not([data-aos])');
    revealTargets.forEach((el) => observer.observe(el));

    return () => {
      revealTargets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeExperience, activeCompetency, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [mobileOpen]);

  const activeRole = useMemo(
    () => experiences.find((item) => item.facility === activeExperience) ?? experiences[0],
    [activeExperience]
  );

  const activeGroup = useMemo(
    () => competencyGroups.find((group) => group.id === activeCompetency) ?? competencyGroups[0],
    [activeCompetency]
  );

  const handleHeroPointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    event.currentTarget.style.setProperty('--hero-x', `${x}px`);
    event.currentTarget.style.setProperty('--hero-y', `${y}px`);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('twumasiwaabelinda57@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = 'mailto:twumasiwaabelinda57@gmail.com';
    }
  };

  return (
    <div className="portfolio-root">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div aria-hidden="true" className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header className="top-nav">
        <div className="container nav-inner">
          <a href="#hero" className="brand">
            <span className="brand-mark">BT</span>
            <span>
              <strong>BELINDA TWUMASIWAA</strong>
              <small>Registered General Nurse</small>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#introduction">Introduction</a>
            <a href="#highlights">Highlights</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Competence</a>
            <a href="#education">Education</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="menu-btn" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen}>
            Menu
          </button>
        </div>
        {mobileOpen && (
          <div className="mobile-panel">
            <a href="#introduction" onClick={() => setMobileOpen(false)}>Introduction</a>
            <a href="#highlights" onClick={() => setMobileOpen(false)}>Highlights</a>
            <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setMobileOpen(false)}>Competence</a>
            <a href="#education" onClick={() => setMobileOpen(false)}>Education</a>
            <a href="#research" onClick={() => setMobileOpen(false)}>Research</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="hero section-padding" onPointerMove={handleHeroPointer}>
          <div className="hero-backdrop" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="container hero-grid">
            <div className="hero-copy-block reveal" data-aos="fade-right">
              <p className="eyebrow"><span className="eyebrow-dot" /> The Art of Nursing</p>
              <h1>BELINDA TWUMASIWAA</h1>
              <p className="hero-location">Registered General Nurse | Nursing Officer - Accra, Ghana</p>
              <h2 className="hero-quote">Compassion in every interaction. Excellence in every aspect of care.</h2>
              <p className="hero-copy">
                Dedicated to patient-centered nursing, thoughtful clinical assessment, health education, and compassionate care that respects the dignity of every patient.
              </p>
              <div className="hero-actions">
                <a href="#experience" className="btn btn-primary">Explore My Nursing Journey</a>
                <a href={cvPath} className="btn btn-secondary" target="_blank" rel="noreferrer">View My CV</a>
              </div>
              <div className="hero-proof" aria-label="Professional highlights">
                <span>Nursing Officer</span>
                <span>First Class Honours</span>
                <span>Best Nursing Student 2023</span>
              </div>
            </div>

            <div className="portrait-composition reveal" data-aos="fade-left" data-aos-delay="160">
              <figure className="hero-portrait">
                <img src={portraitPath} alt="Professional portrait of Belinda Twumasiwaa" loading="eager" />
              </figure>
              <div className="clinical-id-card">
                <span className="id-kicker">Professional Portfolio</span>
                <strong>Registered General Nurse</strong>
                <small>Ghanaian-German Specialist Hospital</small>
              </div>
              <div className="ecg-card" aria-hidden="true">
                <svg viewBox="0 0 260 58" role="img">
                  <path d="M0 31H38l9-9 9 18 15-34 20 53 13-28h36l8-13 12 25 13-12h87" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="introduction" className="section-padding">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Professional Introduction</p>
              <h2>Clinical excellence rooted in compassion and respectful care</h2>
            </div>
            <div className="intro-grid">
              <div className="intro-manifesto reveal" data-aos="clip-reveal">
                <span>01</span>
                <h3>Clinical presence, careful observation, and human dignity.</h3>
              </div>
              <div className="intro-narrative card-surface reveal" data-aos="fade-up" data-aos-delay="120">
                <p>
                  Belinda Twumasiwaa is a Registered General Nurse based in Accra, Ghana, currently serving as a Nursing Officer at Ghanaian-German Specialist Hospital.
                  Her clinical background includes hospital nursing, home nursing, patient assessment, palliative care, oncology-related practice, wound care, health education, and professional documentation.
                </p>
                <p>
                  Her approach to practice centers on compassionate and respectful patient care, careful monitoring, clear communication with patients and families,
                  patient advocacy, infection prevention, and strong collaboration with multidisciplinary healthcare professionals.
                </p>
                <p>
                  She remains committed to continuous professional learning while supporting safe, ethical, and patient-centered nursing practice.
                </p>
              </div>
              <ul className="theme-list intro-principles reveal" data-aos="fade-left" data-aos-delay="180">
                <li>Compassionate and respectful patient care</li>
                <li>Careful patient assessment and monitoring</li>
                <li>Clear communication with patients and families</li>
                <li>Patient advocacy and health education</li>
                <li>Infection prevention and safe nursing practice</li>
                <li>Collaboration with healthcare professionals</li>
                <li>Continuous professional learning</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="highlights" className="section-padding section-toned">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Academic Excellence and Professional Highlights</p>
              <h2>Distinction, leadership, and active clinical service</h2>
            </div>
            <div className="highlight-layout">
              <article className="highlight-feature reveal" data-aos="zoom-in">
                <p className="big-number">1st</p>
                <span className="label-line">Academic distinction</span>
                <h3>First Class Honours in Nursing, 2023</h3>
                <p>Pentecost University - ranked in the top 10% of her class.</p>
              </article>
              <div className="highlight-list">
                {highlights.slice(1).map((item) => (
                  <article className="metric-card reveal" key={item.label} data-aos="fade-up">
                    <span>{item.value}</span>
                    <h4>{item.label}</h4>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-padding">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Professional Nursing Experience</p>
              <h2>An interactive timeline of hospital, home, and student practice</h2>
            </div>
            <div className="experience-grid">
              <div className="timeline reveal" data-aos="fade-right">
                {experiences.map((item) => (
                  <button
                    key={`${item.facility}-${item.period}`}
                    className={`timeline-item ${activeExperience === item.facility ? 'active' : ''}`}
                    onClick={() => setActiveExperience(item.facility)}
                  >
                    <span className="timeline-tag">{item.category}</span>
                    <strong>{item.role}</strong>
                    <span>{item.facility}</span>
                    <small>{item.period}</small>
                  </button>
                ))}
              </div>
              <article className="experience-detail card-surface reveal" data-aos="fade-left" data-aos-delay="120">
                <div className="experience-detail-top">
                  <p className="pill">{activeRole.category}</p>
                  <span>Selected role</span>
                </div>
                <h3>{activeRole.role}</h3>
                <p className="detail-facility">{activeRole.facility}</p>
                <p className="detail-period">{activeRole.period}</p>
                <ul>
                  {activeRole.responsibilities.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section-padding section-toned">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Clinical Skills and Areas of Competence</p>
              <h2>Interactive clinical competency categories</h2>
            </div>
            <div className="skills-wrap reveal" data-aos="fade-up">
              <div className="skill-tabs">
                {competencyGroups.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setActiveCompetency(group.id)}
                    className={activeCompetency === group.id ? 'is-active' : ''}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
              <div className="skill-panel card-surface">
                <h3>{activeGroup.title}</h3>
                <p>{activeGroup.intro}</p>
                <ul>
                  {activeGroup.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-padding">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Education and Qualifications</p>
              <h2>Academic timeline and professional credentials</h2>
            </div>
            <div className="education-grid">
              <article className="card-surface reveal" data-aos="fade-up">
                <span className="label-line">University education</span>
                <h3>Pentecost University</h3>
                <p>Bachelor of Science in Nursing and Midwifery</p>
                <p>Completed December 2023</p>
                <ul>
                  <li>First Class Honours in Nursing.</li>
                  <li>Ranked in the top 10% of her class.</li>
                </ul>
              </article>
              <article className="card-surface reveal" data-aos="fade-up" data-aos-delay="100">
                <span className="label-line">Secondary education</span>
                <h3>Accra High School, Accra</h3>
                <p>General Science</p>
                <p>Completed June 2019.</p>
              </article>
              <article className="credentials-card card-surface reveal" data-aos="fade-up" data-aos-delay="200">
                <span className="label-line">Professional credentials</span>
                <h3>Certifications and Credentials</h3>
                <ul>
                  <li>Bachelor of Science in Nursing.</li>
                  <li>Registered General Nurse.</li>
                  <li>WASSCE Certificate.</li>
                  <li>Google Digital Customer Engagement Specialization.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="awards" className="section-padding section-toned">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Awards and Leadership</p>
              <h2>Academic distinction and leadership journey</h2>
            </div>
            <div className="awards-editorial reveal" data-aos="fade-up">
              <article className="award-hero">
                <span className="label-line">Featured distinction</span>
                <h3>Best Nursing Student, 2023</h3>
                <p>Pentecost University. Presented here as a documented academic and nursing distinction from the CV.</p>
              </article>
              <ul>
                {awards.map((award) => <li key={award}>{award}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="research" className="section-padding">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Healthcare and Research Interests</p>
              <h2>Documented scientific interests in nursing and metabolic health</h2>
            </div>
            <div className="research-grid">
              {researchInterests.map((interest, index) => (
                <article
                  className={`research-card reveal pattern-${index + 1}`}
                  key={interest.title}
                  data-aos="flip-up"
                  data-aos-delay={String(index * 120)}
                >
                  <span className="research-orbit" aria-hidden="true" />
                  <p className="label-line">{interest.label}</p>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="section-padding section-toned">
          <div className="container philosophy-wrap reveal" data-aos="zoom-in">
            <p className="eyebrow"><span className="eyebrow-dot" /> A Philosophy of Compassionate Care</p>
            <h2>Quality nursing care begins with understanding the person behind the patient.</h2>
            <ul className="theme-list">
              {carePrinciples.map((principle) => <li key={principle}>{principle}</li>)}
            </ul>
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="container">
            <div className="section-header reveal" data-aos="fade-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Professional Contact</p>
              <h2>Let's connect in the service of better healthcare.</h2>
            </div>
            <div className="contact-grid">
              <article className="card-surface reveal" data-aos="fade-up">
                <span className="label-line">Professional inquiries</span>
                <h3>Belinda Twumasiwaa</h3>
                <p>Registered General Nurse</p>
                <p>Accra, Ghana</p>
                <a href="tel:+233592878212">+233 592878212</a>
                <a href="mailto:twumasiwaabelinda57@gmail.com">twumasiwaabelinda57@gmail.com</a>
                <a href="https://linkedin.com/in/belinda-twumasiwaa" target="_blank" rel="noreferrer">
                  linkedin.com/in/belinda-twumasiwaa
                </a>
                <div className="contact-actions">
                  <a href={cvPath} className="btn btn-primary" download>Download CV</a>
                  <button className="btn btn-secondary" onClick={copyEmail}>{copied ? 'Email Copied' : 'Copy Email'}</button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
