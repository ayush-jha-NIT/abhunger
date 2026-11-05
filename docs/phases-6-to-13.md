# AB Hunger Station — Phases 6 through 13

## Implemented in this batch
- Part 6: gallery category filters, food/drinks/ambience/moments sections, photo tiles and optional Instagram link.
- Part 7: contact hero, restaurant information, WhatsApp inquiry form and conservative map fallback until verified URL is configured.
- Part 8: code-managed menu, search, category tabs, image cards and cart controls. Prices from screenshots are reference-only and plainly labeled.
- Part 9: Parties & Events cards, venue benefits and event inquiry form using WhatsApp.
- Part 10: Book a Table form with guests, date, time and WhatsApp request; **not** instant confirmation.
- Part 11: persistent browser cart with quantity changes, removal, recommended dishes and subtotal.
- Part 12: delivery/takeaway checkout, customer details, itemized WhatsApp message, Cash/UPI coordination.
- Part 13: metadata, structured data when an official URL is configured, sitemap, robots, automated checks and handover notes.

## Required before taking real orders
1. Set `NEXT_PUBLIC_RESTAURANT_WHATSAPP` to the client's verified business WhatsApp number with country code.
2. Verify and update the official menu and prices in `src/data/menu.ts`; set `NEXT_PUBLIC_MENU_CONFIRMED=true` only after sign-off.
3. Set verified `NEXT_PUBLIC_DELIVERY_FEE` (0 for confirmed free delivery) or leave blank and require manual fee confirmation.
4. Replace reference screenshot crops with approved sharp restaurant and food photographs at the existing image paths.
5. Set official Google Maps and Instagram URLs, and deploy with `NEXT_PUBLIC_SITE_URL`.

## Nonfeatures
- There is no payment gateway, online payment collection, real-time inventory, order tracking, automatic reservation confirmation, or backend/admin panel.
- WhatsApp links open prefilled messages only; a customer must send them. An inquiry is not a confirmed order.
- No unverified taxes, fees, discounts or restaurant capacity claims are calculated.

## Local checks

```bash
npm ci
npm run assets:check
npm test
npm run lint
npm run typecheck
npm run build
```

Inspect all nine pages at 1440px, 1024px, 768px and 390px. Do manual QA with a verified WhatsApp number before production.
