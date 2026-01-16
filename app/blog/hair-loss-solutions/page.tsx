import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Heart, CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Hair Loss During Chemo India | Wigs, Scarves & Confidence | 2025',
    description: 'Complete guide to managing hair loss during chemotherapy. Wig care, headscarf styling, and tips for feeling confident during treatment.',
    keywords: ['hair loss chemo', 'cancer wigs', 'headscarf chemo', 'hair loss treatment', 'wig care'],
}

export default function HairLossSolutionsArticle() {
    return (
        <article className="min-h-screen bg-cream-50">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-teal-200 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Beauty</span>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 min read</span></div>
                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 10, 2025</span></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Hair Loss During Chemo: <span className="italic text-gold-300">Wigs, Scarves & Confidence</span>
                    </h1>
                    <p className="text-xl text-teal-100">By Neha Singh, Cancer Survivor & Beauty Consultant</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white border-l-4 border-teal-600 p-6 mb-12 rounded-r-2xl">
                    <p className="text-lg text-gray-800">Losing your hair during chemo is one of the most visible signs of cancer treatment. While it's temporary, it can feel very personal. This guide will help you feel prepared—and confident.</p>
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">What to Expect</h2>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Timeline:</strong> Hair typically falls 2-3 weeks after first chemo</li>
                            <li><strong>Pattern:</strong> Usually comes out in clumps, not strand by strand</li>
                            <li><strong>Other areas:</strong> May also affect eyebrows, eyelashes, body hair</li>
                            <li><strong>Scalp:</strong> May feel tender or sensitive during hair loss</li>
                            <li><strong>Regrowth:</strong> Starts 3-6 months after chemo ends</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Wig Options</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Human Hair Wigs</h4>
                            <p className="text-gray-600 text-sm mb-2">Most natural look and feel. Can be styled with heat. More expensive (₹15,000-50,000+).</p>
                            <p className="text-green-600 font-medium text-sm">Best for: Special occasions, long-term use</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Synthetic Wigs</h4>
                            <p className="text-gray-600 text-sm mb-2">Affordable (₹2,000-10,000). Pre-styled, low maintenance. Can't use heat tools.</p>
                            <p className="text-green-600 font-medium text-sm">Best for: Daily wear, budget-friendly</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Wig Care Tips</h2>
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span>Use a wig grip band for secure, comfortable fit</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span>Store on a wig stand to maintain shape</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span>Wash every 6-8 wears with wig shampoo</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span>Air dry completely before wearing</span></li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-teal-200">
                            <Link href="/products/wig-grip-band" className="text-teal-600 font-semibold">Shop Wig Grip Band (₹599) →</Link>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Headscarf Styling</h2>
                    <p className="text-gray-700 mb-4">Scarves are a comfortable, stylish alternative to wigs. Tips for best results:</p>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Choose cotton or bamboo fabrics (gentle on sensitive scalp)</li>
                        <li>• Pre-tied turbans are easiest for beginners</li>
                        <li>• Add volume with an underscarf or padding</li>
                        <li>• Match with earrings/accessories for a put-together look</li>
                    </ul>
                </section>

                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center mb-12">
                    <Heart className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-3">Remember: Hair Grows Back</h2>
                    <p className="text-teal-100 mb-4">Your new hair often comes back thicker! Many survivors actually like their post-chemo hair better. This is temporary.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Choosing?</h2>
                    <a href="tel:+919819461612" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700">
                        <Phone className="w-5 h-5" /> Free Consultation Call
                    </a>
                </div>
            </div>
        </article>
    )
}
