import type { Metadata } from 'next'
import { Heart, Award, Users, Target, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Nuvanaah - 45+ Years Cancer Care Expertise | K-Hair India',
  description: 'Founded on K-Hair India\'s 45-year legacy, Nuvanaah provides compassionate cancer care products. Doctor-endorsed, Government recognized. Meet our team supporting oncology patients across India.',
  keywords: ['Nuvanaah story', 'K-Hair India', 'cancer care company', 'oncology products India'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Not Just Products—<br />
            <span className="font-semibold text-teal-600">We're Your Care Partners</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Founded on 45+ years of medical expertise, powered by compassion for every patient's journey.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              The Beginning: <span className="font-semibold text-teal-600">K-Hair India Legacy</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Our story begins nearly five decades ago when <strong>K-Hair India was founded in 1976</strong> with a simple mission: help people feel confident during life's most challenging moments. For over 45 years, K-Hair India has been India's trusted name in medical-grade hair solutions, serving tens of thousands of customers experiencing medical hair loss.
              </p>
            </div>
          </div>

          <div className="bg-cream-50 border border-amber-200 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Why We Created <span className="font-semibold text-teal-600">Nuvanaah</span> (2024)
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                After decades of working with cancer patients who needed wigs during chemotherapy, we kept hearing the same frustrations:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">"I can't find a comfortable mastectomy bra anywhere in India."</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">"Where do I buy a breast prosthesis that actually fits?"</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">"My chemo port hurts so badly from seatbelts during car rides."</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="italic text-gray-600">"Managing drainage bags after surgery is impossible with regular clothing."</p>
                </div>
              </div>
              <p>
                These weren't just product gaps—they were moments of unnecessary suffering during an already difficult journey. So in 2024, we launched <strong>Nuvanaah</strong> (meaning "compassion" in Sanskrit) to fill those gaps.
              </p>
              <p>
                We spent months researching, talking to oncologists, interviewing cancer survivors, and meticulously designing each product. Every mastectomy bra pocket, every port shirt zipper, every prosthesis curve was tested and refined with real patient input.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Government Recognition</h3>
            <p className="text-gray-700 leading-relaxed">
              In 2024, Nuvanaah was recognized under the <strong>Government of India's Startup India Program</strong>, validating our mission to bring innovation and quality to oncology care products in India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-white to-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Our Mission & <span className="font-semibold text-teal-600">Values</span>
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="bg-teal-600 text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
            <Target className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To support cancer patients and survivors with dignity-centered, medical-grade products that make recovery easier, treatment more comfortable, and confidence attainable throughout the journey.
            </p>
          </div>

          {/* Core Values */}
          <h3 className="text-3xl font-light text-center text-gray-900 mb-12">
            Our Core <span className="font-semibold text-teal-600">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Compassion First</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every product decision starts with: "How would I want my own mother/sister/friend treated during cancer?" If it's not good enough for our loved ones, it's not good enough for our customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We actively seek feedback from patients and doctors to improve our products. Your experience shapes our innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center text-gray-900 mb-16">
            Our Impact in <span className="font-semibold text-teal-600">Numbers</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">45+</div>
              <div className="text-sm text-gray-600">Years of Medical Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Cancer Patients Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Specialized Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Hospital Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.8/5</div>
              <div className="text-sm text-gray-600">Average Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </div>
      </section>
    </div>
  )
}
