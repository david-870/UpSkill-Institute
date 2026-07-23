import { Link } from 'react-router-dom'
import { Header, Footer, SectionHead } from '../components/Layout'
import { CountUp, Reveal } from '../hooks'
import { TICKER, STATS, RHYTHM, STEPS, COURSES, PODIUM } from '../data'

export default function Home() {
  return (
    <>
      <Header ticker={TICKER} />

      <section className="hero">
        <div className="wrap">
          <div className="live-pill">
            <span className="dot" /> Free 7-day orientation — your first ₦25,000 payout could land this Sunday
          </div>
          <h1>Learn a skill live.<br />Get <span className="accent">paid to win</span> every week.</h1>
          <p className="lede">
            Four in-demand tracks — Ethical Hacking, AI & Automation, Digital Marketing, Business & Sales.
            Top your class on Sunday and take home ₦25,000 in cash. Finish 1st and win ₦500,000.
            Try the first week free before you spend a naira.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn-primary">Start free orientation →</Link>
            <a href="#rewards" className="btn-ghost">See how the money works</a>
          </div>

          <Reveal className="stat-strip">
            {STATS.map(s => (
              <div className="stat" key={s.label}>
                <div className="stat-num"><CountUp target={s.target} prefix={s.prefix} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="rhythm">
            <div className="rhythm-head">
              <span className="label">Weekly rhythm</span>
              <span className="time mono">8:00 PM – 10:00 PM WAT</span>
            </div>
            <div className="rhythm-grid">
              {RHYTHM.map(d => (
                <div key={d.day} className={`rhythm-day ${d.type}`}>
                  <div className="d">{d.day}</div>
                  <div className="what">{d.what}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad" id="journey">
        <div className="wrap">
          <SectionHead eyebrow="Student journey" title="From sign-up to certificate, in one track"
            text="Every applicant moves through the same seven checkpoints — so you always know exactly what's next." />
          <div className="journey">
            {STEPS.map(s => (
              <Reveal key={s.n} className="step">
                <div className="num">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.tag && <span className="tag">{s.tag}</span>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad" id="courses">
        <div className="wrap">
          <SectionHead eyebrow="Career tracks" title="Four tracks. One live classroom each."
            text="Every course caps at 120 students so tutors can actually know your name and review your work." />
          <div className="course-grid">
            {COURSES.map(c => (
              <Reveal key={c.title} className="course-card">
                <div className="card-top">
                  <div className="c-icon" style={{ background: `${c.color}22` }}>
                    <span className="c-dot" style={{ background: c.color }} />
                  </div>
                  <span className="price-tag">{c.price}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="meta"><span>MAX 120</span><span>MON, TUE, THU, FRI · 8–10PM</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad" id="rewards">
        <div className="wrap">
          <SectionHead eyebrow="Rewards" title="Winning isn't just a grade here — it's a payout"
            text="Every batch runs on a leaderboard, so the work you put in Monday to Saturday is worth something concrete by Sunday night." />
          <Reveal className="payout-banner">
            <div className="payout-figure">
              <span className="mono">Total cash out, every Sunday</span>
              <div className="payout-amount"><CountUp target={100000} prefix="₦" /></div>
            </div>
            <p>₦25,000 × 4 classes, paid out live on the leaderboard call — win in week one if your work is good enough.</p>
          </Reveal>
          <Reveal className="reward-card weekly" style={{ marginBottom: 20 }}>
            <div className="k">Every Sunday, best student in each class</div>
            <div className="amount"><CountUp target={25000} prefix="₦" /></div>
            <p>Paid to the highest-performing student in each of the four tracks, based on that week's quiz and leaderboard standing.</p>
            <div className="prize-extra">
              {['4 winners weekly', '1 in ≤120 odds', 'Announced live'].map(c => <span key={c} className="chip">{c}</span>)}
            </div>
          </Reveal>
          <div className="podium-grid">
            {PODIUM.map(p => (
              <Reveal key={p.place} className={`podium-card ${p.cls}`}>
                <div className="place-badge">{p.place}</div>
                <div className="amount"><CountUp target={p.amount} prefix="₦" /></div>
                <p>{p.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead eyebrow="Beyond the classroom" title="Built to outlast the first batch"
            text="The first batch is a proof of concept. What we're building is a talent accelerator that keeps working for you after graduation." />
          <div className="support-grid">
            {[
              ['Mentorship & project reviews', 'Experienced tutors run Q&A sessions, group work, and one-on-one feedback on every assignment.'],
              ['Career support at graduation', 'Certificate in hand, graduates get help connecting to employers, freelance clients, and early business opportunities.'],
              ['A growing community', 'Campus ambassadors, university outreach, and referral partners mean you\'re never learning alone.'],
            ].map(([h, p]) => (
              <Reveal key={h} className="support-card">
                <h4>{h}</h4>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad" id="apply">
        <div className="wrap">
          <Reveal className="apply">
            <h2>Your first week costs nothing but your time.</h2>
            <p>Register, pick a track, and spend seven days inside the orientation before you decide on enrollment.</p>
            <Link to="/register" className="btn-primary">Register & join orientation →</Link>
            <div className="steps-mini">
              {['01 · REGISTER', '02 · CHOOSE TRACK', '03 · FREE 7-DAY ORIENTATION', '04 · ENROLL'].map(s => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
