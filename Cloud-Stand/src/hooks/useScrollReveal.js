import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: options.margin || '-60px',
    ...options,
  })

  return { ref, isInView }
}
