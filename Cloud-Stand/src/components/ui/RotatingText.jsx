import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const words = ['HCM', 'ERP', 'Payroll', 'OIC', 'BI & Analytics', 'AI Solutions']

function RotatingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((previous) => (previous + 1) % words.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [])

  return (
    <span
      className="relative inline-flex min-w-[210px] items-center justify-center overflow-hidden rounded-xl border px-5 py-2 text-center text-[#0a2540] shadow-[0_16px_40px_rgba(0,255,255,0.22)]"
      style={{
        background: 'linear-gradient(135deg, #00d9d9 0%, #00FFFF 55%, #b8ffff 100%)',
        borderColor: 'rgba(10, 37, 64, 0.14)',
        fontWeight: 600,
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/70"
      />
      <motion.span
        animate={{ x: ['-120%', '140%'] }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]"
        style={{ skewX: '-18deg' }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <AnimatePresence mode="wait">
        <motion.span
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            letterSpacing: '0em',
            filter: 'blur(0px)',
            textShadow: '0 0 0 rgba(255,255,255,0)',
          }}
          className="inline-block w-full whitespace-nowrap"
          exit={{
            opacity: 0,
            y: -18,
            scale: 0.9,
            rotateX: -24,
            letterSpacing: '0.08em',
            filter: 'blur(4px)',
            textShadow: '0 0 18px rgba(255,255,255,0.2)',
          }}
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.84,
            rotateX: 26,
            letterSpacing: '0.06em',
            filter: 'blur(4px)',
            textShadow: '0 0 24px rgba(255,255,255,0.28)',
          }}
          key={words[index]}
          style={{ transformPerspective: 600, willChange: 'transform' }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingText
