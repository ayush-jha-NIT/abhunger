/**
 * Home page display copy and reference-only menu highlights.
 * IMPORTANT: prices are transcribed from the supplied UI mockup, not a confirmed
 * restaurant menu. Replace with client-approved prices before public launch.
 */
import type { CafeImageId } from "@/config/image-library";

export type Highlight = {
  name: string;
  image: CafeImageId;
  referencePriceRupees: number;
};

export const homeHighlights: readonly Highlight[] = [
  { name: "Cappuccino", image: "cappuccino", referencePriceRupees: 149 },
  { name: "Veg Burger", image: "veg-burger", referencePriceRupees: 179 },
  { name: "Cheese Pizza", image: "cheese-pull-pizza", referencePriceRupees: 299 },
  { name: "Grilled Sandwich", image: "grilled-sandwich", referencePriceRupees: 169 },
  { name: "Chocolate Brownie with Ice Cream", image: "brownie-ice-cream", referencePriceRupees: 199 },
] as const;

export const homeGallery: readonly { image: CafeImageId; label: string }[] = [
  { image: "cappuccino", label: "Freshly brewed cappuccino" },
  { image: "cheesy-pasta", label: "Delicious pasta" },
  { image: "main-dining", label: "Warm and welcoming dining room" },
  { image: "cheesecake", label: "Creamy dessert with berries" },
  { image: "booth-seating", label: "Comfortable café seating" },
  { image: "iced-coffee", label: "Chilled café drink" },
] as const;
