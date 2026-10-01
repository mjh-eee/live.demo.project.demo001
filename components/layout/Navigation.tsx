'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { ButtonLink } from '@/components/ui/button';
import { MobileNav } from './MobileNav';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setHoveredDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || !isHome
            ? 'bg-warm-white/90 backdrop-blur-xl border-b border-line/60'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300',
              scrolled ? 'h-16' : 'h-20'
            )}
          >
            <Link
              href="/"
              className={cn(
                'font-serif-display text-xl tracking-tight transition-colors duration-300',
                scrolled || !isHome ? 'text-ink' : 'text-warm-white'
              )}
            >
              Skin Craft
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setHoveredDropdown(item.label)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200',
                      scrolled || !isHome
                        ? 'text-ink/70 hover:text-rose'
                        : 'text-warm-white/70 hover:text-warm-white'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    )}
                  </Link>
                  {item.children && hoveredDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-warm-white border border-line rounded-lg shadow-lg shadow-ink/5 py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-ink/70 hover:text-rose hover:bg-cream/50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ButtonLink
                href="/contact"
                variant={scrolled || !isHome ? 'primary' : 'light'}
                size="sm"
                className="hidden sm:inline-flex"
              >
                Book Consultation
              </ButtonLink>
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden p-2 -mr-2 transition-colors',
                  scrolled || !isHome ? 'text-ink' : 'text-warm-white'
                )}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
