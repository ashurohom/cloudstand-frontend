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
      className="inline-flex min-w-[190px] items-center justify-center overflow-hidden rounded-xl border border-accent/20 px-5 py-2 text-center text-white shadow-[0_14px_34px_rgba(0,87,255,0.18)]"
      style={{
        background: 'linear-gradient(135deg, #07515e 0%, #0f5465 100%)',
        fontWeight: 600,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          className="inline-block w-full whitespace-nowrap"
          exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
          initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
          key={words[index]}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingText
