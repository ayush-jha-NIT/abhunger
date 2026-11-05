"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSyncExternalStore } from "react";
import { getCartQuantityCount, subscribeToCartChanges } from "@/lib/cart-storage";
import { cn } from "@/lib/utils";

export function CartIndicator({ className }: { className?: string }) {
  const count = useSyncExternalStore(subscribeToCartChanges, getCartQuantityCount, () => 0);
  return (
    <Link href="/cart" className={cn("site-cart-link", className)} aria-label={`View cart${count ? `, ${count} items` : ", empty"}`}>
      <ShoppingCart aria-hidden="true" size={27} strokeWidth={1.8} />
      {count > 0 && <span className="site-cart-count" aria-hidden="true">{count > 99 ? "99+" : count}</span>}
    </Link>
  );
}
