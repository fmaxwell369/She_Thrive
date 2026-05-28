import React, { useState } from 'react'
import { useTranslation } from 'react-i18next' 
import { Quote, ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react'
import { impactStats, testimonials } from '../data'
import useCountUp from './useCountUp'

/* ── Single animated stat ─────────────────────────────────────── */
const StatItem = ({ value, suffix, labelKey, icon }) => {
  const { t } = useTranslation()
  const { ref, count } = useCountUp(value)

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl mb-3">{icon}</div>
      <p className="font-serif text-5xl sm:text-6xl font-black text-white leading-none">
        {count}
        <span className="text-pink-500">{suffix}</span>
      </p>
      {/* Traduction dynamique du label */}
      <p className="text-purple-200 font-medium mt-2 text-sm uppercase tracking-wider">{t(labelKey)}</p>
    </div>
  )
}

/* ── Testimonial card ─────────────────────────────────────────── */
const TestimonialCard = ({ testimonial, active }) => {
  const { t } = useTranslation()
  
  return (
    <div
      className={`transition-all duration-500 ${
        active ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
      } bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-purple-100 max-w-2xl mx-auto`}
    >
      <Quote size={36} className="text-pink-500 mb-6" />
      {/* Traduction dynamique du témoignage */}
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-light italic mb-8">
        "{t(testimonial.quoteKey)}"
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover ring-4 ring-pink-100"
        />
        <div>
          <p className="font-serif font-bold text-gray-900 text-lg">{testimonial.name}</p>
          {/* Traduction dynamique du rôle */}
          <p className="text-sm text-gray-500">{t(testimonial.roleKey)}</p>
          <div className="flex items-center gap-1 mt-1">
            <MapPin size={11} className="text-pink-500" />
            <span className="text-xs text-pink-500 font-medium">{t(testimonial.city)}</span>
          </div>
        </div>
        {/* Stars */}
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main section ─────────────────────────────────────────────── */
const Impact = () => {
  const { t } = useTranslation() // 2. Initialisation du hook principal
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <>
      {/* ── Stats band ────────────────────────────────────────── */}
      <section id="impact" className="py-20 bg-gradient-to-br from-purple-800 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white"
              style={{
                width:  `${100 + i * 80}px`,
                height: `${100 + i * 80}px`,
                top:    `${10 + i * 5}%`,
                left:   `${5 + i * 15}%`,
              }}
            />
          ))}
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="inline-block text-xs font-medium text-pink-500 uppercase tracking-widest mb-3">
              {t('impact.stats_top_label')}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              {t('impact.stats_title')}
            </h2>
            <p className="text-purple-200 max-w-lg mx-auto">
              {t('impact.stats_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 animate-on-scroll">
            {impactStats.map((stat) => (
              <StatItem key={stat.labelKey} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section id="testimonials" className="section-padding bg-gradient-to-b from-purple-50/40 to-white overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14 animate-on-scroll">
            <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
              {t('impact.testi_top_label')}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">
              {t('impact.testi_title')}
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              {t('impact.testi_subtitle')}
            </p>
          </div>

          {/* Carousel */}
          <div className="relative min-h-[340px] animate-on-scroll">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} active={i === active} />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 flex items-center justify-center transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-purple-600' : 'w-2 bg-purple-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Impact