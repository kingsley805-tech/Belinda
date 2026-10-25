export interface ClinicalExperience {
  id: string;
  role: string;
  facility: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'hospital' | 'homecare' | 'internship';
  typeLabel: string;
  responsibilities: string[];
  keyCompetencies: string[];
}

export interface CompetencyGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  items: {
    name: string;
    description: string;
  }[];
}

export interface AcademicRecord {
  institution: string;
  location: string;
  degree: string;
  completionDate: string;
  honours?: string;
  standing?: string;
  highlights: string[];
}

export interface ProfessionalCredential {
  id: string;
  title: string;
  issuer: string;
  status: 'Active Clinical License' | 'Conferred Degree' | 'Academic Certificate' | 'Professional Specialization';
  issuedDate: string;
  verificationNote: string;
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  significance: string;
  isHero?: boolean;
  category: 'clinical' | 'academic' | 'leadership';
}

export interface ResearchInterest {
  id: string;
  title: string;
  subtitle: string;
  clinicalSignificance: string;
  futureFocus: string;
  tags: string[];
}

export interface CarePrinciple {
  number: string;
  title: string;
  description: string;
  clinicalApplication: string;
}
