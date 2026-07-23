import { useEffect, useRef, useState } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect() } },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, show]
}

export function CountUp({ target, prefix = '' }) {
  const [ref, show] = useReveal(0.4)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!show) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setVal(target); return }
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 1300, 1)
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
      else setVal(target)
    }
    requestAnimationFrame(tick)
  }, [show, target])

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString('en-NG')}
    </span>
  )
}

export function Reveal({ children, className = '' }) {
  const [ref, show] = useReveal()
  return (
    <div ref={ref} className={`reveal ${show ? 'show' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
