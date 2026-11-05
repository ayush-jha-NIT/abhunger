/**
 * Shared browser cart contract, implemented fully in Part 11.
 * This Phase 3 reader never fabricates the badge count; missing data means zero.
 */
export const CART_STORAGE_KEY = "ab-hunger-cart-v1";
export const CART_UPDATED_EVENT = "ab-hunger-cart-updated";

export function countStoredCartItems(raw: string | null): number {
  if (!raw) return 0;
  try {
    const decoded: unknown = JSON.parse(raw);
    const items = Array.isArray(decoded)
      ? decoded
      : decoded && typeof decoded === "object" && "items" in decoded
        ? (decoded as { items?: unknown }).items
        : null;
    if (!Array.isArray(items)) return 0;
    return items.reduce<number>((total, item: unknown) => {
      if (!item || typeof item !== "object" || !("quantity" in item)) return total;
      const quantity = (item as { quantity?: unknown }).quantity;
      return total + (typeof quantity === "number" && Number.isInteger(quantity) && quantity > 0 && quantity <= 99
        ? quantity
        : 0);
    }, 0);
  } catch {
    return 0;
  }
}

export function getCartQuantityCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    return Math.min(999, countStoredCartItems(window.localStorage.getItem(CART_STORAGE_KEY)));
  } catch {
    return 0; // Storage can be unavailable when cookies/storage are restricted.
  }
}

export function subscribeToCartChanges(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const onStorage = (event: StorageEvent) => {
    if (event.key === CART_STORAGE_KEY || event.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CART_UPDATED_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CART_UPDATED_EVENT, callback);
  };
}

/** Call this after updating localStorage in Part 11 to update the current tab. */
export function notifyCartUpdated(): void {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}
