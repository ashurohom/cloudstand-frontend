import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      custom={delay / 0.1}
      initial="hidden"
      variants={fadeUp}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
