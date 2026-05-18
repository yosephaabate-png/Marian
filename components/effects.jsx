// Alive animation primitives — counters, scroll reveal, floating gradients, Google button, Lenis hook.

// Lenis smooth scroll attaches to a scrolling container.
function useLenis(targetRef) {
  React.useEffect(() => {
    if (!window.Lenis) return;
    const wrapper = targetRef?.current;
    if (!wrapper) return;
    const lenis = new window.Lenis({
      wrapper,
      content: wrapper.firstElementChild || wrapper,
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    let raf;
    function loop(t) { lenis.raf(t); raf = requestAnimationFrame(loop); }
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, [targetRef]);
}

// Animated counter — parses prefix/suffix and a number; counts up when scrolled into view.
function AnimatedCounter({ value, duration = 1600, style, decimals = 0, suffix = '', prefix = '' }) {
  const ref = React.useRef(null);
  const [display, setDisplay] = React.useState(0);
  const startedRef = React.useRef(false);

  // Parse value if it's a string like "12,000+" or "85+"
  const parsed = React.useMemo(() => {
    if (typeof value === 'number') return { num: value, pre: prefix, post: suffix };
    const s = String(value);
    const m = s.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!m) return { num: 0, pre: prefix, post: suffix };
    return {
      num: parseFloat(m[2].replace(/,/g, '')),
      pre: prefix || m[1] || '',
      post: suffix || m[3] || '',
    };
  }, [value, prefix, suffix]);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(parsed.num * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(parsed.num);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [parsed.num, duration]);

  const formatted = React.useMemo(() => {
    const n = decimals ? display.toFixed(decimals) : Math.round(display);
    return Number(n).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }, [display, decimals]);

  return (
    <span ref={ref} style={style}>
      {parsed.pre}{formatted}{parsed.post}
    </span>
  );
}

// Scroll reveal wrapper — applies .is-in class when intersecting.
function Reveal({ children, delay = 0, as: Tag = 'div', style, className = '' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('is-in'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <Tag ref={ref} className={`mm-reveal ${className}`} style={style}>{children}</Tag>;
}

// Floating gradient blob — softly animated, absolutely positioned.
function FloatingGradient({ color = '#D4AF37', size = 380, top, left, right, bottom, opacity = 0.18, speed = 14, blur = 80 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top, left, right, bottom,
        width: size, height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
        opacity,
        filter: `blur(${blur}px)`,
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: `mm-float ${speed}s ease-in-out infinite`,
      }}
    />
  );
}

// Tilt-on-mouse card wrapper (subtle, no library).
function TiltCard({ children, max = 6, style, className = '' }) {
  const ref = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`;
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`mm-tilt ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
    >
      {children}
    </div>
  );
}

// Google sign-in button — visual, single-click "sign in" used in this prototype.
function GoogleSignInButton({ onClick, label = 'Continue with Google', style }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        padding: '12px 18px',
        background: hov ? '#f9fafb' : '#fff',
        border: `1.5px solid ${hov ? '#d1d5db' : BRAND.border}`,
        borderRadius: 10,
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 600, fontSize: 14, color: '#1f2937',
        cursor: 'pointer',
        boxShadow: hov ? '0 4px 14px rgba(0,0,0,0.08)' : '0 1px 2px rgba(0,0,0,0.04)',
        transition: 'all 0.2s ease',
        transform: hov ? 'translateY(-1px)' : 'translateY(0)',
        ...style,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34 6.5 29.3 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.8 0 19.5-8.7 19.5-19.5 0-1.3-.1-2.3-.4-3.5z"/>
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3l5.7-5.7C34 6.5 29.3 4.5 24 4.5c-7.6 0-14.2 4.3-17.7 10.2z"/>
        <path fill="#4CAF50" d="M24 43.5c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.7 39.1 16.2 43.5 24 43.5z"/>
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2c-.4.4 6.6-4.8 6.6-14.9 0-1.3-.1-2.3-.4-3.5z"/>
      </svg>
      <span>{label}</span>
    </button>
  );
}

