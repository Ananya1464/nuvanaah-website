'use client'

import Image from 'next/image'
import { Phone, Calendar, Heart, Shield, CheckCircle2 } from 'lucide-react'

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* ── HERO ── */}
      <div className="bg-[#1c1c18] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#ded0bf] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
            Private & Confidential
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Personal Care<br />Consultations
          </h1>
          <p className="text-[#ded0bf] text-lg sm:text-xl max-w-2xl mx-auto">
            Every recovery journey is unique. Speak with our care specialists to find the right support, sizes, and products for your specific needs.
          </p>
        </div>
      </div>

      {/* ── WHY BOOK ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-md">
            {/* Fallback image if support-consultation.png doesn't exist */}
            <Image
              src="/images/catalog/about/1.jpeg" // Using an about/lifestyle image as fallback
              alt="Care Specialist"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={true}
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c18] mb-6">
              Expert Guidance,<br />Whenever You're Ready
            </h2>
            <p className="text-[#524344] text-lg mb-8 leading-relaxed">
              We understand that navigating post-surgery recovery or hair loss can feel overwhelming. Our consultations are completely free, zero-pressure, and designed entirely around your comfort.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Shield className="w-6 h-6" />, title: 'Complete Privacy', desc: '1-on-1 sessions held in a safe, confidential environment.' },
                { icon: <Heart className="w-6 h-6" />, title: 'Empathetic Experts', desc: 'Speak with specialists trained to understand your physical and emotional needs.' },
                { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Perfect Fit Guarantee', desc: 'Get accurate sizing help for prosthetics, bras, and hair systems.' }
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#884d53]/10 flex items-center justify-center text-[#884d53] flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1c1c18] text-lg mb-1">{f.title}</h3>
                    <p className="text-[#524344]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="bg-white border-y border-[#ded0bf]/40 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1c1c18] mb-4">How It Works</h2>
            <p className="text-[#524344]">A simple, three-step process to get the answers you need.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Schedule a Time', desc: 'Choose a date and time that works best for you via our booking system or WhatsApp.' },
              { step: '02', title: 'Connect', desc: 'Join a private video call or phone call from the comfort of your home.' },
              { step: '03', title: 'Receive Guidance', desc: 'Get personalized product recommendations, sizing help, and styling advice.' }
            ].map((s, i) => (
              <div key={i} className="bg-[#faf7f2] rounded-3xl p-8 border border-[#ded0bf]/40 relative">
                <div className="text-5xl font-bold text-[#884d53]/10 absolute top-6 right-8">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-[#1c1c18] mb-3 relative z-10">{s.title}</h3>
                <p className="text-[#524344] relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOOKING SECTION ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c18] mb-6">
          Ready to Connect?
        </h2>
        <p className="text-[#524344] text-lg mb-10">
          Book your 30-minute complimentary session today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=I%20would%20like%20to%20book%20a%20consultation"
            className="flex items-center justify-center gap-3 bg-[#1c1c18] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#333] shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5" /> Message on WhatsApp
          </a>
          <button
            className="flex items-center justify-center gap-3 bg-white border-2 border-[#884d53] text-[#884d53] px-8 py-4 rounded-full font-bold transition-all hover:bg-[#884d53]/5"
          >
            <Calendar className="w-5 h-5" /> Book via Calendar
          </button>
        </div>
      </div>
    </div>
  )
}
