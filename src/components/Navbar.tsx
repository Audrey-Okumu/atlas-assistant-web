import { Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-bold text-white">Atlas Assistant</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#integrations" className="hover:text-white transition">Integrations</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/login" className="text-slate-300 hover:text-white transition">
            Sign In
          </a>
          <a
            href="/register"
            className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar