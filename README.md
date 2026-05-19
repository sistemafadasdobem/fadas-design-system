# Fadas do Bem — Design System

> Uma publicação editorial cuidada, não um app SaaS. Calorosa, mística, conversiva — não estridente, não corporativa.

A Fadas do Bem (**fadasdobem.com.br**) é uma plataforma brasileira que combina **blog editorial sobre tarot, oráculos e autoconhecimento** com um **marketplace de consultas online ao vivo com tarólogas**. Este design system documenta as decisões visuais e de voz que fazem a marca soar como uma amiga sábia — não como uma loja de horóscopo nem como um SaaS frio.

A audiência é majoritariamente feminina, brasileira, 25-55 anos, interessada em espiritualidade prática, autoconhecimento e tomada de decisão. A leitora chega pelo blog (SEO/redes), se identifica com o tom, e converte em consulta paga.

---

## Produtos no escopo

| Produto | URL / Surface | Status do kit |
|---|---|---|
| **Blog editorial** | fadasdobem.com.br/blog/ — artigos sobre tarot, amor, oráculos, astrologia, autoconhecimento | ✅ UI kit completo em `ui_kits/blog/` |
| **Marketplace de tarólogas** | fadasdobem.com.br/tarologas/ — perfis, preços, status online, chat de consulta | Documentado parcialmente; padrões herdam do blog kit |
| **Tabela de preços / pacotes** | fadasdobem.com.br/precos/ — carrossel de pacotes (voz, texto, vídeo) | ✅ UI kit em `ui_kits/pricing/` (mobile scroll-snap + desktop 3D stage) |
| **Tiragens / Divinação** | fadasdobem.com.br/tiragens/ — lista de tiragens disponíveis (Cruz Celta, Mandala Astrológica, Mesa Real, etc.) | ✅ UI kit em `ui_kits/tiragens/` (mobile carrossel + desktop featured + glass list) |
| **Páginas institucionais** | sobre, contato, FAQ, preços | Não kitada (mas reusa todos os componentes do blog) |

---

## Fontes / inputs deste DS

Os arquivos abaixo foram entregues pelo time da Fadas e moram em `source/`:

- `source/design_system_v18.html` — **fonte primária**. 18 seções cobrindo filosofia, cores, tipografia, espaçamento, componentes, princípios e composição editorial. Versão da casa, mantida pelo time de design. Equivalente aproximado de **800 linhas de CSS canônico + 1300 linhas de exemplos e princípios.**
- `source/icones_design_system.html` — **fonte de iconografia**. Define o sistema duotone (Phosphor + Simple Icons) e o comportamento de hover rosé→ouro polido.
- `source/tabela_precos_mobile.html` e `source/tabela_precos_desktop_carrossel.html` — **fonte da tabela de preços** (mai/2026). Definem o pricing card (standard + featured), o carrossel scroll-snap mobile, o stage 3D desktop, e vários padrões de microinteção assinados (faixa verde, arrow translate, snap shrink, asset slot listrado). Kit canônico em `ui_kits/pricing/`.
- `source/tiragem_mobile.html` e `source/tiragem_desktop.html` — **fonte da tela de tiragens** (mai/2026). Definem o tiragem card editorial (vertical, gold-soft, divider ornamental), o layout featured + lista glass do desktop, e a **motion library** completa (12 keyframes ornamentais + interação). Kit canônico em `ui_kits/tiragens/`.

Não havia codebase nem Figma anexado — toda a verdade vem desses dois HTMLs.

---

## CONTENT FUNDAMENTALS — como escrever para Fadas

### Tom de voz

> **POSITIVO, ALEGRE, caloroso, humano, místico.**
> Nunca: festivo, wellness genérico, frio, corporativo, agressivo.
> "Falamos como uma amiga sábia que já passou por aqui."

A palavra "festivo" é **banida** — saiu cedo do vocabulário porque carregava conotação de "loja de festas". O contraponto correto é "alegre".

### Pessoa e voz

- **Você** (singular feminino implícito, mas sem flexionar excessivamente em "querida", "amiga"). Funciona masculino também sem soar forçado.
- **Nós** (a casa) — "as Fadas", "aqui na Fadas", "nossas tarólogas".
- Verbos no presente, ativos. Evitar passiva.
- Evitar imperativo de cima ("você precisa") — preferir convite ("vem entender", "se quiser experimentar").

### Casing

- Títulos: capitalização de frase ("Como se preparar para a primeira consulta"), nunca Title Case Inglesa.
- Labels uppercase com letter-spacing 0.10–0.14em — categorias, badges, microcopy de UI.
- Botões: imperativo curto, primeira letra maiúscula ("Consultar agora", "Ver tarólogas").

### Emoji

**Sim, com parcimônia e propósito.** As 4 reações de fim de artigo usam emoji intencionalmente: ❤️ Amei · 🙏 Grata · 💡 Iluminou · ✨ Ressoou. Eles **substituem** o "curtir" único e foram escolhidos por ressonar com o tom místico-acolhedor.

Fora isso, emoji aparece em pontos editoriais discretos (📱 ao lado do WhatsApp no footer). **Não** usar emoji como ícone de UI — para isso temos Phosphor Duotone.

### Microcopy com alma

A regra é trocar jargão UX por palavras que carregam a marca:

| ❌ Genérico | ✅ Fadas |
|---|---|
| Navegação | **Caminhos** |
| Contato | **Fale com as Fadas** |
| Footer / Mapa do site | **Mapa do Fadas do Bem** |
| Sobre | Sobre / nossa história |
| Curtir | **Amei** / **Grata** / **Iluminou** / **Ressoou** |

