'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

const eventTypes = [
  { value: '', label: 'Select Event Type' },
  { value: 'Luxury Wedding', label: 'Luxury Wedding' },
  { value: 'Baby Shower', label: 'Baby Shower' },
  { value: 'Bridal Shower', label: 'Bridal Shower' },
  { value: 'Birthday Celebration', label: 'Birthday Celebration' },
  { value: 'Romantic Proposal', label: 'Romantic Proposal' },
  { value: 'Dessert Table', label: 'Dessert Table' },
  { value: 'Other', label: 'Other' },
]

interface FormState {
  name: string
  email: string
  phone: string
  eventType: string
  date: string
  message: string
}

const inputBase =
  'w-full bg-white/8 border border-white/20 text-white placeholder:text-white/35 focus:border-gold focus:outline-none rounded-lg px-4 py-3 font-inter font-light text-sm transition-colors'

const labelBase = 'block font-inter text-xs tracking-[0.15em] uppercase text-white/45 mb-2'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Event Enquiry: ${form.eventType || 'New Event'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent Type: ${form.eventType}\nEvent Date: ${form.date}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:bookings@rayandroses.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Create Something Beautiful"
          subtitle="Tell us about your vision and we'll bring it to life."
          light
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start">
                <div className="w-12 h-px bg-gold mb-6" />
                <h3 className="font-cormorant text-3xl text-white mb-4">Thank You</h3>
                <p className="font-inter font-light text-white/55 leading-relaxed">
                  Your enquiry has been opened in your email client. We look forward to
                  connecting with you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-inter text-xs tracking-[0.15em] uppercase text-gold border-b border-gold/50 pb-0.5 hover:text-gold-deep transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelBase}>Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelBase}>Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputBase}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={labelBase}>Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07xxx xxx xxx"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className={labelBase}>Event Type</label>
                    <div className="relative">
                      <select
                        id="eventType"
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none pr-10 bg-charcoal`}
                      >
                        {eventTypes.map((t) => (
                          <option key={t.value} value={t.value} className="bg-charcoal text-white">
                            {t.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="date" className={labelBase}>Event Date</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={`${inputBase} [color-scheme:dark]`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelBase}>Tell Us About Your Event</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your vision, inspiration, and any details..."
                    required
                    className={`${inputBase} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase py-4 hover:bg-gold-deep transition-colors mt-2"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs tracking-[0.28em] uppercase text-gold mb-4 font-light">
              Contact Details
            </p>
            <div className="w-12 h-px bg-gold mb-8" />

            <div className="space-y-8">
              <ContactItem label="Email">
                <a
                  href="mailto:bookings@rayandroses.com"
                  className="font-cormorant text-xl text-white hover:text-gold transition-colors break-all"
                >
                  bookings@rayandroses.com
                </a>
              </ContactItem>
              <ContactItem label="Phone">
                <a
                  href="tel:07398145428"
                  className="font-cormorant text-xl text-white hover:text-gold transition-colors"
                >
                  07398 145 428
                </a>
              </ContactItem>
              <ContactItem label="WhatsApp">
                <a
                  href="https://wa.me/447398145428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-cormorant text-xl text-white hover:text-gold transition-colors"
                >
                  <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                  </svg>
                  +44 7398 145 428
                </a>
              </ContactItem>
              <ContactItem label="Instagram">
                <a
                  href="https://instagram.com/rayandroses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-cormorant text-xl text-white hover:text-gold transition-colors"
                >
                  <svg className="w-5 h-5 flex-shrink-0 text-white/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                  </svg>
                  @rayandroses
                </a>
              </ContactItem>
              <ContactItem label="Location">
                <p className="font-cormorant text-xl text-white">London · Available to Travel</p>
              </ContactItem>
            </div>

            <div className="mt-12 p-6 border border-gold/20 rounded-2xl">
              <p className="font-cormorant italic text-lg text-white/75 leading-relaxed">
                &ldquo;Whether you have a clear vision or just a feeling, I&rsquo;d love to help
                bring your event to life.&rdquo;
              </p>
              <p className="font-inter font-light text-xs text-gold mt-3">Ray</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-inter text-xs tracking-[0.15em] uppercase text-white/35 mb-2">{label}</p>
      {children}
    </div>
  )
}
