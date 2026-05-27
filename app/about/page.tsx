import Image from 'next/image'
import { ShieldCheck, Package, Headset, Heart, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Our Story | Nuvanaah',
  description: 'Learn about Nuvanaah, born through real conversations with women in recovery. We build spaces with empathy, dignity, and care.',
}

export default function AboutPage() {
  return (
    <main className="bg-bg text-text">
      {/* 1. Hero */}
      <section className="relative flex flex-col lg:block lg:h-[70vh] lg:min-h-[600px] w-full bg-surface">
        
        {/* Image Container */}
        <div className="relative h-[50vh] min-h-[400px] w-full lg:absolute lg:inset-0 lg:h-full">
          <Image
            src="/images/about/about-us-hero-v3.png"
            alt="Young Indian woman peacefully journaling with soft recovery products nearby, conveying gentle rebuilding"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[80%_center]"
          />
          {/* Desktop gradient */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent w-2/3" />
        </div>

        {/* Text Container */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center bg-surface px-4 py-16 sm:px-6 lg:bg-transparent lg:px-8 lg:py-0 fade-in-up visible">
          <div className="max-w-2xl">
            <span className="mb-6 inline-block rounded-full bg-secondary-container px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-secondary">
              OUR STORY
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-600 sm:text-5xl lg:text-6xl">
              Born through real conversations.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
              Nuvanaah is more than a brand. It is a space built with empathy, dignity, and care — helping women feel comfortable, confident, and like themselves again during recovery.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Origin Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="fade-in-up">
            <h2 className="mb-6 font-display text-3xl font-bold text-dark sm:text-4xl">
              A realization of what was missing.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                While creating wigs for cancer patients, I found myself deeply connected to their emotional healing journey — not just their appearance. Over time, oncologists and surgeons began referring women recovering from breast surgeries to me because they saw the care and understanding I shared with patients.
              </p>
              <p>
                These women were not only looking for products. They were looking for comfort, softness, confidence, and someone who truly understood them.
              </p>
              <p>
                I realized that recovery essentials available often felt clinical, heavy, and disconnected from the emotional needs of women healing after surgery. That realization became the beginning of Nuvanaah.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card-large shadow-card fade-in-up" style={{ transitionDelay: '100ms' }}>
            <Image
              src="/images/about/about-us-beginning.png"
              alt="Woman resting thoughtfully"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Beliefs */}
      <section className="bg-primary-fixed py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h2 className="mb-16 font-display text-3xl font-bold text-primary-700 sm:text-4xl">
            What guides us
          </h2>
          <div className="grid gap-12 sm:grid-cols-3">
            {[
              "Healing deserves beautiful things.",
              "Comfort is a sensory experience.",
              "Dignity is in the details."
            ].map((belief, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="mb-6 font-display text-5xl font-light text-primary-600/30">0{i + 1}</span>
                <p className="font-display text-2xl font-semibold italic text-primary-700">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products & Promise */}
      <section className="bg-surface py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center fade-in-up">
            <h2 className="mb-4 font-display text-3xl font-bold text-dark sm:text-4xl">Our Promise</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              We merge the precision of medical-grade features with the elegance of everyday luxury.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 fade-in-up">
            {[
              { icon: ShieldCheck, title: "Thoughtfully Curated", desc: "Designed for comfort, healing, and dignity" },
              { icon: Package, title: "Discreet Packaging", desc: "Your privacy always comes first" },
              { icon: Headset, title: "Compassionate Guidance", desc: "Support from trained care advisors" },
              { icon: Heart, title: "Gentle on Sensitive Bodies", desc: "Soft materials chosen with care" }
            ].map((card, i) => (
              <div key={i} className="rounded-card border border-border bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-low text-primary-600">
                  <card.icon strokeWidth={1.5} className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark">{card.title}</h3>
                <p className="text-text-secondary">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-card-large shadow-card fade-in-up">
            <Image
              src="/images/about/journey-confidence.png"
              alt="Kanchan Chopra, Founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <h2 className="mb-2 font-display text-3xl font-bold text-dark">Kanchan Chopra</h2>
            <p className="mb-8 text-lg font-medium text-primary-600">Founder & CEO</p>
            <blockquote className="border-l-2 border-primary-300 pl-6 text-xl italic leading-relaxed text-text-secondary">
              "My singular focus is to ensure that no woman feels like a patient when she is shopping for her recovery. Nuvanaah is about reclaiming identity and strength."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 6. Commitment Strip */}
      <section className="bg-surface-low py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
           {[
            { value: "10k+", label: "Women Supported" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "8+", label: "Medical Advisors" },
            { value: "100%", label: "Discreet Delivery" }
          ].map((stat, i) => (
            <div key={i} className="text-center fade-in-up">
              <div className="mb-2 font-display text-4xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-sm font-semibold uppercase tracking-widest text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Letter from Team */}
      <section className="bg-dark py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 fade-in-up">
          <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">We're here for you.</h2>
          <p className="mb-12 text-lg leading-relaxed text-white/80">
            Whether you have questions about sizing, need advice on materials, or just want to talk through what you're experiencing, our care advisors are ready to listen. You don't have to navigate this alone.
          </p>
          <a
            href="https://wa.me/919819461612"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}