import { readFileSync } from "node:fs";

const checks = [
  ["Verified restaurant WhatsApp", /^\d{10,15}$/.test((process.env.NEXT_PUBLIC_RESTAURANT_WHATSAPP || "").replace(/\D/g, ""))],
  ["Approved official menu", process.env.NEXT_PUBLIC_MENU_CONFIRMED === "true"],
  ["Approved production photography", process.env.NEXT_PUBLIC_IMAGES_APPROVED === "true"],
  ["Owner-approved website publication", process.env.NEXT_PUBLIC_SITE_APPROVED === "true"],
  ["Configured HTTPS site URL", /^https:\/\//.test(process.env.NEXT_PUBLIC_SITE_URL || "")],
  ["Approved delivery fee (0 if genuinely free)", (() => {
    const v = process.env.NEXT_PUBLIC_DELIVERY_FEE;
    return v !== undefined && v.trim() !== "" && Number.isFinite(Number(v)) && Number(v) >= 0;
  })()],
  ["Official Google Maps URL", /^https:\/\//.test(process.env.NEXT_PUBLIC_RESTAURANT_MAPS_URL || "")],
];
const manifest = JSON.parse(readFileSync(new URL("../public/images/asset-manifest.json", import.meta.url), "utf8"));
const entries = Array.isArray(manifest.assets) ? manifest.assets : Object.values(manifest.assets || {});
const allImagesApproved = entries.length > 0 && entries.every((image) => image.productionReady === true);
checks.push(["Image manifest has approved HD originals", allImagesApproved]);
console.log("AB Hunger Station production readiness:");
for (const [label, ok] of checks) console.log(`${ok ? "PASS" : "BLOCKED"}: ${label}`);
if (checks.some(([, ok]) => !ok)) {
  console.error("Do not enable live ordering or SEO indexing until blocked items are verified.");
  process.exitCode = 1;
}
