# AB Hunger Station

Next.js foundation for the AB Hunger Station Restaurant & Café website.

> **Part 0 only:** The current homepage is a temporary technical smoke-test.
> The supplied screenshot-matched design will be implemented in later phases.

## Requirements

- Node.js 22 (`.nvmrc`)
- npm

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Windows PowerShell: `Copy-Item .env.example .env.local`

Visit `http://localhost:3000`.

## Validate

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

`npm test` uses Node's built-in test runner and requires no installed packages.

## Dependency lockfile

Because npm registry access was not available while preparing this patch, no
fabricated `package-lock.json` has been included. The first successful `npm install`
will generate it. Commit that lockfile and change CI's `npm install` command to
`npm ci` for reproducible builds.

## Layout

- `src/app/`: Next.js App Router and global styles
- `src/config/`: restaurant metadata and route inventory
- `src/lib/`: shared helpers
- `public/images/`: source images organized by subject
- `docs/`: development scope and screenshot mapping
- `tests/`: foundation checks

## Confirmed workflows

- Orders: Menu → Cart → Checkout → prefilled WhatsApp message
- Bookings: WhatsApp inquiry, confirmed manually by the restaurant
- Payment: Cash/UPI coordinated with the restaurant
- Fulfillment: Delivery and takeaway
- Contact: WhatsApp
- Menu: code-managed

No payment gateway, WhatsApp Business API, database or admin panel is required
for this first release. Sending an inquiry is not an instant confirmed booking.

## Part 1 visual foundation

Part 1 installs the screenshot-inspired brand design system, responsive
shared header/footer, reusable UI components and a labeled visual preview.
See [Part 1 reference specifications](docs/phase-1-visual-foundation.md).

- Photography is **not** delivered by Part 1. See the
  [Part 2 asset shot list](docs/part-2-photo-shot-list.md).
- The SVG logo is a temporary vector approximation. Replace it with the
  official logo asset when supplied.
- The homepage is a component preview, **not** the screenshot-matched final
  Home page. Main page implementations follow in later parts.


### Part 2 image library

`public/images/` now contains 38 screenshot-extracted reference images used for design implementation.
They are not original high-resolution product/venue photography. Run `npm run assets:check`
and review `docs/phase-2-image-library.md` before using them in public-facing pages.
