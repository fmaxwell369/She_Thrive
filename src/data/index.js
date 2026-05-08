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
    id: 1,
    slug: 'empower-her',
    title: 'Empower HER',
    tagline: 'Equipping Women with Skills for Life and Income.',
    description:
      'Empower HER is the practical empowerment arm of SHE Thrive focused on training, equipping, and activating women.',
    audience: 'Women ready to grow, earn, and build a better future.',
    icon: '✦',
    color: 'purple',
    outcomes: ['Skills acquisition programs', 'Business & Entrepreneurship training', 'Workshops and Conferences', 'Personal development Sessions'],
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80',
  },
  {
    id: 2,
    slug: 'nation-builders',
    title: 'Nation Builders',
    tagline: 'Raising a Strong Community of Women Who Stand Together.',
    description:
      'Nation Builders is the heart and community arm of SHE Thrive — a safe, supportive space where women grow spiritually and emotionally together.',
    audience: 'Women who need support, healing, connection, and spiritual growth.',
    icon: '◆',
    color: 'pink',
    outcomes: ['Prayer and spiritual support systems', 'Counseling and mentorship', 'Community groups and accountability circles', 'Emotional and life support',],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
  },
]

/* ── Impact stats ─────────────────────────────────────────────── */
export const impactStats = [
  { value: 500,  suffix: '+', label: 'Women Trained',      icon: '👩‍🎓' },
  { value: 100,  suffix: '+', label: 'Businesses Started',  icon: '🏪' },
  { value: 3,    suffix: '+', label: 'Cities Reached',      icon: '🏙️' },
  { value: 95,   suffix: '%', label: 'Completion Rate',     icon: '🎯' },
]

/* ── Testimonials ─────────────────────────────────────────────── */
export const testimonials = [
  {
    id: 1,
    name: 'Stacy',
    role: 'Empower HER Graduate · Owner of ENJECK FARMS',
    quote:
      "Through the business grant support program by She Thrive International, I received the support and encouragement I needed to turn my vision into reality. With the grant, I successfully launched ENJECK FARMS — a growing poultry business committed to providing accessible, high-quality, locally produced poultry products.I am deeply grateful to She Thrive International for believing in my dream and giving me the platform to build a sustainable future.",
    image: tes_1,
    city: 'Douala',
  },
  {
    id: 2,
    name: 'Maureen',
    role: 'Nation Builders Fellow · Community Health Advocate',
    quote:
      "Dependence on external validation and the need for acceptance are psychological mechanisms in which self-esteem relies on the approval of others rather than on internal self-evaluation. Although it is natural to seek recognition, excessive dependence can become a major obstacle to personal growth and may reveal low self-esteem. Here is a detailed analysis of this phenomenon and how SHE thrive helped me to break free from it:1. Understanding Dependence on Validation e.g Feeling devastated by criticism, Making decisions based solely on other people’s opinions and Changing one’s behavior to please others.2. The Role of Acceptance3. How to Break Free from the Need for Validation- Practice self-validation, Identify your own values, Set boundaries, Mindfulness and Reduce the importance of social media",
    image: test_2,
    city: 'Douala',
  },
  {
    id: 3,
    name: 'Patience Eboule',
    role: 'Empower HER Graduate · Digital Entrepreneur',
    quote:
      'I went from selling snacks to running an online boutique with customers across Cameroon. SHE Thrive didn\'t just train me — they believed in me when I didn\'t believe in myself.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&q=80',
    city: 'Bafoussam',
  },
]

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
