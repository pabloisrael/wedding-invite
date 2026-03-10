'use client'
import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('reveal-hidden')
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal-hidden ${className}`}>{children}</div>
}
