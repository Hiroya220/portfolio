import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { WorksSection } from "@/components/sections/works-section";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main><HeroSection /><WorksSection projects={getFeaturedProjects()} /><AboutSection /></main>
      <SiteFooter />
    </>
  );
}

