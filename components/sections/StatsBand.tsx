'use client';

import { motion } from 'framer-motion';
import { Stagger, StaggerItem } from '@/components/ui/AnimatedText';

const stats = [
  { value: '11K+', label: 'Followers' },
  { value: '6', label: 'Following' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '20+', label: 'Treatment Types' },
];

export function StatsBand() {
  return (
    <section className="bg-rose text-warm-white py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center md:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif-display fluid-stat block"
                >
                  {stat.value}
                </motion.span>
                <span className="editorial-label text-warm-white/70 mt-2 block">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
