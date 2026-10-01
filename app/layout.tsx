import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skincraft-bd.com'),
  title: {
    default: 'Skin Craft Laser & Aesthetics | Premium Skin & Laser Clinic in Dhaka',
    template: '%s | Skin Craft Laser & Aesthetics',
  },
  description:
    'At Skin Craft Laser & Aesthetics, our goal is to elevate your natural beauty. Advanced laser treatments and aesthetic services in Dhaka, Bangladesh.',
  openGraph: {
    title: 'Skin Craft Laser & Aesthetics | Premium Skin & Laser Clinic in Dhaka',
    description:
      'At Skin Craft Laser & Aesthetics, our goal is to elevate your natural beauty. Advanced laser treatments in Dhaka, Bangladesh.',
    type: 'website',
    siteName: 'Skin Craft Laser & Aesthetics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skin Craft Laser & Aesthetics | Premium Skin & Laser Clinic in Dhaka',
    description:
      'At Skin Craft Laser & Aesthetics, our goal is to elevate your natural beauty. Advanced laser treatments in Dhaka, Bangladesh.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
