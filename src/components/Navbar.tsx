import { useState } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-bold text-white">Atlas Assistant</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="#integrations" className="hover:text-white transition">Integrations</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-slate-300 hover:text-white transition">Sign In</a>
          <a href="/register" className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg font-medium transition">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="text-slate-300 hover:text-white">Features</a>
          <a href="#how-it-works" className="text-slate-300 hover:text-white">How It Works</a>
          <a href="#integrations" className="text-slate-300 hover:text-white">Integrations</a>
          <a href="#faq" className="text-slate-300 hover:text-white">FAQ</a>
          <hr className="border-white/10" />
          <a href="/login" className="text-slate-300 hover:text-white">Sign In</a>
          <a href="/register" className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-center">Get Started</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar