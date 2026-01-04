import type { ReactNode } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

type Props = HTMLMotionProps<'div'> & {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  ...props
}: Props) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
      initial={hoverEffect ? { y: 0 } : undefined}
      whileHover={
        hoverEffect
          ? {
              y: -8,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.15)',
            }
          : undefined
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
