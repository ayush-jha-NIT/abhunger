import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getCafeImage, type CafeImageId } from "@/config/image-library";

export function ExperienceHero({ image, eyebrow, title, accent, description, children, compact = false }: {
  image: CafeImageId; eyebrow: string; title: string; accent?: string; description: string; children?: ReactNode; compact?: boolean;
}) {
  const photo = getCafeImage(image);
  return <section className={`experience-hero ${compact ? "experience-hero-compact" : ""}`}>
    <Image src={photo.src} alt="" fill priority sizes="100vw" className="experience-hero-image" />
    <div className="experience-hero-overlay" />
    <div className="site-container experience-hero-content">
      <p className="experience-eyebrow">{eyebrow}</p>
      <h1>{title}{accent && <><br /><em>{accent}</em></>}</h1>
      <p className="experience-hero-description">{description}</p>
      {children && <div className="experience-hero-actions">{children}</div>}
    </div>
  </section>;
}

export function ExperienceHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="experience-heading">
    {eyebrow && <p className="experience-heading-eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>{description && <p>{description}</p>}
  </div>;
}

export function RoundedLink({ href, children, outline = false, external = false }: { href: string; children: ReactNode; outline?: boolean; external?: boolean }) {
  const className = `experience-button ${outline ? "experience-button-outline" : ""}`;
  return external ? <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    : <Link className={className} href={href}>{children}</Link>;
}

export function Photo({ image, className = "", sizes = "(max-width: 800px) 100vw, 50vw" }: { image: CafeImageId; className?: string; sizes?: string }) {
  const src = getCafeImage(image);
  return <div className={`experience-photo ${className}`}><Image src={src.src} alt={src.alt} fill sizes={sizes} /></div>;
}
