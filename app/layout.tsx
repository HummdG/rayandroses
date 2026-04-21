import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ray & Roses | Bespoke Wedding & Event Styling London',
  description:
    'Ray & Roses is a luxury event styling studio based in London, specialising in weddings, baby showers, bridal showers, birthdays, and bespoke styled events. Available to travel.',
  keywords: [
    'event stylist london',
    'wedding styling london',
    'event decorator london',
    'bespoke event styling',
    'wedding stylist london',
    'luxury event styling',
    'baby shower styling',
    'bridal shower styling',
    'birthday event styling',
  ],
  metadataBase: new URL('https://rayandroses.com'),
  alternates: { canonical: 'https://rayandroses.com' },
  openGraph: {
    title: 'Ray & Roses | Bespoke Wedding & Event Styling London',
    description:
      'Ray & Roses is a luxury event styling studio based in London, specialising in weddings, baby showers, bridal showers, birthdays, and bespoke styled events.',
    url: 'https://rayandroses.com',
    siteName: 'Ray & Roses',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ray & Roses | Bespoke Wedding & Event Styling London',
    description:
      'Ray & Roses is a luxury event styling studio based in London, specialising in weddings, baby showers, bridal showers, birthdays, and bespoke styled events.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
