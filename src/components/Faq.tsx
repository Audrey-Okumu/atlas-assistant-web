import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is my Gmail and Calendar data safe?',
    answer: 'Yes. Atlas Assistant uses Google\'s official OAuth 2.0 sign-in and only requests read-only access. Your password is never seen or stored by Atlas Assistant.',
  },
  {
    question: 'Do I need to install an app?',
    answer: 'No. Atlas Assistant works entirely through WhatsApp, a messaging app you likely already use every day.',
  },
  {
    question: 'Can I disconnect my account at any time?',
    answer: 'Yes. You can revoke Atlas Assistant\'s access at any time from your Google Account security settings.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq