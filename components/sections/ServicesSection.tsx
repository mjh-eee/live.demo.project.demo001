'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Stagger, StaggerItem } from '@/components/ui/AnimatedText';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <Section className="bg-warm-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-3xl">
          <Eyebrow>Our Treatments</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif-display fluid-h1 text-ink text-balance"
          >
            Advanced treatments,
            <br />
            <span className="text-rose">tailored to you.</span>
          </motion.h2>
        </div>
        <Link
          href="/services"
          className="text-sm font-medium text-rose hover:text-rose-dark transition-colors inline-flex items-center gap-2"
        >
          View all treatments
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <Link
              href={`/services#${service.id}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-line bg-cream/30 hover:border-rose/30 transition-all duration-300 h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="editorial-label bg-warm-white/90 px-3 py-1.5 rounded-full text-ink">
                    {service.duration}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="font-serif-display text-2xl text-ink mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-brand leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="mt-6 pt-6 border-t border-line flex items-center justify-between">
                  <span className="text-sm font-medium text-rose">{service.price}</span>
                  <span className="text-xs text-muted-brand group-hover:text-rose transition-colors inline-flex items-center gap-1">
                    Learn more
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
