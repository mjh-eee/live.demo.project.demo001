import { Hero } from '@/components/sections/Hero';
import { StatsBand } from '@/components/sections/StatsBand';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ResultsGallery } from '@/components/sections/ResultsGallery';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesSection />
      <WhyChooseUs />
      <ResultsGallery />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
