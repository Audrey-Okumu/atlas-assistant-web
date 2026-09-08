import { Sparkles } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span className="text-white font-semibold">Atlas Assistant</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Atlas Assistant. Built by Audrey Okumu.  All rights preserved
        </p>
      </div>
    </footer>
  )
}

export default Footer