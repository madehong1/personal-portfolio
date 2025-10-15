export type Section = 'home' | 'experience' | 'projects' | 'resume';

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl: string;
}
