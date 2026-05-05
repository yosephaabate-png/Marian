// Quiz & Assessment component

const QUESTIONS = [
  {
    q: 'Which phase of mitosis is characterized by chromosomes aligning at the cell\'s equatorial plate?',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    answer: 1,
    explanation: 'In Metaphase, chromosomes align along the metaphase plate (equatorial plane), which is essential for equal chromosome distribution to daughter cells.',
  },
  {
    q: 'What is the main difference between mitosis and meiosis?',
    options: [
      'Mitosis produces 4 daughter cells; meiosis produces 2',
      'Mitosis is for sexual reproduction; meiosis is for growth',
      'Mitosis produces 2 identical cells; meiosis produces 4 genetically unique cells',
      'Mitosis only occurs in plants; meiosis occurs in animals',
    ],
    answer: 2,
    explanation: 'Mitosis produces two genetically identical diploid cells for growth and repair. Meiosis produces four genetically unique haploid cells used in sexual reproduction.',
  },
  {
    q: 'Which of the following organelles is found in plant cells but NOT in animal cells?',
    options: ['Mitochondria', 'Cell wall', 'Nucleus', 'Ribosome'],
    answer: 1,
    explanation: 'Plant cells have a cell wall made of cellulose that provides structural support. Animal cells lack this structure but have a flexible cell membrane instead.',
  },
  {
    q: 'True or False: DNA replication occurs during the S phase of interphase.',
    options: ['True', 'False'],
    answer: 0,
    explanation: 'Correct! DNA synthesis (replication) happens during the Synthesis (S) phase of interphase, before the cell enters mitosis or meiosis.',
  },
  {
    q: 'What is the term for the division of the cytoplasm that occurs at the end of cell division?',
    options: ['Mitosis', 'Meiosis', 'Cytokinesis', 'Karyokinesis'],
    answer: 2,
    explanation: 'Cytokinesis is the physical process of cell division where the cytoplasm is divided between two daughter cells, completing the cell division process.',
  },
];

