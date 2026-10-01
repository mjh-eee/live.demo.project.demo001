'use client';

import Link from 'next/link';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { footerNav } from '@/data/navigation';
import { ButtonLink } from '@/components/ui/button';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-ink text-warm-white">
      <Container size="wide">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-serif-display fluid-h2 text-warm-white text-balance">
                Your journey to radiant skin starts here.
              </h2>
              <p className="mt-6 text-warm-white/50 max-w-md leading-relaxed">
                Book a complimentary consultation with our expert team and discover the right treatment plan for your skin.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Book Consultation
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <FooterColumn title="Treatments" links={footerNav.treatments} />
              <FooterColumn title="Clinic" links={footerNav.clinic} />
              <FooterColumn title="Legal" links={footerNav.legal} />
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-warm-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col gap-3">
                <a href="tel:+8801334963618" className="flex items-center gap-2 text-sm text-warm-white/60 hover:text-rose transition-colors">
                  <Phone className="w-4 h-4" />
                  +880 1334-963618
                </a>
                <a href="mailto:scle.dhk@gmail.com" className="flex items-center gap-2 text-sm text-warm-white/60 hover:text-rose transition-colors">
                  <Mail className="w-4 h-4" />
                  scle.dhk@gmail.com
                </a>
                <span className="flex items-center gap-2 text-sm text-warm-white/60">
                  <MapPin className="w-4 h-4" />
                  House #40, Block-L, Road #12, South Banasree, Dhaka, Bangladesh
                </span>
              </div>
              <div className="flex md:justify-end items-start gap-3">
                <SocialLink href="https://facebook.com" label="Facebook">
                  <Facebook className="w-4 h-4" />
                </SocialLink>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <span className="font-serif-display text-sm tracking-tight text-warm-white/80">
                Skin Craft Laser &amp; Aesthetics
              </span>
              <span className="text-xs text-warm-white/40">
                © {new Date().getFullYear()} Skin Craft Laser &amp; Aesthetics. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="editorial-label text-warm-white/40 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-warm-white/70 hover:text-rose transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-warm-white/15 text-warm-white/60 hover:text-rose hover:border-rose/40 transition-colors"
    >
      {children}
    </a>
  );
}
