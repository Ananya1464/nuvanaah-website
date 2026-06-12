'use client'

import Image from 'next/image'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">

      {/* ── HERO ── */}
      <div className="bg-[#1c1c18] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#ded0bf] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
            Wig Consultation Support
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find the Right Wig<br />for You
          </h1>
          <p className="text-[#ded0bf] text-lg sm:text-xl max-w-2xl mx-auto">
            We can help you understand available wig options, sizing, and styles — so you can choose with confidence.
          </p>
        </div>
      </div>

      {/* ── ABOUT THE CONSULTATION ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/images/support-consultation.png"
              alt="Nuvanaah wig consultation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={true}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c18] mb-6">
              Guidance You Can<br />Count On
            </h2>
            <p className="text-[#524344] text-lg mb-8 leading-relaxed">
              Choosing a wig is a personal decision. Our team is here to walk you through what is available, help you understand sizing, and find a style that feels like you.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Available Online Nationwide',
                  desc: 'Wig and scarf consultations are available online via WhatsApp for customers across India.',
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: 'We help you find the right fit',
                  desc: 'We will help you explore wig options, understand sizing, and choose a style that works for your lifestyle.',
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Available 24×7 for questions',
                  desc: 'Our team is available 24×7 to assist with product-related questions — consultations or otherwise.',
                },
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
            <p className="text-[#524344]">Simple and straightforward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Reach Out', desc: 'Message or call us to let us know you are interested in a wig or scarf consultation. We will get back to you on WhatsApp.' },
              { step: '02', title: 'We Talk Through Options', desc: 'We will walk you through available wig styles, sizing, and what to expect — at a pace that works for you.' },
              { step: '03', title: 'Choose with Confidence', desc: 'Leave with a clear sense of what is right for you, without pressure.' },
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

      {/* ── CONTACT ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c18] mb-4">
          Get in Touch
        </h2>
        <p className="text-[#524344] text-lg mb-4">
          We are available 24×7. Reach out whenever it suits you.
        </p>
        <p className="text-[#7a6f6a] text-sm mb-10">
          Consultations are available online via WhatsApp — for wigs and scarves with real hair.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/919076041779?text=I%20would%20like%20to%20book%20a%20wig%20consultation"
            className="flex items-center justify-center gap-3 bg-[#1c1c18] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#333] shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" /> Message on WhatsApp
          </a>
          <a
            href="tel:+919076041779"
            className="flex items-center justify-center gap-3 bg-white border border-[#ded0bf] text-[#524344] px-8 py-4 rounded-full font-bold transition-all hover:border-[#884d53]/40"
          >
            <Phone className="w-5 h-5" /> Call Us
          </a>
        </div>
      </div>

    </div>
  )
}
