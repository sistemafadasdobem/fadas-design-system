# UI Kit — Tiragens / Divinação

A interface que une o leitor à divinação. Lista as **tiragens disponíveis** (Cruz Celta, Mandala Astrológica, Mesa Real, etc.), cada uma com seu propósito, ilustração e CTA cerimonial.

- **`tiragens-mobile.html`** — carrossel horizontal scroll-snap 375px. Cards verticais com imagem 1:1, divider ornamental e CTAs empilhados. Drag + dots + cards inativos com `opacity: 0.72`, ativo flutua suavemente.
- **`tiragens-desktop.html`** — layout 2-colunas (card destaque grande à esquerda, lista de 6 rows à direita). **Auto-cycle** 10s entre rows com pausa no hover. Row ativa em **glass** (backdrop-filter blur + 5-layer composite shadow + barra vertical verde lateral).

## Distinção visual vs Pricing

| Aspecto | Pricing (transacional) | Tiragens (editorial/místico) |
|---|---|---|
| **Border** | `--border` cinza-creme (ou vermelho no featured) | `--gold-soft` 1.5px |
| **CTA principal** | Lato 700, full-width pill | **Playfair 600**, pill com ripple |
| **CTA text color** | `--surface` sobre vermelho | `var(--bg)` (cream) sobre vermelho |
| **Hover do CTA** | Vermelho → verde-dark + arrow translate | Vermelho → verde-dark + translateY + box-shadow verde |
| **Press feedback** | Style A snap shrink | Ripple radial (`fadas-ripple`) |
| **Divider interno** | Sem | Ornamental — linha dourada com ✦ centro |
| **Inativo** | Cinza neutro | `opacity: 0.72` |
| **Ativo (loop)** | Faixa verde aparece no hover | `fadas-float` infinito |
| **Estado ativo desktop** | n/a (carrossel mobile-first) | Glass row com 5-layer shadow |
| **Quando usar** | Pacotes, preços, checkout | Tiragens, oráculos, conteúdo divinatório, escolhas editoriais |

Resumo: **Pricing** é o "como pagar", **Tiragens** é o "que escolher pra alma". Border dourado é o sinal visual de "isto é místico/editorial, não vende — convida".

## Motion library usada

Esses arquivos usam toda a família `fadas-anim-*` declarada em `colors_and_type.css`:

- **Entry**: `fadas-fade-slide-up` (header), `fadas-card-in` (cards do carrossel mobile), `fadas-row-in` (rows da lista desktop), `fadas-featured-in` (card destaque)
- **Loop**: `fadas-float` (card ativo mobile), `fadas-ornament-glow` (ornamento topo), `fadas-star-pulse` (✦ no header + "ver todas"), `fadas-placeholder-pulse` (imagens vazias)
- **Interaction**: `fadas-ripple` (`:active` do CTA cerimonial), `fadas-dot-bounce` (dot ativo)
- **Swap**: `fadas-card-fade-out` / `fadas-card-fade-in` (troca do conteúdo do featured card desktop)

Todos respeitam `prefers-reduced-motion: reduce` via override global no CSS — usuária com motion reduzido vê a UI estática, sem loops.

## Padrões de behavior introduzidos

1. **Entrada staggered** — `animation-delay` escalonado em incrementos de 0.10s pra cascata visual.
2. **Auto-cycle com pausa no hover** — 10s entre swaps; pausa quando o cursor entra na zona da lista. Reusável em qualquer lista destaque.
3. **Glass active row** — `backdrop-filter: blur(14px) saturate(1.2)` + 5 layers de sombra (3 elevações + 2 insets pro highlight glass). Quarto uso canônico de blur no DS.

## Tokens e regras que esse kit revelou

- **Border `--gold-soft` 1.5px** — assinatura visual de superfícies editoriais/místicas.
- **CTA cerimonial** — variante de botão pra zonas decisivas (escolher tiragem, contratar consulta). Documentado no README raiz junto com o CTA transacional.
- **Divider ornamental** — linha + ✦ centralizado em fundo `--surface`. Vive em qualquer card que precise dividir nome de descrição com peso editorial.

Documentação canônica desses padrões: `preview/27-…` (tiragem card), `preview/28-…` (glass active row), `preview/29-…` (CTAs editoriais), `preview/30-…` (motion library) — todos no Design System tab.
