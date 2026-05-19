// ─────────────────────────────────────────────────────────────────────────
// Fadas do Bem — Blog UI Kit · components.jsx
// Mock-fidelity React components for the editorial blog/marketplace surface.
// Loaded by index.html via <script type="text/babel" src="components.jsx">
// ─────────────────────────────────────────────────────────────────────────
const { useState, useEffect } = React;

// ────── Inline outline SVG helpers (topbar icons — pure stroke, not Phosphor) ──────
const OutlineIcon = ({ d, viewBox = '0 0 24 24', size = 24 }) => (
  <svg viewBox={viewBox} width={size} height={size}
       fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round"
       dangerouslySetInnerHTML={{ __html: d }} />
);
const OI = {
  menu:  '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  bell:  '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  cart:  '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
  user:  '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
};

// ────── 1. Header — sticky topbar, 3 columns, outline icons, centered logo image ──────
function Header({ onDrawerToggle, onSearch, notifications = true }) {
  return (
    <header style={fadasStyles.topbar}>
      <div style={fadasStyles.topbarInner}>
        <div style={fadasStyles.topbarSide}>
          <button className="top-icon" onClick={onDrawerToggle} aria-label="Abrir menu" title="Menu" style={fadasStyles.topIcon}>
            <OutlineIcon d={OI.menu} />
          </button>
          <button className="top-icon" onClick={onSearch} aria-label="Buscar" title="Buscar" style={fadasStyles.topIcon}>
            <OutlineIcon d={OI.search} />
          </button>
        </div>
        <a href="#" style={fadasStyles.topbarLogo}>
          <img src="../../assets/logo/logo_fadas_do_bem.svg" alt="Fadas do Bem" style={fadasStyles.topbarLogoImg}/>
        </a>
        <div style={fadasStyles.topbarSide}>
          <button className="top-icon" aria-label="Notificações" title="Notificações" style={fadasStyles.topIcon}>
            <OutlineIcon d={OI.bell} />
            {notifications && <span style={fadasStyles.topBadgeDot} />}
          </button>
          <button className="top-icon" aria-label="Carrinho" title="Carrinho" style={fadasStyles.topIcon}>
            <OutlineIcon d={OI.cart} />
          </button>
          <button className="top-icon" aria-label="Minha conta" title="Minha conta" style={fadasStyles.topIcon}>
            <OutlineIcon d={OI.user} />
          </button>
        </div>
      </div>
    </header>
  );
}

