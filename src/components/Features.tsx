import { Mail, Calendar, MessageSquare, Bot } from 'lucide-react'

const features = [
  {
    icon: Mail,
    title: 'Email Awareness',
    description: 'Atlas Assistant reviews your recent Gmail messages and identifies what genuinely needs your attention.',
  },
  {
    icon: Calendar,
    title: 'Calendar Insight',
    description: 'Ask about your schedule in plain language and get accurate answers drawn directly from Google Calendar.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Native',
    description: 'No new app to install. Atlas Assistant works inside the WhatsApp conversation you already use daily.',
  },
  {
    icon: Bot,
    title: 'Proactive Reminders',
    description: 'Receive a WhatsApp reminder shortly before a meeting, without needing to ask.',
  },
]

function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A focused set of capabilities built around how you already communicate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
            >
              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features