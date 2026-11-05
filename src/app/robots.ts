import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { productionReadiness } from "@/config/production";

export default function robots(): MetadataRoute.Robots {
  if (!productionReadiness.ready) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/cart", "/checkout"] },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
