# Blog UI Kit — Fadas do Bem

Recreates the **canonical editorial surface** of `fadasdobem.com.br`: an article-post page with sticky header, two-column grid (article + sidebar), all editorial components (audio player, pull quote, figure, action bar, reactions), a green-deep banner CTA, related posts grid, and the 4-column footer with onda pattern.

This is the core surface the brand revolves around. Other pages (homepage, taróloga profile, marketplace listing, checkout) reuse all of these primitives — once this works, the rest is recomposition.

## Files

- **`index.html`** — entry point. Renders the full article page via React + Babel inline. Open this file to see the kit in action.
- **`components.jsx`** — every React component, factored small and reusable:
  - `Header`, `Drawer`, `Footer` — chrome
  - `ArticleHero`, `CategoryPill`, `Avatar` — top of post
  - `AudioPlayer`, `PullQuote`, `Figure`, `ArticleBody` — editorial components
  - `Sidebar` — TOC + live tarólogas widget + tags
  - `ActionBar`, `Reactions` — engagement
  - `BannerCTA`, `RelatedPosts` — conversion + discovery

All exported to `window.*` so `index.html`'s inline JSX can use them directly.

## Component coverage

| Component | Status | Notes |
|---|---|---|
| Sticky header (logo + status + CTA) | ✅ | `backdrop-filter blur(20px)` over cream |
| Drawer menu with Phosphor duotone icons | ✅ | 12 canonical items, rosé→ouro hover |
| Article hero (breadcrumb, pill, H1, meta, photo) | ✅ | Photo is a 3:2 placeholder w/ red stripes |
| Audio player ("ouvir o artigo") | ✅ | Interactive — play/pause, progress, 1x→2x cycle |
| Article body (h2/h3/p/links/list/blockquote) | ✅ | Real-quality post copy, ~450 words |
| Pull quote with ✦ above/below | ✅ | Playfair italic green-deep |
| Figure (16:9 photo + Lora caption italic) | ✅ | Placeholder pattern |
| Sidebar TOC (sticky) | ✅ | Sticky from top 88px |
| Live tarólogas widget (verde-deep mini-banner in sidebar) | ✅ | Avatar stack + CTA branco |
| Tags (#tópico) box | ✅ | Lato 12 with `#` gold |
| Action bar (Save + 6 share brand buttons) | ✅ | Brand-color hover on each social |
| Reactions (4 Fadas reactions) | ✅ | Click to toggle, active = red gradient |
| Banner CTA (verde gradient + orbs) | ✅ | Full-bleed (negative margin) |
| Related posts grid (3 cards) | ✅ | Same card pattern as listing |
| Footer (4 columns + onda pattern SVG) | ✅ | Cinza-quente bg, green column titles |

## Known cuts / placeholders

- **Photos are pattern placeholders** (`repeating-linear-gradient`). Real fotografia editorial brasileira goes here in production — see VISUAL FOUNDATIONS in root README for the cromática esperada.
- **Phosphor icons load from CDN** (`unpkg.com/@phosphor-icons/web`). The page needs network on first paint; if offline, fall back to local hosting.
- **No mobile mockup file** — the CSS responds (`@media max-width: 960px`), but per the canonical DS only Mobile + Desktop get mockups and the breakpoint between is CSS-only. This file demos desktop; resize to ≤960px to see the responsive collapse.
- **Drawer is interactive but the routes are dummies** (every `<a href="#">`).
- **Reactions persist in component state only** (no backend).
- **No FAQ block** — the canonical order puts FAQ between article body and Tags, but this demo article isn't structured FAQ-style. Add `<FAQ>` between `<ArticleBody>` and `<ActionBar>` for longer posts.

## To extend

The pattern for new surfaces:

1. Import `colors_and_type.css` + Phosphor CDN.
2. Drop in `<Header>` + `<Footer>` for chrome.
3. Compose `CategoryPill`, `Avatar`, `Reactions`, `BannerCTA` as needed.
4. For lists/marketplaces, lift the `relatedCard` style from `fadasStyles` and tile it.
5. Always pull color values from CSS vars — never hard-code hex.
