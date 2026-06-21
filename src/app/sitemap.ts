import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { getAllProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), priority: 1 },
    ...getAllProjects().map((project) => ({ url: `${siteConfig.url}/works/${project.slug}`, lastModified: new Date(), priority: 0.8 })),
  ];
}

