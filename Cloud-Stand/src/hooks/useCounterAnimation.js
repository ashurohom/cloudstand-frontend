import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useCounterAnimation(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    let startTime = null
    let frameId = 0
    const targetValue = `${target ?? ''}`
    const numeric = parseInt(targetValue.replace(/\D/g, ''), 10) || 0

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numeric))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step)
      }
    }

    frameId = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(frameId)
  }, [duration, isInView, target])

  return { count, ref, suffix: `${target ?? ''}`.replace(/[0-9]/g, '') }
}
