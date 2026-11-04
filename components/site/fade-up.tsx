'use client'

import { motion, useReducedMotion } from 'framer-motion'

type FadeUpProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li'
}

export function FadeUp({ children, className, delay = 0, as = 'div' }: FadeUpProps) {
  const reduce = useReducedMotion()
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.2, delay, ease: 'easeOut' }}
    >
      {children}
    </Component>
  )
}
