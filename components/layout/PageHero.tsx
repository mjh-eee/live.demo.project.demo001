'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'dark' | 'light';
}

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  ctaLabel,
  ctaHref,
  variant = 'dark',
}: PageHeroProps) {
  const isDark = variant === 'dark';

  return (
    <section className={cn(
      'relative overflow-hidden',
      isDark ? 'bg-ink grain-overlay' : 'bg-cream'
    )}>
      {isDark && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-rose/20 blur-[100px]" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="pt-32 md:pt-40 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className={cn('h-px w-8', isDark ? 'bg-rose' : 'bg-rose')} />
            <span className={cn('editorial-label', isDark ? 'text-rose' : 'text-rose')}>
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'font-serif-display fluid-hero max-w-5xl text-balance',
              isDark ? 'text-warm-white' : 'text-ink'
            )}
          >
            {title}
            {titleAccent && (
              <br />
            )}
            {titleAccent && (
              <span className="text-rose">
                {titleAccent}
              </span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                'mt-8 max-w-xl text-lg md:text-xl leading-relaxed',
                isDark ? 'text-warm-white/60' : 'text-muted-brand'
              )}
            >
              {description}
            </motion.p>
          )}

          {ctaLabel && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10"
            >
              <ButtonLink href={ctaHref} variant={isDark ? 'primary' : 'primary'} size="lg">
                {ctaLabel}
              </ButtonLink>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
