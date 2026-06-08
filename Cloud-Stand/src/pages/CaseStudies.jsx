import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { caseStudies } from '../data/caseStudies'
import { pageVariants } from '../animations/variants'

function CaseStudies() {
  useDocumentTitle('Case Studies | CloudStand Oracle Cloud Success Stories')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="relative overflow-hidden bg-white pt-16 pb-14 lg:min-h-[90vh] lg:flex lg:items-center">
        <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge>Case Studies</Badge>
            </motion.div>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

            <div className="pb-2">
              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 25 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-[40px] font-bold leading-[0.95] tracking-[-0.06em] text-black"
              >
                Transformation
                <br />
                outcomes that
                <br />
                stand up in the boardroom
              </motion.h1>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 max-w-[760px] text-[16px] leading-[1.7] text-[#475569]"
              >
                Explore Oracle Cloud transformation programs,
                enterprise modernization initiatives and measurable
                business outcomes delivered by CloudStand Consulting.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-xl">
              <img 
                src="/CaseStudies/cs1.png" 
                alt="Case Studies Hero" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background element for the image */}
            <div className="absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-br from-[#0EA5E9]/20 to-[#EA580C]/20 blur-xl opacity-70" />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="section-shell relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1280px] mx-auto">
            {caseStudies.slice(0, 9).map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#ececec] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#f97316]"
              >
                <div className="h-48 w-full overflow-hidden shrink-0">
                  <img src={study.image || '/About_Hero.png'} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="flex w-full flex-1 flex-col p-4 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-[#EA580C]">
                      {study.category}
                    </span>
                    <div className="h-2.5 w-12 shrink-0 rounded-full bg-gradient-to-r from-[#f97316] to-[#0EA5E9]" />
                  </div>

                  <h3 className="max-w-sm text-[1.25rem] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#0EA5E9]">
                    {study.title}
                  </h3>

                  <p className="mt-4 mb-4 text-[16px] leading-relaxed text-justify text-[#5f6368] flex-1 line-clamp-4 whitespace-pre-line">
                    {study.summary}
                  </p>

                  <div className="mt-auto h-px w-full bg-[#ececec] shrink-0" />

                  <div className="mt-4 flex items-center justify-between shrink-0">
                    <Link
                      className="flex items-center gap-2 text-sm font-semibold text-[#f97316] transition-all duration-300 group-hover:gap-4"
                      to={`/case-studies/${study.slug}`}
                    >
                      Read more
                      <span className="transition-colors duration-300 group-hover:text-[#EA580C]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default CaseStudies