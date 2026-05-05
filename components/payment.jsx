// Payment page — Ethiopian payment methods

const PLANS = [
  {
    id: 'free',
    name: 'ነጻ',
    nameEn: 'Free',
    price: 0,
    period: 'ሁልጊዜ',
    periodEn: 'Forever',
    color: BRAND.muted,
    features: [
      '3 subjects only',
      'Video lessons & SCORM',
      'Interactive tools',
      'No live tutor sessions',
      'No certificate issuance',
    ],
    missing: [3, 4],
    cta: 'Start Free',
  },
  {
    id: 'standard',
    name: 'መደበኛ',
    nameEn: 'Standard',
    price: 299,
    period: 'በወር',
    periodEn: 'per month',
    color: BRAND.primary,
    popular: true,
    features: [
      'All 8 subjects',
      'Video lessons & SCORM',
      'Interactive tools',
      'Quiz & assessments',
      'Session recordings',
      'Certificate issuance',
    ],
    missing: [],
    cta: 'Subscribe — 299 ብር/mo',
  },
  {
    id: 'premium',
    name: 'ፕሪሚየም',
    nameEn: 'Premium',
    price: 549,
    period: 'በወር',
    periodEn: 'per month',
    color: BRAND.gold,
    features: [
      'Everything in Standard',
      'Live tutor sessions',
      '1-on-1 booking',
      'Priority support',
      'Downloadable materials',
      'Certificate issuance',
    ],
    missing: [],
    cta: 'Subscribe — 549 ብር/mo',
  },
];

const PAYMENT_METHODS = [
  {
    id: 'telebirr',
    name: 'TeleBirr',
    nameAm: 'ቴሌብር',
    desc: 'Ethio Telecom · Primary method',
    icon: '📱',
    color: '#00A859',
    primary: true,
    ussd: '*127#',
    steps: ['Dial *127# on your phone', 'Select "Pay Bill"', 'Enter Merchant Code: 48291', 'Enter amount and confirm with PIN'],
  },
  {
    id: 'cbebirr',
    name: 'CBE Birr',
    nameAm: 'ሲቢኢ ብር',
    desc: 'Commercial Bank of Ethiopia',
    icon: '🏦',
    color: '#1e6fa3',
    steps: ['Open CBE Birr app', 'Select "Pay Merchant"', 'Enter MyMarian code: CBE-MAR-2026', 'Confirm payment'],
  },
  {
    id: 'amole',
    name: 'Amole',
    nameAm: 'አሞሌ',
    desc: 'Dashen Bank · Digital wallet',
    icon: '💳',
    color: '#7b3fa0',
    steps: ['Open Amole app', 'Select "Bill Payment"', 'Search "MyMarian"', 'Enter amount and confirm'],
  },
  {
    id: 'voucher',
    name: 'Voucher / Agent',
    nameAm: 'ቮቸር',
    desc: 'Pay at any agent location',
    icon: '🎟️',
    color: '#8b6914',
    steps: ['Print or screenshot your voucher code', 'Visit any MyMarian agent location', 'Pay in cash and provide your code', 'Activation within 2 hours'],
  },
];

