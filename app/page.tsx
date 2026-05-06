"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

const carouselSlides = [
  {
    title: 'Designed for your first days home.',
    description:
      'Our post-surgery recovery kits are curated with softest bamboo fabrics and front-closure designs to prioritize your comfort when you need it most.',
    button: 'Explore Recovery Kits',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJgmo3b-D18X4J8YPm09Elex3U8jC2kBwq975GSXLBapzTV0B7q2htvq8AFUzdwnCDQtXGlT8tvqHI5Ms4t3uABvyzVUCErxiIiCGNOZ520uMUUA-TfIhpSRBsFGHVueMQSRprSClffSKOAGv6nSf-C4EzpmJP0lPO4wfv3W8BehWLoZzkaX7-Ac7Q4LRPlm3YB5Pg_QKk6KEtUjBh0KFP-KX7lIH5yuF3p_564mx7VSMxN9th6dNmxN5e1Ldf4i2noRy7DGi-buY',
    alt: 'Post-Surgery flat-lay',
  },
  {
    title: 'Look like yourself. Feel like yourself.',
    description:
      'Premium medical-grade wigs that move naturally. Rediscover your confidence with breathable, ultra-light construction designed for sensitive scalps.',
    button: 'View Hair Collection',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqdlDlPGKTFJPdxZ5yVzlJg777fEiXtxgTIE--tixmLZXPKQLKMbt6RrGkNK3028oVladR7kpGqeI-mcN4ldGOhSlvP9yjgjLzP0tcC5eVpJ9DIeY2NPH33Q7YFV2TEojqgVrulZyTQh5-T5PqLqWN6Pyor6ICtbql8fP-ZFquinHLgiXcVCgksWiNHFbkFaoiyQZ9AN5XZna-8hR1JqHi-Ok7Ge5FfvbHT22yMyQH-sDGh5jLhJU_iWj6mMsEHjbAVBvl94R7B98',
    alt: 'Wigs & Hair editorial',
  },
  {
    title: 'Reclaim your comfort, every day.',
    description:
      "Effective lymphedema management doesn't have to be clinical. Discover compression sleeves that are breathable, stylish, and durable for daily wear.",
    button: 'Shop Compression',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARUE0eytXZwsay3EFHVppAn6rwoTBaNREUxE2I_E2OrwmO3TgwH7_ZWPDLtwu9jAAwPtFuIzSt-zf3iScFDzDy4wTf2vE8iVWquslAboCEePC75myJYWS3pM8gPe1pNuHM29tt3yyGNplP8Gw3KkGrC60VyhrlFyUbCs2xZSBJxdyi8-atdcyOOtqSUkarw3w1w05Mo7lb_KqLVrvHb9LA4bw8wsySzgtXi_hejvjIoeV_CD2P_jmmY-NSsJyKg9xHUFtOdAKTRrI',
    alt: 'Lymphedema care focus',
  },
  {
    title: "You don't have to figure this out alone.",
    description:
      'Book a private consultation with our care experts. From sizing to product recommendations, we\'re here to guide you through every choice.',
    button: 'Book Free Consult',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVTf6HEj4m3ENmK9XdLA6dwlhJhXdy7dgHXLYHz9wYq2mBcuqUVFuCA71ir_WVLeGAAXZUsTXKsyyrIEQ7Xs9GyKKJIiudQsDg2dIqIytpZOubCZ86DCbwYgDp28rvM2HIdq9ExB6Iv5OXsePh6gEQdRtPlFXoljeyFgoVfpoLwkFXMiBiJDrWSdvROauT2BWozh4X0pbAE5eGrGi8HQh8TApB2HpYPvA8LU9GIn9YLwoczcclu9-pX9EkQuCmMawoeLzd9bel2ZQ',
    alt: 'Support consultation focus',
  },
]

