import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next' // 1. Import du hook
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation() // 2. Initialisation du hook

  // Configuration des liens rapides avec clés de traduction
  const quickLinks = [
    { labelKey: 'footer.links.home',     to: '/' },
    { labelKey: 'footer.links.about',    to: '/#about' },
    { labelKey: 'footer.links.programs', to: '/#programs' },
    { labelKey: 'footer.links.impact',   to: '/#impact' },
    { labelKey: 'footer.links.events',   to: '/events' },
    { labelKey: 'footer.links.contact',  to: '/#contact' },
  ]

  // Configuration des programmes avec clés de traduction
  const programs = [
    'footer.programs_list.p1',
    'footer.programs_list.p2',
    'footer.programs_list.p3',
    'footer.programs_list.p4',
  ]

  const socials = [
    { icon: Facebook,  href: 'https://www.facebook.com/SHEThriveInternational', label: 'Facebook' },
    { icon: Linkedin,  href: 'https://www.linkedin.com/company/edith-abumbi/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/shethriveinternational?utm_source=qr&igsh=djdtMWRhd2d6ODV2', label: 'Instagram' },
    { icon: Youtube,   href: 'https://www.youtube.com/@Wethrive-n7j8u', label: 'Youtube' }
  ]

  const handleAnchor = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-purple-950 text-white">
      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">ST</span>
              </div>
              <span className="font-serif font-bold text-xl">
                SHE <span className="text-pink-500">Thrive</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {t('footer.description')}
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-5">{t('footer.titles.links')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ labelKey, to }) => (
                <li key={labelKey}>
                  <Link
                    to={to}
                    onClick={(e) => handleAnchor(e, to)}
                    className="text-white/60 hover:text-pink-500 text-sm transition-colors"
                  >
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-5">{t('footer.titles.programs')}</h4>
            <ul className="space-y-2.5">
              {programs.map((pKey) => (
                <li key={pKey}>
                  <a href="#programs" className="text-white/60 hover:text-pink-500 text-sm transition-colors">
                    {t(pKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-5">{t('footer.titles.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5 items-start text-sm text-white/60">
                <MapPin size={15} className="text-pink-500 mt-0.5 shrink-0" />
                Douala, Cameroon
              </li>
              <li className="flex gap-2.5 items-center text-sm text-white/60">
                <Mail size={15} className="text-pink-500 shrink-0" />
                info@shethrive.org
              </li>
              <li className="flex gap-2.5 items-center text-sm text-white/60">
                <Phone size={15} className="text-pink-500 shrink-0" />
                +237 650 69 00 59
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-max px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} SHE Thrive. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer