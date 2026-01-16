'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, DollarSign } from 'lucide-react'

interface CityConsultant {
  name: string
  title: string
  phone: string
  email: string
  availability: string
  image: string
}

interface CityPage {
  name: string
  region: string
  description: string
  consultants: CityConsultant[]
  hospitals: string[]
}

const cityData: Record<string, CityPage> = {
  mumbai: {
    name: 'Mumbai',
    region: 'Maharashtra',
    description:
      'Comprehensive cancer care support and products in Mumbai and surrounding areas.',
    consultants: [
      {
        name: 'Priya Sharma',
        title: 'Cancer Care Specialist',
        phone: '+91 98765 43210',
        email: 'priya.sharma@nuvanaah.com',
        availability: 'Mon-Sat, 10 AM - 6 PM',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      },
    ],
    hospitals: [
      'Tata Memorial Hospital',
      'Kokilaben Hospital',
      'Hinduja Hospital',
      'Nanavati Max Hospital',
    ],
  },
  bangalore: {
    name: 'Bangalore',
    region: 'Karnataka',
    description:
      'Expert cancer care consultation and support services available in Bangalore.',
    consultants: [
      {
        name: 'Dr. Anjali Nair',
        title: 'Wellness Consultant',
        phone: '+91 98765 43211',
        email: 'anjali.nair@nuvanaah.com',
        availability: 'Tue-Sun, 11 AM - 7 PM',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      },
    ],
    hospitals: ['HCG Cancer Centre', 'Apollo Hospital', 'Manipal Hospital'],
  },
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cityData[params.city] || cityData.mumbai
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-amber-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{city.name}</span>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-amber-600" />
            <span className="text-amber-600 font-semibold">{city.region}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4">
            Cancer Care Support in <span className="font-semibold text-amber-600">{city.name}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">{city.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Consultants Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-8">
                Our <span className="font-semibold">Consultants</span>
              </h2>

              <div className="space-y-6">
                {city.consultants.map((consultant) => (
                  <div
                    key={consultant.name}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <div className="flex gap-6">
                      {/* Avatar */}
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={consultant.image}
                          alt={consultant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {consultant.name}
                        </h3>
                        <p className="text-amber-600 font-medium mb-3">{consultant.title}</p>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a href={`tel:${consultant.phone}`} className="hover:text-amber-600">
                              {consultant.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href={`mailto:${consultant.email}`} className="hover:text-amber-600">
                              {consultant.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{consultant.availability}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setBookingOpen(true)}
                          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition"
                        >
                          Book Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hospitals Section */}
            <section>
              <h2 className="text-3xl font-light text-gray-800 mb-8">
                Partner <span className="font-semibold">Hospitals</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {city.hospitals.map((hospital) => (
                  <div
                    key={hospital}
                    className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition"
                  >
                    <p className="text-gray-800 font-medium">{hospital}</p>
                    <p className="text-gray-600 text-sm mt-2">
                      Trusted partner for oncology care and patient support
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 sticky top-20">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Need Help?
              </h3>

              <div className="space-y-6">
                {/* Free Consultation */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Free Consultation</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Speak with our cancer care specialists about your needs.
                  </p>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Book Now
                  </button>
                </div>

                {/* Pricing */}
                <div className="border-t border-amber-200 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-amber-600" />
                    <h4 className="font-semibold text-gray-800">Pricing</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Initial Consultation</span>
                      <span className="font-semibold text-gray-800">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Follow-up Session</span>
                      <span className="font-semibold text-gray-800">₹500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Product Selection Help</span>
                      <span className="font-semibold text-gray-800">Free</span>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="border-t border-amber-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Contact Us</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📧 support@nuvanaah.com</p>
                    <p>📞 1800-NUVANA-1</p>
                    <p>⏰ Mon-Fri: 9 AM - 9 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal (Placeholder) */}
      {bookingOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Book Consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Our team will contact you within 24 hours to confirm your appointment.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Book
                </button>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