// Plan demo modal — picks a demo plan and goes to dashboard.
function DemoModal({ onClose, onChoose }) {
  const plans = [
    {
      id: 'free', name: 'Free', nameAm: 'ነጻ', price: 0,
      color: BRAND.muted, accent: '#f3f4f6',
      tagline: '3 subjects, basics only',
      perks: ['3 subjects', 'Video lessons', 'Interactive tools'],
    },
    {
      id: 'standard', name: 'Standard', nameAm: 'መደበኛ', price: 1200,
      color: BRAND.primary, accent: '#0d5c3a14',
      tagline: 'Most-popular plan, all subjects',
      perks: ['All 8 subjects', 'Quizzes & certificates', 'Recordings library'],
      popular: true,
    },
    {
      id: 'premium', name: 'Premium', nameAm: 'ፕሪሚየም', price: 1700,
      color: BRAND.gold, accent: '#D4AF3722',
      tagline: 'Live tutors + 1-on-1 sessions',
      perks: ['Everything in Standard', 'Live tutor sessions', '1-on-1 booking'],
    },
  ];

  return (
    <div className="mm-modal-backdrop" onClick={onClose}>
      <div className="mm-modal" onClick={e => e.stopPropagation()} style={{ padding: '32px 32px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.4 }}>TRY MYMARIAN · ሞክሩት</div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 28, margin: '6px 0 4px', color: BRAND.dark, fontWeight: 700 }}>Demo any plan, instantly</h2>
            <p style={{ color: BRAND.muted, fontSize: 14, margin: 0 }}>No signup. Pick a plan and we'll drop you in the dashboard with seeded data.</p>
          </div>
          <button onClick={onClose} aria-label="Close" style={{
            background: 'none', border: 'none', fontSize: 24, color: BRAND.muted, cursor: 'pointer',
            lineHeight: 1, padding: 4,
          }}>×</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 22 }}>
          {plans.map(p => (
            <button
              key={p.id}
              onClick={() => onChoose(p.id)}
              className="mm-card-lift"
              style={{
                textAlign: 'left',
                background: p.accent,
                border: `2px solid ${p.popular ? p.color : 'transparent'}`,
                borderRadius: 14, padding: '20px 18px',
                cursor: 'pointer', fontFamily: 'inherit',
                position: 'relative',
              }}
            >
              {p.popular && (
                <div style={{
                  position: 'absolute', top: -10, right: 12,
                  background: p.color, color: '#fff', fontSize: 9, fontWeight: 800,
                  padding: '3px 9px', borderRadius: 99, letterSpacing: 0.6,
                }}>POPULAR</div>
              )}
              <div style={{ fontSize: 12, fontWeight: 800, color: p.color, letterSpacing: 0.4 }}>{p.name.toUpperCase()} · {p.nameAm}</div>
              <div style={{ marginTop: 8, marginBottom: 8 }}>
                {p.price === 0 ? (
                  <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 28, fontWeight: 800, color: BRAND.dark }}>ነጻ</span>
                ) : (
                  <>
                    <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 28, fontWeight: 800, color: BRAND.dark }}>{p.price}</span>
                    <span style={{ fontSize: 11, color: BRAND.muted, marginLeft: 4 }}>ብር/mo</span>
                  </>
                )}
              </div>
              <div style={{ fontSize: 12, color: BRAND.muted, marginBottom: 12, lineHeight: 1.4 }}>{p.tagline}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {p.perks.map(perk => (
                  <div key={perk} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', fontSize: 12, color: BRAND.text }}>
                    <span style={{ color: p.color, flexShrink: 0 }}>✓</span>{perk}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 14, padding: '8px 0', textAlign: 'center',
                background: p.color, color: p.id === 'premium' ? BRAND.dark : '#fff',
                borderRadius: 7, fontSize: 12, fontWeight: 700,
              }}>Try {p.name} Demo →</div>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 18, fontSize: 11, color: BRAND.muted, textAlign: 'center' }}>
          Demos use seeded sample data. Sign up to save your real progress.
        </div>
      </div>
    </div>
  );
}

// Sign-in gate — shown when an unauthenticated user tries to enter the dashboard.
function SignInGate({ onGoogle, onSignup }) {
  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: `linear-gradient(135deg, ${BRAND.dark} 0%, ${BRAND.night} 100%)`,
      padding: 24, position: 'relative', overflow: 'hidden',
    }}>
      <FloatingGradient color={BRAND.gold} top="-10%" left="-10%" size={500} opacity={0.18} />
      <FloatingGradient color={BRAND.primary} bottom="-12%" right="-8%" size={600} opacity={0.25} speed={18} />
      <EthiopianPattern opacity={0.04} color={BRAND.gold} />
      <div style={{
        position: 'relative', zIndex: 1,
        background: '#fff', borderRadius: 18, padding: '40px 36px',
        maxWidth: 420, width: '100%',
        boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
        animation: 'mm-pop-in 0.5s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <BrandMark size={44} glow />
          <div>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 19, fontWeight: 700 }}>
              <span style={{ color: BRAND.dark }}>My</span><span style={{ color: BRAND.gold }}>Marian</span>
            </div>
            <div style={{ fontSize: 10, color: BRAND.muted, fontWeight: 600, letterSpacing: 0.8 }}>SIGN IN TO CONTINUE</div>
          </div>
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 24, margin: '0 0 6px', color: BRAND.dark }}>Welcome back</h1>
        <p style={{ color: BRAND.muted, fontSize: 13.5, margin: '0 0 22px', lineHeight: 1.5 }}>
          Sign in with Google to access your dashboard, courses, and tutor sessions.
        </p>

        <GoogleSignInButton onClick={onGoogle} label="Sign in with Google" />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '18px 0 14px' }}>
          <div style={{ flex: 1, height: 1, background: BRAND.border }} />
          <span style={{ fontSize: 11, color: BRAND.muted, fontWeight: 600 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: BRAND.border }} />
        </div>

        <button
          onClick={onSignup}
          style={{
            width: '100%', padding: '12px 18px',
            background: BRAND.primary, color: '#fff', border: 'none',
            borderRadius: 10, fontFamily: 'inherit', fontWeight: 700, fontSize: 14,
            cursor: 'pointer',
          }}
        >
          Create an account
        </button>

        <p style={{ fontSize: 11, color: BRAND.muted, marginTop: 16, textAlign: 'center', lineHeight: 1.5 }}>
          By continuing you agree to MyMarian's Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

Object.assign(window, {
  useLenis, AnimatedCounter, Reveal, FloatingGradient, TiltCard,
  GoogleSignInButton, DemoModal, SignInGate,
});
