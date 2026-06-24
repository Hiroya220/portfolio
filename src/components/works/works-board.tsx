"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";
import { ProjectVisual } from "@/components/projects/project-visual";

type Filter = "すべて" | ProjectCategory;

type WorksBoardProps = {
  projects: Project[];
  categories: readonly ProjectCategory[];
};

export function WorksBoard({ projects, categories }: WorksBoardProps) {
  const [filter, setFilter] = useState<Filter>("すべて");
  const filters = useMemo<Filter[]>(() => ["すべて", ...categories], [categories]);
  const visibleProjects = filter === "すべて" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="mt-10 sm:mt-14">
      <div className="sticky top-12 z-20 -mx-4 flex gap-2 overflow-x-auto bg-white/85 px-4 py-3 backdrop-blur sm:top-14 sm:mx-0 sm:px-0">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors sm:text-base",
              filter === item ? "border-black bg-black text-white" : "border-black/20 bg-white text-black hover:border-black",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/works/${project.slug}`}
            className="group relative overflow-hidden border border-black/15 bg-white transition-colors duration-300 hover:border-black"
          >
            <div className="aspect-[4/3] overflow-hidden bg-sky-panel/40">
              <ProjectVisual title={project.title} accent={project.accent} visual={project.visual} cover={project.cover} />
            </div>
            <div className="p-5 sm:p-6">
              <div className="mb-8 flex items-center justify-between text-sm text-black/55">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.category}</span>
              </div>
              <h2 className="text-3xl leading-none tracking-[-0.05em] sm:text-4xl">{project.title}</h2>
              <p className="mt-4 min-h-16 text-sm leading-relaxed text-black/65 sm:text-base">{project.description}</p>
              <div className="mt-7 flex items-center justify-between border-t border-black/15 pt-4 text-sm">
                <span>{project.year}</span>
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.5} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

