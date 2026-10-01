import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/AnimatedText';
import { ButtonLink } from '@/components/ui/button';
import { CTASection } from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Treatments',
  description: 'Explore our full range of laser and aesthetic treatments at Skin Craft Laser & Aesthetics in Dhaka — from laser hair removal to skin rejuvenation and body contouring.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Treatments"
        title="Advanced care for"
        titleAccent="every skin."
        description="From laser hair removal to skin rejuvenation, our treatments are designed to deliver visible, lasting results — tailored to your unique skin."
        ctaLabel="Book Consultation"
        ctaHref="/contact"
      />

      <Section className="bg-warm-white" spacing="tight">
        <div className="max-w-4xl">
          <Eyebrow>Our Approach</Eyebrow>
          <FadeIn>
            <h2 className="mt-6 font-serif-display fluid-h2 text-ink text-balance mb-6">
              Every treatment begins with a consultation.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-brand leading-relaxed">
              We never guess. Every treatment plan starts with a thorough consultation — assessing your skin, understanding your goals and designing a plan that&apos;s right for you.
            </p>
          </FadeIn>
        </div>
      </Section>

      {services.map((service, i) => (
        <div
          key={service.id}
          id={service.id}
          className={`scroll-mt-24 ${i % 2 === 0 ? 'bg-cream' : 'bg-warm-white'}`}
        >
          <Section spacing="tight">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <FadeIn>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
              </div>
              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <FadeIn>
                  <Eyebrow>{service.duration} · {service.price}</Eyebrow>
                  <h2 className="mt-6 font-serif-display fluid-h2 text-ink text-balance mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg text-muted-brand leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-ink/70">
                        <Check className="w-4 h-4 text-rose mt-0.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/contact" variant="primary" size="md">
                    Book This Treatment
                  </ButtonLink>
                </FadeIn>
              </div>
            </div>
          </Section>
        </div>
      ))}

      <CTASection />
    </>
  );
}
