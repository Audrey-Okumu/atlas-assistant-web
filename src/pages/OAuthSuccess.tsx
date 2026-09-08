import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

function OAuthSuccess() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('Connecting your account...')

  useEffect(() => {
    const token = searchParams.get('token')
    const needsPhone = searchParams.get('needsPhone') === 'true'

    if (!token) {
      setStatus('Something went wrong. Please try again.')
      return
    }

    localStorage.setItem('atlas_token', token)

    const timer = setTimeout(() => {
      navigate(needsPhone ? '/add-phone' : '/dashboard')
    }, 1500)

    return () => clearTimeout(timer)
  }, [searchParams, navigate])

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Google account connected</h1>
        <p className="text-slate-400">{status}</p>
      </div>
    </div>
  )
}

export default OAuthSuccess