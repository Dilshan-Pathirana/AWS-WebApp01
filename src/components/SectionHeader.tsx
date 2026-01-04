import { motion } from 'framer-motion'

type Props = {
  title: string
  lead?: string
  align?: 'left' | 'center'
  showAccentBar?: boolean
}

export default function SectionHeader({
  title,
  lead,
  align = 'left',
  showAccentBar = false,
}: Props) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={
        isCenter
          ? 'mb-16 text-center'
          : 'mb-20 flex flex-col items-start'
      }
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      {showAccentBar ? (
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
      ) : null}
      {lead ? (
        <p
          className={
            isCenter
              ? 'text-gray-400 max-w-2xl mx-auto'
              : 'text-gray-400 max-w-2xl'
          }
        >
          {lead}
        </p>
      ) : null}
    </motion.div>
  )
}
