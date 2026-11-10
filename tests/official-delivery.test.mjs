import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = p => readFileSync(new URL(p, import.meta.url), "utf8");
test("Owner-verified WhatsApp and maps URL are configured",()=>{ const s=read("../src/config/restaurant.ts"); assert.match(s,/917499668649/); assert.match(s,/VLofhWV8dE6YHxq58/); assert.match(s,/deliveryRadiusKm: 10/); });
test("Delivery threshold is strict and shared by checkout/cart",()=>{ assert.match(read("../src/config/restaurant.ts"),/subtotal > restaurant\.freeDeliveryAbove/); assert.match(read("../src/app/checkout/checkout-content.tsx"),/calculateDeliveryFee\(subtotal, orderType\)/); assert.match(read("../src/app/cart/cart-content.tsx"),/calculateDeliveryFee/); });
