import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  label?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
};

/** Place a final background image via CSS class or an absolutely positioned Image child. */
export function PageHero({ label, title, description, children, className }: PageHeroProps) {
  return (
    <section className={cn("site-page-hero", className)}>
      <div className="site-container site-page-hero-content">
        {label && <p className="site-page-hero-label">{label}</p>}
        <h1>{title}</h1>
        {description && <p className="site-page-hero-description">{description}</p>}
        {children}
      </div>
    </section>
  );
}
