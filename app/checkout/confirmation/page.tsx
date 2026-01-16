'use client'

import Link from 'next/link'
import { CheckCircle, Package, Truck, Phone, Heart, ArrowRight, Home, Sparkles } from 'lucide-react'

export default function OrderConfirmationPage() {
    // Generate random order ID
    const orderId = `NUV${Date.now().toString().slice(-8)}`

    return (
        <div className="min-h-screen bg-cream-50 py-16 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-100/30 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100/30 rounded-full filter blur-3xl" />

            <div className="relative max-w-2xl mx-auto px-4 text-center">
                {/* Success Icon */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse" />
                    <div className="relative w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-14 h-14 text-green-500" />
                    </div>
                    {/* Sparkles */}
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold-400" />
                    <Sparkles className="absolute -bottom-1 -left-3 w-5 h-5 text-gold-400" />
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Order <span className="text-gradient-gold italic">Confirmed!</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Thank you for your order. We're preparing it with care.
                </p>

                {/* Order Details Card */}
                <div className="bg-white rounded-3xl shadow-luxury p-8 mb-8 text-left">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                        <div>
                            <p className="text-sm text-gray-500">Order ID</p>
                            <p className="text-xl font-bold text-gray-900">{orderId}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Estimated Delivery</p>
                            <p className="text-lg font-semibold text-teal-600">3-5 Business Days</p>
                        </div>
                    </div>

                    {/* Order Timeline */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Order Placed</p>
                                <p className="text-sm text-gray-500">Your order has been confirmed</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 opacity-60">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <Package className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-500">Preparing</p>
                                <p className="text-sm text-gray-400">We're carefully packing your items</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 opacity-40">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <Truck className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-500">Out for Delivery</p>
                                <p className="text-sm text-gray-400">Your order is on its way</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What's Next Info */}
                <div className="bg-gradient-to-br from-teal-50 to-cream-50 border border-teal-200 rounded-2xl p-6 mb-8 text-left">
                    <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        What's Next?
                    </h3>
                    <ul className="space-y-2 text-sm text-teal-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>You'll receive an email confirmation with order details</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>We'll send tracking info once your order ships</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Our team may call to confirm delivery details</span>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link href="/products" className="btn-gold">
                        Continue Shopping
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/" className="btn-secondary">
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>

                {/* Support Section */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-teal-500" />
                        <span className="font-semibold text-gray-900">Need Help?</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                        Our care team is here for you every step of the way
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="tel:+919819461612"
                            className="inline-flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
                        >
                            <Phone className="w-4 h-4" />
                            +91-9819461612
                        </a>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <a
                            href="https://wa.me/919819461612"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
