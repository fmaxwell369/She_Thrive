import React from 'react'
import { useTranslation } from 'react-i18next' // 1. Import du hook
import ProgramCard from './ProgramCard'
import WhatWeDo from './WhatWeDo'
import { programs } from '../data'
import Button from './Button'

const Programs = () => {
  const { t } = useTranslation() // 2. Initialisation du hook

  const handleJoin = (program) => {
    // Utilise la clé traduite pour les logs si nécessaire
    console.log('Join program:', t(program.titleKey))
    const el = document.getElementById('get-involved')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section id="programs" className="section-padding bg-gradient-to-b from-purple-50/60 to-white overflow-hidden">
        <div className="container-max">

          {/* Header */}
          <div className="text-center mb-14 animate-on-scroll">
            <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
              {t('programs.top_label')}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-5">
              {t('programs.title')}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
              {t('programs.subtitle')}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-on-scroll">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} onJoin={handleJoin} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14 animate-on-scroll">
            <p className="text-gray-500 mb-4">{t('programs.not_sure')}</p>
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('programs.btn_team')}
            </Button>
          </div>
        </div>
      </section>
      
      <WhatWeDo />
    </>
  )
}

export default Programs