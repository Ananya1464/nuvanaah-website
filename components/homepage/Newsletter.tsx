'use client'

import { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // In production, send to API
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Luxury Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800" />

      {/* Gold Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-500/5 to-gold-500/10" />

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/20">
          <Sparkles className="w-10 h-10 text-gold-300" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Join Our <span className="text-gold-300 italic">Caring</span> Community
        </h2>
        <p className="text-lg text-teal-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Receive wellness tips, exclusive offers, and inspiring stories delivered with care to your inbox.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-transparent transition-all text-lg"
                />
              </div>
              <button
                type="submit"
                className="btn-gold px-10 py-5 text-lg"
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-teal-200/70 mt-6">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 text-white animate-fade-in-up">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-300" />
            </div>
            <span className="text-xl font-medium">Thank you for subscribing!</span>
            <p className="text-teal-200">Check your inbox for a welcome message.</p>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-teal-200/80">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gold-400 rounded-full" />
            No spam, ever
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gold-400 rounded-full" />
            Unsubscribe anytime
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gold-400 rounded-full" />
            Weekly wellness tips
          </span>
        </div>
      </div>
    </section>
  )
}
