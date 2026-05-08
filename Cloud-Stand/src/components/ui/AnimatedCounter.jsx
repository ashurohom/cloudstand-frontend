import { motion } from 'framer-motion'
import { counterVariants } from '../../animations/variants'
import { useCounterAnimation } from '../../hooks/useCounterAnimation'

function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const formattedTarget = `${value}${suffix}`
  const { count, ref, suffix: derivedSuffix } = useCounterAnimation(formattedTarget, 2200)

  return (
    <motion.span
      className="inline-block bg-[linear-gradient(90deg,#0057ff,#3d8bff,#0057ff)] bg-[length:200%_100%] bg-clip-text font-syne text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
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
