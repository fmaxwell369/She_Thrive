import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home        from './pages/Home'
import Events      from './pages/Events'

/* ── Scroll to top on route change ─────────────────────────── */
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* ── Intersection Observer for scroll animations ────────────── */
const useScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.animate-on-scroll')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  })
}

const App = () => {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/"       element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
