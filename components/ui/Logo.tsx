'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'white' | 'text-only'
  className?: string
  href?: string
}

export default function Logo({ variant = 'default', className = '', href = '/' }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center gap-3 ${className}`}>
      {variant !== 'text-only' && (
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm bg-white">
          <Image
            src="/logo.jpeg"
            alt="Nuvanaah Logo"
            width={48}
            height={48}
            className="h-full w-full object-contain object-center"
            priority
          />
        </div>
      )}
      <span
        className={`text-2xl font-semibold tracking-tight ${
          variant === 'white' ? 'text-white' : 'text-[#884d53]'
        }`}
      >
        Nuvanaah
      </span>
    </div>
  )

  if (href) {
    return <Link href={href}>{logoContent}</Link>
  }

  return logoContent
}
