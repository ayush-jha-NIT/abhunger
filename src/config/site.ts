/** Business metadata only. Operational details require client confirmation. */
export const siteConfig = {
  name: "AB Hunger Station",
  category: "Restaurant & Café",
  tagline: "Good Food, Great Coffee & Memorable Moments",
  description:
    "AB Hunger Station is a restaurant and café in Prayagraj. Discover food, coffee and a welcoming dining experience.",
  city: "Prayagraj",
  state: "Uttar Pradesh",
  country: "India",
} as const;

/** Never hard-code an unconfirmed production domain. */
export const siteUrl = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
})();
