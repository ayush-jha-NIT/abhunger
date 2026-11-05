import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

const indexablePages = ["", "/about", "/menu", "/gallery", "/parties-events", "/contact", "/book-table"];
export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: path === "/menu" ? "weekly" : "monthly",
    priority: path ? 0.7 : 1,
  }));
}
