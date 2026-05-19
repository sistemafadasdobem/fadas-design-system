---
name: fadasdobem-design
description: Use this skill to generate well-branded interfaces and assets for Fadas do Bem (fadasdobem.com.br) — a Brazilian editorial blog + marketplace for online tarot consultations. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping and production.
user-invocable: true
---

# Fadas do Bem — design skill

Read the `README.md` file within this skill first — it contains the full brand context, content fundamentals, visual foundations, and iconography. Then explore the other files as needed:

- `colors_and_type.css` — drop into any HTML to get CSS vars + semantic base styles.
- `assets/` — logos (Fadas, ornamentos) and brand SVGs (WhatsApp, Instagram, etc).
- `source/` — the original canonical DS HTMLs from the Fadas team (mainly for reference).
- `preview/*.html` — 21 small cards showing every token/component in isolation.
- `ui_kits/blog/` — a full React/JSX recreation of the article-post surface. Lift any component from `components.jsx`.

## Voice & tone in one paragraph

Fadas is **positive, joyful, warm, human, mystic** — never festive (banned), never wellness-generic, never corporate. Falamos português brasileiro orgânico, sem jargão importado. Call the reader "você" (feminine implied, but never forced). The brand persona is "uma amiga sábia que já passou por aqui". Microcopy carries the marca — use "Caminhos" not "Navegação", "Fale com as Fadas" not "Contato". Reactions use 4 emoji (❤️🙏💡✨); ícones de UI usam Phosphor Duotone (nunca emoji).

## Visual in one paragraph

Cream `#fef4e6` background everywhere — never branco puro. Brand vermelho `#e52444` reserved for CTA principal (1–2 per screen), verde `#87c100` for status/identidade, dourado `#e3cc7e` for acentos/✦ ornaments. Three font families with specific roles: **Playfair Display** italic for H1/logo/ornamentos (use sparingly), **Lora** for H2-H4/lead/blockquote, **Lato** for body 16/1.75 and UI. Cards: cantos 14–20px, sombra marrom-quente (never preto), borda dourada no hover. Banner CTA final é verde-deep gradient (`#6a8a30 → #4a6b1e → #34501a`). Footer é cinza-quente `#383330` com pattern de ondas SVG a 5%. **Page rhythm: cream → verde → cinza.**

## Iconography

- **Phosphor Duotone** for UI — local SVGs in `assets/icons/` (24 icons curated, raw `currentColor` + `opacity=0.2` two-layer Phosphor format). Default state: rosé-gold gradient (5 stops `#ffe8d6` → `#5a3024`). Hover: ouro polido gradient (4 stops `#fff5d4` → `#6b4e18`). Implementation: duplicate the SVG, apply gradient to `[opacity="0.2"]` (fill) and `[stroke="currentColor"]` (stroke), crossfade two stacked layers with `opacity 0.35s ease` on hover. See `preview/20-icons-phosphor.html` and `ui_kits/blog/icons.jsx` (`<FadasIcon name="sparkle"/>`). CDN alternative for fast mocks: `<i class="ph-duotone ph-sparkle"></i>` via `unpkg.com/@phosphor-icons/web@2.1.1`.
- **Simple Icons** SVGs in `assets/brand/` for third-party logos. Container 52×52, verde-deep no normal, cor oficial da marca + branco + raio 16 no hover.

## How to work

If creating **visual artifacts** (slides, mocks, throwaway prototypes, social posts), copy `assets/` and `colors_and_type.css` into the new project and link them. Reach for `ui_kits/blog/components.jsx` for React-quality component starting points. Keep it static where you can — every static element is editable by the user via direct manipulation.

If working on **production code**, use this skill's contents as the source of truth for design tokens, type scale, spacing, iconography, and component behavior. The canonical reference is `source/design_system_v18.html` (18 sections, ~2100 lines).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask 3–5 focused questions (audience, surface, surface count, tone, fidelity), then act as an expert designer who outputs HTML artifacts or production code depending on the need.

## Things to avoid

- White (`#fff` em backgrounds) e preto (`#000`) puros — sempre usar creme e preto-fadas.
- Playfair em todos os títulos (perde o efeito — é joia, usar com escassez).
- Vermelho em todo hover (vira ruído — vermelho é escassez).
- CTA absoluto sobreposto a um card editorial (antipadrão canônico).
- Emoji em botões funcionais ("Consultar 🔮 agora") — emoji só em reações e conteúdo.
- A palavra **"festivo"** — banida do vocabulário Fadas.
- Cards com rounded corners + colored left-border accent (não é parte do system).
- Gradientes blue-purple ou tropes de SaaS frio.
