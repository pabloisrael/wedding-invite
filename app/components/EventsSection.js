import { CONFIG } from '../../config'
import PhotoCarousel from './PhotoCarousel'

export default function EventsSection() {
  return (
    <section className="py-16 md:py-20 textured-bg" id="ceremony">
      <div className="container mx-auto px-5 max-w-6xl">
        {/* Unified venue block */}
        <div className="text-center max-w-xl mx-auto mb-16" id="reception">
          <h4 className="font-heading text-2xl md:text-4xl font-normal text-secondary mb-1 leading-tight">
            {CONFIG.ceremony.name}
          </h4>
          {CONFIG.ceremony.subtitle && (
            <p className="text-base text-textLight leading-tight">{CONFIG.ceremony.subtitle}</p>
          )}
          <p className="text-sm text-textLight leading-tight">{CONFIG.ceremony.address}, {CONFIG.ceremony.city}</p>

          {/* Timeline */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mt-10 mb-10">
            {/* Ceremony */}
            <div className="flex flex-col items-center gap-2">
              <img src="/images/gallery/rings.jpeg" alt="Rings" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold text-secondary">Ceremonia</p>
              <p className="text-xl md:text-2xl font-medium text-text">{CONFIG.ceremony.time}</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 pb-2">
              <span className="w-8 md:w-16 h-px bg-gray-300" />
              <span className="text-gray-300 text-lg">✦</span>
              <span className="w-8 md:w-16 h-px bg-gray-300" />
            </div>

            {/* Reception */}
            <div className="flex flex-col items-center gap-2">
              <img src="/images/gallery/glasses.jpeg" alt="Glasses" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold text-secondary">Fiesta</p>
              <p className="text-xl md:text-2xl font-medium text-text">{CONFIG.reception.time}</p>
            </div>
          </div>

          <a
            href={CONFIG.ceremony.mapsUrl}
            className="inline-block py-3 px-8 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 bg-secondary text-white border-2 border-secondary hover:bg-white hover:text-secondary hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cómo llegar
          </a>
        </div>

        {/* Photo Gallery Carousel */}
        <PhotoCarousel />

        {/* Music Suggestions */}
        {CONFIG.music?.enabled && (
          <div className="text-center max-w-3xl mx-auto pt-8 border-t border-gray-300" id="music">
            <div className="flex justify-center">
              <img src="/images/gallery/icono-canciones.svg" alt="" className="w-[84px] h-[84px] md:w-24 md:h-24" />
            </div>
            <h2 className="font-heading text-2xl md:text-4xl font-normal text-secondary mb-4 leading-tight">
              {CONFIG.music.title}
            </h2>
            <p className="text-base md:text-lg text-textLight mb-8">
              {CONFIG.music.description}
            </p>
            <a 
              href={CONFIG.music.formUrl} 
              className="inline-block py-3 px-8 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 bg-secondary text-white border-2 border-secondary hover:bg-white hover:text-secondary hover:-translate-y-0.5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {CONFIG.music.buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
