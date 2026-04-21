export interface Service {
  id: string
  name: string
  descriptor: string
  image: string
  alt: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  event?: string
}

export const services: Service[] = [
  {
    id: 'weddings',
    name: 'Luxury Weddings',
    descriptor: 'Timeless elegance from ceremony to reception',
    image: '/gallery/pic6.png',
    alt: 'Grand white wedding marquee with tall floral centrepieces and chiavari chairs',
  },
  {
    id: 'baby-showers',
    name: 'Elegant Baby Showers',
    descriptor: "Soft, celebratory styling for life's new beginnings",
    image: '/gallery/pic5.png',
    alt: 'Elegant gold table runner with golden roses and white plates',
  },
  {
    id: 'bridal-showers',
    name: 'Bespoke Bridal Showers',
    descriptor: 'Intimate and feminine pre-wedding celebrations',
    image: '/gallery/pic8.png',
    alt: 'Blush pink sweetheart table with illuminated arch and pink florals',
  },
  {
    id: 'birthdays',
    name: 'Styled Birthdays',
    descriptor: 'Vibrant, personalised styling for milestone moments',
    image: '/gallery/pic3.png',
    alt: "Kemi's 50th birthday Mediterranean blue and white themed table setting",
  },
  {
    id: 'proposals',
    name: 'Romantic Proposals',
    descriptor: "Curated settings for life's most magical question",
    image: '/gallery/pic10.png',
    alt: 'White flower heart arch with will you marry me neon sign',
  },
  {
    id: 'dessert-tables',
    name: 'Dessert Table Styling',
    descriptor: 'Stunning sweet displays that double as décor',
    image: '/gallery/pic4.png',
    alt: 'White and copper dessert table with floral arch arrangement',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Get in Touch',
    description:
      'Reach out via the enquiry form, email, or WhatsApp to share your event idea and get the conversation started.',
  },
  {
    step: 2,
    title: 'Creative Consultation',
    description:
      "We'll talk through your vision, inspiration, and wishlist, turning your ideas into a clear creative direction.",
  },
  {
    step: 3,
    title: 'Design & Planning',
    description:
      'A full concept is developed: colour palette, layout, florals, and every last detail, crafted specifically for you.',
  },
  {
    step: 4,
    title: 'Your Perfect Event',
    description:
      'Sit back and enjoy. We handle the full setup and styling, delivering a flawless result on the day.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'This looks like a literal dream! The all-white setup is just perfection.',
    author: 'Client Review',
  },
  {
    id: '2',
    quote: 'Was even more beautiful in person!',
    author: 'Client Review',
  },
  {
    id: '3',
    quote: 'Lovelyyyyy!! Thank you soo much. So simple yet smooth!',
    author: 'Client Review',
  },
  {
    id: '4',
    quote:
      'Seeing this was such a beautiful reminder of what Robert (Jnr) and I walked into. Ray understood our vision, and she deffo did her thing!!! Thank you @rayandroses',
    author: 'Wedding Client',
    event: 'Wedding',
  },
  {
    id: '5',
    quote: 'Most beautiful day ever with the most beautiful decor.',
    author: 'Client Review',
    event: 'Special Event',
  },
  {
    id: '6',
    quote: 'Sooooo perfect! Exceeded our expectations.',
    author: 'Client Review',
  },
  {
    id: '7',
    quote:
      'Ray transformed our baby shower into something out of a dream. Every single detail was perfect, from the flowers to the table settings.',
    author: 'Sarah & James',
    event: 'Baby Shower',
  },
  {
    id: '8',
    quote:
      "The dessert table alone had our guests gasping. It looked like it belonged in a magazine. Everyone kept asking who styled it.",
    author: 'Amara O.',
    event: 'Birthday Celebration',
  },
  {
    id: '9',
    quote:
      'Everything was styled so beautifully and with so much care. It honestly felt magical the moment we walked in.',
    author: 'Temi & David',
    event: 'Wedding',
  },
  {
    id: '10',
    quote:
      'Ray brought the whole vision together so effortlessly. Every single detail looked absolutely stunning.',
    author: 'Priya M.',
    event: 'Bridal Shower',
  },
  {
    id: '11',
    quote:
      'Such a smooth experience and such a gorgeous result. It looked even better than I had imagined. Thank you so much.',
    author: 'Yemi A.',
    event: 'Birthday Celebration',
  },
]
