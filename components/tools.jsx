// Interactive Tools component

const TOOLS = [
  { id: 't1', subject: 'Physics', title: 'Projectile Motion Simulator', desc: 'Adjust launch angle and velocity. Watch the trajectory in real time.', grade: [9,10], time: '15 min', icon: '🎯' },
  { id: 't2', subject: 'Biology', title: 'Cell Anatomy Explorer', desc: 'Click organelles to learn their functions. Zoom into animal and plant cells.', grade: [9,10,11], time: '20 min', icon: '🔬' },
  { id: 't3', subject: 'Mathematics', title: 'Function Grapher', desc: 'Plot any function and explore transformations interactively.', grade: [10,11,12], time: '25 min', icon: '📈' },
  { id: 't4', subject: 'Chemistry', title: 'Periodic Table Interactive', desc: 'Explore element properties, electron configurations, and bonding.', grade: [10,11,12], time: '20 min', icon: '⚗️' },
  { id: 't5', subject: 'Physics', title: 'Ohm\'s Law Circuit Builder', desc: 'Build virtual circuits and measure voltage, current, resistance.', grade: [11,12], time: '30 min', icon: '⚡' },
  { id: 't6', subject: 'Biology', title: 'DNA Replication Animation', desc: 'Step through DNA replication with interactive enzyme labeling.', grade: [10,11], time: '15 min', icon: '🧬' },
  { id: 't7', subject: 'Mathematics', title: 'Geometry Proof Builder', desc: 'Drag points, construct shapes, and verify geometric proofs.', grade: [9,10], time: '20 min', icon: '📐' },
  { id: 't8', subject: 'Chemistry', title: 'Molecular Bond Visualizer', desc: 'Build molecules in 3D and explore covalent and ionic bonds.', grade: [11,12], time: '25 min', icon: '🔭' },
];

function InteractiveTools({ grade, navigate }) {
  const [filterSubject, setFilterSubject] = React.useState('All');
  const [filterGrade, setFilterGrade] = React.useState('All');
  const subjects = ['All', 'Physics', 'Biology', 'Mathematics', 'Chemistry'];

  const filtered = TOOLS.filter(t => {
    const subMatch = filterSubject === 'All' || t.subject === filterSubject;
    const gradeMatch = filterGrade === 'All' || t.grade.includes(Number(filterGrade));
    return subMatch && gradeMatch;
  });

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '28px 36px' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 26, margin: '0 0 6px', fontWeight: 700 }}>Interactive Learning Tools</h1>
        <p style={{ margin: 0, color: BRAND.muted, fontSize: 14 }}>Subject-specific simulations, diagrams, and explorations</p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: BRAND.muted, fontWeight: 600 }}>Subject:</span>
        {subjects.map(s => (
          <button
            key={s}
            onClick={() => setFilterSubject(s)}
            style={{
              padding: '6px 14px', borderRadius: 99, border: `1.5px solid ${filterSubject === s ? SUBJECT_COLORS[s] || BRAND.primary : BRAND.border}`,
              background: filterSubject === s ? `${SUBJECT_COLORS[s] || BRAND.primary}14` : '#fff',
              color: filterSubject === s ? SUBJECT_COLORS[s] || BRAND.primary : BRAND.muted,
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: 13, cursor: 'pointer',
            }}
          >{s}</button>
        ))}
        <span style={{ fontSize: 13, color: BRAND.muted, fontWeight: 600, marginLeft: 8 }}>Grade:</span>
        {['All', '9', '10', '11', '12'].map(g => (
          <button
            key={g}
            onClick={() => setFilterGrade(g)}
            style={{
              padding: '6px 14px', borderRadius: 99, border: `1.5px solid ${filterGrade === g ? BRAND.primary : BRAND.border}`,
              background: filterGrade === g ? `${BRAND.primary}12` : '#fff',
              color: filterGrade === g ? BRAND.primary : BRAND.muted,
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: 13, cursor: 'pointer',
            }}
          >{g === 'All' ? 'All' : `G${g}`}</button>
        ))}
      </div>

      {/* Tools grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18 }}>
        {filtered.map(tool => {
          const subColor = SUBJECT_COLORS[tool.subject] || BRAND.primary;
          return (
            <Card key={tool.id} style={{ padding: 0, cursor: 'pointer' }}>
              <div style={{ background: `${subColor}12`, padding: '20px 20px 16px', borderBottom: `1px solid ${subColor}22` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 32 }}>{tool.icon}</span>
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {tool.grade.map(g => (
                      <span key={g} style={{
                        background: `${subColor}22`, color: subColor,
                        fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 99,
                      }}>G{g}</span>
                    ))}
                  </div>
                </div>
                <h3 style={{ margin: '12px 0 4px', fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{tool.title}</h3>
                <span style={{
                  background: `${subColor}18`, color: subColor,
                  fontSize: 10, fontWeight: 700, padding: '2px 9px', borderRadius: 99, letterSpacing: 0.4,
                }}>{tool.subject.toUpperCase()}</span>
              </div>
              <div style={{ padding: '14px 20px 18px' }}>
                <p style={{ margin: '0 0 14px', fontSize: 13, color: BRAND.muted, lineHeight: 1.6 }}>{tool.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: BRAND.muted }}>⏱ {tool.time}</span>
                  <CTAButton small variant="primary">Launch Tool</CTAButton>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: BRAND.muted }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
          <div style={{ fontWeight: 600 }}>No tools match your filters</div>
          <div style={{ fontSize: 13, marginTop: 4 }}>Try adjusting the subject or grade filter</div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { InteractiveTools });
