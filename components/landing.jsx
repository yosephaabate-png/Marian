// Landing page — public marketing homepage for MyMarian

const STATS = [
  { num: '12,000+', label: 'Active students', labelAm: 'ንቁ ተማሪዎች' },
  { num: '450+', label: 'Video lessons', labelAm: 'የቪዲዮ ትምህርቶች' },
  { num: '85+', label: 'Expert tutors', labelAm: 'የተማሪ መምህራን' },
  { num: '8', label: 'Subjects', labelAm: 'ዓይነቶች' },
];

const FEATURES = [
  {
    icon: '🎥',
    title: 'Video Lessons & SCORM',
    titleAm: 'የቪዲዮ ትምህርቶች',
    desc: 'Watch curriculum-aligned video lessons from Ethiopia\'s best teachers. Interactive SCORM activities reinforce every concept.',
  },
  {
    icon: '🔬',
    title: 'Interactive Tools',
    titleAm: 'መሣሪያዎች',
    desc: 'Cell explorers, function graphers, circuit builders, and 3D molecule viewers — learn by doing, not just watching.',
  },
  {
    icon: '👨🏾‍🏫',
    title: 'Live Tutor Sessions',
    titleAm: 'የቀጥታ ክፍል',
    desc: 'Join live group classes with expert tutors, or book 1-on-1 sessions for personalised help. All sessions recorded.',
  },
  {
    icon: '📋',
    title: 'Quizzes & Assessments',
    titleAm: 'ፈተናዎች',
    desc: 'Test your knowledge with auto-graded quizzes. Get instant feedback and detailed explanations on every answer.',
  },
  {
    icon: '📱',
    title: 'Pay with TeleBirr',
    titleAm: 'በቴሌብር ይክፈሉ',
    desc: 'Subscribe with TeleBirr, CBE Birr, Amole, or buy a voucher at any agent. No credit card required.',
  },
  {
    icon: '🏆',
    title: 'Certificates',
    titleAm: 'የምስክር ወረቀት',
    desc: 'Earn verified certificates of completion for every course. Build your academic portfolio for university applications.',
  },
];

const SUBJECTS_LANDING = [
  { name: 'Mathematics', nameAm: 'ሒሳብ', icon: '📐', color: SUBJECT_COLORS.Mathematics },
  { name: 'Physics', nameAm: 'ፊዚክስ', icon: '⚛️', color: SUBJECT_COLORS.Physics },
  { name: 'Biology', nameAm: 'ባዮሎጂ', icon: '🧬', color: SUBJECT_COLORS.Biology },
  { name: 'Chemistry', nameAm: 'ኬሚስትሪ', icon: '⚗️', color: SUBJECT_COLORS.Chemistry },
  { name: 'English', nameAm: 'እንግሊዘኛ', icon: '📚', color: SUBJECT_COLORS.English },
  { name: 'Economics', nameAm: 'ኢኮኖሚክስ', icon: '💹', color: SUBJECT_COLORS.Economics },
  { name: 'History', nameAm: 'ታሪክ', icon: '📜', color: SUBJECT_COLORS.History },
  { name: 'Geography', nameAm: 'ጂኦግራፊ', icon: '🌍', color: SUBJECT_COLORS.Geography },
];

const TESTIMONIALS = [
  {
    name: 'Bethel Mekonnen',
    role: 'Grade 12 Student, Addis Ababa',
    text: 'I improved my Biology score from 68% to 91% in one term. The live tutor sessions with Dr. Hiwot are amazing — she explains everything in both Amharic and English.',
    rating: 5,
  },
  {
    name: 'Daniel Worku',
    role: 'Grade 10 Student, Bahir Dar',
    text: 'My family pays with TeleBirr every month — so easy. I love the interactive tools, especially the circuit builder for Physics. Better than any textbook.',
    rating: 5,
  },
  {
    name: 'Ato Tewodros Ayele',
    role: 'Parent, Hawassa',
    text: 'My daughter studies after school using MyMarian. The recordings let her review lessons she missed. Worth every birr we pay.',
    rating: 5,
  },
];

