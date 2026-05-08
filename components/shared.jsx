// Shared constants, colors, patterns, and small UI components for MyMarian

const BRAND = {
  primary: '#0d5c3a',
  dark: '#1a3a2a',
  gold: '#D4AF37',
  cream: '#FDF8E7',
  surface: '#ffffff',
  night: '#071f14',
  text: '#1a1a1a',
  muted: '#6b7280',
  border: '#e5e7eb',
};

// Ethiopian cross SVG pattern (Lalibela motif at low opacity)
const EthiopianPattern = ({ opacity = 0.06, color = BRAND.gold }) => (
  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true">
    <defs>
      <pattern id="ethio-cross" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        {/* Lalibela cross motif */}
        <rect x="24" y="10" width="12" height="40" fill={color} opacity={opacity} rx="1" />
        <rect x="10" y="24" width="40" height="12" fill={color} opacity={opacity} rx="1" />
        <rect x="20" y="20" width="4" height="4" fill={color} opacity={opacity * 1.5} />
        <rect x="36" y="20" width="4" height="4" fill={color} opacity={opacity * 1.5} />
        <rect x="20" y="36" width="4" height="4" fill={color} opacity={opacity * 1.5} />
        <rect x="36" y="36" width="4" height="4" fill={color} opacity={opacity * 1.5} />
        <rect x="27" y="17" width="6" height="6" fill={color} opacity={opacity * 2} />
        <rect x="27" y="37" width="6" height="6" fill={color} opacity={opacity * 2} />
        <rect x="17" y="27" width="6" height="6" fill={color} opacity={opacity * 2} />
        <rect x="37" y="27" width="6" height="6" fill={color} opacity={opacity * 2} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ethio-cross)" />
  </svg>
);

// Tilet textile pattern
const TiletPattern = ({ opacity = 0.05, color = BRAND.primary }) => (
  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true">
    <defs>
      <pattern id="tilet" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="40" y2="40" stroke={color} strokeWidth="1" opacity={opacity} />
        <line x1="40" y1="0" x2="0" y2="40" stroke={color} strokeWidth="1" opacity={opacity} />
        <line x1="20" y1="0" x2="20" y2="40" stroke={color} strokeWidth="0.5" opacity={opacity * 0.7} />
        <line x1="0" y1="20" x2="40" y2="20" stroke={color} strokeWidth="0.5" opacity={opacity * 0.7} />
        <circle cx="20" cy="20" r="3" fill={color} opacity={opacity * 1.5} />
        <circle cx="0" cy="0" r="2" fill={color} opacity={opacity} />
        <circle cx="40" cy="40" r="2" fill={color} opacity={opacity} />
        <circle cx="40" cy="0" r="2" fill={color} opacity={opacity} />
        <circle cx="0" cy="40" r="2" fill={color} opacity={opacity} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#tilet)" />
  </svg>
);

// Section divider with pattern
const PatternDivider = ({ dark = false }) => (
  <div style={{
    position: 'relative',
    height: 8,
    background: dark ? BRAND.dark : BRAND.primary,
    overflow: 'hidden',
  }}>
    <EthiopianPattern opacity={0.15} color={BRAND.gold} />
  </div>
);

// Grade badge
const GradeBadge = ({ grade, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px 20px',
      borderRadius: 6,
      border: active ? 'none' : `1.5px solid ${BRAND.border}`,
      background: active ? BRAND.primary : BRAND.surface,
      color: active ? '#fff' : BRAND.muted,
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      transition: 'all 0.18s',
      boxShadow: active ? `0 2px 12px ${BRAND.primary}40` : 'none',
    }}
  >
    Grade {grade}
  </button>
);

// Subject color map
const SUBJECT_COLORS = {
  Mathematics: '#1e6fa3',
  Physics: '#7b3fa0',
  Biology: '#2e8b57',
  Chemistry: '#c0392b',
  English: '#d4821a',
  History: '#8b6914',
  Amharic: '#0d5c3a',
  Geography: '#1a7a6e',
  Economics: '#b8860b',
};

// Progress bar
const ProgressBar = ({ value, max = 100, color = BRAND.primary, height = 7 }) => (
  <div style={{ background: '#e5e7eb', borderRadius: 99, height, overflow: 'hidden' }}>
    <div style={{
      width: `${(value / max) * 100}%`,
      height: '100%',
      background: color,
      borderRadius: 99,
      transition: 'width 0.5s ease',
    }} />
  </div>
);

// Avatar placeholder
const Avatar = ({ name, size = 36, bg = BRAND.primary }) => {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontWeight: 700, fontSize: size * 0.35,
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
};

// Star rating
const Stars = ({ rating = 4.5 }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= Math.round(rating) ? BRAND.gold : '#d1d5db', fontSize: 13 }}>★</span>
    );
  }
  return <span>{stars} <span style={{ fontSize: 12, color: BRAND.muted, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{rating}</span></span>;
};

// Gold CTA button
const CTAButton = ({ children, onClick, style = {}, variant = 'gold', small = false }) => {
  const variants = {
    gold: { background: BRAND.gold, color: BRAND.dark, border: 'none' },
    primary: { background: BRAND.primary, color: '#fff', border: 'none' },
    outline: { background: 'transparent', color: BRAND.primary, border: `1.5px solid ${BRAND.primary}` },
    ghost: { background: 'transparent', color: BRAND.muted, border: `1.5px solid ${BRAND.border}` },
  };
  return (
    <button
      onClick={onClick}
      style={{
        ...variants[variant],
        padding: small ? '7px 16px' : '11px 24px',
        borderRadius: 7,
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 700,
        fontSize: small ? 13 : 15,
        cursor: 'pointer',
        transition: 'all 0.15s',
        letterSpacing: 0.2,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

// Card container
const Card = ({ children, style = {}, hover = true }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: BRAND.surface,
        borderRadius: 12,
        border: `1px solid ${BRAND.border}`,
        boxShadow: hov ? '0 8px 32px rgba(13,92,58,0.13)' : '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Sidebar nav item
const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 18px',
      borderRadius: 8,
      border: 'none',
      background: active ? `${BRAND.primary}18` : 'transparent',
      color: active ? BRAND.primary : BRAND.muted,
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontWeight: active ? 700 : 500,
      fontSize: 14.5,
      cursor: 'pointer',
      width: '100%',
      textAlign: 'left',
      transition: 'all 0.15s',
      borderLeft: active ? `3px solid ${BRAND.primary}` : '3px solid transparent',
    }}
  >
    <span style={{ fontSize: 18, width: 22, textAlign: 'center' }}>{icon}</span>
    {label}
  </button>
);

// Export everything
Object.assign(window, {
  BRAND, EthiopianPattern, TiletPattern, PatternDivider,
  GradeBadge, SUBJECT_COLORS, ProgressBar, Avatar, Stars,
  CTAButton, Card, NavItem,
});
