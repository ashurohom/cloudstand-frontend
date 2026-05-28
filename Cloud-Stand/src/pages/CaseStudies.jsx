import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ArrowRight } from 'lucide-react'

import Badge from '../components/ui/Badge'



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
<section
  className="relative overflow-hidden bg-white pt-24 pb-24 lg:min-h-[88vh] lg:flex lg:items-center"
>

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

    {/* BADGE */}
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{
        duration: 0.4,
        delay: 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <Badge>Case Studies</Badge>

    </motion.div>

    {/* LINE */}
    <div className="mt-7 h-1 w-16 rounded-full bg-[#0EA5E9]" />

    {/* CONTENT */}
    <div className="max-w-6xl">

      {/* HEADING */}
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 25 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        className="mt-7 text-[30px] md:text-[44px] lg:text-[48px] font-bold leading-[0.95] tracking-[-0.06em] text-black"
        style={{
          fontFamily: 'Open Sans, sans-serif',
        }}
      >

        Transformation
        <br />

        outcomes that
        <br />

        stand up in the boardroom

      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="mt-8 max-w-[760px] text-[20px] leading-[1.8] text-[#475569]"
        style={{
          fontFamily: 'Open Sans, sans-serif',
        }}
      >

        Explore Oracle Cloud transformation programs,
        enterprise modernization initiatives and measurable
        business outcomes delivered by CloudStand Consulting.

      </motion.p>

    </div>

  </div>

</section>
<section className="relative overflow-hidden bg-white py-24">

  {/* SOFT ORANGE + BLUE BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden">

    {/* ORANGE GLOW */}
    <div className="absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#EA580C]/[0.08] blur-3xl" />

    {/* BLUE GLOW */}
    <div className="absolute left-[-100px] top-0 h-[320px] w-[320px] rounded-full bg-[#0EA5E9]/[0.05] blur-3xl" />

  </div>

  <div className="section-shell relative z-10">

    {/* TOP */}
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

      {/* LEFT */}
      <div className="max-w-[760px]">

        <Badge>Filter by Service</Badge>

        <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

        <h2
          className="mt-7 text-[30px] md:text-[44px] lg:text-[48px] font-bold leading-[0.95] tracking-[-0.06em] text-black"
          style={{
            fontFamily: 'Open Sans, sans-serif',
          }}
        >

          Outcomes across
          <br />

          Oracle Cloud priorities

        </h2>

      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
            className={`rounded-full border px-5 py-3 text-[13px] font-semibold transition-all duration-300 ${
              activeFilter === filter
                ? 'border-[#D63B25] bg-[#D63B25] text-white shadow-[0_12px_30px_rgba(214,59,37,0.14)]'
                : 'border-[#e2e8f0] bg-white text-black hover:border-[#EA580C] hover:text-[#EA580C]'
            }`}
          >

            {filter}

          </button>

        ))}

      </div>

    </div>

    {/* CASE STUDIES */}
   {/* CASE STUDIES */}
<AnimatePresence mode="wait">

  <motion.div
    key={activeFilter}
    animate="visible"
    initial="hidden"
    exit={{
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    }}
    variants={staggerContainer}
    className="mt-16 space-y-12"
  >

    {filteredStudies.map((study, index) => (

      <motion.div
        key={study.slug}
        variants={staggerItem}
      >

        <motion.div
          whileHover={{ y: -2 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`flex w-full ${
            index % 2 !== 0
              ? 'justify-end'
              : 'justify-start'
          }`}
        >

{/* CARD */}
<div className="w-full max-w-[860px] overflow-hidden rounded-[30px] border border-[#dbeafe] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]">

  {/* INNER */}
  <div className="flex h-full">

    {/* LEFT CATEGORY */}
    <div className="flex-shrink-0">

      <div className="flex h-full w-[46px] items-center justify-center bg-[#ffe4d6]">

        <p className="text-[18px] font-bold tracking-[0.18em] text-[#EA580C]">

          {study.category.split('').map((letter, i) => (

            <span key={i} className="block text-center leading-[2]">

              {letter}

            </span>

          ))}

        </p>

      </div>

    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 p-6 md:p-8">

      {/* TITLE */}
      <h3
        className="text-[26px] md:text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-black"
        style={{
          fontFamily: 'Open Sans, sans-serif',
        }}
      >

        {study.title}

      </h3>

      {/* CONTENT */}
      <div className="mt-8 space-y-6">

        {/* CHALLENGE */}
        <div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#EA580C]">
            Challenge
          </p>

          <p className="mt-2 text-[15px] leading-7 text-[#64748b]">

            {study.challenge}

          </p>

        </div>

        {/* SOLUTION */}
        <div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#EA580C]">
            Solution
          </p>

          <p className="mt-2 text-[15px] leading-7 text-[#64748b]">

            {study.solution}

          </p>

        </div>

        {/* RESULT */}
        <div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#EA580C]">
            Result
          </p>

          <p className="mt-2 text-[15px] leading-7 font-semibold text-black">

            {study.result}

          </p>

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-8 flex items-center justify-between border-t border-[#eef2f7] pt-5">

        <div className="flex items-center gap-2">

          <div className="h-2 w-2 rounded-full bg-[#0EA5E9]" />

          <p className="text-[11px] font-medium text-[#94a3b8]">
            Oracle Cloud Transformation
          </p>

        </div>

        <button className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#0EA5E9] transition-all duration-300 hover:gap-3">

          View Details

          <ArrowRight className="h-3.5 w-3.5" />

        </button>

      </div>

    </div>

  </div>

</div>

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
