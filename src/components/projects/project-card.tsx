import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectVisual } from "./project-visual";
import { Reveal } from "@/components/motion/reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article>
        <Link href={`/works/${project.slug}`} className="group block" aria-label={`${project.title}の詳細を見る`}>
          <div className="relative aspect-[4/3] overflow-hidden bg-[#111] sm:aspect-[16/10]">
            <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]">
              <ProjectVisual title={project.title} accent={project.accent} visual={project.visual} cover={project.cover} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-black/20 py-5 sm:grid-cols-[1fr_1fr_auto] sm:py-7">
            <div className="flex items-baseline gap-3"><span className="text-xs text-black/45">0{index + 1}</span><h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-4xl">{project.title}</h3></div>
            <p className="hidden max-w-sm text-sm leading-relaxed text-black/55 sm:block">{project.description}</p>
            <ArrowUpRight className="size-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.25} />
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

