---
name: fadasdobem-design
description: Use this skill to generate well-branded interfaces, prototypes, mocks and production code for Fadas do Bem (fadasdobem.com.br) — a Brazilian editorial blog + marketplace for online tarot consultations. Contains the full design system: tokens, type, motion library, iconography, voice & tone, and 3 production-ready UI kits (blog, pricing, tiragens). Use when you need to design or build ANY Fadas surface.
user-invocable: true
---

# Fadas do Bem — design skill

Read `README.md` first — it's the canonical guide (~600 lines, all rules + context). Then this file gives you the operational summary. Files to know:

- **`README.md`** — full guide. Read top to bottom on first use.
- **`colors_and_type.css`** — single file with 89 CSS custom properties + `@font-face` (Playfair, Lora local) + base semantic styles + **12-keyframe motion library** + `prefers-reduced-motion` override. Drop into any HTML.
- **`assets/`** — `icons/` (32 Phosphor duotone SVGs), `brand/` (10 Simple Icons), `logo/`, `ornaments.svg`.
- **`source/`** — original HTMLs from the Fadas team (DS v18 canonical, iconografia, pricing intent, tiragens intent). Read when you need the "why".
- **`preview/`** — 30 cards in the Design System tab. Each documents ONE token/component in isolation. Use as quick lookup.
- **`ui_kits/`** — production-ready implementations. **Copy from here when building**:
  - `blog/` — full editorial article surface (React/JSX + HTML)
  - `pricing/` — pricing table (mobile carousel + desktop 3D stage)
  - `tiragens/` — tarot readings list (mobile carousel + desktop featured-and-glass-list)

## Voice & tone

Fadas is **positivo, alegre, caloroso, humano, místico** — never **festivo** (banido), never wellness-gringo, never corporate, never agressivo. "Falamos como uma amiga sábia que já passou por aqui." Português brasileiro orgânico, sem jargão. Call the reader **"você"** (feminine implied; works masculine too without flexioning excessively). Brand persona: a casa = "as Fadas", "aqui na Fadas".

**Copy patterns** (memorize):

- Títulos em capitalização de frase (PT-BR), nunca Title Case Inglesa.
- "Caminhos" não "Navegação". "Fale com as Fadas" não "Contato". "Mapa do Fadas do Bem" não "footer".
- Imperativo curto em botões: "Consultar agora", "Ver tarólogas", "Escolher leitura".
- Promete reflexo, não previsão: "ajuda a enxergar com clareza" ≠ "vai descobrir o futuro".
- 4 reações canônicas substituem o "curtir": ❤️ Amei · 🙏 Grata · 💡 Iluminou · ✨ Ressoou.

## Visual — paleta funcional

**Filosofia em 3 pilares**: (1) calorosa não estridente — paleta nasce no creme `#fef4e6`, nunca branco puro; (2) editorial não corporativa — serifs (Playfair, Lora) carregam hierarquia, linhas douradas, ✦; (3) funcional não decorativa demais — ornamento sem função é cortado.

**Cores** (todas via tokens em `colors_and_type.css`):

- **Vermelho** `--red #e52444` — CTA principal, 1-2 por tela. Hover do botão vermelho **NÃO escurece**, vai pra `--green-dark` (contraste cromático red→green é a assinatura).
- **Verde** `--green #87c100` (status), `--green-deep #4a6b1e` (títulos editoriais, banner CTA, links), `--green-dark #6a9900` (hover).
- **Dourado** `--gold #e3cc7e` (acentos, ✦), `--gold-deep #c8a840` (números, tags), `--gold-soft #f0dc9a` (gradients). Texto sobre dourado: `--text-on-gold #5a3e00` (nunca preto puro).
- **Superfícies**: `--bg #fef4e6` (creme), `--bg-alt #f7ecdb` (sidebar/tray), `--surface #fff` (cards excepcional sobre creme), `--border #ede0d4`, `--border-soft #f5ebe0`, `--gold-soft 1.5px` (cards editoriais/místicos).
- **Texto**: `--text-1 #1a1410` (preto-quente, **nunca `#000`**), `--text-body #2a2218`, `--text-2 #6a5c50`, `--text-3 #9a8c7e`, `--text-muted-light #c0a898` (microcopy mais discreto), `--text-on-red var(--bg)` (CTA cerimonial usa cream sobre vermelho).
- **Suporte** (sempre pontuais, nunca dominam): `--blue --purple --amber --teal --green-lime`.
- **Categorias do blog** (11 pares bg/fg): `--cat-amor-*`, `--cat-tarot-*`, `--cat-orac-*`, etc. Ver README.