### Exemplos de copy aprovada

> "O tarot é um espelho que reflete melhor quando você chega com clareza."
> (Pull quote — Playfair italic verde-deep)

> "Tarólogas experientes prontas para te ouvir."
> (Lead do banner CTA final — Lora italic 15px sobre verde)

> "Sua consulta está esperando"
> (H1 do banner CTA — Playfair 30px branco)

> "Como se preparar para a primeira consulta"
> (H1 de artigo — capitalização de frase)

### Não-fazer

- **Não** prometer resultado ("vai descobrir o futuro"). Usamos linguagem reflexiva ("ajuda a enxergar com clareza").
- **Não** dramatizar com caps ou exclamações múltiplas.
- **Não** importar jargão de wellness gringo ("self-care", "vibes high"). Português brasileiro orgânico.
- **Não** chamar a leitora de "querida"/"amor" no UI funcional (cabe em texto editorial, não cabe num botão).

---

## VISUAL FOUNDATIONS

### A filosofia em 3 pilares

1. **Calorosa, não estridente** — paleta nasce no creme `#fef4e6`, não no branco puro. Vermelho/verde/dourado aparecem em doses precisas. A usuária se sente acolhida, não vendida.
2. **Editorial, não corporativa** — serifs (Playfair, Lora) carregam a hierarquia. Linhas douradas, ✦, divisores ornamentais. Referências: NYT, The Atlantic, Substack premium, Vogue.
3. **Funcional, não decorativa demais** — ornamento sem função é cortado. Toda peça paga aluguel: ou cria identidade, ou conduz à ação, ou organiza a leitura.

### Cores

Três famílias de marca + superfícies + textos + 5 categorias de blog. **Em todo lugar onde Material Design usaria branco puro, usamos creme. Em todo lugar onde usaria preto puro, usamos preto-quente `#1a1410`.**

- **Vermelho** `#e52444` — CTA principal, marca. Reservado para 1–2 pontos por tela (princípio da escassez). Variantes: `--red-dark #b81c38` e `--red-deep #990e22` para profundidade em fundos vermelhos compostos (badges, gradientes). **O hover do botão vermelho NÃO escurece o vermelho** — vai para verde (ver Hover/Press/Focus abaixo). O contraste cromático vermelho→verde é a assinatura da marca.
- **Verde** `#87c100` — status online, identidade, ✦ de "vivo". Variantes: `--green-deep #4a6b1e` para títulos editoriais e banner CTA, `--green-dark #6a9900` para hover.
- **Dourado** `#e3cc7e` — acentos, bordas de CTA, ornamentos ✦. Variantes: `--gold-deep #c8a840` para # de tag, números, links de hover; `--gold-soft #f0dc9a` para gradientes de avatar. Texto sobre dourado: `--text-on-gold #5a3e00` (badge ✦, hover de CTA featured) — nunca preto puro nem `--text-1`.
- **Categorias do blog** (bg + fg pareados, 11 zonas cromáticas): Amor `#fce4e8`/`#c1185b`, Oráculos `#d9eef0`/`#00838f`, Astrologia `#fce8d0`/`#b56500`, Horóscopo `#e8e0f2`/`#5d4a90`, Tarot `#e8f0e0`/`#4a6b1e`, Runas `#dee5ec`/`#45607a`, Baralho Cigano `#fce0f4`/`#b01a8a`, Autoconhecimento `#ebe0f0`/`#7b3590`, Magia `#dee0f0`/`#383270`, Rituais `#f3e0d4`/`#9c4a2e`, Meditação `#e4ece4`/`#5a7a5a`. Astrologia trata sistema (signos, mapa, casas); Horóscopo trata previsão (diária, semanal, anual).
- **Cores de suporte** — nunca dominam, sempre pontuais: `--blue #51829b` (botões secundários, pacotes), `--purple #ae48c7` (acentos pontuais — pílula de categoria, ícone, nunca bloco grande), `--amber #f39c12` (canal telefone, status ocupado), `--teal #00a8b5` (oráculos saturado), `--green-lime #b8e040` (faixas de card, acento). Aparecem em elementos pontuais — faixas de card, ícones de canal, oráculos. **Nunca em blocos grandes ou como cor principal de tela.**
- **Gradientes oficiais** (4 únicos do sistema, todos tokenizados): `--grad-hero-red` para hero banner, `--grad-promo-green` para banner de primeira consulta (verde → teal), `--grad-footer-deep` para rodapé CTA, `--grad-card-red` para faixa de card. Fora desses 4, **evitar gradientes** — vira AI slop.

A página segue **descida cromática em 3 zonas**: cream (conteúdo) → verde-deep (banner CTA de fechamento) → cinza-quente `#383330` (footer). Cada cor com função.

**Texto — muted secundário**: além de `--text-3 #9a8c7e` (muted padrão de meta/breadcrumb), temos `--text-muted-light #c0a898` para microcopy ainda mais discreto — "Uso numa única consulta", ícones de seta inativos, separadores tipo "ou". É a camada que existe pra não competir com o `--text-3` quando ambos estão no mesmo bloco.

### Tipografia

Três famílias com papéis específicos. Quando o sistema é respeitado, a página respira como publicação de verdade.

