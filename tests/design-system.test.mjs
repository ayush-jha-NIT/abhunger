import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("Part 1 includes shared accessible layout and reusable UI", () => {
  for (const path of [
    "../src/components/layout/site-header.tsx",
    "../src/components/layout/site-footer.tsx",
    "../src/components/ui/action-link.tsx",
    "../src/components/ui/section-heading.tsx",
    "../src/components/ui/page-hero.tsx",
    "../src/components/ui/feature-card.tsx",
    "../public/images/branding/ab-hunger-mark.svg",
    "../docs/phase-1-visual-foundation.md",
  ]) assert.ok(existsSync(new URL(path, import.meta.url)), `${path} should exist`);

  const header = read("../src/components/layout/site-header.tsx");
  assert.match(header, /aria-expanded/);
  assert.match(header, /aria-controls/);
  assert.match(header, /aria-current/);
  assert.match(header, /inert=/);
});

test("brand specification preserves the approved cream orange brown palette", () => {
  const config = read("../src/config/brand.ts");
  for (const value of ["#fff8f3", "#dd470b", "#2c130e", "#32170f"]) {
    assert.ok(config.includes(value), `expected ${value}`);
  }
  assert.match(config, /referenceLogoIsApproximation: true/);
  assert.match(config, /confirmed: false/);
});

test("unknown contact links are not fabricated", () => {
  const config = read("../src/config/brand.ts");
  assert.match(config, /whatsapp: null/);
  assert.match(config, /phone: null/);
  assert.match(config, /directions: null/);
});

test("site layout includes the shared header and footer", () => {
  const layout = read("../src/app/layout.tsx");
  assert.match(layout, /<SiteHeader\s*\/>/);
  assert.match(layout, /<SiteFooter\s*\/>/);
});
