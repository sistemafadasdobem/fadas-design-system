# UI Kit — Pricing / Pacotes de consulta

Tabela de preços da Fadas, em dois formatos canônicos:

- **`pricing-mobile.html`** — carrossel horizontal scroll-snap (375px). Drag + swipe + dot indicators.
- **`pricing-desktop.html`** — carrossel 3D stage (1200px+). Cinco estados z-stacked (`is-far-prev / is-prev / is-active / is-next / is-far-next`) com perspective + blur + scale. Setas ←/→ no teclado.

Ambos usam os tokens do DS (`../../colors_and_type.css`), ícones Phosphor Duotone via CDN para modalidade (voz/texto/vídeo) e clock, e o **asset slot listrado** como placeholder pros ícones temáticos (Twemoji entra aqui — basta dropar o `<img src="…">` e o placeholder desaparece via `:has()`).

## Princípios

- **Featured = vermelho com gradient hero** (`--grad-hero-red`), orb dourado top-right, badge `✦ o mais escolhido` em dourado com texto `--text-on-gold`.
- **Standard ativo = verde** (CTA verde, borda verde, faixa verde no top do card no hover).
- **Standard inativo = neutro** (CTA cinza-creme com borda). Só vira verde quando o slot é `.is-active`.
- **Hover do standard ativo**: CTA vai do verde pro vermelho — contraste cromático verde→vermelho da marca, o mesmo motif dos botões principais.
- **Press do CTA**: snap shrink `scale(0.97)` (Style A — ver README raiz).

## Motion

- `--transition-snap` (0.32s `--ease-snap`) em todos os micro-movements: card lift, mudança de cor do preço, arrow translate, faixa verde.
- `--transition-stage` (0.6s) só no stage do desktop, pra absorver o z-stack do carrossel.
- Asset slot do desktop ganha `scale(1.08) rotate(±3deg)` no hover do card — sutil "vida" decorativa.

## Componentes novos que esses arquivos introduzem ao DS

1. **Pricing card** (standard + featured)
2. **Top accent slider** (faixa verde `::before` scaleX 0→1) — motif reusável
3. **Mobile carousel** (scroll-snap + drag + dots)
4. **Desktop stage carousel** (3D z-stack)
5. **Dot indicators** (círculo → pill no ativo)
6. **Section overline header** (overline + Playfair com `<em>` dourado + subtitle Lora)
7. **Mini CTA card** (`.more-card` — ícone tile + título Playfair + arrow)
8. **Asset slot placeholder** (listras + label, auto-hide com `:has()`)

Documentação canônica desses padrões: `preview/24-…`, `preview/25-…`, `preview/26-…`, e a seção **Pricing / Carousels** no README raiz.
