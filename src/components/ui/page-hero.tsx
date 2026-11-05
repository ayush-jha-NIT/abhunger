import type { ReactNode } from "react";
import Image from "next/image";
import { imageLibrary, type CafeImageId } from "@/config/image-library";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  label?: string;
  title: ReactNode;
  description?: string;
  image?: CafeImageId;
  imagePosition?: "center" | "right";
  size?: "default" | "tall" | "compact";
  children?: ReactNode;
  className?: string;
};

/** Shared photographic hero for the eight screenshot pages. */
export function PageHero({ label, title, description, image, imagePosition = "center", size = "default", children, className }: PageHeroProps) {
  const asset = image ? imageLibrary[image] : null;
  return (
    <section className={cn("site-page-hero", `site-page-hero-${size}`, className)}>
      {asset && <Image src={asset.src} alt="" fill priority sizes="100vw"
        className={cn("site-page-hero-image", imagePosition === "right" && "site-page-hero-image-right")} />}
      <div className="site-page-hero-shade" aria-hidden="true" />
      <div className="site-container site-page-hero-content">
        {label && <p className="site-page-hero-label">{label}</p>}
        <h1>{title}</h1>
        {description && <p className="site-page-hero-description">{description}</p>}
        {children}
      </div>
    </section>
  );
}
