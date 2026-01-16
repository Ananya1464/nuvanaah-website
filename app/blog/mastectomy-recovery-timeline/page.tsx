import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Heart, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Mastectomy Recovery Timeline India | Week-by-Week Guide 2025',
  description: 'Detailed mastectomy recovery timeline week-by-week. Learn what to expect after breast cancer surgery, products that help, when to call doctor. Post-surgery care guide India.',
  keywords: ['mastectomy recovery timeline', 'post mastectomy care', 'breast cancer surgery recovery'],
}

export default function MastectomyRecoveryArticle() {
  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">Post-Surgery Care</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 10, 2026</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
            Mastectomy Recovery Timeline: <span className="font-semibold text-teal-600">Week-by-Week Guide</span> + Products You'll Need
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Medically Reviewed: Dr. Anjali Sharma, MD, Surgical Oncologist
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-cream-50 border-l-4 border-teal-600 p-6 mb-12 rounded-r-lg">
            <p className="text-lg leading-relaxed text-gray-800 mb-4">
              Recovering from mastectomy surgery typically takes <strong>4-8 weeks</strong>, though every patient's journey is unique. This comprehensive timeline breaks down what to expect each week after breast cancer surgery, which products help most during recovery, and when to contact your surgeon.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Whether you're preparing for upcoming surgery or currently healing, understanding the mastectomy recovery process helps reduce anxiety and ensures you're prepared with the right support.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-teal-600">
              <li><a href="#before-surgery" className="hover:text-teal-700">Before Surgery: What to Prepare</a></li>
              <li><a href="#week-1" className="hover:text-teal-700">Week 1: Hospital Stay & Initial Recovery</a></li>
              <li><a href="#week-2" className="hover:text-teal-700">Week 2: Managing Drains at Home</a></li>
              <li><a href="#week-3-4" className="hover:text-teal-700">Week 3-4: Drainage Removal & Increased Mobility</a></li>
              <li><a href="#week-5-6" className="hover:text-teal-700">Week 5-6: Return to Light Activities</a></li>
              <li><a href="#week-7-8" className="hover:text-teal-700">Week 7-8: Near-Complete Recovery</a></li>
              <li><a href="#month-3" className="hover:text-teal-700">Month 3+: Long-Term Recovery</a></li>
              <li><a href="#red-flags" className="hover:text-teal-700">Red Flags: When to Call Your Doctor</a></li>
              <li><a href="#emotional" className="hover:text-teal-700">Emotional Recovery</a></li>
            </ol>
          </div>

          {/* Before Surgery */}
          <section id="before-surgery" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Before Surgery: What to Prepare</h2>
            
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Products to Buy Before Surgery:</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recovery Clothing:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>2-3 button-front or zip-front shirts (no pulling over head)</li>
                    <li>Loose, comfortable pants with elastic waist</li>
                    <li>Post-surgery recovery camisole with drain pockets</li>
                    <li>Slip-on shoes (no bending to tie laces)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Drain Management:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Drainage bag holder (hands-free drain management)</li>
                    <li>Measuring cup for recording drain output</li>
                    <li>Small notebook for tracking drainage amounts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Comfort Items:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Extra pillows for sleeping elevated</li>
                    <li>Wedge pillow for comfortable positioning</li>
                    <li>Ice packs (for swelling)</li>
                    <li>Gentle, fragrance-free soap</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <Link 
                  href="/products/category/mastectomy"
                  className="inline-block text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Shop Pre-Surgery Prep Kit →
                </Link>
              </div>
            </div>
          </section>

          {/* Week 1 */}
          <section id="week-1" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Week 1: Hospital Stay & Initial Recovery</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Pain Level</div>
                <div className="text-2xl font-bold text-red-600">6-8/10</div>
                <div className="text-sm text-gray-600">Managed with meds</div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Mobility</div>
                <div className="text-2xl font-bold text-amber-600">Very Limited</div>
                <div className="text-sm text-gray-600">With assistance</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Drains</div>
                <div className="text-2xl font-bold text-blue-600">1-4 tubes</div>
                <div className="text-sm text-gray-600">Learning care</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Expect:</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Days 1-2 (Hospital):</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You'll wake up with 1-4 drainage tubes (JP drains) coming from surgical site</li>
                <li>Surgical dressings covering incisions</li>
                <li>Pain managed with IV medications initially</li>
                <li>Arm movement on surgery side will be limited</li>
                <li>Nurses will teach you drain care before discharge</li>
              </ul>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Products That Help Week 1:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Recovery Camisole with Drain Pockets (₹2,499)</p>
                    <p className="text-gray-700 text-sm">Secures drains without pinning to clothes, prevents tugging on tubes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Button-Front Sleep Shirts</p>
                    <p className="text-gray-700 text-sm">Can't lift arms over head yet, easy dressing changes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Week 2 */}
          <section id="week-2" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Week 2: Managing Drains at Home</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Pain Level</div>
                <div className="text-2xl font-bold text-amber-600">4-6/10</div>
                <div className="text-sm text-gray-600">Oral medication</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Challenge</div>
                <div className="text-lg font-bold text-yellow-700">Drain Care</div>
                <div className="text-sm text-gray-600">2-3 times daily</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Bathing</div>
                <div className="text-lg font-bold text-gray-700">Sponge Only</div>
                <div className="text-sm text-gray-600">No showers yet</div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-600" />
                Real Patient Tips:
              </h4>
              <div className="space-y-3 text-gray-700 italic">
                <p>"The drain holder was a lifesaver. I could finally sleep without worrying about pulling a tube." <span className="font-semibold">- Meera, Delhi</span></p>
                <p>"I pinned drains to my clothes initially. Big mistake—constant tugging. The holder changed everything." <span className="font-semibold">- Sunita, Mumbai</span></p>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Essential Product - GAME CHANGER:</h4>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Drainage Bag Holder (₹1,299)</p>
                  <p className="text-gray-700">Hands-free drain management, prevents nighttime tangles, allows easier movement</p>
                  <Link href="/products" className="text-teal-600 hover:text-teal-700 font-semibold text-sm mt-2 inline-block">
                    Shop Now →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Week 3-4 */}
          <section id="week-3-4" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Week 3-4: Drainage Removal & Increased Mobility</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Major Milestone: Drain Removal
              </h3>
              <p className="text-gray-700 mb-3">
                Most patients get drains removed <strong>10-21 days</strong> post-surgery. Removal is quick (10 seconds per drain) and moderately uncomfortable, but the relief is HUGE!
              </p>
              <p className="text-gray-700">
                Surgeon checks if drainage has decreased sufficiently (less than 30ml per day per drain).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Pain Level</div>
                <div className="text-2xl font-bold text-blue-600">2-4/10</div>
                <div className="text-sm text-gray-600">May stop pain meds</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Emotional State</div>
                <div className="text-lg font-bold text-green-700">Relief!</div>
                <div className="text-sm text-gray-600">First shower feels amazing</div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-3">Products for Week 3-4:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span><strong>Soft Shower Puff:</strong> First showers feel incredible but must be very gentle on incisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span><strong>Fragrance-Free Moisturizer:</strong> Surgical site skin is dry and sensitive</span>
              </li>
            </ul>
          </section>

          {/* Week 5-6 */}
          <section id="week-5-6" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Week 5-6: Return to Light Activities</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Recovery Progress:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ You Can Now:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Light household tasks</li>
                    <li>• Desk work (if energy permits)</li>
                    <li>• Driving (with clearance)</li>
                    <li>• Gentle arm movements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✗ Still Avoid:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Heavy lifting (&gt;5 lbs)</li>
                    <li>• Vigorous exercise</li>
                    <li>• Reaching overhead</li>
                    <li>• Sleeping on surgical side</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Time for Your First "Real" Bra:</h4>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Soft Post-Mastectomy Bra (₹2,999)</p>
                  <p className="text-gray-700 mb-2">First "real" bra after surgery, gentle support without irritation</p>
                  <p className="text-amber-600 font-semibold text-sm">⚠️ Only after surgeon approval (usually week 6+)</p>
                  <Link href="/products/category/mastectomy" className="text-teal-600 hover:text-teal-700 font-semibold text-sm mt-2 inline-block">
                    View Mastectomy Bras →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Week 7-8 */}
          <section id="week-7-8" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Week 7-8: Near-Complete Recovery</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Pain Level</div>
                <div className="text-2xl font-bold text-green-600">0-2/10</div>
                <div className="text-sm text-gray-600">Scar discomfort only</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Activities</div>
                <div className="text-lg font-bold text-blue-600">Most Resumed</div>
                <div className="text-sm text-gray-600">Gentle exercise OK</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Incisions</div>
                <div className="text-lg font-bold text-purple-600">Fully Closed</div>
                <div className="text-sm text-gray-600">Scars forming</div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Products for Long-Term Comfort:</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Silicone Breast Prosthesis (₹8,999)</p>
                    <p className="text-gray-700 text-sm">Restores symmetry, boosts confidence, better posture. Use only after complete healing (6-8 weeks) with surgeon clearance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Scar Treatment Cream</p>
                    <p className="text-gray-700 text-sm">Helps scars fade (though they'll never disappear completely)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Month 3+ */}
          <section id="month-3" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Month 3+: Long-Term Recovery & New Normal</h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Journey Forward:</h3>
              <div className="space-y-3 text-gray-700">
                <p>• <strong>Physical:</strong> Fully healed incisions, scars continue fading (12-18 months)</p>
                <p>• <strong>Activities:</strong> Resume most activities (check with surgeon on specific exercises)</p>
                <p>• <strong>Lymphedema:</strong> Ongoing monitoring if lymph nodes removed</p>
                <p>• <strong>Emotional:</strong> Adjusting to "new normal" (some days great, some difficult—both normal)</p>
                <p>• <strong>Prosthesis:</strong> Comfortable wearing daily, exploring different options</p>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-3">Products for Long-Term:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Multiple Mastectomy Bras (2-3 for rotation)</li>
              <li>• Lymphedema Compression Sleeve (₹1,799) - if nodes removed</li>
              <li>• Breast Form Adhesive (₹1,299) - for special occasions/swimming</li>
            </ul>
          </section>

          {/* Red Flags */}
          <section id="red-flags" className="mb-12">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Red Flags: Call Your Doctor IMMEDIATELY
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Fever over 100.4°F (38°C)</span>
                  </p>
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Sudden increase in swelling or pain</span>
                  </p>
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Red streaks from incision (infection)</span>
                  </p>
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Pus or foul-smelling drainage</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Drain tube falls out accidentally</span>
                  </p>
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Sudden arm swelling (lymphedema)</span>
                  </p>
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Chest pain or difficulty breathing</span>
                  </p>
                  <p className="flex items-start gap-2 text-gray-800">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Incision opens or starts bleeding</span>
                  </p>
                </div>
              </div>

              <p className="mt-4 font-semibold text-gray-900">
                Don't hesitate—surgeons expect these calls. Better safe than sorry.
              </p>
            </div>
          </section>

          {/* Emotional Recovery */}
          <section id="emotional" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Emotional Recovery: Just as Important</h2>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Physical healing is visible. Emotional healing isn't, but it's equally important. Most mastectomy patients experience:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Grief over body changes</li>
                <li>• Anxiety about cancer recurrence</li>
                <li>• Depression during recovery isolation</li>
                <li>• Body image struggles</li>
                <li>• Relationship/intimacy concerns</li>
                <li>• Fear about the future</li>
              </ul>
              <p className="mt-4 font-semibold text-purple-900">
                This is all normal. You're not weak for feeling this way.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Resources:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Professional Help:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Oncology social workers (free at hospitals)</li>
                  <li>• Therapists specializing in cancer patients</li>
                  <li>• Online therapy (more private, accessible)</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Peer Support:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Breast cancer support groups</li>
                  <li>• Facebook groups for Indian patients</li>
                  <li>• Hospital-run support groups</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center mb-12">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-semibold mb-4">Final Thoughts</h2>
            <p className="text-xl leading-relaxed mb-6">
              Mastectomy recovery isn't linear. Some days you'll feel strong, others you'll feel exhausted by noon. Both are normal. Be patient with yourself. Celebrate small victories.
            </p>
            <p className="text-lg leading-relaxed">
              Your body just went through major surgery to save your life. It deserves kindness, not criticism. Recovery takes time, but you will heal—physically and emotionally.
            </p>
            <p className="text-2xl font-semibold mt-6">You've got this. And we're here to help. ❤️</p>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 pt-12 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2">Choosing Your First Breast Prosthesis: Complete Guide</h3>
                <p className="text-gray-600 text-sm mb-3">Learn how to select the right prosthesis for comfort and confidence</p>
                <span className="text-teal-600 font-semibold text-sm">Read article →</span>
              </Link>
              <Link href="/blog" className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2">Lymphedema After Mastectomy: Prevention & Treatment</h3>
                <p className="text-gray-600 text-sm mb-3">Early signs, prevention strategies, and treatment options</p>
                <span className="text-teal-600 font-semibold text-sm">Read article →</span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-cream-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Products for Your Recovery?</h2>
            <p className="text-gray-700 mb-6">We've curated everything you need for comfortable healing.</p>
            <Link
              href="/products/category/mastectomy"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
            >
              Shop Mastectomy Recovery Kit
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
