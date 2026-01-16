'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call to SendGrid
    // In a real app, this would call a server action or API endpoint
    // that adds the email to SendGrid contact list and sends welcome email
    setTimeout(() => {
      console.log('Email subscribed:', email)
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 500)
  }

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-amber-50 to-cream-50 rounded-lg p-6 border border-amber-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Get Care Tips & Updates</h3>
        <p className="text-gray-600 text-sm mb-4">
          Subscribe to our newsletter for wellness tips, product guides, and special offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 disabled:bg-gray-100"
          />

          {status === 'success' ? (
            <div className="bg-green-100 text-green-700 py-3 px-4 rounded-lg text-sm font-medium text-center">
              ✅ Thanks for subscribing! Check your email for a welcome gift.
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors disabled:bg-amber-400 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          )}
        </form>

        <p className="text-xs text-gray-500 text-center mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}
