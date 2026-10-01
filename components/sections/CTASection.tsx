'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-ink text-warm-white py-24 md:py-32 lg:py-40 grain-overlay relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-rose/20 blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="editorial-label text-rose inline-flex items-center gap-3 mb-8"
          >
            <span className="h-px w-8 bg-rose" />
            Start Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display fluid-hero text-warm-white text-balance"
          >
            Ready to reveal
            <br />
            your best skin?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <ButtonLink href="/contact" variant="primary" size="lg">
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
            <a
              href="tel:+8801334963618"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm font-medium tracking-wide rounded-full text-warm-white border border-warm-white/25 hover:bg-warm-white/10 backdrop-blur-sm transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
