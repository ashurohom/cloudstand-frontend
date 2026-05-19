import { motion } from 'framer-motion'
import { badgeVariants } from '../../animations/variants'

function Badge({ children, className = '' }) {
  return (
    <motion.span
      className={`badge-breathe inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-[#d63b25] ${className}`}
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
