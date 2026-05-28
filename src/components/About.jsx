import React from 'react'
import { useTranslation } from 'react-i18next' // 1. Import de i18next
import { CheckCircle } from 'lucide-react'
import AboutPhoto from '../assets/about2.png'; 

const About = () => {
  const { t } = useTranslation(); // 2. Initialisation de la fonction t

  // On crée la liste des piliers dynamiquement en utilisant les clés de traduction
  const pillars = [
    t('about.pillars.skills'),
    t('about.pillars.leadership'),
    t('about.pillars.community'),
    t('about.pillars.finance'),
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-max">

        {/* Top label */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            {t('about.top_label')}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-5">
            {t('about.title')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        {/* Two-column: story + pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Image */}
          <div className="relative animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-100 aspect-[4/5] max-h-[540px]">
              <img
                src={AboutPhoto}
                alt={t('about.img_alt')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-pink-100 -z-10" />
            <div className="absolute -bottom-10 left-10 w-40 h-40 rounded-full bg-purple-50 -z-10" />
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <h3 className="font-serif text-3xl font-bold text-purple-900 mb-4">
              {t('about.story_title')}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              {t('about.story_p1')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t('about.story_p2')}
            </p>
          </div>
        </div>

        {/* Vision & Mission side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
          <div className="relative bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-8 sm:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <span className="inline-block text-xs font-bold text-purple-300 uppercase tracking-widest mb-4">
              {t('about.vision_label')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              {t('about.vision_title')}
            </h3>
            <p className="text-purple-200 leading-relaxed text-sm">
              {t('about.vision_desc')}
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl p-8 sm:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <span className="inline-block text-xs font-bold text-pink-200 uppercase tracking-widest mb-4">
              {t('about.mission_label')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              {t('about.mission_title')}
            </h3>
            <p className="text-pink-100 leading-relaxed text-sm">
              {t('about.mission_desc')}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About