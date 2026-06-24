import tes_1 from '../assets/tes_1.png';
import test_2 from '../assets/test_2.png';
import conf_1 from '../assets/conf_1.png';
import conf_3 from '../assets/conf_3.png';
import conf_7 from '../assets/conf_7.png';
import conf_8 from '../assets/conf_8.png';
import conf_5 from '../assets/conf_5.png';
import conf_6 from '../assets/conf_6.png';
import she_thrive_1 from '../assets/she_thrive_1.jpeg';
import she_thrive_2 from '../assets/she_thrive_2.jpeg';


/* ── Programs ─────────────────────────────────────────────────── */
export const programs = [
  {
    id: 'empower-her',
    titleKey: 'programs.items.empower_her.title',
    taglineKey: 'programs.items.empower_her.tagline',
    descKey: 'programs.items.empower_her.desc',
    audienceKey: 'programs.items.empower_her.audience',
    // Tableau de clés pour i18next
    outcomesKeys: [
      'programs.items.empower_her.outcomes.0',
      'programs.items.empower_her.outcomes.1',
      'programs.items.empower_her.outcomes.2',
      'programs.items.empower_her.outcomes.3',
      'programs.items.empower_her.outcomes.4',
      'programs.items.empower_her.outcomes.5',
      'programs.items.empower_her.outcomes.6',
      'programs.items.empower_her.outcomes.7'
    ],
    
    image: she_thrive_2,
    color: 'purple',
    icon: '✦',
  },
  {
    id: 'nation-builders',
    titleKey: 'programs.items.nation_builders.title',
    descKey: 'programs.items.nation_builders.desc',
    slug: 'nation-builders',
    taglineKey: 'programs.items.nation_builders.tagline',
    audienceKey: 'programs.items.nation_builders.audience',
    
    outcomesKeys: [
      'programs.items.nation_builders.outcomes.0',
      'programs.items.nation_builders.outcomes.1',
      'programs.items.nation_builders.outcomes.2',
      'programs.items.nation_builders.outcomes.3',
      'programs.items.nation_builders.outcomes.4',
      'programs.items.nation_builders.outcomes.5',
      'programs.items.nation_builders.outcomes.6',
      'programs.items.nation_builders.outcomes.7'
    ],
    image: conf_3,
    icon: '✦',
    color: 'pink',
  },
  {
    id: 'Wellness_For_Life',
    titleKey: 'programs.items.Wellness_For_Life.title',
    taglineKey: 'programs.items.Wellness_For_Life.tagline',
    descKey: 'programs.items.Wellness_For_Life.desc',
    audienceKey: 'programs.items.Wellness_For_Life.audience',
    outcomesKeys: [
      'programs.items.Wellness_For_Life.outcomes.0',
      'programs.items.Wellness_For_Life.outcomes.1',
      'programs.items.Wellness_For_Life.outcomes.2',
      'programs.items.Wellness_For_Life.outcomes.3',
      'programs.items.Wellness_For_Life.outcomes.4',
      'programs.items.Wellness_For_Life.outcomes.5',
      'programs.items.Wellness_For_Life.outcomes.6',
      'programs.items.Wellness_For_Life.outcomes.7'
    ],
    image: she_thrive_1,
    icon: '✦',
    color: 'purple',
  }
];


/* ── Impact stats ─────────────────────────────────────────────── */
export const impactStats = [
  { value: 500, suffix: '+', labelKey: 'impact.labels.trained', icon: '👩‍🎓' },
  { value: 100, suffix: '+', labelKey: 'impact.labels.businesses', icon: '💼' },
  { value: 3,   suffix: '+', labelKey: 'impact.labels.cities', icon: '📍' },
  { value: 98,  suffix: '%', labelKey: 'impact.labels.satisfaction', icon: '✨' },
];

/* ── Testimonials ─────────────────────────────────────────────── */
export const testimonials = [
  {
    id: 1,
    name: 'Stacy',
    roleKey: 'impact.quotes.roles.stacy',
    quoteKey: 'impact.quotes.testimonial_1',
    image: tes_1,
    city: 'impact.quotes.cities.douala',
  },
  {
    id: 2,
    name: 'Maureen',
    roleKey: 'impact.quotes.roles.maureen',
    quoteKey: 'impact.quotes.testimonial_2',
    image: test_2,
    city: 'impact.quotes.cities.douala',
  },
  {
    id: 3,
    name: 'Patience Eboule',
    roleKey: 'impact.quotes.roles.patience',
    quoteKey: 'impact.quotes.testimonial_3',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    city: 'impact.quotes.cities.bafoussam',
  },
];
/* ── Blog posts ───────────────────────────────────────────────── */
export const blogPosts = [
  {
    id: 1,
    titleKey: 'blog.posts.1.title',
    excerptKey: 'blog.posts.1.excerpt',
    date: 'Feb 12, 2025',
    category: 'Entrepreneurship',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&q=80',
  },
  {
    id: 2,
    titleKey: 'blog.posts.2.title',
    excerptKey: 'blog.posts.2.excerpt',
    date: 'Jan 28, 2025',
    category: 'Leadership',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  },
  {
    id: 3,
    titleKey: 'blog.posts.3.title',
    excerptKey: 'blog.posts.3.excerpt',
    date: 'Jan 10, 2025',
    category: 'Stories',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80',
  },
]

/* ── Gallery images ───────────────────────────────────────────── */
export const galleryImages = [
  { id: 1, src: conf_1, alt: 'Women in training workshop' },
  { id: 2, src: conf_3, alt: 'Leadership session' },
  { id: 3, src: conf_7, alt: 'Sewing skills training' },
  { id: 4, src: conf_8, alt: 'Graduation ceremony' },
  { id: 5, src: conf_5, alt: 'Community meeting' },
  { id: 6, src: conf_6, alt: 'Mentor session' },
]
