import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Calendar, Send, Loader2 } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'

const API_URL = 'https://atlas-assistant-kq2s.onrender.com'

function Dashboard() {
  const navigate = useNavigate()
  const [emails, setEmails] = useState<string[]>([])
  const [events, setEvents] = useState<string[]>([])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [asking, setAsking] = useState(false)
  const [loadingData, setLoadingData] = useState(true)

  const token = localStorage.getItem('atlas_token')

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }

    const fetchData = async () => {
      try {
        const [emailsRes, eventsRes] = await Promise.all([
          fetch(`${API_URL}/emails/recent`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_URL}/calendar/upcoming`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ])

        setEmails(await emailsRes.json())
        setEvents(await eventsRes.json())
      } catch {
        // If Google isn't connected yet, these calls may fail — handled gracefully below
      } finally {
        setLoadingData(false)
      }
    }

    fetchData()
  }, [token, navigate])

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setAsking(true)
    setAnswer('')

    try {
      const response = await fetch(
        `${API_URL}/assistant/ask?question=${encodeURIComponent(question)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      const text = await response.text()
      setAnswer(text)
    } catch {
      setAnswer('Something went wrong. Please try again.')
    } finally {
      setAsking(false)
    }
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Dashboard</h1>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 sm:p-6 mb-8 sm:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold text-white mb-1">Prefer WhatsApp?</h2>
          <p className="text-slate-400 text-sm">
            Message Atlas Assistant directly from WhatsApp, anytime.
          </p>
        </div>
        <a
          href="https://wa.me/14155238886?text=join%20beyond-compound"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 rounded-lg font-medium transition whitespace-nowrap w-full md:w-auto"
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
            <h2 className="font-semibold">Recent Emails</h2>
          </div>
          {loadingData ? (
            <p className="text-slate-500 text-sm">Loading...</p>
          ) : emails.length === 0 ? (
            <p className="text-slate-500 text-sm">No recent emails found.</p>
          ) : (
            <ul className="space-y-2">
              {emails.slice(0, 5).map((subject, i) => (
                <li key={i} className="text-sm text-slate-300 truncate">
                  {subject}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-indigo-400 shrink-0" />
            <h2 className="font-semibold">Upcoming Events</h2>
          </div>
          {loadingData ? (
            <p className="text-slate-500 text-sm">Loading...</p>
          ) : events.length === 0 ? (
            <p className="text-slate-500 text-sm">No upcoming events found.</p>
          ) : (
            <ul className="space-y-2">
              {events.map((event, i) => (
                <li key={i} className="text-sm text-slate-300 break-words">
                  {event}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6">
        <h2 className="font-semibold mb-4">Ask Atlas Assistant</h2>

        <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Do I have any meetings today?"
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition"
          />
          <button
            type="submit"
            disabled={asking}
            className="bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 text-white px-5 py-3 rounded-lg transition flex items-center justify-center"
          >
            {asking ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </form>

        {answer && (
          <div className="bg-slate-900 border border-white/10 rounded-lg p-4 text-slate-300 text-sm leading-relaxed break-words">
            {answer}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Dashboard