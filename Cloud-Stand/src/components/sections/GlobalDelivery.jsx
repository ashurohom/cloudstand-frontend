import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, X } from 'lucide-react'

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
  const [selectedCountry, setSelectedCountry] = useState('US')
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className="section-padding overflow-hidden bg-[#f5f9ff]">
      <div className="section-shell mb-12 text-center">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-normal text-[#EA580C]">
          Global Delivery
        </span>
        <h2 className="mb-4 text-4xl font-bold leading-tight text-[#0f172a] md:text-5xl lg:text-6xl">
          Delivering Value
          <br />
          Across the World
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-[#5f6f89]">
          We partner with organizations across the globe to deliver Oracle Cloud transformation with measurable business impact.
        </p>
      </div>

      <div className="relative w-full" style={{ height: '520px' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
          alt="World Map"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            filter: 'grayscale(1) opacity(0.15)',
            objectPosition: 'center',
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
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            type="button"
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 2.2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              style={{ background: country.color }}
            />

            <div
              className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-lg"
              style={{ background: country.color }}
            >
              {country.flag}
            </div>

            <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#0f172a] px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {country.name} · {country.projects.length} Projects
            </div>
          </motion.button>
        ))}

        <AnimatePresence>
          {selectedCountry && (() => {
            const country = countryProjects[selectedCountry]
            const project = country.projects[slideIndex]

            return (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-8 left-8 z-20 w-80 overflow-hidden rounded-2xl bg-white shadow-soft"
                style={{
                  border: '1px solid #d7e5ff',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="flex items-center justify-between px-5 py-4"
                  style={{
                    background: `${country.color}15`,
                    borderBottom: '1px solid #d7e5ff',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#0f172a]">{country.flag}</span>
                    <div>
                      <p className="text-sm font-bold text-[#0f172a]">{country.name}</p>
                      <p className="text-xs text-[#5f6f89]">
                        {slideIndex + 1} of {country.projects.length} Projects
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5f9ff] text-[#5f6f89] transition-all duration-200 hover:bg-[#EA580C] hover:text-white"
                    type="button"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 py-4"
                  >
                    <span
                      className="mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                      style={{ background: country.color }}
                    >
                      {project.service}
                    </span>
                    <h4 className="mb-1 text-sm font-bold text-[#0f172a]">{project.title}</h4>
                    <p className="mb-3 text-xs leading-relaxed text-[#5f6f89]">{project.description}</p>
                    <div className="flex items-center gap-1.5 rounded-lg bg-[#eef5ff] px-3 py-2">
                      <TrendingUp className="h-3 w-3 text-[#0057ff]" />
                      <p className="text-xs font-semibold text-[#0057ff]">{project.result}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between px-5 pb-4">
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setSlideIndex((p) => (p - 1 + country.projects.length) % country.projects.length)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d7e5ff] text-[#5f6f89] transition-all duration-200 hover:border-[#EA580C] hover:bg-[#EA580C] hover:text-white"
                      type="button"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setSlideIndex((p) => (p + 1) % country.projects.length)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d7e5ff] text-[#5f6f89] transition-all duration-200 hover:border-[#EA580C] hover:bg-[#EA580C] hover:text-white"
                      type="button"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="flex gap-1">
                    {country.projects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        style={{
                          width: i === slideIndex ? '20px' : '6px',
                          height: '6px',
                          borderRadius: '9999px',
                          background: i === slideIndex ? country.color : '#d7e5ff',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                        }}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </AnimatePresence>
      </div>

      <div className="section-shell mt-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 rounded-2xl p-4 text-left transition-all duration-200"
              style={{
                border: selectedCountry === code ? `2px solid ${country.color}` : '1px solid #d7e5ff',
                background: selectedCountry === code ? `${country.color}10` : '#ffffff',
              }}
              type="button"
            >
              <span className="text-2xl font-bold text-[#0f172a]">{country.flag}</span>
              <div>
                <p className="text-sm font-semibold text-[#0f172a]">{country.name}</p>
                <p className="text-xs text-[#5f6f89]">{country.projects.length} Projects</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlobalDelivery
