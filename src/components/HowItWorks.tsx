import { UserPlus, Link2, MessageSquare } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Create your account',
    description: 'Sign up with your email or continue with Google in a few seconds.',
  },
  {
    icon: Link2,
    step: '02',
    title: 'Connect Google & WhatsApp',
    description: 'Securely link your Gmail and Calendar, then verify your WhatsApp number.',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Start a conversation',
    description: 'Message Atlas Assistant on WhatsApp anytime you need an answer or a reminder.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Three steps between you and a genuinely useful assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="text-6xl font-bold text-white/5 absolute -top-4 -left-2">
                {s.step}
              </div>
              <div className="relative bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks