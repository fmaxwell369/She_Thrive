import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Button from "../components/Button"

/* ── Dummy data ─────────────────────────────────────────────────── */
const events = [
  {
    id: 1,
    title: 'REGISTRATION SHE THRIVE CONFERENCE (English)',
    date: 'May 7, 2026',
    time: '9:00 AM – 5:00 PM',
    location: 'Doula',
    category: 'Summit',
    description:
      '7 powerful voices. 7 transformational sessions. Can you guess who they are ? Stay tuned... the reveal begins soon.',
    spots: 50,
    color: 'purple',
  },
  {
    id: 2,
    title: 'ENREGISTREMENT CONFERENCE SHE THRIVE',
    date: 'MAY 7, 2026',
    time: '9:00 AM – :500 PM',
    location: 'Douala ',
    category: 'Summit',
    description:
      '7 voix puissantes. 7 sessions transfomatrices. pouvez-vous deviner qui elles sont ? Restez connectes... les revelations commencent bientot.',
    spots: 50,
    color: 'pink',
  },
  // {
  //   id: 3,
  //   title: 'Community Meetup – Nation Builders',
  //   date: 'April 20, 2025',
  //   time: '10:00 AM – 1:00 PM',
  //   location: 'Yaoundé Community Hall',
  //   category: 'Meetup',
  //   description:
  //     'Monthly gathering for Nation Builders program participants to network, share progress, and support one another.',
  //   spots: 80,
  //   color: 'purple',
  // },
]

const categoryColors = {
  Summit:   'bg-purple-100 text-purple-700',
  Training: 'bg-pink-100 text-pink-700',
  Meetup:   'bg-green-100 text-green-700',
}

const Events = () => {
  const handleRegister = (title) => {
    console.log('Registration clicked for:', title)
    alert(`Thank you for your interest in "${title}"! Our team will follow up with registration details.`)
  }

  return (
    <main className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            What's Coming
          </span>
          <h1 className="font-serif text-5xl font-bold text-purple-950 mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Join us at our events — where women gather to learn, grow, lead, and thrive together.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top accent */}
              <div className={`h-2 ${event.color === 'pink' ? 'bg-gradient-to-r from-pink-400 to-pink-600' : 'bg-gradient-to-r from-purple-500 to-purple-700'}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <span className={`self-start text-xs font-medium px-3 py-1 rounded-full mb-4 ${categoryColors[event.category]}`}>
                  {event.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {event.description}
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
                    {event.location}
                  </div>
                </div>

                {/* Spots & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{event.spots} spots available</span>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdz4zBFCB79_p--HARyzp3hm88oD0Qjusr7lQRxKfzjJYHAdw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant={event.color === 'pink' ? 'pink' : 'primary'}
                    size="sm"
                    onClick={() => handleRegister(event.title)}
                  >
                    Register
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Want to be notified of future events?</p>
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
            Get Notified
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Events
