# Part 1: Reference-driven visual foundation

## Goal

Reproduce the original eight screenshot designs as closely as the underlying
assets allow. Part 1 introduces the shared typography, colors, brand geometry,
header, footer, responsive navigation, reusable UI pieces and a **clearly marked
preview homepage**. It does **not** claim that full screenshot-matched pages have
been implemented yet.

## Supplied screenshot dimensions

- Home, About, Gallery, Contact, Parties & Events, Book a Table: 1086 × 1448
- Cart: 1122 × 1402
- Checkout: 1199 × 1312

These are *portrait screenshot exports*; they do not establish a mobile viewport.
Build each page with a responsive desktop layout rather than setting CSS widths to
these image pixel counts.

## Core palette

| Purpose | Token | Hex |
| --- | --- | --- |
| Main cream | `--color-cream` | `#FFF8F3` |
| Cream shaded surface | `--color-cream-deep` | `#F6E8DE` |
| Body heading | `--color-ink` | `#2C130E` |
| Primary CTA | `--color-orange` | `#DD470B` |
| CTA hover | `--color-orange-deep` | `#B83906` |
| Footer brown | `--color-brown` | `#32170F` |
| Borders | `--color-outline` | `#E9D7CB` |

The palette is a visual approximation and should be adjusted only after
side-by-side screenshot comparisons.

## Typography

- Display heading: high-contrast Georgia-style bold serif. Replace with licensed
  or appropriately loaded exact font if the original designer supplies it.
- Orange emphasis: italic serif / scripted accent in the references.
- Supporting copy: clean compact sans-serif.
- Avoid uppercase letter spacing on body copy and avoid oversizing navigation.

## Shared areas

- **Top utility bar**: subtle peach background, tagline, category, location,
  hours and social icons.
- **Main header**: white-cream area with brand mark, centered navigation,
  cart icon and orange Book a Table button.
- **Mobile header**: logo, cart, booking icon, collapsible accessible menu.
- **Footer**: chocolate-brown gradient, logo, quick links, contact and socials,
  legal copy.

## Reusable UI

- `ActionLink`: orange and outlined pill CTA.
- `SectionHeading`: centered serif title and optional orange icon/description.
- `FeatureCard`: bordered cream tile with orange icon and title.
- `PageHero`: composable text treatment for future page hero photography.

## Source assets and honesty about visual parity

The provided screenshot only contains flattened photo pixels. Extracting images
from it cannot recover genuine camera resolution. **Do not use a cropped
screenshot as a final high-quality hero image.** Acquire the actual source photos
or generate replacement photos explicitly in Part 2, then review accuracy.

The supplied logo was embedded in the screenshot only. This patch includes
`public/images/branding/ab-hunger-mark.svg`, a **temporary vector approximation**
for responsive implementation, not a claim that the exact original logo was
extracted. Replace it with the official source logo when available.

## Business content caveat

Location and opening hours appear in supplied reference mockups. They remain
**unconfirmed** in `src/config/brand.ts`. Contact links are intentionally disabled
until the real number, email and social links are provided. Do not ship a
production website with unverified operational details.

## Acceptance checklist

- Header and footer retain the screenshot's structure on desktop.
- Mobile nav opens, closes, and has no tab-accessible hidden links.
- Logo is crisp at all widths, pending official original.
- Colors and typography are consistent across shared elements.
- No unconfirmed phone/WhatsApp number is used in links.
- Phase 0 lint/typecheck/tests/build continue passing.
- **Page 1: actual Home layout/photography is not yet complete.**
