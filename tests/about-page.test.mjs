import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const text = (file) => readFileSync(new URL(file, import.meta.url), "utf8");

test("Part 5 creates the About route and all six sections", () => {
  const page = text("../src/app/about/page.tsx");
  for (const section of ["AboutHero", "OurStory", "OurValues", "OurAmbience", "FoodGalleryStrip", "VisitUs"]) {
    assert.match(page, new RegExp(`<${section}\\s*/>`), `${section} missing`);
  }
  for (const heading of ["Our Story", "Our Passion", "AB Hunger Station", "What We Stand For", "Ambience", "Visit Us Today"]) {
    assert.ok(page.includes(heading), `Missing heading: ${heading}`);
  }
  assert.match(page, /export const metadata/);
  assert.match(page, /<main id="main-content"/);
});

test("Part 5 shows four value cards and three ambience photos", () => {
  const page = text("../src/app/about/page.tsx");
  for (const card of ["Delicious Food", "Great Beverages", "Cozy Ambience", "Warm Hospitality"]) {
    assert.ok(page.includes(card), `Missing value card: ${card}`);
  }
  for (const image of ["main-dining", "plant-lounge", "booth-seating"]) {
    assert.ok(page.includes(`"${image}"`), `Missing ambience photo: ${image}`);
  }
});

test("Part 5 adds five reference food strip photos and indexes them", () => {
  const library = text("../src/config/image-library.ts");
  const manifest = JSON.parse(text("../public/images/asset-manifest.json"));
  for (const item of ["burger", "pasta", "cappuccino", "sandwich", "brownie"]) {
    const key = `about-strip-${item}`;
    assert.ok(existsSync(new URL(`../public/images/food/${key}.webp`, import.meta.url)), `${key} file missing`);
    assert.ok(library.includes(`"${key}"`), `${key} config missing`);
    const asset = manifest.assets.find((a) => a.id === key);
    assert.ok(asset, `${key} manifest missing`);
    assert.equal(asset.productionReady, false, `${key} must be identified as reference derived`);
  }
});

test("Part 5 remains responsive and never fabricates a Maps destination", () => {
  const css = text("../src/app/about/about.css");
  assert.match(css, /max-width: 700px/);
  assert.match(css, /max-width: 420px/);
  assert.match(css, /prefers-reduced-motion/);
  const page = text("../src/app/about/page.tsx");
  assert.match(page, /contactLinks\.directions\s*\?/);
  assert.match(page, /href="\/contact"/);
  assert.doesNotMatch(page, /https:\/\/maps\.|wa\.me\/\d+/);
});
