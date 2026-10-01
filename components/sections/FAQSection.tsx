'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn } from '@/components/ui/AnimatedText';
import { ButtonLink } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is laser treatment safe for all skin types?',
    answer:
      'Yes. We use advanced diode laser technology that is FDA-cleared and suitable for all skin tones and types. During your consultation, we assess your skin and tailor the treatment settings to ensure maximum safety and effectiveness.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'This depends on the treatment and your individual goals. Laser hair removal typically requires 6-8 sessions for optimal results, while skin rejuvenation may show visible improvement after 3-4 sessions. We provide a personalised treatment plan during your consultation.',
  },
  {
    question: 'Is there any downtime after treatment?',
    answer:
      'Most of our treatments have minimal to no downtime. You may experience slight redness for a few hours after laser treatments, but this typically resolves quickly. We provide detailed aftercare instructions for every treatment.',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes, we offer complimentary consultations for all new clients. This gives you the opportunity to discuss your goals, ask questions and receive a personalised treatment plan with no obligation.',
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      'Preparation varies by treatment. For laser hair removal, we recommend shaving the area 24 hours before and avoiding sun exposure. We provide full preparation guidelines when you book your appointment.',
  },
];

export function FAQSection() {
  return (
    <Section className="bg-warm-white" id="faqs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Questions</Eyebrow>
          <FadeIn>
            <h2 className="mt-6 font-serif-display fluid-h1 text-ink text-balance">
              Good to
              <br />
              <span className="text-rose">know.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-muted-brand leading-relaxed max-w-md">
              Have a question that&apos;s not answered here? Get in touch — our team is happy to help.
            </p>
          </FadeIn>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="outline" size="md">
              Ask a Question
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <FadeIn>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-line rounded-xl bg-cream/30 px-6 md:px-8 overflow-hidden data-[state=open]:border-rose/30 data-[state=open]:bg-cream/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-serif-display text-lg md:text-xl text-ink pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-brand leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
