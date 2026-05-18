import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, X } from 'lucide-react'
import Badge from '../ui/Badge'

const countryProjects = {
  IN: {
    name: 'India',
    flag: 'IN',
    color: '#FF9933',
    x: '68%',
    y: '46%',
    projects: [
      {
        id: 1,
        title: 'Oracle HCM Implementation',
        client: 'Manufacturing Enterprise',
        duration: '4 Months',
        service: 'HCM',
        result: '60% faster HR processing',
        description: 'Full Oracle HCM Cloud rollout for 3,000 employees across 5 locations in India.',
      },
      {
        id: 2,
        title: 'Oracle ERP Cloud Rollout',
        client: 'Retail Chain',
        duration: '6 Months',
        service: 'ERP',
        result: 'Unified finance across 12 entities',
        description: 'End-to-end ERP implementation covering finance, procurement and supply chain.',
      },
      {
        id: 3,
        title: 'OIC Integration Project',
        client: 'Healthcare Provider',
        duration: '3 Months',
        service: 'OIC',
        result: '8 legacy systems integrated',
        description: 'Seamless Oracle Integration Cloud solution connecting all legacy platforms.',
      },
      {
        id: 4,
        title: 'BI & Analytics Dashboard',
        client: 'Logistics Company',
        duration: '2 Months',
        service: 'BI',
        result: 'Real-time visibility achieved',
        description: 'Custom Oracle BI dashboards for real-time operational reporting.',
      },
    ],
  },
  US: {
    name: 'United States',
    flag: 'US',
    color: '#0057FF',
    x: '18%',
    y: '36%',
    projects: [
      {
        id: 1,
        title: 'Global HCM Transformation',
        client: 'Fortune 500 Firm',
        duration: '8 Months',
        service: 'HCM',
        result: '12,000 employees onboarded',
        description: 'Enterprise-wide Oracle HCM rollout across US, UK and India simultaneously.',
      },
      {
        id: 2,
        title: 'Oracle Payroll Configuration',
        client: 'Financial Services Co.',
        duration: '3 Months',
        service: 'Payroll',
        result: '99.8% payroll accuracy',
        description: 'Full US payroll compliance configuration with multi-state tax setup.',
      },
      {
        id: 3,
        title: 'AI Solutions Implementation',
        client: 'Tech Enterprise',
        duration: '5 Months',
        service: 'AI',
        result: '40% automation achieved',
        description: 'AI-powered workflow automation integrated with Oracle Cloud ecosystem.',
      },
    ],
  },
  GB: {
    name: 'United Kingdom',
    flag: 'GB',
    color: '#3D8BFF',
    x: '45%',
    y: '27%',
    projects: [
      {
        id: 1,
        title: 'ERP Finance Unification',
        client: 'Stratford & Associates',
        duration: '5 Months',
        service: 'ERP',
        result: 'GBP 2M saved in year one',
        description: 'Oracle ERP Cloud deployed across 8 UK legal entities with full reporting.',
      },
      {
        id: 2,
        title: 'BI Dashboard Delivery',
        client: 'Professional Services Firm',
        duration: '6 Weeks',
        service: 'BI',
        result: 'Board-ready dashboards in 6 weeks',
        description: 'Rapid Oracle BI deployment for executive reporting and board presentations.',
      },
    ],
  },
  AE: {
    name: 'United Arab Emirates',
    flag: 'AE',
    color: '#14B8A6',
    x: '58%',
    y: '42%',
    projects: [
      {
        id: 1,
        title: 'UAE WPS Payroll Compliance',
        client: 'Gulf Enterprise Holdings',
        duration: '2 Months',
        service: 'Payroll',
        result: '100% WPS compliance achieved',
        description: 'Oracle Payroll configured for full UAE Wage Protection System compliance.',
      },
      {
        id: 2,
        title: 'OIC Legacy Integration',
        client: 'Emirates Solutions Group',
        duration: '3 Months',
        service: 'OIC',
        result: '8 systems integrated in 90 days',
        description: 'Oracle Integration Cloud connecting 8 legacy systems with zero downtime.',
      },
      {
        id: 3,
        title: 'HCM Regional Rollout',
        client: 'Regional Conglomerate',
        duration: '6 Months',
        service: 'HCM',
        result: '5,000 employees live on Oracle',
        description: 'Full Oracle HCM deployment across GCC region with Arabic localization.',
      },
    ],
  },
}