function Quiz({ navigate }) {
  const [current, setCurrent] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [answers, setAnswers] = React.useState([]);
  const [finished, setFinished] = React.useState(false);

  const q = QUESTIONS[current];
  const isCorrect = selected === q?.answer;
  const score = answers.filter((a, i) => a === QUESTIONS[i].answer).length;

  const handleSelect = (idx) => {
    if (showFeedback) return;
    setSelected(idx);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    if (current + 1 >= QUESTIONS.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  const handleRetake = () => {
    setCurrent(0);
    setSelected(null);
    setShowFeedback(false);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    const passed = pct >= 70;
    return (
      <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '48px 36px', maxWidth: 600, margin: '0 auto' }}>
        <Card style={{ padding: '40px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <EthiopianPattern opacity={0.04} color={BRAND.gold} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>{passed ? '🏆' : '📚'}</div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 28, margin: '0 0 8px', color: passed ? BRAND.primary : '#c0392b' }}>
              {passed ? 'Well Done!' : 'Keep Practising!'}
            </h2>
            <p style={{ color: BRAND.muted, margin: '0 0 28px', fontSize: 14 }}>Biology · Cell Division Quiz · Grade 9</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 32 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 42, fontWeight: 800, color: passed ? BRAND.primary : '#c0392b', fontFamily: 'Playfair Display, Georgia, serif' }}>{pct}%</div>
                <div style={{ fontSize: 12, color: BRAND.muted }}>Score</div>
              </div>
              <div style={{ width: 1, background: BRAND.border }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 42, fontWeight: 800, color: BRAND.gold, fontFamily: 'Playfair Display, Georgia, serif' }}>{score}/{QUESTIONS.length}</div>
                <div style={{ fontSize: 12, color: BRAND.muted }}>Correct</div>
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              {QUESTIONS.map((question, i) => {
                const correct = answers[i] === question.answer;
                return (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: `1px solid ${BRAND.border}`, textAlign: 'left' }}>
                    <span style={{ color: correct ? '#2e8b57' : '#c0392b', fontSize: 16, flexShrink: 0 }}>{correct ? '✓' : '✗'}</span>
                    <span style={{ fontSize: 13, color: BRAND.muted, lineHeight: 1.4 }}>{question.q.slice(0, 60)}…</span>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <CTAButton variant="outline" onClick={handleRetake}>Retake Quiz</CTAButton>
              <CTAButton variant="primary" onClick={() => navigate('dashboard')}>Back to Dashboard</CTAButton>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, padding: '32px 36px', maxWidth: 680, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, color: BRAND.primary, letterSpacing: 0.5 }}>BIOLOGY · GRADE 9</span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, margin: '2px 0 0', fontWeight: 700 }}>Cell Division Quiz</h2>
          </div>
          <span style={{ fontSize: 13, color: BRAND.muted, fontWeight: 600 }}>Question {current + 1} of {QUESTIONS.length}</span>
        </div>
        {/* Progress bar */}
        <ProgressBar value={current + (showFeedback ? 1 : 0)} max={QUESTIONS.length} color={BRAND.primary} height={8} />
      </div>

      <Card style={{ padding: '30px 28px' }}>
        {/* Question */}
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 24px', lineHeight: 1.5 }}>{q.q}</h3>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {q.options.map((opt, i) => {
            let bg = '#fff', border = BRAND.border, color = BRAND.text;
            if (showFeedback) {
              if (i === q.answer) { bg = '#e8f5ee'; border = '#2e8b57'; color = '#1a5c38'; }
              else if (i === selected && i !== q.answer) { bg = '#fef0ee'; border = '#c0392b'; color = '#8b1a1a'; }
            } else if (selected === i) {
              bg = `${BRAND.primary}0e`; border = BRAND.primary; color = BRAND.primary;
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                style={{
                  padding: '14px 18px', borderRadius: 9,
                  border: `2px solid ${border}`,
                  background: bg, color, textAlign: 'left',
                  fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 14, cursor: showFeedback ? 'default' : 'pointer',
                  transition: 'all 0.15s', fontWeight: selected === i || (showFeedback && i === q.answer) ? 600 : 400,
                  display: 'flex', alignItems: 'center', gap: 12,
                }}
              >
                <span style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  background: showFeedback && i === q.answer ? '#2e8b57' : showFeedback && i === selected ? '#c0392b' : selected === i ? BRAND.primary : '#f3f4f6',
                  color: (showFeedback && (i === q.answer || i === selected)) || selected === i ? '#fff' : BRAND.muted,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700,
                }}>
                  {showFeedback && i === q.answer ? '✓' : showFeedback && i === selected && i !== q.answer ? '✗' : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div style={{
            background: isCorrect ? '#e8f5ee' : '#fef0ee',
            border: `1.5px solid ${isCorrect ? '#2e8b57' : '#c0392b'}`,
            borderRadius: 9, padding: '14px 18px', marginBottom: 20,
          }}>
            <div style={{ fontWeight: 700, color: isCorrect ? '#1a5c38' : '#8b1a1a', marginBottom: 6, fontSize: 14 }}>
              {isCorrect ? '✓ Correct!' : '✗ Not quite — here\'s why:'}
            </div>
            <div style={{ fontSize: 13, color: isCorrect ? '#2e6b48' : '#7b2a2a', lineHeight: 1.6 }}>{q.explanation}</div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          {!showFeedback ? (
            <CTAButton
              variant="primary"
              onClick={() => setShowFeedback(true)}
              style={{ opacity: selected === null ? 0.5 : 1, cursor: selected === null ? 'not-allowed' : 'pointer' }}
            >
              Check Answer
            </CTAButton>
          ) : (
            <CTAButton variant="primary" onClick={handleNext}>
              {current + 1 >= QUESTIONS.length ? 'See Results' : 'Next Question →'}
            </CTAButton>
          )}
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { Quiz });