const FAQ = [
  {
    q: 'How much does MyMarian cost?',
    a: 'We offer three plans: Free (3 subjects, basic features), Standard at 299 ብር/month (all subjects, certificates), and Premium at 549 ብር/month (everything plus live tutor sessions and 1-on-1 booking).',
  },
  {
    q: 'Can I pay with TeleBirr?',
    a: 'Yes! TeleBirr is our primary payment method. You can also pay with CBE Birr, Amole (Dashen Bank), or buy a voucher from any MyMarian agent location and pay in cash.',
  },
  {
    q: 'Is the curriculum aligned with the Ethiopian Ministry of Education?',
    a: 'Absolutely. All our content for Grades 9–12 follows the official Ethiopian secondary curriculum. Our tutors are certified Ethiopian teachers.',
  },
  {
    q: 'Can I learn in Amharic?',
    a: 'Yes. Many lessons are taught bilingually (Amharic + English), and our Amharic language course is fully in Amharic. The platform interface supports both languages.',
  },
  {
    q: 'What if I miss a live class?',
    a: 'Every live tutor session is recorded and available in your library within 24 hours. You can replay it as many times as you need.',
  },
];

const INTERACTIVE_TOOLS = [
  {
    id: 'neuron',
    name: '3D Neuron Explorer',
    nameAm: 'የነርቭ ሕዋስ',
    subject: 'Biology',
    grade: 'Grade 11 · Unit 5',
    color: '#7B1FA2',
    tagline: 'Rotate a myelinated motor neuron in real 3D and click any part to learn its function.',
    file: 'tools/neuron-3d-explorer.html',
    accent: 'rgba(123,31,162,0.10)',
    canvasBg: '#0d5c3a',
    cropCanvas: (doc, win) => {
      doc.querySelectorAll('h1,.sub,.right,.ptabs,.cv-hint').forEach(e => e.style.display = 'none');
      doc.documentElement.style.height = '100%';
      doc.body.style.cssText += ';height:100vh;margin:0;background:#0d5c3a;overflow:hidden;';
      const left = doc.querySelector('.left'); if (left) { left.style.cssText += ';padding:0;background:#0d5c3a;height:100%;flex:1 1 auto;'; }
      const wrap = doc.querySelector('.wrap'); if (wrap) { wrap.style.cssText += ';min-height:0;gap:0;height:100%;'; }
      const c = doc.getElementById('nc'); if (c) { c.style.cssText += ';height:100%;border-radius:0;background:#0d5c3a;'; }
      win.dispatchEvent(new Event('resize'));
      setTimeout(() => win.dispatchEvent(new Event('resize')), 300);
      setTimeout(() => win.dispatchEvent(new Event('resize')), 1000);
    },
  },
  {
    id: 'bacteria',
    name: 'Bacteria Cell Explorer',
    nameAm: 'ባክቴሪያ ሕዋስ',
    subject: 'Biology',
    grade: 'Grade 12 · Unit 2',
    color: '#311B92',
    tagline: 'Animated 3D Gram-negative bacterium with live flagellum rotation and antibiotic targets.',
    file: 'tools/bacteria-cell-explorer.html',
    accent: 'rgba(49,27,146,0.10)',
    canvasBg: '#0d5c3a',
    cropCanvas: (doc, win) => {
      doc.querySelectorAll('header,.info-col,.hint').forEach(e => e.style.display = 'none');
      doc.documentElement.style.height = '100%';
      doc.body.style.cssText += ';height:100vh;margin:0;background:#0d5c3a;overflow:hidden;';
      const app = doc.querySelector('.app'); if (app) { app.style.cssText += ';height:100vh;background:#0d5c3a;'; }
      const m = doc.querySelector('.main'); if (m) { m.style.cssText += ';grid-template-columns:1fr;min-height:0;height:100%;display:block;'; }
      const cc = doc.querySelector('.canvas-col'); if (cc) { cc.style.cssText += ';border-right:none;padding:0;background:#0d5c3a;height:100%;display:block;'; }
      const h2 = doc.querySelector('.canvas-col h2'); if (h2) h2.style.display = 'none';
      const c = doc.getElementById('myCanvas'); if (c) { c.style.cssText += ';height:100vh;width:100%;border-radius:0;display:block;background:#0d5c3a;'; }
      win.dispatchEvent(new Event('resize'));
      setTimeout(() => win.dispatchEvent(new Event('resize')), 300);
      setTimeout(() => win.dispatchEvent(new Event('resize')), 1000);
    },
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse Effect Simulator',
    nameAm: 'የግሪንሃውስ ተጽዕኖ',
    subject: 'Geography · Chemistry',
    grade: 'Grade 11 · Unit 6',
    color: '#27ae60',
    tagline: 'Slide CO₂ from 180 to 800 ppm and watch global temperature respond live.',
    file: 'tools/greenhouse-simulator.html',
    accent: 'rgba(39,174,96,0.10)',
    canvasBg: '#0d5c3a',
    cropCanvas: (doc) => {
      doc.querySelectorAll('h1,.sub,.controls,.info-panel').forEach(e => e.style.display = 'none');
      doc.body.style.background = '#0d5c3a';
      const l = doc.querySelector('.layout'); if (l) l.style.padding = '0';
      const cw = doc.querySelector('.canvas-wrap'); if (cw) cw.style.maxWidth = '100%';
      const c = doc.getElementById('ghCanvas'); if (c) { c.style.height = '100%'; c.style.borderRadius = '0'; c.style.border = 'none'; }
    },
  },
  {
    id: 'flashcards',
    name: 'Adaptive Flashcards',
    nameAm: 'የማስታወሻ ካርዶች',
    subject: 'All Subjects',
    grade: 'Spaced repetition',
    color: '#D4AF37',
    tagline: 'Flip-card review with category filtering and spaced repetition rating.',
    file: 'tools/flashcards.html',
    accent: 'rgba(212,175,55,0.12)',
    canvasBg: '#0d5c3a',
    cropCanvas: (doc, win) => {
      doc.querySelectorAll('h1,.sub,.controls,.nav-row,.rate-row,.cat-dots,.stats-bar').forEach(e => e.style.display = 'none');
      doc.documentElement.style.height = '100%';
      doc.body.style.background = 'linear-gradient(135deg,#0d5c3a,#1a3a2a)';
      doc.body.style.height = '100vh';
      doc.body.style.margin = '0';
      doc.body.style.display = 'flex';
      doc.body.style.alignItems = 'center';
      doc.body.style.justifyContent = 'center';
      const ca = doc.querySelector('.card-area'); if (ca) { ca.style.padding = '24px'; ca.style.background = 'transparent'; ca.style.minHeight = '0'; ca.style.height = '100%'; ca.style.width = '100%'; ca.style.boxSizing = 'border-box'; }
      const cw = doc.querySelector('.card-wrap'); if (cw) { cw.style.maxWidth = '92%'; cw.style.height = '78%'; }
      const card = doc.querySelector('.card');
      if (card) { card.style.height = '100%'; }
      // Auto-flip the card every 2.6s
      if (card && !card.__autoFlip) {
        card.__autoFlip = true;
        setInterval(() => card.classList.toggle('flipped'), 2600);
      }
    },
  },
];

