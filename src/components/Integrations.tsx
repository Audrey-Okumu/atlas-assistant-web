function Integrations() {
  return (
    <section id="integrations" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Built on tools you already trust
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-16">
          Secure, official integrations — nothing proprietary to learn.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                <path d="M24 5.457v13.086a1.457 1.457 0 0 1-1.457 1.457h-3.033V11.86L12 16.64l-7.51-4.78v8.14H1.457A1.457 1.457 0 0 1 0 18.543V5.457a1.636 1.636 0 0 1 2.625-1.302l9.375 6.7 9.375-6.7A1.636 1.636 0 0 1 24 5.457z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="text-slate-400 text-sm">Gmail</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                <rect x="2" y="4" width="20" height="18" rx="2" fill="#4285F4"/>
                <rect x="2" y="4" width="20" height="5" rx="2" fill="#1967D2"/>
                <text x="12" y="17" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">31</text>
              </svg>
            </div>
            <span className="text-slate-400 text-sm">Google Calendar</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#25D366">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
              </svg>
            </div>
            <span className="text-slate-400 text-sm">WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations