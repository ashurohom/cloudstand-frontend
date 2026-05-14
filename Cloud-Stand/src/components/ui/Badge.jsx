import { motion } from 'framer-motion'
import { badgeVariants } from '../../animations/variants'

function Badge({ children, className = '' }) {
  return (
    <motion.span
      className={`badge-breathe inline-flex items-center rounded-full border border-[#d7e5ff] bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-text-orange backdrop-blur ${className}`}
      initial="hidden"
      variants={badgeVariants}
      viewport={{ once: true, margin: '-60px' }}
      whileInView="visible"
    >
      {children}
    </motion.span>
  )
}

export default Badge
