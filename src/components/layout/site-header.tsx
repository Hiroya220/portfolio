"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";

function isActive(pathname: string, href: string) {
  if (href === "/works") return pathname === "/works" || pathname.startsWith("/works/");
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-12 bg-sky-panel text-black sm:h-14">
      <div className="flex h-full items-center justify-between px-3 sm:px-5">
        <Logo priority imageClassName="w-[146px] sm:w-[180px]" />
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-base leading-none sm:gap-7 sm:text-lg">
            {primaryNavigation.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-sm px-1 py-2 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black",
                      active ? "text-white" : "text-black",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

