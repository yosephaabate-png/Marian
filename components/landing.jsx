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
    desc: 'Subscribe with TeleBirr, M-PESA, CBE Birr, Amole, or buy a voucher at any agent. No credit card required.',
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
    a: 'We offer three plans: Free (3 subjects, basic features), Standard at 1,200 ብር/month (all subjects, live tutorial sessions, certificates), and Premium at 1,700 ብር/month (everything plus 1-on-1 tutor booking and exam prep boot-camps). Save 10% on both paid plans when you bill annually.',
  },
  {
    q: 'Can I pay with TeleBirr?',
    a: 'Yes! TeleBirr is our primary payment method. You can also pay with M-PESA (Safaricom Ethiopia), CBE Birr, Amole (Dashen Bank), or buy a voucher from any MyMarian agent location and pay in cash.',
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
    <div className="mm-card-lift" style={{
      border: `1.5px solid ${BRAND.border}`,
      borderRadius: 14,
      overflow: 'hidden',
      background: '#fff',
      display: 'flex', flexDirection: 'column',
      boxShadow: '0 6px 20px rgba(13,92,58,0.06)',
      height: '100%',
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
              { num: '700+', label: 'Live tools & flashcards' },
              { num: '8', label: 'Subjects covered' },
              { num: '100%', label: 'Browser-based' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 26, fontWeight: 800, color: BRAND.dark, lineHeight: 1 }}>
                  <AnimatedCounter value={s.num} duration={1500} />
                </div>
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
          {INTERACTIVE_TOOLS.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <ToolPreviewCard tool={t} navigate={navigate} />
            </Reveal>
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
            Browse all 700+ tools →
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

function LandingPage({ navigate, onDemo, onGoogle }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [billing, setBilling] = React.useState('monthly'); // 'monthly' | 'annual'
  const [contentModal, setContentModal] = React.useState(null);

  const FOOTER_CONTENT = {
    'About Us': {
      title: 'About MyMarian',
      body: [
        'MyMarian is Ethiopia\'s leading online learning platform for secondary students, built by Ethiopian educators for Ethiopian students. Founded in Addis Ababa in 2023, we serve over 12,000 students across all eleven regions.',
        'Our mission is simple: make world-class secondary education accessible, affordable, and aligned with the Ethiopian Ministry of Education curriculum — in Amharic and English, on any phone, on any network.',
        'We partner with certified Ethiopian teachers and run our platform on AfroLMS — an Open edX based learning infrastructure purpose-built for the African market.',
      ],
    },
    'Careers': {
      title: 'Careers at MyMarian',
      body: [
        'We\'re a small, focused team headquartered in Addis Ababa with remote contributors across Ethiopia. We hire educators, engineers, designers, and operators who care about Ethiopian education.',
        'Open roles are posted on this page as they appear. Current openings include: Senior Curriculum Designer (Biology), Mobile Engineer (Android), Customer Success Lead, and Regional Tutor Coordinators in Bahir Dar, Hawassa, and Mekelle.',
        'To apply, email Contact@mymarian.net with your CV and a short note on why Ethiopian education matters to you.',
      ],
    },
    'Press': {
      title: 'Press & Media',
      body: [
        'For interview requests, brand assets, or comments on Ethiopian secondary education, reach our press office at Contact@mymarian.net.',
        'Recent coverage: Capital Ethiopia (Feb 2026), Addis Standard (Jan 2026), and Fortune Ethiopia (Nov 2025). A high-resolution logo pack and founder bios are available on request.',
        'We respond to press enquiries within one business day.',
      ],
    },
    'Contact': {
      title: 'Contact Us',
      body: [
        'Head office: Bole Sub-City, Addis Ababa, Ethiopia',
        'All enquiries — general, student support, tutor & partnerships, press, careers and privacy — are streamed to a single inbox: Contact@mymarian.net.',
        'Phone: +251 911 234 567',
        'Office hours: Monday – Saturday, 8:30 AM – 6:00 PM EAT',
      ],
    },
    'Help Center': {
      title: 'Help Center',
      body: [
        'Find step-by-step guides for getting started, managing your subscription, joining live tutorial sessions, and using the interactive tools.',
        'Popular articles: How to pay with TeleBirr · Resetting your password · Joining a live session on a slow connection · Downloading recordings for offline viewing · Switching grade level after enrolment.',
        'Still stuck? Open a ticket from your dashboard or write to Contact@mymarian.net — average response time is under 4 hours.',
      ],
    },
    'Community': {
      title: 'MyMarian Community',
      body: [
        'Join thousands of Ethiopian students studying together on our Telegram channels — one per grade, plus subject-specific groups for Mathematics, Physics, Biology, Chemistry, English, Amharic, History, Geography, and Economics.',
        'Every channel is moderated by certified MyMarian tutors. Ask homework questions, share notes, and form study groups for the upcoming national exams.',
        'Community Code of Conduct: be respectful, no cheating on assessments, no sharing of paid lesson content outside the platform.',
      ],
    },
    'Privacy Policy': {
      title: 'Privacy Policy',
      body: [
        'Last updated: 1 May 2026. MyMarian Ethiopia ("we") respects your privacy. This policy explains what we collect, why, and how we protect it.',
        'We collect: your name, email, phone, grade, payment records, and learning activity (lessons watched, quiz scores, session attendance). We do NOT sell personal data to third parties.',
        'We share data only with our LMS provider (AfroLMS) and payment processors (TeleBirr, M-PESA, CBE, Dashen) strictly for service delivery. Data is stored on servers in Ethiopia and the EU and retained for as long as your account is active.',
        'You can request export or deletion of your data at any time by writing to Contact@mymarian.net.',
      ],
    },
    'Terms of Service': {
      title: 'Terms of Service',
      body: [
        'By creating a MyMarian account you agree to these terms. You must be at least 13 years old; under-18 users need a parent or guardian to consent to billing.',
        'Subscriptions auto-renew monthly or annually until cancelled from your dashboard. Refunds are available within 7 days of payment if you have not consumed substantial content. Live session no-shows are non-refundable.',
        'Course content, recordings, and assessments are licensed to you for personal use only. Sharing, reselling, or rebroadcasting MyMarian material is prohibited and may result in account termination.',
        'These terms are governed by the laws of the Federal Democratic Republic of Ethiopia.',
      ],
    },
  };

  const SOCIALS = [
    { key: 'facebook', label: 'Facebook', href: 'https://facebook.com/mymarian', svg: <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z"/> },
    { key: 'twitter', label: 'X / Twitter', href: 'https://twitter.com/mymarian', svg: <path d="M18.244 2H21.5l-7.5 8.572L23 22h-6.84l-5.36-7.013L4.5 22H1.243l8.026-9.171L1 2h7.014l4.846 6.4L18.244 2Zm-1.2 18h1.838L7.04 4H5.1l11.944 16Z"/> },
    { key: 'instagram', label: 'Instagram', href: 'https://instagram.com/mymarian', svg: <><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.94c-3.14 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04-.2-.51-.44-.88-.83-1.27a3.4 3.4 0 0 0-1.27-.83c-.39-.15-.97-.33-2.04-.38-1.24-.06-1.6-.07-4.74-.07Z"/><path d="M12 7.08a4.92 4.92 0 1 0 0 9.84 4.92 4.92 0 0 0 0-9.84Zm0 8.12a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm6.27-8.34a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"/></> },
    { key: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/mymarian', svg: <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"/> },
    { key: 'youtube', label: 'YouTube', href: 'https://youtube.com/@mymarian', svg: <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.48 3.5 12 3.5 12 3.5s-7.48 0-9.37.56A3.02 3.02 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.02 3.02 0 0 0 2.13 2.14c1.89.56 9.37.56 9.37.56s7.48 0 9.37-.56a3.02 3.02 0 0 0 2.13-2.14C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z"/> },
    { key: 'telegram', label: 'Telegram', href: 'https://t.me/mymarian', svg: <path d="M22.05 2.36 2.93 9.84c-1.31.51-1.3 1.23-.24 1.55l4.91 1.53 11.36-7.17c.54-.33 1.03-.15.62.21l-9.21 8.31h-.01l.01.01-.34 5.07c.5 0 .72-.23.99-.5l2.39-2.32 4.96 3.66c.91.5 1.57.24 1.8-.85L23.97 3.6c.34-1.32-.5-1.93-1.92-1.24Z"/> },
    { key: 'tiktok', label: 'TikTok', href: 'https://tiktok.com/@mymarian', svg: <path d="M21 8.66a8.16 8.16 0 0 1-4.78-1.53v6.95a6.42 6.42 0 1 1-6.42-6.42c.34 0 .66.03.98.08v3.45a3.04 3.04 0 1 0 2.1 2.89V2h3.34a4.82 4.82 0 0 0 4.78 4.3v2.36Z"/> },
  ];

  const priceFor = (basePrice) => {
    if (basePrice === 0) return { display: 0, period: 'Forever' };
    if (billing === 'annual') {
      const monthly = Math.round(basePrice * 0.9);
      return { display: monthly, period: '/mo billed annually', total: monthly * 12, savings: (basePrice - monthly) * 12 };
    }
    return { display: basePrice, period: '/mo' };
  };

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
          <BrandMark size={36} glow />
          <div>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18, fontWeight: 700, lineHeight: 1 }}>
              <span style={{ color: BRAND.dark }}>My</span><span style={{ color: BRAND.gold }}>Marian</span>
            </div>
            <div style={{ fontSize: 9, color: BRAND.muted, fontWeight: 600, letterSpacing: 1 }}>ETHIOPIA · ኢትዮጵያ</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="#features" className="mm-link" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Features</a>
          <a href="#tools" className="mm-link" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Tools</a>
          <a href="#subjects" className="mm-link" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Subjects</a>
          <a href="#pricing" className="mm-link" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>Pricing</a>
          <a href="#lms" className="mm-link" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>AfroLMS</a>
          <a href="#faq" className="mm-link" style={{ color: BRAND.muted, fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '6px 12px' }}>FAQ</a>
          <button onClick={onGoogle} style={{ background: 'none', border: 'none', color: BRAND.primary, fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', padding: '6px 12px' }}>
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
        {/* Floating gradients for life */}
        <FloatingGradient color={BRAND.gold} top="-12%" right="-6%" size={500} opacity={0.22} speed={16} blur={90} />
        <FloatingGradient color={BRAND.primary} bottom="-18%" left="-8%" size={520} opacity={0.32} speed={20} blur={100} />
        <FloatingGradient color="#5fc99c" top="35%" left="42%" size={260} opacity={0.18} speed={12} blur={70} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
          {/* Left copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${BRAND.gold}18`, border: `1px solid ${BRAND.gold}44`, padding: '6px 14px', borderRadius: 99, marginBottom: 20, animation: 'mm-pop-in 0.6s ease' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: BRAND.gold, animation: 'mm-pulse-dot 1.8s ease infinite' }} />
              <span style={{ fontSize: 11, color: BRAND.gold, fontWeight: 700, letterSpacing: 0.5 }}>FOR GRADES 9–12 · ETHIOPIAN CURRICULUM</span>
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 52, fontWeight: 700, lineHeight: 1.05, margin: '0 0 18px',
              letterSpacing: -0.5,
              animation: 'mm-pop-in 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}>
              Ethiopia's home for<br/>
              <span className="mm-gradient-text">secondary learning</span>.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#ffffffaa', margin: '0 0 28px', maxWidth: 480, animation: 'mm-pop-in 0.9s ease' }}>
              Video lessons, interactive tools, live tutor sessions, and quizzes — all aligned with the Ethiopian curriculum. ከ9ኛ-12ኛ ክፍል ተማሪዎች ይጠቀሙበት።
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <CTAButton variant="gold" onClick={() => navigate('signup')} style={{ fontSize: 15, padding: '14px 28px' }} className="mm-btn">
                Start Learning Free
              </CTAButton>
              <CTAButton onClick={onDemo} style={{ fontSize: 15, padding: '14px 28px', background: '#ffffff14', color: '#fff', border: '1.5px solid #ffffff33' }} className="mm-btn">
                ▶ See a Demo
              </CTAButton>
            </div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 18, maxWidth: 380 }}>
              <div style={{ flex: 1, height: 1, background: '#ffffff22' }} />
              <span style={{ fontSize: 10, color: '#ffffff66', fontWeight: 600, letterSpacing: 1 }}>OR</span>
              <div style={{ flex: 1, height: 1, background: '#ffffff22' }} />
            </div>
            <div style={{ marginTop: 12, maxWidth: 380 }}>
              <GoogleSignInButton onClick={onGoogle} label="Continue with Google" />
            </div>
            <div style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
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
          <TiltCard max={5} style={{ position: 'relative' }}>
            <div style={{
              background: '#fff', borderRadius: 16, padding: 0, color: BRAND.text,
              boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              overflow: 'hidden', transform: 'rotate(-1.5deg)',
              animation: 'mm-pop-in 0.8s cubic-bezier(0.22,1,0.36,1)',
            }}>
              {/* Browser chrome */}
              <div style={{ background: '#f3f4f6', padding: '8px 12px', display: 'flex', gap: 5, alignItems: 'center', borderBottom: `1px solid ${BRAND.border}` }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
                <div style={{ flex: 1, fontSize: 10, color: BRAND.muted, textAlign: 'center', fontFamily: 'monospace' }}>mymarian.net</div>
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
          </TiltCard>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: BRAND.cream, padding: '32px 36px', borderBottom: `1px solid ${BRAND.border}`, position: 'relative', overflow: 'hidden' }}>
        <FloatingGradient color={BRAND.gold} top="50%" left="-5%" size={300} opacity={0.08} speed={22} blur={70} />
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 32, fontWeight: 800, color: BRAND.primary, lineHeight: 1 }}>
                  <AnimatedCounter value={s.num} duration={1800} />
                </div>
                <div style={{ fontSize: 12, color: BRAND.muted, marginTop: 6, fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 10, color: BRAND.gold, marginTop: 1 }}>{s.labelAm}</div>
              </div>
            </Reveal>
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
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="mm-card-lift" style={{
                  background: '#fff',
                  border: `1px solid ${BRAND.border}`,
                  borderRadius: 14,
                  padding: '24px 22px',
                  height: '100%',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: `${BRAND.primary}12`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, marginBottom: 14,
                    transition: 'transform 0.4s ease, background 0.3s ease',
                  }}>{f.icon}</div>
                  <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: BRAND.dark }}>{f.title}</h3>
                  <div style={{ fontSize: 11, color: BRAND.gold, fontWeight: 600, marginBottom: 8 }}>{f.titleAm}</div>
                  <p style={{ margin: 0, fontSize: 13, color: BRAND.muted, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </Reveal>
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
            {SUBJECTS_LANDING.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="mm-card-lift mm-shine-wrap" style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '20px 18px',
                  border: `1px solid ${BRAND.border}`,
                  borderTop: `4px solid ${s.color}`,
                  textAlign: 'center',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: 32, marginBottom: 10, transition: 'transform 0.4s ease' }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: s.color, fontWeight: 600, marginTop: 2 }}>{s.nameAm}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '64px 36px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <FloatingGradient color={BRAND.gold} top="20%" right="-8%" size={420} opacity={0.10} speed={18} blur={90} />
        <FloatingGradient color={BRAND.primary} bottom="10%" left="-8%" size={380} opacity={0.07} speed={22} blur={80} />
        <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1.5 }}>PRICING · ዋጋ</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 36, margin: '8px 0', fontWeight: 700, color: BRAND.dark }}>
              Plans for every family
            </h2>
            <p style={{ color: BRAND.muted, fontSize: 14, margin: 0 }}>Pay easily with TeleBirr, M-PESA, CBE Birr, Amole, or vouchers</p>
          </div>

          {/* Monthly / Annual toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: BRAND.cream, padding: 4, borderRadius: 99,
              border: `1px solid ${BRAND.border}`,
            }}>
              {['monthly', 'annual'].map(mode => {
                const active = billing === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => setBilling(mode)}
                    style={{
                      padding: '8px 22px', borderRadius: 99,
                      border: 'none',
                      background: active ? BRAND.primary : 'transparent',
                      color: active ? '#fff' : BRAND.muted,
                      fontFamily: 'inherit', fontWeight: 700, fontSize: 13,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                      boxShadow: active ? `0 4px 14px ${BRAND.primary}44` : 'none',
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                    }}
                  >
                    {mode === 'monthly' ? 'Monthly' : 'Annual'}
                    {mode === 'annual' && (
                      <span style={{
                        background: active ? BRAND.gold : `${BRAND.gold}33`,
                        color: active ? BRAND.dark : BRAND.gold,
                        padding: '2px 8px', borderRadius: 99,
                        fontSize: 10, fontWeight: 800, letterSpacing: 0.4,
                      }}>SAVE 10%</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {[
              { name: 'Free', nameAm: 'ነጻ', basePrice: 0, popular: false, color: BRAND.muted, features: ['3 subjects', 'Video lessons', 'Interactive tools'] },
              { name: 'Standard', nameAm: 'መደበኛ', basePrice: 1200, popular: true, color: BRAND.primary, features: ['All 8 subjects', 'Live tutorial sessions', 'Quizzes & assessments', 'Recordings library', 'Certificates'] },
              { name: 'Premium', nameAm: 'ፕሪሚየም', basePrice: 1700, popular: false, color: BRAND.gold, features: ['Everything in Standard', '1-on-1 tutor booking', 'Priority support', 'Exam prep boot-camps'] },
            ].map((p, idx) => {
              const pricing = priceFor(p.basePrice);
              return (
                <Reveal key={p.name} delay={idx * 120}>
                  <div className="mm-card-lift" style={{
                    borderRadius: 14, border: `2px solid ${p.popular ? p.color : BRAND.border}`,
                    padding: '26px 22px', position: 'relative',
                    background: p.popular ? `${p.color}06` : '#fff',
                    boxShadow: p.popular ? `0 8px 32px ${p.color}22` : 'none',
                    height: '100%',
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
                    <div style={{ marginTop: 10, marginBottom: 6, minHeight: 60 }}>
                      {p.basePrice === 0 ? (
                        <span style={{ fontSize: 32, fontWeight: 800, color: BRAND.dark, fontFamily: 'Playfair Display, Georgia, serif' }}>ነጻ</span>
                      ) : (
                        <>
                          <span style={{ fontSize: 36, fontWeight: 800, color: BRAND.dark, fontFamily: 'Playfair Display, Georgia, serif' }}>
                            <AnimatedCounter key={billing + p.name} value={pricing.display} duration={700} />
                          </span>
                          <span style={{ fontSize: 13, color: BRAND.muted, marginLeft: 6 }}>ብር {pricing.period}</span>
                        </>
                      )}
                    </div>
                    {p.basePrice > 0 && billing === 'annual' && (
                      <div style={{
                        marginBottom: 14,
                        fontSize: 11, color: p.color, fontWeight: 700,
                        background: `${p.color}10`, padding: '4px 10px', borderRadius: 6,
                        display: 'inline-block',
                      }}>
                        Save {pricing.savings.toLocaleString()} ብር/yr
                      </div>
                    )}
                    {p.basePrice > 0 && billing === 'monthly' && (
                      <div style={{ marginBottom: 14, fontSize: 11, color: BRAND.muted }}>
                        or {Math.round(p.basePrice * 0.9).toLocaleString()} ብር/mo billed annually
                      </div>
                    )}
                    {p.basePrice === 0 && <div style={{ marginBottom: 14 }} />}
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
                      {p.basePrice === 0 ? 'Start Free' : 'Get Started'}
                    </CTAButton>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Demo callout */}
          <div style={{
            marginTop: 24, textAlign: 'center',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap',
            fontSize: 13, color: BRAND.muted,
          }}>
            <span>Not sure which plan?</span>
            <button
              onClick={onDemo}
              style={{
                background: 'none', border: 'none',
                color: BRAND.primary, fontWeight: 800, fontSize: 13,
                cursor: 'pointer', fontFamily: 'inherit',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                textDecoration: 'underline', textUnderlineOffset: 4, padding: 0,
              }}
            >
              Try a live demo of all three →
            </button>
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
            <CTAButton variant="gold" onClick={() => navigate('signup')} style={{ fontSize: 15, padding: '14px 32px' }} className="mm-btn">
              Create Free Account
            </CTAButton>
            <CTAButton onClick={onDemo} style={{ fontSize: 15, padding: '14px 32px', background: '#ffffff14', color: '#fff', border: '1.5px solid #ffffff44' }} className="mm-btn">
              Explore Demo
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Powered by AfroLMS — LMS provider section */}
      <section id="lms" style={{
        background: '#0a1f14',
        color: '#fff',
        padding: '72px 36px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid #ffffff10`,
      }}>
        <EthiopianPattern opacity={0.04} color={BRAND.gold} />
        <FloatingGradient color={BRAND.primary} top="-20%" right="-10%" size={460} opacity={0.22} speed={20} blur={90} />
        <FloatingGradient color={BRAND.gold} bottom="-15%" left="-8%" size={380} opacity={0.10} speed={24} blur={80} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: `${BRAND.gold}18`, border: `1px solid ${BRAND.gold}44`,
                padding: '6px 14px', borderRadius: 99, marginBottom: 18,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: BRAND.gold }} />
                <span style={{ fontSize: 11, color: BRAND.gold, fontWeight: 700, letterSpacing: 1 }}>POWERED BY AFROLMS · BUILT ON OPEN edX</span>
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 40, fontWeight: 700, lineHeight: 1.1,
                margin: '0 0 16px', letterSpacing: -0.5,
              }}>
                Built on Open edX,<br/>
                <span style={{ color: BRAND.gold, fontStyle: 'italic' }}>tuned for Africa</span>.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: '#ffffffaa', margin: '0 0 22px', maxWidth: 500 }}>
                MyMarian runs on <strong style={{ color: '#fff', fontWeight: 700 }}>AfroLMS</strong> — an
                <strong style={{ color: '#fff', fontWeight: 700 }}> Open edX based</strong> learning platform engineered
                for African networks, mobile-first students, and local payment rails. We inherit the full Open edX core
                (Studio authoring, LMS, XBlocks, Discussions, Open Response Assessment) and extend it with low-bandwidth
                video, SCORM &amp; xAPI, multilingual UI, and direct TeleBirr / M-PESA / CBE Birr integration.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 24, maxWidth: 520 }}>
                {[
                  { k: 'Core platform', v: 'Open edX · Redwood release' },
                  { k: 'Low-bandwidth', v: 'Streams from 80 kbps' },
                  { k: 'Standards', v: 'SCORM 1.2 · 2004 · xAPI · LTI' },
                  { k: 'Local payments', v: 'TeleBirr · M-PESA · CBE' },
                ].map(item => (
                  <div key={item.k} style={{
                    background: '#ffffff08',
                    border: '1px solid #ffffff14',
                    borderRadius: 10,
                    padding: '12px 14px',
                  }}>
                    <div style={{ fontSize: 10, color: BRAND.gold, fontWeight: 700, letterSpacing: 0.8, marginBottom: 4 }}>{item.k.toUpperCase()}</div>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>{item.v}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href="https://afrolms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mm-btn"
                  style={{
                    background: BRAND.gold, color: BRAND.dark,
                    padding: '12px 22px', borderRadius: 8,
                    fontSize: 13, fontWeight: 800, letterSpacing: 0.3,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}
                >Visit AfroLMS ↗</a>
                <a
                  href="mailto:Contact@mymarian.net"
                  className="mm-btn"
                  style={{
                    background: '#ffffff14', color: '#fff',
                    border: '1.5px solid #ffffff33',
                    padding: '12px 22px', borderRadius: 8,
                    fontSize: 13, fontWeight: 700,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}
                >Partner with us</a>
              </div>
            </div>

            {/* Right: stack of cards */}
            <div style={{ position: 'relative' }}>
              {/* Main card */}
              <div style={{
                background: 'linear-gradient(160deg, #103a25 0%, #0a1f14 100%)',
                border: '1px solid #ffffff14',
                borderRadius: 16,
                padding: '26px 24px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                position: 'relative', zIndex: 2,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: `linear-gradient(135deg, ${BRAND.gold}, #c9962a)`,
                    color: BRAND.dark,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: 20, fontWeight: 800,
                  }}>A</div>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18, fontWeight: 700 }}>AfroLMS</div>
                    <div style={{ fontSize: 10, color: '#ffffff70', letterSpacing: 0.8 }}>OPEN edX BASED PLATFORM · LMS PROVIDER</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { l: 'Uptime SLA', v: '99.95%', c: '#5fc99c' },
                    { l: 'Concurrent learners', v: '50,000+', c: '#5fc99c' },
                    { l: 'Compliance', v: 'GDPR · POPIA · Ethiopia DP', c: BRAND.gold },
                  ].map(row => (
                    <div key={row.l} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '10px 12px', background: '#00000033', borderRadius: 8,
                      borderLeft: `3px solid ${row.c}`,
                    }}>
                      <span style={{ fontSize: 11, color: '#ffffff80', fontWeight: 600 }}>{row.l}</span>
                      <span style={{ fontSize: 12, color: '#fff', fontWeight: 700 }}>{row.v}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: 18, paddingTop: 16, borderTop: '1px solid #ffffff14',
                  display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5fc99c', animation: 'mm-pulse-dot 1.6s ease infinite' }} />
                    <span style={{ fontSize: 10, color: '#5fc99c', fontWeight: 700, letterSpacing: 0.5 }}>OPERATIONAL</span>
                  </div>
                </div>
              </div>

              {/* Behind card */}
              <div style={{
                position: 'absolute', top: 18, left: 16, right: -8, bottom: -10,
                background: '#ffffff05',
                border: '1px solid #ffffff10',
                borderRadius: 16,
                zIndex: 1,
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: BRAND.night, color: '#ffffff80', padding: '48px 36px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 32, marginBottom: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <BrandMark size={32} />
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 17, fontWeight: 700 }}>
                <span style={{ color: '#fff' }}>My</span><span style={{ color: BRAND.gold }}>Marian</span>
              </div>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.6, margin: '0 0 18px', maxWidth: 280 }}>
              Ethiopia's leading learning platform for Grades 9–12. Aligned with the Ethiopian Ministry of Education curriculum. Powered by AfroLMS.
            </p>
            {/* Social media */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SOCIALS.map(s => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#ffffff10',
                    border: '1px solid #ffffff18',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#ffffffb0',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = BRAND.gold; e.currentTarget.style.color = BRAND.dark; e.currentTarget.style.borderColor = BRAND.gold; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#ffffff10'; e.currentTarget.style.color = '#ffffffb0'; e.currentTarget.style.borderColor = '#ffffff18'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {s.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: BRAND.gold, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 12 }}>PLATFORM</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
              <a href="#subjects" style={{ color: 'inherit', textDecoration: 'none' }}>Subjects</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
              <a href="#lms" style={{ color: 'inherit', textDecoration: 'none' }}>AfroLMS</a>
              <button onClick={onDemo} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12 }}>Demo</button>
            </div>
          </div>
          <div>
            <div style={{ color: BRAND.gold, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 12 }}>COMPANY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              {['About Us', 'Careers', 'Press', 'Contact'].map(label => (
                <button
                  key={label}
                  onClick={() => setContentModal(label)}
                  style={{
                    background: 'none', border: 'none', color: 'inherit',
                    padding: 0, textAlign: 'left', cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: 12,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = BRAND.gold; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; }}
                >{label}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: BRAND.gold, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 12 }}>SUPPORT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              {['Help Center', 'Community', 'Privacy Policy', 'Terms of Service'].map(label => (
                <button
                  key={label}
                  onClick={() => setContentModal(label)}
                  style={{
                    background: 'none', border: 'none', color: 'inherit',
                    padding: 0, textAlign: 'left', cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: 12,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = BRAND.gold; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; }}
                >{label}</button>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #ffffff18', paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: 11 }}>© 2026 MyMarian Ethiopia · Addis Ababa · Powered by AfroLMS</div>
          <div style={{ fontSize: 11 }}>Made with care in 🇪🇹 Ethiopia</div>
        </div>
      </footer>

      {/* Footer content modal */}
      {contentModal && FOOTER_CONTENT[contentModal] && (
        <div
          onClick={() => setContentModal(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(7,31,20,0.72)',
            backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
            animation: 'mm-pop-in 0.25s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: 18,
              maxWidth: 640, width: '100%',
              maxHeight: '85vh', overflow: 'auto',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
              animation: 'mm-pop-in 0.4s cubic-bezier(0.22,1,0.36,1)',
              position: 'relative',
            }}
          >
            <div style={{
              padding: '24px 32px',
              borderBottom: `1px solid ${BRAND.border}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              position: 'sticky', top: 0, background: '#fff', zIndex: 1,
            }}>
              <div>
                <div style={{ fontSize: 10, color: BRAND.gold, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
                  {['About Us', 'Careers', 'Press', 'Contact'].includes(contentModal) ? 'COMPANY' : 'SUPPORT'}
                </div>
                <h3 style={{
                  margin: 0,
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: 24, fontWeight: 700, color: BRAND.dark,
                }}>{FOOTER_CONTENT[contentModal].title}</h3>
              </div>
              <button
                onClick={() => setContentModal(null)}
                aria-label="Close"
                style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: BRAND.cream, border: `1px solid ${BRAND.border}`,
                  cursor: 'pointer', fontSize: 16, color: BRAND.muted,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>
            </div>
            <div style={{ padding: '24px 32px 32px' }}>
              {FOOTER_CONTENT[contentModal].body.map((p, i) => (
                <p key={i} style={{
                  margin: i === 0 ? '0 0 14px' : '0 0 14px',
                  fontSize: 14, lineHeight: 1.7, color: BRAND.text,
                }}>{p}</p>
              ))}
              <div style={{
                marginTop: 22, paddingTop: 18,
                borderTop: `1px solid ${BRAND.border}`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: 10,
              }}>
                <div style={{ fontSize: 11, color: BRAND.muted }}>
                  Last reviewed May 2026 · MyMarian Ethiopia
                </div>
                <button
                  onClick={() => setContentModal(null)}
                  style={{
                    background: BRAND.primary, color: '#fff',
                    border: 'none', borderRadius: 8,
                    padding: '8px 18px', fontSize: 12, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { LandingPage });
