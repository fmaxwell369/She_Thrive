import React, { useEffect, useRef } from 'react';
import './WhatWeDo.css';

const services = [
  {
    id: 'consulting',
    tag: '01 / Consulting & Coaching',
    headline: 'Build, Lead, and Scale with Clarity',
    description: "Business consulting, leadership coaching, financial guidance, and personal development — all designed to move you from where you are to where you're meant to be.",
    audience: 'Entrepreneurs · Women Leaders · Startups · NGOs',
    cta: 'Book a Strategy Session',
    href: '/#contact',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 20l4 4-4 4M38 24H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: '#C8873A',
  },
  {
    id: 'jobs',
    tag: '02 / Thrive Jobs',
    headline: 'Access Opportunities That Change Your Life',
    description:
      'Connect to verified job offers, internships, and skill-based gigs through our curated network and placement programs.',
    categories: ['Jobs', 'Internships', 'Skill-based Gigs'],
    cta: 'Explore Opportunities',
    href: '/events',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="16" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 16v-4a4 4 0 014-4h8a4 4 0 014 4v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 28h36M24 28v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#2E7D5E',
  },
  {
    id: 'counseling',
    tag: '03 / Counseling & Prayers',
    headline: 'Emotional Support & Spiritual Guidance',
    description:
      "One-on-one counseling, life guidance, and prayer support for women and individuals navigating life's hardest moments.",
    reassurance: 'Confidential. Compassionate. Judgment-free.',
    cta: 'Request a Session',
    href: '/#contact',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C14 6 7 13 7 21c0 5.5 3.2 10.3 8 13.1V42l6-4h3c8.8 0 17-6.7 17-15 0-8.3-7.2-17-17-17z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M17 21h14M17 27h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#7B5EA7',
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wwd-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.wwd-card');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wwd-section" id="programs" ref={sectionRef}>
      {/* Section Header */}
      <div className="wwd-header">
        <span className="wwd-eyebrow">What We Do</span>
        <h2 className="wwd-title">
          Three Pillars of <em>Transformation</em>
        </h2>
        <p className="wwd-subtitle">
          Every service we offer is built around one conviction: women thrive when
          they have the right support at the right time.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="wwd-grid">
        {services.map((service, i) => (
          <article
            className="wwd-card"
            key={service.id}
            style={{ '--accent': service.accent, '--delay': `${i * 120}ms` }}
          >
            <div className="wwd-card-inner">
              {/* Top bar */}
              <div className="wwd-card-top">
                <span className="wwd-tag">{service.tag}</span>
                <div className="wwd-icon" style={{ color: service.accent }}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="wwd-card-headline">{service.headline}</h3>
              <p className="wwd-card-desc">{service.description}</p>

              {/* Audience */}
              {service.audience && (
                <p className="wwd-audience">{service.audience}</p>
              )}

              {/* Job categories */}
              {service.categories && (
                <div className="wwd-categories">
                  {service.categories.map((cat) => (
                    <span className="wwd-badge" key={cat}>
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              {/* Reassurance */}
              {service.reassurance && (
                <p className="wwd-reassurance">🔒 {service.reassurance}</p>
              )}

              {/* CTA */}
              <a href={service.href} className="wwd-cta">
                {service.cta}
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Accent glow */}
            <div className="wwd-glow" />
          </article>
        ))}
      </div>
    </section>
  );
}