// ────── 2. Drawer — slide-out menu w/ auth, grouped items, simple rosé icon tint ──────
function Drawer({ open, onClose }) {
  // Items grouped by semantic cluster (separated by soft divider lines)
  const groups = [
    [['sparkle', 'Consultas'], ['users', 'Tarólogas'], ['diamonds-four', 'Tiragens'], ['gift', 'Ofertas', 'destaque']],
    [['moon-stars', 'Oráculos'], ['currency-circle-dollar', 'Preço']],
    [['signpost', 'Como se consultar?'], ['question', 'Perguntas frequentes'], ['book-open', 'Blog']],
    [['seal-check', 'Sobre nós'], ['chat-circle-dots', 'Contato'], ['handshake', 'Trabalhe conosco']]
  ];
  return (
    <>
      <div onClick={onClose} style={{
        ...fadasStyles.drawerOverlay,
        background: open ? 'rgba(26,20,16,0.55)' : 'rgba(26,20,16,0)',
        pointerEvents: open ? 'all' : 'none'
      }} />
      <aside style={{ ...fadasStyles.drawer, transform: open ? 'translateX(0)' : 'translateX(-100%)' }}>
        <div style={fadasStyles.drawerHeader}>
          <img src="../../assets/logo/logo_fadas_do_bem.svg" alt="Fadas do Bem" style={fadasStyles.drawerLogoImg}/>
          <button onClick={onClose} aria-label="Fechar" style={fadasStyles.drawerClose}>
            <OutlineIcon d={OI.close} size={20} />
          </button>
        </div>

        <div style={fadasStyles.drawerAuth}>
          <button style={fadasStyles.drawerBtnLogin}>Entrar</button>
          <button style={fadasStyles.drawerBtnCad}>Cadastrar</button>
        </div>

        <div style={fadasStyles.drawerScroll}>
          {groups.map((group, gi) => (
            <React.Fragment key={gi}>
              {gi > 0 && <div style={fadasStyles.drawerDividerSoft} />}
              {group.map(([ic, label, mod]) => (
                <a key={ic} href="#" className={`drawer-item${mod ? ' destaque' : ''}`} style={{
                  ...fadasStyles.drawerItem,
                  color: mod === 'destaque' ? 'var(--red)' : 'var(--text-1)'
                }}>
                  <FadasIcon name={ic} size={22} tone="solid" />
                  {label}
                </a>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div style={fadasStyles.drawerFooter}>
          <div style={fadasStyles.drawerBrandSmall}>
            <span style={{ color: 'var(--red)', fontWeight: 700 }}>Fadas</span> do Bem · tarot e oráculos on-line
          </div>
        </div>
      </aside>
    </>
  );
}

// ────── 3. ArticleHero — breadcrumb + category pill + H1 + meta + photo ──────
function ArticleHero({ category = 'Tarot', categoryCls = 'tarot', title, dek, author, readTime, date }) {
  return (
    <section style={fadasStyles.hero}>
      <nav style={fadasStyles.breadcrumb}>
        <a href="#">Início</a><span> · </span>
        <a href="#">Blog</a><span> · </span>
        <a href="#">{category}</a>
      </nav>
      <CategoryPill cls={categoryCls}>{category}</CategoryPill>
      <h1 style={fadasStyles.h1}>{title}</h1>
      <div style={fadasStyles.heroMeta}>
        <Avatar initial={author[0]} size={36} />
        <div>
          <div style={fadasStyles.metaAuthor}>por <strong>{author}</strong></div>
          <div style={fadasStyles.metaSub}>{date} · {readTime} min de leitura</div>
        </div>
      </div>
      <figure style={fadasStyles.heroFigure}>
        <div style={fadasStyles.heroPhoto}>
          <span style={fadasStyles.photoLabel}>FOTO HERO · 3:2 EDITORIAL</span>
        </div>
      </figure>
      <p style={fadasStyles.lead}>{dek}</p>
    </section>
  );
}

// ────── 4. CategoryPill ──────
function CategoryPill({ cls, children }) {
  const map = {
    amor:  ['#fce4e8', '#c1185b'],
    orac:  ['#d9eef0', '#00838f'],
    astro: ['#fce8d0', '#b56500'],
    auto:  ['#ebe0f0', '#7b3590'],
    tarot: ['#e8f0e0', '#4a6b1e']
  };
  const [bg, fg] = map[cls] || map.tarot;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 14px',
      background: bg, color: fg, borderRadius: 100,
      fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.12em', lineHeight: 1
    }}>
      <span style={{ fontSize: 9 }}>✦</span>{children}
    </span>
  );
}

// ────── 5. Avatar ──────
function Avatar({ initial, size = 44, live = false }) {
  return (
    <span style={{
      position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--gold-soft), var(--gold-deep))',
      border: '2px solid var(--surface)',
      fontFamily: 'var(--font-display)', fontSize: size * 0.32, fontWeight: 700,
      color: 'var(--green-deep)'
    }}>
      {initial}
      {live && <span style={{
        position: 'absolute', bottom: 1, right: 1, width: 11, height: 11, borderRadius: '50%',
        background: 'var(--green)', border: '2px solid var(--surface)'
      }}/>}
    </span>
  );
}

// ────── 6. AudioPlayer — TTS narrated by AI ──────
function AudioPlayer({ duration = '6:42' }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [speed, setSpeed] = useState(1);
  const speeds = [1, 1.25, 1.5, 2];

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProgress(p => p >= 100 ? (setPlaying(false), 0) : p + 0.5), 100);
    return () => clearInterval(t);
  }, [playing]);

  return (
    <div style={fadasStyles.audioPlayer}>
      <div style={fadasStyles.audioOrb}></div>
      <button onClick={() => setPlaying(p => !p)} style={fadasStyles.audioPlayBtn} aria-label="Tocar áudio">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          {playing ? <path d="M6 5h4v14H6zm8 0h4v14h-4z"/> : <path d="M8 5v14l11-7z"/>}
        </svg>
      </button>
      <div style={{ position: 'relative', flex: 1 }}>
        <div style={fadasStyles.audioLabel}>Ouvir o artigo</div>
        <div style={fadasStyles.audioMeta}>{duration} ● narrado por IA ● voz feminina</div>
        <div style={fadasStyles.audioTrack}>
          <div style={{ ...fadasStyles.audioFill, width: `${progress}%` }}></div>
        </div>
      </div>
      <button onClick={() => setSpeed(s => speeds[(speeds.indexOf(s) + 1) % speeds.length])} style={fadasStyles.audioSpeed}>
        {speed}x
      </button>
    </div>
  );
}

