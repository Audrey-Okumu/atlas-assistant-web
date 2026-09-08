import { motion } from 'motion/react'
import { ArrowRight, Mail, Calendar, MessageCircle, Send } from 'lucide-react'

function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available on WhatsApp
          </div>

          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            A personal assistant for
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              your inbox and calendar.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-lg mb-10">
            Atlas Assistant connects securely to Gmail and Google Calendar, then lets
            you ask questions and receive reminders directly through WhatsApp.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/register"
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium transition hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="text-slate-300 hover:text-white px-6 py-3 font-medium transition">
              Learn more
            </a>
          </div>

          <div className="flex items-center gap-8 mt-16 text-slate-500">
            <Mail className="w-6 h-6" />
            <Calendar className="w-6 h-6" />
            <MessageCircle className="w-6 h-6" />
          </div>
        </motion.div>

        {/* Mockup WhatsApp conversation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium text-sm">Atlas Assistant</span>
            </div>

            <div className="p-4 space-y-3 bg-[#0b141a] min-h-[280px]">
              <div className="flex justify-end">
                <div className="bg-emerald-700 text-white text-sm px-3 py-2 rounded-lg rounded-tr-none max-w-[80%]">
                  Do I have any meetings today?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-700 text-white text-sm px-3 py-2 rounded-lg rounded-tl-none max-w-[80%]">
                  Yes — you have "Design Review" at 3:00 PM with 2 attendees.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-emerald-700 text-white text-sm px-3 py-2 rounded-lg rounded-tr-none max-w-[80%]">
                  Any important emails?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-700 text-white text-sm px-3 py-2 rounded-lg rounded-tl-none max-w-[80%]">
                  One from your bank flagged as urgent — sent this morning.
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2">
              <div className="flex-1 bg-slate-800 rounded-full px-4 py-2 text-slate-500 text-sm">
                Message
              </div>
              <div className="w-9 h-9 bg-emerald-600 rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero