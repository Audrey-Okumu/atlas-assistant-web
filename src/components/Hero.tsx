import { ArrowRight, Mail, Calendar, MessageCircle } from 'lucide-react'

function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Available on WhatsApp
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          A personal assistant for
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            your inbox and calendar.
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Atlas Assistant connects securely to Gmail and Google Calendar, then lets
          you ask questions and receive reminders directly through WhatsApp.
        </p>

        <div className="flex items-center justify-center gap-4">
        <a  
            href="/register"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="text-slate-300 hover:text-white px-6 py-3 font-medium transition"
          >
            Learn more
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16 text-slate-500">
          <Mail className="w-6 h-6" />
          <Calendar className="w-6 h-6" />
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

export default Hero