// ────── 7. ArticleBody — composes h2/h3/p/pull-quote/figure/blockquote ──────
function ArticleBody({ children }) {
  return <div className="article" style={fadasStyles.article}>{children}</div>;
}

function PullQuote({ children }) {
  return (
    <div style={{ textAlign: 'center', padding: '28px 12px', margin: '40px 0' }}>
      <div style={{ fontSize: 14, color: 'var(--gold-deep)', marginBottom: 14 }}>✦</div>
      <p style={fadasStyles.pullQuote}>{children}</p>
      <div style={{ fontSize: 14, color: 'var(--gold-deep)', marginTop: 14 }}>✦</div>
    </div>
  );
}

function Figure({ caption, title }) {
  return (
    <figure style={{ margin: '36px 0' }}>
      <div style={fadasStyles.figurePhoto}>
        <span style={fadasStyles.photoLabel}>FIGURE · 3:2 EDITORIAL</span>
      </div>
      <figcaption style={fadasStyles.figureCaption}>
        <strong style={fadasStyles.figureCaptionStrong}>{title}</strong> {caption}
      </figcaption>
    </figure>
  );
}

// ────── 8. Sidebar — TOC + live tarólogas widget + tags ──────
function Sidebar({ toc, tags }) {
  return (
    <aside style={fadasStyles.sidebar}>
      <div style={fadasStyles.sidebarBox}>
        <div style={fadasStyles.sidebarLabel}>Neste artigo</div>
        <ol style={fadasStyles.tocList}>
          {toc.map((t, i) => (
            <li key={i} style={fadasStyles.tocItem}>
              <a href={`#${t.id}`} style={fadasStyles.tocLink}>
                <span style={fadasStyles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                <span>{t.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div style={{ ...fadasStyles.sidebarBox, padding: 0, overflow: 'hidden' }}>
        <div style={{
          padding: '22px 22px 18px',
          background: 'linear-gradient(135deg, #6a8a30 0%, #4a6b1e 50%, #34501a 100%)',
          color: '#fff', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 130, height: 130, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(227,204,126,0.18) 0%, transparent 65%)'
          }}/>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 10px', background: 'rgba(255,255,255,0.13)',
            border: '1px solid rgba(255,255,255,0.3)', borderRadius: 100,
            fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em',
            backdropFilter: 'blur(8px)', position: 'relative', zIndex: 2
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }}/>Online agora
          </span>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, lineHeight: 1.15,
            margin: '12px 0 6px', letterSpacing: '-0.02em', position: 'relative', zIndex: 2
          }}>Sua consulta está esperando</h3>
          <p style={{
            fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 13,
            color: 'rgba(255,255,255,0.85)', margin: '0 0 14px', position: 'relative', zIndex: 2
          }}>8 tarólogas prontas para te ouvir agora.</p>
          <div style={{ display: 'inline-flex', marginBottom: 14, position: 'relative', zIndex: 2 }}>
            {['F','M','L','A'].map((c, i) => (
              <span key={i} style={{
                marginLeft: i === 0 ? 0 : -10,
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold-soft), var(--gold-deep))',
                border: '2px solid var(--green-deep)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: 'var(--green-deep)'
              }}>{c}</span>
            ))}
          </div>
          <button style={{
            display: 'block', width: '100%',
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.02em',
            padding: '11px 20px', background: '#fff', color: 'var(--green-deep)',
            border: '1.5px solid var(--gold)', borderRadius: 100, cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0,0,0,0.12)', position: 'relative', zIndex: 2
          }}>Consultar agora →</button>
        </div>
      </div>

      <div style={fadasStyles.sidebarBox}>
        <div style={fadasStyles.sidebarLabel}>Tópicos do artigo</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tags.map(t => (
            <span key={t} style={fadasStyles.tag}>
              <span style={{ color: 'var(--gold-deep)', marginRight: 3 }}>#</span>{t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

// ────── 9. ActionBar — save + share row ──────
function ActionBar() {
  const [saved, setSaved] = useState(false);
  return (
    <div style={fadasStyles.actionBar}>
      <button onClick={() => setSaved(s => !s)} style={{
        ...fadasStyles.actionBtn,
        background: saved ? 'var(--red-light)' : 'var(--surface)',
        borderColor: saved ? 'var(--red)' : 'var(--border)',
        color: saved ? 'var(--red)' : 'var(--text-2)'
      }}>
        <FadasIcon name={saved ? 'bookmark-simple-fill' : 'bookmark-simple'} size={16} />
        {saved ? 'Salvo' : 'Salvar'}
      </button>
      <span style={fadasStyles.actionDiv}/>
      <span style={fadasStyles.actionLabel}>Compartilhar:</span>
      {['whatsapp','telegram','facebook','x','pinterest','email'].map(b => (
        <button key={b} className={`brand-item ${b}`} style={fadasStyles.actionShareBtn} aria-label={`Compartilhar no ${b}`}>
          <img src={`../../assets/brand/${b}.svg`} width="16" height="16" alt="" style={{ display: 'block' }}/>
        </button>
      ))}
    </div>
  );
}

// ────── 10. Reactions — 4 Fadas reactions ──────
function Reactions() {
  const [active, setActive] = useState(null);
  const reactions = [
    { id: 'amei',     emoji: '❤️', label: 'Amei',     count: 142 },
    { id: 'grata',    emoji: '🙏', label: 'Grata',    count: 89 },
    { id: 'iluminou', emoji: '💡', label: 'Iluminou', count: 56 },
    { id: 'ressoou',  emoji: '✨', label: 'Ressoou',  count: 71 }
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, margin: '40px 0' }}>
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-3)'
      }}>O que esse artigo trouxe pra você?</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {reactions.map(r => {
          const isActive = active === r.id;
          return (
            <button key={r.id} onClick={() => setActive(a => a === r.id ? null : r.id)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 14px',
              background: isActive
                ? 'linear-gradient(135deg, var(--red-light) 0%, var(--surface) 100%)'
                : 'var(--surface)',
              border: `1px solid ${isActive ? 'var(--red)' : 'var(--border)'}`,
              borderRadius: 100, cursor: 'pointer', fontFamily: 'var(--font-body)',
              transition: '0.2s ease'
            }}>
              <span style={{ fontSize: 16, lineHeight: 1 }}>{r.emoji}</span>
              <span style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                color: isActive ? 'var(--red)' : 'var(--text-2)'
              }}>{r.label}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-1)' }}>
                {r.count + (isActive ? 1 : 0)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ────── 11. BannerCTA — green-deep zone ──────
function BannerCTA() {
  return (
    <section style={fadasStyles.banner}>
      <div style={fadasStyles.bannerOrbA}></div>
      <div style={fadasStyles.bannerOrbB}></div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 540, margin: '0 auto' }}>
        <span style={fadasStyles.bannerStatus}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }}/>Online agora
        </span>
        <h2 style={fadasStyles.bannerTitle}>Sua consulta está esperando</h2>
        <p style={fadasStyles.bannerLead}>Tarólogas experientes prontas para te ouvir. A primeira mensagem é por nossa conta.</p>
        <button style={fadasStyles.bannerBtn}>Consultar agora →</button>
      </div>
    </section>
  );
}

