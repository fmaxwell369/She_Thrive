import React from 'react'
import { useTranslation } from 'react-i18next' // Importation du hook
import { Calendar, MapPin, Clock } from 'lucide-react'
import Button from "../components/Button"

/* ── Configuration des couleurs Tailwind par catégorie ─────────────────── */
const categoryColors = {
  summit:   'bg-purple-100 text-purple-700',
  training: 'bg-pink-100 text-pink-700',
  meetup:   'bg-green-100 text-green-700',
}

/* ── Structure de données propre et centralisée ────────────────────────── */
const eventsData = [
  {
    id: 1,
    itemKey: 'events.items.conference_en', // Pointeur vers les textes i18n
    date: 'May 17, 2026',
    time: '1:00 AM – 5:00 PM',
    category: 'summit', // Utilisé pour la couleur et la clé de traduction
    color: 'purple',
    // spots: 50,
  },
  {
    id: 2,
    itemKey: 'events.items.conference_fr',
    date: 'May 17, 2026',
    time: '1:00 AM – 5:00 PM',
    category: 'summit',
    color: 'pink',
    // spots: 50,
  },
]

const Events = () => {
  const { t } = useTranslation() // Initialisation d'i18n

  const handleRegister = (titleKey) => {
    // On traduit le titre à la volée pour l'alerte ou les logs
    const eventTitle = t(`${titleKey}.title`)
    console.log('Registration clicked for:', eventTitle)
    alert(`Thank you for your interest in "${eventTitle}"! Our team will follow up with registration details.`)
  }

  return (
    <main className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            {t('events.eyebrow')}
          </span>
          <h1 className="font-serif text-5xl font-bold text-purple-950 mb-4">
            {t('events.title')}
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            {t('events.subtitle')}
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top accent */}
              <div className={`h-2 ${event.color === 'pink' ? 'bg-gradient-to-r from-pink-400 to-pink-600' : 'bg-gradient-to-r from-purple-500 to-purple-700'}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <span className={`self-start text-xs font-medium px-3 py-1 rounded-full mb-4 ${categoryColors[event.category]}`}>
                  {t(`events.categories.${event.category}`)}
                </span>

                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {t(`${event.itemKey}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {t(`${event.itemKey}.description`)}
                </p>

                {/* Meta */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} className="text-purple-500 shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} className="text-purple-500 shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={14} className="text-pink-500 shrink-0" />
                    {t(`${event.itemKey}.location`)}
                  </div>
                </div>

                {/* Spots & CTA */}
                <div className="flex items-center justify-between">
                  {/* Optionnel : gestion de l'affichage des places si nécessaire */}
                  <span className="text-xs text-gray-400">
                    {event.spots ? `${event.spots} spots available` : ''}
                  </span>
                  
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdz4zBFCB79_p--HARyzp3hm88oD0Qjusr7lQRxKfzjJYHAdw/viewform?usp=header" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant={event.color === 'pink' ? 'pink' : 'primary'}
                      size="sm"
                      onClick={() => handleRegister(event.itemKey)}
                    >
                      {t('events.btn_register')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">{t('events.notify_text')}</p>
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) {
                window.location.href = '/#contact'
              }
            }}
          >
            {t('events.btn_notify')}
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Events