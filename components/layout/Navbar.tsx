'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Ray & Roses Event Styling"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-xs tracking-[0.2em] uppercase text-charcoal/65 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex font-inter text-xs tracking-[0.2em] uppercase px-6 py-3 bg-gold text-white hover:bg-gold-deep transition-colors duration-200"
          >
            Book an Event
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream/98 backdrop-blur-sm ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-inter text-xs tracking-[0.2em] uppercase text-charcoal/65 hover:text-gold transition-colors py-3 border-b border-blush-deep last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase text-center py-4 hover:bg-gold-deep transition-colors"
          >
            Book an Event
          </a>
        </div>
      </div>
    </nav>
  )
}
