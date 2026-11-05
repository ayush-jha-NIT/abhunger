import { restaurant } from "@/config/restaurant";

/** An unapproved design preview must not be indexed as a real operating restaurant. */
export const productionReadiness = {
  whatsappApproved: Boolean(restaurant.whatsapp),
  menuApproved: restaurant.menuConfirmed,
  photographsApproved: process.env.NEXT_PUBLIC_IMAGES_APPROVED === "true",
  businessApproved: process.env.NEXT_PUBLIC_SITE_APPROVED === "true",
  get ready() {
    return this.whatsappApproved && this.menuApproved && this.photographsApproved && this.businessApproved;
  },
} as const;
