import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import { ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


/* ── Stats shown on the hero overlay ─────────────────────────── */
const stats = [
  { value: '500+', label: 'Women Trained' },
  { value: '100+', label: 'Businesses Started' },
  { value: '3+',   label: 'Cities Reached' },
]

const Hero = () => {
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const btnRef     = useRef(null)
  const statsRef   = useRef(null)

  useEffect(() => {
    const els = [headingRef, subRef, btnRef, statsRef]
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0'
        ref.current.style.transform = 'translateY(30px)'
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
            ref.current.style.opacity = '1'
            ref.current.style.transform = 'translateY(0)'
          }
        }, 200 + i * 180)
      }
    })
  }, [])

  const scrollDown = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background image (placeholder gradient + pattern) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1600&q=80&auto=format"
          alt="African women empowerment"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Deep overlay for readability */}
        <div className="absolute inset-0 bg-purple-900/90" />
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-20 -left-16 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Badge */}

          {/* Main headline */}
          <h1
            ref={subRef}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Empowering <span className="italic text-pink-500">Women.</span>
            <br />
            Building <span className="italic text-pink-500">Nations.</span>
          </h1>

          <p
            ref={btnRef}
            className="text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl"
          >
            A movement raised to restore, equip, and connect women
            for lasting transformation. Though skills, faith, and community,

            <span className="font-bold"> SHE </span> <span className='text-pink-500 font-bold'>Thrive</span>  raises women who don't just survive, they thrive and build.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="white"
              size="lg"
              onClick={() => {
                const el = document.getElementById('programs')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Join The Movement
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!text-purple-800"
              onClick={() => {
                const el = document.getElementById('events')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Register For Our Upcoming Events
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="mt-20 flex flex-wrap gap-6 sm:gap-12"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-white">
              <p className="font-serif text-4xl font-bold text-pink-500">{value}</p>
              <p className="text-white/70 text-sm mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default Hero
