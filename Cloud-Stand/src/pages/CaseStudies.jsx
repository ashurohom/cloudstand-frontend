import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { caseStudies } from '../data/caseStudies'
import { pageVariants, staggerContainer, staggerItem } from '../animations/variants'

const filters = ['All', 'HCM', 'ERP', 'OIC', 'Payroll', 'BI', 'AI']

function CaseStudies() {
  useDocumentTitle('Case Studies | CloudStand Oracle Cloud Success Stories')
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') {
      return caseStudies
    }

    return caseStudies.filter((study) => study.category === activeFilter)
  }, [activeFilter])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="section-padding hero-mesh gpu-layer">
        <div className="section-shell">
          <Badge>Case Studies</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            Real Oracle Cloud Outcomes for Modern Enterprises
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            A snapshot of the Oracle Cloud programs and modernization outcomes CloudStand helps deliver.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Filter by Service" title="Outcomes across Oracle Cloud priorities" />
          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                className={`button-ring relative rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'border-accent text-white'
                    : 'border-[#d7e5ff] bg-white text-text-muted hover:border-accent/50 hover:text-slate-900'
                }`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {activeFilter === filter ? (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-accent"
                    layoutId="case-filter-tab"
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                ) : null}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              animate="visible"
              className="grid gap-6 lg:grid-cols-2"
              exit={{ opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.2 } }}
              initial="hidden"
              key={activeFilter}
              variants={staggerContainer}
            >
              {filteredStudies.map((study) => (
                <motion.div key={study.slug} variants={staggerItem}>
                  <motion.div
                    className="group h-full"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                  >
                    <Card className="overflow-hidden">
                      <div className="overflow-hidden">
                        <motion.img
                          alt={study.title}
                          className="h-64 w-full object-cover"
                          loading="lazy"
                          src={study.image}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ scale: 1.04 }}
                        />
                      </div>
                      <div className="border-l-4 border-accent p-7">
                        <Badge className="border-accent/20 bg-blue-50 text-accent">{study.category}</Badge>
                        <h2 className="mt-5 text-3xl font-bold text-slate-900">{study.title}</h2>
                        <div className="mt-4 grid gap-4 text-sm leading-7 text-text-muted">
                          <div>
                            <span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">Solution:</span> {study.solution}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">Result:</span> {study.result}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.main>
  )
}

export default CaseStudies
