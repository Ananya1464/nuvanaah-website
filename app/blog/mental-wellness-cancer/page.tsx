import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Heart } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Mental Health During Cancer Treatment India | Support Guide | 2025',
    description: 'Addressing emotional aspects of cancer care. Practical tips for anxiety, depression, and finding support during cancer treatment in India.',
    keywords: ['mental health cancer', 'cancer depression', 'cancer anxiety', 'cancer support India', 'emotional cancer care'],
}

export default function MentalWellnessArticle() {
    return (
        <article className="min-h-screen bg-cream-50">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-teal-200 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full font-medium">Mental Health</span>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>11 min read</span></div>
                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>November 15, 2025</span></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Mental Health During Cancer: <span className="italic text-gold-300">You're Not Alone</span>
                    </h1>
                    <p className="text-xl text-teal-100">By Dr. Anjali Nair, Clinical Psychologist, Oncology</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white border-l-4 border-teal-600 p-6 mb-12 rounded-r-2xl">
                    <p className="text-lg text-gray-800">A cancer diagnosis affects more than your body. Fear, anxiety, grief, anger—these are all normal responses. Acknowledging your emotions is the first step to healing.</p>
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">What's Normal to Feel</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                            <h4 className="font-semibold text-purple-900 mb-3">Common Emotions:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Fear of the unknown</li>
                                <li>• Grief over life changes</li>
                                <li>• Anger ("Why me?")</li>
                                <li>• Guilt about being a burden</li>
                                <li>• Loneliness despite support</li>
                                <li>• Loss of control</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                            <h4 className="font-semibold text-green-900 mb-3">Also Normal:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Good days mixed with bad</li>
                                <li>• Feeling hopeful sometimes</li>
                                <li>• Finding unexpected gratitude</li>
                                <li>• Closer relationships</li>
                                <li>• Changed priorities</li>
                                <li>• Personal growth</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-gray-700 mt-6 italic">"There's no 'right' way to feel. Your emotions are valid, whatever they are."</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Coping Strategies That Help</h2>
                    <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">🗣 Talk About It</h4>
                            <p className="text-gray-600">Share feelings with trusted people. Bottling up emotions increases stress. A therapist, support group, or even a journal helps.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">📅 Focus on Today</h4>
                            <p className="text-gray-600">Don't try to process the whole journey at once. Take it one day, one appointment, one step at a time.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">🧘 Relaxation Techniques</h4>
                            <p className="text-gray-600">Deep breathing, meditation, gentle yoga—these lower cortisol and reduce anxiety. Even 5 minutes helps.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">🤝 Accept Help</h4>
                            <p className="text-gray-600">Let people help. They want to. Be specific about what you need: "Can you bring dinner Tuesday?"</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">When to Seek Professional Help</h2>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                        <p className="text-gray-800 mb-4">Seek help from a mental health professional if you experience:</p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2"><span className="text-amber-600">•</span> Persistent sadness lasting more than 2 weeks</li>
                            <li className="flex items-start gap-2"><span className="text-amber-600">•</span> Inability to carry out daily activities</li>
                            <li className="flex items-start gap-2"><span className="text-amber-600">•</span> Thoughts of self-harm or hopelessness</li>
                            <li className="flex items-start gap-2"><span className="text-amber-600">•</span> Severe anxiety that won't go away</li>
                            <li className="flex items-start gap-2"><span className="text-amber-600">•</span> Withdrawal from all social contact</li>
                        </ul>
                        <p className="text-gray-800 mt-4 font-medium">This is NOT weakness. It's taking care of yourself.</p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Support Resources in India</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Hospital Resources:</h4>
                            <ul className="text-gray-600 space-y-1 text-sm">
                                <li>• Oncology social workers (free)</li>
                                <li>• Hospital support groups</li>
                                <li>• Palliative care teams</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Online Support:</h4>
                            <ul className="text-gray-600 space-y-1 text-sm">
                                <li>• Indian Cancer Society helpline</li>
                                <li>• Facebook support groups</li>
                                <li>• Online therapy platforms</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center mb-12">
                    <Heart className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-3">You Are Stronger Than You Know</h2>
                    <p className="text-teal-100 mb-4">Cancer is hard. But you're facing it. That takes incredible strength. On your hardest days, remember: you've already survived 100% of your worst days.</p>
                    <p className="text-xl font-semibold">You've got this. ❤️</p>
                </div>

                <div className="border-t border-gray-200 pt-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/blog/managing-chemo-side-effects" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-900 mb-2">Managing Chemo Side Effects</h3>
                            <p className="text-gray-600 text-sm">Practical tips that actually work</p>
                        </Link>
                        <Link href="/blog/mastectomy-recovery-timeline" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
                            <h3 className="font-semibold text-gray-900 mb-2">Mastectomy Recovery Timeline</h3>
                            <p className="text-gray-600 text-sm">Week-by-week guide to healing</p>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
