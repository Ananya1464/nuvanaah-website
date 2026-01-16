'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      image: '👩',
      rating: 5,
      text: 'The mastectomy bra from Nuvanaah gave me back my confidence. After surgery, I was so worried about how I would feel, but this product is truly designed with care. The quality is exceptional and the support team was incredibly understanding.',
      product: 'Mastectomy Bra',
      highlight: 'gave me back my confidence',
    },
    {
      id: 2,
      name: 'Sunita Patel',
      location: 'Ahmedabad, Gujarat',
      image: '👩‍🦰',
      rating: 5,
      text: 'During my chemotherapy sessions, the port access shirt was a lifesaver. No more struggling with regular clothes. The fabric is so soft and the zippers work perfectly. Thank you for making treatment days easier!',
      product: 'Chemo Port Shirt',
      highlight: 'was a lifesaver',
    },
    {
      id: 3,
      name: 'Meera Krishnan',
      location: 'Chennai, Tamil Nadu',
      image: '👩‍🦱',
      rating: 5,
      text: 'I ordered the drainage bag holder and it arrived with such elegant, discreet packaging. The product itself is exactly what I needed for my recovery. The team even called to check how I was doing - such personal care!',
      product: 'Drainage Bag Holder',
      highlight: 'such personal care',
    },
    {
      id: 4,
      name: 'Anjali Deshmukh',
      location: 'Pune, Maharashtra',
      image: '👧',
      rating: 5,
      text: 'The breast prosthesis looks and feels so natural. I was nervous about ordering online, but the personal consultation helped me choose the right size. This company truly understands what we go through.',
      product: 'Silicone Breast Form',
      highlight: 'truly understands',
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-cream-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-100/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-50/50 rounded-full filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Stories of <span className="text-gradient-teal italic">Strength</span>
          </h2>
          <p className="section-subtitle">
            Real experiences from our community of warriors.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card - Premium Design */}
          <div className="bg-white rounded-[2rem] shadow-luxury p-10 md:p-14 relative overflow-hidden border border-gray-100/50">
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold-50 to-transparent" />

            {/* Quote Icon - Elegant */}
            <div className="absolute top-10 right-10 text-gold-100">
              <Quote className="w-28 h-28" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10" style={{ fontFamily: 'var(--font-heading)' }}>
                "{testimonials[activeIndex].text}"
              </blockquote>

              {/* Highlight */}
              <div className="inline-block bg-gold-50 border border-gold-200 rounded-full px-4 py-1 text-sm text-gold-700 font-medium mb-8">
                "{testimonials[activeIndex].highlight}"
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-5">
                <div className="w-18 h-18 bg-gradient-to-br from-teal-100 to-cream-100 rounded-2xl flex items-center justify-center text-4xl p-4">
                  {testimonials[activeIndex].image}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-500">{testimonials[activeIndex].location}</p>
                  <p className="text-teal-600 font-medium text-sm mt-1">
                    Purchased: {testimonials[activeIndex].product}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - Elegant */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-white rounded-full shadow-card flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-luxury border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${index === activeIndex
                      ? 'bg-gradient-to-r from-gold-400 to-gold-500 w-10'
                      : 'bg-gray-200 hover:bg-gray-300 w-3'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-white rounded-full shadow-card flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-luxury border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
