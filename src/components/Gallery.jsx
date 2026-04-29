import React, { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { galleryImages } from '../data'

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            Moments That Matter
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A glimpse into the workshops, ceremonies, and community moments that define us.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-on-scroll">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                i === 0 || i === 3 ? 'sm:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 || i === 3 ? '3/4' : '4/3' }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
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
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-white/60 text-sm">{lightbox.alt}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
