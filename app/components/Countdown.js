'use client'

import { useState, useEffect } from 'react'
import { CONFIG } from '../../config'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date(CONFIG.date.fullDate).getTime()

    function updateCountdown() {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20 text-center bg-gradient-to-r from-secondary to-primary text-white">
      <div className="container mx-auto px-5 max-w-7xl">
        {/* Date */}
        <div className="mb-12">
          <div className="text-base md:text-xl tracking-[0.3em] mb-4 uppercase font-semibold">
            {CONFIG.date.day} DE {CONFIG.date.month} DE {CONFIG.date.year}
          </div>
          <p className="font-heading text-xl md:text-3xl font-light italic leading-relaxed">
            {CONFIG.subtitle}
          </p>
        </div>

        {/* Countdown */}
        <h2 className="text-sm md:text-base tracking-[0.5em] mb-10 font-light">
          FALTAN…
        </h2>
        <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
          <div className="min-w-[80px]">
            <div className="font-heading text-5xl md:text-6xl font-light leading-none mb-2">
              {timeLeft.days}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">
              Días
            </div>
          </div>
          <div className="min-w-[80px]">
            <div className="font-heading text-5xl md:text-6xl font-light leading-none mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">
              Horas
            </div>
          </div>
          <div className="min-w-[80px]">
            <div className="font-heading text-5xl md:text-6xl font-light leading-none mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">
              Minutos
            </div>
          </div>
          <div className="min-w-[80px]">
            <div className="font-heading text-5xl md:text-6xl font-light leading-none mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">
              Segundos
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
