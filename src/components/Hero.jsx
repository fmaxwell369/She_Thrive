import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Button from './Button'
import { ChevronDown } from 'lucide-react'

import bg_photo from '../assets/about1.png'

import thumb1 from '../assets/logo.png'
import thumb2 from '../assets/logo2.png'

const Hero = () => {
  const { t } = useTranslation()
  
  const videosBackground = [
    { 
      video: "https://res.cloudinary.com/da8bql4kb/video/upload/v1780652157/video1_numpfw.mp4", // <-- Mets ton URL ici
      thumb: thumb1
    },
  ];
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      const playPromise = videoRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Lecture automatique en attente :", error)
        })
      }
    }
  }, [currentVideoIndex])

  const scrollDown = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleVideoEnded = () => {
    if (videosBackground.length > 1) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videosBackground.length)
    } else if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const stats = [
    { value: '500+', label: t('hero.stats.trained') },
    { value: '100+', label: t('hero.stats.businesses') },
    { value: '3+',   label: t('hero.stats.cities') },
  ]

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* 1. ARRIÈRE-PLAN VIDÉO DYNAMIQUE */}
      <div className="absolute inset-0 z-0 bg-purple-950">
        <video
          ref={videoRef}
          src={videosBackground[currentVideoIndex].video}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          loop={videosBackground.length === 1}
          poster={bg_photo}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-purple-950/85 mix-blend-multiply" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-20 -left-16 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      {/* 2. CONTENEUR DE CONTENU GLOBAL */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex-grow flex flex-col justify-center">
        <div className="w-full max-w-4xl">
          
          {/* TITRE FIXE ET UNIQUE */}
         {/* TITRE FIXE ET UNIQUE MODIFIÉ */}
<div className="mb-6">
  <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
    {t('hero.title_part1')}<span className="italic text-pink-500">{t('hero.title_span1')}</span>
    <br />
    {t('hero.title_part2')}<span className="italic text-pink-500">{t('hero.title_span2')}</span>
    <br />
    {t('hero.title_part3')}<span className="italic text-pink-500">{t('hero.title_span3')}</span>
  </h1>
</div>

          {/* DESCRIPTION */}
          <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-3xl">
            {t('hero.description_part1')}
            <span className="font-bold">{t('hero.description_span1')}</span>
            <span className="text-pink-500 font-bold">{t('hero.description_span2')}</span>
            {t('hero.description_part2')}
          </p>

          {/* BOUTONS D'ACTIONS */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              variant="white"
              size="lg"
              onClick={() => {
                const el = document.getElementById('programs')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('hero.btn_movement')}
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
              {t('hero.btn_events')}
            </Button>
          </div>

        </div>

        {/* 3. BARRE DE STATISTIQUES + DOCK AJUSTÉ */}
        <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 border-t border-white/10 w-full max-w-4xl">
          
          {/* Bloc de Gauche : Les Statistiques */}
          <div className="flex flex-wrap gap-6 sm:gap-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-white">
                <p className="font-serif text-4xl font-bold text-pink-500">{value}</p>
                <p className="text-white/70 text-sm mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Bloc de Droite : Miniatures réduites et décalées vers la gauche */}
          {videosBackground.length > 1 && (
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 shadow-lg mb-2 mr-6 lg:mr-16 transition-all">
              {videosBackground.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  // CHANGEMENT : Remplacement de w-12 h-12 par w-9 h-9 (plus petit)
                  className={`relative w-9 h-9 rounded-full overflow-hidden transition-all duration-300 focus:outline-none group ${
                    index === currentVideoIndex
                      ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-purple-950 scale-105 shadow-md' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Regarder la vidéo ${index + 1}`}
                >
                  <img 
                    src={item.thumb} 
                    alt={`Miniature vidéo ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Flèche de défilement vers le bas */}
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