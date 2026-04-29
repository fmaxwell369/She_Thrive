import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import LogoPhoto from '../assets/logo.png'; 

const navLinks = [
  { label: 'Home',          to: '/' },
  { label: 'About',         to: '/#about' },
  { label: 'Programs',      to: '/#programs' },
  { label: 'Impact',        to: '/#impact' },
  { label: 'Get Involved',  to: '/#get-involved' },
  { label: 'Events',        to: '/events' },
  { label: 'Contact',       to: '/#contact' },
]

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  const handleAnchor = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (location.pathname !== '/') {
        window.location.href = to
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-md flex items-center justify-center border border-white/20">
           <img 
               src={LogoPhoto} 
               alt="SHE Thrive Logo" 
                className="w-full h-full object-cover" 
            />
          </div>
          <div className='flex flex-col justify-center'>
          <span className={`font-serif font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-purple-900' : 'text-white'}`}>
            SHE <span className="text-pink-500">Thrive </span> 
            </span>
            <span className={`font-sans text-[11px] uppercase tracking-[0.25em] font-medium mt-1 transition-colors duration-300 ${scrolled ? 'text-purple-900/60' : 'text-white/70'}`}>
                 International
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={(e) => handleAnchor(e, to)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-pink-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant={scrolled ? 'primary' : 'white'}
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('get-involved')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Join Now
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-purple-800 hover:bg-purple-50' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-purple-100 shadow-xl px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={(e) => { handleAnchor(e, to); setMenuOpen(false) }}
              className="text-gray-700 hover:text-purple-700 hover:bg-purple-50 font-medium px-4 py-3 rounded-lg transition-colors text-sm"
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMenuOpen(false)
                const el = document.getElementById('get-involved')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