const bestSellers = [
  {
    category: 'Breast Care',
    name: 'Mastectomy Bra – Front Opening',
    price: '₹1,299',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJgmo3b-D18X4J8YPm09Elex3U8jC2kBwq975GSXLBapzTV0B7q2htvq8AFUzdwnCDQtXGlT8tvqHI5Ms4t3uABvyzVUCErxiIiCGNOZ520uMUUA-TfIhpSRBsFGHVueMQSRprSClffSKOAGv6nSf-C4EzpmJP0lPO4wfv3W8BehWLoZzkaX7-Ac7Q4LRPlm3YB5Pg_QKk6KEtUjBh0KFP-KX7lIH5yuF3p_564mx7VSMxN9th6dNmxN5e1Ldf4i2noRy7DGi-buY',
    alt: 'A clean product photograph of a front-opening mastectomy bra in blush pink.',
  },
  {
    category: 'Wigs & Hair',
    name: 'Human Hair Medical Wig 18"',
    price: '₹5,499',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqdlDlPGKTFJPdxZ5yVzlJg777fEiXtxgTIE--tixmLZXPKQLKMbt6RrGkNK3028oVladR7kpGqeI-mcN4ldGOhSlvP9yjgjLzP0tcC5eVpJ9DIeY2NPH33Q7YFV2TEojqgVrulZyTQh5-T5PqLqWN6Pyor6ICtbql8fP-ZFquinHLgiXcVCgksWiNHFbkFaoiyQZ9AN5XZna-8hR1JqHi-Ok7Ge5FfvbHT22yMyQH-sDGh5jLhJU_iWj6mMsEHjbAVBvl94R7B98',
    alt: 'A high-quality medical-grade human hair wig.',
  },
  {
    category: 'Lymphedema',
    name: 'Lymphoedema Compression Sleeve',
    price: '₹1,199',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARUE0eytXZwsay3EFHVppAn6rwoTBaNREUxE2I_E2OrwmO3TgwH7_ZWPDLtwu9jAAwPtFuIzSt-zf3iScFDzDy4wTf2vE8iVWquslAboCEePC75myJYWS3pM8gPe1pNuHM29tt3yyGNplP8Gw3KkGrC60VyhrlFyUbCs2xZSBJxdyi8-atdcyOOtqSUkarw3w1w05Mo7lb_KqLVrvHb9LA4bw8wsySzgtXi_hejvjIoeV_CD2P_jmmY-NSsJyKg9xHUFtOdAKTRrI',
    alt: 'An medical compression sleeve for lymphedema management.',
  },
  {
    category: 'Headwear',
    name: 'Head Scarf with Hair Lace',
    price: '₹799',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWqaSN8u2dPxsxArD-WVRJDmhgg1ZkpkPAWTADa1nrb6lK10iG9Sj1i1LpNPv_KX9fznIMDH2U_uQzK2Eg4mv963i-DSC6x94D3h62FSg-0x0jU8zTkRWhLe8GqACb1PyP0reKZZQZivZrEhc1S_XnfSVRXJkht8sPmeQz697WLZqNK0M1kPf34EUC2RhKN7FiiHLitP6ZhueKLpDIbUZBgyFGkwMRjGCk6lqtOpHQC4r-JcF7RBIqCqO3Cy-4MiU1h-PAH3h8gUk',
    alt: 'A stylish and soft bamboo fabric head scarf.',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length)
    }, 7000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#fdf9f3] text-[#1c1c18]">
      <section className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center overflow-visible px-4 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="z-10 lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#c3e9cf] px-4 py-1.5 text-[#496a55]">
              <span>verified</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Trusted by 10,000+ women</span>
            </div>
            <h1 className="mb-4 text-[48px] font-bold leading-[1.1] text-[#1c1c18] md:text-[56px]">
              You are more than your diagnosis. Shop with <span className="italic text-[#884d53]">dignity.</span>
            </h1>
            <p className="mb-8 max-w-xl text-[18px] leading-7 text-[#524344] opacity-80">
              A sanctuary for recovery essentials designed with clinical precision and high-end retail elegance. We support your journey from treatment to renewal.
            </p>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#884d53] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl">Shop Collection</button>
              <button className="group flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-[#884d53] transition-colors hover:bg-[#ffdadb]/40">
                Read story
                <span className="transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
            <div className="flex items-center gap-10 border-t border-[#d7c2c2]/30 pt-8">
              <div className="flex flex-col">
                <span className="text-[18px] font-bold">10,000+</span>
                <span className="text-[11px] uppercase tracking-wider text-[#524344]/70">Women served</span>
              </div>
              <div className="h-10 w-px bg-[#D0C8C0]" />
              <div className="flex flex-col">
                <span className="text-[18px] font-bold">200+</span>
                <span className="text-[11px] uppercase tracking-wider text-[#524344]/70">Products</span>
              </div>
              <div className="h-10 w-px bg-[#D0C8C0]" />
              <div className="flex flex-col">
                <span className="text-[18px] font-bold">4.9★</span>
                <span className="text-[11px] uppercase tracking-wider text-[#524344]/70">Avg. rating</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5">
            <div className="absolute h-[450px] w-[450px] rounded-full bg-[#EBF2ED] opacity-[35%] blur-3xl" />
            <div className="relative z-10 aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/image.png"
                alt="Two women sharing a comforting embrace in a warm recovery setting."
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ['Certified Products', 'Medical-grade materials', 'clinical_notes'],
            ['Discreet Packaging', 'Your privacy is priority', 'package_2'],
            ['30-day Returns', 'No questions asked', 'sync'],
            ['Expert Support', 'Trained care advisors', 'support_agent'],
          ].map(([title, subtitle, icon]) => (
            <div key={title} className="group flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c3e9cf] text-[#496a55] transition-transform group-hover:scale-110">
                {icon}
              </div>
              <h3 className="mb-1 font-semibold text-[#1c1c18]">{title}</h3>
              <p className="text-sm text-[#524344]">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[420px] overflow-hidden bg-[#f7f3ed] py-16">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-[40px] font-bold leading-tight text-[#1c1c18]">{carouselSlides[activeSlide].title}</h2>
              <p className="max-w-md text-[18px] leading-7 text-[#524344]">{carouselSlides[activeSlide].description}</p>
              <button className="rounded-full bg-[#884d53] px-8 py-3 font-semibold text-white">{carouselSlides[activeSlide].button}</button>
            </div>
            <div className="hidden md:block">
              <img
                alt={carouselSlides[activeSlide].alt}
                src={carouselSlides[activeSlide].image}
                className="h-[300px] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={index === activeSlide ? 'h-3 w-3 rounded-full bg-[#884d53]' : 'h-3 w-3 rounded-full bg-[#884d53]/20'}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-[30px] font-bold text-[#1c1c18]">Explore Your Needs</h2>
            <p className="text-[#524344]">Carefully curated collections for every stage of your healing.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {[
              ['Post-Surgery Care', 'Gentle support and soft fabrics for immediate recovery phases.', '#F9EEF0', 'medical_services', '#884d53'],
              ['Wigs & Hair', 'Natural-look medical wigs and soft breathable headwear.', '#EBF2ED', 'face', '#446651'],
              ['Lymphedema Care', 'Compression solutions designed for daily ease and comfort.', '#F2EEFF', 'compress', '#6c5b54'],
              ['Chemo Essentials', 'Comfort kits and essentials for managing treatment side effects.', '#FEF4E8', 'vital_signs', '#884d53'],
              ['Sensitive Skin', 'Dermatologist-tested skincare for radiated or fragile skin.', '#FEF0E8', 'spa', '#884d53'],
            ].map(([title, description, background, icon, color]) => (
              <a key={title} href="#" className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-lg" style={{ backgroundColor: background as string }}>
                <div className="absolute right-0 top-0 p-8 opacity-20 transition-transform group-hover:scale-110">
                  <span className="text-6xl" style={{ color: color as string }}>{icon}</span>
                </div>
                <h3 className="mb-2 text-[22px] font-semibold" style={{ color: color as string }}>{title}</h3>
                <p className="text-sm leading-relaxed text-[#524344]">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ed] py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-[30px] font-bold text-[#1c1c18]">Our Community Favorites</h2>
              <p className="text-[#524344]">The most loved items by our Nuvanaah sisters.</p>
            </div>
            <a className="border-b border-[#884d53] pb-1 font-semibold text-[#884d53] hover:opacity-70" href="#">View all products</a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <div key={product.name} className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-4 transition-shadow hover:shadow-xl">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-[#f7f3ed]">
                  <img src={product.image} alt={product.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#524344] backdrop-blur-md transition-colors hover:text-[#884d53]" aria-label={`Save ${product.name}`}>
                    favorite
                  </button>
                </div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#446651]">{product.category}</div>
                <h3 className="mb-auto text-base font-semibold text-[#1c1c18]">{product.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-[22px] font-bold text-[#884d53]">{product.price}</div>
                  <button className="rounded-lg bg-[#c9848a] p-2 text-[#501f26] transition-all hover:brightness-95 active:scale-95" aria-label={`Add ${product.name} to cart`}>
                    add_shopping_cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-[30px] font-bold text-[#1c1c18]">Your Journey to Renewal</h2>
          <div className="relative">
            <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 border-t-2 border-dotted border-[#abcfb6] md:block" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                ['1', 'Diagnosis', 'Gathering strength and seeking the right information.'],
                ['2', 'Surgery & Recovery', 'Immediate postoperative care and gentle healing focus.'],
                ['3', 'Chemotherapy', 'Managing side effects with comfort and soft materials.'],
                ['4', 'Rebuilding Confidence', 'Embracing a new chapter with renewed dignity.'],
              ].map(([step, title, description]) => (
                <div key={step} className="z-10 flex flex-col items-center bg-[#fdf9f3] p-4 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#884d53] font-bold text-white">{step}</div>
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-[#524344]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e6e2dc] py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-[30px] font-bold text-[#1c1c18]">Real Stories from Real Women</h2>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              [
                '"The SoftComfort bra was a lifesaver after my mastectomy. It\'s so rare to find something that is both medically functional and beautiful."',
                'Anjali K.',
                'Mumbai',
              ],
              [
                '"I was so nervous about choosing a wig, but the support team at Nuvanaah walked me through every step. I feel like myself again."',
                'Rekha S.',
                'Delhi',
              ],
              [
                '"Their discreet packaging meant so much to me. The care they put into even the smallest details is truly heartwarming."',
                'Priya M.',
                'Bangalore',
              ],
            ].map(([quote, name, city]) => (
              <div key={name as string} className="rounded-2xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <p className="mb-6 italic leading-relaxed text-[#524344]">{quote}</p>
                <div>
                  <div className="font-semibold text-[#1c1c18]">{name}</div>
                  <div className="text-sm text-[#524344]">{city}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8 rounded-full bg-white/40 px-6 py-4 opacity-70 backdrop-blur-sm">
            <div><span className="font-bold">98%</span> Positive Feedback</div>
            <div><span className="font-bold">50k+</span> Happy Customers</div>
            <div><span className="font-bold">15+</span> Award Nominations</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-[30px] font-bold text-[#1c1c18]">Common Questions</h2>
          <div className="space-y-4">
            {[
              'How do I choose the right bra size after surgery?',
              'Is the packaging really discreet?',
              'How do I care for my medical wig?',
              'Do you offer home consultations?',
              'What is your return policy?',
            ].map((question) => (
              <div key={question} className="border-b border-black/10 pb-4">
                <button className="flex w-full items-center justify-between py-2 text-left font-semibold text-[#1c1c18] transition-colors hover:text-[#884d53]">
                  <span>{question}</span>
                  <span className="text-[#847374]">expand_more</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#884d53] px-4 py-20 text-center text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-[40px] font-bold leading-tight">Still unsure? We&apos;re here to help.</h2>
          <p className="mb-10 text-[18px] opacity-90">Schedule a free 15-minute consultation with our certified care experts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all active:scale-95">WhatsApp Us</button>
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#884d53] transition-all active:scale-95">Browse Collections</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C1F1A] px-4 pt-20 text-[#F0EAE2] lg:px-8">
        <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 text-[22px] font-bold text-[#884d53]">Nuvanaah</div>
            <p className="mb-6 max-w-xs text-sm opacity-70">Providing dignity, comfort, and care essentials for women&apos;s health journeys across India.</p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white">Shop</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li>Post-Surgery Care</li>
              <li>Wigs &amp; Hair</li>
              <li>Lymphedema Care</li>
              <li>Chemo Essentials</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white">Support</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li>Shipping &amp; Returns</li>
              <li>Contact Support</li>
              <li>Expert Consultations</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white">Stay Connected</h4>
            <p className="mb-4 text-sm opacity-70">Join our community for care tips and exclusive offers.</p>
            <input className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Your email" type="email" />
          </div>
        </div>
      </footer>
    </main>
  )
}

