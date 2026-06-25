"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-14 overflow-x-clip bg-sky-panel text-black">
      <div className="flex h-full items-center justify-between gap-2 px-2 sm:px-5">
        <Logo priority imageClassName="w-[clamp(11.5rem,54vw,13rem)] sm:w-[238px]" />

        <nav aria-label="Primary navigation" className="hidden min-w-0 shrink-0 sm:block">
          <ul className="flex items-center gap-7 text-lg leading-none">
            {primaryNavigation.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "header-nav-link rounded-sm px-1 py-2 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black",
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

        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="relative grid size-11 place-items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:hidden"
        >
          <span
            className={cn(
              "absolute left-2 right-2 top-[14px] h-[2px] bg-black transition-all duration-300 ease-[cubic-bezier(.65,0,.35,1)]",
              menuOpen && "top-1/2 -translate-y-1/2 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-2 right-2 top-1/2 h-[2px] -translate-y-1/2 bg-black transition-all duration-300 ease-[cubic-bezier(.65,0,.35,1)]",
              menuOpen && "scale-x-0 opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-[14px] left-2 right-2 h-[2px] bg-black transition-all duration-300 ease-[cubic-bezier(.65,0,.35,1)]",
              menuOpen && "bottom-auto top-1/2 -translate-y-1/2 -rotate-45",
            )}
          />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-x-0 top-14 z-40 h-[34dvh] origin-top bg-sky-panel shadow-[0_18px_42px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:hidden",
          menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <ul className="grid h-full grid-rows-3">
          {primaryNavigation.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <li key={link.href} className="border-t border-black/10">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex h-full items-center justify-center text-2xl tracking-[0.05em] transition-colors duration-300 hover:bg-[#afd8ff] focus-visible:bg-[#afd8ff] focus-visible:outline-none",
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
    </header>
  );
}
