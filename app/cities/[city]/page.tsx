'use client'

import Link from 'next/link'
import { MapPin, MessageCircle, Phone, Mail } from 'lucide-react'

interface CityPage {
  name: string
  region: string
  description: string
  hospitals: string[]
}

const cityData: Record<string, CityPage> = {
  mumbai: {
    name: 'Mumbai',
    region: 'Maharashtra',
    description:
      'Comprehensive cancer care support and products in Mumbai and surrounding areas.',
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
    hospitals: ['HCG Cancer Centre', 'Apollo Hospital', 'Manipal Hospital'],
  },
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cityData[params.city] || cityData.mumbai

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
                {/* 24/7 Support */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">24/7 Online Support</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Reach out to us on WhatsApp anytime for sizing advice, product recommendations, or support.
                  </p>
                  <a
                    href="https://wa.me/919076041779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>

                {/* Contact */}
                <div className="border-t border-amber-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Contact Us</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-600" />
                      <a href="tel:+919076041779" className="hover:text-amber-700">+91-9076041779</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-600" />
                      <a href="mailto:hello@nuvanaah.com" className="hover:text-amber-700">hello@nuvanaah.com</a>
                    </div>
                    <div className="text-gray-500 mt-2 text-xs">
                      Phone & Email Support: Mon-Sat, 10 AM - 6 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
