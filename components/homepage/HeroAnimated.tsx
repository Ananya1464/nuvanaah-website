'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }))

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-sage-50">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-sage-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-sage-200/30 to-cream-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-teal-300/20 to-teal-100/20 rounded-full blur-2xl"
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

          {/* Right Visual - Animated Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Circle with Gradient */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-sage-400 to-teal-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cream-50 to-white" />
              </motion.div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-20 h-20 text-teal-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    5,000+ Women Trust Us
                  </h3>
                  <p className="text-gray-600">
                    Premium medical-grade products for your recovery journey
                  </p>
                </div>
              </div>

              {/* Orbiting Icons */}
              {[
                { icon: '🎀', delay: 0, color: 'from-pink-400 to-pink-600' },
                { icon: '💪', delay: 0.25, color: 'from-amber-400 to-amber-600' },
                { icon: '❤️', delay: 0.5, color: 'from-red-400 to-red-600' },
                { icon: '✨', delay: 0.75, color: 'from-purple-400 to-purple-600' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-32px',
                    marginLeft: '-32px',
                  }}
                  animate={{
                    x: [
                      0,
                      Math.cos(item.delay * Math.PI * 2) * 200,
                      Math.cos((item.delay + 0.5) * Math.PI * 2) * 200,
                      0,
                    ],
                    y: [
                      0,
                      Math.sin(item.delay * Math.PI * 2) * 200,
                      Math.sin((item.delay + 0.5) * Math.PI * 2) * 200,
                      0,
                    ],
                  }}
                  transition={{
                    duration: 8,
                    delay: item.delay * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
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
