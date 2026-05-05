// Course Player component

const TRANSCRIPT = [
  { time: '0:00', text: 'Welcome to Lesson 17: Mitosis and Meiosis. Today we will explore how cells divide and reproduce.' },
  { time: '0:45', text: 'All living organisms are made of cells. Cell division is essential for growth, repair, and reproduction.' },
  { time: '1:30', text: 'Mitosis is the process by which a single cell divides into two identical daughter cells.' },
  { time: '2:15', text: 'There are four key phases of mitosis: Prophase, Metaphase, Anaphase, and Telophase — remember PMAT.' },
  { time: '3:00', text: 'During Prophase, chromosomes condense and become visible. The nuclear envelope begins to break down.' },
  { time: '3:45', text: 'In Metaphase, chromosomes align along the cell\'s equatorial plane, known as the metaphase plate.' },
  { time: '4:30', text: 'Anaphase begins when sister chromatids are pulled to opposite poles of the cell.' },
  { time: '5:15', text: 'Finally, in Telophase, two new nuclear envelopes form, and cytokinesis divides the cytoplasm.' },
];

const NOTES_KEY = 'mymarian_notes_bio9_17';

function CoursePlayer({ navigate }) {
  const [showTranscript, setShowTranscript] = React.useState(true);
  const [showNotes, setShowNotes] = React.useState(false);
  const [noteText, setNoteText] = React.useState(() => localStorage.getItem(NOTES_KEY) || '');
  const [activeTranscript, setActiveTranscript] = React.useState(2);
  const [playing, setPlaying] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);

  const saveNote = (val) => {
    setNoteText(val);
    localStorage.setItem(NOTES_KEY, val);
  };

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {/* Breadcrumb bar */}
      <div style={{ background: BRAND.dark, padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <button onClick={() => navigate('dashboard')} style={{ background: 'none', border: 'none', color: '#ffffff60', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Dashboard</button>
        <span style={{ color: '#ffffff30', fontSize: 13 }}>/</span>
        <span style={{ color: '#ffffff60', fontSize: 13 }}>Biology · Grade 9</span>
        <span style={{ color: '#ffffff30', fontSize: 13 }}>/</span>
        <span style={{ color: BRAND.gold, fontSize: 13, fontWeight: 600 }}>Lesson 17: Mitosis & Meiosis</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <button
            onClick={() => setBookmarked(b => !b)}
            style={{ background: 'none', border: 'none', color: bookmarked ? BRAND.gold : '#ffffff60', fontSize: 18, cursor: 'pointer' }}
          >{bookmarked ? '★' : '☆'}</button>
        </div>
      </div>

      {/* Main content area */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
        {/* Left: Video + SCORM */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto', minWidth: 0 }}>
          {/* Video panel */}
          <div style={{ background: '#000', position: 'relative', aspectRatio: '16/9', flexShrink: 0 }}>
            {/* Simulated video frame */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #071f14 0%, #0d3d26 50%, #1a5c38 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <TiletPattern opacity={0.04} color={BRAND.gold} />
              {/* Avatar video panel (left) */}
              <div style={{ position: 'absolute', left: 24, top: 24, bottom: 24, width: 180,
                background: '#0d3d26', borderRadius: 12, border: `2px solid ${BRAND.gold}33`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', gap: 12 }}>
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: BRAND.primary, border: `3px solid ${BRAND.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>👩🏾‍🏫</div>
                <div style={{ color: '#fff', fontSize: 12, fontWeight: 600, textAlign: 'center', padding: '0 8px' }}>Dr. Hiwot Bekele</div>
                <div style={{ color: `${BRAND.gold}aa`, fontSize: 10 }}>Biology Instructor</div>
                {playing && (
                  <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 20, marginTop: 4 }}>
                    {[1,2,3,4,5].map(i => (
                      <div key={i} style={{
                        width: 4, background: BRAND.gold, borderRadius: 2,
                        height: `${Math.random() * 16 + 4}px`,
                        animation: `wave ${0.5 + i * 0.1}s ease-in-out infinite alternate`,
                      }} />
                    ))}
                  </div>
                )}
              </div>

              {/* Center content */}
              <div style={{ textAlign: 'center', padding: '0 220px 0 220px' }}>
                <div style={{ fontSize: 13, color: `${BRAND.gold}aa`, fontWeight: 500, letterSpacing: 1, marginBottom: 8 }}>GRADE 9 · BIOLOGY</div>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 26, color: '#fff', fontWeight: 700, lineHeight: 1.3 }}>
                  Mitosis & Meiosis
                </div>
                <div style={{ color: '#ffffff70', fontSize: 13, marginTop: 8 }}>Cell Division — Part 1</div>
              </div>

              {/* Play button */}
              <button
                onClick={() => setPlaying(p => !p)}
                style={{
                  position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
                  width: 52, height: 52, borderRadius: '50%',
                  background: BRAND.gold, border: 'none', cursor: 'pointer',
                  fontSize: 20, color: BRAND.dark,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 24px ${BRAND.gold}66`,
                }}
              >{playing ? '⏸' : '▶'}</button>

              {/* Progress bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#ffffff20' }}>
                <div style={{ width: '38%', height: '100%', background: BRAND.gold }} />
              </div>

              {/* Time */}
              <div style={{ position: 'absolute', bottom: 8, right: 16, color: '#ffffffaa', fontSize: 12 }}>3:22 / 8:45</div>
            </div>
          </div>

          {/* Lesson nav */}
          <div style={{ padding: '12px 20px', background: '#fafafa', borderBottom: `1px solid ${BRAND.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <button style={{ background: 'none', border: `1.5px solid ${BRAND.border}`, borderRadius: 6, padding: '6px 14px', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', color: BRAND.muted }}>← Previous</button>
            <span style={{ fontSize: 13, color: BRAND.muted }}>Lesson 17 of 24</span>
            <button style={{ background: BRAND.primary, border: 'none', borderRadius: 6, padding: '6px 14px', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', color: '#fff', fontWeight: 600 }}>Next Lesson →</button>
          </div>

          {/* SCORM activity area */}
          <div style={{ padding: 20, flexShrink: 0 }}>
            <div style={{ background: BRAND.cream, borderRadius: 10, border: `1px solid ${BRAND.border}`, padding: 24, position: 'relative', overflow: 'hidden' }}>
              <TiletPattern opacity={0.03} color={BRAND.primary} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>Interactive Activity: Label the Cell</h3>
                  <span style={{ fontSize: 11, color: BRAND.muted, background: '#e5e7eb', padding: '3px 10px', borderRadius: 99 }}>SCORM · 10 min</span>
                </div>
                {/* Simulated SCORM embed */}
                <div style={{
                  background: '#fff', borderRadius: 8, border: `1px dashed ${BRAND.border}`,
                  height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: 8, color: BRAND.muted,
                }}>
                  <div style={{ fontSize: 32 }}>🔬</div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Cell Diagram Labeling Activity</div>
                  <div style={{ fontSize: 11, color: BRAND.muted }}>Open edX SCORM module · Drag labels to correct organelles</div>
                  <CTAButton small variant="primary" style={{ marginTop: 6 }}>Launch Activity</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar: Transcript / Notes */}
        <div style={{
          width: 300, borderLeft: `1px solid ${BRAND.border}`, display: 'flex', flexDirection: 'column',
          background: '#fafafa', flexShrink: 0, overflow: 'hidden',
        }}>
          {/* Tab switcher */}
          <div style={{ display: 'flex', borderBottom: `1px solid ${BRAND.border}`, flexShrink: 0 }}>
            {[['Transcript', true], ['My Notes', false]].map(([label, isTranscript]) => (
              <button
                key={label}
                onClick={() => { setShowTranscript(isTranscript); setShowNotes(!isTranscript); }}
                style={{
                  flex: 1, padding: '13px 8px', border: 'none',
                  background: (isTranscript ? showTranscript : showNotes) ? '#fff' : 'transparent',
                  borderBottom: (isTranscript ? showTranscript : showNotes) ? `2px solid ${BRAND.primary}` : '2px solid transparent',
                  color: (isTranscript ? showTranscript : showNotes) ? BRAND.primary : BRAND.muted,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 600, fontSize: 13, cursor: 'pointer',
                }}
              >{label}</button>
            ))}
          </div>

          {/* Transcript panel */}
          {showTranscript && (
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {TRANSCRIPT.map((line, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTranscript(i)}
                  style={{
                    padding: '10px 12px', borderRadius: 8, cursor: 'pointer',
                    background: activeTranscript === i ? `${BRAND.primary}12` : 'transparent',
                    borderLeft: activeTranscript === i ? `3px solid ${BRAND.primary}` : '3px solid transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: 10, color: BRAND.gold, fontWeight: 700, marginBottom: 3 }}>{line.time}</div>
                  <div style={{ fontSize: 12.5, lineHeight: 1.6, color: activeTranscript === i ? BRAND.text : BRAND.muted }}>
                    {line.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Notes panel */}
          {showNotes && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 16, gap: 10 }}>
              <div style={{ fontSize: 11, color: BRAND.muted, fontWeight: 600 }}>Notes auto-saved to your profile</div>
              <textarea
                value={noteText}
                onChange={e => saveNote(e.target.value)}
                placeholder="Write your notes here... (saved automatically)"
                style={{
                  flex: 1, resize: 'none', border: `1.5px solid ${BRAND.border}`,
                  borderRadius: 8, padding: 12, fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 13, lineHeight: 1.6, color: BRAND.text,
                  background: '#fff', outline: 'none',
                }}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <CTAButton small variant="primary" style={{ flex: 1 }}>Export PDF</CTAButton>
                <CTAButton small variant="ghost">Clear</CTAButton>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes wave {
          from { transform: scaleY(0.3); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { CoursePlayer });
