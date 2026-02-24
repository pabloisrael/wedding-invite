import { CONFIG } from '../../config'
import PhotoCarousel from './PhotoCarousel'

export default function EventsSection() {
  return (
    <section className="py-16 md:py-20 textured-bg" id="ceremony">
      <div className="container mx-auto px-5 max-w-6xl">
        {/* Ceremony and Reception */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 md:divide-x divide-gray-300 mb-16">
          {/* Ceremony */}
          <div className="text-center px-4 md:px-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <img src="/images/gallery/rings.jpeg" alt="Rings" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
            
            <h3 className="text-xs tracking-[0.4em] text-secondary mb-4 uppercase font-semibold">
              CEREMONIA
            </h3>
            
            <h4 className="font-heading text-xl md:text-3xl font-normal text-secondary mb-4 md:mb-6 leading-tight italic">
              {CONFIG.ceremony.name}
            </h4>
            
            <p className="text-sm text-textLight mb-1">
              {CONFIG.ceremony.address}
            </p>
            <p className="text-sm text-textLight mb-1">
              {CONFIG.ceremony.city}
            </p>
            <p className="text-base text-text font-medium mt-4 mb-6">
              {CONFIG.ceremony.time}
            </p>
            
            <a 
              href={CONFIG.ceremony.mapsUrl} 
              className="inline-block py-3 px-8 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 bg-secondary text-white border-2 border-secondary hover:bg-white hover:text-secondary hover:-translate-y-0.5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Cómo llegar
            </a>
          </div>

          {/* Reception */}
          <div className="text-center px-4 md:px-12" id="reception">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <img src="/images/gallery/glasses.jpeg" alt="Glasses" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
            
            <h3 className="text-xs tracking-[0.4em] text-secondary mb-4 uppercase font-semibold">
              FIESTA
            </h3>
            
            <h4 className="font-heading text-xl md:text-3xl font-normal text-secondary mb-4 md:mb-6 leading-tight italic">
              {CONFIG.reception.name}
            </h4>
            
            <p className="text-sm text-textLight mb-1">
              {CONFIG.reception.address}
            </p>
            <p className="text-sm text-textLight mb-1">
              {CONFIG.reception.city}
            </p>
            <p className="text-base text-text font-medium mt-4 mb-6">
              {CONFIG.reception.time}
            </p>
            
            <a 
              href={CONFIG.reception.mapsUrl} 
              className="inline-block py-3 px-8 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 bg-secondary text-white border-2 border-secondary hover:bg-white hover:text-secondary hover:-translate-y-0.5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Cómo llegar
            </a>
          </div>
        </div>

        {/* Photo Gallery Carousel */}
        <PhotoCarousel />

        {/* Music Suggestions */}
        {CONFIG.music?.enabled && (
          <div className="text-center max-w-3xl mx-auto pt-8 border-t border-gray-300" id="music">
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
