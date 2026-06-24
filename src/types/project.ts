export type ProjectCategory = "授業" | "趣味" | "研究";

export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  category: ProjectCategory;
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

