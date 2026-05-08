import { useEffect, useState } from 'react'

export function useCounterAnimation(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) {
      return undefined
    }

    let startTimestamp = null
    let frameId = 0

    const step = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step)
      }
    }

    frameId = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(frameId)
  }, [duration, start, target])

  return count
}
