'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MapPin } from 'lucide-react'

export default function ConsultationsPage() {
  const [step, setStep] = useState<'type' | 'date' | 'details' | 'confirmation'>(
    'type'
  )

  const [formData, setFormData] = useState({
    type: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  })

  const consultationTypes = [
    {
      id: 'general',
      title: 'General Cancer Care',
      description: 'Comprehensive guidance on products and recovery',
      duration: '30 mins',
      price: 'Free',
    },
    {
      id: 'product',
      title: 'Product Selection Help',
      description: 'Personalized help choosing the right products',
      duration: '30 mins',
      price: 'Free',
    },
    {
      id: 'recovery',
      title: 'Recovery Coaching',
      description: 'One-on-one recovery and wellness guidance',
      duration: '60 mins',
      price: '₹1,000',
    },
  ]

  const cities = ['Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Chennai', 'Pune']

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleTypeSelect = (typeId: string) => {
    setFormData({ ...formData, type: typeId })
    setStep('date')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('confirmation')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4">
            Book Your Free <span className="font-semibold text-amber-600">Consultation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Connect with our cancer care specialists for personalized guidance on
            your recovery journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Consultation Type */}
        {step === 'type' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Choose Consultation Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consultationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:border-amber-600 hover:shadow-lg transition text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-amber-600">
                        {type.price}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 'date' && (
          <div>
            <button
              onClick={() => setStep('type')}
              className="text-amber-600 hover:text-amber-700 font-semibold mb-8"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Pick a Date & Time
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calendar (Simplified) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select a time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setStep('details')}
              disabled={!formData.date || !formData.time}
              className="mt-8 w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white py-3 rounded-lg font-semibold transition"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 'details' && (
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              onClick={() => setStep('date')}
              className="text-amber-600 hover:text-amber-700 font-semibold mb-8"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Your Information
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    required
                  >
                    <option value="">Select your city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us anything we should know..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Book Consultation
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Confirmation */}
        {step === 'confirmation' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Consultation <span className="font-semibold">Booked!</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you! We've received your booking request. Our team will
              contact you within 24 hours to confirm your consultation appointment.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 max-w-md mx-auto mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Appointment Details</h3>
              <div className="space-y-3 text-left">
                <div>
                  <p className="text-xs text-gray-600">Date & Time</p>
                  <p className="text-gray-800 font-medium">{formData.date} at {formData.time}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Confirmation Email</p>
                  <p className="text-gray-800 font-medium">{formData.email}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setStep('type')
                setFormData({
                  type: '',
                  date: '',
                  time: '',
                  name: '',
                  email: '',
                  phone: '',
                  city: '',
                  message: '',
                })
              }}
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
