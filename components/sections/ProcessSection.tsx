import SectionHeading from '@/components/ui/SectionHeading'
import { processSteps } from '@/lib/data'

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-blush">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="From Vision to Reality"
          subtitle="A seamless creative journey from your first message to the final reveal."
        />
        <div className="relative mt-16">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute h-px bg-gold/25"
            style={{ top: '2rem', left: '12.5%', right: '12.5%' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-md z-10">
                  <span className="font-cormorant text-2xl font-medium text-white">{step.step}</span>
                </div>
                <h3 className="font-cormorant text-xl text-charcoal-dark mt-6 mb-3">{step.title}</h3>
                <p className="font-inter font-light text-sm text-charcoal/60 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex bg-charcoal text-white font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal-dark transition-colors"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}
