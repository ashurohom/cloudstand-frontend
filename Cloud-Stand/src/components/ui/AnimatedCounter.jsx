import { motion } from 'framer-motion'
import { useCounterAnimation } from '../../hooks/useCounterAnimation'

function AnimatedCounter({ value, suffix = '', prefix = '', className, duration = 2200, delay = 0 }) {
  const formattedTarget = `${value}${suffix}`
  const { count, ref, suffix: derivedSuffix } = useCounterAnimation(formattedTarget, duration)
  const counterClassName =
    className || 'inline-block font-syne text-4xl font-bold tracking-tight text-text-orange sm:text-5xl'

  return (
    <motion.span
      className={counterClassName}
      initial={{ opacity: 0, y: 14 }}
      ref={ref}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {prefix}
      {count}
      {suffix || derivedSuffix}
    </motion.span>
  )
}

export default AnimatedCounter
