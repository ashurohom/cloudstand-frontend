import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants } from '../animations/variants'

function EmpoweringTalent() {
  useDocumentTitle('Empowering Talent | CloudStand Consulting')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="bg-white pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <Badge className="border-sky-200 bg-white text-[#EA580C]">Empowering Talent</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl">
              Growth backed by
              <br />
              real opportunity
            </h1>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />
            <p className="mt-6 max-w-3xl text-base leading-7 text-black sm:text-lg">
              We believe talent grows fastest when people are supported with learning, ownership, and space to do their
              best work. Empowering Talent reflects how CloudStand invests in people at every stage of the journey.
            </p>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              ['Continuous Learning', 'Hands-on work, mentorship, and skill-building stay part of the daily rhythm.'],
              ['Meaningful Ownership', 'People are trusted with responsibility and encouraged to lead with confidence.'],
              ['Career Momentum', 'Clear opportunities help team members grow across consulting, delivery, and domain depth.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[28px] border border-sky-200 bg-white p-6">
                <div className="h-1 w-12 rounded-full bg-[#EA580C]" />
                <h2 className="mt-5 text-2xl font-bold text-black">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-black">{copy}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default EmpoweringTalent
