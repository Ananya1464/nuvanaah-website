import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found — Nuvanaah',
  description: 'The page you are looking for has moved or does not exist.',
  robots: 'noindex',
}

const links = [
  {
    href: '/products',
    label: 'Browse Products',
    description: 'Explore our full range of cancer care products',
  },
  {
    href: 'https://wa.me/919076041779',
    label: 'WhatsApp Care Team',
    description: 'Get support or sizing help via WhatsApp',
  },
  {
    href: '/faq',
    label: 'Visit the FAQ',
    description: 'Sizing, shipping, returns, and more',
  },
  {
    href: '/contact',
    label: 'Contact Us',
    description: 'We usually respond within a few hours',
  },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col items-center justify-center px-4 py-24">
      {/* Faint 404 watermark */}
      <p className="select-none text-[120px] sm:text-[180px] font-black leading-none text-[#1c1c18]/[0.04] mb-[-1rem] sm:mb-[-2rem]">
        404
      </p>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="mb-3 inline-block rounded-full bg-[#884d53]/10 px-4 py-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#884d53]">
            Page not found
          </span>
        </div>

        <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-[#1c1c18] leading-tight">
          This page seems to<br />have wandered off
        </h1>

        <p className="mb-10 text-[#524344] leading-relaxed max-w-sm mx-auto">
          It may have moved, been renamed, or never existed. Here are a few places that might have what you need.
        </p>

        {/* Navigation tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10">
          {links.map(({ href, label, description }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-[#ded0bf]/50 bg-white p-5 transition-all hover:border-[#884d53]/30 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-[#1c1c18] group-hover:text-[#884d53] transition-colors mb-1">
                {label}
              </span>
              <span className="text-xs text-[#7a6f6a] leading-relaxed">
                {description}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#884d53] hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
