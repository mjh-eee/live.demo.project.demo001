export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Treatments',
    href: '/services',
    children: [
      { label: 'Laser Hair Removal', href: '/services#laser-hair-removal' },
      { label: 'Skin Rejuvenation', href: '/services#skin-rejuvenation' },
      { label: 'Anti-Ageing', href: '/services#anti-ageing' },
      { label: 'Acne & Scarring', href: '/services#acne-scarring' },
      { label: 'Pigmentation', href: '/services#pigmentation' },
      { label: 'Body Contouring', href: '/services#body-contouring' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Results', href: '/#results' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  treatments: [
    { label: 'Laser Hair Removal', href: '/services#laser-hair-removal' },
    { label: 'Skin Rejuvenation', href: '/services#skin-rejuvenation' },
    { label: 'Anti-Ageing', href: '/services#anti-ageing' },
    { label: 'Acne & Scarring', href: '/services#acne-scarring' },
    { label: 'Pigmentation', href: '/services#pigmentation' },
    { label: 'Body Contouring', href: '/services#body-contouring' },
  ],
  clinic: [
    { label: 'About Us', href: '/about' },
    { label: 'Book Consultation', href: '/contact' },
    { label: 'Results Gallery', href: '/#results' },
    { label: 'FAQs', href: '/#faqs' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
