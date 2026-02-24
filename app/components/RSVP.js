import { CONFIG } from '../../config'

export default function RSVP() {
  return (
    <section className="py-20 text-center textured-bg" id="rsvp">
      <div className="container mx-auto px-5 max-w-7xl">
        {/* Confirmation GIF */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img src="/images/gallery/confirmation.gif" alt="Confirmación" className="h-20 md:h-24" />
        </div>

        <h2 className="font-heading text-2xl md:text-4xl font-normal mb-6 md:mb-8 tracking-wide uppercase text-secondary px-4">
          {CONFIG.rsvp.title}
        </h2>
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="font-heading text-xl md:text-3xl font-normal mb-4 md:mb-6 leading-snug text-secondary italic">
            {CONFIG.rsvp.subtitle}
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line text-text">
            {CONFIG.rsvp.description}
          </p>
          <a 
            href={CONFIG.rsvp.formUrl} 
            className="inline-block py-3 px-8 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 bg-secondary text-white border-2 border-secondary hover:bg-white hover:text-secondary hover:-translate-y-0.5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {CONFIG.rsvp.buttonText}
          </a>
        </div>
        <p className="font-heading text-2xl md:text-4xl mt-8 md:mt-12 font-normal text-secondary italic">
          ¡A celebrar!
        </p>
      </div>
    </section>
  )
}
