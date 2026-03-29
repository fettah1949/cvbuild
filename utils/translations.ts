export type Language = 'en' | 'fr' | 'es' | 'de';

export interface CVLabels {
  contact: string;
  skills: string;
  languages: string;
  hobbies: string;
  experience: string;
  education: string;
  awards: string;
  profile: string;
  achievements: string;
  about: string;
  professional: string;
  simple: string;
  elegant: string;
  creative: string;
  modern: string;
}

export const translations: Record<Language, CVLabels> = {
  en: {
    contact: 'Contact',
    skills: 'Skills',
    languages: 'Languages',
    hobbies: 'Hobbies',
    experience: 'Experience',
    education: 'Education',
    awards: 'Awards',
    profile: 'Profile',
    achievements: 'Achievements',
    about: 'About',
    professional: 'Professional',
    simple: 'Simple',
    elegant: 'Elegant',
    creative: 'Creative',
    modern: 'Modern'
  },
  fr: {
    contact: 'Contact',
    skills: 'Compétences',
    languages: 'Langues',
    hobbies: 'Centres d\'intérêt',
    experience: 'Expérience',
    education: 'Formation',
    awards: 'Distinctions',
    profile: 'Profil',
    achievements: 'Réalisations',
    about: 'À propos',
    professional: 'Professionnel',
    simple: 'Simple',
    elegant: 'Élégant',
    creative: 'Créatif',
    modern: 'Moderne'
  },
  es: {
    contact: 'Contacto',
    skills: 'Habilidades',
    languages: 'Idiomas',
    hobbies: 'Intereses',
    experience: 'Experiencia',
    education: 'Educación',
    awards: 'Premios',
    profile: 'Perfil',
    achievements: 'Logros',
    about: 'Acerca de',
    professional: 'Profesional',
    simple: 'Simple',
    elegant: 'Elegante',
    creative: 'Creativo',
    modern: 'Moderno'
  },
  de: {
    contact: 'Kontakt',
    skills: 'Fähigkeiten',
    languages: 'Sprachen',
    hobbies: 'Hobbys',
    experience: 'Erfahrung',
    education: 'Ausbildung',
    awards: 'Auszeichnungen',
    profile: 'Profil',
    achievements: 'Erfolge',
    about: 'Über mich',
    professional: 'Professionell',
    simple: 'Einfach',
    elegant: 'Elegant',
    creative: 'Kreativ',
    modern: 'Modern'
  }
};

export function getLabels(language: Language = 'en'): CVLabels {
  return translations[language];
}
