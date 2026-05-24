"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CircleCheckBig,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
  Quote,
} from 'lucide-react'

const pillars = [
  {
    eyebrow: '01',
    title: 'Sensitive stitching',
    description:
      'Seamless construction designed for skin that needs softness, stability, and as little friction as possible.',
  },
  {
    eyebrow: '02',
    title: 'Breathable basics',
    description:
      'Natural-feeling materials and quiet structure that help the body settle through the day and night.',
  },
  {
    eyebrow: '03',
    title: 'Intuitive design',
    description:
      'Adjustable, easy-access details that adapt as needs change across different stages of recovery.',
  },
]

const journeyStages = [
  {
    phase: 'I. Recovery',
    title: 'Stillness and softness',
    description:
      'A quiet beginning. Rest, texture, and the small rituals that make a room feel safe again.',
    image: '/images/about/journey-recovery.png',
  },
  {
    phase: 'II. Comfort',
    title: 'Safe in your skin',
    description:
      'Support that is present without feeling heavy, so dressing and moving through the day feels simpler.',
    image: '/images/about/journey-comfort.png',
  },
  {
    phase: 'III. Confidence',
    title: 'Self-recognition',
    description:
      'Looking in the mirror and seeing yourself clearly again, with less strain and more ease.',
    image: '/images/about/journey-confidence.png',
  },
  {
    phase: 'IV. Renewal',
    title: 'The new chapter',
    description:
      'Moving forward with steadier footing, carrying strength that was built patiently over time.',
    image: '/images/about/journey-renewal.png',
  },
]

const supportPoints = ['Survivor-led guidance', 'One-on-one consultations', 'Discreet, considered support']

const teamStats = [
  { value: '8+', label: 'Medical Advisors' },
  { value: '3', label: 'Textile Specialists' },
  { value: '100%', label: 'Community Reviewed' },
]