function PaymentPage({ navigate }) {
  const [selectedPlan, setSelectedPlan] = React.useState('standard');
  const [selectedMethod, setSelectedMethod] = React.useState('telebirr');
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [voucherCode] = React.useState('MAR-' + Math.random().toString(36).slice(2, 8).toUpperCase());
  const [paid, setPaid] = React.useState(false);

  const plan = PLANS.find(p => p.id === selectedPlan);
  const method = PAYMENT_METHODS.find(m => m.id === selectedMethod);

  if (paid) {
    return (
      <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '60px 36px', textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: `${BRAND.primary}18`, border: `3px solid ${BRAND.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto' }}>✅</div>
        </div>
        <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 28, margin: '0 0 8px', color: BRAND.primary }}>Payment Confirmed!</h2>
        <p style={{ color: BRAND.muted, fontSize: 14, margin: '0 0 28px' }}>
          Welcome to MyMarian {plan.nameEn}. Your account is now active.
        </p>
        <div style={{ background: BRAND.cream, borderRadius: 12, padding: '20px', marginBottom: 28 }}>
          <div style={{ fontSize: 12, color: BRAND.muted, marginBottom: 6 }}>PLAN ACTIVATED</div>
          <div style={{ fontWeight: 700, fontSize: 18, color: BRAND.primary }}>{plan.nameEn} — {plan.price} ብር/mo</div>
          <div style={{ fontSize: 12, color: BRAND.muted, marginTop: 4 }}>via {method.name}</div>
        </div>
        <CTAButton variant="gold" onClick={() => navigate('dashboard')} style={{ fontSize: 16, padding: '14px 40px' }}>
          Go to Dashboard
        </CTAButton>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '28px 36px', maxWidth: 780, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 28, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 26, margin: '0 0 6px', color: BRAND.dark }}>Choose Your Plan</h1>
        <p style={{ color: BRAND.muted, fontSize: 14, margin: 0 }}>All prices in Ethiopian Birr (ETB)</p>
      </div>

      {/* Plan cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 32 }}>
        {PLANS.map(p => {
          const active = selectedPlan === p.id;
          return (
            <div
              key={p.id}
              onClick={() => setSelectedPlan(p.id)}
              style={{
                borderRadius: 12, border: `2.5px solid ${active ? p.color : BRAND.border}`,
                background: active ? `${p.color}08` : '#fff',
                padding: '20px 18px', cursor: 'pointer', position: 'relative',
                transition: 'all 0.2s',
                boxShadow: active ? `0 4px 20px ${p.color}22` : 'none',
              }}
            >
              {p.popular && (
                <div style={{
                  position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)',
                  background: BRAND.primary, color: '#fff', fontSize: 10, fontWeight: 700,
                  padding: '3px 12px', borderRadius: 99, letterSpacing: 0.5, whiteSpace: 'nowrap',
                }}>MOST POPULAR</div>
              )}
              <div style={{ fontSize: 13, fontWeight: 700, color: p.color, letterSpacing: 0.3 }}>{p.nameEn} · {p.name}</div>
              <div style={{ marginTop: 8, marginBottom: 14 }}>
                {p.price === 0 ? (
                  <span style={{ fontSize: 28, fontWeight: 800, color: BRAND.dark, fontFamily: 'Playfair Display, Georgia, serif' }}>ነጻ</span>
                ) : (
                  <>
                    <span style={{ fontSize: 11, color: BRAND.muted, verticalAlign: 'super' }}>ብር</span>
                    <span style={{ fontSize: 32, fontWeight: 800, color: BRAND.dark, fontFamily: 'Playfair Display, Georgia, serif' }}>{p.price}</span>
                    <span style={{ fontSize: 12, color: BRAND.muted }}> {p.periodEn}</span>
                  </>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {p.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                    <span style={{ color: p.missing.includes(i) ? '#d1d5db' : p.color, fontSize: 14, flexShrink: 0 }}>
                      {p.missing.includes(i) ? '✗' : '✓'}
                    </span>
                    <span style={{ fontSize: 12, color: p.missing.includes(i) ? BRAND.muted : BRAND.text, lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>
              {active && (
                <div style={{ marginTop: 14, background: p.color, color: '#fff', fontSize: 12, fontWeight: 700, padding: '5px 0', borderRadius: 6, textAlign: 'center' }}>
                  ✓ Selected
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Payment method selection */}
      {selectedPlan !== 'free' && (
        <>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, margin: '0 0 14px' }}>Payment Method</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
            {PAYMENT_METHODS.map(m => {
              const active = selectedMethod === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedMethod(m.id)}
                  style={{
                    borderRadius: 10, border: `2px solid ${active ? m.color : BRAND.border}`,
                    background: active ? `${m.color}08` : '#fff',
                    padding: '14px 16px', cursor: 'pointer',
                    display: 'flex', gap: 12, alignItems: 'center',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontSize: 26, width: 36, textAlign: 'center', flexShrink: 0 }}>{m.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: active ? m.color : BRAND.text }}>{m.name}</span>
                      {m.primary && <span style={{ background: '#e8f5ee', color: '#2e8b57', fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 99 }}>PRIMARY</span>}
                    </div>
                    <div style={{ fontSize: 11, color: BRAND.muted, marginTop: 2 }}>{m.desc}</div>
                    {m.ussd && <div style={{ fontSize: 11, color: m.color, fontWeight: 700, marginTop: 3 }}>USSD: {m.ussd}</div>}
                  </div>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${active ? m.color : BRAND.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {active && <div style={{ width: 9, height: 9, borderRadius: '50%', background: m.color }} />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Instructions toggle */}
          <div style={{ marginBottom: 20 }}>
            <button
              onClick={() => setShowInstructions(s => !s)}
              style={{ background: 'none', border: 'none', color: BRAND.primary, fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}
            >
              {showInstructions ? '▼' : '▶'} How to pay with {method.name}
            </button>
            {showInstructions && (
              <div style={{ marginTop: 10, background: BRAND.cream, borderRadius: 10, padding: '16px 18px' }}>
                {method.id === 'voucher' && (
                  <div style={{ background: '#fff', borderRadius: 8, border: `2px dashed ${BRAND.gold}`, padding: '12px 16px', marginBottom: 12, textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: BRAND.muted, marginBottom: 4 }}>YOUR VOUCHER CODE</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 800, color: BRAND.dark, letterSpacing: 4 }}>{voucherCode}</div>
                    <div style={{ fontSize: 11, color: BRAND.muted, marginTop: 4 }}>Print this or save it — valid for 7 days</div>
                  </div>
                )}
                <ol style={{ margin: 0, padding: '0 0 0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {method.steps.map((step, i) => (
                    <li key={i} style={{ fontSize: 13, color: BRAND.text, lineHeight: 1.5 }}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Order summary */}
          <Card style={{ padding: '18px 20px', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>MyMarian {plan.nameEn}</div>
                <div style={{ fontSize: 12, color: BRAND.muted, marginTop: 2 }}>Monthly subscription · Auto-renews</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 800, color: BRAND.dark }}>{plan.price} <span style={{ fontSize: 14 }}>ብር</span></div>
                <div style={{ fontSize: 11, color: BRAND.muted }}>per month</div>
              </div>
            </div>
          </Card>

          <CTAButton
            variant="gold"
            onClick={() => setPaid(true)}
            style={{ width: '100%', fontSize: 16, padding: '15px 24px', textAlign: 'center' }}
          >
            Complete Payment — {plan.price} ብር via {method.name}
          </CTAButton>

          <p style={{ textAlign: 'center', fontSize: 11, color: BRAND.muted, marginTop: 12 }}>
            Secure payment · Cancel anytime · No hidden fees · MyMarian Ethiopia
          </p>
        </>
      )}

      {selectedPlan === 'free' && (
        <div style={{ textAlign: 'center' }}>
          <CTAButton variant="primary" onClick={() => navigate('dashboard')} style={{ fontSize: 16, padding: '14px 40px' }}>
            Start with Free Plan
          </CTAButton>
          <p style={{ fontSize: 12, color: BRAND.muted, marginTop: 10 }}>Upgrade anytime from your profile settings</p>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { PaymentPage });