// ────── 12. RelatedPosts ──────
function RelatedPosts({ posts }) {
  return (
    <section style={fadasStyles.related}>
      <div style={fadasStyles.dividerOrn}><span style={{ fontSize: 14 }}>✦</span></div>
      <h2 style={fadasStyles.relatedTitle}>Continue lendo</h2>
      <div style={fadasStyles.relatedGrid}>
        {posts.map(p => (
          <article key={p.title} style={fadasStyles.relatedCard}>
            <div style={fadasStyles.relatedPhoto}>
              <CategoryPill cls={p.cls}>{p.category}</CategoryPill>
            </div>
            <div style={{ padding: '18px 20px' }}>
              <h3 style={fadasStyles.cardTitle}>{p.title}</h3>
              <p style={fadasStyles.cardExcerpt}>{p.excerpt}</p>
              <div style={fadasStyles.cardMeta}>{p.read} min · {p.date}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ────── 13. Footer — 4 columns + ondas pattern ──────
function Footer() {
  return (
    <footer style={fadasStyles.footer}>
      <div style={fadasStyles.footerInner}>
        <div style={fadasStyles.footerCol}>
          <div style={fadasStyles.footerColTitle}>Fale com as Fadas<span style={fadasStyles.footerUnderline}/></div>
          <div style={fadasStyles.footerLine}>💬 Suporte via Chat</div>
          <div style={fadasStyles.footerLine}>📱 WhatsApp: (11) 91308-9469</div>
          <div style={fadasStyles.footerLine}>📞 (11) 2626-7145</div>
          <div style={fadasStyles.footerLine}>✉️ contato@fadasdobem.com.br</div>
        </div>
        <div style={fadasStyles.footerCol}>
          <div style={fadasStyles.footerColTitle}>Caminhos<span style={fadasStyles.footerUnderline}/></div>
          <a href="#" style={fadasStyles.footerLink}>Tarólogas</a>
          <a href="#" style={fadasStyles.footerLink}>Oráculos</a>
          <a href="#" style={fadasStyles.footerLink}>Tiragens</a>
          <a href="#" style={fadasStyles.footerLink}>Blog</a>
          <a href="#" style={fadasStyles.footerLink}>Avaliações</a>
        </div>
        <div style={fadasStyles.footerCol}>
          <div style={fadasStyles.footerColTitle}>Mapa do Fadas<span style={fadasStyles.footerUnderline}/></div>
          <a href="#" style={fadasStyles.footerLink}>Como se consultar</a>
          <a href="#" style={fadasStyles.footerLink}>Preços</a>
          <a href="#" style={fadasStyles.footerLink}>FAQ</a>
          <a href="#" style={fadasStyles.footerLink}>Privacidade</a>
          <a href="#" style={fadasStyles.footerLink}>Termos</a>
        </div>
        <div style={fadasStyles.footerCol}>
          <div style={fadasStyles.footerColTitle}>Nossas tarólogas<span style={fadasStyles.footerUnderline}/></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 36px)', gap: 8, marginBottom: 16 }}>
            {['F','M','L','A','C','R'].map((c, i) => (
              <span key={i} style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold-soft), var(--gold-deep))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                color: 'var(--green-deep)', position: 'relative'
              }}>{c}<span style={{
                position: 'absolute', bottom: 0, right: 0, width: 9, height: 9, borderRadius: '50%',
                background: 'var(--green)', border: '2px solid #383330'
              }}/></span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['whatsapp','instagram','youtube','tiktok','pinterest'].map(b => (
              <a key={b} href="#" className={`fb fb-${b}`} style={fadasStyles.footerSocial} aria-label={b}>
                <img src={`../../assets/brand/${b}.svg`} width="16" height="16" alt="" style={{ display: 'block', filter: 'brightness(0) invert(1) opacity(0.7)' }}/>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={fadasStyles.footerBottom}>
        <span style={{ color: 'var(--gold-deep)', fontSize: 12 }}>✦</span>
        <span>© 2026 Fadas do Bem · Feito com cuidado em São Paulo</span>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Style objects — keep them under a unique name (fadasStyles)
// ─────────────────────────────────────────────────────────────────────────
const fadasStyles = {
  // ── Topbar ──
  topbar: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'var(--bg)', borderBottom: '1px solid var(--border)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)'
  },
  topbarInner: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 68, maxWidth: 1180, margin: '0 auto', padding: '0 28px', gap: 20
  },
  topbarSide: { display: 'flex', alignItems: 'center', gap: 20 },
  topIcon: {
    width: 26, height: 26, padding: 0, background: 'transparent', border: 'none',
    cursor: 'pointer', flexShrink: 0, position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#7a6a5e', transition: 'color 0.2s ease'
  },
  topBadgeDot: {
    position: 'absolute', top: -1, right: -1,
    width: 8, height: 8, borderRadius: '50%',
    background: 'var(--red)', border: '1.5px solid var(--bg)'
  },
  topbarLogo: {
    textAlign: 'center', lineHeight: 1, flex: 1, padding: '0 10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  topbarLogoImg: { height: 48, width: 'auto', display: 'block' },

  // ── Drawer (v1 spec — white bg, auth buttons, grouped items, simple icon tint) ──
  drawerOverlay: {
    position: 'fixed', inset: 0, transition: 'background 0.3s', zIndex: 200
  },
  drawer: {
    position: 'fixed', top: 0, left: 0, bottom: 0, width: 320, maxWidth: '85vw',
    background: '#fff', transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
    display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 210,
    boxShadow: '6px 0 30px rgba(0,0,0,0.18)'
  },
  drawerHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px 22px 16px', borderBottom: '1px solid var(--border)'
  },
  drawerLogoImg: { height: 38, width: 'auto', display: 'block' },
  drawerClose: {
    cursor: 'pointer', padding: 6, background: 'transparent', border: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7a6a5e'
  },
  drawerAuth: {
    display: 'flex', gap: 10,
    padding: '16px 22px', borderBottom: '1px solid var(--border)'
  },
  drawerBtnLogin: {
    flex: 1, border: '1.5px solid var(--red)', color: 'var(--red)', background: 'transparent',
    borderRadius: 10, padding: '10px 0',
    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, cursor: 'pointer'
  },
  drawerBtnCad: {
    flex: 1, background: 'var(--red)', color: '#fff', border: 'none',
    borderRadius: 10, padding: '10px 0',
    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, cursor: 'pointer'
  },
  drawerScroll: { overflowY: 'auto', padding: '8px 0', flex: 1 },
  drawerDividerSoft: { height: 1, background: 'var(--border)', margin: '8px 22px' },
  drawerItem: {
    display: 'flex', alignItems: 'center', gap: 14,
    padding: '11px 22px',
    fontFamily: 'var(--font-editorial)', fontSize: 14, fontWeight: 600,
    color: 'var(--text-1)', cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s',
    textDecoration: 'none'
  },
  drawerFooter: { padding: '14px 22px', borderTop: '1px solid var(--border)' },
  drawerBrandSmall: {
    fontFamily: 'var(--font-body)', fontSize: 9, color: '#c0a898',
    textTransform: 'uppercase', letterSpacing: '0.1em'
  },

  hero: {
    maxWidth: 740, margin: '0 auto', padding: '40px 0 24px'
  },
  breadcrumb: {
    fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-3)',
    marginBottom: 16
  },
  h1: {
    fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 40px)',
    fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1,
    color: 'var(--text-1)', margin: '16px 0 24px'
  },
  heroMeta: {
    display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32
  },
  metaAuthor: {
    fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-2)'
  },
  metaSub: {
    fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-3)', marginTop: 2
  },
  heroFigure: { margin: '0 0 24px' },
  heroPhoto: {
    width: '100%', aspectRatio: '3 / 2', borderRadius: 16,
    background: `repeating-linear-gradient(45deg,
      rgba(229,36,68,0.07),
      rgba(229,36,68,0.07) 6px,
      var(--bg-alt) 6px,
      var(--bg-alt) 12px)`,
    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
  },
  photoLabel: {
    color: 'var(--red)', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.18em'
  },
  lead: {
    fontFamily: 'var(--font-editorial)', fontStyle: 'italic',
    fontSize: 'clamp(16px, 1.6vw, 18px)', color: 'var(--text-body)', lineHeight: 1.6,
    padding: '0 0 24px', margin: '0 0 12px',
    borderBottom: '1px solid var(--gold)'
  },

  audioPlayer: {
    padding: '18px 20px', margin: '0 0 36px',
    background: 'linear-gradient(135deg, var(--bg-alt) 0%, var(--surface) 100%)',
    border: '1px solid var(--gold-soft)', borderRadius: 16,
    display: 'flex', alignItems: 'center', gap: 16,
    position: 'relative', overflow: 'hidden'
  },
  audioOrb: {
    position: 'absolute', top: -30, right: -30, width: 120, height: 120,
    background: 'radial-gradient(circle, var(--gold-soft) 0%, transparent 65%)',
    opacity: 0.35, pointerEvents: 'none'
  },
  audioPlayBtn: {
    position: 'relative', flexShrink: 0, width: 48, height: 48, borderRadius: '50%',
    background: 'var(--red)', border: '1.5px solid var(--gold)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(229,36,68,0.22)'
  },
  audioLabel: {
    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-deep)', marginBottom: 4
  },
  audioMeta: {
    fontFamily: 'var(--font-editorial)', fontSize: 14, color: 'var(--text-2)', marginBottom: 8
  },
  audioTrack: {
    height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden'
  },
  audioFill: {
    height: '100%', background: 'linear-gradient(90deg, var(--gold-deep), var(--gold))', borderRadius: 2
  },
  audioSpeed: {
    position: 'relative', flexShrink: 0, fontFamily: 'var(--font-body)',
    fontSize: 12, fontWeight: 700, padding: '6px 12px',
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 6, color: 'var(--text-2)', minWidth: 44, cursor: 'pointer'
  },

  article: {
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.75, color: 'var(--text-body)'
  },
  pullQuote: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 26, fontWeight: 400,
    lineHeight: 1.35, color: 'var(--green-deep)', letterSpacing: '-0.005em', margin: 0
  },
  figurePhoto: {
    width: '100%', aspectRatio: '3 / 2', borderRadius: 16,
    background: `repeating-linear-gradient(45deg,
      rgba(135,193,0,0.06),
      rgba(135,193,0,0.06) 6px,
      var(--bg-alt) 6px,
      var(--bg-alt) 12px)`,
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  figureCaption: {
    margin: '14px 0 0', padding: '0 20px',
    fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 14,
    color: 'var(--text-3)', textAlign: 'center', lineHeight: 1.55
  },
  figureCaptionStrong: {
    fontWeight: 600, color: 'var(--text-2)', fontStyle: 'normal'
  },

  sidebar: {
    display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 88, alignSelf: 'start'
  },
  sidebarBox: {
    background: 'var(--surface)', border: '1px solid var(--border-soft)',
    borderRadius: 14, padding: 22, boxShadow: 'var(--shadow-sm)'
  },
  sidebarLabel: {
    fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-3)', marginBottom: 14
  },
  tocList: { listStyle: 'none', margin: 0, padding: 0 },
  tocItem: { display: 'block' },
  tocLink: {
    display: 'flex', alignItems: 'baseline', gap: 10, padding: '7px 0',
    fontFamily: 'var(--font-editorial)', fontSize: 14, color: 'var(--text-1)',
    textDecoration: 'none', lineHeight: 1.4, borderBottom: '1px solid var(--border-soft)'
  },
  tocNum: {
    fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gold-deep)', flexShrink: 0
  },
  tag: {
    display: 'inline-flex', alignItems: 'center', padding: '7px 11px',
    background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 6,
    fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-2)', fontWeight: 600,
    cursor: 'pointer'
  },

  actionBar: {
    display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
    padding: '16px 20px', margin: '32px 0',
    background: 'var(--bg-alt)', borderRadius: 14, border: '1px solid var(--border-soft)'
  },
  actionBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '7px 14px', background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 100, fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
    color: 'var(--text-2)', cursor: 'pointer', transition: '0.2s ease'
  },
  actionDiv: {
    width: 1, height: 22, background: 'var(--border)'
  },
  actionLabel: {
    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.12em', color: 'var(--text-3)'
  },
  actionShareBtn: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 32, height: 32, borderRadius: 8, padding: 0,
    background: 'var(--surface)', border: '1px solid var(--border)', cursor: 'pointer',
    transition: '0.2s ease'
  },

  banner: {
    position: 'relative', padding: '64px 32px',
    background: 'linear-gradient(135deg, #6a8a30 0%, #4a6b1e 50%, #34501a 100%)',
    color: '#fff', textAlign: 'center', overflow: 'hidden',
    margin: '48px -48px 0', borderRadius: 0
  },
  bannerOrbA: {
    position: 'absolute', top: -100, left: '5%', width: 320, height: 320, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)',
    pointerEvents: 'none'
  },
  bannerOrbB: {
    position: 'absolute', bottom: -160, right: '5%', width: 300, height: 300, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(227,204,126,0.15) 0%, transparent 65%)',
    pointerEvents: 'none'
  },
  bannerStatus: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '6px 14px', background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.3)', borderRadius: 100,
    fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, color: '#fff',
    textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 18,
    backdropFilter: 'blur(8px)'
  },
  bannerTitle: {
    fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 36px)', fontWeight: 700,
    color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 10px'
  },
  bannerLead: {
    fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 'clamp(15px, 1.4vw, 17px)',
    color: 'rgba(255,255,255,0.85)', margin: '0 0 28px'
  },
  bannerBtn: {
    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, letterSpacing: '0.02em',
    padding: '13px 28px', background: '#fff', color: 'var(--green-deep)',
    border: '1.5px solid var(--gold)', borderRadius: 100, cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
  },

  related: {
    padding: '64px 0 80px', maxWidth: 1100, margin: '0 auto'
  },
  dividerOrn: {
    display: 'flex', alignItems: 'center', gap: 12,
    color: 'var(--gold-deep)', margin: '0 auto 24px', maxWidth: 360, justifyContent: 'center'
  },
  relatedTitle: {
    fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700,
    color: 'var(--text-1)', textAlign: 'center', margin: '0 0 36px', letterSpacing: '-0.02em'
  },
  relatedGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24
  },
  relatedCard: {
    background: 'var(--surface)', border: '1px solid var(--border-soft)', borderRadius: 20,
    overflow: 'hidden', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', transition: '0.3s ease'
  },
  relatedPhoto: {
    aspectRatio: '16/10',
    background: `repeating-linear-gradient(45deg,
      rgba(229,36,68,0.07), rgba(229,36,68,0.07) 6px,
      var(--bg-alt) 6px, var(--bg-alt) 12px)`,
    position: 'relative', padding: 14
  },
  cardTitle: {
    fontFamily: 'var(--font-editorial)', fontSize: 17, fontWeight: 600, color: 'var(--text-1)',
    lineHeight: 1.3, margin: '0 0 6px'
  },
  cardExcerpt: {
    fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55,
    margin: '0 0 12px', display: '-webkit-box', WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical', overflow: 'hidden'
  },
  cardMeta: {
    fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-3)',
    paddingTop: 12, borderTop: '1px solid var(--border-soft)'
  },

  footer: {
    background: '#383330',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200' opacity='0.05'><path d='M0 50 Q200 20 400 50 T800 50' stroke='%23fdf4e6' stroke-width='0.8' fill='none'/><path d='M0 100 Q200 70 400 100 T800 100' stroke='%23fdf4e6' stroke-width='0.8' fill='none'/><path d='M0 150 Q200 120 400 150 T800 150' stroke='%23fdf4e6' stroke-width='0.8' fill='none'/></svg>")`,
    backgroundSize: '800px 200px',
    color: 'rgba(253,244,230,0.82)', padding: '56px 32px 32px'
  },
  footerInner: {
    maxWidth: 1100, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1.3fr 1fr 0.9fr 1fr', gap: 40
  },
  footerCol: { display: 'flex', flexDirection: 'column', gap: 6 },
  footerColTitle: {
    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.14em', color: 'var(--green)', paddingBottom: 12, marginBottom: 12,
    position: 'relative'
  },
  footerUnderline: {
    position: 'absolute', left: 0, bottom: 0, width: 32, height: 1,
    background: 'rgba(253,244,230,0.5)'
  },
  footerLine: {
    fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(253,244,230,0.82)',
    lineHeight: 1.9
  },
  footerLink: {
    fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(253,244,230,0.82)',
    textDecoration: 'none', lineHeight: 1.9, transition: 'color 0.2s ease'
  },
  footerSocial: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 32, height: 32, borderRadius: 8,
    background: 'rgba(253,244,230,0.06)', border: '1px solid rgba(253,244,230,0.12)',
    transition: '0.2s ease'
  },
  footerBottom: {
    maxWidth: 1100, margin: '40px auto 0', paddingTop: 24,
    borderTop: '1px solid rgba(253,244,230,0.12)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(253,244,230,0.55)'
  }
};

// ─────────────────────────────────────────────────────────────────────────
// Export to window so index.html can use them
// ─────────────────────────────────────────────────────────────────────────
Object.assign(window, {
  Header, Drawer, ArticleHero, CategoryPill, Avatar,
  AudioPlayer, ArticleBody, PullQuote, Figure,
  Sidebar, ActionBar, Reactions, BannerCTA, RelatedPosts, Footer,
  fadasStyles
});