function GlobalDelivery() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const activeCountry = selectedCountry ? countryProjects[selectedCountry] : null
  const activeProject = activeCountry ? activeCountry.projects[slideIndex] : null

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="w-full">
        <div className="section-shell mx-auto mb-6 max-w-5xl text-center sm:mb-7">
          <Badge className="mb-3 border-accent/20 bg-white/70 text-slate-900">Global Delivery</Badge>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.05] text-[#0f172a] sm:text-4xl lg:text-[3.0rem]">
            Oracle Cloud delivery, across regions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-[#5f6f89] sm:text-base">
            Local insight, global execution for enterprise transformation programs.
          </p>
        </div>

        <div className="relative mt-2 w-full">
          <div
            className="pointer-events-none absolute left-1/2 top-2 hidden h-20 w-20 -translate-x-1/2 rounded-full blur-3xl md:block"
            style={{ background: 'rgba(61,139,255,0.08)' }}
          />

          <div className="relative min-h-[180px] overflow-visible sm:min-h-[220px] md:min-h-[250px] lg:min-h-[280px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
              alt="World Map"
              className="absolute inset-0 h-full w-full object-cover object-center"
              style={{
                filter: 'grayscale(1) opacity(0.14) contrast(0.9)',
                transform: 'scale(1.12)',
              }}
            />

            {Object.entries(countryProjects).map(([code, country]) => (
              <motion.button
                key={code}
                className="group absolute z-10"
                style={{
                  left: country.x,
                  top: country.y,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => {
                  setSelectedCountry(selectedCountry === code ? null : code)
                  setSlideIndex(0)
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                <motion.span
                  className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  animate={{
                    scale: [1, 1.9],
                    opacity: [0.3, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  style={{ background: country.color }}
                />

                <span
                  className="relative block h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0_0_0_6px_rgba(255,255,255,0.75)] transition-transform duration-200 group-hover:scale-110"
                  style={{ background: country.color }}
                />
              </motion.button>
            ))}

            <AnimatePresence>
              {activeCountry && activeProject ? (
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-3 right-4 z-20 w-[280px] max-w-[88vw] rounded-[22px] bg-white/96 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur md:bottom-5 md:right-8 md:w-[320px]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#0f172a]">{activeCountry.flag}</span>
                        <p className="text-sm font-semibold text-[#0f172a]">{activeCountry.name}</p>
                      </div>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#5f6f89]">
                        Project {slideIndex + 1} of {activeCountry.projects.length}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCountry(null)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f8ff] text-[#5f6f89] transition-colors duration-200 hover:bg-[#EA580C] hover:text-white"
                      type="button"
                      aria-label="Close project details"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedCountry}-${slideIndex}`}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -14 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4"
                    >
                      <span
                        className="inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                        style={{ background: activeCountry.color }}
                      >
                        {activeProject.service}
                      </span>
                      <h4 className="mt-3 text-sm font-bold leading-6 text-[#0f172a]">{activeProject.title}</h4>
                      <p className="mt-2 text-xs leading-6 text-[#5f6f89]">{activeProject.description}</p>
                      <div className="mt-3 flex items-center gap-2 rounded-2xl bg-[#f7fbff] px-3 py-2">
                        <TrendingUp className="h-3.5 w-3.5 text-[#0057ff]" />
                        <p className="text-xs font-semibold text-[#0057ff]">{activeProject.result}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setSlideIndex((p) => (p - 1 + activeCountry.projects.length) % activeCountry.projects.length)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d7e5ff] text-[#5f6f89] transition-all duration-200 hover:border-[#EA580C] hover:bg-[#EA580C] hover:text-white"
                        type="button"
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setSlideIndex((p) => (p + 1) % activeCountry.projects.length)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d7e5ff] text-[#5f6f89] transition-all duration-200 hover:border-[#EA580C] hover:bg-[#EA580C] hover:text-white"
                        type="button"
                        aria-label="Next project"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="flex gap-1">
                      {activeCountry.projects.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSlideIndex(i)}
                          style={{
                            width: i === slideIndex ? '18px' : '6px',
                            height: '6px',
                            borderRadius: '9999px',
                            background: i === slideIndex ? activeCountry.color : '#d7e5ff',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                          }}
                          type="button"
                          aria-label={`Show project ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        <div className="section-shell mt-6 border-t border-[#e7eefc] pt-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
            {Object.entries(countryProjects).map(([code, country], i) => (
              <motion.button
                key={code}
                onClick={() => {
                  setSelectedCountry(code)
                  setSlideIndex(0)
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="group flex flex-col items-center justify-center gap-1 rounded-2xl bg-white py-3 text-center transition-colors duration-200 md:px-4 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-[#e7eefc]"
                type="button"
              >
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200"
                  style={{ color: selectedCountry === code ? country.color : '#EA580C' }}
                >
                  {country.flag}
                </span>
                <p className="text-sm font-semibold text-[#0f172a]">{country.name}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalDelivery
