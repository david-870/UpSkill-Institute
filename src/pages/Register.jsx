import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Footer } from '../components/Layout'
import { TELEGRAM_URL, TRACKS } from '../data'

const empty = { name: '', email: '', phone: '', track: '', goal: '' }

export default function Register() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) e.phone = 'Valid phone number is required'
    if (!form.track) e.track = 'Pick a career track'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setSubmitting(true)
    sessionStorage.setItem('upskill_applicant', JSON.stringify({ ...form, submittedAt: new Date().toISOString() }))

    const msg = [
      '🎓 New UpSkill Applicant',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Track: ${form.track}`,
      form.goal ? `Goal: ${form.goal}` : '',
    ].filter(Boolean).join('\n')

    window.location.href = `${TELEGRAM_URL}?text=${encodeURIComponent(msg)}`
  }

  return (
    <>
      <Header />
      <section className="register-page">
        <div className="wrap register-wrap">
          <Link to="/" className="back-link">← Back to home</Link>

          <div className="register-card">
            <div className="register-intro">
              <div className="eyebrow">Free orientation</div>
              <h1>Register & join Telegram</h1>
              <p>Fill in your details below. On submit you'll be taken straight to our Telegram community to start your free 7-day orientation.</p>
              <ul className="register-perks">
                <li>7 days free — no payment upfront</li>
                <li>Meet tutors & see the full curriculum</li>
                <li>Only 120 seats per course</li>
              </ul>
            </div>

            <form className="register-form" onSubmit={handleSubmit} noValidate>
              <label>
                Full name
                <input type="text" value={form.name} onChange={set('name')} placeholder="Ada Okonkwo" autoComplete="name" />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </label>

              <label>
                Email address
                <input type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" autoComplete="email" />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </label>

              <label>
                WhatsApp / phone number
                <input type="tel" value={form.phone} onChange={set('phone')} placeholder="0801 234 5678" autoComplete="tel" />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </label>

              <label>
                Career track
                <select value={form.track} onChange={set('track')}>
                  <option value="">Select a track</option>
                  {TRACKS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.track && <span className="field-error">{errors.track}</span>}
              </label>

              <label>
                What do you want to achieve? <span className="optional">(optional)</span>
                <textarea value={form.goal} onChange={set('goal')} rows={3} placeholder="e.g. Land a remote cybersecurity role within 6 months" />
              </label>

              <button type="submit" className="btn-primary btn-full" disabled={submitting}>
                {submitting ? 'Opening Telegram…' : 'Submit & join Telegram →'}
              </button>
              <p className="form-note">You'll be redirected to Telegram with your details pre-filled so our team can welcome you.</p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
