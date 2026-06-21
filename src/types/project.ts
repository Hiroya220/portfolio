export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  role: string[];
  technologies: string[];
  featured: boolean;
  order: number;
  published: boolean;
  client?: string;
  siteUrl?: string;
  githubUrl?: string;
  cover?: string;
  accent: string;
  visual: "orb" | "grid" | "type";
  content: string;
};

