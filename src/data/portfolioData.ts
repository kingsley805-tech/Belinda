import type {
  ClinicalExperience,
  CompetencyGroup,
  AcademicRecord,
  ProfessionalCredential,
  AwardItem,
  ResearchInterest,
  CarePrinciple
} from '../types';

export const CANDIDATE_PROFILE = {
  fullName: "Belinda Twumasiwaa",
  title: "Registered General Nurse (RGN)",
  currentRole: "Nursing Officer",
  currentFacility: "Ghanaian-German Specialist Hospital",
  location: "Accra, Ghana",
  telephone: "+233 592878212",
  email: "twumasiwaabelinda57@gmail.com",
  linkedIn: "https://linkedin.com/in/belinda-twumasiwaa",
  cvDownloadPath: "/Belinda_Twumasiwaa_RGN_CV.pdf",
  heroEyebrow: "REGISTERED GENERAL NURSE · ACCRA, GHANA",
  heroHeadline: "Clinical excellence. Compassionate care. A commitment to every patient.",
  heroSummary:
    "I'm Belinda Twumasiwaa, a Registered General Nurse dedicated to delivering compassionate, patient-centered care through thoughtful assessment, clinical judgment, patient education, and collaboration with healthcare teams."
};

export const PROFESSIONAL_HIGHLIGHTS = [
  {
    numeral: "1st",
    label: "Class Honours",
    subtext: "B.Sc. in Nursing and Midwifery",
    source: "Pentecost University, Dec 2023"
  },
  {
    numeral: "10%",
    label: "Top Tier Standing",
    subtext: "Ranked in top decile of graduating class",
    source: "Academic Distinction"
  },
  {
    numeral: "2023",
    label: "Best Nursing Student",
    subtext: "Awarded for exceptional clinical & academic merit",
    source: "Departmental Honour"
  },
  {
    numeral: "2022",
    label: "NSA President",
    subtext: "President of the Nursing Students Association",
    source: "Leadership & Advocacy"
  },
  {
    numeral: "RGN",
    label: "Nursing Officer",
    subtext: "Ghanaian-German Specialist Hospital",
    source: "Active Clinical Practice"
  }
];

export const BIOGRAPHY_CONTENT = {
  paragraphs: [
    "Belinda Twumasiwaa is a dedicated Registered General Nurse (RGN) serving as a Nursing Officer at the Ghanaian-German Specialist Hospital in Accra, Ghana. Her journey in nursing is anchored in a deep commitment to high-standard clinical care, ethical responsibility, and the human dignity of every person who enters the healthcare space.",
    "Graduating with First Class Honours in Nursing and Midwifery from Pentecost University and ranking in the top 10% of her class, Belinda combines rigorous theoretical understanding with hands-on clinical acumen. Her versatile clinical pathway spans inpatient hospital wards, oncology units, outpatient clinics, mental health settings, and specialized home-based palliative care.",
    "Driven by the philosophy that optimal healing demands both clinical precision and genuine empathy, she actively advocates for comprehensive patient assessment, proactive infection prevention, structured patient and family health education, and lifelong inquiry into metabolic and genomic healthcare science."
  ],
  pillars: [
    {
      title: "Care that respects each patient's dignity",
      description:
        "Every patient is a whole individual with unique cultural, psychological, and physical needs. True nursing means preserving privacy, listening without preconception, and protecting patient autonomy through every phase of care."
    },
    {
      title: "Clinical decisions grounded in careful assessment",
      description:
        "Precise clinical outcomes rely on systematic observation, auscultation, palpation, and critical judgment. Early detection of subtle physiological shifts guides timely, evidence-grounded interventions."
    },
    {
      title: "Clear communication across the multidisciplinary team",
      description:
        "Healing requires a synchronized healthcare team. Belinda champions clear, empathetic dialogue with patients and families, paired with meticulous clinical recordkeeping and multidisciplinary collaboration."
    }
  ]
};

