'use client'

import React from 'react'

interface TemplateProps {
  children: React.ReactNode
}

export function PostSurgeryTemplate({ children }: TemplateProps) {
  return (
    <div className="bg-[#fdf9f3] text-[#524344]">
      {children}
    </div>
  )
}

export function HeadwearIdentityTemplate({ children }: TemplateProps) {
  return (
    <div className="bg-white text-[#1C1C18]">
      {children}
    </div>
  )
}

export function SensitiveWellnessTemplate({ children }: TemplateProps) {
  return (
    <div className="bg-[#fafafa] text-[#6C5B54]">
      {children}
    </div>
  )
}
