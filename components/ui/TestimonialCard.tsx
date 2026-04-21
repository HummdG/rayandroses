interface TestimonialCardProps {
  quote: string
  author: string
  event?: string
}

export default function TestimonialCard({ quote, author, event }: TestimonialCardProps) {
  return (
    <div className="relative bg-cream-alt rounded-2xl p-8 border border-gold/20">
      <span
        className="absolute top-4 left-6 font-cormorant text-7xl text-gold/20 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="relative pt-6">
        <p className="font-cormorant italic text-lg leading-relaxed text-charcoal">{quote}</p>
        <footer className="mt-5 pt-4 border-t border-blush-deep">
          <p className="font-inter font-medium text-sm text-charcoal-dark">{author}</p>
          {event && <p className="font-inter font-light text-xs text-gold mt-0.5">{event}</p>}
        </footer>
      </blockquote>
    </div>
  )
}
