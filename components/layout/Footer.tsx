import Image from 'next/image'

const navLinks = ['#services', '#about', '#gallery', '#testimonials', '#contact']

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white/60">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/brand/logo.png"
              alt="Ray & Roses"
              width={64}
              height={64}
              className="h-16 w-16 object-contain mb-4 opacity-90"
            />
            <p className="font-cormorant text-xl text-white/90 mb-2">Ray & Roses</p>
            <p className="font-inter font-light text-sm leading-relaxed text-white/45 mt-2">
              Crafting unforgettable moments,<br />one detail at a time.
            </p>
            <p className="font-inter font-light text-xs text-white/35 mt-4">
              London · Available to Travel
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-inter text-xs tracking-[0.22em] uppercase text-gold mb-6">Navigate</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((href) => (
                <a
                  key={href}
                  href={href}
                  className="font-inter font-light text-sm text-white/50 hover:text-gold transition-colors capitalize"
                >
                  {href.replace('#', '')}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-inter text-xs tracking-[0.22em] uppercase text-gold mb-6">Get in Touch</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:bookings@rayandroses.com"
                className="font-inter font-light text-sm text-white/50 hover:text-gold transition-colors break-all"
              >
                bookings@rayandroses.com
              </a>
              <a
                href="tel:07398145428"
                className="font-inter font-light text-sm text-white/50 hover:text-gold transition-colors"
              >
                07398 145 428
              </a>
              <a
                href="https://wa.me/447398145428"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-light text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/rayandroses"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-light text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4" />
                @rayandroses
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter font-light text-xs text-white/25">
            © {new Date().getFullYear()} Ray & Roses. All rights reserved.
          </p>
          <p className="font-inter font-light text-xs text-white/25">
            Bespoke Wedding & Event Styling · London
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}