**Gradientes oficiais** (4 únicos, todos tokenizados, **NUNCA invente outros**): `--grad-hero-red`, `--grad-promo-green`, `--grad-footer-deep`, `--grad-card-red`.

## Tipografia

- **Playfair Display** (display) — H1, logo, ornamentos, números decorativos. **Use com escassez** — é joia.
- **Lora** (editorial) — H2-H4, lead italic, blockquote italic. Peso 600 não 700.
- **Lato** (UI/body) — body 16/1.75, captions, labels, navegação, botões. Pesos 400/600/700.
- **JetBrains Mono** — tokens, código.

Ratio H1↔body é 2.5× (padrão Linear/Stripe). Sentence-case sempre.

## Iconografia

**Dois sistemas paralelos, regras distintas**:

1. **Phosphor Duotone** (UI). Local em `assets/icons/` — 32 SVGs raw com `stroke="currentColor"` + camada `opacity="0.2"`. CDN: `<script src="https://unpkg.com/@phosphor-icons/web@2.1.1">` + classes `ph-duotone ph-sparkle` etc.
   - **Estilo**: gradient vertical **rosé gold** (5 stops `#ffe8d6` → `#5a3024`) normal; **ouro polido** (4 stops `#fff5d4` → `#6b4e18`) hover. Cross-fade 2 camadas `opacity 0.35s`. Implementação completa em `preview/20-icons-phosphor.html` e `ui_kits/blog/icons.jsx`.
   - **Tamanhos**: 16 inline · 20 menu · 24 topbar · 32 cards · 48+ destaques.
   - **Drawer canônico** (12 itens): sparkle, users, diamonds-four, gift, moon-stars, currency-circle-dollar, signpost, question, book-open, seal-check, chat-circle-dots, handshake.

2. **Simple Icons** (brand logos terceiros). Em `assets/brand/`: WhatsApp, Telegram, Facebook, X, Pinterest, Instagram, TikTok, YouTube, Email, PIX. Container 52×52 raio 12px, `--green-deep` normal, cor oficial da marca + branco + raio 16px no hover. **Exceção**: CTAs isolados ("Falar no WhatsApp") usam cor oficial direta.

**Asset slot** — placeholder listrado pra slots de imagem temáticos: stripes 4-6px vermelhas + border dashed + SVG inline outline em `--red` como hint. Quando `<img src="…">` recebe valor real, placeholder some sozinho via `:has()` + `~` adjacente. Ver `preview/26-asset-slot.html`.

## Motion library (12 keyframes em `colors_and_type.css`)

Três famílias com papéis distintos:

- **Entry** (one-shot, ease-snap): `fadas-fade-slide-up`, `fadas-card-in`, `fadas-row-in`, `fadas-featured-in`. Use pra entrada de seção, card grid, row de lista, destaque. Aplicar com `animation-delay` escalonado pra cascata staggered (0.08s entre cada item).
- **Loop** (contínuo, ease-in-out, ornamental): `fadas-float` (card ativo), `fadas-celestial-float` (ornamento topo), `fadas-ornament-glow`, `fadas-star-pulse` (✦), `fadas-placeholder-pulse`. Loops são bem-vindos pra "vida mística" — mas só ornamentais, nunca em UI funcional.
- **Interaction** (one-shot em :active): `fadas-ripple` (CTA cerimonial), `fadas-dot-bounce` (dot ativo), `fadas-card-fade-out` / `fadas-card-fade-in` (swap).

Classes utilitárias prontas: `.fadas-anim-fade-up`, `.fadas-anim-card-in`, `.fadas-anim-row-in`, `.fadas-anim-featured`, `.fadas-anim-float`, `.fadas-anim-glow`, `.fadas-anim-star-pulse`, `.fadas-anim-placeholder`.

