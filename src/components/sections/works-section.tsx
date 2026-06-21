import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/shared/container";
import type { Project } from "@/types/project";

export function WorksSection({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="bg-[#eeeDE8] py-24 text-[#111] sm:py-36 lg:py-48">
      <Container>
        <div className="mb-14 flex items-end justify-between border-b border-black/20 pb-5 sm:mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em]">Selected work</h2><p className="text-xs text-black/45">2024 — 2026</p>
        </div>
        <div className="space-y-20 sm:space-y-32">
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
        </div>
      </Container>
    </section>
  );
}

