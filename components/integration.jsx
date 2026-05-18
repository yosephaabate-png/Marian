// Integration architecture page — Marian.school × AfroLMS (Open edX) integration playbook

const INTEGRATION_LAYERS = [
  { name: 'Marian.school', sub: 'Vercel frontend', caption: 'Your site',       color: '#2e8b57', bg: '#e8f5ed' },
  { name: 'API Gateway',   sub: 'JWT + OAuth2',     caption: 'Auth layer',     color: '#3b5bdb', bg: '#e7ebff' },
  { name: 'AfroLMS Core',  sub: 'Courses, grades, users', caption: 'LMS engine', color: '#7b3fbf', bg: '#efe6fb' },
  { name: 'External',      sub: 'TeleBirr · Jitsi', caption: 'Payments + video', color: '#c9962a', bg: '#fbf2dc' },
];

const INTEGRATION_METHODS = [
  {
    n: 1,
    title: 'AfroLMS REST API',
    titleSuffix: '— recommended starting point',
    difficulty: 'Easiest',
    diffColor: '#2e8b57',
    desc: "Your Vercel site calls AfroLMS's built-in Open edX REST API endpoints. Student login, course list, enrollment, quiz scores — all accessible via standard HTTP calls. No backend code needed on your side.",
    code: `GET  https://afrolms.yourdomain.com/api/courses/v1/courses/
POST https://afrolms.yourdomain.com/api/enrollment/v1/enrollment/
GET  https://afrolms.yourdomain.com/api/grades/v1/courses/{course_id}/`,
  },
  {
    n: 2,
    title: 'Single Sign-On (SSO) with JWT',
    difficulty: 'Easiest',
    diffColor: '#2e8b57',
    desc: 'Students sign up on your Marian.school Vercel site. When they click "Go to Course", they are silently logged into AfroLMS without typing a password again. Uses JWT tokens passed in the URL or cookie.',
    code: `1. Student logs in on marian-seven.vercel.app
2. Your site generates a JWT signed with shared secret
3. Redirect to: afrolms.yourdomain.com/auth/login/jwt/?token=XYZ
4. AfroLMS validates → student is in the LMS`,
    codeLang: 'flow',
  },
  {
    n: 3,
    title: 'AfroLMS MFE (Micro-Frontend) embed',
    difficulty: 'Medium',
    diffColor: '#c9962a',
    desc: "Embed AfroLMS's React micro-frontends directly inside your Vercel pages as iframes or components. The course player, dashboard, and quiz UI are already built — you just wrap them in your Marian.school design theme.",
    code: `<iframe src="https://apps.afrolms.com/learning/course/block-v1:Marian..."
        width="100%" height="600px" allow="fullscreen"></iframe>`,
  },
  {
    n: 4,
    title: 'Custom AfroLMS theme (Paragon override)',
    difficulty: 'Advanced',
    diffColor: '#b03a48',
    desc: "Replace AfroLMS's default UI entirely with your Marian.school green/gold design. Biniyam edits the Open edX Indigo theme CSS variables and React components. The LMS looks exactly like your Vercel site — same fonts, same colors, fully unified.",
    code: `lms.env.yml → ENABLE_COMPREHENSIVE_THEMING: true
themes/marian/ → lms/ → static/ → css/ → marian.css`,
  },
];

const CONNECTS_TABLE = [
  {
    feature: 'Sign Up',
    chips: [
      { t: 'AfroLMS Registration API', c: 'green' },
      { t: 'POST /api/user/v1/account/registration/', c: 'green' },
      { t: 'Store grade + school in custom fields', c: 'green' },
    ],
  },
  {
    feature: 'Login',
    chips: [
      { t: 'JWT SSO', c: 'gold' },
      { t: 'AfroLMS session cookie', c: 'gold' },
      { t: 'OAuth2 optional for Google login', c: 'gold' },
    ],
  },
  {
    feature: 'Courses',
    chips: [
      { t: 'GET /api/courses/v1/courses/', c: 'purple' },
      { t: 'Filter by grade level tag', c: 'purple' },
      { t: 'SCORM content served from AfroLMS S3', c: 'purple' },
    ],
  },
  {
    feature: 'Quizzes',
    chips: [
      { t: 'AfroLMS problem xBlock', c: 'blue' },
      { t: 'GET /api/grades/v1/', c: 'blue' },
      { t: 'Results sync to student dashboard', c: 'blue' },
    ],
  },
  {
    feature: 'Interactive tools',
    chips: [
      { t: 'HTML5 tools hosted on Vercel', c: 'pink' },
      { t: 'No AfroLMS needed — static files', c: 'pink' },
      { t: 'Progress saved via AfroLMS xAPI', c: 'pink' },
    ],
  },
  {
    feature: 'Tutor session',
    chips: [
      { t: 'Jitsi Meet embed (free)', c: 'rose' },
      { t: 'AfroLMS calendar via REST API', c: 'rose' },
      { t: 'Session recordings → AfroLMS S3', c: 'rose' },
    ],
  },
  {
    feature: 'Payment',
    chips: [
      { t: 'TeleBirr API → webhook', c: 'gold' },
      { t: 'Webhook triggers AfroLMS enrollment', c: 'gold' },
      { t: 'POST /api/enrollment/v1/enrollment/', c: 'gold' },
    ],
  },
];

