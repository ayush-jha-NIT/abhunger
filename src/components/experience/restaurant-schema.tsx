import { restaurant } from "@/config/restaurant";
import { siteUrl } from "@/config/site";
import { productionReadiness } from "@/config/production";

export function RestaurantSchema() {
  // No fabricated opening hours, rating, verified phone, or geo-coordinates.
  if (!process.env.NEXT_PUBLIC_SITE_URL || !productionReadiness.ready) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    url: siteUrl.href,
    servesCuisine: "Cafe",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bhagwa Market",
      addressLocality: "Prayagraj",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    ...(restaurant.whatsapp ? { telephone: `+${restaurant.whatsapp}` } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
