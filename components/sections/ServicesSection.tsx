import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Specialities"
          subtitle="From intimate gatherings to grand celebrations, every event is styled with care, intention, and beauty."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-16">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.2em] uppercase text-charcoal/70 border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Enquire About Your Event
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
