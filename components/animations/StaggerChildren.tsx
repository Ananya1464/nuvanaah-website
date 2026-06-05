'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  /** Delay between each child in seconds */
  staggerDelay?: number
  /** How much of the container must be visible */
  threshold?: number
  once?: boolean
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  },
}

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
  threshold = 0.1,
  once = true,
}: StaggerChildrenProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
