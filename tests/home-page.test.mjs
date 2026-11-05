import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("Part 4 replaces the preview with all six screenshot home sections", () => {
  const page = read("../src/app/page.tsx");
  for (const component of ["HomeHero", "SpecialSection", "HighlightsSection", "AboutSection", "GallerySection", "VisitSection"]) {
    assert.match(page, new RegExp(`<${component}\\s*/>`), `Missing ${component}`);
  }
  for (const title of ["AB Hunger Station", "What Makes Us Special", "Popular Menu Highlights", "About AB Hunger Station", "Gallery &", "Visit Us Today"]) {
    assert.ok(page.includes(title), `Expected ${title}`);
  }
  assert.doesNotMatch(page, /IMAGE ASSETS PENDING|site-preview-hero/);
  assert.match(page, /priority/);
});

test("reference prices remain identified as unconfirmed display copy", () => {
  const content = read("../src/config/home-content.ts");
  assert.match(content, /not a confirmed/);
  for (const value of [149,179,299,169,199]) assert.ok(content.includes(`referencePriceRupees: ${value}`));
});

test("Home-specific image crops are present and indexed", () => {
  for (const name of ["fresh-ingredients","fast-service"]) {
    assert.ok(existsSync(new URL(`../public/images/food/${name}.webp`, import.meta.url)));
    assert.ok(read("../src/config/image-library.ts").includes(`"${name}"`));
    assert.ok(read("../public/images/asset-manifest.json").includes(`"id": "${name}"`));
  }
});

test("Home design is responsive and does not expose fabricated contact links", () => {
  const css=read("../src/app/home.css");
  assert.match(css, /max-width: 700px/);
  assert.match(css, /max-width: 390px/);
  const page=read("../src/app/page.tsx");
  assert.match(page, /contactLinks\.directions\s*\?/);
  assert.doesNotMatch(page, /wa\.me\/\d+|maps\.google\.com\/maps\/\?/);
});
