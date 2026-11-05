import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { productionReadiness } from "@/config/production";

const indexablePages = ["", "/about", "/menu", "/gallery", "/parties-events", "/contact", "/book-table"];
export default function sitemap(): MetadataRoute.Sitemap {
  if (!productionReadiness.ready) return [];
  return indexablePages.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: path === "/menu" ? "weekly" : "monthly",
    priority: path ? 0.7 : 1,
  }));
}
