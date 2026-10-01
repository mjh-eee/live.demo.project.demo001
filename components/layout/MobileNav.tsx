'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { ButtonLink } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-ink lg:hidden"
        >
          <div className="flex items-center justify-between h-20 px-6">
            <span className="font-serif-display text-xl text-warm-white">
              Skin Craft
            </span>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-warm-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-6 pt-8 pb-12 overflow-y-auto h-[calc(100vh-5rem)]">
            <nav className="flex flex-col gap-1">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 font-serif-display text-3xl text-warm-white/90 hover:text-rose transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 flex flex-col gap-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-warm-white/50 hover:text-rose transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="mt-10">
              <ButtonLink href="/contact" variant="primary" size="lg" className="w-full">
                Book Consultation
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
