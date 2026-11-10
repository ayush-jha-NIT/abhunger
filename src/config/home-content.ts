/**
 * Home page picks now reflect the printed menu provided on 10 November 2026.
 * Images remain illustrative; restaurant confirms availability and prices at checkout.
 */
import type { CafeImageId } from "@/config/image-library";

export type Highlight = {
  name: string;
  image: CafeImageId;
  referencePriceRupees: number;
};

export const homeHighlights: readonly Highlight[] = [
  { name: "Veg Loaded Burger", image: "veg-burger", referencePriceRupees: 80 },
  { name: "Peri Peri Sandwich", image: "grilled-sandwich", referencePriceRupees: 70 },
  { name: "Veg Steam Momos (6 pcs)", image: "veg-momos", referencePriceRupees: 60 },
  { name: "Strawberry Shake", image: "strawberry-shake", referencePriceRupees: 60 },
  { name: "Paneer Butter Masala", image: "paneer-curry", referencePriceRupees: 300 },
] as const;

export const homeGallery: readonly { image: CafeImageId; label: string }[] = [
  { image: "cappuccino", label: "Freshly brewed cappuccino" },
  { image: "cheesy-pasta", label: "Delicious pasta" },
  { image: "main-dining", label: "Warm and welcoming dining room" },
  { image: "cheesecake", label: "Creamy dessert with berries" },
  { image: "booth-seating", label: "Comfortable café seating" },
  { image: "iced-coffee", label: "Chilled café drink" },
] as const;
