import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/gallery/pic7.png"
                alt="Dramatic red rose sweetheart table styled by Ray & Roses"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative blush block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-blush -z-10" />
            {/* Floating quote card */}
            <div className="absolute -bottom-2 left-4 md:-left-8 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
              <p className="font-cormorant italic text-base text-charcoal-dark leading-snug">
                &ldquo;Every event tells a story.&rdquo;
              </p>
              <p className="font-inter text-xs text-gold mt-2">Ray & Roses</p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="font-inter text-xs tracking-[0.28em] uppercase text-gold mb-4 font-light">
              Our Story
            </p>
            <div className="w-12 h-px bg-gold mb-7" />
            <h2 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal-dark leading-tight mb-6">
              The Story Behind<br />the Styling
            </h2>
            <div className="space-y-4 font-inter font-light text-base text-charcoal/65 leading-7">
              <p>
                Ray & Roses was born from a deep love of beauty, detail, and the magic that happens
                when a space is truly transformed. Founded by Ray, a bespoke event stylist with an
                eye for the extraordinary, every event is approached as a personal passion project,
                never a repeat formula.
              </p>
              <p>
                From grand wedding marquees to intimate birthday celebrations, each brief is treated
                as a fresh canvas. Ray works closely with every client to understand not just what
                they want, but how they want to feel, and then brings that vision to life with
                precision and artistry.
              </p>
              <p>
                Based in London and available to travel, Ray & Roses has become a trusted name for
                clients who want their event to feel memorable, elevated, and unmistakably theirs.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 mt-10 pt-8 border-t border-blush-deep gap-4">
              <div>
                <p className="font-cormorant text-3xl text-gold">100+</p>
                <p className="font-inter text-xs text-charcoal/45 tracking-widest uppercase mt-1">
                  Events Styled
                </p>
              </div>
              <div>
                <p className="font-cormorant text-lg text-charcoal-dark leading-tight">
                  London<br />&amp; Beyond
                </p>
                <p className="font-inter text-xs text-charcoal/45 tracking-widest uppercase mt-1">
                  Location
                </p>
              </div>
              <div>
                <p className="font-cormorant text-lg text-charcoal-dark leading-tight">
                  Every<br />Detail
                </p>
                <p className="font-inter text-xs text-charcoal/45 tracking-widest uppercase mt-1">
                  Considered
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex mt-10 bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold-deep transition-colors"
            >
              Work With Ray
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
