import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants } from '../animations/variants'

function NotFound() {
  useDocumentTitle('404 | CloudStand Consulting')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main
      animate="animate"
      className="flex min-h-[80vh] items-center justify-center px-4 pt-20"
      exit="exit"
      initial="initial"
      variants={pageVariants}
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="font-syne text-8xl font-extrabold text-accent sm:text-[10rem]">404</div>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <Button size="lg" to="/" variant="solid">
            Go Home
          </Button>
        </div>
      </motion.div>
    </motion.main>
  )
}

export default NotFound
