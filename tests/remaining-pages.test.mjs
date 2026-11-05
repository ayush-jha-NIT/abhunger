import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
const read = path=>readFileSync(new URL(path, import.meta.url),"utf8");
const routes=["gallery","contact","menu","parties-events","book-table","cart","checkout"];
test("all seven remaining routes exist with screenshot-inspired styles",()=>{
  assert.ok(existsSync(new URL("../src/app/experience.css",import.meta.url)));
  for(const route of routes)assert.ok(existsSync(new URL(`../src/app/${route}/page.tsx`,import.meta.url)),route);
});
test("WhatsApp requests must use verified configurable destination",()=>{
  const config=read("../src/config/restaurant.ts");
  assert.match(config,/NEXT_PUBLIC_RESTAURANT_WHATSAPP/);
  assert.match(config,/encodeURIComponent\(message\)/);
  assert.match(config,/NEXT_PUBLIC_MENU_CONFIRMED/);
  assert.match(config,/NEXT_PUBLIC_DELIVERY_FEE/);
});
test("cart storage and quantity actions persist with shared key",()=>{
  const cart=read("../src/features/cart/cart.ts");
  assert.match(cart,/CART_STORAGE_KEY/);
  assert.match(cart,/notifyCartUpdated/);
  assert.match(cart,/normalizeCart/);
  assert.match(cart,/cartTotal/);
});
test("forms require explicit restaurant acceptance",()=>{
  const booking=read("../src/app/book-table/booking-form.tsx");
  const event=read("../src/app/parties-events/event-form.tsx");
  const checkout=read("../src/app/checkout/checkout-content.tsx");
  assert.match(booking,/Please confirm availability/);
  assert.match(event,/Please confirm availability and charges/);
  assert.match(checkout,/Please confirm order acceptance/);
  assert.match(checkout,/restaurant\.deliveryFee/);
});
test("SEO routes and business schema are present",()=>{
  for(const route of ["../src/app/sitemap.ts","../src/app/robots.ts","../src/components/experience/restaurant-schema.tsx"])assert.ok(existsSync(new URL(route,import.meta.url)));
  assert.doesNotMatch(read("../src/components/experience/restaurant-schema.tsx"),/aggregateRating|openingHours/);
});
