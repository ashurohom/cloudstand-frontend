import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useCounterAnimation(target, duration = 2000, delaySeconds = 0) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    let startTime = null
    let frameId = 0
    let timeoutId = 0
    const targetValue = `${target ?? ''}`
    const numeric = parseInt(targetValue.replace(/\D/g, ''), 10) || 0

    const startAnimation = () => {
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
    }

    if (delaySeconds > 0) {
      timeoutId = setTimeout(startAnimation, delaySeconds * 1000)
    } else {
      startAnimation()
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [duration, isInView, target, delaySeconds])

  return { count, ref, suffix: `${target ?? ''}`.replace(/[0-9]/g, '') }
}
