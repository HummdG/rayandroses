import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'

const mobileImages = [
  { src: '/gallery/pic6.png', alt: 'Grand white wedding marquee with tall floral centrepieces', wide: true },
  { src: '/gallery/pic8.png', alt: 'Blush pink sweetheart table with illuminated arch' },
  { src: '/gallery/pic7.png', alt: 'Dramatic red rose sweetheart table with calligraphy arch' },
  { src: '/gallery/pic3.png', alt: 'Mediterranean birthday table styling with blue and white decor' },
  { src: '/gallery/pic9.png', alt: 'Rose petal aisle with heart-shaped floral arch and sparkling fountains' },
  { src: '/gallery/pic5.png', alt: 'Elegant gold table runner with golden roses' },
]

const row2Images = [
  { src: '/gallery/pic1.png', alt: 'Crystal candelabra table setting with white florals on black backdrop' },
  { src: '/gallery/pic7.png', alt: 'Dramatic red rose sweetheart table with calligraphy arch' },
  { src: '/gallery/pic9.png', alt: 'Rose petal aisle with heart-shaped floral arch and sparkling fountains' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Styling"
          subtitle="A curated selection of our most beautiful event transformations."
        />

        {/* ── Mobile gallery — 2-col grid ── */}
        <div className="md:hidden grid grid-cols-2 gap-3 mt-16">
          {mobileImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative rounded-xl overflow-hidden group ${
                img.wide ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 768px) 50vw"
              />
            </div>
          ))}
        </div>

        {/* ── Desktop gallery — asymmetric editorial grid ── */}
        <div className="hidden md:block mt-16">
          {/* Row 1: large landscape + tall portrait */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 relative rounded-xl overflow-hidden group aspect-[16/10]">
              <Image
                src="/gallery/pic6.png"
                alt="Grand white wedding marquee with tall floral centrepieces"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                sizes="66vw"
              />
            </div>
            {/* Tall portrait spanning 2 rows */}
            <div className="row-span-2 relative rounded-xl overflow-hidden group min-h-[400px]">
              <Image
                src="/gallery/pic8.png"
                alt="Blush pink sweetheart table with illuminated arch"
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                sizes="33vw"
              />
            </div>
            {/* Row 2, cols 1-2 */}
            <div className="relative rounded-xl overflow-hidden group aspect-square">
              <Image
                src="/gallery/pic3.png"
                alt="Mediterranean birthday table styling"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                sizes="33vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden group aspect-square">
              <Image
                src="/gallery/pic5.png"
                alt="Elegant gold table runner with golden roses"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Row 3: three equal images */}
          <div className="grid grid-cols-3 gap-3 mt-3">
            {row2Images.map((img) => (
              <div key={img.src} className="relative rounded-xl overflow-hidden group aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/rayandroses"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.2em] uppercase text-charcoal/65 border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            See More On Instagram
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
