import { CONFIG } from '../../config'

export default function RSVP() {
  return (
    <section className="py-20 text-center bg-background" id="rsvp">
      <div className="container mx-auto px-5 max-w-7xl">
        <h2 className="font-heading text-3xl md:text-4xl font-normal mb-8 tracking-wide uppercase text-primary">
          {CONFIG.rsvp.title}
        </h2>
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl md:text-3xl font-normal mb-6 leading-snug text-text">
            {CONFIG.rsvp.subtitle}
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line text-text">
            {CONFIG.rsvp.description}
          </p>
          <a 
            href={CONFIG.rsvp.formUrl} 
            className="inline-block py-3 px-8 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {CONFIG.rsvp.buttonText}
          </a>
        </div>
        <p className="font-heading text-3xl md:text-4xl mt-12 font-normal text-primary">
          ¡A celebrar!
        </p>
      </div>
    </section>
  )
}
