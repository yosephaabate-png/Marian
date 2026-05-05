// Tutor / Class Sessions component

const TUTORS = [
  { name: 'Dr. Hiwot Bekele', subject: 'Biology', grades: [9,10,11], rating: 4.9, sessions: 312, specialty: 'Cell Biology & Genetics', available: true },
  { name: 'Ato Yonas Alemu', subject: 'Mathematics', grades: [10,11,12], rating: 4.8, sessions: 274, specialty: 'Calculus & Trigonometry', available: true },
  { name: 'W/ro Tigist Hailu', subject: 'Physics', grades: [9,10,11,12], rating: 4.7, sessions: 198, specialty: 'Mechanics & Electricity', available: false },
  { name: 'Dr. Samuel Tesfaye', subject: 'Chemistry', grades: [10,11,12], rating: 4.9, sessions: 156, specialty: 'Organic & Inorganic Chem', available: true },
  { name: 'W/rt Mekdes Girma', subject: 'English', grades: [9,10], rating: 4.6, sessions: 231, specialty: 'Essay Writing & Literature', available: true },
  { name: 'Ato Biruk Wolde', subject: 'Amharic', grades: [9,10,11,12], rating: 4.8, sessions: 189, specialty: 'ቋንቋ ሰዋሰው · ድርሰት', available: false },
];

const SESSIONS = [
  { tutor: 'Dr. Hiwot Bekele', subject: 'Biology', topic: 'Genetics & Heredity Deep Dive', date: 'Mon, May 6', time: '4:00 PM – 5:30 PM', enrolled: 12, max: 20, grade: 10 },
  { tutor: 'Ato Yonas Alemu', subject: 'Mathematics', topic: 'Calculus: Derivatives Practice', date: 'Tue, May 7', time: '5:00 PM – 6:30 PM', enrolled: 8, max: 15, grade: 11 },
  { tutor: 'W/ro Tigist Hailu', subject: 'Physics', topic: 'Electricity & Ohm\'s Law', date: 'Wed, May 8', time: '3:30 PM – 5:00 PM', enrolled: 15, max: 20, grade: 11 },
  { tutor: 'Dr. Samuel Tesfaye', subject: 'Chemistry', topic: 'Organic Compounds Intro', date: 'Thu, May 9', time: '4:30 PM – 6:00 PM', enrolled: 6, max: 15, grade: 11 },
];

const RECORDINGS = [
  { tutor: 'Dr. Hiwot Bekele', subject: 'Biology', topic: 'Cell Division — Mitosis & Meiosis', date: 'Apr 29, 2026', duration: '1h 22m', grade: 9 },
  { tutor: 'Ato Yonas Alemu', subject: 'Mathematics', topic: 'Quadratic Equations Workshop', date: 'Apr 27, 2026', duration: '1h 10m', grade: 9 },
  { tutor: 'W/ro Tigist Hailu', subject: 'Physics', topic: 'Newton\'s Laws Problem Solving', date: 'Apr 24, 2026', duration: '1h 35m', grade: 9 },
  { tutor: 'Dr. Samuel Tesfaye', subject: 'Chemistry', topic: 'Atomic Structure & Bonding', date: 'Apr 22, 2026', duration: '58m', grade: 10 },
];

