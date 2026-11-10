import { readFileSync, statSync, existsSync } from "node:fs";
import { resolve, sep } from "node:path";

const root = process.cwd();
const document = JSON.parse(readFileSync(resolve(root, "public/images/asset-manifest.json"), "utf8"));
if (document.version !== 2 || !Array.isArray(document.assets)) throw new Error("Bad asset manifest");
const seen = new Set();
for (const item of document.assets) {
  if (!/^\/images\/[a-z0-9-]+\/[a-z0-9-]+\.webp$/.test(item.src)) {
    throw new Error(`Invalid asset path: ${item.src}`);
  }
  if (seen.has(item.src)) throw new Error(`Duplicate asset: ${item.src}`);
  seen.add(item.src);
  if (!item.alt || !Number.isInteger(item.width) || !Number.isInteger(item.height)) {
    throw new Error(`Missing metadata for ${item.src}`);
  }
  // Only uploaded, genuine venue photographs may be marked ready. All mockup crops remain unapproved.
  if (item.sourceReference === "uploaded-venue") {
    if (item.productionReady !== true) throw new Error(`Uploaded venue photo not approved: ${item.src}`);
    if (item.width < 640 || item.height < 350) throw new Error(`Venue photo resolution too low: ${item.src}`);
  } else if (item.productionReady !== false) {
    throw new Error(`Unexpected production approval: ${item.src}`);
  }
  const path = resolve(root, "public", item.src.slice(1));
  if (!path.startsWith(resolve(root, "public") + sep)) throw new Error(`Escaped root: ${item.src}`);
  if (!existsSync(path) || statSync(path).size < 1500) throw new Error(`Missing/empty file: ${item.src}`);
  const data = readFileSync(path);
  if (data.toString("ascii", 0, 4) !== "RIFF" || data.toString("ascii", 8, 12) !== "WEBP") {
    throw new Error(`Not a valid WebP header: ${item.src}`);
  }
}
console.log(`Validated ${document.assets.length} WebP assets, including approved venue photographs.`);
