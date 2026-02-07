import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Heart, CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Managing Chemo Side Effects India | Practical Tips | 2025',
    description: 'Real advice from cancer patients and oncologists on managing chemotherapy side effects. Nausea, fatigue, hair loss tips.',
    keywords: ['chemotherapy side effects', 'chemo nausea relief', 'chemo fatigue', 'hair loss chemo'],
}

export default function ChemoSideEffectsArticle() {
    return (
        <article className="min-h-screen bg-cream-50">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-teal-200 mb-4">
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full font-medium">Wellness</span>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 20, 2025</span></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Managing <span className="italic text-gold-300">Chemotherapy</span> Side Effects
                    </h1>
                    <p className="text-xl text-teal-100">By Dr. Meera Patel, MD Oncology + 50 cancer survivors</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white border-l-4 border-teal-600 p-6 mb-12 rounded-r-2xl">
                    <p className="text-lg text-gray-800">Chemotherapy affects everyone differently. Most side effects can be managed with the right strategies. This guide combines expert advice with tips from survivors.</p>
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Nausea & Vomiting</h2>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span><strong>Take anti-nausea meds BEFORE you feel sick</strong></span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span><strong>Ginger tea</strong> – natural anti-nausea remedy</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span><strong>Cold foods over hot</strong> – less smell triggers</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span><strong>Small, frequent meals</strong> every 2-3 hours</span></li>
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Fatigue & Weakness</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold mb-2">💪 Light Exercise</h4>
                            <p className="text-gray-600">Gentle walks increase energy. Start with 10 min daily.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold mb-2">📅 Plan Around Energy</h4>
                            <p className="text-gray-600">Most have better energy days 1-2 after chemo, dip days 3-5.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Hair Loss</h2>
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Cut it short</strong> before it falls out</li>
                            <li><strong>Get fitted for a wig early</strong> to match natural color</li>
                            <li><strong>Stock up on soft head coverings</strong> – scalp will be sensitive</li>
                            <li><strong>Use wig grip band</strong> for secure, comfortable hold</li>
                        </ul>
                        <Link href="/products/wig-grip-band" className="text-teal-600 font-semibold mt-4 inline-block">Shop Wig Grip Band →</Link>
                    </div>
                </section>

                <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-center mb-12">
                    <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h2 className="text-2xl font-semibold mb-3 text-white">Remember: It's Temporary</h2>
                    <p className="text-white">Most side effects improve within weeks after treatment ends. Hair grows back. Energy returns.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Chemo Comfort Products?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/products" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700">Shop Chemo Accessories</Link>
                        <a href="tel:+919819461612" className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" /> Call for Advice
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}
