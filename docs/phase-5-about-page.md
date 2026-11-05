# Part 5 — About page

Route: `/about`

Reference: `AB Hunger Station_ Our Story.png` supplied by the client.

## Implemented sections

1. Dark food hero with the exact editorial hierarchy: **ABOUT US / Our Story, Our Passion**.
2. Restaurant introduction with wide storefront image and warm cream background.
3. Four value cards: Delicious Food, Great Beverages, Cozy Ambience, Warm Hospitality.
4. Ambience introduction with three venue photos.
5. Five-food, edge-to-edge image strip, cropped from the supplied About design.
6. Visit Us Today callout. Uses the verified directions URL only if configured; otherwise links to Contact.

Includes descriptive alt text, headings, page metadata, responsive mobile/tablet layouts, and reduced-motion support.

## Image quality and accuracy

The supplied design is a screenshot, not the original restaurant image bundle. Images in `public/images/` are **reference screenshot crops** and have `productionReady: false`. They reproduce the requested composition at reference viewport scale but are not original high-resolution photographs. The storefront is also a design mockup; obtain approved real venue photography before launch. Replace images at the same paths to retain layouts and make sure the business details are confirmed.

## Visual QA (after applying locally)

- Compare `/about` with reference image at about 1086px desktop width.
- Confirm all six sections and the shared Part 3 header/footer appear.
- Test responsive widths: 390px, 700px, 900px, 1086px.
- Check hover/focus states, horizontal overflow, photo cropping, and link destinations.
- Run `node scripts/validate-assets.mjs`, `npm test`, `npm run lint`, `npm run typecheck`, `npm run build`.

No contact phone, Google Maps URL, or booking availability is invented in Part 5.
