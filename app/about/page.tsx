import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/AnimatedText';
import { ButtonLink } from '@/components/ui/button';
import { CTASection } from '@/components/sections/CTASection';
import Image from 'next/image';
import { Award, HeartHandshake, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the team behind Skin Craft Laser & Aesthetics — Dhaka\'s premium skin and laser clinic.',
};

const team = [
  { name: 'Dr. Emma Hartley', role: 'Clinical Director', bio: 'With over 15 years of experience in aesthetic medicine, Dr. Hartley leads our clinical team with a passion for natural-looking results.', image: 'https://images.pexels.com/photos/7789640/pexels-photo-7789640.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Sophie Chen', role: 'Senior Laser Therapist', bio: 'Sophie specialises in laser hair removal and skin rejuvenation, with advanced certifications in the latest laser technologies.', image: 'https://images.pexels.com/photos/7789649/pexels-photo-7789649.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Dr. James Okoye', role: 'Aesthetic Physician', bio: 'Dr. Okoye brings expertise in anti-ageing treatments and body contouring, with a focus on holistic, patient-centred care.', image: 'https://images.pexels.com/photos/3985361/pexels-photo-3985361.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const values = [
  { icon: Sparkles, title: 'Excellence', description: 'We invest in the best technology and training to deliver outstanding results.' },
  { icon: Shield, title: 'Safety First', description: 'Every treatment is performed to the highest medical safety standards.' },
  { icon: HeartHandshake, title: 'Genuine Care', description: 'We treat every client with empathy, honesty and respect.' },
  { icon: Award, title: 'Integrity', description: 'We only recommend treatments that are right for you — never upselling.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Skin Craft"
        title="Beautiful skin,"
        titleAccent="expertly delivered."
        description="We are a team of medical professionals and aesthetic specialists dedicated to helping you look and feel your best."
      />

      <Section className="bg-warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Our Story</Eyebrow>
            <FadeIn>
              <h2 className="mt-6 font-serif-display fluid-h2 text-ink text-balance">
                Founded on a passion for skin.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-brand leading-relaxed mb-6">
                Skin Craft was founded with a simple belief: everyone deserves to feel confident in their skin. Our goal is to elevate your natural beauty rather than change it. We saw too many clinics treating clients like numbers — rushing consultations, over-promising results and prioritising sales over care.
              </p>
              <p className="text-lg text-muted-brand leading-relaxed mb-6">
                So we built something different. A clinic where every treatment is grounded in medical expertise, where consultations are thorough and honest, and where the technology is genuinely world-class.
              </p>
              <p className="text-lg text-muted-brand leading-relaxed">
                Today, Skin Craft is one of Dhaka\'s most trusted laser and aesthetic clinics — with a growing community of happy clients and a reputation for natural, beautiful results.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-cream" spacing="tight">
        <div className="max-w-4xl mb-16">
          <Eyebrow>Our Values</Eyebrow>
          <FadeIn>
            <h2 className="mt-6 font-serif-display fluid-h2 text-ink text-balance">
              What we stand for.
            </h2>
          </FadeIn>
        </div>
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="p-7 rounded-2xl bg-warm-white border border-line h-full">
                <div className="w-11 h-11 rounded-full bg-rose-light flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-rose-dark" />
                </div>
                <h3 className="font-serif-display text-xl text-ink mb-2">{value.title}</h3>
                <p className="text-sm text-muted-brand leading-relaxed">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-warm-white">
        <div className="max-w-4xl mb-16">
          <Eyebrow>Meet the Team</Eyebrow>
          <FadeIn>
            <h2 className="mt-6 font-serif-display fluid-h2 text-ink text-balance">
              The experts behind your results.
            </h2>
          </FadeIn>
        </div>
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="flex flex-col">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-serif-display text-xl text-ink">{member.name}</h3>
                  <p className="editorial-label text-rose mt-1">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-brand leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-cream" spacing="tight">
        <div className="max-w-4xl">
          <Eyebrow>Our Clinic</Eyebrow>
          <FadeIn>
            <h2 className="mt-6 font-serif-display fluid-h2 text-ink text-balance mb-8">
              A space designed for calm.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-brand leading-relaxed mb-8">
              Our clinic in South Banasree, Dhaka has been designed to feel calm, private and welcoming — a world away from the clinical, intimidating environments you might expect.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7789603/pexels-photo-7789603.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clinic interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7789620/pexels-photo-7789620.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Treatment room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary" size="lg">
              Visit Us
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
