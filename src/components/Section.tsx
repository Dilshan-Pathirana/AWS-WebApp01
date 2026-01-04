import type { ReactNode } from 'react'

type Props = {
  id?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: Props) {
  return (
    <section id={id} className={`py-32 relative z-10 ${className}`}>
      {children}
    </section>
  )
}
