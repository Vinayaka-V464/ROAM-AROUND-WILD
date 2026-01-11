import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Experiences from './components/Experiences'
import NatureSection from './components/NatureSection'
import WhyRaw from './components/WhyRaw'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

import FloatingSocials from './components/FloatingSocials'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <Experiences />
      <NatureSection />
      <WhyRaw />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingSocials />
    </div>
  )
}

export default App
