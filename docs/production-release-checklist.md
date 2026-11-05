# AB Hunger Station: Production release checklist

The website source, all nine requested routes, WhatsApp inquiry flows, CI and Vercel deployment exist. Publication for actual customers is gated because images and restaurant operational facts are not verified.

## Before enabling live ordering and search indexing
1. Obtain the actual AB Hunger Station WhatsApp number with country code and set `NEXT_PUBLIC_RESTAURANT_WHATSAPP`.
2. Replace the mockup menu in `src/data/menu.ts` with the approved menu and prices; set `NEXT_PUBLIC_MENU_CONFIRMED=true` only after approval.
3. Confirm delivery coverage, charges, minimum order and accepted payment procedure. Set `NEXT_PUBLIC_DELIVERY_FEE` (0 only if free delivery is verified).
4. Obtain approved, genuine high-resolution restaurant/food photographs. Replace low-resolution screenshot crops at the current stable asset paths; update dimensions and `productionReady=true` only for verified HD originals in `src/config/image-library.ts` and `public/images/asset-manifest.json`.
5. Configure `NEXT_PUBLIC_RESTAURANT_MAPS_URL`, social accounts if approved, and owner-approved opening hours.
6. Verify the project URL and set `NEXT_PUBLIC_SITE_URL` to its public HTTPS domain.
7. After all contents and legal notices are reviewed by the business owner, set `NEXT_PUBLIC_IMAGES_APPROVED=true` and `NEXT_PUBLIC_SITE_APPROVED=true`.
8. Run `npm run assets:check && npm test && npm run lint && npm run typecheck && npm run build` and `npm run release:check` in the verified production environment.
9. Visually QA all 9 pages on desktop, tablet, and mobile browsers; test WhatsApp handoff on mobile and desktop, cart persistence, empty cart, validation, terms, and actual map link.

Until steps above are complete, publication defaults to noindex and the contact forms cannot submit without a verified WhatsApp destination. A working Vercel demo is **not** evidence of restaurant information approval.
