'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Award, Shield, TrendingUp, Users, Target, Building2 } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Efficiency showcase slides
  const slides = [
    {
      title: 'Expert Consultation Process',
      description: 'Our oncology specialists guide you through product selection with personalized care',
      placeholder: '👥 Professional Consultation',
      imagePrompt: 'Professional healthcare consultation scene, oncology specialist in white coat consulting with patient in comfortable private consultation room, warm lighting, medical certificates on wall, compassionate care, professional photography, soft focus background, teal and cream color palette, 16:9 aspect ratio'
    },
    {
      title: 'Medical-Grade Quality Testing',
      description: '100% products undergo rigorous clinical testing for sensitive post-surgery skin',
      placeholder: '🔬 Quality Assurance',
      imagePrompt: 'Medical laboratory quality testing setup, scientist examining breast prosthesis with precision instruments, clinical testing environment, medical-grade materials on sterile surface, professional lab lighting, quality control charts visible, high-tech medical facility, 16:9 aspect ratio, clean aesthetic'
    },
    {
      title: 'Fast & Discreet Delivery',
      description: 'Express shipping across India with privacy-focused packaging in 24-48 hours',
      placeholder: '📦 Swift Delivery',
      imagePrompt: 'Professional delivery service, unmarked discreet packaging box wrapped in elegant cream paper with Nuvanaah seal, courier person in professional uniform handing package to satisfied customer at doorstep, clean Indian home entrance, warm natural lighting, trust and efficiency, 16:9 aspect ratio'
    },
    {
      title: 'Post-Purchase Care Support',
      description: 'Dedicated support team available via WhatsApp, phone, and video calls for product guidance',
      placeholder: '💬 24/7 Support',
      imagePrompt: 'Customer care representative on video call consultation, warm smile, headset, modern home office setup, screen showing product guidance to customer, compassionate care, professional yet approachable, soft lighting, teal brand colors visible, 16:9 aspect ratio, trust and support theme'
    },
    {
      title: 'Hospital Partnerships',
      description: 'Trusted by 15+ leading oncology centers across India for patient recommendations',
      placeholder: '🏥 Medical Network',
      imagePrompt: 'Modern Indian hospital oncology department, doctors and nurses discussing patient care with Nuvanaah product catalog, professional medical environment, certificates of partnership on wall, collaborative healthcare, bright clean hospital interior, medical professionalism, 16:9 aspect ratio'
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 seconds per slide
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-light text-gray-900 mb-6"
              >
                Not Just Products—<br />
                <span className="font-semibold text-teal-600">We're Your Care Partners</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-700 leading-relaxed mb-8"
              >
                Founded on 45+ years of medical expertise, powered by compassion for every patient's journey.
              </motion.p>
            </div>

            {/* Right: Efficiency Slideshow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-teal-100 to-sage-100 flex flex-col items-center justify-center p-8 text-center"
                  >
                    {/* Placeholder Icon/Emoji */}
                    <div className="text-8xl mb-6">{slides[currentSlide].placeholder}</div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                      {slides[currentSlide].title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-700 max-w-md leading-relaxed">
                      {slides[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-12 h-3 bg-teal-600'
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                      } rounded-full`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Prompts Info Card (for your reference) */}
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-gray-700">
                <p className="font-semibold mb-2">📸 Image Needed for Slide {currentSlide + 1}:</p>
                <p className="text-xs italic">{slides[currentSlide].imagePrompt}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Nuvanaah Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              What is <span className="font-semibold text-teal-600">Nuvanaah?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuvanaah (Sanskrit for compassion) is India's premier provider of dignified cancer care products, specializing in mastectomy care, chemotherapy support, and post-surgery recovery essentials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-teal-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Purpose</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide medical-grade products that restore dignity, comfort, and confidence during cancer treatment and recovery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-sage-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Who We Serve</h3>
              <p className="text-gray-700 leading-relaxed">
                Cancer patients across India seeking thoughtfully designed products for mastectomy, chemotherapy, lymphedema, and hair loss management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-cream-50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What Sets Us Apart</h3>
              <p className="text-gray-700 leading-relaxed">
                45+ years of medical expertise, doctor-endorsed designs, Government recognition, and unwavering commitment to quality and compassion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              The Beginning: <span className="font-semibold text-teal-600">K-Hair India Legacy</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Our story begins nearly five decades ago when <strong>K-Hair India was founded in 1976</strong> with a simple mission: help people feel confident during life's most challenging moments. For over 45 years, K-Hair India has been India's trusted name in medical-grade hair solutions, serving tens of thousands of customers experiencing medical hair loss.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream-50 border border-amber-200 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Why We Created <span className="font-semibold text-teal-600">Nuvanaah</span> (2024)
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                After decades of working with cancer patients who needed wigs during chemotherapy, we kept hearing the same frustrations:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">&quot;I can't find a comfortable mastectomy bra anywhere in India.&quot;</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">&quot;Where do I buy a breast prosthesis that actually fits?&quot;</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">&quot;My chemo port hurts so badly from seatbelts during car rides.&quot;</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">&quot;Managing drainage bags after surgery is impossible with regular clothing.&quot;</p>
                </div>
              </div>
              <p>
                These weren't just product gaps—they were moments of unnecessary suffering during an already difficult journey. So in 2024, we launched <strong>Nuvanaah</strong> to fill those gaps with dignity and care.
              </p>
              <p>
                We spent months researching, talking to oncologists, interviewing cancer survivors, and meticulously designing each product. Every mastectomy bra pocket, every port shirt zipper, every prosthesis curve was tested and refined with real patient input.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-amber-50 to-teal-50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Government Recognition</h3>
                <p className="text-gray-700 leading-relaxed">
                  In 2024, Nuvanaah was recognized under the <strong>Government of India's Startup India Program</strong>, validating our mission to bring innovation and quality to oncology care products in India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Our Mission & <span className="font-semibold text-teal-600">Values</span>
            </h2>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-teal-50 to-sage-50 rounded-2xl p-8 md:p-12 mb-16 text-center border border-teal-100"
          >
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We design cancer care products to support comfort, dignity, and everyday life — during treatment and recovery. Every product we create is tested with oncology experts and refined based on real patient feedback.
            </p>
          </motion.div>

          {/* Core Values */}
          <h3 className="text-3xl font-light text-center text-gray-900 mb-12">
            Our Core <span className="font-semibold text-teal-600">Values</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Compassion First</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every product decision starts with: &quot;How would I want my own mother/sister/friend treated during cancer?&quot; If it's not good enough for our loved ones, it's not good enough for our customers.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Medical Excellence</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We don't compromise on quality. Medical-grade materials, doctor consultations during design, clinical testing for sensitive skin, and partnerships with oncology departments ensure our products meet the highest standards.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Dignity Always</h4>
                  <p className="text-gray-600 leading-relaxed">
                    From discreet packaging to compassionate customer service, we treat every interaction with the respect and privacy our customers deserve. Cancer is hard enough—buying medical products shouldn't add to the stress.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We actively seek feedback from patients and doctors to improve our products. Your experience shapes our innovations. We're always listening, always learning, always improving.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-center text-gray-900 mb-16"
          >
            Our Impact in <span className="font-semibold text-teal-600">Numbers</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">45+</div>
              <div className="text-sm text-gray-600">Years of Medical Expertise</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Cancer Patients Supported</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Specialized Products</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Hospital Partnerships</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }} className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.8/5</div>
              <div className="text-sm text-gray-600">Average Customer Rating</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to Experience Compassionate Care?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Browse our products or speak with a specialist—we're here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition"
              >
                Shop All Products
              </Link>
              <Link
                href="/consultations"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold transition"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