function TutorSessions({ grade }) {
  const [tab, setTab] = React.useState('upcoming');
  const [joinModal, setJoinModal] = React.useState(null);
  const [searchRec, setSearchRec] = React.useState('');

  const filteredRec = RECORDINGS.filter(r =>
    r.topic.toLowerCase().includes(searchRec.toLowerCase()) ||
    r.subject.toLowerCase().includes(searchRec.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '28px 36px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 26, margin: '0 0 6px', fontWeight: 700 }}>Live Tutor Sessions</h1>
        <p style={{ margin: 0, color: BRAND.muted, fontSize: 14 }}>Join live classes, browse tutors, and revisit recordings</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${BRAND.border}`, marginBottom: 24 }}>
        {[['upcoming', 'Upcoming Sessions'], ['tutors', 'Our Tutors'], ['recordings', 'Recordings']].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              padding: '10px 20px', border: 'none', background: 'none',
              borderBottom: tab === key ? `2.5px solid ${BRAND.primary}` : '2.5px solid transparent',
              color: tab === key ? BRAND.primary : BRAND.muted,
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: 14, cursor: 'pointer',
            }}
          >{label}</button>
        ))}
      </div>

      {/* Upcoming sessions */}
      {tab === 'upcoming' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {SESSIONS.map((s, i) => {
            const subColor = SUBJECT_COLORS[s.subject] || BRAND.primary;
            const spotsLeft = s.max - s.enrolled;
            return (
              <Card key={i} style={{ padding: '18px 22px' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {/* Date block */}
                  <div style={{
                    background: `${subColor}14`, borderRadius: 10, padding: '10px 14px',
                    textAlign: 'center', minWidth: 68, flexShrink: 0,
                  }}>
                    <div style={{ fontSize: 10, color: subColor, fontWeight: 700, letterSpacing: 0.5 }}>{s.date.split(',')[0].toUpperCase()}</div>
                    <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 700, color: BRAND.dark, lineHeight: 1 }}>
                      {s.date.split(' ')[1]}
                    </div>
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                      <span style={{
                        background: `${subColor}18`, color: subColor,
                        fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99,
                      }}>{s.subject.toUpperCase()}</span>
                      <span style={{ fontSize: 11, color: BRAND.muted }}>Grade {s.grade}</span>
                    </div>
                    <h3 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700 }}>{s.topic}</h3>
                    <div style={{ fontSize: 12, color: BRAND.muted }}>
                      <span style={{ marginRight: 12 }}>👤 {s.tutor}</span>
                      <span style={{ marginRight: 12 }}>⏰ {s.time}</span>
                      <span style={{ color: spotsLeft <= 5 ? '#c0392b' : BRAND.muted }}>
                        {spotsLeft} spots left
                      </span>
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <ProgressBar value={s.enrolled} max={s.max} color={subColor} height={5} />
                    </div>
                  </div>
                  {/* Join button */}
                  <CTAButton variant="gold" onClick={() => setJoinModal(s)}>Join Session</CTAButton>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Tutors grid */}
      {tab === 'tutors' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {TUTORS.map((t, i) => {
            const subColor = SUBJECT_COLORS[t.subject] || BRAND.primary;
            return (
              <Card key={i} style={{ padding: '22px 20px' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
                  <div style={{ position: 'relative' }}>
                    <Avatar name={t.name} size={52} bg={subColor} />
                    <div style={{
                      position: 'absolute', bottom: 0, right: 0, width: 13, height: 13,
                      background: t.available ? '#2e8b57' : '#9ca3af',
                      borderRadius: '50%', border: '2px solid #fff',
                    }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{t.name}</div>
                    <span style={{ background: `${subColor}18`, color: subColor, fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>
                      {t.subject.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: BRAND.muted, marginBottom: 10 }}>{t.specialty}</div>
                <div style={{ display: 'flex', gap: 10, fontSize: 12, color: BRAND.muted, marginBottom: 14 }}>
                  <Stars rating={t.rating} />
                  <span>·</span>
                  <span>{t.sessions} sessions</span>
                  <span>·</span>
                  <span style={{ color: t.available ? '#2e8b57' : '#9ca3af', fontWeight: 600 }}>
                    {t.available ? 'Available' : 'Offline'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                  {t.grades.map(g => (
                    <span key={g} style={{ fontSize: 10, background: '#f3f4f6', color: BRAND.muted, padding: '2px 8px', borderRadius: 99, fontWeight: 600 }}>
                      Grade {g}
                    </span>
                  ))}
                </div>
                <CTAButton small variant={t.available ? 'primary' : 'ghost'} style={{ width: '100%' }}>
                  {t.available ? 'Book 1-on-1 Session' : 'View Schedule'}
                </CTAButton>
              </Card>
            );
          })}
        </div>
      )}

      {/* Recordings */}
      {tab === 'recordings' && (
        <div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              placeholder="Search recordings by subject or topic..."
              value={searchRec}
              onChange={e => setSearchRec(e.target.value)}
              style={{
                width: '100%', padding: '10px 16px', borderRadius: 8, border: `1.5px solid ${BRAND.border}`,
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 14, outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {filteredRec.map((r, i) => {
              const subColor = SUBJECT_COLORS[r.subject] || BRAND.primary;
              return (
                <Card key={i} style={{ padding: '14px 20px' }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: `${subColor}14`, color: subColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0,
                    }}>▶</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{r.topic}</div>
                      <div style={{ fontSize: 12, color: BRAND.muted }}>
                        <span style={{ color: subColor, fontWeight: 600 }}>{r.subject}</span>
                        {' · '}{r.tutor}{' · '}{r.date}{' · '}Grade {r.grade}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 12, color: BRAND.muted, marginBottom: 6 }}>⏱ {r.duration}</div>
                      <CTAButton small variant="outline">Watch</CTAButton>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Join modal */}
      {joinModal && (
        <div style={{
          position: 'fixed', inset: 0, background: '#00000066', zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        }} onClick={() => setJoinModal(null)}>
          <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', maxWidth: 420, width: '100%' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, margin: '0 0 8px' }}>Join Session</h3>
            <p style={{ color: BRAND.muted, fontSize: 13, margin: '0 0 20px' }}>{joinModal.topic}</p>
            <div style={{ background: BRAND.cream, borderRadius: 10, padding: '14px 16px', marginBottom: 20, fontSize: 13 }}>
              <div><strong>Tutor:</strong> {joinModal.tutor}</div>
              <div><strong>Time:</strong> {joinModal.time}</div>
              <div><strong>Date:</strong> {joinModal.date}</div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <CTAButton variant="outline" onClick={() => setJoinModal(null)} style={{ flex: 1 }}>Cancel</CTAButton>
              <CTAButton variant="gold" style={{ flex: 1 }}>Join via Zoom</CTAButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { TutorSessions });
