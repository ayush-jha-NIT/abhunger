import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  icon?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, icon, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("site-section-heading", align === "left" && "site-section-heading-left", className)}>
      {icon && <div className="site-section-ornament" aria-hidden="true"><span />{icon}<span /></div>}
      {eyebrow && <p className="site-section-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="site-section-description">{description}</p>}
    </div>
  );
}