export const CLINICAL_EXPERIENCES: ClinicalExperience[] = [
  {
    id: "ggsh-nursing-officer",
    role: "Nursing Officer",
    facility: "Ghanaian-German Specialist Hospital",
    location: "Accra, Ghana",
    period: "January 2026 – Present",
    isCurrent: true,
    type: "hospital",
    typeLabel: "Active Position",
    responsibilities: [
      "Provide direct, high-standard nursing care to diverse inpatient and outpatient cohorts.",
      "Systematically assess patients and accurately identify dynamic healthcare and recovery needs.",
      "Plan appropriate, individualized patient care based on clinical assessment findings.",
      "Evaluate delivered care continually and monitor patient progress toward recovery milestones.",
      "Collaborate seamlessly with doctors, fellow nurses, and allied healthcare professionals in multidisciplinary care."
    ],
    keyCompetencies: [
      "Direct Patient Care",
      "Needs Assessment",
      "Individualized Care Planning",
      "Multidisciplinary Teamwork",
      "Care Evaluation"
    ]
  },
  {
    id: "ga-north-intern",
    role: "Professional Registered Nurse Intern",
    facility: "Ga North Municipal Hospital",
    location: "Ga North, Greater Accra",
    period: "December 2024 – December 2025",
    type: "hospital",
    typeLabel: "Rotational Practice",
    responsibilities: [
      "Observe, measure, and document patient vital signs with acute clinical attention.",
      "Administer chemotherapy treatments in accordance with safety protocols and clinical supervision requirements applicable to the role.",
      "Maintain rigorous patient records and meticulous clinical documentation.",
      "Support patient advocacy initiatives and facilitate clear, reassuring patient-nurse communication.",
      "Assist patients respectfully with activities of daily living (ADLs) during acute hospitalizations.",
      "Apply hospital infection prevention and control (IPC) protocols consistently across departments.",
      "Use appropriate body mechanics when assisting patients, mobilizing mobility-impaired individuals, and handling equipment."
    ],
    keyCompetencies: [
      "Vital Signs Monitoring",
      "Chemotherapy Administration (Supervised)",
      "Clinical Documentation",
      "Infection Prevention (IPC)",
      "Patient Advocacy",
      "Ergonomic Body Mechanics"
    ]
  },
  {
    id: "total-care-home",
    role: "General Nurse",
    facility: "Total Care Home Nursing Services",
    location: "Accra, Ghana",
    period: "November 2022 – October 2024",
    type: "homecare",
    typeLabel: "Specialized Palliative Care",
    responsibilities: [
      "Provide compassionate palliative care for patients living with chronic, complex, and life-limiting conditions.",
      "Assist patients gently with activities of daily living (ADLs) to preserve dignity and comfort at home.",
      "Provide aseptic wound care, track healing trajectories, and monitor chronic physiological indicators.",
      "Support specialized care regimens for patients with hypertension, diabetes mellitus, and cerebrovascular accident (CVA).",
      "Deliver tailored health education to patients and family caregivers regarding medication adherence, lifestyle adjustments, and symptom monitoring."
    ],
    keyCompetencies: [
      "Palliative & End-of-Life Care",
      "Chronic Disease Management (CVA, Diabetes, HTN)",
      "Aseptic Wound Care",
      "Caregiver Education",
      "Home Health Assessment"
    ]
  },
  {
    id: "accra-psych-intern",
    role: "Student Nurse Intern",
    facility: "Accra Psychiatry Hospital",
    location: "Accra, Ghana",
    period: "March 2023 – May 2023",
    type: "internship",
    typeLabel: "Mental Health Placement",
    responsibilities: [
      "Provide continuous reassurance and empathetic emotional support to psychiatric patients and their relatives.",
      "Conduct mental health assessments, observe behavioral patterns, and monitor baseline vital signs.",
      "Maintain a secure, calm, and therapeutic healing environment adhering to psychiatric safety standards.",
      "Educate patients and families on proper psychotropic medication administration and adherence routines at home.",
      "Support personal hygiene routines, fluid intake and output monitoring, and comprehensive discharge education."
    ],
    keyCompetencies: [
      "Therapeutic Communication",
      "Psychiatric Assessment",
      "Fluid Balance Monitoring",
      "Discharge Education",
      "De-escalation & Reassurance"
    ]
  },
  {
    id: "greater-accra-intern",
    role: "Student Nurse Intern",
    facility: "Greater Accra Regional Hospital (Ridge)",
    location: "Accra, Ghana",
    period: "January 2022 – March 2022",
    type: "internship",
    typeLabel: "Regional Hospital Placement",
    responsibilities: [
      "Monitor vital signs and capillary blood glucose levels, promptly reporting abnormalities to the supervising nursing officer.",
      "Provide psychological and emotional support to hospitalized patients and concerned families.",
      "Assist with enteral nutrition, dietary adherence, and patient feeding support.",
      "Perform thorough physical patient assessments using inspection, palpation, percussion, and auscultation.",
      "Provide sterile, aseptic wound dressing care and record precise clinical notes."
    ],
    keyCompetencies: [
      "Physical Assessment (Palpation/Auscultation)",
      "Blood Glucose Monitoring",
      "Aseptic Dressing Technique",
      "Nutritional Support",
      "Early Warning Recognition"
    ]
  },
  {
    id: "korle-bu-intern",
    role: "Student Nurse Intern",
    facility: "Korle-Bu Teaching Hospital",
    location: "Accra, Ghana",
    period: "May 2021 – October 2021",
    type: "internship",
    typeLabel: "Tertiary Teaching Hospital",
    responsibilities: [
      "Establish rapid rapport with patients across surgical and medical wards, offering clinical reassurance.",
      "Actively participate in the systematic nursing process and formulate holistic care plans centered on patient needs.",
      "Enforce rigorous teaching-hospital protocols for infection prevention, aseptic technique, and waste segregation.",
      "Participate actively in patient bedside teaching and family preventive healthcare guidance.",
      "Pursue continuous learning and clinical skills refinement under senior nursing leadership."
    ],
    keyCompetencies: [
      "Nursing Process & Care Planning",
      "Tertiary Ward Practice",
      "Hospital IPC Protocols",
      "Bedside Health Education",
      "Clinical Foundations"
    ]
  }
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    id: "patient-care",
    title: "Patient Care",
    subtitle: "Holistic, empathetic delivery focused on clinical recovery and patient comfort.",
    icon: "HeartPulse",
    items: [
      {
        name: "Patient Needs Assessment",
        description: "Structured evaluation of physical, psychological, and physiological patient requirements."
      },
      {
        name: "Patient Monitoring",
        description: "Continuous observation of clinical progress, trajectory tracking, and status stabilization."
      },
      {
        name: "Compassionate Care",
        description: "Empathetic, dignifying bedside manner prioritizing emotional security and individual comfort."
      },
      {
        name: "Patient Advocacy",
        description: "Upholding patient rights, ensuring informed understanding, and representing patient well-being."
      },
      {
        name: "Activities of Daily Living (ADLs)",
        description: "Assisting mobility-impaired and recovering individuals with hygiene, nutrition, and comfort."
      },
      {
        name: "Palliative Care",
        description: "Compassionate symptom management and pain relief for individuals with chronic or life-limiting conditions."
      },
      {
        name: "Wound Care",
        description: "Aseptic wound cleansing, dressing application, and monitoring of tissue regeneration."
      }
    ]
  },
  {
    id: "clinical-practice",
    title: "Clinical Practice",
    subtitle: "Evidence-grounded critical thinking, diagnostic observation, and safe clinical execution.",
    icon: "Stethoscope",
    items: [
      {
        name: "Clinical Judgment",
        description: "Translating physiological observations into sound, timely, and patient-centered clinical decisions."
      },
      {
        name: "Critical Thinking",
        description: "Analytical evaluation of clinical findings to identify underlying anomalies and guide care."
      },
      {
        name: "Decision-Making",
        description: "Calm, evidence-based prioritization during acute ward shifts and emergent situations."
      },
      {
        name: "Oncology Experience",
        description: "Administering chemotherapy treatments strictly under supervision with rigorous biosafety."
      },
      {
        name: "Infection Prevention & Control",
        description: "Standard precautions, aseptic techniques, barrier nursing, and hospital infection prevention."
      },
      {
        name: "Vital Signs Monitoring",
        description: "Accurate tracking and interpretation of blood pressure, heart rate, respiratory rate, and temperature."
      },
      {
        name: "Blood Glucose Monitoring",
        description: "Capillary blood glucose testing, glycemic trend analysis, and timely reporting."
      }
    ]
  },
  {
    id: "communication-education",
    title: "Communication & Education",
    subtitle: "Bridging clinical knowledge and compassionate clarity for patients and healthcare partners.",
    icon: "BookOpen",
    items: [
      {
        name: "Patient & Family Education",
        description: "Clear, culturally responsive guidance on disease processes, medication regimens, and self-care."
      },
      {
        name: "Clear Patient Communication",
        description: "Translating complex medical terminology into supportive, easily understandable dialogue."
      },
      {
        name: "Patient-Nurse Communication",
        description: "Building trusting, therapeutic relationships that foster openness and emotional comfort."
      },
      {
        name: "Health Promotion",
        description: "Educating communities and families on preventive healthcare, nutrition, and wellness."
      },
      {
        name: "Emotional Support",
        description: "Providing calming reassurance and psychological presence during moments of acute distress."
      }
    ]
  },
  {
    id: "documentation-practice",
    title: "Documentation & Professional Practice",
    subtitle: "Ethical accountability, institutional precision, and synchronized multidisciplinary care.",
    icon: "FileText",
    items: [
      {
        name: "Accurate Clinical Documentation",
        description: "Legally compliant, objective, and timely charting of nursing interventions and assessments."
      },
      {
        name: "Healthcare Management",
        description: "Coordinating ward workflows, bed utilization, and patient handover protocols efficiently."
      },
      {
        name: "Record Maintenance",
        description: "Confidential handling of physical and electronic medical records in compliance with privacy ethics."
      },
      {
        name: "Multidisciplinary Collaboration",
        description: "Synchronized cooperation with physicians, pharmacists, dietitians, and nursing colleagues."
      }
    ]
  }
];

