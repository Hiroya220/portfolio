import type { Metadata } from "next";
import { ContactActions } from "@/components/contact/contact-actions";
import { SiteHeader } from "@/components/layout/site-header";
import { contactContent } from "@/content/contact";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `${siteConfig.displayName} へのお問い合わせページです。`,
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100dvh-3rem)] bg-white text-black sm:min-h-[calc(100dvh-3.5rem)]">
        <section className="mx-auto w-full max-w-[980px] px-5 pb-16 pt-4 sm:px-8 sm:pb-24">
          <h1 className="text-[clamp(4.5rem,14vw,10rem)] font-normal leading-[0.86] tracking-[-0.08em]">
            {contactContent.title}
          </h1>
          <ContactActions />
        </section>
      </main>
    </>
  );
}

