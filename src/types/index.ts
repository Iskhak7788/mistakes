export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  tags: string[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Other';
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: {
    start: string;
    end: string | 'Present';
  };
  description: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}