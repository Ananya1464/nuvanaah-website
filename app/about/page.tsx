import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Story — Nuvanaah',
  description:
    'Why we built Nuvanaah, who we are, and what we believe about recovery, dignity, and care.',
  alternates: {
    canonical: 'https://www.nuvanaah.com/about',
  },
  openGraph: {
    title: 'Our Story — Nuvanaah',
    description:
      'Why we built Nuvanaah, who we are, and what we believe about recovery, dignity, and care.',
    images: ['/images/about/about-og.jpg'],
  },
}

export default function AboutPage() {
  return (
    <main className="bg-[#faf7f2] text-[#1c1c18]">
      {/* ── ZONE 1: HERO ── */}
      <section className="flex flex-col lg:grid lg:grid-cols-2 lg:h-screen lg:min-h-[600px] w-full">
        <div className="relative h-[70vh] min-h-[400px] w-full lg:h-full">
          <Image
            src="/images/about/about_hero.png"
            alt="Flat-lay of warm, soft recovery wear on natural linen, conveying gentle support"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex h-full flex-col justify-center px-6 py-16 lg:px-20 lg:py-0">
          <div className="max-w-[480px]">
            <span className="mb-6 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
              Our story
            </span>
            <h1 className="mb-4 text-[32px] font-medium leading-tight text-[#1c1c18]">
              Care that supports you through treatment.
            </h1>
            <p className="mb-8 font-display text-[16px] italic text-[#7a6f6a]">
              We are here to help you feel like yourself again.
            </p>
            <p className="mb-8 text-[14px] leading-[1.9] text-[#1c1c18]">
              Nuvanaah was built for women navigating cancer treatment and recovery — for the practical needs, the quiet discomforts, and the moments when feeling like yourself matters most. Every product in our range exists because a specific, real need exists. And because the existing options were not good enough.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center text-[14px] font-medium text-[#1c1c18] hover:text-[#884d53] transition-colors"
            >
              See our products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ZONE 2: THE WHY ── */}
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="mb-10 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
            Why Nuvanaah exists
          </span>
          <blockquote className="mb-12 font-display text-[22px] italic leading-[1.7] text-[#524344]">
            "Recovery asks a great deal of the body. It asks a great deal of the person inside it, too. The products that surround that period should rise to meet that."
          </blockquote>
          <div className="mx-auto max-w-[580px] space-y-6 text-[14px] leading-[1.8] text-[#1c1c18]">
            <p>
              There are things that happen during cancer treatment that are not part of the treatment itself. The arm that needs a specific position to rest comfortably. The bra that no longer fits or fastens correctly. The face in the mirror that looks different in ways that are hard to describe. The days when getting dressed requires more intention than it used to. These are not medical problems. They are personal ones. And they deserve products designed specifically for them — not adapted from general-purpose alternatives, not clinical and functional, but considered, beautiful, and genuinely useful.
            </p>
            <p>
              Nuvanaah was founded on that belief. Every product in our range exists because a specific, real need exists — and because the existing options were not good enough. Not soft enough, not lightweight enough, not beautiful enough. Not designed with enough understanding of what recovery actually asks of a person on an ordinary day.
            </p>
          </div>
        </div>
      </section>

      {/* ── ZONE 2B: THE FOUNDER ── */}
      <section className="bg-[#faf7f2] py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mb-12 lg:mb-0 aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 overflow-hidden rounded-2xl">
            <Image
              src="/images/founder_img.jpeg"
              alt="Founder of Nuvanaah"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="lg:pl-4">
            <span className="mb-6 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
              The founder
            </span>
            <h2 className="mb-1 text-[22px] font-medium leading-snug text-[#1c1c18]">
              Kanchan Chopra
            </h2>
            <p className="mb-6 font-display text-[15px] italic text-[#7a6f6a]">
              Founder, Nuvanaah
            </p>
            <div className="space-y-5 text-[14px] leading-[1.9] text-[#1c1c18]">
              <p className="font-medium text-[15px]">
                Nuvanaah was born through real conversations with women in recovery.
              </p>
              <p>
                I’m Kanchan Chopra, founder of Wig Maker Khair Studio. While creating wigs for cancer patients, I found myself deeply connected to their emotional healing journey — not just their appearance. Over time, oncologists and surgeons began referring women recovering from breast surgeries to me because they saw the care and understanding I shared with patients.
              </p>
              <p>
                These women were not only looking for products. They were looking for comfort, softness, confidence, and someone who truly understood them.
              </p>
              <p>
                As a woman, their journeys touched me deeply. I realized that recovery essentials available in India often felt clinical, heavy, and disconnected from the emotional and physical needs of women healing after surgery.
              </p>
              <p className="italic text-[#7a6f6a]">
                That realization became the beginning of Nuvanaah.
              </p>
              <p>
                We started studying fabrics, comfort, skin sensitivity, and recovery needs closely. This led us to create lightweight recovery essentials using plant-based fabrics and soft plant-fiber prosthetic solutions designed to feel gentle, breathable, and comforting on sensitive skin.
              </p>
              <p>
                Today, Nuvanaah is more than a brand. It is a space built with empathy, dignity, and care — helping women feel comfortable, confident, and like themselves again during recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZONE 3: WHAT WE BELIEVE ── */}
      <section className="bg-[#faf7f2] py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <article>
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
                Comfort
              </span>
              <h3 className="mb-3 text-[18px] font-medium text-[#1c1c18]">
                Comfort is not a luxury during recovery.
              </h3>
              <p className="text-[14px] leading-[1.8] text-[#1c1c18]">
                It is the condition that makes rest possible — and rest is what makes healing possible. Every product we make is built around that sequence.
              </p>
            </article>
            <article>
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
                Confidence
              </span>
              <h3 className="mb-3 text-[18px] font-medium text-[#1c1c18]">
                Confidence is not about appearance.
              </h3>
              <p className="text-[14px] leading-[1.8] text-[#1c1c18]">
                It is about recognition — seeing yourself in the mirror and feeling like the person you have always been, even in changed circumstances.
              </p>
            </article>
            <article>
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
                Dignity
              </span>
              <h3 className="mb-3 text-[18px] font-medium text-[#1c1c18]">
                Recovery deserves dignity in every detail.
              </h3>
              <p className="text-[14px] leading-[1.8] text-[#1c1c18]">
                The fabric against your skin. The weight in your bra. The print on the pillow beside you. None of these are small. They are what the days are made of.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── ZONE 4: HOW WE BUILD ── */}
      <section className="bg-[#f5f0e8] py-20 px-6 lg:px-0">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 mb-12 lg:mb-0">
            <Image
              src="/images/about/how_we_build.png"
              alt="A designer's workspace showing soft plant-based fabrics and thoughtful design process"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="lg:pr-12">
            <span className="mb-6 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
              How we build
            </span>
            <h2 className="mb-8 max-w-md text-[22px] font-medium leading-snug text-[#1c1c18]">
              Every product starts with a specific need. Not a market category.
            </h2>
            <div className="max-w-[480px] space-y-6 text-[14px] leading-[1.8] text-[#1c1c18]">
              <p>
                We do not begin with a product brief. We begin with a person — and a moment in her day that could be better. The arm resting uncomfortably during sleep. The sleeve that slips every twenty minutes. The wig that is too heavy by mid-afternoon. We ask why it is that way, and whether it has to be.
              </p>
              <p>
                The answers become the products. Plant fiber instead of silicone because it is lighter, cooler, and breathable. A shoulder holding belt on the compression sleeve because sleeves should stay where they belong. Real human hair in a scarf design because the beauty of natural hair is not a vanity — it is part of how many women know themselves.
              </p>
              <p>
                The prints, the colour names, the tassel ends, the Gentle Note inside every product page — these are not marketing. They are the belief that recovery deserves objects that feel personal and considered. That the things surrounding a difficult period should be as beautiful as they are useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZONE 5: THE PRODUCTS ── */}
      <section className="bg-[#faf7f2] py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
              Our products
            </span>
            <h2 className="mb-2 text-[20px] font-medium text-[#1c1c18]">
              Built for each part of the journey.
            </h2>
            <p className="max-w-lg text-[13px] text-[#7a6f6a]">
              From the first days after surgery to the everyday months that follow. Each product addresses a specific need.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-8">
            {/* Product 1 */}
            <div className="flex flex-col">
              <div className="relative mb-4 aspect-square bg-[#faf7f2] border border-[#1c1c18]/10">
                <Image
                  src="/images/catalog/WillowSupport/1.jpeg"
                  alt="Willow Support — Folded front-open pocket bra on linen surface"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#7a6f6a]">
                Recovery & Body Support
              </span>
              <h3 className="mb-1 text-[14px] font-medium text-[#1c1c18]">Willow Support</h3>
              <p className="mb-2 text-[12px] text-[#7a6f6a]">Front-Open Pocket Bra</p>
              <p className="mb-3 text-[14px] text-[#1c1c18]">₹ 3,000</p>
              <Link href="/products/willow-support" className="mt-auto text-[13px] text-[#1c1c18] hover:text-[#884d53] transition-colors">
                See product →
              </Link>
            </div>
            {/* Product 2 */}
            <div className="flex flex-col">
              <div className="relative mb-4 aspect-square bg-[#faf7f2] border border-[#1c1c18]/10">
                <Image
                  src="/images/catalog/AirBloom/1.jpeg"
                  alt="AirBloom — Scarf system laid gently on a warm surface"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#7a6f6a]">
                Hair & Confidence
              </span>
              <h3 className="mb-1 text-[14px] font-medium text-[#1c1c18]">AirBloom</h3>
              <p className="mb-2 text-[12px] text-[#7a6f6a]">Scarf with Hair System</p>
              <p className="mb-3 text-[14px] text-[#1c1c18]">₹ 3,500</p>
              <Link href="/products/airbloom" className="mt-auto text-[13px] text-[#1c1c18] hover:text-[#884d53] transition-colors">
                See product →
              </Link>
            </div>
            {/* Product 3 */}
            <div className="flex flex-col">
              <div className="relative mb-4 aspect-square bg-[#faf7f2] border border-[#1c1c18]/10">
                <Image
                  src="/images/catalog/FlowSleeve/1.jpeg"
                  alt="FlowSleeve — Lymphedema sleeve worn on arm resting on a table"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#7a6f6a]">
                Lymphedema Care
              </span>
              <h3 className="mb-1 text-[14px] font-medium text-[#1c1c18]">FlowSleeve</h3>
              <p className="mb-2 text-[12px] text-[#7a6f6a]">Lymphedema Sleeve</p>
              <p className="mb-3 text-[14px] text-[#1c1c18]">₹ 1,200</p>
              <Link href="/products/flowsleeve" className="mt-auto text-[13px] text-[#1c1c18] hover:text-[#884d53] transition-colors">
                See product →
              </Link>
            </div>
            {/* Product 4 */}
            <div className="flex flex-col">
              <div className="relative mb-4 aspect-square bg-[#faf7f2] border border-[#1c1c18]/10">
                <Image
                  src="/images/catalog/NatureNest/1.jpeg"
                  alt="Nature Nest — Underarm rest pillow in Willow Print on a soft bed"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#7a6f6a]">
                Rest & Comfort
              </span>
              <h3 className="mb-1 text-[14px] font-medium text-[#1c1c18]">Nature Nest</h3>
              <p className="mb-2 text-[12px] text-[#7a6f6a]">Underarm Rest Pillow</p>
              <p className="mb-3 text-[14px] text-[#1c1c18]">₹ 1,800</p>
              <Link href="/products/nature-nest" className="mt-auto text-[13px] text-[#1c1c18] hover:text-[#884d53] transition-colors">
                See product →
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/products" className="inline-block text-[14px] font-medium text-[#1c1c18] hover:text-[#884d53] transition-colors">
              See the full collection →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ZONE 6: THE COMMITMENT ── */}
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <span className="mb-10 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
            Our commitment
          </span>
          <blockquote className="mb-12 font-display text-[22px] italic leading-[1.7] text-[#524344]">
            "We believe that the products surrounding recovery should feel like they were made by people who understand what recovery actually asks — not by people who see a market category."
          </blockquote>
          <div className="space-y-6 text-[14px] leading-[1.8] text-[#1c1c18] text-center mx-auto max-w-[580px]">
            <p>
              Every product in the Nuvanaah range is tested for the things that matter during recovery: weight, breathability, ease of use, gentleness against healing skin, and the quality that determines whether something is used every day or put aside after a week. These are not the same tests that govern general consumer products. They are specific. They come from listening.
            </p>
            <p>
              We are a small team. We do not move fast. We add a product to the range when we are confident it meets the needs we have set for it — not before. Every product that carries the Nuvanaah name is one we would give to someone we love, in the weeks and months when care matters most.
            </p>
          </div>
        </div>
      </section>

      {/* ── ZONE 7: THE NAME ── */}
      <section className="bg-[#faf7f2] py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="mb-12 lg:mb-0 lg:pr-8">
            <span className="mb-6 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
              The name
            </span>
            <h2 className="mb-6 text-[20px] font-medium text-[#1c1c18]">
              Nuvanaah.
            </h2>
            <div className="space-y-6 text-[14px] leading-[1.8] text-[#1c1c18]">
              <p>
                Nuvanaah is drawn from the Sanskrit root <em>nava</em> — meaning new, renewed, fresh. Not recovery in a clinical sense. Returning to yourself. The emergence of something that was there all along.
              </p>
              <p>
                The double-a ending softens it. Makes it feel less like a statement and more like something spoken gently — the way you would speak to someone who is in the middle of something hard and needs to know that it will not always feel this way.
              </p>
              <p>
                That is what the brand is for. Not for the hardest moments. For the ordinary ones that surround them.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/logo.jpeg"
              alt="The Nuvanaah brand identity wordmark"
              width={240}
              height={240}
              className="opacity-80 rounded-md"
            />
          </div>
        </div>
      </section>

      {/* ── ZONE 8: CONTACT / REACH US ── */}
      <section className="bg-[#1c1c18] py-16 px-6 text-white text-center">
        <div className="mx-auto max-w-[480px]">
          <span className="mb-6 block text-[10px] font-semibold uppercase tracking-widest text-[#884d53]">
            Get in touch
          </span>
          <h2 className="mb-6 text-[24px] font-medium">
            We are here.
          </h2>
          <p className="mb-10 text-[14px] leading-[1.8] text-[rgba(255,255,255,0.65)] mx-auto">
            For questions about products, sizing, and which products might be right for where you are in your journey — we are available on WhatsApp and email. Recovery is not something to navigate alone.
          </p>
          <a
            href="https://wa.me/919076041779"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Nuvanaah on WhatsApp"
            className="mb-6 inline-flex h-[48px] items-center justify-center rounded-full bg-[#884d53] px-8 text-[14px] font-medium text-white transition-colors hover:bg-[#6b3a3f]"
          >
            Chat with us on WhatsApp
          </a>
          <div className="flex flex-col items-center gap-2">
            <a href="mailto:hello@nuvanaah.com" className="text-[14px] text-white hover:text-white/80 transition-colors">
              hello@nuvanaah.com
            </a>
            <span className="text-[13px] text-[rgba(255,255,255,0.65)]">
              +91 98194 61612
            </span>
          </div>
        </div>
      </section>

    </main>
  )
}