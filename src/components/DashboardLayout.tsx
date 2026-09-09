import { Sparkles, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'

function DashboardLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('atlas_token')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-bold">Atlas Assistant</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition text-sm"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
    </div>
  )
}

export default DashboardLayout