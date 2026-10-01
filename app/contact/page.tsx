'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Check, AlertCircle, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react';

type FormState = 'default' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

const treatments = [
  'Laser Hair Removal',
  'Skin Rejuvenation',
  'Anti-Ageing',
  'Acne & Scarring',
  'Pigmentation',
  'Body Contouring',
  'Not sure yet',
];

export default function ContactPage() {
  const [state, setState] = useState<FormState>('default');
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 1500);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Let's talk about"
        titleAccent="your skin."
        description="Book your free consultation today. We'll assess your skin, discuss your goals and create a personalised treatment plan."
      />

      <Section className="bg-warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-12 rounded-2xl border border-rose/20 bg-cream/40 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-rose text-warm-white flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h2 className="font-serif-display text-3xl text-ink mb-4">
                    Thank you!
                  </h2>
                  <p className="text-muted-brand leading-relaxed max-w-md mx-auto">
                    Your consultation request has been received. Our team will call you within 24 hours to schedule your appointment.
                  </p>
                </motion.div>
              ) : state === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-12 rounded-2xl border border-rose-dark/30 bg-rose-light/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-rose-dark text-warm-white flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h2 className="font-serif-display text-3xl text-ink mb-4">
                    Something went wrong.
                  </h2>
                  <p className="text-muted-brand leading-relaxed mb-6">
                    Please try again or call us directly.
                  </p>
                  <Button onClick={() => setState('default')} variant="outline">
                    Try Again
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Full Name"
                      required
                      value={form.name}
                      onChange={(v) => handleChange('name', v)}
                      error={errors.name}
                    />
                    <FormField
                      label="Phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(v) => handleChange('phone', v)}
                      error={errors.phone}
                    />
                  </div>

                  <FormField
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => handleChange('email', v)}
                    error={errors.email}
                  />

                  <div>
                    <label className="editorial-label text-muted-brand mb-3 block">
                      What treatment are you interested in?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {treatments.map((treatment) => (
                        <button
                          key={treatment}
                          type="button"
                          onClick={() => handleChange('treatment', treatment)}
                          className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                            form.treatment === treatment
                              ? 'bg-rose text-warm-white border-rose'
                              : 'border-line text-muted-brand hover:border-rose/30 hover:text-ink'
                          }`}
                        >
                          {treatment}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="editorial-label text-muted-brand mb-3 block">
                      Message (optional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      className="w-full px-5 py-3.5 rounded-xl border border-line bg-cream/20 text-ink outline-none focus:border-rose/40 transition-colors resize-none"
                      placeholder="Tell us about your skin concerns or questions..."
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={state === 'loading'}
                      className="w-full sm:w-auto"
                    >
                      {state === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Book My Consultation'
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5">
            <FadeIn>
              <Eyebrow>Visit Us</Eyebrow>
              <h2 className="mt-6 font-serif-display fluid-h2 text-ink text-balance mb-8">
                We&apos;d love to hear from you.
              </h2>
              <div className="space-y-6">
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+880 1334-963618"
                  href="tel:+8801334963618"
                />
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="scle.dhk@gmail.com"
                  href="mailto:scle.dhk@gmail.com"
                />
                <ContactItem
                  icon={MapPin}
                  label="Address"
                  value="House #40, Block-L, Road #12, South Banasree, Dhaka, Bangladesh"
                />
                <ContactItem
                  icon={Clock}
                  label="Opening Hours"
                  value="Mon-Sat: 9am - 7pm · Sun: Closed"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  error?: string;
}

function FormField({ label, value, onChange, required, type = 'text', error }: FormFieldProps) {
  return (
    <div>
      <label className="editorial-label text-muted-brand mb-3 block">
        {label} {required && <span className="text-rose">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-5 py-3.5 rounded-xl border bg-cream/20 text-ink outline-none transition-colors ${
          error
            ? 'border-rose-dark/50 focus:border-rose-dark'
            : 'border-line focus:border-rose/40'
        }`}
      />
      {error && (
        <p className="mt-2 text-sm text-rose-dark flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 p-5 rounded-xl border border-line bg-cream/30 hover:border-rose/30 transition-colors">
      <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-rose-dark" />
      </div>
      <div>
        <span className="editorial-label text-muted-brand block mb-1">{label}</span>
        <span className="text-ink">{value}</span>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
