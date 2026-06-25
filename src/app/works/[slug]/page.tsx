import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectVisual } from "@/components/projects/project-visual";
import { Container } from "@/components/shared/container";
import { mdxComponents } from "@/components/mdx-components";
import { getAllProjects, getProject } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projects = getAllProjects();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main className="page-enter bg-white text-black">
        <section className="pb-12 pt-8 sm:pb-16 sm:pt-14">
          <Container>
            <Link href="/works" className="mb-10 inline-flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black">
              <ArrowLeft className="size-4" />
              Worksへ戻る
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="mb-5 text-sm tracking-[0.2em] text-black/45">
                  {project.category} / {project.year}
                </p>
                <h1 className="text-[clamp(3rem,9vw,8rem)] font-normal leading-[0.88] tracking-[-0.045em]">
                  {project.title}
                </h1>
              </div>
              <p className="text-base leading-relaxed text-black/70 sm:text-lg">{project.description}</p>
            </div>

            <div className="mt-12 grid gap-4 border-y border-black/20 py-5 text-sm sm:grid-cols-3 sm:text-base">
              <div>
                <p className="mb-1 text-black/40">Client</p>
                <p>{project.client ?? "Independent"}</p>
              </div>
              <div>
                <p className="mb-1 text-black/40">Role</p>
                <p>{project.role.join(", ")}</p>
              </div>
              <div>
                <p className="mb-1 text-black/40">Technology</p>
                <p>{project.technologies.join(", ")}</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-black/10 bg-sky-panel/30">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
            <ProjectVisual title={project.title} accent={project.accent} visual={project.visual} cover={project.cover} detail />
          </div>
        </section>

        <Container className="pb-20 pt-14 sm:pb-28 sm:pt-20">
          <article className="project-article">
            <MDXRemote source={project.content} components={mdxComponents} />
          </article>

          {(project.siteUrl || project.githubUrl) && (
            <div className="mt-16 flex flex-wrap gap-5">
              {project.siteUrl && (
                <a href={project.siteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-black pb-1">
                  Visit website <ArrowUpRight className="size-4" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-black pb-1">
                  View code <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          )}
        </Container>

        {nextProject && (
          <Link href={`/works/${nextProject.slug}`} className="group block border-t border-black/15 bg-white py-16 transition-colors hover:bg-sky-panel/45 sm:py-24">
            <Container>
              <p className="mb-8 text-sm tracking-[0.2em] text-black/45">Next project</p>
              <div className="flex items-end justify-between gap-6">
                <span className="text-[clamp(2.8rem,8vw,7rem)] leading-[0.9] tracking-[-0.045em]">{nextProject.title}</span>
                <ArrowUpRight className="size-9 shrink-0 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 sm:size-14" strokeWidth={1.2} />
              </div>
            </Container>
          </Link>
        )}
      </main>
    </>
  );
}
