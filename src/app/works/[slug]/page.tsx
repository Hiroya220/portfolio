import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProjectVisual } from "@/components/projects/project-visual";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
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
      <header className="bg-[#080808] py-6 text-white sm:py-8"><Container className="flex items-center justify-between"><Logo /><Link className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/60 hover:text-white" href="/#work"><ArrowLeft className="size-4" />All work</Link></Container></header>
      <main>
        <section className="bg-[#080808] pb-16 pt-20 text-white sm:pb-24 sm:pt-32">
          <Container>
            <p className="mb-7 text-xs uppercase tracking-[0.2em] text-white/40">Selected work · {project.year}</p>
            <h1 className="text-[clamp(4.5rem,15vw,14rem)] font-medium leading-[0.8] tracking-[-0.075em]">{project.title}</h1>
            <div className="mt-16 grid gap-10 border-t border-white/15 pt-7 text-sm sm:grid-cols-3 sm:mt-24">
              <div><p className="mb-2 text-xs uppercase tracking-[0.16em] text-white/35">Client</p><p>{project.client ?? "Independent"}</p></div>
              <div><p className="mb-2 text-xs uppercase tracking-[0.16em] text-white/35">Role</p><p>{project.role.join(", ")}</p></div>
              <div><p className="mb-2 text-xs uppercase tracking-[0.16em] text-white/35">Technology</p><p>{project.technologies.join(", ")}</p></div>
            </div>
          </Container>
        </section>
        <section className="bg-[#eeeDE8] pb-24 text-[#111] sm:pb-40">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-black sm:aspect-[16/9]"><ProjectVisual title={project.title} accent={project.accent} visual={project.visual} cover={project.cover} detail /></div>
          <Container className="pt-16 sm:pt-28">
            <p className="max-w-4xl text-[clamp(1.8rem,4vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.045em]">{project.description}</p>
            <article><MDXRemote source={project.content} components={mdxComponents} /></article>
            {(project.siteUrl || project.githubUrl) && <div className="mt-20 flex gap-5">{project.siteUrl && <a href={project.siteUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b border-black pb-1">Visit website <ArrowUpRight className="size-4" /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b border-black pb-1">View code <ArrowUpRight className="size-4" /></a>}</div>}
          </Container>
        </section>
        {nextProject && <Link href={`/works/${nextProject.slug}`} className="group block bg-[#151515] py-24 text-white sm:py-40"><Container><p className="mb-8 text-xs uppercase tracking-[0.2em] text-white/35">Next project</p><div className="flex items-end justify-between"><span className="text-[clamp(3.5rem,11vw,11rem)] font-medium leading-[.85] tracking-[-0.065em]">{nextProject.title}</span><ArrowUpRight className="size-9 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 sm:size-16" strokeWidth={1} /></div></Container></Link>}
      </main>
      <SiteFooter />
    </>
  );
}