**`prefers-reduced-motion: reduce`** já tratado globalmente — mata todas as animações via `animation: none !important`. Não desligue, não duplique.

**Easings**: `--transition` (0.2s ease, base), `--transition-slow` (0.35s ease, ícone duotone crossfade), `--ease-snap` (`cubic-bezier(0.2, 0.8, 0.2, 1)` — assinatura), `--transition-snap` (0.32s snap, card lift/arrow/etc), `--transition-stage` (0.6s, carrossel 3D).

## Botões / CTAs — famílias

**Press feedback tem dois estilos, escolhidos pelo contexto**:

- **Style A — snap shrink** `:active { transform: scale(0.97) }` → CTAs principais, pricing, controles mobile-first/touch. Comunica tátil.
- **Style B — darken only** sem transform, escurece pra `--red-deep` ou `--green-deep`. → Links inline, ícones, navegação, hover-driven desktop. Mantém tom editorial.

**CTA transacional** (pricing kit) — Lato 700, full-width pill, snap shrink. Hover red → green-dark com arrow translate. Style A.

**CTA cerimonial** (tiragens kit) — **Playfair 600**, pill com borda dourada, texto `var(--bg)` cream sobre vermelho, **ripple** radial no `:active` (não shrink). Hover red → green-dark + translateY(-2px) + sombra verde. Style B-ish (ripple substitui darken). Use em zonas decisivas mas editoriais (escolher tiragem, contratar consulta).

**CTA link** — Lato uppercase 0.08em sem fundo; hover: cor → `--red` **e** `letter-spacing` cresce pra 0.12em. Microinteração assinada — tipografia "abre" no hover.

**Ver-todas** — pill outlined com ✦ pulsing nas pontas via `fadas-star-pulse`.

## Cards — duas famílias

**Card editorial blog** — foto 16:10 com pílula categoria absoluta top-left, body 18×20, título Lora 17/1.3, excerpt Lato 13 truncado 2 linhas, meta separada por border-top. Hover: translateY(-3px) + shadow-md + borda `--gold`. Card inteiro clicável, **sem CTA absoluto sobreposto**.

**Pricing card** (transacional, `ui_kits/pricing/`) — head (asset slot 56-64px + duration Playfair + modality) + price block (Playfair 56px value + currency 16 + cents 26) + copy + sessao-unica microcopy + CTA full-width Style A. Variants:

- **Standard** + `.is-active` → CTA verde, hover do ativo → CTA vermelho
- **Featured** → bg `--grad-hero-red`, orb dourado top-right, badge `✦ o mais escolhido` absoluto top, texto branco, CTA inverso (branco com texto vermelho), hover → CTA dourado
- **Top accent slider** (motif reusável) — faixa verde 4px via `::before scaleX(0→1)` 0.4s snap no hover

**Tiragem card** (editorial/místico, `ui_kits/tiragens/`) — imagem 1:1 topo (listras 6px) + body centralizado (Playfair 19 nome + ornamental divider 32×1 com ✦ + Lora 14 italic green-deep desc) + actions verticais (cerimonial + link). Border `--gold-soft` 1.5px. Inativo `opacity: 0.72`, ativo opacity 1 + `fadas-float` infinito.

**Quando escolher um vs outro**: ação transacional (pagar, contratar) → pricing card; escolha de conteúdo místico/editorial (ler tiragem, abrir oráculo) → tiragem card. Border dourado é a **assinatura visual** "isto convida, não vende".

## Carousels — três formatos canônicos

1. **Mobile scroll-snap** (pricing-mobile, tiragens-mobile) — `track` com `overflow-x: auto + scroll-snap-type: x mandatory`, slots `flex: 0 0 240px`. Drag-to-scroll + dot indicators 8×8 → pill 28×8 no ativo. Padding lateral 60px pra centralizar.

2. **Desktop 3D stage** (pricing-desktop) — `perspective: 1400px`, 5 estados z-stacked: `is-far-prev`, `is-prev`, `is-active`, `is-next`, `is-far-next` com translateX + scale + opacity + filter:blur progressivos. Transição `--transition-stage 0.6s`. Click numa card lateral promove ela ao centro; teclado ←/→.

