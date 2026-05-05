// Signup flow — multi-step registration

const REGIONS = ['Addis Ababa', 'Oromia', 'Amhara', 'Tigray', 'SNNPR', 'Afar', 'Somali', 'Benishangul-Gumuz', 'Gambella', 'Harari', 'Dire Dawa'];
const SUBJECTS_ALL = ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'English', 'Amharic', 'History', 'Geography'];

const STEPS = ['Personal Info', 'School & Grade', 'Subjects', 'Payment'];

function Signup({ navigate }) {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({
    firstName: '', lastName: '', email: '', phone: '',
    school: '', region: '', grade: '', woreda: '',
    parentEmail: '', parentName: '',
    subjects: [],
    plan: 'standard',
    idPhoto: null,
  });
  const [errors, setErrors] = React.useState({});

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const toggleSubject = (s) => {
    setForm(f => ({
      ...f,
      subjects: f.subjects.includes(s) ? f.subjects.filter(x => x !== s) : [...f.subjects, s],
    }));
  };

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.firstName.trim()) e.firstName = 'Required';
      if (!form.lastName.trim()) e.lastName = 'Required';
      if (!form.email.includes('@')) e.email = 'Valid email required';
      if (!form.phone.trim()) e.phone = 'Required';
    }
    if (step === 1) {
      if (!form.school.trim()) e.school = 'Required';
      if (!form.grade) e.grade = 'Select a grade';
      if (!form.region) e.region = 'Select a region';
    }
    if (step === 2) {
      if (form.subjects.length === 0) e.subjects = 'Select at least one subject';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep(s => Math.min(s + 1, STEPS.length - 1)); };
  const back = () => setStep(s => Math.max(s - 1, 0));

  const inputStyle = (err) => ({
    width: '100%', padding: '11px 14px', borderRadius: 8,
    border: `1.5px solid ${err ? '#c0392b' : BRAND.border}`,
    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 14, outline: 'none',
    boxSizing: 'border-box', color: BRAND.text,
    background: '#fff',
  });

  const labelStyle = { fontSize: 12, fontWeight: 700, color: BRAND.muted, letterSpacing: 0.4, marginBottom: 5, display: 'block', textTransform: 'uppercase' };
  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: 4 };
  const errStyle = { fontSize: 11, color: '#c0392b', marginTop: 2 };

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '32px 36px', maxWidth: 580, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 28, margin: '0 0 6px', color: BRAND.dark }}>Create Your Account</h1>
        <p style={{ color: BRAND.muted, fontSize: 14, margin: 0 }}>Join thousands of Ethiopian students on MyMarian</p>
      </div>

      {/* Step indicators */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 32, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 16, left: '12.5%', right: '12.5%', height: 2, background: BRAND.border, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 16, left: '12.5%', width: `${(step / (STEPS.length - 1)) * 75}%`, height: 2, background: BRAND.primary, zIndex: 1, transition: 'width 0.4s' }} />
        {STEPS.map((s, i) => (
          <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, position: 'relative', zIndex: 2 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: i < step ? BRAND.primary : i === step ? BRAND.primary : '#fff',
              border: `2px solid ${i <= step ? BRAND.primary : BRAND.border}`,
              color: i <= step ? '#fff' : BRAND.muted,
              fontWeight: 700, fontSize: 13, transition: 'all 0.3s',
            }}>
              {i < step ? '✓' : i + 1}
            </div>
            <span style={{ fontSize: 11, fontWeight: i === step ? 700 : 400, color: i === step ? BRAND.primary : BRAND.muted, textAlign: 'center' }}>{s}</span>
          </div>
        ))}
      </div>

      <Card style={{ padding: '28px 26px' }}>
        {/* Step 0: Personal Info */}
        {step === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={{ margin: '0 0 4px', fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18 }}>Personal Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>First Name</label>
                <input style={inputStyle(errors.firstName)} value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Selamawit" />
                {errors.firstName && <span style={errStyle}>{errors.firstName}</span>}
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Last Name</label>
                <input style={inputStyle(errors.lastName)} value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Tadesse" />
                {errors.lastName && <span style={errStyle}>{errors.lastName}</span>}
              </div>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Email Address</label>
              <input style={inputStyle(errors.email)} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="selamawit@example.com" />
              {errors.email && <span style={errStyle}>{errors.email}</span>}
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Phone Number (TeleBirr / CBE)</label>
              <input style={inputStyle(errors.phone)} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+251 9XX XXX XXX" />
              {errors.phone && <span style={errStyle}>{errors.phone}</span>}
            </div>
            <div style={{ background: BRAND.cream, borderRadius: 8, padding: '12px 14px', fontSize: 12, color: BRAND.muted }}>
              <strong>Under 18?</strong> Your parent/guardian will receive a consent email.
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Parent / Guardian Email (optional)</label>
              <input style={inputStyle(false)} value={form.parentEmail} onChange={e => set('parentEmail', e.target.value)} placeholder="parent@example.com" />
            </div>
          </div>
        )}

        {/* Step 1: School & Grade */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={{ margin: '0 0 4px', fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18 }}>School & Location</h3>
            <div style={fieldStyle}>
              <label style={labelStyle}>School Name</label>
              <input style={inputStyle(errors.school)} value={form.school} onChange={e => set('school', e.target.value)} placeholder="e.g. Menelik II Secondary School" />
              {errors.school && <span style={errStyle}>{errors.school}</span>}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Region</label>
                <select style={inputStyle(errors.region)} value={form.region} onChange={e => set('region', e.target.value)}>
                  <option value="">Select region...</option>
                  {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                {errors.region && <span style={errStyle}>{errors.region}</span>}
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Woreda / Zone</label>
                <input style={inputStyle(false)} value={form.woreda} onChange={e => set('woreda', e.target.value)} placeholder="e.g. Bole Woreda" />
              </div>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Grade Level</label>
              <div style={{ display: 'flex', gap: 10 }}>
                {[9,10,11,12].map(g => (
                  <button
                    key={g}
                    onClick={() => set('grade', g)}
                    style={{
                      flex: 1, padding: '12px 8px', borderRadius: 8,
                      border: `2px solid ${form.grade === g ? BRAND.primary : BRAND.border}`,
                      background: form.grade === g ? `${BRAND.primary}10` : '#fff',
                      color: form.grade === g ? BRAND.primary : BRAND.muted,
                      fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 15, cursor: 'pointer',
                    }}
                  >G{g}</button>
                ))}
              </div>
              {errors.grade && <span style={errStyle}>{errors.grade}</span>}
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>ID Photo (for certificate issuance)</label>
              <div style={{
                border: `2px dashed ${BRAND.border}`, borderRadius: 8, padding: '20px',
                textAlign: 'center', color: BRAND.muted, fontSize: 13, cursor: 'pointer',
              }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>📷</div>
                <div>Click to upload a passport-size photo</div>
                <div style={{ fontSize: 11, marginTop: 3 }}>JPG or PNG, max 2MB</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Subjects */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={{ margin: '0 0 4px', fontFamily: 'Playfair Display, Georgia, serif', fontSize: 18 }}>Choose Your Subjects</h3>
            <p style={{ margin: 0, fontSize: 13, color: BRAND.muted }}>Select the subjects you want to enroll in. Your plan determines how many you can access.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {SUBJECTS_ALL.map(s => {
                const active = form.subjects.includes(s);
                const color = SUBJECT_COLORS[s] || BRAND.primary;
                return (
                  <button
                    key={s}
                    onClick={() => toggleSubject(s)}
                    style={{
                      padding: '13px 16px', borderRadius: 9,
                      border: `2px solid ${active ? color : BRAND.border}`,
                      background: active ? `${color}12` : '#fff',
                      color: active ? color : BRAND.text,
                      fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: active ? 700 : 500,
                      fontSize: 14, cursor: 'pointer', textAlign: 'left',
                      display: 'flex', alignItems: 'center', gap: 10,
                      transition: 'all 0.15s',
                    }}
                  >
                    <span style={{
                      width: 20, height: 20, borderRadius: 4, flexShrink: 0,
                      background: active ? color : '#f3f4f6',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, color: active ? '#fff' : BRAND.muted,
                    }}>{active ? '✓' : ''}</span>
                    {s}
                  </button>
                );
              })}
            </div>
            {errors.subjects && <span style={errStyle}>{errors.subjects}</span>}
            <div style={{ fontSize: 12, color: BRAND.muted, background: BRAND.cream, padding: '10px 14px', borderRadius: 8 }}>
              <strong>Free plan:</strong> up to 3 subjects · <strong>Standard/Premium:</strong> all subjects
            </div>
          </div>
        )}

        {/* Step 3: Payment — goes to PaymentPage component */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
            <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, margin: '0 0 8px' }}>Almost there!</h3>
            <p style={{ color: BRAND.muted, fontSize: 14, margin: '0 0 24px' }}>Your profile is ready. Choose a subscription plan to complete registration.</p>
            <CTAButton variant="gold" onClick={() => navigate('payment')} style={{ fontSize: 16, padding: '14px 32px' }}>
              Choose a Plan & Pay
            </CTAButton>
          </div>
        )}

        {/* Navigation */}
        {step < 3 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
            {step > 0
              ? <CTAButton variant="ghost" onClick={back}>← Back</CTAButton>
              : <div />}
            <CTAButton variant="primary" onClick={next}>
              {step === 2 ? 'Finish Profile →' : 'Continue →'}
            </CTAButton>
          </div>
        )}
      </Card>

      <p style={{ textAlign: 'center', fontSize: 12, color: BRAND.muted, marginTop: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
        <span>Already have an account?</span>
        <button onClick={() => navigate('dashboard')} style={{ background: 'none', border: 'none', color: BRAND.primary, fontWeight: 700, cursor: 'pointer', fontSize: 12, fontFamily: 'inherit', padding: 0 }}>Sign in</button>
      </p>
    </div>
  );
}

Object.assign(window, { Signup });
