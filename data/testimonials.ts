export interface Testimonial {
  quote: string;
  author: string;
  treatment: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I was nervous about laser treatment but the team put me completely at ease. After six sessions, my skin has never looked better. The results speak for themselves.',
    author: 'Sarah M.',
    treatment: 'Laser Hair Removal',
    rating: 5,
  },
  {
    quote:
      'The anti-ageing treatment has given me back my confidence. Friends keep asking what I have done differently — I just look rested and refreshed.',
    author: 'Jennifer K.',
    treatment: 'Anti-Ageing',
    rating: 5,
  },
  {
    quote:
      'After years of struggling with acne scarring, the fractional laser treatment has transformed my skin. I cannot recommend Skin Craft highly enough.',
    author: 'Aisha R.',
    treatment: 'Acne & Scarring',
    rating: 5,
  },
  {
    quote:
      'Professional, welcoming and genuinely caring. The pigmentation on my cheeks has faded dramatically. Worth every penny.',
    author: 'Christine L.',
    treatment: 'Pigmentation Correction',
    rating: 5,
  },
];
