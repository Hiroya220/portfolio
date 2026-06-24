import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/content/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/15 bg-white pb-8 pt-20 text-black">
      <Container>
        <a href={`mailto:${siteConfig.email}`} className="group flex items-end justify-between border-b border-black/20 pb-8">
          <span className="text-[clamp(2.8rem,9vw,9rem)] leading-[0.85] tracking-[-0.08em]">Let&apos;s talk.</span>
          <ArrowUpRight className="mb-1 size-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 sm:mb-3 sm:size-14" strokeWidth={1} />
        </a>
        <div className="mt-14 grid gap-8 text-sm text-black/55 sm:grid-cols-3">
          <div>
            <p className="mb-2 text-black/35">Location</p>
            <p>{siteConfig.location}</p>
          </div>
          <div className="flex gap-6 sm:justify-center">
            {siteConfig.socials.map((social) => (
              <a className="hover:text-black" href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex items-end justify-between sm:justify-end sm:gap-8">
            <span>© {new Date().getFullYear()}</span>
            <Logo imageClassName="w-[120px]" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

