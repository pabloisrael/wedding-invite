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
      className="min-h-[84vh] flex flex-col justify-center items-center text-center px-5 pt-20 pb-12 textured-bg relative"
      id="hero"
      style={heroStyle}
    >
      <div className="z-10 max-w-3xl">
        {/* Monogram/Logo Area */}
        <div className="mb-8">
          {CONFIG.images.logo ? (
            <img src={CONFIG.images.logo} alt="Monogram" className="h-[352px] md:h-[422px] mx-auto" />
          ) : (
            <div className="font-heading text-7xl md:text-9xl font-light text-primary tracking-wider">
              {CONFIG.couple.name1.charAt(0)} <span className="text-textLight mx-2">y</span> {CONFIG.couple.name2.charAt(0)}
            </div>
          )}
        </div>
        
        {/* Main Message */}
        <h1 className="font-heading text-3xl md:text-4xl font-normal text-text tracking-[0.2em] uppercase mb-8">
          {CONFIG.heroMessage}
        </h1>
      </div>
    </section>
  )
}
