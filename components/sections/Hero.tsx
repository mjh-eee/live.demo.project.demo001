'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-ink overflow-hidden grain-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Laser skin treatment"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pt-32 md:pt-40 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-8 bg-rose" />
            <span className="editorial-label text-rose">
              Laser &amp; Aesthetics Clinic · Dhaka
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display fluid-hero text-warm-white max-w-4xl text-balance"
          >
            Elevate your
            <br />
            <span className="text-rose">natural beauty.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg md:text-xl text-warm-white/60 leading-relaxed"
          >
            Our goal is to elevate your natural beauty rather than change it. Our experienced team will work with you to restore volume loss and leave you with a natural, refreshed look.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <ButtonLink href="/contact" variant="primary" size="lg">
              Book Consultation
            </ButtonLink>
            <ButtonLink href="/services" variant="light" size="lg">
              View Treatments
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