const NATURAL_W = 720;
const NATURAL_H = 320;

function ToolPreviewCard({ tool, navigate }) {
  const ref = React.useRef(null);
  const wrapRef = React.useRef(null);
  const [loaded, setLoaded] = React.useState(false);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    if (!wrapRef.current) return;
    const compute = () => {
      const el = wrapRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      setScale(Math.max(w / NATURAL_W, h / NATURAL_H));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const handleLoad = () => {
    try {
      const iframe = ref.current;
      const doc = iframe && iframe.contentDocument;
      const win = iframe && iframe.contentWindow;
      if (doc && tool.cropCanvas) {
        tool.cropCanvas(doc, win);
        setTimeout(() => { try { tool.cropCanvas(doc, win); } catch (e) {} }, 500);
        setTimeout(() => { try { tool.cropCanvas(doc, win); } catch (e) {} }, 1500);
      }
    } catch (e) { /* swallow */ }
    setLoaded(true);
  };

  return (
    <div style={{
      border: `1.5px solid ${BRAND.border}`,
      borderRadius: 14,
      overflow: 'hidden',
      background: '#fff',
      display: 'flex', flexDirection: 'column',
      boxShadow: '0 6px 20px rgba(13,92,58,0.06)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}>
      {/* Canvas-only viewport (non-interactive) */}
      <div ref={wrapRef} style={{
        position: 'relative',
        height: 280,
        background: tool.canvasBg,
        overflow: 'hidden',
        borderBottom: `1px solid ${BRAND.border}`,
      }}>
        {!loaded && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#ffffff60', fontSize: 11, letterSpacing: 0.5,
          }}>Loading preview…</div>
        )}
        <iframe
          ref={ref}
          src={tool.file}
          onLoad={handleLoad}
          title={tool.name}
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: NATURAL_W, height: NATURAL_H,
            border: 'none',
            display: 'block',
            pointerEvents: 'none',
            transformOrigin: 'center center',
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s',
            background: tool.canvasBg,
          }}
        />
        {/* Live indicator */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
          padding: '4px 10px', borderRadius: 99,
          fontSize: 10, fontWeight: 700, letterSpacing: 0.6,
          color: '#fff', zIndex: 2,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: '#27ae60',
            boxShadow: '0 0 0 3px rgba(39,174,96,0.25)',
          }} />
          LIVE CANVAS
        </div>
        {/* Subject ribbon */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          fontSize: 9, fontWeight: 800, letterSpacing: 0.8,
          color: '#fff', background: tool.color,
          padding: '4px 10px', borderRadius: 4,
          textTransform: 'uppercase',
          zIndex: 2,
        }}>
          {tool.subject}
        </div>
      </div>

      {/* Meta row */}
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, color: tool.color,
          letterSpacing: 0.5, marginBottom: 6,
        }}>{tool.grade}</div>
        <h3 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 19, fontWeight: 700, color: BRAND.dark,
          lineHeight: 1.2, margin: '0 0 4px',
        }}>{tool.name}</h3>
        <div style={{ fontSize: 12, color: BRAND.muted, fontWeight: 600, marginBottom: 10 }}>
          {tool.nameAm}
        </div>
        <p style={{
          fontSize: 13, color: BRAND.muted, lineHeight: 1.55,
          margin: '0 0 14px', flex: 1,
        }}>{tool.tagline}</p>
        <a
          href={tool.file}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: tool.color, fontSize: 13, fontWeight: 700,
            textDecoration: 'none', alignSelf: 'flex-start',
          }}
        >
          Try it ↗
        </a>
      </div>
    </div>
  );
}

