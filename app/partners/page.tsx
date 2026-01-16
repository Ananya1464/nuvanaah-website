'use client'

import { useState } from 'react'
import { Check, Users, TrendingUp, Clock, DollarSign, User } from 'lucide-react'

const hospitalPartners = [
  { name: 'Tata Memorial Hospital', city: 'Mumbai' },
  { name: 'Apollo Hospital', city: 'Multiple Cities' },
  { name: 'HCG Cancer Center', city: 'Pan India' },
  { name: 'AIIMS Delhi', city: 'Delhi' },
  { name: 'Manipal Hospital', city: 'Multiple Cities' },
  { name: 'Fortis Hospital', city: 'Multiple Cities' },
]

const benefits = [
  {
    title: 'Bulk Pricing Discounts',
    description: 'Get special pricing on bulk orders (20-30% discount)',
    icon: '💰',
  },
  {
    title: 'Credit Payment Terms',
    description: 'Flexible payment terms with net 30 credit facility',
    icon: '💳',
  },
  {
    title: 'Dedicated Account Manager',
    description: 'Your own account manager for personalized support',
    icon: '👥',
  },
  {
    title: 'Priority Shipping',
    description: 'Fast, free shipping on all bulk orders',
    icon: '🚚',
  },
  {
    title: 'Custom Packaging',
    description: 'Hospital-branded packaging and white-label options',
    icon: '📦',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support for urgent orders',
    icon: '⏰',
  },
]

const steps = [
  {
    number: '1',
    title: 'Submit Application',
    description: 'Fill out our hospital partnership form with details about your facility',
    icon: '📝',
  },
  {
    number: '2',
    title: 'Verification',
    description: 'Our team verifies your hospital credentials and requirements',
    icon: '✅',
  },
  {
    number: '3',
    title: 'Account Setup',
    description: 'We set up your account with custom pricing and terms',
    icon: '⚙️',
  },
  {
    number: '4',
    title: 'Start Ordering',
    description: 'Begin ordering with full access to our product catalog',
    icon: '🛍️',
  },
]

const successStories = [
  {
    hospital: 'Tata Memorial Hospital',
    city: 'Mumbai',
    impact: '500+ patients supported monthly',
    quote: 'Nuvanaah\'s products have significantly improved our patient comfort and satisfaction.',
  },
  {
    hospital: 'Apollo Hospital Bangalore',
    city: 'Bangalore',
    impact: '200+ bulk orders annually',
    quote: 'The dedicated support and custom packaging make our partnership seamless.',
  },
]

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    hospitalName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    monthlyVolume: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save to Supabase
    console.log('Partnership application:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        hospitalName: '',
        contactPerson: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        monthlyVolume: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-50 to-white px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hospital Partnership Program
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading hospitals across India in providing premium cancer care products to patients.
            Special pricing, dedicated support, and flexible terms.
          </p>
          <div className="inline-block bg-amber-100 text-amber-800 px-6 py-3 rounded-full font-medium">
            Trusted by 50+ hospitals nationwide
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Partner with Nuvanaah?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-cream-200"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-cream-50 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connection line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
                )}
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-5xl mb-4 text-center">{step.icon}</div>
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Hospitals Trusting Nuvanaah
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-lg p-8 border border-sage-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 mb-4">{partner.city}</p>
              <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2">
                View partnership →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-cream-50 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{story.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{story.hospital}</p>
                  <p className="text-sm text-gray-600 mb-2">{story.city}</p>
                  <p className="text-sm font-medium text-amber-600">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Form */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-amber-50 to-cream-50 rounded-lg p-8 md:p-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Apply for Partnership
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form below and our team will contact you within 24 hours.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Application Submitted!</h3>
              <p className="text-green-600">
                Thank you for your interest. We'll review your application and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hospital Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Hospital / Facility Name *
                  </label>
                  <input
                    type="text"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    required
                    placeholder="Enter hospital name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    placeholder="Enter contact person name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="Enter state"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                {/* Monthly Volume */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Estimated Monthly Volume *
                  </label>
                  <select
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  >
                    <option value="">Select volume range</option>
                    <option value="0-50">0-50 units</option>
                    <option value="50-200">50-200 units</option>
                    <option value="200-500">200-500 units</option>
                    <option value="500+">500+ units</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your facility and how we can help..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Submit Application
              </button>

              <p className="text-sm text-gray-600 text-center">
                Our team will review your application and contact you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-sage-50 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Contact our partnership team directly for personalized support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91XXXXXXXXXX"
              className="bg-sage-600 hover:bg-sage-700 text-white py-3 px-8 rounded-lg font-medium transition-colors"
            >
              Call Us
            </a>
            <a
              href="mailto:partnerships@nuvanaah.com"
              className="border-2 border-sage-600 text-sage-600 hover:bg-sage-50 py-3 px-8 rounded-lg font-medium transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
