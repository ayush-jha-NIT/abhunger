import type { CafeImageId } from "@/config/image-library";

export type MenuCategory = "Food" | "Beverages" | "Desserts";
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  group: string;
  price: number | null;
  image: CafeImageId;
  featured?: boolean;
};

export const menuCategories: MenuCategory[] = ["Food", "Beverages"];

/**
 * Transcribed from AB Hunger Station printed menu photographs supplied 10 Nov 2026.
 * Crossed-out entries (first sandwich name, jeera rice) and unapproved handwritten
 * discount notes have been deliberately excluded. All prices in INR.
 * Photos are illustrative and availability/final price require restaurant confirmation.
 */
export const menuItems: MenuItem[] = [
  {
    "name": "Veg Loaded Burger",
    "price": 80,
    "group": "Burgers",
    "category": "Food",
    "image": "veg-burger",
    "id": "veg-loaded-burger",
    "description": "Burgers",
    "featured": true
  },
  {
    "name": "Smoky Peri Peri Burger",
    "price": 70,
    "group": "Burgers",
    "category": "Food",
    "image": "veg-burger",
    "id": "smoky-peri-peri-burger",
    "description": "Burgers",
    "featured": false
  },
  {
    "name": "Double Cheese Burger",
    "price": 90,
    "group": "Burgers",
    "category": "Food",
    "image": "veg-burger",
    "id": "double-cheese-burger",
    "description": "Burgers",
    "featured": false
  },
  {
    "name": "Veg Loaded Cheese Burger",
    "price": 90,
    "group": "Burgers",
    "category": "Food",
    "image": "veg-burger",
    "id": "veg-loaded-cheese-burger",
    "description": "Burgers",
    "featured": false
  },
  {
    "name": "Paneer Burger",
    "price": 120,
    "group": "Burgers",
    "category": "Food",
    "image": "veg-burger",
    "id": "paneer-burger",
    "description": "Burgers",
    "featured": false
  },
  {
    "name": "Peri Peri Sandwich",
    "price": 70,
    "group": "Sandwiches",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "peri-peri-sandwich",
    "description": "Freshly prepared sandwich",
    "featured": true
  },
  {
    "name": "Fadam Sandwich",
    "price": 80,
    "group": "Sandwiches",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "fadam-sandwich",
    "description": "Freshly prepared sandwich",
    "featured": false
  },
  {
    "name": "Paneer Paratha",
    "price": 80,
    "group": "Parathas",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "paneer-paratha",
    "description": "Parathas",
    "featured": false
  },
  {
    "name": "Aloo Paratha",
    "price": 50,
    "group": "Parathas",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "aloo-paratha",
    "description": "Parathas",
    "featured": false
  },
  {
    "name": "Gobhi Paratha",
    "price": 60,
    "group": "Parathas",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "gobhi-paratha",
    "description": "Parathas",
    "featured": false
  },
  {
    "name": "Mix Paratha",
    "price": 70,
    "group": "Parathas",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "mix-paratha",
    "description": "Parathas",
    "featured": false
  },
  {
    "name": "Tandoor Roti",
    "price": 15,
    "group": "Roti & Rice",
    "category": "Food",
    "image": "paneer-curry",
    "id": "tandoor-roti",
    "description": "Roti & Rice",
    "featured": false
  },
  {
    "name": "Plain Tawa Roti",
    "price": 10,
    "group": "Roti & Rice",
    "category": "Food",
    "image": "paneer-curry",
    "id": "plain-tawa-roti",
    "description": "Roti & Rice",
    "featured": false
  },
  {
    "name": "Butter Roti",
    "price": 15,
    "group": "Roti & Rice",
    "category": "Food",
    "image": "paneer-curry",
    "id": "butter-roti",
    "description": "Roti & Rice",
    "featured": false
  },
  {
    "name": "Plain Rice (Half)",
    "price": 80,
    "group": "Roti & Rice",
    "category": "Food",
    "image": "paneer-curry",
    "id": "plain-rice-half",
    "description": "Half serving",
    "featured": false
  },
  {
    "name": "Plain Rice (Full)",
    "price": 150,
    "group": "Roti & Rice",
    "category": "Food",
    "image": "paneer-curry",
    "id": "plain-rice-full",
    "description": "Full serving",
    "featured": false
  },
  {
    "name": "Veg Biryani (Half)",
    "price": 130,
    "group": "Roti & Rice",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-biryani-half",
    "description": "Half serving",
    "featured": false
  },
  {
    "name": "Veg Biryani (Full)",
    "price": 220,
    "group": "Roti & Rice",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-biryani-full",
    "description": "Full serving",
    "featured": false
  },
  {
    "name": "Dal Makhani",
    "price": 180,
    "group": "Dal",
    "category": "Food",
    "image": "paneer-curry",
    "id": "dal-makhani",
    "description": "Dal",
    "featured": false
  },
  {
    "name": "Fry Dal",
    "price": 130,
    "group": "Dal",
    "category": "Food",
    "image": "paneer-curry",
    "id": "fry-dal",
    "description": "Dal",
    "featured": false
  },
  {
    "name": "Mix Veg",
    "price": 200,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "mix-veg",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Aloo Gobhi",
    "price": 160,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "aloo-gobhi",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Mushroom Masala",
    "price": 280,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "mushroom-masala",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Malai Kofta",
    "price": 280,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "malai-kofta",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Matar Paneer",
    "price": 240,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "matar-paneer",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Handi Paneer",
    "price": 300,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "handi-paneer",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Kadai Paneer",
    "price": 280,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "kadai-paneer",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Shahi Paneer",
    "price": 320,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "shahi-paneer",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Paneer Butter Masala",
    "price": 300,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "paneer-butter-masala",
    "description": "Main Course",
    "featured": true
  },
  {
    "name": "Palak Paneer",
    "price": 250,
    "group": "Main Course",
    "category": "Food",
    "image": "paneer-curry",
    "id": "palak-paneer",
    "description": "Main Course",
    "featured": false
  },
  {
    "name": "Veg Noodles (Half)",
    "price": 50,
    "group": "Chinese",
    "category": "Food",
    "image": "cheesy-pasta",
    "id": "veg-noodles-half",
    "description": "Half serving",
    "featured": false
  },
  {
    "name": "Veg Noodles (Full)",
    "price": 90,
    "group": "Chinese",
    "category": "Food",
    "image": "cheesy-pasta",
    "id": "veg-noodles-full",
    "description": "Full serving",
    "featured": false
  },
  {
    "name": "Garlic Noodles (Half)",
    "price": 50,
    "group": "Chinese",
    "category": "Food",
    "image": "cheesy-pasta",
    "id": "garlic-noodles-half",
    "description": "Half serving",
    "featured": false
  },
  {
    "name": "Garlic Noodles (Full)",
    "price": 90,
    "group": "Chinese",
    "category": "Food",
    "image": "cheesy-pasta",
    "id": "garlic-noodles-full",
    "description": "Full serving",
    "featured": false
  },
  {
    "name": "Plain Maggi",
    "price": 40,
    "group": "Maggi",
    "category": "Food",
    "image": "cheesy-pasta",
    "id": "plain-maggi",
    "description": "Maggi",
    "featured": false
  },
  {
    "name": "Cheese Maggi",
    "price": 60,
    "group": "Maggi",
    "category": "Food",
    "image": "cheesy-pasta",
    "id": "cheese-maggi",
    "description": "Maggi",
    "featured": false
  },
  {
    "name": "French Fries",
    "price": 80,
    "group": "Fries",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "french-fries",
    "description": "Fries",
    "featured": false
  },
  {
    "name": "Peri Peri Fries",
    "price": 90,
    "group": "Fries",
    "category": "Food",
    "image": "grilled-sandwich",
    "id": "peri-peri-fries",
    "description": "Fries",
    "featured": false
  },
  {
    "name": "Veg Fried Rice (Half)",
    "price": 80,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-fried-rice-half",
    "description": "Half serving",
    "featured": false
  },
  {
    "name": "Veg Fried Rice (Full)",
    "price": 140,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-fried-rice-full",
    "description": "Full serving",
    "featured": false
  },
  {
    "name": "Paneer Fried Rice (Half)",
    "price": 90,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "paneer-fried-rice-half",
    "description": "Half serving",
    "featured": false
  },
  {
    "name": "Paneer Fried Rice (Full)",
    "price": 170,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "paneer-fried-rice-full",
    "description": "Full serving",
    "featured": false
  },
  {
    "name": "Veg Manchurian (Half)",
    "price": 90,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-manchurian-half",
    "description": "Half serving",
    "featured": false
  },
  {
    "name": "Veg Manchurian (Full)",
    "price": 170,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-manchurian-full",
    "description": "Full serving",
    "featured": false
  },
  {
    "name": "Chilli Potato",
    "price": 140,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "chilli-potato",
    "description": "Chinese",
    "featured": false
  },
  {
    "name": "Honey Chilli Potato",
    "price": 160,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "honey-chilli-potato",
    "description": "Chinese",
    "featured": false
  },
  {
    "name": "Chilli Paneer",
    "price": 190,
    "group": "Chinese",
    "category": "Food",
    "image": "paneer-curry",
    "id": "chilli-paneer",
    "description": "Chinese",
    "featured": false
  },
  {
    "name": "Veg Steam Momos (6 pcs)",
    "price": 60,
    "group": "Momos & Rolls",
    "category": "Food",
    "image": "veg-momos",
    "id": "veg-steam-momos-6-pcs",
    "description": "Momos & Rolls",
    "featured": true
  },
  {
    "name": "Paneer Momos (6 pcs)",
    "price": 90,
    "group": "Momos & Rolls",
    "category": "Food",
    "image": "veg-momos",
    "id": "paneer-momos-6-pcs",
    "description": "Momos & Rolls",
    "featured": false
  },
  {
    "name": "Veg Spring Roll",
    "price": 60,
    "group": "Momos & Rolls",
    "category": "Food",
    "image": "veg-momos",
    "id": "veg-spring-roll",
    "description": "Momos & Rolls",
    "featured": false
  },
  {
    "name": "Veg Roll",
    "price": 60,
    "group": "Momos & Rolls",
    "category": "Food",
    "image": "veg-momos",
    "id": "veg-roll",
    "description": "Momos & Rolls",
    "featured": false
  },
  {
    "name": "Veg / Tomato Soup",
    "price": 80,
    "group": "Soups",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-tomato-soup",
    "description": "Soups",
    "featured": false
  },
  {
    "name": "Veg Manchow Soup",
    "price": 90,
    "group": "Soups",
    "category": "Food",
    "image": "paneer-curry",
    "id": "veg-manchow-soup",
    "description": "Soups",
    "featured": false
  },
  {
    "name": "Sweet Corn Soup",
    "price": 90,
    "group": "Soups",
    "category": "Food",
    "image": "paneer-curry",
    "id": "sweet-corn-soup",
    "description": "Soups",
    "featured": false
  },
  {
    "name": "Fresh Lime Soda",
    "price": 50,
    "group": "Cold Drinks",
    "category": "Beverages",
    "image": "blue-lemonade",
    "id": "fresh-lime-soda",
    "description": "Cold Drinks",
    "featured": false
  },
  {
    "name": "Mango Shake",
    "price": 50,
    "group": "Shakes",
    "category": "Beverages",
    "image": "strawberry-shake",
    "id": "mango-shake",
    "description": "Shakes",
    "featured": false
  },
  {
    "name": "Banana Shake",
    "price": 50,
    "group": "Shakes",
    "category": "Beverages",
    "image": "chocolate-shake",
    "id": "banana-shake",
    "description": "Shakes",
    "featured": false
  },
  {
    "name": "Strawberry Shake",
    "price": 60,
    "group": "Shakes",
    "category": "Beverages",
    "image": "strawberry-shake",
    "id": "strawberry-shake",
    "description": "Shakes",
    "featured": true
  },
  {
    "name": "Litchi Shake",
    "price": 60,
    "group": "Shakes",
    "category": "Beverages",
    "image": "chocolate-shake",
    "id": "litchi-shake",
    "description": "Shakes",
    "featured": false
  },
  {
    "name": "Orange Shake",
    "price": 50,
    "group": "Shakes",
    "category": "Beverages",
    "image": "strawberry-shake",
    "id": "orange-shake",
    "description": "Shakes",
    "featured": false
  },
  {
    "name": "Guava Shake",
    "price": 60,
    "group": "Shakes",
    "category": "Beverages",
    "image": "strawberry-shake",
    "id": "guava-shake",
    "description": "Shakes",
    "featured": false
  }
] as MenuItem[];

export const menuById = new Map(menuItems.map(item => [item.id, item]));
