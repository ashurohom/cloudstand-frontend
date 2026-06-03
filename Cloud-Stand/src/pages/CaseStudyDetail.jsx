import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
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

function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find(s => s.slug === slug)

  useDocumentTitle(study ? `${study.title} | CloudStand Case Study` : 'Case Study Not Found')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!study) {
    return <Navigate to="/case-studies" replace />
  }

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="relative overflow-hidden bg-white pt-16 pb-14">
        {/* DESIGN BACKGROUND */}
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
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute left-[-100px] top-[-100px] h-[340px] w-[340px] rounded-full bg-[#0EA5E9]/[0.08] blur-3xl" />
        <div className="absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#EA580C]/[0.10] blur-3xl" />

        <div className="section-shell relative z-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#0EA5E9] transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>{study.category}</Badge>
          </motion.div>

          <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

          <div className="max-w-4xl pb-2">
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-black md:text-[40px] lg:text-[44px]"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {study.title}
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-[20px] leading-[1.7] text-[#475569] whitespace-pre-line"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {study.summary}
              {study.result && (
                <>
                  <br /><br />
                  <span className="font-bold text-black">Result :</span> {study.result}
                </>
              )}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 lg:py-20">
        <div className="section-shell relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[32px] border border-[rgba(14,165,233,0.3)] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="space-y-12">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Detailed Overview</h3>
                {study.region && (
                  <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 font-medium mb-1">
                    <span className="font-bold">Region:</span> {study.region}
                  </p>
                )}
                {study.industry && (
                  <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 font-medium mb-4">
                    <span className="font-bold">Industry:</span> {study.industry}
                  </p>
                )}
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
                {study.keyComponents && study.keyComponents.length > 0 && (
                  <>
                    {study.solutionComponentHeading !== false && (
                      <p className="font-bold text-[#0EA5E9] mb-3 text-[15px] xl:text-base">
                        {study.solutionComponentHeading || 'Key Solution Components:'}
                      </p>
                    )}
                    <ul className={`space-y-2.5 ${study.solutionConclusion ? 'mb-5' : ''}`}>
                      {study.keyComponents.map((item, i) => {
                        const colonIndex = item.indexOf(':');
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <SVGIcon />
                            <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">
                              {colonIndex !== -1 ? (
                                <>
                                  <span className="font-bold text-black">{item.substring(0, colonIndex + 1)}</span>
                                  {item.substring(colonIndex + 1)}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
                {study.solutionConclusion && (
                  <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mt-5 mb-0">
                    {study.solutionConclusion}
                  </p>
                )}
              </div>

              {/* Governance */}
              <div>
                <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">{study.governanceHeading || 'Governance & Control Enhancements'}</h3>
                {Array.isArray(study.governanceIntro) ? (
                  study.governanceIntro.map((para, i) => (
                    <p key={i} className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-4 whitespace-pre-line">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-4">
                    {study.governanceIntro}
                  </p>
                )}
                <ul className="space-y-2.5">
                  {study.governance.map((item, i) => {
                    const colonIndex = item.indexOf(':');
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <SVGIcon />
                        <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">
                          {colonIndex !== -1 ? (
                            <>
                              <span className="font-bold text-black">{item.substring(0, colonIndex + 1)}</span>
                              {item.substring(colonIndex + 1)}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                {study.governanceConclusion && (
                  <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mt-4 mb-0">
                    {study.governanceConclusion}
                  </p>
                )}
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
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div
            className="relative flex flex-col justify-center overflow-hidden rounded-[40px] border border-sky-200 bg-white p-6 sm:p-10 lg:p-12 min-h-[420px]"
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 50,50 0,100 20,100 70,50 20,0' fill='rgba(14,165,233,0.05)'/%3E%3Cpolygon points='30,0 80,50 30,100 50,100 100,50 50,0' fill='rgba(234,88,12,0.04)'/%3E%3C/svg%3E")`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/Video/HPV3.mp4"
            />
            <motion.div
              className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_500px]"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <h2 className="mt-6 max-w-3xl text-[40px] font-bold text-white">
                  Unlock Oracle Cloud Value with Best Practices and Agentic AI
                </h2>
                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Button className="!border-orange-500 !bg-orange-500 !text-white !shadow-none hover:!border-orange-400 hover:!bg-orange-600 hover:!text-white" size="lg" to="/contact" variant="white">
                      Schedule Free System Health Check Analysis
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </div>

              <Card className="p-6 !bg-white/10 backdrop-blur-md !border-white/20">
                <div className="text-[12px] font-extrabold uppercase tracking-normal text-white drop-shadow-lg">Value You Receive</div>
                <ul className="mt-4 space-y-3 text-white font-medium drop-shadow-md lg:whitespace-nowrap">
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">Diagnostic Assessment Reports</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">Fit-Gap Analysis & Recommendation Roadmap</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">240-Hour Complimentary Engagement</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">No-Obligation, Zero-Pressure Approach</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default CaseStudyDetail
