import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { OptionalImage } from "@/components/shared/optional-image";
import { ProfileDetailAccordion } from "@/components/profile/profile-detail-accordion";
import { assetPaths } from "@/content/assets";
import { profileContent } from "@/content/profile";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Profile",
  description: `${siteConfig.displayName} のプロフィールです。`,
};

export default function ProfilePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-enter min-h-[calc(100dvh-3rem)] bg-white text-black sm:min-h-[calc(100dvh-3.5rem)]">
        <section className="mx-auto w-full max-w-[1180px] px-5 pb-16 pt-4 sm:px-8 sm:pb-24">
          <h1 className="text-[clamp(3.4rem,9vw,7rem)] font-normal leading-[0.92] tracking-[-0.035em]">
            {profileContent.title}
          </h1>

          <div className="mt-8 grid items-start gap-8 sm:mt-10 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div>
              <p className="text-xl leading-tight tracking-[0.1em] sm:text-2xl">{profileContent.nameLine}</p>
              <div className="mt-6 grid max-w-2xl gap-3 text-base leading-relaxed sm:text-lg">
                {profileContent.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <OptionalImage
              src={assetPaths.profilePhoto}
              alt="郡田寛也の宣材写真"
              width={800}
              height={800}
              priority
              className="order-first aspect-square w-full rounded-md lg:order-none"
              imageClassName="object-cover"
              fallbackLabel="public/images/宣材写真.png を置くと写真が表示されます"
            />
          </div>

          <ProfileDetailAccordion
            openLabel={profileContent.accordionTitle}
            closeLabel={profileContent.accordionCloseTitle}
            items={profileContent.details}
          />
        </section>
      </main>
    </>
  );
}