const testimonials = [
  {
    quote: "Nuvanaah didn't just give me a post-op bra; they gave me my confidence back during a time I felt most vulnerable.",
    name: 'Anjali',
    role: 'Survivor',
  },
  {
    quote: "Finally, products that look as good as they feel. The comfort is unlike anything else available in the market.",
    name: 'Rekha',
    role: 'Cancer Warrior',
  },
  {
    quote: "The care team listened to my specific needs and recommended exactly what I needed for my skin recovery.",
    name: 'Priya',
    role: 'Wellness Advocate',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#faf7f2] text-[#1c1c18]">
      {/* ─── HERO (from Stitch Full Hero) ─── */}
      <section className="relative w-full h-[600px] sm:h-[700px] overflow-hidden bg-[#f2e5e5]">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/images/about/about-us-hero-full.png"
            alt="Editorial photograph featuring two women sitting together in a warmly lit, comforting environment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f7]/90 via-[#fff8f7]/60 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <span className="inline-block mb-6 rounded-full bg-[#446651]/10 px-4 py-1.5 text-[14px] font-medium uppercase tracking-[0.05em] text-[#446651]">
                Our Story
              </span>
              <h1 className="text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#6c363c] mb-6">
                Nuvanaah was born through real conversations with women in recovery.
              </h1>
              <p className="text-lg font-light leading-[1.6] text-[#524344] max-w-xl">
                Today, Nuvanaah is more than a brand. It is a space built with empathy, dignity, and care — helping women feel comfortable, confident, and like themselves again during recovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── THE BEGINNING (merged into Our Story layout) ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-[14px] font-medium uppercase tracking-[0.05em] text-[#446651]">The Beginning</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.3] text-[#6c363c] sm:text-4xl">
              I’m Kanchan Chopra, founder of Wig Maker Khair Studio.
            </h2>
            <p className="mt-6 text-base leading-[1.6] text-[#524344]">
              While creating wigs for cancer patients, I found myself deeply connected to their emotional healing journey — not just their appearance. Over time, oncologists and surgeons began referring women recovering from breast surgeries to me because they saw the care and understanding I shared with patients.
              <br /><br />
              These women were not only looking for products. They were looking for comfort, softness, confidence, and someone who truly understood them.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#884d53] pl-6 py-2 italic font-light text-lg text-[#201a1a]">
              &ldquo;As a woman, their journeys touched me deeply. I realized that recovery essentials available in India often felt clinical, heavy, and disconnected from the emotional and physical needs of women healing after surgery. That realization became the beginning of Nuvanaah.&rdquo;
            </blockquote>
            <p className="mt-8 text-base leading-[1.6] text-[#524344]">
              We started studying fabrics, comfort, skin sensitivity, and recovery needs closely. This led us to create lightweight recovery essentials using plant-based fabrics and soft plant-fiber prosthetic solutions designed to feel gentle, breathable, and comforting on sensitive skin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-sm">
              <Image
                src="/images/about/about-us-beginning.png"
                alt="Editorial portrait of a woman resting thoughtfully near a window"
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE NAME ─── */}
      <section className="bg-[#f7f3ed] py-16 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block mb-4 text-[14px] font-medium uppercase tracking-[0.05em] text-[#446651]">
              The Name
            </span>
            <h2 className="mb-6 text-[30px] font-bold leading-[1.3] text-[#6c363c] sm:text-4xl">
              Nuvanaah. A word rooted in renewal.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-base leading-[1.6] text-[#524344]">
              The name Nuvanaah is inspired by the concept of shedding old constraints and embracing a new phase of life with grace. It is a commitment to ensuring that the journey forward is supported by care, comfort, and unwavering respect.
            </p>
            <div className="flex items-center justify-center gap-4 py-8">
              <div className="h-px w-16 bg-[#d7c2c2]/50" />
              <span className="text-[28px] font-light italic text-[#6c363c]">The Grace of Resilience.</span>
              <div className="h-px w-16 bg-[#d7c2c2]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── OUR MISSION BAND ─── */}
      <section className="bg-[#f6ded5] py-16 lg:py-24">
        <div className="mx-auto max-w-[1000px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block mb-4 text-[14px] font-medium uppercase tracking-[0.05em] text-[#884d53]">
              Our Mission
            </span>
            <h2 className="mb-6 text-[32px] font-bold leading-[1.2] text-[#6c363c] sm:text-[40px]">
              We believe healing deserves beautiful things.
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-[18px] leading-relaxed text-[#524344]">
              Recovery is hard work. The things that touch your skin shouldn't be. Our mission is to engineer garments that support complex clinical needs without ever looking clinical. We merge the precision of medical-grade features with the elegance of everyday luxury.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[14px] font-medium uppercase tracking-wide text-[#6c363c] opacity-80">
              <span>Post-surgery</span>
              <span className="mx-2 opacity-50">•</span>
              <span>Post-treatment</span>
              <span className="mx-2 opacity-50">•</span>
              <span>Post-diagnosis</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TACTILE SUPPORT PILLARS (existing) ─── */}
      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#faf7f2_0%,#f7f3ed_45%,#faf7f2_100%)]" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#c3e9cf]/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6c5b54]">Crafted for comfort</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1c1c18] sm:text-5xl lg:text-6xl">Tactile support.</h2>
              <p className="mt-4 text-lg italic text-[#884d53] sm:text-xl">Comfort is a sensory experience.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8 }}
              className="justify-self-start lg:justify-self-end"
            >
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_20px_60px_rgba(28,28,24,0.08)] sm:h-64 sm:w-64">
                <Image
                  src="/images/about/fabric-macro.png"
                  alt="Close-up of soft fabric folds"
                  fill
                  sizes="(min-width: 640px) 256px, 224px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[1.6rem] border border-white/80 bg-white/60 p-6 shadow-[0_14px_40px_rgba(28,28,24,0.05)] backdrop-blur-sm"
              >
                <div className="text-5xl font-semibold tracking-tight text-[#884d53]/12">{pillar.eyebrow}</div>
                <h3 className="mt-4 text-xl font-semibold text-[#1c1c18]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#524344]">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE JOURNEY BACK (existing) ─── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6c5b54]">The evolution</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1c1c18] sm:text-5xl lg:text-6xl">The journey back</h2>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {journeyStages.map((stage) => (
            <motion.article
              key={stage.phase}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
              className="relative min-w-[82vw] overflow-hidden rounded-[1.8rem] bg-[#2d221f] shadow-[0_24px_70px_rgba(28,28,24,0.16)] sm:min-w-[32rem]"
            >
              <div className="relative h-[28rem]">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  sizes="(min-width: 1024px) 32rem, 82vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">{stage.phase}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">{stage.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/80">{stage.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ─── TEAM STATS (from Stitch) ─── */}
      <section className="relative overflow-hidden bg-[#2C1F1A] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(136,77,83,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(68,102,81,0.12)_0%,transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
              A team brought together by <span className="italic font-normal text-[#feb2b9]">purpose,</span> not just profession.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Our collective mission is to redefine the standard of care for women everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[3.8rem] font-bold leading-none tracking-tight text-[#feb2b9] sm:text-[4.5rem]">
                  {stat.value}
                </div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUIET REASSURANCE (existing) ─── */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-[1.8rem] bg-white p-3 shadow-[0_20px_60px_rgba(28,28,24,0.08)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/about/support-consultation.png"
                  alt="Supportive consultation between two women at a table"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="max-w-xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6c5b54]">Support layer</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1c1c18] sm:text-5xl">Quiet reassurance.</h2>
            <p className="mt-5 text-lg leading-8 text-[#524344]">
              Beyond the collection, Nuvanaah is a foundation of human support. Every interaction should feel measured, calm, and respectful.
            </p>

            <div className="mt-8 space-y-4">
              {supportPoints.map((point, index) => {
                const icons = [ShieldCheck, HeartHandshake, Users]
                const Icon = icons[index]

                return (
                  <div key={point} className="flex items-center gap-4 rounded-full border border-[#e6e2dc] bg-white/75 px-4 py-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6ded5] text-[#884d53]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <p className="font-medium text-[#1c1c18]">{point}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#524344]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#c3e9cf]/45 px-4 py-2">
                <CircleCheckBig className="h-4 w-4 text-[#446651]" />
                Calm guidance
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f6ded5]/70 px-4 py-2">
                <Leaf className="h-4 w-4 text-[#884d53]" />
                Gentle materials
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e6e2dc]/70 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[#6c5b54]" />
                Considered details
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── COMMUNITY TESTIMONIALS (from Stitch) ─── */}
      <section className="relative overflow-hidden bg-[#f9eef0] py-16 sm:py-20">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#f6ded5]/60 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#c3e9cf]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6c5b54]">Voices of strength</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1c1c18] sm:text-5xl">From our community</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-[1.6rem] border border-white/80 bg-white/70 p-7 shadow-[0_14px_40px_rgba(28,28,24,0.05)] backdrop-blur-sm"
              >
                <Quote className="mb-4 h-8 w-8 text-[#c9848a]/25" />
                <p className="text-[15px] italic leading-7 text-[#524344]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#d7c2c2]/60" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#884d53]">
                    {testimonial.name} — {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA (Updated from Stitch) ─── */}
      <section className="bg-[#884d53] text-white py-16 sm:py-24 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[32px] font-bold leading-[1.2] sm:text-[40px] mb-6">
              You are in the right place.
            </h2>
            <p className="text-lg font-light leading-[1.6] text-[#ffcbce] mb-12 max-w-2xl mx-auto opacity-90">
              Whether you are preparing for surgery, navigating recovery, or supporting someone who is, we are here to provide the comfort and dignity you deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#884d53] rounded-full font-medium text-[14px] uppercase tracking-wide hover:bg-[#fff8f7] transition-colors min-w-[220px]"
              >
                Explore the Collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium text-[14px] uppercase tracking-wide hover:bg-white/10 transition-colors min-w-[220px]"
              >
                Chat with our Care Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}