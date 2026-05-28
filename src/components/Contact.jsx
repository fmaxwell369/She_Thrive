import React, { useState } from 'react'
import { useTranslation } from 'react-i18next' // 1. Import du hook
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import Button from './Button'

const offices = [
  { city: 'Douala', address: 'Makepe, Carrefour Rhone poulenc', phone: '+237 650 69 00 59', email: 'douala@shethrive.org' },
]

const Contact = () => {
  const { t } = useTranslation(); // 2. Initialisation du hook

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true); 

    try {
      const response = await fetch("https://formspree.io/f/xpqnyvdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSent(true); 
        setForm({ name: '', email: '', subject: '', message: '' }); 
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Impossible d'envoyer le message pour le moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            {t('contact.top_label')}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 animate-on-scroll">

          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">

            {/* Office cards */}
            {offices.map((o) => (
              <div key={o.city} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="font-serif text-xl font-bold text-purple-900 mb-3">
                  {t(`contact.cities.${o.city}`, o.city)}
                </h3>
                <ul className="space-y-2">
                  <li className="flex gap-2.5 items-start text-sm text-gray-600">
                    <MapPin size={14} className="text-pink-500 mt-0.5 shrink-0" />{o.address}
                  </li>
                  <li className="flex gap-2.5 items-center text-sm text-gray-600">
                    <Phone size={14} className="text-purple-500 shrink-0" />{o.phone}
                  </li>
                  <li className="flex gap-2.5 items-center text-sm text-gray-600">
                    <Mail size={14} className="text-purple-500 shrink-0" />{o.email}
                  </li>
                </ul>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+237650690059"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl px-6 py-4 transition-colors group"
            >
              <MessageCircle size={24} className="shrink-0" />
              <div>
                <p className="font-semibold text-sm">{t('contact.whatsapp_title')}</p>
                <p className="text-green-100 text-xs">{t('contact.whatsapp_subtitle')}</p>
              </div>
              <Send size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-purple-50 rounded-3xl border border-purple-100">
                <CheckCircle size={56} className="text-purple-600 mb-5" />
                <h3 className="font-serif text-2xl font-bold text-purple-900 mb-2">
                  {t('contact.success_title')}
                </h3>
                <p className="text-gray-500 max-w-xs">
                  {t('contact.success_desc')}
                </p>
                <Button variant="secondary" size="sm" className="mt-6" onClick={() => setSent(false)}>
                  {t('contact.send_another')}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.labels.name')}</label>
                    <input
                      required
                      name="name"
                      placeholder={t('contact.placeholders.name')}
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.labels.email')}</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder={t('contact.placeholders.email')}
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.labels.subject')}</label>
                  <input
                    name="subject"
                    placeholder={t('contact.placeholders.subject')}
                    value={form.subject}
                    onChange={e => set('subject', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.labels.message')}</label>
                  <textarea
                    required
                    rows={6}
                    name="message"
                    placeholder={t('contact.placeholders.message')}
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit" className="w-full" disabled={loading}>
                  {loading ? t('contact.buttons.sending') : (
                    <><Send size={16} className="mr-2" /> {t('contact.buttons.send')}</>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact