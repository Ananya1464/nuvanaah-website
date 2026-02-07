import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight, Heart, Star, CheckCircle, ShoppingBag, Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Choosing the Right Breast Prosthesis India | Complete Guide 2025',
    description: 'Complete guide to choosing breast prosthesis after mastectomy in India. Types, sizes, materials, prices, and how to find your perfect fit. Expert recommendations.',
    keywords: ['breast prosthesis India', 'silicone breast form', 'mastectomy prosthesis', 'breast form guide', 'prosthesis fitting'],
    openGraph: {
        title: 'Choosing the Right Breast Prosthesis: Complete Guide for Indian Women',
        description: 'Expert guide to finding your perfect breast prosthesis after mastectomy. Types, sizing, care tips.',
        type: 'article',
    },
}

export default function ChoosingProsthesisArticle() {
    return (
        <article className="min-h-screen bg-cream-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-teal-200 mb-4">
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full font-medium">Shopping Guide</span>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>8 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>December 28, 2025</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                        Choosing the Right <span className="italic text-gold-300">Breast Prosthesis</span>: Complete Guide for Indian Women
                    </h1>

                    <p className="text-xl text-teal-100">
                        Written by Anjali Gupta, Certified Prosthesis Fitter with 15+ years experience
                    </p>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <div className="bg-white border-l-4 border-teal-600 p-6 mb-12 rounded-r-2xl shadow-soft">
                        <p className="text-lg leading-relaxed text-gray-800 mb-4">
                            Choosing your first breast prosthesis after mastectomy can feel overwhelming. There are so many options—silicone, foam, partial, full—and finding the right one matters for both comfort and confidence.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            This guide will walk you through <strong>everything you need to know</strong> to find the perfect prosthesis for your body, lifestyle, and budget. Let's make this decision simple.
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-12 shadow-soft">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">In This Guide:</h2>
                        <ol className="space-y-2 text-teal-600">
                            <li><a href="#when-to-start" className="hover:text-teal-700">When to Start Looking for a Prosthesis</a></li>
                            <li><a href="#types" className="hover:text-teal-700">Types of Breast Prostheses</a></li>
                            <li><a href="#sizing" className="hover:text-teal-700">How to Find Your Size</a></li>
                            <li><a href="#materials" className="hover:text-teal-700">Materials: Silicone vs Foam vs Fiberfill</a></li>
                            <li><a href="#bras" className="hover:text-teal-700">Mastectomy Bras: What to Look For</a></li>
                            <li><a href="#care" className="hover:text-teal-700">Prosthesis Care & Maintenance</a></li>
                            <li><a href="#prices" className="hover:text-teal-700">Price Guide for India</a></li>
                        </ol>
                    </div>

                    {/* Section 1 */}
                    <section id="when-to-start" className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">When to Start Looking for a Prosthesis</h2>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                            <p className="text-gray-800 mb-4">
                                <strong>Timing is important.</strong> Most surgeons recommend waiting <strong>6-8 weeks</strong> after mastectomy before using a weighted silicone prosthesis. Your incisions need to heal completely first.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                                    <p className="text-gray-700"><strong>Week 1-4:</strong> Soft fiber-filled or foam prosthesis only (no weight on incisions)</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                                    <p className="text-gray-700"><strong>Week 6-8+:</strong> With surgeon clearance, start trying silicone prostheses</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section id="types" className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Types of Breast Prostheses</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Form Prosthesis</h3>
                                <p className="text-gray-600 mb-4">For complete mastectomy. Replaces entire breast. Available in round, teardrop, and asymmetric shapes.</p>
                                <p className="text-teal-600 font-semibold">Best for: Single or double mastectomy</p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partial Form (Shaper/Equalizer)</h3>
                                <p className="text-gray-600 mb-4">For lumpectomy or partial mastectomy. Fills in the area removed during surgery.</p>
                                <p className="text-teal-600 font-semibold">Best for: Breast asymmetry, lumpectomy</p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Attachable/Self-Adhering</h3>
                                <p className="text-gray-600 mb-4">Adheres directly to chest wall. Can be worn without a bra for special occasions or swimming.</p>
                                <p className="text-teal-600 font-semibold">Best for: Active lifestyles, intimacy</p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightweight/Leisure Forms</h3>
                                <p className="text-gray-600 mb-4">30-50% lighter than standard silicone. Great for hot weather, exercise, or sensitive skin.</p>
                                <p className="text-teal-600 font-semibold">Best for: Summer, exercise, lymphedema</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section id="sizing" className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">How to Find Your Size</h2>

                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Fitting is Best</h3>
                            <p className="text-gray-700 mb-4">
                                We strongly recommend a professional fitting for your first prosthesis. Our trained fitters can help you find the perfect match for your body.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href="tel:+919819461612" className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition">
                                    <Phone className="w-5 h-5" />
                                    Book Free Fitting Consultation
                                </a>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">DIY Sizing at Home:</h3>
                        <ol className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">1</span>
                                <span>Measure your remaining breast (or use your pre-surgery bra size)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">2</span>
                                <span>Fill a plastic bag with rice or water to match the weight/volume</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">3</span>
                                <span>Try different shapes against your chest to see what fills naturally</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">4</span>
                                <span>Check for balance—when looking in mirror, both sides should appear symmetrical</span>
                            </li>
                        </ol>
                    </section>

                    {/* Section 4 */}
                    <section id="materials" className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Materials Comparison</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-teal-600 text-white">
                                        <th className="p-4 text-left rounded-tl-xl">Material</th>
                                        <th className="p-4 text-left">Feel</th>
                                        <th className="p-4 text-left">Weight</th>
                                        <th className="p-4 text-left">Price</th>
                                        <th className="p-4 text-left rounded-tr-xl">Best For</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 font-semibold">Silicone</td>
                                        <td className="p-4">Most realistic</td>
                                        <td className="p-4">Natural weight</td>
                                        <td className="p-4">₹7,000-15,000</td>
                                        <td className="p-4">Daily wear, special occasions</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 bg-gray-50">
                                        <td className="p-4 font-semibold">Lightweight Silicone</td>
                                        <td className="p-4">Realistic</td>
                                        <td className="p-4">30-50% lighter</td>
                                        <td className="p-4">₹8,000-18,000</td>
                                        <td className="p-4">Lymphedema, summer, exercise</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 font-semibold">Foam</td>
                                        <td className="p-4">Soft, less realistic</td>
                                        <td className="p-4">Very light</td>
                                        <td className="p-4">₹1,500-4,000</td>
                                        <td className="p-4">Sleep, post-surgery, budget</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold rounded-bl-xl">Fiberfill</td>
                                        <td className="p-4">Soft</td>
                                        <td className="p-4">Ultra-light</td>
                                        <td className="p-4">₹800-2,000</td>
                                        <td className="p-4 rounded-br-xl">Immediate post-surgery</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Product Recommendation */}
                    <section className="mb-12">
                        <div className="bg-gradient-to-br from-teal-50 to-cream-50 border border-teal-200 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Star className="w-6 h-6 text-gold-400 fill-gold-400" />
                                Our Top Recommendation
                            </h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-full md:w-48 h-48 bg-gradient-to-br from-teal-100 to-white rounded-xl flex items-center justify-center flex-shrink-0">
                                    <ShoppingBag className="w-20 h-20 text-teal-300" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Nuvanaah Silicone Breast Prosthesis</h4>
                                    <p className="text-gray-600 mb-4">
                                        Medical-grade silicone with natural movement. Temperature adaptive, concave back for comfort. Includes cotton cover and carrying case.
                                    </p>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-2xl font-bold text-gray-900">₹8,999</span>
                                        <span className="text-gray-400 line-through">₹11,999</span>
                                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm font-medium">Save 25%</span>
                                    </div>
                                    <Link href="/products/silicone-breast-form" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition">
                                        View Product <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Care Section */}
                    <section id="care" className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Prosthesis Care & Maintenance</h2>

                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Care Routine:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Wash with mild soap and lukewarm water daily</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Pat dry with soft towel—never rub or wring</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Store in provided case when not wearing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Keep away from heat and direct sunlight</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Replace every 2-3 years (silicone) or 6-12 months (foam)</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-center mb-12">
                        <Heart className="w-16 h-16 mx-auto mb-6 opacity-90 text-white" />
                        <h2 className="text-3xl font-semibold mb-4 text-white">Need Personalized Advice?</h2>
                        <p className="text-xl leading-relaxed mb-6 text-white">
                            Our trained fitters offer free consultation calls. We'll help you find the perfect prosthesis for your body and lifestyle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+919819461612" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-cream-50 transition">
                                <Phone className="w-5 h-5" />
                                +91-9819461612
                            </a>
                            <a href="https://wa.me/919819461612" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-900 transition">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                    {/* Related Articles */}
                    <div className="border-t border-gray-200 pt-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/blog/mastectomy-recovery-timeline" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
                                <h3 className="font-semibold text-gray-900 mb-2">Mastectomy Recovery Timeline: Week-by-Week Guide</h3>
                                <p className="text-gray-600 text-sm mb-3">What to expect each week after surgery and which products help most</p>
                                <span className="text-teal-600 font-semibold text-sm">Read article →</span>
                            </Link>
                            <Link href="/blog/lymphedema-management" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
                                <h3 className="font-semibold text-gray-900 mb-2">Living Well with Lymphedema</h3>
                                <p className="text-gray-600 text-sm mb-3">Prevention, early detection, and treatment strategies</p>
                                <span className="text-teal-600 font-semibold text-sm">Read article →</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
