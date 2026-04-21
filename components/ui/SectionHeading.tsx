interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const textAlign = isCenter ? 'text-center' : 'text-left'
  const mx = isCenter ? 'mx-auto' : ''
  const dividerMx = isCenter ? 'mx-auto' : ''
  const headingColor = light ? 'text-white' : 'text-charcoal-dark'
  const subtitleColor = light ? 'text-white/60' : 'text-charcoal/55'
  const eyebrowColor = 'text-gold'

  return (
    <div className={`${textAlign} ${className}`}>
      {eyebrow && (
        <p className={`font-inter text-xs tracking-[0.28em] uppercase mb-5 font-light ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <div className={`w-12 h-px bg-gold mb-7 ${dividerMx}`} />
      <h2 className={`font-cormorant font-light text-4xl md:text-5xl leading-tight ${headingColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-inter font-light text-base mt-5 leading-relaxed ${subtitleColor} max-w-xl ${mx}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