const CHIP_COLORS = {
  green:  { bg: '#e8f5ed', fg: '#1f6b3a', bd: '#bfe1cc' },
  gold:   { bg: '#fbf2dc', fg: '#8a6a13', bd: '#ead9a3' },
  purple: { bg: '#efe6fb', fg: '#5e2caa', bd: '#d9c4f0' },
  blue:   { bg: '#e7ebff', fg: '#2a3e9a', bd: '#c7cff5' },
  pink:   { bg: '#fce8f0', fg: '#992c5e', bd: '#f0c5d6' },
  rose:   { bg: '#fbeae0', fg: '#9a4d1c', bd: '#f0cdb5' },
};

const ACTION_STEPS = [
  { n: 1, title: 'Enable AfroLMS API + CORS',     desc: 'Allow marian-seven.vercel.app to call AfroLMS endpoints. Biniyam sets CORS headers in lms.env.yml' },
  { n: 2, title: 'Wire up JWT SSO',               desc: 'Single login across Vercel site and AfroLMS. Student signs up once, accesses both seamlessly' },
  { n: 3, title: 'TeleBirr → auto-enroll',        desc: 'Payment confirmed → webhook fires → AfroLMS enrollment API called → student gets access' },
  { n: 4, title: 'Embed course player',           desc: 'AfroLMS LMS unit plays inside your Vercel page. Students never leave Marian.school visually' },
  { n: 5, title: 'Apply Marian theme',            desc: 'Make AfroLMS look identical to your Vercel site — same green, gold, fonts everywhere' },
  { n: 6, title: 'Add Jitsi tutor rooms',         desc: 'Free video sessions embedded in Marian.school. Works well on Ethiopian internet bandwidth' },
];

// --- small subcomponents ---

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: BRAND.muted,
      letterSpacing: 1.6, marginBottom: 18,
      paddingBottom: 14, borderBottom: `1px solid ${BRAND.border}`,
    }}>{children}</div>
  );
}

function DifficultyBadge({ label, color }) {
  return (
    <span style={{
      display: 'inline-block',
      background: `${color}18`, color: color, border: `1px solid ${color}55`,
      padding: '2px 10px', borderRadius: 99,
      fontSize: 10, fontWeight: 800, letterSpacing: 0.5,
    }}>{label}</span>
  );
}

function CodeBlock({ children }) {
  return (
    <pre style={{
      background: '#f3f4ef',
      border: `1px solid ${BRAND.border}`,
      borderRadius: 8,
      padding: '12px 14px',
      fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
      fontSize: 12, lineHeight: 1.65,
      color: BRAND.dark,
      overflowX: 'auto',
      margin: 0,
      whiteSpace: 'pre',
    }}>{children}</pre>
  );
}

function Chip({ text, color }) {
  const c = CHIP_COLORS[color] || CHIP_COLORS.green;
  return (
    <span style={{
      display: 'inline-block',
      background: c.bg, color: c.fg, border: `1px solid ${c.bd}`,
      padding: '5px 12px', borderRadius: 99,
      fontSize: 12, fontWeight: 600,
      lineHeight: 1.3,
    }}>{text}</span>
  );
}

// --- main page ---

