import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative">
      {/* ── Mobile hero ─────────────────────────────────── */}
      <div className="md:hidden relative h-screen">
        <Image
          src="/gallery/pic8.png"
          alt="Elegant blush floral sweetheart table styled by Ray & Roses"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/85 via-charcoal-dark/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-16">
          <p className="font-inter text-xs tracking-[0.28em] uppercase text-gold mb-4 font-light">
            London Event Styling
          </p>
          <h1 className="font-cormorant font-light text-5xl leading-[1.1] text-white mb-5">
            Every Detail,<br />Beautifully<br />Styled
          </h1>
          <p className="font-inter font-light text-sm text-white/75 leading-relaxed mb-8 max-w-xs">
            Bespoke wedding & event styling for life's most memorable moments.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase text-center px-8 py-4 hover:bg-gold-deep transition-colors"
            >
              Start Your Enquiry
            </a>
            <a
              href="#gallery"
              className="border border-white text-white font-inter text-xs tracking-[0.2em] uppercase text-center px-8 py-4 hover:bg-white/10 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop hero ─────────────────────────────────── */}
      <div className="hidden md:flex min-h-screen">
        {/* Left text pane */}
        <div className="w-[55%] flex flex-col justify-center px-16 xl:px-24 pt-20 bg-cream">
          <p className="font-inter text-xs tracking-[0.28em] uppercase text-gold mb-6 font-light">
            London Event Styling
          </p>
          <div className="w-20 h-px bg-gold mb-8" />
          <h1 className="font-cormorant font-light text-6xl xl:text-7xl leading-[1.05] text-charcoal-dark mb-8">
            Every Detail,<br />Beautifully<br />Styled
          </h1>
          <p className="font-inter font-light text-lg text-charcoal/60 leading-relaxed max-w-md mb-10">
            Bespoke wedding & event styling for life's most memorable moments.
            Based in London, available to travel.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold-deep transition-colors"
            >
              Start Your Enquiry
            </a>
            <a
              href="#gallery"
              className="border border-charcoal/40 text-charcoal/70 font-inter text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors"
            >
              View Our Work
            </a>
          </div>

          {/* Trust markers */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-blush-deep">
            <div>
              <p className="font-cormorant text-3xl text-gold">100+</p>
              <p className="font-inter text-xs text-charcoal/40 tracking-widest uppercase mt-0.5">Events Styled</p>
            </div>
            <div className="w-px h-10 bg-blush-deep" />
            <div>
              <p className="font-cormorant text-lg text-charcoal-dark">London</p>
              <p className="font-inter text-xs text-charcoal/40 tracking-widest uppercase mt-0.5">& Available to Travel</p>
            </div>
            <div className="w-px h-10 bg-blush-deep" />
            <div>
              <p className="font-cormorant text-lg text-charcoal-dark">Bespoke</p>
              <p className="font-inter text-xs text-charcoal/40 tracking-widest uppercase mt-0.5">Every Event</p>
            </div>
          </div>
        </div>

        {/* Right image pane */}
        <div className="w-[45%] relative overflow-hidden">
          {/* Main fill image */}
          <Image
            src="/gallery/pic8.png"
            alt="Blush floral sweetheart table styled by Ray & Roses"
            fill
            className="object-cover object-center"
            priority
            sizes="45vw"
          />
          {/* Soft gradient blending into left pane */}
          <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-cream to-transparent z-10" />
          {/* Accent image */}
          <div className="absolute bottom-8 left-8 z-20 w-52 h-40 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-gold ring-offset-2">
            <Image
              src="/gallery/pic6.png"
              alt="Grand white wedding marquee styled by Ray & Roses"
              fill
              className="object-cover object-center"
              sizes="208px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