export const EDUCATION_RECORDS: AcademicRecord[] = [
  {
    institution: "Pentecost University",
    location: "Sowutuom, Accra, Ghana",
    degree: "Bachelor of Science in Nursing and Midwifery",
    completionDate: "December 2023",
    honours: "First Class Honours in Nursing",
    standing: "Ranked in the top 10% of class",
    highlights: [
      "Awarded Best Nursing Student of the Year (2023).",
      "Elected President of the Nursing Students Association (NSA) (2022).",
      "Mastery of core disciplines: Adult Health Nursing, Maternal & Child Health, Pharmacology, Clinical Epidemiology, and Health Systems Administration.",
      "Active participant in community health outreach and peer clinical mentorship programs."
    ]
  },
  {
    institution: "Accra High School",
    location: "Accra, Ghana",
    degree: "West African Senior School Certificate Examination (WASSCE) - General Science",
    completionDate: "June 2019",
    honours: "Distinction in General Science",
    highlights: [
      "Elected Deputy Girl's Prefect (2018), overseeing student discipline and welfare.",
      "Recognized as Best Biology and Chemistry Student (2018).",
      "First Runner-Up, Inter-School Debate Championship (2017).",
      "Curriculum foundation in Advanced Biology, Chemistry, Physics, and Elective Mathematics."
    ]
  }
];

