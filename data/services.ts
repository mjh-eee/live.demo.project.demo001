export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    shortDescription: 'Smooth, hair-free skin with advanced diode laser technology.',
    description:
      'Our state-of-the-art diode laser system delivers precise, comfortable hair removal for all skin types. Say goodbye to razors, waxing and ingrown hairs with a treatment plan tailored to your skin and hair type.',
    benefits: [
      'Suitable for all skin tones and types',
      'Permanent hair reduction',
      'Minimal discomfort with cooling technology',
      'Treats face and body areas',
    ],
    duration: '15-60 min per session',
    price: 'From ৳3,000',
    image: 'https://images.pexels.com/photos/3985356/pexels-photo-3985356.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Sparkles',
  },
  {
    id: 'skin-rejuvenation',
    name: 'Skin Rejuvenation',
    shortDescription: 'Restore radiance with IPL and fractional resurfacing.',
    description:
      'Reveal smoother, brighter skin with our advanced IPL and fractional laser treatments. Target sun damage, fine lines and uneven texture for a complexion that looks lit from within.',
    benefits: [
      'Reduces sun damage and age spots',
      'Stimulates collagen production',
      'Improves skin tone and texture',
      'Minimal downtime',
    ],
    duration: '30-45 min per session',
    price: 'From ৳5,500',
    image: 'https://images.pexels.com/photos/7446659/pexels-photo-7446659.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Sun',
  },
  {
    id: 'anti-ageing',
    name: 'Anti-Ageing Treatments',
    shortDescription: 'Smooth fine lines and restore youthful volume.',
    description:
      'Our anti-ageing treatments combine laser technology with advanced skincare to target fine lines, wrinkles and loss of elasticity. From collagen-stimulating lasers to targeted skin tightening, we help you look refreshed — never overdone.',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Boosts natural collagen',
      'Skin tightening and firming',
      'Natural-looking results',
    ],
    duration: '45-60 min per session',
    price: 'From ৳8,000',
    image: 'https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Heart',
  },
  {
    id: 'acne-scarring',
    name: 'Acne & Scarring',
    shortDescription: 'Clear skin with targeted laser and light therapy.',
    description:
      'Our acne and scarring programme uses fractional laser resurfacing and targeted light therapy to reduce active acne, smooth scarring and restore confidence in your skin.',
    benefits: [
      'Reduces active acne and inflammation',
      'Smooths acne scarring',
      'Minimises pore appearance',
      'Improves overall skin clarity',
    ],
    duration: '30-60 min per session',
    price: 'From ৳6,000',
    image: 'https://images.pexels.com/photos/7789649/pexels-photo-7789649.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Shield',
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation Correction',
    shortDescription: 'Even out skin tone and target dark spots.',
    description:
      'Whether caused by sun exposure, hormones or ageing, our pigmentation treatments use precision laser and IPL technology to break down excess melanin and restore an even, luminous complexion.',
    benefits: [
      'Targets sun spots and age spots',
      'Addresses melasma and hormonal pigmentation',
      'Evens out skin tone',
      'Safe for sensitive areas',
    ],
    duration: '30-45 min per session',
    price: 'From ৳4,500',
    image: 'https://images.pexels.com/photos/14438367/pexels-photo-14438367.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Droplet',
  },
  {
    id: 'body-contouring',
    name: 'Body Contouring',
    shortDescription: 'Sculpt and refine with non-invasive body treatments.',
    description:
      'Our non-surgical body contouring treatments target stubborn fat, tighten skin and refine your silhouette — no needles, no downtime. Using advanced laser and radio-frequency technology for visible, lasting results.',
    benefits: [
      'Non-invasive fat reduction',
      'Skin tightening and toning',
      'No downtime required',
      'Targets multiple areas',
    ],
    duration: '45-60 min per session',
    price: 'From ৳7,500',
    image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Zap',
  },
];
