import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Integrations from '../components/Integrations'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <HowItWorks />
      <Integrations />
      <Faq />
      <Footer />
    </div>
  )
}

export default LandingPage