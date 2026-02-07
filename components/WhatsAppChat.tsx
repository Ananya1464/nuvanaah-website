'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppChat() {
  // Nuvanaah WhatsApp Business Number
  // TODO: Replace with your actual WhatsApp Business number once you get it
  const phoneNumber = '919876543210' // Format: 91 + 10-digit number (no + or spaces)
  const defaultMessage = 'Hi, I need help choosing the right cancer care products from Nuvanaah...'

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
      className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 hover:scale-110 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}
