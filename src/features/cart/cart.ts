import { CART_STORAGE_KEY, notifyCartUpdated } from "@/lib/cart-storage";
import { menuById } from "@/data/menu";

export type CartLine = { id: string; quantity: number };
const MAX_QTY = 20;

export function normalizeCart(data: unknown): CartLine[] {
  const input = Array.isArray(data) ? data : data && typeof data === "object" && "items" in data ? (data as { items: unknown }).items : [];
  if (!Array.isArray(input)) return [];
  const normalized = new Map<string, number>();
  for (const entry of input) {
    if (!entry || typeof entry !== "object" || !('id' in entry) || !('quantity' in entry)) continue;
    const { id, quantity } = entry as { id: unknown; quantity: unknown };
    if (typeof id !== "string" || (menuById.get(id)?.price ?? null) === null || typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 1) continue;
    normalized.set(id, Math.min(MAX_QTY, (normalized.get(id) || 0) + quantity));
  }
  return [...normalized].map(([id, quantity]) => ({ id, quantity }));
}

export function readCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try { return normalizeCart(JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) || "[]")); }
  catch { return []; }
}

export function writeCart(lines: CartLine[]) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: normalizeCart(lines) })); notifyCartUpdated(); }
  catch { /* Private browser sessions may block storage. */ }
}

export function addCartItem(id: string) {
  if (!menuById.get(id)?.price) return;
  const entries = readCart();
  const old = entries.find(entry => entry.id === id);
  writeCart(old ? entries.map(line => line.id === id ? { ...line, quantity: Math.min(MAX_QTY, line.quantity + 1) } : line) : [...entries, { id, quantity: 1 }]);
}

export function setCartQuantity(id: string, quantity: number) {
  if (!Number.isFinite(quantity)) return;
  writeCart(readCart().filter(line => line.id !== id).concat(quantity > 0 ? [{ id, quantity: Math.min(MAX_QTY, Math.floor(quantity)) }] : []));
}

export function cartTotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + (menuById.get(line.id)?.price ?? 0) * line.quantity, 0);
}