- **Playfair Display** (decorativa) — H1 do post, logo da marca, ornamentos, números decorativos, aspas grandes. **Use com escassez.** Em todo lugar perde o efeito.
- **Lora** (editorial) — H2, H3, H4, títulos de card, lead italic, blockquote italic. Peso 600, não 700 — fica mais elegante.
- **Lato** (UI / leitura) — body 16px line-height 1.75, captions, labels, navegação, botões. Pesos 400/600/700.
- **JetBrains Mono** (código / tokens) — tokens, valores monoespaçados.

Escala: H1 clamp(28, 3.6vw, 40) · H2 clamp(20, 2.4vw, 24) · H3 clamp(17, 2vw, 20) · H4 clamp(16, 1.8vw, 18) · Body 16/1.75 fixo · Caption 13 · Label 11 upper.

Ratio H1↔body é **2.5×** (padrão Linear/Stripe). 3×+ funciona em NYT/Atlantic puro longform; em Fadas com sidebar e cards, gritaria.

### Backgrounds e texturas

- Página inteira: **flat creme** `#fef4e6`. Sem gradientes globais, sem textura.
- Banner CTA verde: gradiente diagonal `linear-gradient(135deg, #6a8a30 0%, #4a6b1e 50%, #34501a 100%)` + dois orbs radiais brancos/dourados sutis (10–15% opacidade) nos cantos.
- Footer: cinza-quente `#383330` com **pattern SVG de ondas senoidais a 5% opacidade** — sutil, quase imperceptível, dá textura editorial.
- Cards de post: `--surface #ffffff` (excepcional sobre cream) com borda `--border-soft #f5ebe0`.
- Hero da plataforma e cards-thumbnail: imagens fotográficas reais (placeholders 4:3 / 3:2 com pattern listrado vermelho enquanto não há foto).

### Animação e transições

Duas famílias de transição convivem no sistema, com papéis distintos:

- **Linear `ease` — transições base**
  - `--transition: 0.2s ease` em color/border/background — padrão de hover de link, mudança de cor, etc.
  - `--transition-slow: 0.35s ease` em opacity — cross-fade das duas camadas duotone do ícone Phosphor (rosé-gold → ouro polido).
- **Snap `cubic-bezier(0.2, 0.8, 0.2, 1)` — microinteções assinadas** (introduzidas pelo pricing kit, mai/2026)
  - `--ease-snap` — a curva. Sai rápido, segura no fim.
  - `--transition-snap: 0.32s var(--ease-snap)` — default snap. Usado em: card lift (`translateY(-6px)`), mudança de cor do preço ao hover (preto → `--green-dark`), arrow translate (`translateX(4px)`), borda dourada no hover.
  - `--transition-stage: 0.6s cubic-bezier(0.2, 0.85, 0.2, 1)` — exclusivo do carrossel 3D desktop pra absorver o z-stack (translateX + scale + opacity + blur).
  - **Top accent slider**: faixa de 4px no topo do card via `::before` com `transform: scaleX(0→1)` em 0.4s snap — motif reusável. Verde no padrão; pode ser red/gold em variantes.

**Animações contínuas** — use com escassez:
- **Pulse do status verde** — bolinha de "online" pulsa em `box-shadow` 2s ease-in-out infinite. **Única** animação contínua do sistema; comunica vida. (`.status-dot.green` em `colors_and_type.css`.)

**Hovers canônicos**:
- **Card editorial (blog)**: `translateY(-3px)` + `--shadow-sm → --shadow-md` + borda `--border-soft → --gold`. Sutil.
- **Card de pricing (ativo)**: `translateY(-6px)` + sombra verde sutil + borda verde + faixa verde top desliza. Mais expressivo — zona transacional.
- **Ícone Phosphor**: cross-fade rosé-gold → ouro polido em 0.35s. Não muda forma.
- **Asset slot do pricing desktop**: `scale(1.08) rotate(±3deg)` no hover do card. Rotação oposta no card featured (negativa no standard, positiva no featured).
- **Arrow do CTA** (`<span class="arrow">→</span>`): `translateX(4px)` em snap no hover do card pai. Microsinaliza "clica que vai".

**Sem springs com overshoot dramático em hover/press.** As interações de hover/press ficam em ease-out contínuo (sem ricochete). Mas **loops ornamentais contínuos** (ícone ✦ pulsa, card flutua, ornament glow, placeholder respira) podem usar `ease-in-out` com variação suave — é isso que dá vida mística à marca. O dot ativo é a única exceção controlada com overshoot leve (`fadas-dot-bounce` scaleY 0.6→1.25→0.9→1) — sinaliza "você trocou de slide", não é spring para todo lado.

#### Motion library canônica

Em `colors_and_type.css` vivem 12 keyframes prefixados `fadas-*` mais classes utilitárias `.fadas-anim-*`. Três famílias:

**Entry** (one-shot, ease-snap):
- `fadas-fade-slide-up` 0.6s — entrada de header de seção
- `fadas-card-in` 0.5s — entrada de card em grid/carrossel
- `fadas-row-in` 0.5s — slide horizontal de row de lista
- `fadas-featured-in` 0.5s — entrada do card destaque
- `fadas-card-fade-out` / `fadas-card-fade-in` 0.45-0.55s — swap de conteúdo dentro do mesmo container (auto-cycle)

**Loop** (contínuo, ease-in-out):
- `fadas-float` 4s — flutuação suave do card ativo (translateY -5px)
- `fadas-celestial-float` 6s — drift mais lento de ornamento topo (translateY -6px)
- `fadas-ornament-glow` 3s — pulso `box-shadow` 0→8px ao redor de ornamento
- `fadas-star-pulse` 3.5s — ✦ pulsa em opacity + scale + rotate (assinatura)
- `fadas-placeholder-pulse` 2.8s — placeholder de imagem respira em opacity 1→0.6