export const PROFESSIONAL_CREDENTIALS: ProfessionalCredential[] = [
  {
    id: "rgn-license",
    title: "Registered General Nurse (RGN)",
    issuer: "Nursing and Midwifery Council of Ghana (N&MC)",
    status: "Active Clinical License",
    issuedDate: "Verified Professional License",
    verificationNote: "Official professional license conferring practice authority across recognized healthcare institutions in Ghana."
  },
  {
    id: "bsc-nursing",
    title: "Bachelor of Science in Nursing and Midwifery",
    issuer: "Pentecost University, Accra",
    status: "Conferred Degree",
    issuedDate: "Conferred December 2023",
    verificationNote: "Graduated with First Class Honours, ranked in top 10% of graduating cohort."
  },
  {
    id: "wassce-cert",
    title: "West African Senior School Certificate (WASSCE)",
    issuer: "West African Examinations Council (WAEC)",
    status: "Academic Certificate",
    issuedDate: "Conferred June 2019",
    verificationNote: "General Science distinction with top academic honors in Biology and Chemistry."
  },
  {
    id: "google-specialization",
    title: "Google Digital Customer Engagement Specialization",
    issuer: "Google / Coursera",
    status: "Professional Specialization",
    issuedDate: "Verified Certificate",
    verificationNote: "Focused training in client-centric communication, empathetic interaction, and digital engagement standards."
  }
];

