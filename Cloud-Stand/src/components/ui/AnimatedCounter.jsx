import { motion } from 'framer-motion'
import { counterVariants } from '../../animations/variants'
import { useCounterAnimation } from '../../hooks/useCounterAnimation'

function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const formattedTarget = `${value}${suffix}`
  const { count, ref, suffix: derivedSuffix } = useCounterAnimation(formattedTarget, 2200)

  return (
    <motion.span
      className="inline-block font-syne text-4xl font-bold tracking-tight text-text-orange sm:text-5xl"
      initial="hidden"
      ref={ref}
      variants={counterVariants}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      {prefix}
      {count}
      {suffix || derivedSuffix}
    </motion.span>
  )
}

export default AnimatedCounter