**Interaction** (one-shot em `:active` ou state change):
- `fadas-ripple` 0.45s — onda radial dentro do CTA cerimonial no press
- `fadas-dot-bounce` 0.45s — dot ativo dá elástica controlada

**Padrões de uso**:
- **Staggered entry**: aplicar `animation-delay` escalonado em incrementos de ~0.10s pra cascata visual (ex: `tiragem-row:nth-child(1) { animation-delay: 0.08s; }` … `nth-child(6) { animation-delay: 0.58s; }`).
- **Auto-cycle com pausa no hover**: `setInterval` 10s + listeners `mouseenter`/`mouseleave` no container que pausam/retomam. Reusado em listas destaque.
- **prefers-reduced-motion**: o CSS já desliga **todos** os loops e remove transições (`* { animation-duration: 0.01ms !important }`) automaticamente — vc não precisa fazer nada.

### Hover, press, focus

- **Link no corpo do texto**: normal verde-deep, sem underline; hover vermelho + underline dourado (1px solid `--gold`). Estado "visited" não diferenciado (padrão NYT/Substack — diferenciar confunde leitora).
- **Botão primário**: bg `--red` → bg `--green-dark` no hover (contraste cromático vermelho→verde, assinatura da marca). Active vai para `--green-deep`. Sem mudança de elevação dramática; sombra cresce sutilmente em quente (`rgba(72,50,30,…)`), nunca em vermelho.
- **Botão outline**: bg surface → bg `--bg-alt`.
- **Card inteiro clicável**: borda muda + elevação muda + título migra para `--neutral-dark`. Sem CTA absoluto sobreposto (princípio canônico).
- **Press / active** — dois estilos canônicos, escolhidos pelo contexto:
  - **Style A — snap shrink** `:active { transform: scale(0.97); transition: transform 0.12s ease; }` para **CTAs principais, cards de pricing, controles mobile-first**. Comunica resposta tátil em touch.
  - **Style B — darken only** sem transform; brevemente escurece (`--red-deep` para botões vermelhos, `--green-deep` para verdes). Para **links inline em texto, ícones de UI, controles de drawer/navegação, hover-driven desktop**. Mantém o tom editorial.
  - Critério: se é **ação principal/transacional/touch → A**. Se é **navegação/leitura/hover → B**.
- **Focus**: `outline: 2px solid var(--gold-deep)` com `outline-offset: 2px`. Apenas em controles de teclado.

### Bordas, raios, sombras

- **5 raios**: `--r-sm 6px` (tag), `--r-md 10px` (input, blockquote), `--r-lg 14px` (card), `--r-xl 22px` (CTA inline grande), `--r-pill 100px` (pílulas, badges, CTAs principais).
- **3 sombras** (todas em rgba marrom quente, não preto puro):
  - `--shadow-sm: 0 2px 8px rgba(72,50,30,0.06)` — repouso, base de cards.
  - `--shadow-md: 0 6px 20px rgba(72,50,30,0.09)` — hover de card.
  - `--shadow-lg: 0 16px 40px rgba(72,50,30,0.12)` — modais, popovers.
- **Bordas**: sempre 1px (1.5px só para os ícones de brand logo). Cores: `--border #ede0d4` (estado normal), `--border-soft #f5ebe0` (cards sobre cream), `--gold #e3cc7e` (estado destacado).

### Transparência e blur

- **Sticky header**: `background: var(--bg)` + `backdrop-filter: saturate(180%) blur(20px)`. Permite cards transparecerem sutilmente quando rolam atrás.
- **Banner CTA**: pílula "Online agora" usa `background: rgba(255,255,255,0.12)` + `backdrop-filter: blur(8px)` para destacar sobre o gradiente verde.
- **Hero de áudio player**: gradiente diagonal sutil `bg-alt → surface` + orb dourado radial 35% opacidade.
- Fora desses 3 usos, **não** usar blur ou translúcido — não é o vibe (não é glassmorphism).

### Capsulas vs gradientes de proteção

Para texto sobre imagem (hero de post), usamos **gradient overlay** (`linear-gradient(180deg, transparent 0%, rgba(26,20,16,0.6) 100%)`) bottom-up, não cápsulas. Mantém o aspecto editorial. Cápsulas só para badges flutuando sobre foto (categoria, "ao vivo").

### Imagem — vibe e proporções

- **Vibe cromática das fotos**: cálidas, douradas, com grão fino, naturais (luz do dia). Nunca azul-frio. Inspiração: fotografia editorial brasileira (revistas Capricho, Marie Claire, Folha). Tons de pele realistas (Brasil = diversidade).
- **Proporções**: hero flexível (`portrait 4:5` / `editorial 3:2` / `cinematic 16:9` / `wide 21:9`). Figure secundário: 3:2 desktop, 4:3 mobile. Vídeo embed: 16:9 sempre. Reels/Shorts: 9:16 com max-width.

### Layout

- **Grid de artigo**: 2 colunas no desktop (conteúdo 1fr + sidebar 320px sticky); 1 coluna no tablet (sidebar empilhada no fim); 1 coluna no mobile.
- **Container padding**: 20px mobile → 32px tablet → 48px desktop.
- **Breakpoints**: ≤700 mobile, 701–1024 tablet (regra CSS, sem mockup próprio), ≥1025 desktop.
- **Fixed/sticky**: header global é sticky. TOC do artigo é sticky no desktop (se artigo ≥3 H2s). Nada mais.

