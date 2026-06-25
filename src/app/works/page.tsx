import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { WorksBoard } from "@/components/works/works-board";
import { siteConfig } from "@/content/site-config";
import { getAllProjects, getProjectCategories } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Works",
  description: `${siteConfig.displayName} の制作物一覧です。`,
};

export default function WorksPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <>
      <SiteHeader />
      <main className="page-enter min-h-[calc(100dvh-3rem)] bg-white text-black sm:min-h-[calc(100dvh-3.5rem)]">
        <section className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-4 sm:px-8 sm:pb-28">
          <div className="grid gap-6 border-b border-black/20 pb-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <h1 className="text-[clamp(3.4rem,10vw,8rem)] font-normal leading-[0.86] tracking-[-0.04em]">
              Works
            </h1>
            <p className="max-w-md text-base leading-relaxed text-black/65 sm:text-lg">
              授業、趣味、研究で制作したものをまとめています。作品はMDXファイルを追加するだけで増やせます。
            </p>
          </div>
          <WorksBoard projects={projects} categories={categories} />
        </section>
      </main>
    </>
  );
}
