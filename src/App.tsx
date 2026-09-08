import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import HowItWorks from './components/HowItWorks'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <Faq />
      <Footer />
    </div>
  )
}

export default App