import { useState } from 'react'
import { Sparkles, Mail, Lock } from 'lucide-react'

const API_URL = 'https://atlas-assistant-kq2s.onrender.com'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const token = await response.text()

      if (!response.ok || token === 'Invalid email or password') {
        throw new Error('Invalid email or password.')
      }

      localStorage.setItem('atlas_token', token)
      window.location.href = '/dashboard'
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
          <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
          <p className="text-slate-400 text-sm mb-6">Sign in to your account.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-500 text-xs">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <a
            href={`${API_URL}/oauth2/authorization/google`}
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 rounded-lg font-medium transition"
          >
            Continue with Google
          </a>

          <p className="text-center text-slate-400 text-sm mt-6">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-400 hover:text-indigo-300">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login