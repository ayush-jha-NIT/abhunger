import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfoStripItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

type InfoStripProps = { items: readonly InfoStripItem[]; className?: string };

/** Slim segmented benefit/info strip from the Events, Cart and Checkout references. */
export function InfoStrip({ items, className }: InfoStripProps) {
  return (
    <div className={cn("site-info-strip", className)}>
      {items.map((item, index) => (
        <div className="site-info-strip-item" key={`${item.title}-${index}`}>
          <span className="site-info-strip-icon" aria-hidden="true">{item.icon}</span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </div>
      ))}
    </div>
  );
}
