import tes_1 from '../assets/tes_1.png';
import test_2 from '../assets/test_2.png';
import conf_1 from '../assets/conf_1.png';
import conf_3 from '../assets/conf_3.png';
import conf_7 from '../assets/conf_7.png';
import conf_8 from '../assets/conf_8.png';
import conf_5 from '../assets/conf_5.png';
import conf_6 from '../assets/conf_6.png';


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
      'programs.items.empower_her.outcomes.3'
    ],
    
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80',
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
      'programs.items.nation_builders.outcomes.3'
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    icon: '◆',
    color: 'pink',
  },
]

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
    title: '5 Ways Women-Led Businesses Are Transforming Cameroon',
    excerpt: 'Across Yaoundé and Douala, a new generation of women entrepreneurs is rewriting the rules of business — and the economy is taking notice.',
    date: 'Feb 12, 2025',
    category: 'Entrepreneurship',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&q=80',
  },
  {
    id: 2,
    title: 'Why Leadership Training for Women Matters More Than Ever',
    excerpt: 'Research consistently shows that when women lead, communities thrive. Here\'s what our Nation Builders program is doing to close the gender leadership gap.',
    date: 'Jan 28, 2025',
    category: 'Leadership',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  },
  {
    id: 3,
    title: 'Meet the Women Building Businesses From Scratch',
    excerpt: 'Three graduates from our Empower HER program share their journeys from uncertainty to confidence — and what\'s next for their growing ventures.',
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
