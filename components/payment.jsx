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
    price: 1200,
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
    cta: 'Subscribe — 1,200 ብር/mo',
  },
  {
    id: 'premium',
    name: 'ፕሪሚየም',
    nameEn: 'Premium',
    price: 1700,
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
    cta: 'Subscribe — 1,700 ብር/mo',
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
    id: 'mpesa',
    name: 'M-PESA',
    nameAm: 'ኤም-ፔሳ',
    desc: 'Safaricom Ethiopia · Mobile money',
    icon: '📲',
    color: '#08a14d',
    ussd: '*733#',
    steps: ['Dial *733# or open the M-PESA app', 'Select "Lipa na M-PESA" → "Pay Bill"', 'Enter Business Number: 600 728', 'Enter Account: MYMARIAN-<phone>', 'Enter amount and confirm with M-PESA PIN'],
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

function PaymentPage({ navigate, onPaid }) {
  const [selectedPlan, setSelectedPlan] = React.useState('standard');
  const [selectedMethod, setSelectedMethod] = React.useState('telebirr');
  const [billing, setBilling] = React.useState('monthly'); // 'monthly' | 'annual'
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [voucherCode] = React.useState('MAR-' + Math.random().toString(36).slice(2, 8).toUpperCase());
  const [paid, setPaid] = React.useState(false);

  // Checkout flow: 'select' → 'verify' (phone) → 'reference' (txn ref) → 'done'
  const [step, setStep] = React.useState('select');
  const [phone, setPhone] = React.useState('');
  const [txnRef, setTxnRef] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [refError, setRefError] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const [verifying, setVerifying] = React.useState(false);

  const plan = PLANS.find(p => p.id === selectedPlan);
  const method = PAYMENT_METHODS.find(m => m.id === selectedMethod);

  // Ethiopian mobile: 9 digits (e.g. 911234567) or 10 with leading 0
  const normalizePhone = (raw) => raw.replace(/[^\d]/g, '').replace(/^251/, '').replace(/^0/, '');
  const isValidEthiopianMobile = (raw) => {
    const n = normalizePhone(raw);
    return n.length === 9 && (n.startsWith('9') || n.startsWith('7'));
  };
  const formattedPhone = phone ? `+251 ${normalizePhone(phone).replace(/(\d{2})(\d{3})(\d{4}).*/, '$1 $2 $3')}` : '';

  // Apply 10% annual discount
  const effectivePrice = billing === 'annual' ? Math.round(plan.price * 0.9) : plan.price;
  const billedTotal = billing === 'annual' ? effectivePrice * 12 : effectivePrice;
  const periodLabel = billing === 'annual' ? 'per month, billed annually' : 'per month';

  const requiresPhone = method.id !== 'voucher';

  // Selected summary card — shared between verify + reference screens
  const summaryCard = (
    <Card style={{ padding: '14px 18px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ fontSize: 24, width: 36, textAlign: 'center', flexShrink: 0 }}>{method.icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{plan.nameEn} · {method.name}</div>
        <div style={{ fontSize: 11, color: BRAND.muted }}>{billing === 'annual' ? `${effectivePrice.toLocaleString()} ብር × 12` : `${effectivePrice.toLocaleString()} ብር / mo`}</div>
      </div>
      <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18, fontWeight: 800, color: BRAND.dark }}>
        {billedTotal.toLocaleString()} <span style={{ fontSize: 12 }}>ብር</span>
      </div>
    </Card>
  );

  // Step 2 — Enter phone (or voucher holder) and send the payment request
  if (step === 'verify' && !paid) {
    const phoneValid = !requiresPhone || isValidEthiopianMobile(phone);
    const canSend = phoneValid && !sending;

    const handleSend = () => {
      if (!phoneValid) {
        setPhoneError('Enter a valid Ethiopian mobile number (e.g. 0912 345 678)');
        return;
      }
      setPhoneError('');
      setSending(true);
      // Simulate dispatching a payment request to TeleBirr/M-PESA/etc.
      setTimeout(() => {
        setSending(false);
        setStep('reference');
      }, 1100);
    };

    return (
      <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '28px 36px', maxWidth: 560, margin: '0 auto' }}>
        <button
          onClick={() => { setStep('select'); setPhoneError(''); }}
          style={{
            background: 'none', border: 'none', color: BRAND.muted, fontFamily: 'inherit',
            fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0, marginBottom: 14,
          }}
        >← Back to plan</button>

        <div style={{ marginBottom: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1 }}>STEP 1 OF 2</span>
            <span style={{ flex: 1, height: 3, background: BRAND.border, borderRadius: 2, overflow: 'hidden' }}>
              <span style={{ display: 'block', width: '50%', height: '100%', background: BRAND.primary }} />
            </span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 24, margin: '0 0 6px', color: BRAND.dark }}>
            {requiresPhone ? 'Send the payment request' : 'Confirm your voucher purchase'}
          </h1>
          <p style={{ color: BRAND.muted, fontSize: 13, margin: 0 }}>
            {requiresPhone
              ? `Enter the mobile number registered with ${method.name}. We'll push a payment request to it — approve it on your phone, then come back to enter the transaction reference.`
              : `Enter the number used to buy the voucher so we can match it to your purchase record.`}
          </p>
        </div>

        {summaryCard}

        <div style={{ marginBottom: 18 }}>
          <label htmlFor="pay-phone" style={{ display: 'block', fontSize: 12, fontWeight: 700, color: BRAND.dark, marginBottom: 6, letterSpacing: 0.3 }}>
            MOBILE NUMBER
          </label>
          <div style={{
            display: 'flex', alignItems: 'stretch',
            border: `2px solid ${phoneError ? '#d94e4e' : BRAND.border}`,
            borderRadius: 10, overflow: 'hidden', background: '#fff',
            transition: 'border-color 0.2s',
          }}>
            <div style={{
              background: BRAND.cream, padding: '0 14px',
              display: 'flex', alignItems: 'center',
              fontSize: 14, fontWeight: 700, color: BRAND.dark,
              borderRight: `1px solid ${BRAND.border}`,
            }}>🇪🇹 +251</div>
            <input
              id="pay-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="912 345 678"
              value={phone}
              onChange={e => { setPhone(e.target.value); if (phoneError) setPhoneError(''); }}
              style={{
                flex: 1, border: 'none', outline: 'none',
                padding: '12px 14px', fontSize: 15, color: BRAND.dark,
                background: 'transparent', fontFamily: 'inherit',
              }}
            />
          </div>
          {phoneError ? (
            <div style={{ fontSize: 12, color: '#d94e4e', marginTop: 6, fontWeight: 600 }}>{phoneError}</div>
          ) : (
            <div style={{ fontSize: 11, color: BRAND.muted, marginTop: 6 }}>
              Must match the {method.name} account that will pay. We never store this number on third-party servers.
            </div>
          )}
        </div>

        <CTAButton
          variant="gold"
          onClick={canSend ? handleSend : undefined}
          style={{
            width: '100%', fontSize: 16, padding: '15px 24px', textAlign: 'center',
            opacity: canSend ? 1 : 0.55, cursor: canSend ? 'pointer' : 'not-allowed',
          }}
          className="mm-btn"
        >
          {sending ? 'Sending payment request…' : `Send payment request via ${method.name} →`}
        </CTAButton>

        <p style={{ textAlign: 'center', fontSize: 11, color: BRAND.muted, marginTop: 12 }}>
          You'll receive a {method.ussd ? `${method.ussd} prompt` : 'push notification'} on {formattedPhone || 'your phone'}. Approve it to receive a transaction reference.
        </p>
      </div>
    );
  }

  // Step 3 — Enter the transaction reference returned by the payment provider
  if (step === 'reference' && !paid) {
    const refValid = txnRef.trim().length >= 6;
    const canSubmit = refValid && !verifying;

    const handleConfirm = () => {
      if (!refValid) {
        setRefError('Reference must be at least 6 characters. Check the confirmation SMS.');
        return;
      }
      setRefError('');
      setVerifying(true);
      setTimeout(() => {
        setVerifying(false);
        setPaid(true);
        setStep('done');
        onPaid && onPaid();
      }, 1100);
    };

    return (
      <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '28px 36px', maxWidth: 560, margin: '0 auto' }}>
        <button
          onClick={() => { setStep('verify'); setRefError(''); }}
          style={{
            background: 'none', border: 'none', color: BRAND.muted, fontFamily: 'inherit',
            fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0, marginBottom: 14,
          }}
        >← Back · change phone</button>

        <div style={{ marginBottom: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.gold, letterSpacing: 1 }}>STEP 2 OF 2</span>
            <span style={{ flex: 1, height: 3, background: BRAND.border, borderRadius: 2, overflow: 'hidden' }}>
              <span style={{ display: 'block', width: '100%', height: '100%', background: BRAND.primary }} />
            </span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 24, margin: '0 0 6px', color: BRAND.dark }}>
            Enter the transaction reference
          </h1>
          <p style={{ color: BRAND.muted, fontSize: 13, margin: 0 }}>
            Payment request sent to <strong style={{ color: BRAND.dark }}>{formattedPhone || 'your phone'}</strong>. Once you approve it, {method.name} sends you a confirmation SMS containing a reference — paste it below.
          </p>
        </div>

        {summaryCard}

        <div style={{
          background: `${BRAND.primary}10`, border: `1px solid ${BRAND.primary}33`,
          borderRadius: 10, padding: '12px 14px', marginBottom: 16,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: BRAND.primary, animation: 'mm-pulse-dot 1.6s ease infinite', flexShrink: 0 }} />
          <div style={{ fontSize: 12, color: BRAND.dark, fontWeight: 600 }}>
            Payment request sent. Awaiting your transaction reference…
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <label htmlFor="pay-ref" style={{ display: 'block', fontSize: 12, fontWeight: 700, color: BRAND.dark, marginBottom: 6, letterSpacing: 0.3 }}>
            {method.id === 'voucher' ? 'VOUCHER CODE' : 'TRANSACTION REFERENCE'}
          </label>
          <input
            id="pay-ref"
            type="text"
            placeholder={method.id === 'voucher' ? voucherCode : 'e.g. AB12CD34EF'}
            value={txnRef}
            onChange={e => { setTxnRef(e.target.value.toUpperCase()); if (refError) setRefError(''); }}
            autoFocus
            style={{
              width: '100%', border: `2px solid ${refError ? '#d94e4e' : BRAND.border}`,
              borderRadius: 10, padding: '12px 14px', fontSize: 16,
              color: BRAND.dark, fontFamily: 'inherit', background: '#fff',
              letterSpacing: 2, fontWeight: 600,
            }}
          />
          {refError ? (
            <div style={{ fontSize: 12, color: '#d94e4e', marginTop: 6, fontWeight: 600 }}>{refError}</div>
          ) : (
            <div style={{ fontSize: 11, color: BRAND.muted, marginTop: 6 }}>
              {method.id === 'voucher'
                ? 'The code printed on your voucher receipt.'
                : `Look for "Ref" or "Txn ID" in the SMS from ${method.name}.`}
            </div>
          )}
        </div>

        <CTAButton
          variant="gold"
          onClick={canSubmit ? handleConfirm : undefined}
          style={{
            width: '100%', fontSize: 16, padding: '15px 24px', textAlign: 'center',
            opacity: canSubmit ? 1 : 0.55, cursor: canSubmit ? 'pointer' : 'not-allowed',
          }}
          className="mm-btn"
        >
          {verifying ? 'Verifying…' : 'Confirm & Activate'}
        </CTAButton>

        <p style={{ textAlign: 'center', fontSize: 11, color: BRAND.muted, marginTop: 12 }}>
          Didn't receive a reference yet? <button onClick={() => { setStep('verify'); }} style={{ background: 'none', border: 'none', color: BRAND.primary, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, padding: 0, textDecoration: 'underline' }}>Resend payment request</button>
        </p>
      </div>
    );
  }

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
          <div style={{ fontWeight: 700, fontSize: 18, color: BRAND.primary }}>
            {plan.nameEn} — {effectivePrice.toLocaleString()} ብር/mo {billing === 'annual' ? '(billed annually)' : ''}
          </div>
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
      <div style={{ marginBottom: 22, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 26, margin: '0 0 6px', color: BRAND.dark }}>Choose Your Plan</h1>
        <p style={{ color: BRAND.muted, fontSize: 14, margin: 0 }}>All prices in Ethiopian Birr (ETB)</p>
      </div>

      {/* Billing toggle */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
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
                  padding: '7px 18px', borderRadius: 99,
                  border: 'none',
                  background: active ? BRAND.primary : 'transparent',
                  color: active ? '#fff' : BRAND.muted,
                  fontFamily: 'inherit', fontWeight: 700, fontSize: 12,
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
                    padding: '1px 7px', borderRadius: 99,
                    fontSize: 9, fontWeight: 800, letterSpacing: 0.4,
                  }}>−10%</span>
                )}
              </button>
            );
          })}
        </div>
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
                    <span style={{ fontSize: 32, fontWeight: 800, color: BRAND.dark, fontFamily: 'Playfair Display, Georgia, serif' }}>
                      <AnimatedCounter key={billing + p.id} value={billing === 'annual' ? Math.round(p.price * 0.9) : p.price} duration={600} />
                    </span>
                    <span style={{ fontSize: 11, color: BRAND.muted }}> /mo</span>
                    {billing === 'annual' && (
                      <div style={{
                        marginTop: 4, fontSize: 10, color: p.color, fontWeight: 700,
                        display: 'inline-block', background: `${p.color}14`,
                        padding: '2px 7px', borderRadius: 4, marginLeft: 0,
                      }}>
                        billed annually · save 10%
                      </div>
                    )}
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
                <div style={{ fontSize: 12, color: BRAND.muted, marginTop: 2 }}>
                  {billing === 'annual' ? 'Annual subscription · 12 months · 10% off' : 'Monthly subscription · Auto-renews'}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 800, color: BRAND.dark }}>
                  <AnimatedCounter key={billing + plan.id + 'sum'} value={billedTotal} duration={600} /> <span style={{ fontSize: 14 }}>ብር</span>
                </div>
                <div style={{ fontSize: 11, color: BRAND.muted }}>{billing === 'annual' ? `${effectivePrice.toLocaleString()} ብር × 12 mo` : 'per month'}</div>
              </div>
            </div>
          </Card>

          <CTAButton
            variant="gold"
            onClick={() => setStep('verify')}
            style={{ width: '100%', fontSize: 16, padding: '15px 24px', textAlign: 'center' }}
            className="mm-btn"
          >
            Continue — {billedTotal.toLocaleString()} ብር via {method.name} →
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
