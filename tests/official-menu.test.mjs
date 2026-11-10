import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read=p=>readFileSync(new URL(p,import.meta.url),"utf8");
test("menu uses printed physical price list instead of mockup prices",()=>{
  const text=read("../src/data/menu.ts");
  assert.match(text,/Veg Loaded Burger/);
  assert.match(text,/Paneer Butter Masala/);
  assert.match(text,/Veg Steam Momos/);
  assert.doesNotMatch(text,/Cappuccino",.*149/);
  assert.doesNotMatch(text,/Cheese Pizza",.*299/);
});
test("home pick menu prices reflect physical menu",()=>{
  const text=read("../src/config/home-content.ts");
  assert.match(text,/Veg Loaded Burger.*referencePriceRupees: 80/);
  assert.match(text,/Peri Peri Sandwich.*referencePriceRupees: 70/);
});
