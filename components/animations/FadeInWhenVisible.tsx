'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

interface FadeInWhenVisibleProps {
  children: ReactNode
  className?: string
  /** Delay in seconds before animation starts */
  delay?: number
  /** Direction the element slides in from */
  direction?: Direction
  /** Distance in pixels */
  distance?: number
  /** How much of the element must be visible (0–1) */
  threshold?: number
  /** Whether to animate only once or every time it enters view */
  once?: boolean
}

const directionOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':    return { x: 0, y: distance }
    case 'down':  return { x: 0, y: -distance }
    case 'left':  return { x: distance, y: 0 }
    case 'right': return { x: -distance, y: 0 }
  }
}

export default function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 24,
  threshold = 0.15,
  once = true,
}: FadeInWhenVisibleProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const offset = directionOffset(direction, distance)

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
