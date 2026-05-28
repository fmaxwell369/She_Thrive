import React, { useState } from 'react'
import { useTranslation } from 'react-i18next' // 1. Import du hook
import { Heart, Shield, Star } from 'lucide-react'
import Button from './Button'

const Donate = () => {
  const { t } = useTranslation(); // 2. Initialisation du hook

  // Liste des presets avec des clés de traduction pour l'impact
  const presets = [
    { label: '5 000 XAF',  value: 5000,  impactKey: 'donate.impacts.p1' },
    { label: '15 000 XAF', value: 15000, impactKey: 'donate.impacts.p2' },
    { label: '30 000 XAF', value: 30000, impactKey: 'donate.impacts.p3' },
    { label: '75 000 XAF', value: 75000, impactKey: 'donate.impacts.p4' },
  ]

  const [selected, setSelected] = useState(presets[1].value)
  const [custom,   setCustom]   = useState('')
  const [type,     setType]     = useState('once')
  const [done,     setDone]     = useState(false)

  const amount = custom ? parseInt(custom, 10) || 0 : selected

  const handleDonate = () => {
    console.log('Donation:', { amount, type })
    setDone(true)
    setTimeout(() => setDone(false), 4000)
  }

  const chosenPreset = presets.find(p => p.value === selected)

  return (
    <section id="donate" className="section-padding bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
              {t('donate.top_label')}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-4">
              {t('donate.title')}
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              {t('donate.subtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-10 shadow-sm border border-purple-100 animate-on-scroll">

            {done ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">💜</div>
                <h3 className="font-serif text-3xl font-bold text-purple-900 mb-3">
                  {t('donate.thank_you')}
                </h3>
                <p className="text-gray-600">
                  {t('donate.success_desc')}
                </p>
              </div>
            ) : (
              <>
                {/* One-time / Monthly */}
                <div className="flex gap-3 mb-8 bg-white rounded-2xl p-1 max-w-xs">
                  {['once', 'monthly'].map((tKey) => (
                    <button
                      key={tKey}
                      onClick={() => setType(tKey)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        type === tKey
                          ? 'bg-purple-700 text-white shadow-md'
                          : 'text-gray-500 hover:text-purple-700'
                      }`}
                    >
                      {tKey === 'once' ? t('donate.give_once') : t('donate.give_monthly')}
                    </button>
                  ))}
                </div>

                {/* Preset amounts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {presets.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => { setSelected(p.value); setCustom('') }}
                      className={`py-3 rounded-2xl text-sm font-semibold border-2 transition-all ${
                        selected === p.value && !custom
                          ? 'border-purple-600 bg-purple-600 text-white shadow-md'
                          : 'border-purple-200 text-purple-700 hover:border-purple-400 bg-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Custom input */}
                <div className="relative mb-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">XAF</span>
                  <input
                    type="number"
                    placeholder={t('donate.custom_placeholder')}
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
                    className="w-full bg-white border-2 border-purple-200 focus:border-purple-500 rounded-2xl pl-14 pr-4 py-3 text-sm outline-none"
                  />
                </div>

                {/* Impact hint */}
                {chosenPreset && !custom && (
                  <p className="text-sm text-purple-600 font-medium mb-6 flex items-center gap-2">
                    <Star size={14} className="text-pink-500 fill-pink-500" />
                    {t(chosenPreset.impactKey)}
                  </p>
                )}

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button variant="primary" size="lg" className="flex-1" onClick={handleDonate}>
                    <Heart size={17} className="mr-2 fill-white" />
                    {t('donate.btn_donate')} {amount ? `${amount.toLocaleString()} XAF` : ''}
                  </Button>
                  <Button variant="pink" size="lg" className="flex-1" onClick={handleDonate}>
                    {t('donate.btn_sponsor')}
                  </Button>
                </div>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Shield size={12} /> {t('donate.trust.secure')}</span>
                  <span>•</span>
                  <span>{t('donate.trust.programs')}</span>
                  <span>•</span>
                  <span>{t('donate.trust.receipt')}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donate