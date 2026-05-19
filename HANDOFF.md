# Handoff — Fadas do Bem Design System

Este pacote contém o design system completo da Fadas do Bem (**fadasdobem.com.br**). Foi criado em colaboração entre time de design e Claude, mai/2026.

## Primeiros passos (5 minutos)

### 1. Linkar o CSS no projeto

Copie `colors_and_type.css` para sua pasta de estáticos e linke no `<head>` da aplicação (ou importe no seu CSS principal):

```html
<link rel="stylesheet" href="/caminho/para/colors_and_type.css">
```

Esse arquivo traz **tudo**:
- 89 CSS custom properties (`--red`, `--green`, `--gold`, `--bg`, `--text-1` … todos os tokens)
- `@font-face` para Playfair Display e Lora locais
- Estilos semânticos base (`body`, `h1`-`h4`, `p`, `blockquote`, `.lead`, `.pull-quote`, `.label`, `.meta`, links editoriais)
- **Motion library** completa (12 keyframes `fadas-*` + classes utilitárias `.fadas-anim-*` + override `prefers-reduced-motion`)
- `.status-dot.green` / `.status-dot.red` — única animação contínua canônica

### 2. Copiar as fontes

Copie o conteúdo de `fonts/` para o mesmo nível (ou ajuste os paths no `@font-face` do CSS). 20 arquivos `.ttf` no total — Playfair Display (12 estilos) + Lora (8 estilos). Lato e JetBrains Mono carregam via Google Fonts (já no `@import`).

### 3. Copiar os assets

- `assets/icons/` — 32 SVGs Phosphor duotone (sparkle, moon-stars, users, etc.)
- `assets/brand/` — 10 SVGs Simple Icons (WhatsApp, Instagram, etc.)
- `assets/logo/` + `assets/ornaments.svg` — marca

Use inline ou via `<img src>` conforme o caso. **Não desenhe ícones à mão** — sempre Phosphor ou Simple Icons.

## Onde encontrar o quê

```
.
├── README.md                  ← guia canônico do DS (toda a documentação completa)
├── SKILL.md                   ← instruções pra agentes IA que vão usar o DS
├── HANDOFF.md                 ← você está aqui
├── colors_and_type.css        ← CSS único pra linkar no app
├── fonts/                     ← TTFs oficiais
├── assets/                    ← ícones + brand logos + ornamentos
├── source/                    ← FONTES históricas — os HTMLs que originaram o DS
│   ├── design_system_v18.html      (DS canônico v2.7, 18 seções)
│   ├── icones_design_system.html   (iconografia detalhada)
│   ├── tabela_precos_*.html        (pricing intent)
│   └── tiragem_*.html              (tiragens intent)
├── preview/                   ← 30 cards de DS (cada um documenta UM componente isoladamente)
└── ui_kits/                   ← IMPLEMENTAÇÕES CANÔNICAS prontas pra copiar
    ├── blog/                  ← post editorial completo
    ├── pricing/               ← tabela de preços (mobile + desktop)
    └── tiragens/              ← lista de tiragens (mobile + desktop)
```

### `ui_kits/` é o que você vai copiar mais

Cada pasta tem um `README.md` explicando o kit + um `index.html` que serve de landing + os HTMLs canônicos do componente em si. Pra implementar uma tela:

1. Abre o HTML canônico (ex: `ui_kits/pricing/pricing-mobile.html`)
2. Copia o `<style>` e o markup
3. Troca o `<link rel="stylesheet" href="../../colors_and_type.css">` pelo path real do app
4. Adapta a estrutura pro framework (React, Vue, etc.)

### `source/` é "porquê", `ui_kits/` é "como faz", `preview/` é "anatomia"

- **`source/`** — quando você quer entender a intenção original do design. Não usa em produção.
- **`ui_kits/`** — copia daqui. É a referência canônica.
- **`preview/`** — abre quando quer ver UM componente isolado (anatomia limpa, sem o ruído do contexto).

## Convenções não-negociáveis

Estas regras são as mais frequentemente violadas — leia o README completo, mas o resumo é:

- **Nunca branco puro `#fff` em background de página** — use `--bg #fef4e6` (creme).
- **Nunca preto puro `#000` em texto** — use `--text-1 #1a1410` (preto-quente).
- **Cores de marca em doses precisas** — vermelho/verde/dourado aparecem em 1-2 pontos por tela.
- **Ícones**: sempre **Phosphor Duotone** (UI) ou **Simple Icons** (brand logos). Nunca SVG à mão, nunca emoji em UI funcional, nunca misturar pesos.
- **Press feedback** tem dois estilos:
  - **Style A** snap shrink (`scale(0.97)`) → CTAs principais, pricing, touch
  - **Style B** darken only (sem transform) → links, ícones, navegação
- **Cards transacionais** (pricing) vs **cards editoriais** (tiragens) usam paletas/regras diferentes — ver tabela completa no README seção "Tiragem card — editorial / místico".
- **`prefers-reduced-motion`**: já tratado no CSS. **Não desligue**.

## Voz e copy

- Tom: **caloroso, alegre, místico** — "como uma amiga sábia". Nunca corporativo, nunca wellness gringo, nunca "festivo".
- "Você" singular feminino implícito (funciona masculino também).
- Capitalização de frase em títulos (PT-BR), nunca Title Case Inglesa.
- Microcopy com alma: "Caminhos" (não "navegação"), "Fale com as Fadas" (não "contato"), "Mapa do Fadas do Bem" (não "footer").
- 4 reações canônicas: ❤️ Amei · 🙏 Grata · 💡 Iluminou · ✨ Ressoou

Ver README seção "CONTENT FUNDAMENTALS" pra tudo.

## Tem dúvida?

A maioria das respostas tá no `README.md`. Procure por seção:
- **Cores** → "Cores"
- **Tipografia** → "Tipografia"
- **Botões/CTAs** → "Pricing card — anatomia" + "CTA cerimonial"
- **Animação** → "Animação e transições" + "Motion library canônica"
- **Cards** → "Cards — anatomia", "Pricing card", "Tiragem card", "Glass active row"
- **Ícones** → "ICONOGRAPHY"
- **Componentes específicos** → preview cards (`preview/01-…` até `preview/30-…`)

---

**Versão**: maio/2026 · **Mantenedor**: time de design Fadas + Claude · **Licença**: a definir (privado por ora)