3. **Desktop featured + lista glass** (tiragens-desktop) — layout 2-col: card destaque grande à direita, lista vertical de rows à esquerda. **Auto-cycle 10s** com pausa no `mouseenter`. Row ativa em **glass** (próxima seção).

## Glass active row (4º uso canônico de blur)

Padrão pra destaque de item em lista vertical. Combina:

- `backdrop-filter: blur(14px) saturate(1.2)`
- 5 layers de sombra (3 elevações + 2 insets para highlight glass topo/base)
- Borda dourada translúcida `rgba(200,168,64,0.7)`
- Translada `translateX(18px) translateY(-2px)` (sai do alinhamento)
- Barra vertical verde lateral 4px gradient com glow

Receita completa em `preview/28-glass-active-row.html` e no README. **Use quando**: lista vertical precisa destacar item ativo com peso visual de "flutua acima do plano".

## Bordas, raios, sombras

- **Raios**: `--r-sm 6px` (tag), `--r-md 10px` (input/blockquote), `--r-lg 14px` (card), `--r-xl 22px` (CTA inline/card grande), `--r-pill 100px` (pílulas/CTAs principais/badges).
- **Sombras** (todas rgba marrom-quente, **nunca preto**): `--shadow-sm`, `--shadow-md`, `--shadow-lg`.
- **Bordas**: 1px padrão, 1.5px só pra brand logos e cards editoriais (gold-soft). Cores: `--border` normal, `--border-soft` sobre creme, `--gold` destacado.

## Blur / glass — só 4 usos canônicos

1. Sticky header — `backdrop-filter: saturate(180%) blur(20px)` + `background: var(--bg)`
2. Banner CTA pill "Online agora" — `rgba(255,255,255,0.12) + blur(8px)` sobre gradient verde
3. Audio player hero — `bg-alt → surface` + orb radial 35%
4. **Glass active row** — receita acima

Fora isso, **não use blur**. Não é glassmorphism vibe.

## How to work

Se for **artefato visual** (slide, mock, protótipo, post social) → copia `colors_and_type.css` + `assets/` necessários no novo projeto, linka e usa. Reach for `ui_kits/<surface>/` pra forkar componentes prontos.

Se for **código de produção** → tokens daqui são source of truth. README é o contrato. `source/design_system_v18.html` é a referência canônica longa.

Se invocada **sem contexto adicional** → pergunta ao usuário 3-5 coisas focadas (audiência, surface, fidelidade, variações desejadas, brand restrictions), aí age como designer expert que entrega HTML ou código de produção.

**Sempre que possível**: comece a partir dos `ui_kits/`. Forkar é mais rápido e mais fiel que partir do zero.

## Things to avoid

- Branco puro `#fff` em backgrounds — use `--bg #fef4e6`.
- Preto puro `#000` em texto — use `--text-1 #1a1410`.
- Playfair em todos os títulos — perde efeito, use com escassez.
- Vermelho em todo hover — vermelho é escassez, ele migra pra verde no hover.
- CTA absoluto sobreposto a card editorial (antipadrão canônico).
- Emoji em botões/ícones funcionais ("Consultar 🔮 agora") — emoji só em reações e conteúdo editorial.
- A palavra **"festivo"** — banida do vocabulário Fadas.
- Cards com rounded corners + colored left-border accent (típico SaaS, não é parte do system).
- Gradientes blue-purple ou tropes de SaaS frio.
- Misturar pesos do Phosphor — sempre Duotone (única exceção consciente: SVG inline outline `--red` como placeholder dentro de asset slot).
- Inventar novos gradientes — só os 4 oficiais (`--grad-hero-red`, `--grad-promo-green`, `--grad-footer-deep`, `--grad-card-red`).
- Springs com overshoot em hover/press — interações ficam em ease-out contínuo. Loops ornamentais (✦ pulse, float, glow) podem usar ease-in-out cycle suave.
- Desligar o `prefers-reduced-motion` que já está global no CSS.
- Bulk-import de assets que você não vai usar — `assets/` é enxuto, só o que entra em produção.

---

**Versão**: maio/2026 · **Mantenedor**: time de design Fadas + Claude · 117 arquivos, 3 UI kits, 30 preview cards, 89 tokens, 12 keyframes.
