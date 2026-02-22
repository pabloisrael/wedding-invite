import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import EventsSection from './components/EventsSection'
import InfoSection from './components/InfoSection'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import ColorCustomizer from './components/ColorCustomizer'

export default function Home() {
  return (
    <>
      <ColorCustomizer />
      <Header />
      <main>
        <Hero />
        <Countdown />
        <EventsSection />
        <InfoSection />
        <RSVP />
      </main>
      <Footer />
    </>
  )
}
