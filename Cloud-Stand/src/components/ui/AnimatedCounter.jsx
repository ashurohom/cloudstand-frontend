import { useEffect, useState } from 'react'
import { useCounterAnimation } from '../../hooks/useCounterAnimation'

function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const [start, setStart] = useState(false)
  const count = useCounterAnimation(value, 2000, start)

  useEffect(() => {
    setStart(true)
  }, [])

  return (
    <span className="font-syne text-4xl font-bold tracking-tight text-accent sm:text-5xl">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
