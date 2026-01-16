'use client'

import { ArrowRight, Play, Shield, Heart, Truck, Phone, Star } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-luxury">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold accent circles */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gold-200/20 to-transparent rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-100/30 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-brown-100/20 to-transparent rounded-full filter blur-2xl" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gold-200 rounded-full px-5 py-2.5 mb-10 shadow-soft">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">45+ Years Trusted Legacy</span>
            </div>

            {/* Main Headline - Luxury Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-8 leading-[1.1]">
              Your Crown of{' '}
              <span className="text-gradient-gold italic">Confidence</span>
            </h1>

            {/* Elegant Accent Line */}
            <div className="hidden lg:flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-gold-400 to-gold-500" />
              <span className="text-gold-600 text-sm font-medium uppercase tracking-widest">Premium Care</span>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Exquisite cancer care products designed with <em className="text-gray-800 not-italic font-medium">dignity</em>,
              {' '}<em className="text-gray-800 not-italic font-medium">comfort</em>, and{' '}
              <em className="text-gray-800 not-italic font-medium">compassion</em>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
              <Link
                href="/products"
                className="btn-primary text-lg px-12 py-5"
              >
                Explore Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/consultations"
                className="btn-secondary text-lg px-10 py-4"
              >
                Book Consultation
              </Link>
            </div>

            {/* Luxury Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center shadow-soft">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center shadow-soft">
                  <Heart className="w-5 h-5 text-teal-600" />
                </div>
                <span className="font-medium">Doctor Endorsed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-50 to-gold-100 flex items-center justify-center shadow-soft">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <span className="font-medium">COD Available</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative lg:pl-8">
            {/* Main Hero Card - Premium Style */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-luxury aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-cream-50 to-gold-50" />

              {/* Gold Accent Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-gold-200/50" />

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-white/60 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-16 left-8 w-16 h-16 bg-gold-200/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-luxury mb-8 animate-glow">
                  <Heart className="w-14 h-14 text-teal-500" />
                </div>
                <h3 className="text-3xl font-medium text-gray-800 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Compassionate Care
                </h3>
                <p className="text-gray-600 max-w-xs leading-relaxed">
                  Products designed with dignity for your healing journey
                </p>

                {/* Play Video Button */}
                <button className="mt-10 flex items-center gap-4 bg-white/95 hover:bg-white px-8 py-4 rounded-full shadow-card transition-luxury hover:shadow-luxury group">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                  <span className="font-semibold text-gray-800">Watch Our Story</span>
                </button>
              </div>
            </div>

            {/* Floating Card - Stats (Premium) */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white rounded-3xl shadow-luxury p-6 border border-gray-100/50 animate-fade-in-up">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-500 font-medium">Happy Patients</p>
                </div>
              </div>
            </div>

            {/* Floating Card - Award (Premium) */}
            <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl shadow-card p-5 border border-gold-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Govt. Recognized</p>
                  <p className="text-xs text-gray-500">Startup India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
