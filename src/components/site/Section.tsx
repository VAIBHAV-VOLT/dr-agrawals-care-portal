import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  children: ReactNode;
  align?: "left" | "center";
}

export const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
  align = "center",
}: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-28 scroll-mt-24", className)}>
      <div className="container-tight">
        {(eyebrow || title || subtitle) && (
          <div
            className={cn(
              "mb-14 max-w-3xl",
              align === "center" ? "mx-auto text-center" : "text-left",
            )}
          >
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg text-balance">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;