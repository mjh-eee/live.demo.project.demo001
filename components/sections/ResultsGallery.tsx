'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn } from '@/components/ui/AnimatedText';

const results = [
  {
    image: 'https://images.pexels.com/photos/3762754/pexels-photo-3762754.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Skin Rejuvenation',
    caption: 'After 3 sessions',
  },
  {
    image: 'https://images.pexels.com/photos/3762405/pexels-photo-3762405.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Pigmentation Correction',
    caption: 'After 4 sessions',
  },
  {
    image: 'https://images.pexels.com/photos/32707142/pexels-photo-32707142.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Anti-Ageing',
    caption: 'After 6 weeks',
  },
  {
    image: 'https://images.pexels.com/photos/8989973/pexels-photo-8989973.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Laser Hair Removal',
    caption: 'After 5 sessions',
  },
];

export function ResultsGallery() {
  return (
    <Section className="bg-warm-white" id="results">
      <div className="max-w-3xl mb-16">
        <Eyebrow>Real Results</Eyebrow>
        <FadeIn>
          <h2 className="mt-6 font-serif-display fluid-h1 text-ink text-balance">
            Transformations that
            <br />
            <span className="text-rose">speak for themselves.</span>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {results.map((result, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <Image
              src={result.image}
              alt={result.label}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="editorial-label text-rose-light block mb-1">
                {result.label}
              </span>
              <span className="text-sm text-warm-white/80">
                {result.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
