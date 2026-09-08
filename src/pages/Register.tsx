import { useState } from 'react'
import { Sparkles, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react'
import { div } from 'motion/react-m'

const API_URL = 'https://atlas-assistant-kq2s.onrender.com'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phoneNumber }),
      })

      if (!response.ok) {
        throw new Error('Registration failed. Please check your details and try again.')
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md">
        <a href="/" className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-bold">Atlas Assistant</span>
        </a>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {success ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Account created</h2>
              <p className="text-slate-400 mb-6">
                Next, connect your Google account to finish setting up Atlas Assistant.
              </p>
              <a
                href={`${API_URL}/oauth2/authorization/google`}
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Connect Google
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-1">Create your account</h2>
              <p className="text-slate-400 text-sm mb-6">Start using Atlas Assistant in minutes.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="tel"
                    placeholder="Phone number (e.g. +254712345678)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition"
                >
                  {loading ? 'Creating account...' : 'Create account'}
                </button>
              </form>

              <p className="text-center text-slate-400 text-sm mt-6">
                Already have an account?{' '}
                <a href="/login" className="text-indigo-400 hover:text-indigo-300">
                  Sign in
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Register