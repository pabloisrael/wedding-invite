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
      className="min-h-[80vh] md:min-h-[84vh] flex flex-col justify-center items-center text-center px-5 pt-12 md:pt-20 pb-8 md:pb-12 textured-bg relative"
      id="hero"
      style={heroStyle}
    >
      <div className="z-10 max-w-3xl relative px-4">
        {/* Monogram/Logo Area */}
        <div>
          {CONFIG.images.logo ? (
            <img src={CONFIG.images.logo} alt="Monogram" className="h-[350px] sm:h-[450px] md:h-[600px] mx-auto max-w-full" />
          ) : (
            <div className="font-heading text-7xl md:text-9xl font-light text-primary tracking-wider">
              {CONFIG.couple.name1.charAt(0)} <span className="text-textLight mx-2">y</span> {CONFIG.couple.name2.charAt(0)}
            </div>
          )}
        </div>

        {/* Hearts GIF - Overlaid */}
        <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 -translate-x-2 z-20">
          <img src="/images/gallery/hearts.gif" alt="Hearts" className="h-[50px] sm:h-[60px] md:h-20" />
        </div>
      </div>
    </section>
  )
}
