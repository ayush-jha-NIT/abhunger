# Part 2: Image library and asset provenance

This part adds reference-matched **image crops extracted from the eight user-supplied
UI screenshots**. They are useful as temporary visual stand-ins while implementing
pixel-matched page layouts.

## Important limitations

- These are NOT source/full-resolution restaurant photographs. Screenshot crops have
  limited pixel resolution, even when encoded as WebP with high quality settings.
- The storefront, AB signage, private event setting, facilities and served dishes
  shown in the mockups have NOT been independently verified as actual photography
  of the restaurant. Confirm these with the restaurant owner before publishing.
- Do not advertise these as original, 4K, DSLR, or professionally photographed images.
- For truly sharp full-width banners and retina-ready dish cards, replace with source
  photos or approved new photography, without changing any `src` paths.

## Added assets

- 8 cropped hero compositions (Home, About, Gallery, Contact, Events, Booking,
  Cart, Checkout)
- 15 food and drink tiles in `public/images/food`
- 7 café and venue references in `public/images/interiors`
- 8 event and party images in `public/images/events`

Images are exported to optimized WebP at source-crop dimensions. `public/images/asset-manifest.json`
provides the editorial record; `src/config/image-library.ts` adds typed, reusable
asset references and alt text for page development.

## Future asset handover

Replace each cropped WebP with an approved high-resolution, matching-composition
photo using the same filenames. Prefer 2400px or wider for horizontal hero images
and 1000px or wider for product cards. The website layout and import paths need
no change when files are replaced.

## Validation

Run `npm run assets:check` to check manifest consistency, file presence, WebP
signatures and image dimensions. This requires only Node.js, no image libraries.
