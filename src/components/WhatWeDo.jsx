import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importation du hook
import './WhatWeDo.css';

const services = [
  {
    id: 'consulting',
    tagKey: 'whatwedo.services.consulting.tag',
    headlineKey: 'whatwedo.services.consulting.headline',
    descriptionKey: 'whatwedo.services.consulting.description',
    audienceKey: 'whatwedo.services.consulting.audience',
    ctaKey: 'whatwedo.services.consulting.cta',
    href: '/#jobs',
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
    tagKey: 'whatwedo.services.jobs.tag',
    headlineKey: 'whatwedo.services.jobs.headline',
    descriptionKey: 'whatwedo.services.jobs.description',
    // Tableau de clés de traduction pour gérer proprement l'asymétrie des badges
    categoriesKeys: [
      'whatwedo.services.jobs.categories.jobs',
      'whatwedo.services.jobs.categories.internships',
      'whatwedo.services.jobs.categories.gigs'
    ],
    ctaKey: 'whatwedo.services.jobs.cta',
    href: '/#jobs',
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
    tagKey: 'whatwedo.services.counseling.tag',
    headlineKey: 'whatwedo.services.counseling.headline',
    descriptionKey: 'whatwedo.services.counseling.description',
    reassuranceKey: 'whatwedo.services.counseling.reassurance',
    ctaKey: 'whatwedo.services.counseling.cta',
    href: '/#jobs',
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
  const { t } = useTranslation(); 
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
    <section className="wwd-section" id="WhatWeDo" ref={sectionRef}>
      {/* Section Header */}
      <div className="wwd-header">
        <span className="wwd-eyebrow">{t('whatwedo.eyebrow')}</span>
        <h2 className="wwd-title">
          {t('whatwedo.title_main')}<em>{t('whatwedo.title_italic')}</em>
        </h2>
        <p className="wwd-subtitle">
          {t('whatwedo.subtitle')}
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
                <span className="wwd-tag">{t(service.tagKey)}</span>
                <div className="wwd-icon" style={{ color: service.accent }}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="wwd-card-headline">{t(service.headlineKey)}</h3>
              <p className="wwd-card-desc">{t(service.descriptionKey)}</p>

              {/* Audience */}
              {service.audienceKey && (
                <p className="wwd-audience">{t(service.audienceKey)}</p>
              )}

              {/* Job categories */}
              {service.categoriesKeys && (
                <div className="wwd-categories">
                  {service.categoriesKeys.map((catKey) => (
                    <span className="wwd-badge" key={catKey}>
                      {t(catKey)}
                    </span>
                  ))}
                </div>
              )}

              {/* Reassurance */}
              {service.reassuranceKey && (
                <p className="wwd-reassurance">🔒 {t(service.reassuranceKey)}</p>
              )}

              {/* CTA */}
              <a href={service.href} className="wwd-cta">
                {t(service.ctaKey)}
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