function IntegrationPage({ navigate }) {
  return (
    <div style={{ background: '#fbfaf6', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text }}>
      {/* Top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: '#ffffffee', backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${BRAND.border}`,
        padding: '14px 36px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <BrandMark size={32} glow />
          <div>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 16, fontWeight: 700, lineHeight: 1 }}>
              <span style={{ color: BRAND.dark }}>My</span><span style={{ color: BRAND.gold }}>Marian</span>
              <span style={{ color: BRAND.muted, fontWeight: 500, fontSize: 13, marginLeft: 6 }}>· Integration Playbook</span>
            </div>
            <div style={{ fontSize: 9, color: BRAND.muted, fontWeight: 600, letterSpacing: 1, marginTop: 2 }}>MARIAN.SCHOOL × AFROLMS (OPEN edX)</div>
          </div>
        </div>
        <button
          onClick={() => navigate('landing')}
          style={{
            background: 'none', border: `1px solid ${BRAND.border}`,
            color: BRAND.dark, padding: '7px 14px', borderRadius: 8,
            fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          }}
        >← Back to site</button>
      </div>

      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '36px 36px 80px' }}>

        {/* ====== 1. INTEGRATION OVERVIEW — 4 LAYERS ====== */}
        <section style={{ marginBottom: 48 }}>
          <SectionLabel>INTEGRATION OVERVIEW — 4 LAYERS</SectionLabel>

          <div style={{
            display: 'flex', alignItems: 'stretch', gap: 0,
            flexWrap: 'wrap',
          }}>
            {INTEGRATION_LAYERS.map((layer, i) => (
              <React.Fragment key={layer.name}>
                <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
                  <div style={{
                    background: layer.bg,
                    border: `1px solid ${layer.color}55`,
                    borderRadius: 10,
                    padding: '18px 14px',
                    width: '100%',
                    textAlign: 'center',
                    minHeight: 86,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  }}>
                    <div style={{ fontWeight: 800, fontSize: 14, color: layer.color, marginBottom: 4 }}>{layer.name}</div>
                    <div style={{ fontSize: 11, color: '#5a5a5a', lineHeight: 1.4 }}>{layer.sub}</div>
                  </div>
                  <div style={{ fontSize: 11, color: BRAND.muted, marginTop: 10, fontWeight: 500 }}>{layer.caption}</div>
                </div>
                {i < INTEGRATION_LAYERS.length - 1 && (
                  <div style={{
                    flex: '0 0 36px',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    paddingTop: 36,
                    color: BRAND.muted,
                    fontSize: 18,
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute', top: 16,
                      fontSize: 9, color: BRAND.muted, fontWeight: 700, letterSpacing: 0.5,
                    }}>{i === 0 ? 'API' : ''}</span>
                    ▶
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ====== 2. CHOOSE INTEGRATION METHOD ====== */}
        <section style={{ marginBottom: 48 }}>
          <SectionLabel>CHOOSE YOUR INTEGRATION METHOD</SectionLabel>

          <div style={{
            background: '#fff',
            border: `1px solid ${BRAND.border}`,
            borderRadius: 14,
            padding: '8px 0',
          }}>
            {INTEGRATION_METHODS.map((m, i) => (
              <div key={m.n} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: 16,
                padding: '22px 28px',
                borderBottom: i < INTEGRATION_METHODS.length - 1 ? `1px solid ${BRAND.border}` : 'none',
              }}>
                {/* Number circle */}
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#f3f4ef',
                  border: `1px solid ${BRAND.border}`,
                  color: BRAND.dark,
                  fontWeight: 800, fontSize: 13,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>{m.n}</div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: BRAND.dark }}>
                      {m.title}{m.titleSuffix && <span style={{ fontWeight: 500, color: BRAND.muted }}> {m.titleSuffix}</span>}
                    </span>
                    <DifficultyBadge label={m.difficulty} color={m.diffColor} />
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: '#444', margin: '0 0 12px', maxWidth: 800 }}>
                    {m.desc}
                  </p>
                  <CodeBlock>{m.code}</CodeBlock>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== 3. WHAT EACH BUTTON CONNECTS TO ====== */}
        <section style={{ marginBottom: 48 }}>
          <SectionLabel>WHAT EACH BUTTON/FEATURE ON YOUR SITE CONNECTS TO</SectionLabel>

          <div style={{
            background: '#fff',
            border: `1px solid ${BRAND.border}`,
            borderRadius: 14,
            overflow: 'hidden',
          }}>
            {CONNECTS_TABLE.map((row, i) => (
              <div key={row.feature} style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: 18,
                padding: '16px 24px',
                alignItems: 'center',
                borderBottom: i < CONNECTS_TABLE.length - 1 ? `1px solid ${BRAND.border}` : 'none',
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.dark }}>
                  {row.feature}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {row.chips.map((c, j) => <Chip key={j} text={c.t} color={c.c} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== 4. ACTION SEQUENCE ====== */}
        <section>
          <SectionLabel>RECOMMENDED ACTION SEQUENCE FOR YOUR TEAM</SectionLabel>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 14,
          }}>
            {ACTION_STEPS.map(step => (
              <div key={step.n} style={{
                background: '#fff',
                border: `1px solid ${BRAND.border}`,
                borderRadius: 12,
                padding: '18px 18px 20px',
              }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: BRAND.muted,
                  letterSpacing: 0.8, marginBottom: 8,
                }}>Step {step.n}</div>
                <h4 style={{
                  margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: BRAND.dark,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}>{step.title}</h4>
                <p style={{
                  margin: 0, fontSize: 12.5, lineHeight: 1.6, color: '#555',
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

Object.assign(window, { IntegrationPage });
