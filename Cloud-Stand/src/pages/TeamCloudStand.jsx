import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants } from '../animations/variants'

function TeamCloudStand() {
  useDocumentTitle('Team CloudStand | CloudStand Consulting')

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
            <Badge className="border-sky-200 bg-white text-[#D63B25]">Team CloudStand</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl">
              The people behind
              <br />
              CloudStand
            </h1>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />
            <p className="mt-6 max-w-3xl text-base leading-7 text-black sm:text-lg">
              Team CloudStand is where consulting discipline, curiosity, and shared ownership come together. We work as
              one team to deliver thoughtful Oracle Cloud solutions with clarity, speed, and care.
            </p>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              ['Collaborative by Design', 'We move together across delivery, problem-solving, and client success.'],
              ['Built on Trust', 'Clear communication and accountability shape the way we work every day.'],
              ['Focused on Impact', 'We stay practical, thoughtful, and committed to outcomes that matter.'],
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

export default TeamCloudStand
