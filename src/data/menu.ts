import type { CafeImageId } from "@/config/image-library";

export type MenuCategory = "Food" | "Beverages" | "Desserts";
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  /** Reference prices are illustrative until the restaurant confirms the actual menu. */
  price: number | null;
  image: CafeImageId;
  featured?: boolean;
};

export const menuCategories: MenuCategory[] = ["Food", "Beverages", "Desserts"];

/** Sample descriptions and prices from the user-supplied mockups, not an approved live menu. */
export const menuItems: MenuItem[] = [
  { id: "pizza", name: "Cheese Pizza", description: "Baked pizza with melted mozzarella, vegetables and herbs.", category: "Food", price: 299, image: "cheese-pull-pizza", featured: true },
  { id: "burger", name: "Veg Burger", description: "Vegetarian patty with crisp lettuce, tomato and cheese.", category: "Food", price: 179, image: "veg-burger", featured: true },
  { id: "momos", name: "Veg Momos", description: "Steamed dumplings served with a tangy dipping sauce.", category: "Food", price: 149, image: "veg-momos" },
  { id: "sandwich", name: "Grilled Sandwich", description: "Toasted sandwich with vegetables, cheese and fries.", category: "Food", price: 169, image: "grilled-sandwich", featured: true },
  { id: "pasta", name: "Pasta Primavera", description: "Penne pasta tossed with vegetables and herbs.", category: "Food", price: 249, image: "pasta-primavera" },
  { id: "paneer", name: "Paneer Curry", description: "Soft paneer in a rich, aromatic curry sauce.", category: "Food", price: null, image: "paneer-curry" },
  { id: "cheesy-pasta", name: "Cheesy Pasta", description: "Creamy penne pasta with a cheesy finish.", category: "Food", price: null, image: "cheesy-pasta" },
  { id: "cappuccino", name: "Cappuccino", description: "Smooth espresso with steamed milk and delicate foam.", category: "Beverages", price: 149, image: "cappuccino", featured: true },
  { id: "cold-coffee", name: "Cold Coffee", description: "Chilled café-style coffee served creamy and cold.", category: "Beverages", price: 129, image: "iced-coffee" },
  { id: "chocolate-shake", name: "Chocolate Shake", description: "Chocolate shake with whipped cream.", category: "Beverages", price: null, image: "chocolate-shake" },
  { id: "blue-lemonade", name: "Blue Lemonade", description: "Refreshing citrus drink with mint and ice.", category: "Beverages", price: null, image: "blue-lemonade" },
  { id: "strawberry-shake", name: "Strawberry Shake", description: "Sweet strawberry milkshake topped with cream.", category: "Beverages", price: null, image: "strawberry-shake" },
  { id: "brownie", name: "Chocolate Brownie with Ice Cream", description: "Warm chocolate brownie finished with vanilla ice cream.", category: "Desserts", price: 199, image: "brownie-ice-cream", featured: true },
  { id: "cheesecake", name: "Cheesecake", description: "Creamy cheesecake with a berry topping.", category: "Desserts", price: null, image: "cheesecake" },
];

export const menuById = new Map(menuItems.map(item => [item.id, item]));
