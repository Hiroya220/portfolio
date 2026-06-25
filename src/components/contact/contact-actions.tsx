import { ExternalLink } from "lucide-react";
import { contactContent } from "@/content/contact";
import { assetPaths } from "@/content/assets";
import { OptionalImage } from "@/components/shared/optional-image";

function RabbitIcon({ className = "inline-block size-8 align-middle" }: { className?: string }) {
  return (
    <OptionalImage
      src={assetPaths.rabbit}
      alt={contactContent.rabbitAlt}
      width={240}
      height={240}
      className={className}
      imageClassName="object-contain"
      fallbackClassName="border-0 bg-transparent p-0 text-3xl text-black"
      fallbackLabel="🐰"
    />
  );
}

export function ContactActions() {
  return (
    <div className="mt-10 grid gap-12 sm:mt-14 sm:gap-14">
      <section>
        <p className="mb-5 text-lg tracking-[0.06em] sm:text-xl">
          {contactContent.casualLead}
          <RabbitIcon />
          と話したい！
        </p>
        <a
          href={contactContent.x.href}
          target="_blank"
          rel="noreferrer"
          className="group flex min-h-14 items-center justify-center gap-3 px-5 text-center text-base tracking-[0.035em] text-black transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-lg"
          style={{ backgroundColor: contactContent.x.background }}
        >
          {contactContent.x.label}
          <ExternalLink className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </section>

      <section>
        <p className="mb-5 text-lg tracking-[0.06em] sm:text-xl">
          {contactContent.formalLead}
          <RabbitIcon />
          と話したい！
        </p>
        <a
          href={contactContent.forms.href}
          target="_blank"
          rel="noreferrer"
          className="group flex min-h-14 items-center justify-center gap-3 px-5 text-center text-base tracking-[0.035em] text-black transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-lg"
          style={{ backgroundColor: contactContent.forms.background }}
        >
          {contactContent.forms.label}
          <ExternalLink className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </section>
    </div>
  );
}
