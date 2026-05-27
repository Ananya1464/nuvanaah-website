'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        setProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', updateScroll)
    updateScroll() // Initial check

    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <div className="fixed top-[76px] left-0 right-0 z-40 h-1 bg-surface-low">
      <div 
        className="h-full bg-primary-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
