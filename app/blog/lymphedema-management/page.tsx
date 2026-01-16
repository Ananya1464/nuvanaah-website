import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Heart, CheckCircle, AlertTriangle, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Lymphedema After Mastectomy India | Prevention & Treatment | 2025',
    description: 'Complete guide to lymphedema prevention and management after breast cancer surgery. Early signs, compression sleeves, treatment options.',
    keywords: ['lymphedema', 'arm swelling mastectomy', 'lymphedema treatment', 'compression sleeve', 'lymphedema prevention'],
}

export default function LymphedemaArticle() {
    return (
        <article className="min-h-screen bg-cream-50">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-teal-200 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Health</span>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 min read</span></div>
                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>November 30, 2025</span></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Living Well with <span className="italic text-gold-300">Lymphedema</span>
                    </h1>
                    <p className="text-xl text-teal-100">By Dr. Vikram Das, Lymphedema Specialist</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white border-l-4 border-teal-600 p-6 mb-12 rounded-r-2xl">
                    <p className="text-lg text-gray-800 mb-4"><strong>About 20-30%</strong> of breast cancer survivors develop lymphedema after lymph node removal. While there's no cure, early detection and proper management can prevent progression and maintain quality of life.</p>
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">What is Lymphedema?</h2>
                    <p className="text-gray-700 mb-4">When lymph nodes are removed during cancer surgery, lymph fluid can build up in the arm, causing swelling. This can happen weeks, months, or even years after surgery.</p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" /> Early Warning Signs:
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                            <li>• Arm feeling heavy or tight</li>
                            <li>• Jewelry or clothes feeling tighter on one side</li>
                            <li>• Visible swelling (compare both arms)</li>
                            <li>• Reduced flexibility in hand or wrist</li>
                            <li>• Skin that doesn't spring back when pressed</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Prevention Tips</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2 text-green-700">✓ DO This:</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                                <li>• Keep affected arm elevated when resting</li>
                                <li>• Wear compression sleeve during flights</li>
                                <li>• Exercise regularly (gentle, with sleeve)</li>
                                <li>• Maintain healthy weight</li>
                                <li>• Moisturize arm daily</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2 text-red-700">✗ AVOID This:</h4>
                            <ul className="text-gray-700 space-y-1 text-sm">
                                <li>• Blood pressure on affected arm</li>
                                <li>• Injections or blood draws on that arm</li>
                                <li>• Heavy lifting with affected arm</li>
                                <li>• Tight jewelry or sleeves</li>
                                <li>• Extreme heat (hot tubs, saunas)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Compression Sleeves: Essential Guide</h2>
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                        <p className="text-gray-700 mb-4">Compression sleeves apply gentle pressure to prevent fluid buildup. They're essential for:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span><strong>Air travel</strong> – pressure changes can trigger swelling</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span><strong>Exercise</strong> – prevents fluid accumulation during activity</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span><strong>Hot weather</strong> – heat can increase swelling</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" /><span><strong>Daily use</strong> – if you have existing lymphedema</span></li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-teal-200">
                            <Link href="/products/lymphedema-sleeve" className="text-teal-600 font-semibold">Shop Lymphedema Compression Sleeve (₹1,799) →</Link>
                        </div>
                    </div>
                </section>

                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center mb-12">
                    <Heart className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-3">Early Detection is Key</h2>
                    <p className="text-teal-100 mb-4">If you notice ANY early signs, contact your doctor immediately. Early treatment can prevent progression.</p>
                    <a href="tel:+919819461612" className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-xl font-semibold">
                        <Phone className="w-5 h-5" /> Get Product Advice
                    </a>
                </div>

                <div className="border-t border-gray-200 pt-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/blog/mastectomy-recovery-timeline" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-900 mb-2">Mastectomy Recovery Timeline</h3>
                            <p className="text-gray-600 text-sm">Week-by-week guide to recovery</p>
                        </Link>
                        <Link href="/blog/choosing-prosthesis" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-900 mb-2">Choosing the Right Prosthesis</h3>
                            <p className="text-gray-600 text-sm">Complete guide for Indian women</p>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
