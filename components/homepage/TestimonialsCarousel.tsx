'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 52,
    location: 'Mumbai',
    quote: "Nuvanaah's mastectomy bra gave me my confidence back. The fit is perfect, and I finally feel comfortable again.",
    product: 'Mastectomy Bra',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anjali Mehta',
    age: 45,
    location: 'Delhi',
    quote: 'The chemo port shirt made treatment days so much easier. I felt dignified, not like a patient.',
    product: 'ChemoPort Shirt',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lakshmi Iyer',
    age: 58,
    location: 'Bangalore',
    quote: 'Their team helped me choose the right prosthesis. The free consultation was invaluable during a difficult time.',
    product: 'Silicone Prosthesis',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length
      } else {
        return (prev - 1 + testimonials.length) % testimonials.length
      }
    })
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-sage-50 to-cream-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Stories of Strength
          </h2>
          <p className="text-xl text-gray-600">
            Hear from women who trusted us during their recovery journey
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center">
                    <Quote className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-6 leading-relaxed">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {currentTestimonial.name}, {currentTestimonial.age}
                    </p>
                    <p className="text-gray-600">
                      {currentTestimonial.location} • Purchased: {currentTestimonial.product}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-cream-50 transition-colors border border-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-teal-700" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-cream-50 transition-colors border border-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-teal-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-teal-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
