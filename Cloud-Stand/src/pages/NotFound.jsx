import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants } from '../animations/variants'

function NotFound() {
  useDocumentTitle('Cloudstand Consulting | Coming Soon')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main
      animate="animate"
      className="flex min-h-[80dvh] lg:portrait:min-h-[500px] items-center justify-center px-4 pt-20"
      exit="exit"
      initial="initial"
      variants={pageVariants}
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9]">
          <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Coming Soon</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-[#64748b]">
          We are currently working hard on this section. It will be available very soon!
        </p>
        <div className="mt-8">
          <Button size="lg" to="/" variant="solid">
            Return Home
          </Button>
        </div>
      </motion.div>
    </motion.main>
  )
}

export default NotFound
