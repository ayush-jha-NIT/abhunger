# Part 4 — Home page

The former Part 1 preview at `/` has been replaced by a complete responsive Home composition, using the uploaded AB Hunger Station Home reference as the source of truth.

## Sections
1. Hero: blended light left copy and reference-derived food image at right; two `/menu` CTAs.
2. What Makes Us Special: reference-matched fresh-ingredients, interior and service-bell cards.
3. Popular Menu Highlights: five sample products and the *design reference* sample prices.
4. About AB Hunger Station: short introduction beside the wide seating image.
5. Gallery & Ambience: six visual tiles linking to the future Gallery page.
6. Visit Us Today: exterior image, location details and link to the Contact page pending verified Google Maps directions.

## Known limitations before production
- **Reference image crops are NOT high-resolution original photographs.** The image library retains `productionReady: false`; replace files with the restaurant's approved originals while retaining paths. The new fresh produce and service-bell crops were extracted from the Home screenshot.
- **The five listed menu prices have not been verified with the café.** They are held in `src/config/home-content.ts` strictly to match the provided mockup. They must be confirmed or replaced before public launch.
- The location and opening hours shown are reference copy from an unverified mockup. The Visit card labels hours as pending confirmation.
- The logo is still the Part 1 approximation.
- `/menu`, `/about`, `/gallery`, and `/contact` are navigation targets for subsequent roadmap phases and may not render until their pages are implemented.
- No order is submitted from this page and no external map/phone/WhatsApp destination is fabricated.

## Acceptance
Run `npm run assets:check`, `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` in sequence, then `npm run dev` to compare `/` against the supplied Home mockup at 1086px wide and on a mobile viewport.
