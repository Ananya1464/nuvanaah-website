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
        <div className="relative w-12 h-12">
          <Image
            src="/logo.jpeg"
            alt="Nuvanaah Logo"
            width={48}
            height={48}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      )}
      <span
        className={`text-2xl font-semibold tracking-tight ${
          variant === 'white' ? 'text-white' : 'text-teal-600'
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
