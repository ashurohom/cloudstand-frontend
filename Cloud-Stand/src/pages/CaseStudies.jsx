import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { caseStudies } from '../data/caseStudies'
import { pageVariants } from '../animations/variants'

const SVGIcon = () => (
  <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-sm">
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
      <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
      <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
    </svg>
  </span>
);

function CaseStudies() {
  useDocumentTitle('Case Studies | CloudStand Oracle Cloud Success Stories')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="relative overflow-hidden bg-white pt-16 pb-14 lg:min-h-[72vh] lg:flex lg:items-center">
        {/* DESIGN 21 BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 50,50 0,100 20,100 70,50 20,0' fill='rgba(14,165,233,0.08)'/%3E%3Cpolygon points='30,0 80,50 30,100 50,100 100,50 50,0' fill='rgba(234,88,12,0.06)'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 1,
          }}
        />

        {/* EXTRA SOFT WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/40" />

        {/* SOFT GLOW */}
        <div className="absolute left-[-100px] top-[-100px] h-[340px] w-[340px] rounded-full bg-[#0EA5E9]/[0.08] blur-3xl" />
        <div className="absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#EA580C]/[0.10] blur-3xl" />

        <div className="section-shell relative z-10">
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Case Studies</Badge>
          </motion.div>

          <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

          <div className="max-w-6xl pb-2">
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-[30px] font-bold leading-[0.95] tracking-[-0.06em] text-black md:text-[44px] lg:text-[48px]"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
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
              className="mt-6 max-w-[760px] text-[20px] leading-[1.7] text-[#475569]"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Explore Oracle Cloud transformation programs,
              enterprise modernization initiatives and measurable
              business outcomes delivered by CloudStand Consulting.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 lg:py-20">
        <div className="section-shell relative z-10 flex flex-col gap-16 lg:gap-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-[32px] border border-[rgba(14,165,233,0.3)] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-10 flex flex-col items-start lg:items-center text-left lg:text-center">
                <Badge className="mb-4">Case Study {index + 1}</Badge>
                <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#000000] mt-4">
                  {study.title}
                </h2>
              </div>
              
              <div className="space-y-12">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Overview</h3>
                  {study.overview.map((para, i) => (
                    <p key={i} className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Business Challenges */}
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Business Challenges</h3>
                  <ul className="space-y-2.5">
                    {study.businessChallenges.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <SVGIcon />
                        <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Delivered & Key Components */}
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Solution Delivered</h3>
                  <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-5">
                    {study.solutionDelivered}
                  </p>
                  <p className="font-bold text-[#0EA5E9] mb-3 text-[15px] xl:text-base">Key Solution Components:</p>
                  <ul className="space-y-2.5">
                    {study.keyComponents.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <SVGIcon />
                        <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Governance */}
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Governance & Control Enhancements</h3>
                  <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-4">
                    {study.governanceIntro}
                  </p>
                  <ul className="space-y-2.5">
                    {study.governance.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <SVGIcon />
                        <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Impact & Outcome */}
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Business Impact & Outcome</h3>
                  <ul className="space-y-2.5 mb-8">
                    {study.businessImpact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <SVGIcon />
                        <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm">
                    <p className="font-bold text-[#EA580C] mb-2 text-lg">Outcome</p>
                    <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}

export default CaseStudies