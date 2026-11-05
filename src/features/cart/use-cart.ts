"use client";
import { useMemo, useSyncExternalStore } from "react";
import { CART_STORAGE_KEY, subscribeToCartChanges } from "@/lib/cart-storage";
import { normalizeCart, type CartLine } from "@/features/cart/cart";

const getSnapshot = () => {
  if (typeof window === "undefined") return "[]";
  try { return window.localStorage.getItem(CART_STORAGE_KEY) || "[]"; }
  catch { return "[]"; }
};

export function useCart(): CartLine[] {
  const raw = useSyncExternalStore(subscribeToCartChanges, getSnapshot, () => "[]");
  return useMemo(() => {
    try { return normalizeCart(JSON.parse(raw)); }
    catch { return []; }
  }, [raw]);
}
