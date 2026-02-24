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
      className="h-screen max-h-screen min-h-0 flex flex-col justify-center items-center text-center px-5 py-6 md:py-10 textured-bg relative overflow-hidden"
      id="hero"
      style={heroStyle}
    >
      <div className="z-10 max-w-4xl px-4 w-full flex flex-col items-center justify-center flex-shrink min-h-0">
        {/* Monogram/Logo Area */}
        <div className="flex flex-col items-center flex-shrink-0 mt-4 md:mt-6">
          {CONFIG.images.logo ? (
            <img src={CONFIG.images.logo} alt="Monogram" className="max-h-[55vh] sm:max-h-[62vh] md:max-h-[68vh] w-auto max-w-full scale-[0.9] object-contain" />
          ) : (
            <div className="font-heading text-8xl sm:text-9xl md:text-[10rem] font-light text-primary tracking-wider">
              {CONFIG.couple.name1.charAt(0)} <span className="text-textLight mx-2">y</span> {CONFIG.couple.name2.charAt(0)}
            </div>
          )}
          {/* Hearts GIF - centrado con el logo */}
          <div className="flex justify-center -mt-2 mb-2">
            <img src="/images/gallery/hearts.gif" alt="Hearts" className="h-[60px] sm:h-[70px] md:h-24" />
          </div>
        </div>

        {/* Date - formato MES | DÍA | AÑO */}
        <div className="flex items-baseline justify-center gap-3 md:gap-4 text-text mt-2 md:mt-4 flex-shrink-0">
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
    </section>
  )
}
