import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import Button from './Button'

const offices = [
  { city: 'Douala',  address: 'Makepe, Rhome poulin', phone: '+237 650 69 00 59', email: 'douala@shethrive.org' },
]

const Contact = () => {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoad]  = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoad(true)
    setTimeout(() => {
      console.log('Contact form:', form)
      setLoad(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">Reach Out</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">Contact Us</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-lg">
            Have questions? Want to partner? Ready to join? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 animate-on-scroll">

          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">

            {/* Office cards */}
            {offices.map((o) => (
              <div key={o.city} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="font-serif text-xl font-bold text-purple-900 mb-3">{o.city}</h3>
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
                <p className="font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-green-100 text-xs">We reply within 1 hour</p>
              </div>
              <Send size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-purple-50 rounded-3xl border border-purple-100">
                <CheckCircle size={56} className="text-purple-600 mb-5" />
                <h3 className="font-serif text-2xl font-bold text-purple-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-xs">Our team will get back to you within 24–48 hours. Thank you for reaching out.</p>
                <Button variant="secondary" size="sm" className="mt-6" onClick={() => setSent(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name *</label>
                    <input
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Subject</label>
                  <input
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={e => set('subject', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit" className="w-full" onClick={() => {}}>
                  {loading ? 'Sending...' : (
                    <><Send size={16} className="mr-2" /> Send Message</>
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
