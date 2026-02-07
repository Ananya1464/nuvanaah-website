'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds
    return () => clearInterval(timer)
  }, [])

  // Slideshow content
  const slides = [
    {
      title: 'Welcome to Nuvanaah',
      description: '45+ years of medical expertise in cancer care products',
      icon: '🏠',
      link: '/about',
      linkText: 'Learn Our Story'
    },
    {
      title: 'Post-Surgery Essentials',
      description: 'Mastectomy bras & prosthetics starting ₹659',
      icon: '🎀',
      link: '/products/category/post-surgery-essentials',
      linkText: 'Shop Recovery Products'
    },
    {
      title: 'Chemotherapy Support',
      description: 'Protective masks & medical bags from ₹329',
      icon: '💊',
      link: '/products/category/chemotherapy-support',
      linkText: 'View Treatment Essentials'
    },
    {
      title: 'Medical & Premium Wigs',
      description: 'Human hair wigs from ₹9,899 to ₹29,149',
      icon: '💇‍♀️',
      link: '/products/category/hair-loss-solutions',
      linkText: 'Explore Hair Solutions'
    },
    {
      title: 'Lymphedema Care',
      description: 'Medical compression sleeves at ₹2,749',
      icon: '🤲',
      link: '/products/category/lymphedema-management',
      linkText: 'Shop Compression Wear'
    }
  ]

  // Floating particles animation (reduced for performance)
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 2,
  }))

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-sage-50">
      {/* Animated Background Gradient Orbs - Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-sage-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-sage-200/30 to-cream-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-teal-300/40 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-8 border border-teal-100"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                    className="w-4 h-4 text-teal-600 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">45+ Years Trusted Legacy</span>
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight"
            >
              Care that supports you through{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-teal-600 font-semibold relative inline-block"
              >
                treatment
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-teal-200/50 -z-10"
                />
              </motion.span>
              .
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Thoughtfully designed cancer care products with dignity, comfort, and compassion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultations"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 border-2 border-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Consultation
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>

            {/* Government Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 inline-flex items-center gap-3 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                <span className="text-2xl">🇮🇳</span>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Govt. Recognized</p>
                  <p className="text-xs text-gray-600">Startup India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Category Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative w-full aspect-square max-w-md lg:max-w-lg mx-auto">
              {/* Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-sage-400 to-teal-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cream-50 to-white" />
              </motion.div>

              {/* Slideshow Content */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-6xl mb-6"
                  >
                    {slides[currentSlide].icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {slides[currentSlide].title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {slides[currentSlide].description}
                  </p>

                  {/* Link */}
                  <Link
                    href={slides[currentSlide].link}
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    {slides[currentSlide].linkText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-teal-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-white"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: "M0,64L1440,64L1440,120L0,120Z" }}
            animate={{
              d: [
                "M0,64L1440,64L1440,120L0,120Z",
                "M0,80L1440,48L1440,120L0,120Z",
                "M0,64L1440,64L1440,120L0,120Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </section>
  )
}
