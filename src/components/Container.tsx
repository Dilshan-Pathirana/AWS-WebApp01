import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  size?: '6xl' | '7xl'
}

export default function Container({
  children,
  className = '',
  size = '6xl',
}: Props) {
  const maxWidth = size === '7xl' ? 'max-w-7xl' : 'max-w-6xl'

  return <div className={`${maxWidth} mx-auto px-6 ${className}`}>{children}</div>
}
