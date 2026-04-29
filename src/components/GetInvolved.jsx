import React, { useState } from 'react'
import { BookOpen, Heart, Handshake, Gift, ArrowRight, X } from 'lucide-react'
import Button from './Button'

const options = [
  {
    icon: BookOpen,
    title: 'Join a Program',
    description: 'Enroll in Empower HER or Nation Builders and start your transformation journey today.',
    color: 'purple',
    formTitle: 'Join a Program',
    fields: ['name', 'email', 'phone', 'program', 'city'],
  },
  {
    icon: Heart,
    title: 'Become a Volunteer',
    description: 'Share your time, skills, and passion. We need trainers, mentors, event coordinators, and more.',
    color: 'pink',
    formTitle: 'Volunteer Application',
    fields: ['name', 'email', 'phone', 'skills', 'availability'],
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Align your organization with our mission. Together we can reach more women across Cameroon.',
    color: 'purple',
    formTitle: 'Partnership Inquiry',
    fields: ['name', 'email', 'organization', 'message'],
  },
  {
    icon: Gift,
    title: 'Sponsor a Woman',
    description: 'Fund a woman\'s training journey. Your sponsorship covers tuition, materials, and mentorship.',
    color: 'pink',
    formTitle: 'Sponsor a Woman',
    fields: ['name', 'email', 'amount', 'message'],
  },
]

const programOptions = ['Empower HER', 'Nation Builders', 'Not sure yet']
const cityOptions    = ['Yaoundé', 'Douala', 'Bafoussam', 'Other']

const Modal = ({ option, onClose }) => {
  const [form, setForm]   = useState({})
  const [sent, setSent]   = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`[${option.formTitle}]`, form)
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700">
          <X size={22} />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-serif text-2xl font-bold text-purple-900 mb-2">Thank you!</h3>
            <p className="text-gray-500">Our team will reach out to you within 48 hours.</p>
            <Button variant="primary" size="md" className="mt-6" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-2xl font-bold text-purple-900 mb-1">{option.formTitle}</h3>
            <p className="text-gray-500 text-sm mb-6">Fill in the form and we'll get back to you soon.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {option.fields.includes('name') && (
                <input required placeholder="Full Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('name', e.target.value)} />
              )}
              {option.fields.includes('email') && (
                <input required type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('email', e.target.value)} />
              )}
              {option.fields.includes('phone') && (
                <input placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('phone', e.target.value)} />
              )}
              {option.fields.includes('program') && (
                <select required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('program', e.target.value)}>
                  <option value="">Select a Program</option>
                  {programOptions.map(p => <option key={p}>{p}</option>)}
                </select>
              )}
              {option.fields.includes('city') && (
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('city', e.target.value)}>
                  <option value="">Select Your City</option>
                  {cityOptions.map(c => <option key={c}>{c}</option>)}
                </select>
              )}
              {option.fields.includes('organization') && (
                <input placeholder="Organization Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('organization', e.target.value)} />
              )}
              {option.fields.includes('skills') && (
                <input placeholder="Your Skills / Expertise" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('skills', e.target.value)} />
              )}
              {option.fields.includes('availability') && (
                <input placeholder="Availability (e.g. weekends)" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('availability', e.target.value)} />
              )}
              {option.fields.includes('amount') && (
                <input placeholder="Sponsorship Amount (XAF)" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('amount', e.target.value)} />
              )}
              {option.fields.includes('message') && (
                <textarea placeholder="Message (optional)" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" onChange={e => set('message', e.target.value)} />
              )}
              <Button variant={option.color === 'pink' ? 'pink' : 'primary'} size="md" type="submit" className="w-full">
                Submit Application <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const GetInvolved = () => {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section id="get-involved" className="section-padding bg-gradient-to-b from-purple-50/60 to-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">Take Action</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">Get Involved</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            There are many ways to be part of the SHE Thrive movement — find yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          {options.map((opt) => {
            const Icon = opt.icon
            const isPurple = opt.color === 'purple'
            return (
              <div key={opt.title} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isPurple ? 'bg-purple-100' : 'bg-pink-100'}`}>
                  <Icon size={22} className={isPurple ? 'text-purple-600' : 'text-pink-600'} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{opt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{opt.description}</p>
                <Button
                  variant={isPurple ? 'primary' : 'pink'}
                  size="sm"
                  className="w-full"
                  onClick={() => setActiveModal(opt)}
                >
                  Get Started
                </Button>
              </div>
            )
          })}
        </div>
      </div>

      {activeModal && <Modal option={activeModal} onClose={() => setActiveModal(null)} />}
    </section>
  )
}

export default GetInvolved
