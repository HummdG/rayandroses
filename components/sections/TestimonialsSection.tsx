import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Kind Words"
          title="What Our Clients Say"
          subtitle="Real words from real clients who trusted us with their most important moments."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </section>
  )
}
