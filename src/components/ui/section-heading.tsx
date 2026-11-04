import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  icon?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, icon }: SectionHeadingProps) {
  return (
    <div className="site-section-heading">
      {icon && <div className="site-section-icon" aria-hidden="true">{icon}</div>}
      {eyebrow && <p className="site-section-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="site-section-description">{description}</p>}
    </div>
  );
}
