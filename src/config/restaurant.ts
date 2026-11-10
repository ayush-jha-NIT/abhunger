/**
 * Client-owned configuration. Values from the design screenshots are not proof
 * of operating hours, delivery fees, menu approval or official WhatsApp number.
 */
const rawPhone = process.env.NEXT_PUBLIC_RESTAURANT_WHATSAPP ?? "917499668649";
const digits = rawPhone.replace(/\D/g, "");

export const restaurant = {
  name: "AB Hunger Station",
  address: "Bhagwa Market, Prayagraj, Uttar Pradesh",
  whatsapp: digits.length >= 10 && digits.length <= 15 ? digits : null,
  mapsUrl: process.env.NEXT_PUBLIC_RESTAURANT_MAPS_URL || "https://maps.app.goo.gl/VLofhWV8dE6YHxq58",
  instagramUrl: process.env.NEXT_PUBLIC_RESTAURANT_INSTAGRAM_URL || null,
  /** Never invent an actual delivery charge or quote an unapproved checkout total. */
  deliveryFee: configuredFee(process.env.NEXT_PUBLIC_DELIVERY_FEE),
  freeDeliveryAbove: 300,
  deliveryRadiusKm: 10,
  menuConfirmed: process.env.NEXT_PUBLIC_MENU_CONFIRMED === "true",
} as const;

function configuredFee(raw: string | undefined): number | null {
  if (raw === undefined || raw.trim() === "") return null;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? Math.round(value) : null;
}

/** Free delivery applies only above Rs 300; the regular fee remains unconfirmed. */
export function calculateDeliveryFee(subtotal: number, orderType: "delivery" | "takeaway"): number | null {
  if (orderType === "takeaway") return 0;
  if (subtotal > restaurant.freeDeliveryAbove) return 0;
  return restaurant.deliveryFee;
}

export function whatsappUrl(message: string): string | null {
  return restaurant.whatsapp
    ? `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`
    : null;
}

export const money = (amount: number): string => `₹${Math.round(amount).toLocaleString("en-IN")}`;

/** Dates supplied from date inputs use YYYY-MM-DD in the restaurant's local time. */
export function isPastLocalDate(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return true;
  const [year, month, day] = date.split("-").map(Number);
  const parsed = new Date(year, month - 1, day);
  if (parsed.getFullYear() !== year || parsed.getMonth() + 1 !== month || parsed.getDate() !== day) return true;
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const value = (type: string) => parts.find(part => part.type === type)?.value || "00";
  const todayIso = `${value("year")}-${value("month")}-${value("day")}`;
  return date < todayIso;
}
