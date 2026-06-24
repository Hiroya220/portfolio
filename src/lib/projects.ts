import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import type { Project } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");
const projectCategories = ["授業", "趣味", "研究"] as const;

const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  year: z.coerce.string(),
  category: z.enum(projectCategories).default("趣味"),
  role: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  order: z.number().int().default(99),
  published: z.boolean().default(true),
  client: z.string().optional(),
  siteUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  cover: z.string().optional(),
  accent: z.string().default("#d7ff45"),
  visual: z.enum(["orb", "grid", "type"]).default("type"),
});

function readProject(filename: string): Project {
  const slug = filename.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(projectsDirectory, filename), "utf8");
  const { data, content } = matter(source);
  const parsed = projectSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error(`Invalid project content: ${filename}\n${parsed.error.message}`);
  }

  return { slug, ...parsed.data, content };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  return fs
    .readdirSync(projectsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(readProject)
    .filter((project) => project.published)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectCategories() {
  return projectCategories;
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
