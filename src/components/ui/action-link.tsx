import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline" | "white";
  size?: "default" | "small";
  className?: string;
};

export function ActionLink({ children, href, variant = "solid", size = "default", className }: ActionLinkProps) {
  return (
    <Link href={href} className={cn("site-action", `site-action-${variant}`, size === "small" && "site-action-small", className)}>
      {children}
    </Link>
  );
}