function InteractiveToolsShowcase({ navigate }) {

  return (
    <section id="tools" style={{ padding: '72px 36px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 36, alignItems: 'end', marginBottom: 36 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.5 }}>HANDS-ON LEARNING · በተግባር መማር</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 38, margin: '8px 0 12px', fontWeight: 700, color: BRAND.dark, lineHeight: 1.1 }}>
              Real interactive tools.<br/>
              <span style={{ color: BRAND.primary, fontStyle: 'italic' }}>Not just videos.</span>
            </h2>
            <p style={{ color: BRAND.muted, fontSize: 15, margin: 0, maxWidth: 520, lineHeight: 1.6 }}>
              Every MyMarian unit ships with browser-based simulators, 3D explorers and adaptive flashcards. Try four of them right here — no signup required.
            </p>
          </div>
          <div style={{
            display: 'flex', gap: 18, justifyContent: 'flex-end', flexWrap: 'wrap',
            paddingBottom: 6,
          }}>
            {[
              { num: '40+', label: 'Live tools' },
              { num: '8', label: 'Subjects covered' },
              { num: '100%', label: 'Browser-based' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 26, fontWeight: 800, color: BRAND.dark, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: BRAND.muted, marginTop: 4, fontWeight: 600, letterSpacing: 0.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool grid — canvas-only, non-interactive previews */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 18,
        }}>
          {INTERACTIVE_TOOLS.map(t => (
            <ToolPreviewCard key={t.id} tool={t} navigate={navigate} />
          ))}
        </div>

        {/* Browse all CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <button
            onClick={() => navigate('tools')}
            style={{
              background: BRAND.dark, color: '#fff',
              border: 'none', borderRadius: 8,
              padding: '12px 22px', fontSize: 13, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Browse all 40+ tools →
          </button>
        </div>

        {/* Trust strip below */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24,
          marginTop: 22, flexWrap: 'wrap',
          fontSize: 12, color: BRAND.muted,
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#27ae60' }}>●</span> Works on phones &amp; low-bandwidth connections
          </span>
          <span style={{ width: 1, height: 14, background: BRAND.border }} />
          <span>No installation · runs in your browser</span>
          <span style={{ width: 1, height: 14, background: BRAND.border }} />
          <span>Aligned with Ethiopian curriculum units</span>
        </div>
      </div>
    </section>
  );
}

function LandingPage({ navigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, background: '#fff', minHeight: '100%' }}>
      {/* Top nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: '#ffffffee',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${BRAND.border}`,
        padding: '14px 36px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.dark})`,
            border: `1.5px solid ${BRAND.gold}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="8" y="2" width="4" height="16" fill={BRAND.gold} rx="0.5" opacity="0.9" />
              <rect x="2" y="8" width="16" height="4" fill={BRAND.gold} rx="0.5" opacity="0.9" />
              <rect x="6.5" y="6.5" width="3" height="3" fill={BRAND.gold} opacity="0.5" />
              <rect x="10.5" y="6.5" width="3" height="3" fill={BRAND.gold} opacity="0.5" />
              <rect x="6.5" y="10.5" width="3" height="3" fill={BRAND.gold} opacity="0.5" />
              <rect x="10.5" y="10.5" width="3" height="3" fill={BRAND.gold} opacity="0.5" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18, fontWeight: 700, color: BRAND.dark, lineHeight: 1 }}>MyMarian</div>
            <div style={{ fontSize: 9, color: BRAND.muted, fontWeight: 600, letterSpacing: 1 }}>ETHIOPIA · ኢትዮጵያ</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="#features" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Features</a>
          <a href="#tools" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Tools</a>
          <a href="#subjects" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Subjects</a>
          <a href="#pricing" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Pricing</a>
          <a href="#faq" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>FAQ</a>
          <button onClick={() => navigate('dashboard')} style={{ background: 'none', border: 'none', color: BRAND.primary, fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', padding: '6px 12px' }}>
            Sign in
          </button>
          <CTAButton small variant="primary" onClick={() => navigate('signup')}>Get Started</CTAButton>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${BRAND.dark} 0%, ${BRAND.night} 60%, #04140c 100%)`,
        color: '#fff',
        padding: '64px 36px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <EthiopianPattern opacity={0.05} color={BRAND.gold} />
        {/* Glow accent */}
        <div style={{
          position: 'absolute', top: -150, right: -100, width: 500, height: 500,
          background: `radial-gradient(circle, ${BRAND.gold}22 0%, transparent 60%)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
          {/* Left copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${BRAND.gold}18`, border: `1px solid ${BRAND.gold}44`, padding: '6px 14px', borderRadius: 99, marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: BRAND.gold }} />
              <span style={{ fontSize: 11, color: BRAND.gold, fontWeight: 700, letterSpacing: 0.5 }}>FOR GRADES 9–12 · ETHIOPIAN CURRICULUM</span>
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 52, fontWeight: 700, lineHeight: 1.05, margin: '0 0 18px',
              letterSpacing: -0.5,
            }}>
              Ethiopia's home for<br/>
              <span style={{ color: BRAND.gold }}>secondary learning</span>.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#ffffffaa', margin: '0 0 28px', maxWidth: 480 }}>
              Video lessons, interactive tools, live tutor sessions, and quizzes — all aligned with the Ethiopian curriculum. ከ9ኛ-12ኛ ክፍል ተማሪዎች ይጠቀሙበት።
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <CTAButton variant="gold" onClick={() => navigate('signup')} style={{ fontSize: 15, padding: '14px 28px' }}>
                Start Learning Free
              </CTAButton>
              <CTAButton onClick={() => navigate('dashboard')} style={{ fontSize: 15, padding: '14px 28px', background: '#ffffff14', color: '#fff', border: '1.5px solid #ffffff33' }}>
                ▶ See a Demo
              </CTAButton>
            </div>
            <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: BRAND.gold, fontSize: 14 }}>✓</span>
                <span style={{ fontSize: 12, color: '#ffffff99' }}>Pay with TeleBirr</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: BRAND.gold, fontSize: 14 }}>✓</span>
                <span style={{ fontSize: 12, color: '#ffffff99' }}>አማርኛ + English</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: BRAND.gold, fontSize: 14 }}>✓</span>
                <span style={{ fontSize: 12, color: '#ffffff99' }}>Free 3-subject plan</span>
              </div>
            </div>
          </div>

          {/* Right hero card — student preview */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#fff', borderRadius: 16, padding: 0, color: BRAND.text,
              boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              overflow: 'hidden', transform: 'rotate(-1.5deg)',
            }}>
              {/* Browser chrome */}
              <div style={{ background: '#f3f4f6', padding: '8px 12px', display: 'flex', gap: 5, alignItems: 'center', borderBottom: `1px solid ${BRAND.border}` }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
                <div style={{ flex: 1, fontSize: 10, color: BRAND.muted, textAlign: 'center', fontFamily: 'monospace' }}>mymarian.com</div>
              </div>
              {/* Mock dashboard */}
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 11, color: BRAND.muted, fontWeight: 600 }}>Welcome back</div>
                    <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18, fontWeight: 700 }}>Selamawit T.</div>
                  </div>
                  <div style={{ background: `${BRAND.gold}22`, padding: '6px 12px', borderRadius: 8, textAlign: 'center' }}>
                    <div style={{ fontSize: 16 }}>🔥</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: BRAND.dark, lineHeight: 1 }}>12</div>
                  </div>
                </div>
                {/* Course card */}
                <div style={{ background: BRAND.cream, borderRadius: 8, padding: 12, marginBottom: 10, borderLeft: `4px solid ${SUBJECT_COLORS.Biology}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: SUBJECT_COLORS.Biology, letterSpacing: 0.5 }}>BIOLOGY · GRADE 9</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: SUBJECT_COLORS.Biology }}>72%</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Cell Structure & Function</div>
                  <div style={{ background: '#e5e7eb', height: 4, borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ width: '72%', height: '100%', background: SUBJECT_COLORS.Biology }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[
                    { label: 'Math', pct: 45, color: SUBJECT_COLORS.Mathematics },
                    { label: 'English', pct: 88, color: SUBJECT_COLORS.English },
                  ].map(c => (
                    <div key={c.label} style={{ background: '#f9fafb', borderRadius: 6, padding: '8px 10px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: c.color, marginBottom: 4 }}>{c.label.toUpperCase()}</div>
                      <div style={{ background: '#e5e7eb', height: 3, borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ width: `${c.pct}%`, height: '100%', background: c.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: -16, left: -20,
              background: BRAND.gold, color: BRAND.dark,
              padding: '10px 16px', borderRadius: 10,
              fontSize: 12, fontWeight: 700,
              boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
              transform: 'rotate(-3deg)',
            }}>
              ⭐ 4.9 · 3,200+ reviews
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: BRAND.cream, padding: '32px 36px', borderBottom: `1px solid ${BRAND.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 32, fontWeight: 800, color: BRAND.primary, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: BRAND.muted, marginTop: 6, fontWeight: 600 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: BRAND.gold, marginTop: 1 }}>{s.labelAm}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '64px 36px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.5 }}>WHAT'S INCLUDED · ምን ያገኛሉ</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 36, margin: '8px 0 8px', fontWeight: 700, color: BRAND.dark }}>
              Everything you need to excel
            </h2>
            <p style={{ color: BRAND.muted, fontSize: 15, margin: 0 }}>Built specifically for Ethiopian secondary students</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{
                background: '#fff',
                border: `1px solid ${BRAND.border}`,
                borderRadius: 14,
                padding: '24px 22px',
                transition: 'all 0.2s',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${BRAND.primary}12`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 14,
                }}>{f.icon}</div>
                <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: BRAND.dark }}>{f.title}</h3>
                <div style={{ fontSize: 11, color: BRAND.gold, fontWeight: 600, marginBottom: 8 }}>{f.titleAm}</div>
                <p style={{ margin: 0, fontSize: 13, color: BRAND.muted, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools showcase */}
      <InteractiveToolsShowcase navigate={navigate} />

      {/* Subjects */}
      <section id="subjects" style={{ padding: '64px 36px', background: BRAND.cream, position: 'relative', overflow: 'hidden' }}>
        <TiletPattern opacity={0.04} color={BRAND.primary} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.5 }}>SUBJECTS · ዓይነቶች</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 36, margin: '8px 0', fontWeight: 700, color: BRAND.dark }}>
              All eight curriculum subjects
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {SUBJECTS_LANDING.map(s => (
              <div key={s.name} style={{
                background: '#fff',
                borderRadius: 12,
                padding: '20px 18px',
                border: `1px solid ${BRAND.border}`,
                borderTop: `4px solid ${s.color}`,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark }}>{s.name}</div>
                <div style={{ fontSize: 12, color: s.color, fontWeight: 600, marginTop: 2 }}>{s.nameAm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '64px 36px', background: '#fff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.5 }}>PRICING · ዋጋ</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 36, margin: '8px 0', fontWeight: 700, color: BRAND.dark }}>
              Plans for every family
            </h2>
            <p style={{ color: BRAND.muted, fontSize: 14, margin: 0 }}>Pay easily with TeleBirr, CBE Birr, Amole, or vouchers</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {[
              { name: 'Free', nameAm: 'ነጻ', price: 0, popular: false, color: BRAND.muted, features: ['3 subjects', 'Video lessons', 'Interactive tools'] },
              { name: 'Standard', nameAm: 'መደበኛ', price: 299, popular: true, color: BRAND.primary, features: ['All 8 subjects', 'Quizzes & assessments', 'Recordings library', 'Certificates'] },
              { name: 'Premium', nameAm: 'ፕሪሚየም', price: 549, popular: false, color: BRAND.gold, features: ['Everything in Standard', 'Live tutor sessions', '1-on-1 booking', 'Priority support'] },
            ].map(p => (
              <div key={p.name} style={{
                borderRadius: 14, border: `2px solid ${p.popular ? p.color : BRAND.border}`,
                padding: '26px 22px', position: 'relative',
                background: p.popular ? `${p.color}06` : '#fff',
                boxShadow: p.popular ? `0 8px 32px ${p.color}22` : 'none',
              }}>
                {p.popular && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: p.color, color: '#fff', fontSize: 10, fontWeight: 700,
                    padding: '4px 12px', borderRadius: 99, letterSpacing: 0.5,
                  }}>MOST POPULAR</div>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, color: p.color, letterSpacing: 0.3 }}>
                  {p.name} · <span style={{ fontFamily: 'inherit' }}>{p.nameAm}</span>
                </div>
                <div style={{ marginTop: 10, marginBottom: 16 }}>
                  {p.price === 0 ? (
                    <span style={{ fontSize: 32, fontWeight: 800, color: BRAND.dark, fontFamily: 'Playfair Display, Georgia, serif' }}>ነጻ</span>
                  ) : (
                    <>
                      <span style={{ fontSize: 36, fontWeight: 800, color: BRAND.dark, fontFamily: 'Playfair Display, Georgia, serif' }}>{p.price}</span>
                      <span style={{ fontSize: 13, color: BRAND.muted, marginLeft: 6 }}>ብር / mo</span>
                    </>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
                  {p.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: p.color, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: BRAND.text }}>{f}</span>
                    </div>
                  ))}
                </div>
                <CTAButton
                  variant={p.popular ? 'gold' : 'outline'}
                  onClick={() => navigate('signup')}
                  style={{ width: '100%' }}
                >
                  {p.price === 0 ? 'Start Free' : 'Get Started'}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '64px 36px', background: BRAND.dark, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <EthiopianPattern opacity={0.04} color={BRAND.gold} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.5 }}>STORIES · ታሪኮች</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 36, margin: '8px 0', fontWeight: 700 }}>
              Loved by students nationwide
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{
                background: '#ffffff0a',
                border: '1px solid #ffffff18',
                borderRadius: 12, padding: '22px 20px',
              }}>
                <div style={{ marginBottom: 10 }}>
                  {[1,2,3,4,5].map(i => <span key={i} style={{ color: BRAND.gold, fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#ffffffcc', margin: '0 0 16px', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', borderTop: '1px solid #ffffff18', paddingTop: 14 }}>
                  <Avatar name={t.name} size={36} bg={BRAND.gold} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#ffffff80' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '64px 36px', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.5 }}>QUESTIONS · ጥያቄዎች</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 32, margin: '8px 0', fontWeight: 700, color: BRAND.dark }}>
              Frequently asked
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{
                border: `1px solid ${BRAND.border}`,
                borderRadius: 10,
                background: openFaq === i ? BRAND.cream : '#fff',
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    background: 'none', border: 'none',
                    padding: '16px 20px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 14, fontWeight: 700, color: BRAND.dark,
                  }}
                >
                  {item.q}
                  <span style={{ fontSize: 18, color: BRAND.primary, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 20px 18px', fontSize: 13, color: BRAND.muted, lineHeight: 1.7 }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.dark} 100%)`,
        color: '#fff', padding: '64px 36px', position: 'relative', overflow: 'hidden',
      }}>
        <EthiopianPattern opacity={0.06} color={BRAND.gold} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 38, margin: '0 0 14px', fontWeight: 700, lineHeight: 1.15 }}>
            Ready to start learning?
          </h2>
          <p style={{ fontSize: 16, color: '#ffffffcc', margin: '0 0 28px', lineHeight: 1.6 }}>
            Join 12,000+ Ethiopian students. Start with our free plan — no credit card needed.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTAButton variant="gold" onClick={() => navigate('signup')} style={{ fontSize: 15, padding: '14px 32px' }}>
              Create Free Account
            </CTAButton>
            <CTAButton onClick={() => navigate('dashboard')} style={{ fontSize: 15, padding: '14px 32px', background: '#ffffff14', color: '#fff', border: '1.5px solid #ffffff44' }}>
              Explore Demo
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: BRAND.night, color: '#ffffff80', padding: '40px 36px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 32, marginBottom: 28 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 30, height: 30, borderRadius: 6, background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.dark})`, border: `1px solid ${BRAND.gold}55`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <rect x="8" y="2" width="4" height="16" fill={BRAND.gold} rx="0.5" opacity="0.9" />
                  <rect x="2" y="8" width="16" height="4" fill={BRAND.gold} rx="0.5" opacity="0.9" />
                </svg>
              </div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>MyMarian</div>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.6, margin: 0, maxWidth: 280 }}>
              Ethiopia's leading learning platform for Grades 9–12. Aligned with the Ethiopian Ministry of Education curriculum.
            </p>
          </div>
          <div>
            <div style={{ color: BRAND.gold, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 12 }}>PLATFORM</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
              <a href="#subjects" style={{ color: 'inherit', textDecoration: 'none' }}>Subjects</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
              <button onClick={() => navigate('dashboard')} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12 }}>Demo</button>
            </div>
          </div>
          <div>
            <div style={{ color: BRAND.gold, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 12 }}>COMPANY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              <span>About Us</span>
              <span>Careers</span>
              <span>Press</span>
              <span>Contact</span>
            </div>
          </div>
          <div>
            <div style={{ color: BRAND.gold, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 12 }}>SUPPORT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              <span>Help Center</span>
              <span>Community</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #ffffff18', paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: 11 }}>© 2026 MyMarian Ethiopia · Addis Ababa</div>
          <div style={{ fontSize: 11 }}>Made with care in 🇪🇹 Ethiopia</div>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { LandingPage });
