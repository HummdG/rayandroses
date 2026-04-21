import Image from 'next/image'

interface ServiceCardProps {
  name: string
  descriptor: string
  image: string
  alt: string
}

export default function ServiceCard({ name, descriptor, image, alt }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-gold ring-offset-2 ring-offset-white mb-5 flex-shrink-0">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 112px, 128px"
        />
      </div>
      <h3 className="font-cormorant text-xl text-charcoal-dark mb-1.5">{name}</h3>
      <p className="font-inter font-light text-sm text-charcoal/55 leading-relaxed">{descriptor}</p>
    </div>
  )
}
