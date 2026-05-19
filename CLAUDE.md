# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build static site to /dist
npm run preview   # Preview built output locally
```

No test or lint commands are configured.

## Stack

- **Astro 4** with `output: 'static'` — pages live in `src/pages/`, components in `src/components/`
- **React 18** — only used for interactive components (Accordion, CountdownTimer); hydrated via `client:load`
- **Tailwind CSS 3** — custom galaxy theme defined in `tailwind.config.mjs`
- **Netlify** — static deployment, Node 22

## Architecture

This is a single-page product landing page (`src/pages/index.astro`) composed of 13 sequential section components. The page follows a conversion-optimized structure: Hero → Trust → Problem → Solution → Features → Social Proof → How It Works → Showcase → Offer → FAQ → Final CTA.

**Layout** (`src/layouts/BaseLayout.astro`): Handles the HTML shell, global scroll-animation logic (IntersectionObserver on `[data-animate]` elements), and sticky cart bar visibility toggling based on Hero intersection. All JS here is vanilla.

**Astro components** (`.astro`): Static sections — no interactivity, no client JS. Styling uses Tailwind utility classes plus custom classes from `src/styles/global.css`.

**React components** (`.tsx`): Two components only:
- `Accordion.tsx` — FAQ accordion, controlled state with `useState` + `useRef` for height animation
- `CountdownTimer.tsx` — 15-minute countdown with localStorage persistence; mounts client-side only

**Checkout URL**: A single Shopify checkout URL is hardcoded and threaded as a prop into Hero, ProductShowcase, OfferSection, and FinalCTA. Update it in `src/pages/index.astro`.

**Images**: All product images are external URLs (AliExpress CDN). No local image assets exist beyond `public/favicon.svg`.

## Tailwind Theme

Custom colors defined in `tailwind.config.mjs`: `void`, `deep`, `card`, `purple`, `glow`, `blue`, `stardust`, `gold`. Custom animations: `float`, `glow-pulse`, `marquee`, `orbit`. Custom shadows: `glow`, `glow-sm`, `glow-lg`, `card`. Custom backgrounds: `galaxy-radial`, `purple-glow`, `cta-gradient`, `card-gradient`.

Reusable utility classes in `global.css`: `btn-primary`, `btn-secondary`, `text-gradient`, `text-gradient-gold`, `glass-card`.

## Scroll Animations

Add `data-animate` to any element to give it a fade-up-on-scroll reveal. Control stagger timing with the `--delay` CSS custom property (e.g., `style="--delay: 0.2s"`). The observer fires at 12% element visibility.
