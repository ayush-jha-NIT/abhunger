import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("Part 3 component files are present", () => {
  for (const file of [
    "../src/config/header.ts",
    "../src/lib/cart-storage.ts",
    "../src/components/layout/cart-indicator.tsx",
    "../src/components/ui/photo-tile.tsx",
    "../src/components/ui/info-strip.tsx",
    "../public/images/branding/ab-hunger-mark-light.svg",
    "../docs/phase-3-shared-layout.md",
  ]) assert.ok(existsSync(new URL(file, import.meta.url)), `Missing ${file}`);
});

test("header has real accessible cart counts and keyboard mobile menu", () => {
  const header = source("../src/components/layout/site-header.tsx");
  assert.match(header, /getHeaderVariant\(pathname\)/);
  assert.match(header, /<CartIndicator/);
  assert.match(header, /aria-expanded=/);
  assert.match(header, /aria-current=/);
  assert.match(header, /inert=/);
  assert.match(header, /event\.key === "Escape"/);
  assert.doesNotMatch(header, /site-cart-count[^\n]*>[345]</);
});

test("cart counts come from stored quantity values, not a magic badge number", () => {
  const sourceCode = source("../src/lib/cart-storage.ts");
  assert.match(sourceCode, /ab-hunger-cart-v1/);
  assert.match(sourceCode, /JSON\.parse/);
  assert.match(sourceCode, /localStorage\.getItem/);
  assert.match(sourceCode, /window\.addEventListener\("storage"/);
  assert.match(sourceCode, /notifyCartUpdated/);
});

test("shared photographic components take typed assets from Part 2", () => {
  const hero = source("../src/components/ui/page-hero.tsx");
  const tile = source("../src/components/ui/photo-tile.tsx");
  assert.match(hero, /imageLibrary/);
  assert.match(hero, /alt=""/);
  assert.match(tile, /imageLibrary/);
  assert.match(tile, /alt=\{asset\.alt\}/);
});
