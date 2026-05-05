// Student Dashboard component for MyMarian

const COURSES = {
  9: [
    { id: 'bio9', subject: 'Biology', title: 'Cell Structure & Function', progress: 72, nextLesson: 'Mitosis & Meiosis', lessons: 24, done: 17 },
    { id: 'math9', subject: 'Mathematics', title: 'Algebra Fundamentals', progress: 45, nextLesson: 'Quadratic Equations', lessons: 30, done: 13 },
    { id: 'eng9', subject: 'English', title: 'Reading Comprehension', progress: 88, nextLesson: 'Essay Writing', lessons: 20, done: 17 },
    { id: 'phys9', subject: 'Physics', title: 'Motion & Forces', progress: 30, nextLesson: 'Newton\'s Laws', lessons: 28, done: 8 },
    { id: 'hist9', subject: 'History', title: 'Ancient Ethiopia', progress: 60, nextLesson: 'Aksumite Empire', lessons: 18, done: 11 },
    { id: 'amh9', subject: 'Amharic', title: 'ቋንቋ አማርኛ', progress: 55, nextLesson: 'ድርሰት ጽሑፍ', lessons: 22, done: 12 },
  ],
  10: [
    { id: 'bio10', subject: 'Biology', title: 'Genetics & Heredity', progress: 60, nextLesson: 'DNA Replication', lessons: 26, done: 15 },
    { id: 'math10', subject: 'Mathematics', title: 'Trigonometry', progress: 35, nextLesson: 'Sine & Cosine', lessons: 32, done: 11 },
    { id: 'chem10', subject: 'Chemistry', title: 'Atomic Structure', progress: 78, nextLesson: 'Periodic Table', lessons: 24, done: 18 },
    { id: 'phys10', subject: 'Physics', title: 'Waves & Sound', progress: 50, nextLesson: 'Wave Properties', lessons: 30, done: 15 },
  ],
  11: [
    { id: 'math11', subject: 'Mathematics', title: 'Calculus I', progress: 40, nextLesson: 'Derivatives', lessons: 36, done: 14 },
    { id: 'phys11', subject: 'Physics', title: 'Electricity', progress: 65, nextLesson: 'Ohm\'s Law', lessons: 28, done: 18 },
    { id: 'chem11', subject: 'Chemistry', title: 'Organic Chemistry', progress: 25, nextLesson: 'Functional Groups', lessons: 30, done: 7 },
  ],
  12: [
    { id: 'math12', subject: 'Mathematics', title: 'Calculus II', progress: 55, nextLesson: 'Integration', lessons: 38, done: 20 },
    { id: 'phys12', subject: 'Physics', title: 'Modern Physics', progress: 30, nextLesson: 'Quantum Theory', lessons: 32, done: 9 },
    { id: 'bio12', subject: 'Biology', title: 'Evolution & Ecology', progress: 70, nextLesson: 'Natural Selection', lessons: 26, done: 18 },
  ],
};

const QUIZZES = [
  { subject: 'Biology', title: 'Cell Division Quiz', due: 'Tomorrow, 4:00 PM', questions: 20, grade: 9 },
  { subject: 'Mathematics', title: 'Algebra Mid-term', due: 'May 6, 10:00 AM', questions: 35, grade: 9 },
  { subject: 'Physics', title: 'Forces Assessment', due: 'May 8, 2:00 PM', questions: 25, grade: 9 },
];

const WEEKLY_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const WEEKLY_MINUTES = [45, 70, 30, 90, 55, 20, 0];

function Dashboard({ grade, setGrade, navigate }) {
  const courses = COURSES[grade] || COURSES[9];
  const totalProgress = Math.round(courses.reduce((s, c) => s + c.progress, 0) / courses.length);
  const streak = 12;
  const weeklyGoal = 300; // minutes
  const weeklyDone = WEEKLY_MINUTES.reduce((a, b) => a + b, 0);

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: BRAND.text, minHeight: '100%' }}>
      {/* Header strip */}
      <div style={{
        background: BRAND.dark,
        padding: '28px 36px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <EthiopianPattern opacity={0.08} color={BRAND.gold} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ color: `${BRAND.gold}cc`, fontSize: 13, fontWeight: 500, margin: '0 0 4px', letterSpacing: 0.5 }}>GOOD MORNING</p>
              <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#fff', fontSize: 28, margin: 0, fontWeight: 700 }}>
                Selamawit Tadesse
              </h1>
              <p style={{ color: '#ffffff80', fontSize: 13, margin: '4px 0 0', fontWeight: 400 }}>
                Addis Ababa — Grade {grade} Student · Marian Academy
              </p>
            </div>
            {/* Streak badge */}
            <div style={{
              background: `${BRAND.gold}22`,
              border: `1.5px solid ${BRAND.gold}55`,
              borderRadius: 12,
              padding: '12px 20px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 28 }}>🔥</div>
              <div style={{ color: BRAND.gold, fontWeight: 800, fontSize: 22, lineHeight: 1 }}>{streak}</div>
              <div style={{ color: '#ffffff80', fontSize: 11, marginTop: 2 }}>day streak</div>
            </div>
          </div>

          {/* Grade selector */}
          <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
            {[9, 10, 11, 12].map(g => (
              <GradeBadge key={g} grade={g} active={grade === g} onClick={() => setGrade(g)} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '28px 36px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { label: 'Overall Progress', value: `${totalProgress}%`, sub: `${courses.length} courses`, color: BRAND.primary },
            { label: 'Weekly Study Goal', value: `${weeklyDone}m`, sub: `Goal: ${weeklyGoal}m / week`, color: BRAND.gold },
            { label: 'Upcoming Quizzes', value: QUIZZES.length, sub: 'This week', color: '#c0392b' },
          ].map(stat => (
            <Card key={stat.label} style={{ padding: '20px 22px' }}>
              <div style={{ fontSize: 12, color: BRAND.muted, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>{stat.label}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: stat.color, margin: '6px 0 2px', fontFamily: 'Playfair Display, Georgia, serif' }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: BRAND.muted }}>{stat.sub}</div>
              {stat.label === 'Overall Progress' && <ProgressBar value={totalProgress} color={BRAND.primary} style={{ marginTop: 10 }} />}
              {stat.label === 'Weekly Study Goal' && <ProgressBar value={weeklyDone} max={weeklyGoal} color={BRAND.gold} style={{ marginTop: 10 }} />}
            </Card>
          ))}
        </div>

        {/* Weekly activity */}
        <Card style={{ padding: '22px 26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>Weekly Study Activity</h3>
            <span style={{ fontSize: 12, color: BRAND.muted }}>Minutes per day</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', height: 72 }}>
            {WEEKLY_DAYS.map((day, i) => {
              const max = Math.max(...WEEKLY_MINUTES);
              const h = WEEKLY_MINUTES[i] ? Math.max(8, (WEEKLY_MINUTES[i] / max) * 72) : 4;
              const isToday = i === 5;
              return (
                <div key={day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: '100%', height: h,
                    background: isToday ? BRAND.gold : WEEKLY_MINUTES[i] > 0 ? BRAND.primary : '#e5e7eb',
                    borderRadius: '4px 4px 0 0',
                    opacity: isToday ? 1 : 0.75,
                    transition: 'height 0.4s ease',
                  }} />
                  <span style={{ fontSize: 10, color: isToday ? BRAND.gold : BRAND.muted, fontWeight: isToday ? 700 : 400 }}>{day}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Last visited */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h2 style={{ margin: 0, fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, fontWeight: 700 }}>Continue Learning</h2>
          </div>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 0 }}>
              <div style={{
                width: 6,
                background: SUBJECT_COLORS['Biology'],
                flexShrink: 0,
              }} />
              <div style={{ padding: '20px 24px', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                    <span style={{
                      background: `${SUBJECT_COLORS['Biology']}18`,
                      color: SUBJECT_COLORS['Biology'],
                      padding: '2px 10px', borderRadius: 99,
                      fontSize: 11, fontWeight: 700, letterSpacing: 0.3,
                    }}>BIOLOGY</span>
                    <span style={{ fontSize: 11, color: BRAND.muted }}>Grade {grade} · Lesson 17 of 24</span>
                  </div>
                  <h3 style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 700 }}>Cell Structure & Function</h3>
                  <p style={{ margin: 0, color: BRAND.muted, fontSize: 13 }}>Next: Mitosis & Meiosis</p>
                  <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <ProgressBar value={72} color={SUBJECT_COLORS['Biology']} />
                    <span style={{ fontSize: 12, color: BRAND.muted, whiteSpace: 'nowrap' }}>72% complete</span>
                  </div>
                </div>
                <CTAButton onClick={() => navigate('player')} variant="primary" style={{ whiteSpace: 'nowrap' }}>
                  ▶ Resume Lesson
                </CTAButton>
              </div>
            </div>
          </Card>
        </div>

        {/* Enrolled courses */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ margin: 0, fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, fontWeight: 700 }}>
              Grade {grade} Courses
            </h2>
            <span style={{ fontSize: 12, color: BRAND.muted }}>{courses.length} enrolled</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {courses.map(course => {
              const subColor = SUBJECT_COLORS[course.subject] || BRAND.primary;
              return (
                <Card key={course.id} style={{ padding: 0, cursor: 'pointer' }} onClick={() => navigate('player')}>
                  <div style={{ display: 'flex', alignItems: 'stretch' }}>
                    <div style={{ width: 5, background: subColor, borderRadius: '12px 0 0 12px', flexShrink: 0 }} />
                    <div style={{ padding: '16px 18px', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span style={{
                          background: `${subColor}18`, color: subColor,
                          padding: '2px 9px', borderRadius: 99,
                          fontSize: 10, fontWeight: 700, letterSpacing: 0.4,
                        }}>{course.subject.toUpperCase()}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: subColor }}>{course.progress}%</span>
                      </div>
                      <h4 style={{ margin: '8px 0 4px', fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{course.title}</h4>
                      <p style={{ margin: '0 0 10px', fontSize: 11, color: BRAND.muted }}>Next: {course.nextLesson}</p>
                      <ProgressBar value={course.progress} color={subColor} height={5} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                        <span style={{ fontSize: 10, color: BRAND.muted }}>{course.done}/{course.lessons} lessons</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Upcoming quizzes */}
        <div>
          <h2 style={{ margin: '0 0 14px', fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, fontWeight: 700 }}>
            Upcoming Assessments
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {QUIZZES.map((q, i) => {
              const subColor = SUBJECT_COLORS[q.subject] || BRAND.primary;
              return (
                <Card key={i} style={{ padding: '14px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${subColor}18`, color: subColor,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 20,
                      }}>📋</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{q.title}</div>
                        <div style={{ fontSize: 12, color: BRAND.muted, marginTop: 2 }}>
                          <span style={{ color: subColor, fontWeight: 600 }}>{q.subject}</span> · {q.questions} questions · Grade {q.grade}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: BRAND.muted }}>Due: {q.due}</span>
                      <CTAButton onClick={() => navigate('quiz')} small variant="primary">Start Quiz</CTAButton>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard });
