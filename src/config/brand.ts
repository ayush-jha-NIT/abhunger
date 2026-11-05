import { restaurant } from "@/config/restaurant";

/** Design reference colors sampled/approximated from the supplied page mockups. */
export const brand = {
  colors: {
    cream: "#fff8f3",
    creamDark: "#f6e8de",
    orange: "#dd470b",
    orangeDark: "#b83906",
    ink: "#2c130e",
    brown: "#32170f",
    border: "#e9d7cb",
  },
  logo: "/images/branding/ab-hunger-mark.svg",
  referenceLogoIsApproximation: true,
  containerWidth: "1200px",
} as const;

/** Screenshot text is a design reference, not verified business operating information. */
export const referenceBusinessCopy = {
  displayLocation: "Bhagwa Market, Prayagraj",
  displayHours: process.env.NEXT_PUBLIC_CONFIRMED_OPENING_HOURS?.trim() || "Hours: confirm with café",
  confirmed: false,
} as const;

/** Only configured, verified HTTPS links are exposed. Unset links remain inactive. */
const safePublicUrl = (value: string | undefined | null): string | null => {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch { return null; }
};

/** Contact links are absent until approved business details are configured. */
export const contactLinks: {
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  whatsapp: string | null;
  directions: string | null;
  email: string | null;
  phone: string | null;
} = {
  instagram: safePublicUrl(restaurant.instagramUrl),
  facebook: safePublicUrl(process.env.NEXT_PUBLIC_RESTAURANT_FACEBOOK_URL),
  youtube: safePublicUrl(process.env.NEXT_PUBLIC_RESTAURANT_YOUTUBE_URL),
  whatsapp: restaurant.whatsapp ? `https://wa.me/${restaurant.whatsapp}` : null,
  directions: safePublicUrl(restaurant.mapsUrl),
  email: null,
  phone: restaurant.whatsapp ? `+${restaurant.whatsapp}` : null,
};