export const AWARDS_LEADERSHIP: AwardItem[] = [
  {
    year: "2023",
    title: "Best Nursing Student Award",
    organization: "Pentecost University, Department of Nursing",
    significance: "Awarded to the top-performing nursing graduate for supreme academic achievement, clinical precision, and leadership integrity.",
    isHero: true,
    category: "clinical"
  },
  {
    year: "2023",
    title: "First Class Honours in Nursing",
    organization: "Pentecost University",
    significance: "Conferred for sustaining exemplary academic merit throughout the 4-year B.Sc. Nursing & Midwifery program.",
    isHero: false,
    category: "academic"
  },
  {
    year: "2022",
    title: "President, Nursing Students Association (NSA)",
    organization: "Pentecost University NSA",
    significance: "Elected by student body to lead academic advocacy, represent student nurses before faculty boards, and coordinate clinical development forums.",
    isHero: false,
    category: "leadership"
  },
  {
    year: "2018",
    title: "Deputy Girl's Prefect",
    organization: "Accra High School",
    significance: "Entrusted with high-level school-wide student administration, pastoral care, and institution-wide event management.",
    isHero: false,
    category: "leadership"
  },
  {
    year: "2018",
    title: "Best Biology and Chemistry Student",
    organization: "Accra High School Science Department",
    significance: "Annual science faculty award presented for superior performance in experimental biology, biochemical concepts, and analytical chemistry.",
    isHero: false,
    category: "academic"
  },
  {
    year: "2017",
    title: "Debate Competition First Runner-Up",
    organization: "Inter-School Debate Championship",
    significance: "Recognized for persuasive rhetoric, logical structuring of complex arguments, and public advocacy.",
    isHero: false,
    category: "leadership"
  }
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    id: "cancer-genetics",
    title: "Cancer Genetics and Metabolism",
    subtitle: "Translating oncologic metabolic pathways into supportive nursing care.",
    clinicalSignificance:
      "Deepening the scientific understanding of how oncogenic alterations reprogram cellular glucose, lipid, and amino acid metabolism. In clinical practice, this guides personalized oncology nursing, symptom relief during chemotherapy, and the physiological tracking of cachexia and treatment toxicity.",
    futureFocus:
      "Investigating metabolic vulnerabilities in solid tumors to optimize supportive oncology care and nutrition-based supportive therapies during chemo regimens.",
    tags: ["Oncology", "Cellular Metabolism", "Warburg Effect", "Targeted Therapy", "Patient Toxicity"]
  },
  {
    id: "genomics-bioinformatics",
    title: "Functional Genomics and Bioinformatics",
    subtitle: "Leveraging computational insights for tailored patient care.",
    clinicalSignificance:
      "Applying genomic data analysis to understand individual susceptibilities, pharmacogenomic drug responses, and hereditary disease patterns. Fosters precision nursing where treatments and education are tuned to individual biological profiles.",
    futureFocus:
      "Exploring bioinformatics pipelines that decode gene-environment interactions in chronic non-communicable diseases prevalent in West Africa.",
    tags: ["Pharmacogenomics", "Data Pipelines", "Precision Medicine", "Genetic Predisposition", "Bioinformatics"]
  },
  {
    id: "diabetes-metabolism",
    title: "Diabetes, Interactions in Diet, Nutrition and Metabolism",
    subtitle: "Evidence-informed nutritional biochemistry for glycemic management.",
    clinicalSignificance:
      "Examining the metabolic cross-talk between dietary macronutrients, insulin sensitivity, and long-term vascular complications. Supports proactive clinical counseling, diabetic foot prevention, and culturally resonant nutritional regimens for Ghanaian patients.",
    futureFocus:
      "Designing evidence-based dietary interventions that blend indigenous Ghanaian staples with optimal glycemic index balance to prevent secondary diabetic complications.",
    tags: ["Type 2 Diabetes", "Insulin Sensitivity", "Nutritional Biochemistry", "Preventive Health", "Glycemic Stability"]
  }
];

