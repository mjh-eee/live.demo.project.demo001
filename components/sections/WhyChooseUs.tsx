'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/AnimatedText';
import { Sparkles, Shield, HeartHandshake, Award } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Advanced Technology',
    description: 'We invest in the latest FDA-cleared laser and aesthetic devices for safer, more effective treatments.',
  },
  {
    icon: Shield,
    title: 'Medical-Grade Safety',
    description: 'All treatments are performed by qualified practitioners in a fully regulated, clinical environment.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalised Care',
    description: 'Every treatment plan is tailored to your skin type, goals and concerns — never a one-size-fits-all approach.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Thousands of satisfied clients trust us with their skin. Our before-and-after gallery speaks for itself.',
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Why Skin Craft</Eyebrow>
          <FadeIn>
            <h2 className="mt-6 font-serif-display fluid-h1 text-ink text-balance">
              Expertise you can
              <br />
              <span className="text-rose">feel confident in.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-muted-brand leading-relaxed max-w-md">
              We combine medical expertise with genuine care. Every visit to Skin Craft is designed to leave you feeling informed, comfortable and delighted with your results.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="p-7 rounded-2xl bg-warm-white border border-line h-full">
                  <div className="w-11 h-11 rounded-full bg-rose-light flex items-center justify-center mb-5">
                    <feature.icon className="w-5 h-5 text-rose-dark" />
                  </div>
                  <h3 className="font-serif-display text-xl text-ink mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-brand leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
