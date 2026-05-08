import { motion } from 'framer-motion'
import { fadeUp, lineDraw } from '../../animations/variants'
import Badge from './Badge'

function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}
      initial="hidden"
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <motion.div className="h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" variants={lineDraw} />
      <motion.h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl" custom={1} variants={fadeUp}>
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p className="text-base leading-7 text-text-muted sm:text-lg" custom={2} variants={fadeUp}>
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  )
}

export default SectionTitle