### Cards — anatomia

Foto 16:10 com pílula de categoria absoluto no canto top-left → corpo padding 18×20 → título Lora 17 / 1.3 → excerpt Lato 13 truncado `-webkit-line-clamp: 2` → meta dividida por border-top em `--border-soft`. Card inteiro clicável (cursor pointer), hover translateY -3px + sombra + borda dourada. **Sem CTA absoluto sobreposto.**

### Pricing card — anatomia

O **pricing card** é uma família própria, mais densa que o card editorial. Vive na zona transacional (página de preços, modal de checkout, banner de upsell). Vem em duas variantes:

- **Standard** — fundo `--surface`, borda `--border` 1.5px, raio `--r-xl 22px`, padding 28×24 mobile / 32×28 desktop. Quando dentro de um carrossel e marcado `.is-active`, a borda vira `--green` e o CTA pinta verde. Hover do ativo: CTA flipa pra vermelho (assinatura cromática Fadas verde→vermelho).
- **Featured** — fundo `--grad-hero-red`, borda `--red-deep`, texto branco. Orb dourado radial 160×160 top-right (35% opacidade) dá profundidade. Recebe o **badge ✦ o mais escolhido** absoluto (top: -10/-14px, gold com `--text-on-gold`, raio pill). CTA é inverso: fundo branco com texto vermelho; hover vira dourado.

Estrutura vertical (top → bottom):
1. **Head** — asset slot (48/56/64px raio 14-16, listras vermelhas) + duration title em Playfair 20-22px + modality subtitle 11px red 0.04em
2. **Price block** — currency 16px text-3 + value Playfair 56px text-1 + cents Playfair 24-26px sobrescrito. No hover do standard ativo, value e cents migram pra `--green-dark`.
3. **Price-per-min** — Lato 12-13px 600, text-3
4. **Divider** opcional (desktop) — 1px `rgba(0,0,0,0.06)`
5. **Copy** — Lato 13.5-14px, text-3, line-height 1.55-1.6
6. **Sessao-unica microcopy** — clock Phosphor 14px + label 11px 600 `--text-muted-light`
7. **CTA** — full width, raio `--r-md 10px`, padding 14×16-20, Style A press

**Top accent slider** (faixa verde 4px): aparece via `::before scaleX(0→1)` 0.4s snap ao hover do card ativo não-featured. Reusável fora do pricing — qualquer card pode ganhar essa faixa como motif assinado.

### Carousels

Dois formatos canônicos vivem em `ui_kits/pricing/`:

- **Mobile — scroll-snap horizontal** (`pricing-mobile.html`). `track` com `overflow-x: auto` + `scroll-snap-type: x mandatory`, slots `flex: 0 0 240px` com `scroll-snap-align: center`. Drag-to-scroll via mousedown/mousemove (preview desktop do mobile). Dot indicators clicáveis embaixo (`button` 8×8 → pill `28×8` no ativo, transição snap 0.35s).
- **Desktop — 3D stage** (`pricing-desktop.html`). Stage com `perspective: 1400px`. Cinco estados z-stacked nos slots: `is-far-prev`, `is-prev`, `is-active`, `is-next`, `is-far-next`. Cada um com `translateX + scale + opacity + filter:blur` próprios (combinação progressiva), transição `--transition-stage 0.6s`. Click numa card lateral promove ela ao centro; teclado ←/→ também navega.

**Dot indicators** — padrão visual unificado pros dois carrosséis: círculos 8-10px `--border`, ativo vira pill `28-36 × 8-10` em `--red`. Transição `all 0.35s --ease-snap`.

### Mini CTA card (`.more-card`)

Linha secundária de pacotes ("ou ver tudo", "ou ver vídeos"). Estrutura horizontal compacta: **ícone tile** 40-48px raio 10-14 (bg `--bg`, ícone vermelho) → **conteúdo** (título Playfair 15-19 / desc Lato 11-13 text-3) → **arrow** 18-22 `--text-muted-light`. Hover (Style B, hover-driven): translateY(-4px) + borda verde + sombra verde sutil + ícone tile vira verde com ícone branco + arrow translateX(6px) verde. Reusável fora do pricing — base de qualquer "navegação secundária inline".

### Asset slot — placeholder com ícone meaningful

Padrão pra slots de imagem/ícone temáticos que ainda não têm asset real. Caixa raio 10-18 (proporcional ao tamanho), fundo `repeating-linear-gradient(45deg, rgba(229,36,68,0.08) 4px, var(--bg) 4px, 8px)` + borda dashed `rgba(229,36,68,0.35)` 1.5px.

**Dentro do slot vai um ícone SVG inline outline em `--red`.** O ícone comunica o tema do slot e funciona como hint editorial. É **intencional** que seja outline (sem o tratamento rosé-gold dos ícones canônicos do drawer): a ausência de cor comunica "placeholder, não final" — quando o asset real (Twemoji SVG, foto, ilustração) entra, ele assume o protagonismo visual.

Implementação: os 4 ícones canônicos vivem em `<symbol>`s num `<svg style="display:none">` no topo do `<body>`, e os slots fazem `<use href="#i-X">` (offline-safe, sem CDN). Os paths dos símbolos são copiados de `assets/icons/*.svg` com a camada `opacity="0.2"` removida.