export const CARE_PRINCIPLES: CarePrinciple[] = [
  {
    number: "01",
    title: "Compassion before assumptions",
    description: "Every patient arrives with unique vulnerability. Approaching each bedside with genuine empathy and an open mind unlocks trust and psychological safety.",
    clinicalApplication: "Active empathetic listening during triage and daily rounds, validating fears and addressing emotional distress alongside physiological symptoms."
  },
  {
    number: "02",
    title: "Careful assessment before care planning",
    description: "Sound nursing interventions are never guesswork; they are born from thorough inspection, palpation, auscultation, and clinical vigilance.",
    clinicalApplication: "Meticulous baseline vital sign collection, comprehensive physical assessments, and tracking early trajectory changes before complications escalate."
  },
  {
    number: "03",
    title: "Clear communication throughout the care journey",
    description: "Transparency demystifies hospital procedures, relieves acute anxiety, and empowers patients and families to become active partners in healing.",
    clinicalApplication: "Explaining medication purposes, anticipated sensations, and post-discharge self-care instructions in simple, reassuring, and culturally respectful terms."
  },
  {
    number: "04",
    title: "Dignity, privacy, and respect for patients",
    description: "Healthcare often exposes individuals to physical and emotional vulnerability. Preserving modesty and respecting personal values is non-negotiable.",
    clinicalApplication: "Ensuring proper curtain shielding, confidential charting, obtaining informed assent, and honoring individual religious and personal preferences."
  },
  {
    number: "05",
    title: "Collaboration with other healthcare professionals",
    description: "Outstanding patient outcomes are the collective achievement of doctors, nurses, pharmacists, laboratory scientists, and care aides working in sync.",
    clinicalApplication: "Clear, structured clinical handovers (e.g., SBAR method), immediate reporting of vital anomalies, and cross-functional problem-solving on ward rounds."
  },
  {
    number: "06",
    title: "Continuous learning and responsible clinical practice",
    description: "Medicine is dynamic. Upholding patient safety demands an insatiable hunger for updated clinical protocols, evidence, and self-reflection.",
    clinicalApplication: "Engaging in ongoing clinical education, reviewing current oncology and nursing journals, and integrating verified evidence into daily patient protocols."
  }
];
