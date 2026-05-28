import React from 'react'
import { useTranslation } from 'react-i18next' // 1. Import du hook
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '../data'
import Button from './Button'

const categoryColors = {
  Entrepreneurship: 'bg-purple-100 text-purple-700',
  Leadership:       'bg-pink-100 text-pink-700',
  Stories:          'bg-amber-100 text-amber-700',
}

const Blog = () => {
  const { t } = useTranslation(); // 2. Initialisation du hook t

  // Fonction pour adapter dynamiquement l'affichage du temps de lecture selon la langue
  const formatReadTime = (time, lang) => {
    // Si ton post.readTime est "5 min", on extrait le chiffre ou on gère l'affichage
    if (lang === 'fr') {
      return `${time.replace('read', '')} de lecture`;
    }
    return `${time}`;
  };

  return (
    <section id="blog" className="section-padding bg-purple-50/40">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 animate-on-scroll">
          <div>
            <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
              {t('blog.top_label')}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950">
              {t('blog.title')}
            </h2>
          </div>
          <Button variant="secondary" size="sm">
            {t('blog.view_all')} <ArrowRight size={15} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${i === 0 ? 'md:col-span-1' : ''}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {/* Traduction dynamique de la catégorie */}
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {t(`blog.categories.${post.category}`, post.category)} 
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={11} /> {post.readTime} {t('blog.read')}
                  </span>
                </div>
                {/* Note : Si tes posts dans data.js n'ont pas de versions traduites, ils afficheront le titre par défaut */}
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <a href="#" className="text-purple-600 hover:text-pink-600 text-sm font-medium flex items-center gap-1 transition-colors">
                    {t('blog.read_more')} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;