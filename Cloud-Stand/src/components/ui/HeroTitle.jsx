import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.86,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function HeroTitle({ text, gradient = false, className = '' }) {
  const controls = useAnimation()
  const location = useLocation()
  const words = text.split(' ')

  useEffect(() => {
    controls.set('hidden')
    controls.start('visible')
  }, [controls, location.pathname])

  return (
    <motion.span
      animate={controls}
      className={`block ${className}`}
      initial="hidden"
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          className={`inline-block mr-[0.25em] ${gradient ? 'text-gradient' : ''}`}
          key={`${location.pathname}-${word}-${index}`}
          style={{ willChange: 'transform' }}
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default HeroTitle
