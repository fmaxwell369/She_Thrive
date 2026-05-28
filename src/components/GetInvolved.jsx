import React, { useState } from 'react'
import { useTranslation } from 'react-i18next' // 1. Import du hook
import { BookOpen, Heart, Handshake, Gift, ArrowRight, X } from 'lucide-react'
import Button from './Button'

const options = [
  {
    id: 'program',
    icon: BookOpen,
    titleKey: 'get_involved.cards.program.title',
    descKey: 'get_involved.cards.program.desc',
    formTitleKey: 'get_involved.cards.program.form_title',
    color: 'purple',
    fields: ['name', 'email', 'phone', 'program', 'city'],
  },
  {
    id: 'volunteer',
    icon: Heart,
    titleKey: 'get_involved.cards.volunteer.title',
    descKey: 'get_involved.cards.volunteer.desc',
    formTitleKey: 'get_involved.cards.volunteer.form_title',
    color: 'pink',
    fields: ['name', 'email', 'phone', 'skills', 'availability'],
  },
  {
    id: 'partner',
    icon: Handshake,
    titleKey: 'get_involved.cards.partner.title',
    descKey: 'get_involved.cards.partner.desc',
    formTitleKey: 'get_involved.cards.partner.form_title',
    color: 'purple',
    fields: ['name', 'email', 'organization', 'message'],
  },
  {
    id: 'sponsor',
    icon: Gift,
    titleKey: 'get_involved.cards.sponsor.title',
    descKey: 'get_involved.cards.sponsor.desc',
    formTitleKey: 'get_involved.cards.sponsor.form_title',
    color: 'pink',
    fields: ['name', 'email', 'amount', 'message'],
  },
]

const Modal = ({ option, onClose }) => {
  const { t } = useTranslation()
  const [form, setForm] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`[${t(option.formTitleKey)}]`, form)
    setSent(true)
  }

  // Options de sélection dynamiques et traduites
  const programOptions = [
    { label: 'Empower HER', value: 'Empower HER' },
    { label: 'Nation Builders', value: 'Nation Builders' },
    { label: t('get_involved.dropdowns.not_sure'), value: 'Not sure yet' }
  ]

  const cityOptions = [
    { label: 'Yaoundé', value: 'Yaoundé' },
    { label: 'Douala', value: 'Douala' },
    { label: 'Bafoussam', value: 'Bafoussam' },
    { label: t('get_involved.dropdowns.other_city'), value: 'Other' }
  ]

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
            <h3 className="font-serif text-2xl font-bold text-purple-900 mb-2">
              {t('get_involved.success.title')}
            </h3>
            <p className="text-gray-500">
              {t('get_involved.success.desc')}
            </p>
            <Button variant="primary" size="md" className="mt-6" onClick={onClose}>
              {t('get_involved.success.btn_close')}
            </Button>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-2xl font-bold text-purple-900 mb-1">
              {t(option.formTitleKey)}
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              {t('get_involved.modal_subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {option.fields.includes('name') && (
                <input required placeholder={t('get_involved.placeholders.name')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('name', e.target.value)} />
              )}
              {option.fields.includes('email') && (
                <input required type="email" placeholder={t('get_involved.placeholders.email')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('email', e.target.value)} />
              )}
              {option.fields.includes('phone') && (
                <input placeholder={t('get_involved.placeholders.phone')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('phone', e.target.value)} />
              )}
              {option.fields.includes('program') && (
                <select required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('program', e.target.value)}>
                  <option value="">{t('get_involved.dropdowns.select_program')}</option>
                  {programOptions.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              )}
              {option.fields.includes('city') && (
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('city', e.target.value)}>
                  <option value="">{t('get_involved.dropdowns.select_city')}</option>
                  {cityOptions.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
              )}
              {option.fields.includes('organization') && (
                <input placeholder={t('get_involved.placeholders.organization')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('organization', e.target.value)} />
              )}
              {option.fields.includes('skills') && (
                <input placeholder={t('get_involved.placeholders.skills')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('skills', e.target.value)} />
              )}
              {option.fields.includes('availability') && (
                <input placeholder={t('get_involved.placeholders.availability')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('availability', e.target.value)} />
              )}
              {option.fields.includes('amount') && (
                <input placeholder={t('get_involved.placeholders.amount')} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" onChange={e => set('amount', e.target.value)} />
              )}
              {option.fields.includes('message') && (
                <textarea placeholder={t('get_involved.placeholders.message')} rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" onChange={e => set('message', e.target.value)} />
              )}
              <Button variant={option.color === 'pink' ? 'pink' : 'primary'} size="md" type="submit" className="w-full">
                {t('get_involved.submit_btn')} <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const GetInvolved = () => {
  const { t } = useTranslation() // 2. Initialisation du hook principal
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section id="get-involved" className="section-padding bg-gradient-to-b from-purple-50/60 to-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            {t('get_involved.top_label')}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">
            {t('get_involved.title')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            {t('get_involved.subtitle')}
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          {options.map((opt) => {
            const Icon = opt.icon
            const isPurple = opt.color === 'purple'
            return (
              <div key={opt.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isPurple ? 'bg-purple-100' : 'bg-pink-100'}`}>
                  <Icon size={22} className={isPurple ? 'text-purple-600' : 'text-pink-600'} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {t(opt.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                  {t(opt.descKey)}
                </p>
                <Button
                  variant={isPurple ? 'primary' : 'pink'}
                  size="sm"
                  className="w-full"
                  onClick={() => setActiveModal(opt)}
                >
                  {t('get_involved.btn_start')}
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