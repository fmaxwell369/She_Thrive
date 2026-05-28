import React, { useState } from 'react'
import { useTranslation } from 'react-i18next' // 1. Import du hook
import { X, ZoomIn } from 'lucide-react'
import { galleryImages } from '../data'

const Gallery = () => {
  const { t } = useTranslation() // 2. Initialisation du hook
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Header section */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            {t('gallery.top_label')}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-on-scroll">
          {galleryImages.map((img, i) => {
            // Traduction dynamique du texte alternatif basé sur l'id de l'image
            const translatedAlt = t(`gallery.images.${img.id}`, img.alt);

            return (
              <div
                key={img.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  i === 0 || i === 3 ? 'sm:row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 || i === 3 ? '3/4' : '4/3' }}
                onClick={() => setLightbox({ ...img, translatedAlt })}
              >
                <img
                  src={img.src}
                  alt={translatedAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.translatedAlt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-white/60 text-sm text-center px-4">
              {lightbox.translatedAlt}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery