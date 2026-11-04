import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const doc = JSON.parse(readFileSync(resolve(root, "public/images/asset-manifest.json"), "utf8"));

test("screenshot-based visual library has all eight page-specific heroes", () => {
  const images = new Set(doc.assets.map((item) => item.src));
  for (const file of [
    "/images/food/home-hero.webp", "/images/food/about-hero.webp",
    "/images/food/gallery-hero.webp", "/images/food/contact-hero.webp",
    "/images/events/party-hero.webp", "/images/interiors/table-booking-hero.webp",
    "/images/food/cart-hero.webp", "/images/food/checkout-hero.webp",
  ]) assert.ok(images.has(file), `${file} missing`);
});

test("every image has accessible text and references an existing local file", () => {
  for (const img of doc.assets) {
    assert.ok(img.alt?.length >= 12, `Missing accessible alt text for ${img.src}`);
    assert.ok(img.width >= 100 && img.height >= 40, `Tiny crop: ${img.src}`);
    assert.ok(existsSync(resolve(root, "public", img.src.slice(1))));
  }
});

test("unverified screenshot imagery is never marked production ready", () => {
  assert.ok(doc.assets.every((img) => img.productionReady === false));
  assert.ok(doc.assets.length >= 35);
});
