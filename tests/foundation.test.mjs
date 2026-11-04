import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const paths = [
  "/", "/about", "/menu", "/gallery", "/parties-events",
  "/contact", "/book-table", "/cart", "/checkout",
];

test("all nine approved routes are recorded exactly once", () => {
  const routes = readJson("../src/config/routes.json");
  assert.equal(routes.length, paths.length);
  assert.deepEqual(routes.map((route) => route.href).sort(), [...paths].sort());
  assert.equal(new Set(routes.map((route) => route.id)).size, routes.length);
});

test("missing Menu design is clearly marked", () => {
  const routes = readJson("../src/config/routes.json");
  assert.equal(routes.find((route) => route.id === "menu").reference, "not-supplied");
});

test("required app and configuration files exist", () => {
  for (const path of [
    "../src/app/layout.tsx", "../src/app/page.tsx", "../src/app/globals.css",
    "../src/config/site.ts", "../next.config.ts", "../postcss.config.mjs",
    "../tsconfig.json", "../.env.example",
  ]) {
    assert.ok(existsSync(new URL(path, import.meta.url)), `${path} must exist`);
  }
});

test("package scripts cover lint, typecheck, test and build", () => {
  const pkg = readJson("../package.json");
  for (const key of ["lint", "typecheck", "test", "build"]) {
    assert.equal(typeof pkg.scripts[key], "string");
  }
});
