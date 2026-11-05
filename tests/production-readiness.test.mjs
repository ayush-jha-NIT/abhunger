import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = path => readFileSync(new URL(path, import.meta.url), "utf8");

test("Unapproved public website remains noindex and robots-blocked", () => {
  assert.match(read("../src/config/production.ts"), /NEXT_PUBLIC_IMAGES_APPROVED/);
  assert.match(read("../src/config/production.ts"), /NEXT_PUBLIC_SITE_APPROVED/);
  assert.match(read("../src/app/layout.tsx"), /index: false, follow: false/);
  assert.match(read("../src/app/robots.ts"), /disallow: "\/"/);
  assert.match(read("../src/app/sitemap.ts"), /!productionReadiness\.ready/);
});

test("Legal pages exist and footer provides working links", () => {
  assert.ok(existsSync(new URL("../src/app/privacy-policy/page.tsx", import.meta.url)));
  assert.ok(existsSync(new URL("../src/app/terms-and-conditions/page.tsx", import.meta.url)));
  assert.match(read("../src/components/layout/site-footer.tsx"), /href="\/privacy-policy"/);
  assert.match(read("../src/components/layout/site-footer.tsx"), /href="\/terms-and-conditions"/);
});

test("No unverified opening hours are published by default", () => {
  const brand = read("../src/config/brand.ts");
  assert.match(brand, /NEXT_PUBLIC_CONFIRMED_OPENING_HOURS/);
  assert.doesNotMatch(brand, /Open Daily: 7:00 AM/);
});

test("Release readiness command exists", () => {
  assert.match(read("../package.json"), /release:check/);
  assert.match(read("../scripts/production-readiness.mjs"), /productionReady/);
});
