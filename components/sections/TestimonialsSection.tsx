'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Stagger, StaggerItem } from '@/components/ui/AnimatedText';
import { testimonials } from '@/data/testimonials';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <Section className="bg-pearl">
      <div className="max-w-3xl mb-16">
        <Eyebrow>Client Stories</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif-display fluid-h1 text-ink text-balance"
        >
          Loved by our
          <br />
          <span className="text-rose">clients.</span>
        </motion.h2>
      </div>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.author}>
            <div className="p-8 md:p-10 rounded-2xl bg-warm-white border border-line h-full">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif-display text-xl md:text-2xl text-ink leading-snug mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-line">
                <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center font-serif-display text-lg text-rose-dark">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{testimonial.author}</p>
                  <p className="text-xs text-muted-brand">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
