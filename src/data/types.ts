export interface PersonalInfo {
  name: string;
  jobTitle: string;
  tagline: string;
  gender: string;
  maritalStatus: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  profileImage: string;
}

export interface Contact {
  email: string;
  phone: string;
  city: string;
  country: string;
}

export interface SkillGroup {
  name: string;
  content: string[];
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities?: string[];
  isSecondaryJob?: boolean;
}

export interface Project {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  role: string;
  technologies: string[];
  link?: string;
  sourceCode?: string;
}

export interface Activity {
  name: string;
  startDate: string;
  endDate: string;
  responsibilities?: string[];
}

export interface OnlineProfile {
  name: string;
  link: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: number;
}

export interface Training {
  name: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface Education {
  name: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface CV {
  personalInfo: PersonalInfo;
  contact: Contact;
  intro: string;
  skills: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  activities: Activity[];
  onlineProfiles: OnlineProfile[];
  languages: LanguageItem[];
  trainings: Training[];
  educations: Education[];
}
