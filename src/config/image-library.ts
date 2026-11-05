/**
 * Part 2 reference-derived image catalog.
 * IMPORTANT: These are crops from the supplied mockup screenshots, NOT original photographs.
 * Replace with approved high-resolution originals before launching the site.
 * Keep filenames stable so page components do not require edits when assets are upgraded.
 */
export type CafeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: "hero" | "food" | "drink" | "venue" | "event";
  productionReady: boolean;
};

export const imageLibrary = {
  "home-hero": {"src": "/images/food/home-hero.webp", "alt": "Coffee, fries, cheeseburger, pizza and chocolate brownie in warm café lighting", "width": 658, "height": 280, "kind": "hero", "productionReady": false},
  "about-hero": {"src": "/images/food/about-hero.webp", "alt": "Cheese pizza with a slice lifted above a wooden serving board", "width": 600, "height": 255, "kind": "hero", "productionReady": false},
  "gallery-hero": {"src": "/images/food/gallery-hero.webp", "alt": "Cheeseburger, french fries and a creamy iced beverage", "width": 595, "height": 238, "kind": "hero", "productionReady": false},
  "contact-hero": {"src": "/images/food/contact-hero.webp", "alt": "Cappuccino, brownie and flowers on a cosy café table", "width": 593, "height": 301, "kind": "hero", "productionReady": false},
  "party-hero": {"src": "/images/events/party-hero.webp", "alt": "Warmly lit birthday table with gold and white balloons", "width": 620, "height": 319, "kind": "hero", "productionReady": false},
  "table-booking-hero": {"src": "/images/interiors/table-booking-hero.webp", "alt": "Romantic reserved restaurant table with candle and flowers", "width": 654, "height": 355, "kind": "hero", "productionReady": false},
  "cart-hero": {"src": "/images/food/cart-hero.webp", "alt": "Cappuccino, burger, pizza and brownie arranged on a wooden table", "width": 693, "height": 237, "kind": "hero", "productionReady": false},
  "checkout-hero": {"src": "/images/food/checkout-hero.webp", "alt": "Cheeseburger and fries on a wooden serving board", "width": 548, "height": 170, "kind": "hero", "productionReady": false},
  "cheese-pull-pizza": {"src": "/images/food/cheese-pull-pizza.webp", "alt": "Pizza slice with stretchy melted cheese", "width": 253, "height": 158, "kind": "food", "productionReady": false},
  "veg-momos": {"src": "/images/food/veg-momos.webp", "alt": "Steamed momos with red dipping sauce", "width": 245, "height": 158, "kind": "food", "productionReady": false},
  "paneer-curry": {"src": "/images/food/paneer-curry.webp", "alt": "Paneer curry in a dark ceramic bowl", "width": 243, "height": 158, "kind": "food", "productionReady": false},
  "cheesy-pasta": {"src": "/images/food/cheesy-pasta.webp", "alt": "Penne pasta coated with cheese sauce", "width": 258, "height": 158, "kind": "food", "productionReady": false},
  "cappuccino": {"src": "/images/food/cappuccino.webp", "alt": "White cup of cappuccino with latte art", "width": 254, "height": 183, "kind": "food", "productionReady": false},
  "chocolate-shake": {"src": "/images/food/chocolate-shake.webp", "alt": "Chocolate milkshake topped with whipped cream", "width": 250, "height": 183, "kind": "drink", "productionReady": false},
  "blue-lemonade": {"src": "/images/food/blue-lemonade.webp", "alt": "Bright blue lemonade with lime and fresh mint", "width": 243, "height": 183, "kind": "drink", "productionReady": false},
  "strawberry-shake": {"src": "/images/food/strawberry-shake.webp", "alt": "Strawberry shake topped with whipped cream", "width": 255, "height": 183, "kind": "drink", "productionReady": false},
  "veg-burger": {"src": "/images/food/veg-burger.webp", "alt": "Sesame bun vegetarian burger with lettuce, tomato and cheese", "width": 180, "height": 91, "kind": "food", "productionReady": false},
  "grilled-sandwich": {"src": "/images/food/grilled-sandwich.webp", "alt": "Grilled club sandwich with fries", "width": 178, "height": 91, "kind": "food", "productionReady": false},
  "brownie-ice-cream": {"src": "/images/food/brownie-ice-cream.webp", "alt": "Chocolate brownie with vanilla ice cream", "width": 179, "height": 91, "kind": "food", "productionReady": false},
  "pasta-primavera": {"src": "/images/food/pasta-primavera.webp", "alt": "Pasta tossed with vegetables and fresh herbs", "width": 158, "height": 56, "kind": "food", "productionReady": false},
  "cheesecake": {"src": "/images/food/cheesecake.webp", "alt": "Cheesecake topped with berries", "width": 151, "height": 56, "kind": "food", "productionReady": false},
  "iced-coffee": {"src": "/images/food/iced-coffee.webp", "alt": "Cold creamy iced coffee with whipped cream", "width": 152, "height": 56, "kind": "drink", "productionReady": false},
  "coffee-beans": {"src": "/images/food/coffee-beans.webp", "alt": "Fresh latte art in a coffee cup", "width": 154, "height": 56, "kind": "drink", "productionReady": false},
  "exterior": {"src": "/images/interiors/exterior.webp", "alt": "AB Hunger Station concept storefront and evening café exterior", "width": 427, "height": 227, "kind": "venue", "productionReady": false},
  "main-dining": {"src": "/images/interiors/main-dining.webp", "alt": "Comfortable café seating and warm pendant lights", "width": 252, "height": 152, "kind": "venue", "productionReady": false},
  "plant-lounge": {"src": "/images/interiors/plant-lounge.webp", "alt": "Plant-filled dining room with hanging lights", "width": 246, "height": 152, "kind": "venue", "productionReady": false},
  "booth-seating": {"src": "/images/interiors/booth-seating.webp", "alt": "Café booths with warm amber lights and greenery", "width": 258, "height": 152, "kind": "venue", "productionReady": false},
  "feature-wall": {"src": "/images/interiors/feature-wall.webp", "alt": "Cosy café seating beside a decorated feature wall", "width": 253, "height": 152, "kind": "venue", "productionReady": false},
  "about-wide": {"src": "/images/interiors/about-wide.webp", "alt": "Warm café dining hall with wood seating and plants", "width": 566, "height": 122, "kind": "venue", "productionReady": false},
  "booking-seating": {"src": "/images/interiors/booking-seating.webp", "alt": "Quiet café dining area with warm seating", "width": 384, "height": 160, "kind": "venue", "productionReady": false},
  "party-space": {"src": "/images/events/party-space.webp", "alt": "Café party space with decorated green wall and warm pendants", "width": 572, "height": 211, "kind": "event", "productionReady": false},
  "birthday-cake": {"src": "/images/events/birthday-cake.webp", "alt": "Birthday cake with candles at a celebration", "width": 123, "height": 116, "kind": "event", "productionReady": false},
  "anniversary": {"src": "/images/events/anniversary.webp", "alt": "Anniversary roses and heart lights", "width": 130, "height": 116, "kind": "event", "productionReady": false},
  "kitty-party": {"src": "/images/events/kitty-party.webp", "alt": "Pink chairs around a festive small-group table", "width": 132, "height": 116, "kind": "event", "productionReady": false},
  "corporate": {"src": "/images/events/corporate.webp", "alt": "Dining table ready for a corporate group", "width": 146, "height": 116, "kind": "event", "productionReady": false},
  "family-gathering": {"src": "/images/events/family-gathering.webp", "alt": "Warm dining space for family gatherings", "width": 131, "height": 116, "kind": "event", "productionReady": false},
  "private-celebration": {"src": "/images/events/private-celebration.webp", "alt": "Private dining space decorated with balloons", "width": 153, "height": 116, "kind": "event", "productionReady": false},
  "celebration-cake": {"src": "/images/events/celebration-cake.webp", "alt": "Chocolate cake with candles and gold party balloons", "width": 238, "height": 95, "kind": "event", "productionReady": false},
  "fresh-ingredients": {"src": "/images/food/fresh-ingredients.webp", "alt": "Fresh tomatoes, lettuce and seasonal vegetables arranged for food preparation", "width": 177, "height": 145, "kind": "food", "productionReady": false},
  "fast-service": {"src": "/images/food/fast-service.webp", "alt": "Gold service bell on a warm restaurant counter", "width": 181, "height": 146, "kind": "food", "productionReady": false},
  "about-strip-burger": {"src": "/images/food/about-strip-burger.webp", "alt": "Close-up of a vegetarian burger on a warm café counter", "width": 231, "height": 146, "kind": "food", "productionReady": false},
  "about-strip-pasta": {"src": "/images/food/about-strip-pasta.webp", "alt": "Pasta with vegetables and herbs in a white bowl", "width": 217, "height": 146, "kind": "food", "productionReady": false},
  "about-strip-cappuccino": {"src": "/images/food/about-strip-cappuccino.webp", "alt": "Cappuccino with latte art served on a saucer", "width": 202, "height": 146, "kind": "food", "productionReady": false},
  "about-strip-sandwich": {"src": "/images/food/about-strip-sandwich.webp", "alt": "Toasted sandwich with fries and fresh vegetables", "width": 213, "height": 146, "kind": "food", "productionReady": false},
  "about-strip-brownie": {"src": "/images/food/about-strip-brownie.webp", "alt": "Chocolate brownie topped with ice cream and chocolate sauce", "width": 223, "height": 146, "kind": "food", "productionReady": false},
} as const satisfies Record<string, CafeImage>;

export type CafeImageId = keyof typeof imageLibrary;

export function getCafeImage(id: CafeImageId): CafeImage {
  return imageLibrary[id];
}
