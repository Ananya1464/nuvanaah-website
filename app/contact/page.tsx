import type { Metadata } from 'next'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Nuvanaah - Cancer Care Support India | Free Consultation',
  description: 'Contact Nuvanaah for cancer care products support. Free consultations, product guidance, order help. Phone, WhatsApp, email. Mon-Sat 10AM-6PM IST. Mumbai, India.',
  keywords: ['contact Nuvanaah', 'cancer products support India', 'free consultation'],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            We're Here <span className="font-semibold text-teal-600">for You</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Questions about products? Need sizing help? Just want to talk? Our compassionate team is ready to support you.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Call Us */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100 shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <div className="space-y-3 mb-6">
                <a href="tel:+919819461612" className="block text-lg font-semibold text-teal-600 hover:text-teal-700">
                  +91-9819461612
                </a>
                <a href="tel:+919967711116" className="block text-lg font-semibold text-teal-600 hover:text-teal-700">
                  +91-9967711116
                </a>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Mon-Sat, 10AM-6PM IST</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Best For:</strong> Immediate assistance, complex questions, urgent order issues
              </p>
            </div>

            {/* WhatsApp Us */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">WhatsApp Us</h3>
              <div className="space-y-3 mb-6">
                <a
                  href="https://wa.me/919819461612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-semibold text-green-600 hover:text-green-700"
                >
                  +91-9819461612
                </a>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Mon-Sat, 10AM-8PM IST</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Best For:</strong> Product photos, sizing questions, quick consultations, follow-up care
              </p>
            </div>

            {/* Email Us */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <div className="space-y-3 mb-6">
                <a href="mailto:support@nuana.com" className="block text-lg font-semibold text-amber-600 hover:text-amber-700">
                  support@nuana.com
                </a>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Response within 24 hours</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Best For:</strong> Detailed inquiries, order documentation, partnership proposals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-white to-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Send Us a <span className="font-semibold text-teal-600">Message</span>
            </h2>
            <p className="text-gray-600">We typically respond within 4-6 hours during business hours</p>
          </div>

          <form className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="+91-XXXXX-XXXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Support</option>
                  <option value="sizing">Sizing Help</option>
                  <option value="consultation">Free Consultation Request</option>
                  <option value="partnership">Partnership/Hospital Inquiry</option>
                  <option value="feedback">Feedback or Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="How can we help you? Feel free to share details about your situation—we treat every conversation with care and confidentiality."
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="contact_method" value="phone" className="w-4 h-4 text-teal-600 focus:ring-teal-500" />
                    <span className="ml-3 text-gray-700">Phone Call</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="contact_method" value="whatsapp" className="w-4 h-4 text-teal-600 focus:ring-teal-500" />
                    <span className="ml-3 text-gray-700">WhatsApp</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="contact_method" value="email" className="w-4 h-4 text-teal-600 focus:ring-teal-500" defaultChecked />
                    <span className="ml-3 text-gray-700">Email</span>
                  </label>
                </div>
              </div>

              {/* Best Time */}
              <div>
                <label htmlFor="best_time" className="block text-sm font-semibold text-gray-700 mb-2">
                  Best Time to Reach You
                </label>
                <input
                  type="text"
                  id="best_time"
                  name="best_time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="e.g., weekday mornings, after 5PM"
                />
              </div>

              {/* Newsletter Checkbox */}
              <div>
                <label className="flex items-start">
                  <input type="checkbox" name="newsletter" className="w-5 h-5 text-teal-600 focus:ring-teal-500 mt-0.5" />
                  <span className="ml-3 text-sm text-gray-700">
                    I'd like to receive helpful cancer care tips and product updates (optional, unsubscribe anytime)
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition shadow-lg hover:shadow-xl"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-500 text-center">
                Your information is confidential and will never be shared. We typically respond within 4-6 hours during business hours.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 md:p-12 border border-teal-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Book a Free Consultation
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Not sure which products are right for your situation? Our trained specialists offer free, no-pressure consultations via phone, WhatsApp video, or in-person (select cities).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What to Expect:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Duration:</strong> 15-30 minutes (or as long as you need)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Topics:</strong> Product recommendations, sizing guidance, post-surgery care tips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>No Pressure:</strong> We're here to help, not to sell</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Available In:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Phone consultation (India-wide)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>WhatsApp video call (India-wide)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Home appointments (Mumbai, Delhi, Bangalore, Pune)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>In-person at partner hospitals</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/consultations"
                className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Office Address & Map Section */}
      <section className="py-16 bg-gradient-to-b from-white to-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Visit Us <span className="font-semibold text-teal-600">(By Appointment Only)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Details */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nuvanaah | K-Hair India<br />
                    [Your Full Street Address]<br />
                    [Area], Mumbai - [Pincode]<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Monday - Saturday: 10:00 AM - 6:00 PM IST<br />
                    Sunday: Closed<br />
                    <span className="text-sm text-teal-600 font-medium">*Please schedule appointments in advance</span>
                  </p>
                </div>
              </div>

              <div className="bg-cream-50 rounded-lg p-4 border border-amber-100">
                <h4 className="font-semibold text-gray-900 mb-2">Directions:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Nearest Metro:</strong> [Station Name]</li>
                  <li><strong>Parking:</strong> Available on premises</li>
                  <li><strong>Landmark:</strong> [Nearby Landmark]</li>
                </ul>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Google Map Embed</p>
                  <p className="text-sm text-gray-500">Map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Reference */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Quick Answers to <span className="font-semibold text-teal-600">Common Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">What's your return policy?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Clothing items can be exchanged within 7 days if unworn and in original packaging. Personal care items (prosthesis, adhesives) cannot be returned due to hygiene.
              </p>
              <Link href="/faq" className="text-teal-600 hover:text-teal-700 text-sm font-medium inline-block mt-2">
                Full Policy →
              </Link>
            </div>

            <div className="bg-cream-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Currently, we ship within India only. International shipping coming soon.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Can I visit your store to see products?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our Mumbai office welcomes visitors by appointment. We also have product displays at partner hospitals in major cities.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer bulk discounts?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes, we have special pricing for hospitals, cancer support groups, and NGOs. Email support@nuana.com with your requirements.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-block text-teal-600 hover:text-teal-700 font-semibold"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Don't hesitate to reach out. No question is too small, and your comfort is our priority.
          </p>
          <a
            href="https://wa.me/919819461612"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp Now
          </a>
        </div>
      </section>
    </div>
  )
}
