import type { ComponentProps } from "react";
import { ProjectVisual } from "@/components/projects/project-visual";

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => <h2 className="mb-6 mt-24 text-3xl font-medium tracking-[-0.04em] sm:mt-36 sm:text-5xl" {...props} />,
  h3: (props: ComponentProps<"h3">) => <h3 className="mb-4 mt-14 text-2xl font-medium" {...props} />,
  p: (props: ComponentProps<"p">) => <p className="max-w-2xl text-base leading-8 text-black/60 sm:text-lg sm:leading-9" {...props} />,
  a: (props: ComponentProps<"a">) => <a className="underline underline-offset-4" {...props} />,
  ProjectVisual: ({ label, variant = "type" }: { label: string; variant?: "orb" | "grid" | "type" }) => (
    <div className="my-20 aspect-[4/3] overflow-hidden bg-black sm:my-28 sm:aspect-[16/9]"><ProjectVisual label={label} visual={variant} accent="#d8ff56" /></div>
  ),
};