Mapeamento canônico no pricing kit (substituível por contexto):
- 20 min → `clock` (tempo)
- 30 min featured → `sparkle` (✦, assinatura)
- 40 min → `moon-stars` (místico, meio caminho)
- 60 min → `star` (destacado)

O HTML coloca `<i>` (com SVG inline) e `<img>` lado a lado dentro do slot:

```html
<div class="asset-slot">
  <i><svg viewBox="0 0 256 256"><use href="#i-clock"/></svg></i>
  <img src="" alt="Ícone 20min">
</div>
```

O swap acontece via CSS sem JS:

```css
.asset-slot img { display: none; }
.asset-slot img[src]:not([src=""]) { display: block; }                 /* mostra a img */
.asset-slot img[src]:not([src=""]) ~ i { display: none; }              /* esconde o ícone */
.asset-slot:has(img[src]:not([src=""])) { background: var(--bg); border: none; }  /* limpa listras */
```

Funciona pra Twemoji SVG (ícone temático de pacote, oráculo, etc.), foto de taróloga, ilustração editorial. No card featured a paleta inverte pra branco/transparente. Esta é a **única exceção consciente** à regra "ícone sempre com tratamento rosé-gold duotone" — placeholders ficam outline em vermelho pra comunicar estado-de-rascunho.

### Tiragem card — editorial / místico

Diferente do **pricing card** (transacional), o **tiragem card** vive na zona editorial/divinatória. Cabe pra qualquer escolha de conteúdo místico (tiragens, oráculos, rituais). Diferenças canônicas:

| Aspecto | Pricing (transacional) | Tiragens (editorial/místico) |
|---|---|---|
| **Border** | `--border` 1.5px (ou `--red-deep` no featured) | `--gold-soft` 1.5px — **sinal visual** "is editorial" |
| **Layout interno** | Head (icon+duration) + price block + copy + CTA | Imagem 1:1 topo + nome + divider ornamental + desc + CTA |
| **Imagem placeholder** | 56×56 / 64×64 raio 14-16 | **1:1 full-width** com listras 6px (vs 4px do pricing) |
| **Nome** | Playfair 20-22 head com modalidade abaixo | Playfair 19 centralizado, com `<br>` permitido pra equilibrar |
| **Descrição** | Lato 13.5 cinza | Lato 13 / Lora 14 italic **verde-deep** |
| **Divisor interno** | Sem (price-per-min serve de separador) | **Ornamental** — linha 32×1 dourada com ✦ centrado em fundo `--surface` |
| **CTA** | Lato 700 · full-width · snap shrink no press (Style A) | **Playfair 600** · pill · ripple no press (`fadas-ripple`) |
| **Texto do CTA** | `--surface` sobre vermelho | `var(--bg)` (cream) sobre vermelho — leve diferença editorial |
| **Inativo** | Cinza neutro | `opacity: 0.72` |
| **Ativo (loop)** | Faixa verde aparece no hover | `fadas-float` 4s ease-in-out infinite |
| **Estado destacado desktop** | n/a (carrossel mobile-first) | **Glass active row** (próxima seção) |

**Quando escolher cada um**: se a ação é *transacional* (pagar, contratar, comprar) → pricing card. Se a ação é *escolher conteúdo místico/editorial* (ler tiragem, consultar oráculo, abrir ritual) → tiragem card. O border `--gold-soft` é a assinatura visual que comunica "isto convida, não vende".

### Glass active row — estado destacado em lista vertical

Padrão do desktop de tiragens, mas reusável em qualquer lista vertical que precise destacar o item ativo com peso visual de "flutua acima do plano". Quarto uso canônico de blur no DS (depois de sticky header, banner CTA "online agora", audio player hero).

Receita canônica:

```css
.row.is-active {
  transform: translateX(18px) translateY(-2px);  /* desloca pra fora do alinhamento */
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  border: 1.5px solid rgba(200, 168, 64, 0.7); /* gold-deep alpha 0.7 */
  box-shadow:
    0 24px 56px rgba(72, 50, 30, 0.20),         /* elevação externa 1 */
    0 10px 24px rgba(72, 50, 30, 0.14),         /* elevação externa 2 */
    0 3px 8px rgba(72, 50, 30, 0.08),           /* contato com plano */
    inset 0 1px 0 rgba(255, 255, 255, 0.9),     /* highlight glass topo */
    inset 0 -1px 0 rgba(255, 255, 255, 0.3);    /* highlight glass base */
}
.row.is-active::before {
  content: ''; position: absolute;
  right: -4px; top: 12px; bottom: 12px;
  width: 4px;
  background: linear-gradient(180deg, var(--green-dark) 0%, var(--green-deep) 100%);
  border-radius: 3px;
  box-shadow: 0 0 16px rgba(106, 153, 0, 0.5);  /* glow vivo */
}
```

A combinação **5 layers de sombra + 2 insets** é o que dá a sensação de vidro com luz refletindo, sem precisar de imagem. A **barra verde lateral** com glow é a assinatura "selecionado vivo" — pareada com o `--status-dot.green` pulse, comunica a mesma família semântica.

### CTA cerimonial — zona decisiva editorial

Variante do botão principal pra zonas decisivas mas **não transacionais** (escolher tiragem, contratar consulta, abrir ritual). Diferenças do CTA padrão do pricing:

- **Tipografia**: Playfair Display 13-14px 600 (vs Lato 15px 700 do pricing)
- **Texto sobre vermelho**: `var(--bg)` cream (vs `var(--surface)` branco do pricing)
- **Press feedback**: ripple radial (`fadas-ripple`) via `::after` — onda branca expande e dissipa, NUNCA snap shrink (Style B-ish, mas com onda)
- **Hover**: bg `--red` → `--green-dark` + `translateY(-2px)` + sombra verde — mesma assinatura cromática vermelho→verde do pricing CTA, com lift mais explicit pra contextualizar a cerimônia

**CTA link** companion ("Ver detalhes →"): Lato 11-13 uppercase 0.08em sem fundo; no hover, color migra pra `--red` **e** `letter-spacing` cresce pra 0.12em. Microinteção assinada — a tipografia "abre" pra sinalizar "clica que aqui tem mais".

**Quando usar A (pricing snap shrink) vs B (cerimonial ripple)**:
- **Pricing snap** → CTAs de compra direta, pacotes, checkout, controles touch repetitivos
- **Cerimonial ripple** → escolha de tiragem, abrir oráculo, contratar uma consulta específica, qualquer momento ritual

---

---

## ICONOGRAPHY

### Sistema canônico

A Fadas usa **dois sistemas paralelos** com regras distintas — não confundir os dois.

#### 1. Phosphor Icons Duotone (ícones de interface)

- Biblioteca: **Phosphor Icons** (phosphoricons.com), MIT, ativo desde 2020. ~9000 ícones em 6 pesos. Usamos **apenas o peso Duotone**.
- **Localmente** em `assets/icons/*.svg` — 12 ícones canônicos do drawer + 12 utilitários (`list`, `x`, `bookmark-simple`, `bookmark-simple-fill`, `play`, `pause`, `copy`, `dots-three`, `heart`, `star`, `arrow-right`, `clock`, `check`, `envelope`, `phone`, `share-network`, `magnifying-glass`, `calendar-blank`, `arrow-left`, `caret-right`). São SVGs raw com `stroke="currentColor"` e uma camada de fundo `opacity="0.2"`, prontos para receber o tratamento rosé-gold.
- **CDN alternativa** (uso rápido em prototypes): `<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>` e então `<i class="ph-duotone ph-sparkle"></i>`. Bom para mocks; em produção e em qualquer artefato offline use os SVGs locais.
- **Estilo cromático**:
  - Normal: gradiente vertical **rosé gold** (5 stops: `#ffe8d6` → `#f0b89a` → `#c47860` → `#8c5240` → `#5a3024`)
  - Hover: gradiente vertical **ouro polido** (4 stops: `#fff5d4` → `#f5d97c` → `#d4a857` → `#a87f30`)
  - Cross-fade via duas camadas SVG empilhadas, `opacity 0.35s ease`.
  - Implementação: duplicar o SVG em duas camadas (`<svg class="rose">` + `<svg class="gold">`), aplicar `fill: url(#fadas-rose-fill)` na `[opacity="0.2"]` e `stroke: url(#fadas-rose-stroke)` no `[stroke="currentColor"]`. Veja `preview/20-icons-phosphor.html` (versão offline com SVGs locais) e `ui_kits/blog/icons.jsx` (componente `<FadasIcon name="sparkle">` para React).
  - Os 4 gradientes SVG (`#fadas-rose-stroke`, `#fadas-rose-fill`, `#fadas-gold-stroke`, `#fadas-gold-fill`) ficam em um `<svg>` invisível no `<defs>` global da página.
- **Tamanhos**: 16 inline · 20 menu/drawer · 24 topbar · 32 cards · 48+ destaques.
- **Mapeamento canônico do drawer** (12 itens):
  - Consultas → `sparkle`
  - Tarólogas → `users`
  - Tiragens → `diamonds-four`
  - Ofertas → `gift`
  - Oráculos → `moon-stars`
  - Preço → `currency-circle-dollar`
  - Como se consultar? → `signpost`
  - Perguntas frequentes → `question`
  - Blog → `book-open`
  - Sobre nós → `seal-check`
  - Contato → `chat-circle-dots`
  - Trabalhe conosco → `handshake`
- **Fallback**: Lucide Icons (`lucide.dev`) — se o Phosphor não tiver o ícone necessário. Mesmo estilo duotone via classe `.lucide` customizada.

> Os SVGs locais foram trazidos da pasta `phosphor/` original (peso duotone) em mai/2026. Pasta completa do Phosphor (1500+ ícones em 6 pesos) **não** está no projeto — só os 24 que entraram em uso. Se precisar de um novo ícone, baixar de phosphoricons.com e copiar para `assets/icons/`.

#### 2. Simple Icons (brand logos de terceiros)

- Biblioteca: **Simple Icons** (simpleicons.org), MIT, 3000+ logos SVG monocromáticos.
- Usamos para **WhatsApp, Telegram, Facebook, X, Pinterest, Instagram, TikTok, YouTube, Email (compose), Mercado Pago, PIX**.
- Os SVGs canônicos estão extraídos em `assets/brand/*.svg` — copiar e usar inline.
- **Estado normal**: cor `--green-deep #4a6b1e`, sem fundo, borda `1.5px solid #e8dccb`, container 52×52 raio 12px.
- **Estado hover**: logo vira **branco**, fundo assume **cor oficial da marca** (WhatsApp `#25D366`, Instagram gradient brand, etc.), raio cresce para 16px, transição 0.25s.
- **Exceção**: CTAs isolados (botão grande "Falar no WhatsApp") usam cor oficial direto, sem o estado verde-deep monocromático.

### Emoji e unicode

