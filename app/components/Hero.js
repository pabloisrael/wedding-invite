import { CONFIG } from '../../config'

export default function Hero() {
  const heroStyle = CONFIG.images.heroBackground ? {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('${CONFIG.images.heroBackground}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {}

  return (
    <section
      className="h-screen max-h-screen min-h-0 flex flex-col items-center text-center px-5 py-6 md:py-10 textured-bg relative overflow-hidden"
      id="hero"
      style={heroStyle}
    >
      <div className="z-10 max-w-4xl px-4 w-full flex flex-col items-center justify-between flex-1 min-h-0">

        {/* Image + Names — grouped together, centered as a unit */}
        <div className="flex flex-col items-center flex-1 justify-center min-h-0">
          {CONFIG.images.logo ? (
            <img src={CONFIG.images.logo} alt="Monogram" className="max-h-[45vh] sm:max-h-[50vh] md:max-h-[55vh] w-auto max-w-full object-contain" style={{ maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 80%)' }} />
          ) : (
            <div className="font-heading text-8xl sm:text-9xl md:text-[10rem] font-light text-primary tracking-wider">
              {CONFIG.couple.name1.charAt(0)} <span className="text-textLight mx-2">y</span> {CONFIG.couple.name2.charAt(0)}
            </div>
          )}

          {/* Names block — directly under image, no extra gap */}
          <div className="flex flex-col items-center mt-2">
            <p className="text-lg md:text-2xl tracking-[0.25em] uppercase text-text font-semibold mb-2">
              {CONFIG.heroMessage}
            </p>
            <div className="flex items-center gap-4 md:gap-6 mt-6">
              <p className="font-heading text-2xl md:text-4xl font-bold text-text tracking-widest uppercase">
                {CONFIG.couple.name1}
              </p>
              <span className="font-heading text-xl md:text-2xl text-text">&</span>
              <p className="font-heading text-2xl md:text-4xl font-bold text-text tracking-widest uppercase">
                {CONFIG.couple.name2}
              </p>
            </div>
          </div>
        </div>

        {/* Hearts GIF + Date — pinned to bottom */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <img src="/images/gallery/hearts.gif" alt="Hearts" className="h-[45px] sm:h-[52px] md:h-16" />
          <div className="flex items-baseline justify-center gap-3 md:gap-4 text-text">
            <span className="text-lg md:text-xl tracking-wider uppercase text-textLight">
              {CONFIG.date.monthShort || CONFIG.date.month}
            </span>
            <span className="text-text/60">|</span>
            <span className="font-serif text-4xl md:text-5xl font-normal text-text">
              {CONFIG.date.day}
            </span>
            <span className="text-text/60">|</span>
            <span className="text-lg md:text-xl tracking-wider text-textLight">
              {CONFIG.date.year}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
