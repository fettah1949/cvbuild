export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: string;
  name: string;
}

export type ProficiencyLevel = 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';

export interface Language {
  id: string;
  name: string;
  proficiency: ProficiencyLevel;
}

export interface CVData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  profile: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
  hobbies: string[];
  awards: Award[];
  themeColor: string;
  template: 'modern' | 'simple' | 'elegant' | 'professional' | 'creative';
  photo?: string;
  jobTitle?: string;
  language: 'en' | 'fr' | 'es' | 'de';
}

export interface Award {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const initialCVData: CVData = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  summary: '',
  profile: '',
  experience: [],
  education: [],
  skills: [],
  languages: [],
  hobbies: [],
  awards: [],
  themeColor: '#3b82f6',
  template: 'modern',
  language: 'en',
};
