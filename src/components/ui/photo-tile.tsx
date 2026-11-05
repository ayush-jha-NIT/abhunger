import Image from "next/image";
import type { ReactNode } from "react";
import { imageLibrary, type CafeImageId } from "@/config/image-library";
import { cn } from "@/lib/utils";

type PhotoTileProps = {
  image: CafeImageId;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
};

/**
 * A single image source for gallery, feature, menu and editorial compositions.
 * Artwork remains an image, never a screenshot used as a complete UI surface.
 */
export function PhotoTile({ image, label, className, sizes = "(max-width: 640px) 100vw, 33vw", priority = false, children }: PhotoTileProps) {
  const asset = imageLibrary[image];
  return (
    <figure className={cn("site-photo-tile", className)}>
      <Image src={asset.src} alt={asset.alt} fill sizes={sizes} priority={priority} className="site-photo-tile-image" />
      {(label || children) && <figcaption className="site-photo-tile-caption">{label && <span>{label}</span>}{children}</figcaption>}
    </figure>
  );
}
