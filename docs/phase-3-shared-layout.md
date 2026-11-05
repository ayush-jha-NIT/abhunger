# Part 3: Screenshot-aligned shared layout and reusable primitives

## Changed files

- `src/components/layout/site-header.tsx`: route-specific reference header CTA, open/close mobile nav, keyboard Escape and active route handling.
- `src/components/layout/site-footer.tsx`: dense dark chocolate footer, four social icons, dark-background vector logo variant, central contact config and proper legal text treatment.
- `src/components/layout/cart-indicator.tsx`: actual badge count from browser cart state, never hardcoded.
- `src/config/header.ts`: exported header variant and route-active rules.
- `src/lib/cart-storage.ts`: planned cart count contract for Part 11. Avoid coupling the header to cart implementation details.
- `src/components/ui/*`: reusable image-backed hero, feature cards, photo tiles, section headings, compact info strips and CTA variants.
- `src/app/globals.css`: spacing/brand treatments at desktop, tablet and mobile breakpoints.

## Route-specific header from the supplied screenshots

- Home, About, Gallery and Contact use **Order Online** CTA to `/menu`, matching the earlier 4 references.
- Parties & Events and Menu show **Book a Table** CTA; these are the newer navigation treatment.
- Cart, Checkout and Book a Table show **Cart + Book a Table**, matching the three transaction screenshots.
- A cart link and all page links remain accessible from the mobile menu and footer.
- The header never invents a cart quantity or working social URL.

## Cart contract

Store JSON at `localStorage["ab-hunger-cart-v1"]`. It may be `[{"id":"...","quantity":1}]` or `{ "items": [...] }` during migration. Item `quantity` must be a positive integer 1–99. After any same-tab cart update, call `notifyCartUpdated()` from `src/lib/cart-storage.ts`. Other browser tabs update through `storage` events. No fake cart counts.

## Accessibility and behavior

- Navigation uses `aria-current="page"` on the active link.
- Menu button uses `aria-expanded`, `aria-controls`; closed navigation has `inert` and `aria-hidden`, so it does not receive keyboard focus.
- Escape closes the open menu and returns keyboard focus to the toggle.
- Images have descriptive alt text when informative. Hero background is decorative and receives an empty alt.
- Social icons without approved URLs remain inert visual placeholders rather than links to nowhere.

## Limits

Part 3 is **shared UI components only**. The Home page remains the Part 1 demo until Part 4. The image library from Part 2 is extracted from provided mockups and is not original high-resolution café photography. Do not represent contact details or venue claims from screenshots as confirmed facts.

## Verification

```bash
npm run assets:check
npm test
npm run lint
npm run typecheck
npm run build
```

Do not run `git apply` a second time after a successful first application.
