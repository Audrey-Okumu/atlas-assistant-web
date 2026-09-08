import { motion } from 'motion/react'
import emailIllustration from '../assets/undraw_email-campaign_2z6t.svg'
import scheduleIllustration from '../assets/undraw_schedule-cleanup_1xs7.svg'

function Showcase() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-32">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={emailIllustration}
            alt="Email management illustration"
            className="w-full max-w-md mx-auto"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Never miss what matters in your inbox
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Atlas Assistant reads your recent Gmail messages and uses AI to
              surface what's genuinely important — deadlines, interviews, and
              urgent requests — without you scrolling through dozens of unread
              emails.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Your schedule, always within reach
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Ask what's on your calendar today, tomorrow, or next week — in
              plain language — and get an accurate, immediate answer sent
              straight to WhatsApp, wherever you are.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={scheduleIllustration}
            alt="Calendar scheduling illustration"
            className="w-full max-w-md mx-auto order-1 md:order-2"
          />
        </div>

      </div>
    </section>
  )
}

export default Showcase