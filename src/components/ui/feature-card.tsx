import type { ReactNode } from "react";
import Image from "next/image";
import { imageLibrary, type CafeImageId } from "@/config/image-library";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  image?: CafeImageId;
  className?: string;
};

export function FeatureCard({ title, description, icon, image, className }: FeatureCardProps) {
  return (
    <article className={cn("site-feature-card", image && "site-feature-card-media", className)}>
      {image && <div className="site-feature-card-photo">
        <Image src={imageLibrary[image].src} alt={imageLibrary[image].alt} fill sizes="(max-width: 640px) 33vw, 15vw" />
      </div>}
      <div className="site-feature-card-content">
        <div className="site-feature-icon" aria-hidden="true">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
