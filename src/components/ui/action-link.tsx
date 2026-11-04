import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
};

export function ActionLink({ children, href, variant = "solid", className }: ActionLinkProps) {
  return (
    <Link href={href} className={cn("site-action", variant === "outline" ? "site-action-outline" : "site-action-solid", className)}>
      {children}
    </Link>
  );
}