- **Emoji** aparecem nas 4 reações (❤️🙏💡✨) e em alguns labels de contato (📱💬📞). Não usar como ícone de UI funcional.
- **Unicode ornamental**: o ✦ (U+2726) é o segundo símbolo da marca (depois do logo). Aparece em pílulas de categoria, divisores ornamentais, pull quotes (acima e abaixo da frase). Cor: `--gold-deep`. Também usamos ☾ (U+263E) ocasionalmente para temas de tarot lunar.

### Não-fazer

- **Não** desenhar ícones SVG à mão. Sempre usar Phosphor ou Simple Icons.
- **Não** misturar pesos do Phosphor em UI final — sempre Duotone. Outline/Regular/Fill quebram o vibe místico. (Única exceção consciente: SVG inline outline em `--red` como **placeholder dentro de asset slot** — ver "Asset slot — placeholder com ícone meaningful".)
- **Não** colocar emoji em botões funcionais ("Consultar 🔮 agora") — fica vendido. Emoji só em conteúdo editorial e reações.

---

## Index — manifesto do projeto

```
.
├── README.md                       ← você está aqui
├── SKILL.md                        ← instruções para Claude Code / Agents
├── colors_and_type.css             ← CSS vars + estilos semânticos base + @font-face locais
├── fonts/                          ← TTFs oficiais — Playfair Display (12 estilos) + Lora (8 estilos)
├── source/
│   ├── design_system_v18.html      ← DS canônico v2.7 (18 seções)
│   ├── icones_design_system.html   ← Iconografia detalhada
│   ├── tabela_precos_mobile.html   ← Fonte da tabela de preços mobile (carrossel scroll-snap)
│   ├── tabela_precos_desktop_carrossel.html ← Fonte do stage 3D desktop
│   ├── tiragem_mobile.html         ← Fonte da tela de tiragens mobile
│   └── tiragem_desktop.html        ← Fonte do featured + lista glass desktop
├── assets/
│   ├── brand/                      ← SVGs Simple Icons (WhatsApp, Insta, etc)
│   ├── icons/                      ← SVGs Phosphor duotone (24 ícones locais)
│   ├── logo-fadas.svg              ← Logo "Fadas." em SVG inline-canonico
│   └── ornaments.svg               ← ✦ ☾ ornamentos como sprites
├── preview/                        ← cards do Design System tab
│   ├── 01-brand-colors.html
│   ├── 02-surface-colors.html
│   ├── 03-text-colors.html
│   ├── 04-blog-categories.html
│   ├── 05-type-families.html
│   ├── 06-type-scale.html
│   ├── 07-radius.html
│   ├── 08-shadows.html
│   ├── 09-spacing.html
│   ├── 10-buttons.html
│   ├── 11-pills-tags-badges.html
│   ├── 12-form.html
│   ├── 13-card-article.html
│   ├── 14-avatars.html
│   ├── 15-divider-ornaments.html
│   ├── 16-pull-quote.html
│   ├── 17-audio-player.html
│   ├── 18-reactions.html
│   ├── 19-banner-cta.html
│   ├── 20-icons-phosphor.html
│   ├── 21-brand-logos.html
│   ├── 22-gradients.html
│   ├── 23-blur-glass.html
│   ├── 24-pricing-card.html        ← Pricing card · standard + featured
│   ├── 25-section-header-overline.html ← Header overline + em + subtitle
│   ├── 26-asset-slot.html          ← Placeholder listrado pra Twemoji/imagens
│   ├── 27-tiragem-card.html        ← Tiragem card vertical (gold-soft, divider ornamental)
│   ├── 28-glass-active-row.html    ← Glass active row · 5-layer composite shadow
│   ├── 29-cta-ceremonial.html      ← CTA cerimonial Playfair + ripple + link letter-spacing
│   └── 30-motion-library.html      ← 12 keyframes canônicos com preview interativo
└── ui_kits/
    ├── blog/
    │   ├── README.md
    │   ├── index.html              ← post completo (homepage do kit)
    │   ├── icons.jsx               ← <FadasIcon name=""> com 24 SVGs inline
    │   └── components.jsx          ← Header, Hero, Article, Sidebar, etc
    ├── pricing/
    │   ├── README.md
    │   ├── index.html              ← landing do kit (links pra mobile + desktop)
    │   ├── pricing-mobile.html     ← carrossel scroll-snap 375px
    │   └── pricing-desktop.html    ← stage 3D 1200+ com 5 estados z-stacked
    └── tiragens/
        ├── README.md
        ├── index.html              ← landing do kit (links pra mobile + desktop)
        ├── tiragens-mobile.html    ← carrossel scroll-snap com tiragem card vertical
        └── tiragens-desktop.html   ← featured + lista glass com auto-cycle 10s
```

### Próximos passos sugeridos

- Marketplace de tarólogas como próximo UI kit (perfis, chat, status online ao vivo). Ótimo candidato pra estrear a família **tiragem card editorial** + **glass active row** em outra superfície.
- Tela de checkout / fluxo de pagamento (pricing está kitada — falta o pós-clique: dados, pagamento, confirmação).
- Templates de email transacional (boas-vindas, recibo de consulta).
- Versão dark mode (não documentada no v18; o DS é light-only por enquanto).
- Sync dos ícones Phosphor que o kit pricing introduziu (`microphone`, `chat-text`, `video-camera`, `squares-four`) pros locais em `assets/icons/`. Hoje vivem só via CDN.
- Curadoria de Twemojis (~12 SVGs) em `assets/twemoji/` quando a base local do time chegar.
