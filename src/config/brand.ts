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
  displayHours: "Open Daily: 7:00 AM – 11:00 PM",
  confirmed: false,
} as const;

/** Leave contact actions disabled until real destinations are confirmed. */
export const contactLinks: {
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  whatsapp: string | null;
  directions: string | null;
  email: string | null;
  phone: string | null;
} = {
  instagram: null,
  facebook: null,
  youtube: null,
  whatsapp: null,
  directions: null,
  email: null,
  phone: null,
};
