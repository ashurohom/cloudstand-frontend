import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, ChevronLeft, ChevronRight, Globe, ShieldCheck, TrendingUp, Users, X } from 'lucide-react'
import Badge from '../ui/Badge'

const countryProjects = {
  IN: {
    name: 'India',
    flag: 'IN',
    flagIcon: '🇮🇳',
    flagSrc: 'https://flagcdn.com/w40/in.png',
    color: '#f97316',
    x: '72%',
    y: '36%',
    summary: 'Our delivery hub powering global projects with skilled Oracle Cloud professionals.',
    projects: [
      {
        id: 1,
        title: 'Oracle HCM Implementation',
        client: 'Manufacturing Enterprise',
        duration: '4 Months',
        service: 'HCM',
        result: '60% faster HR processing',
        description: 'Our delivery hub powering global projects with skilled Oracle Cloud professionals.',
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
    flagIcon: '🇺🇸',
    flagSrc: 'https://flagcdn.com/w40/us.png',
    color: '#2563eb',
    x: '22%',
    y: '22%',
    summary: 'Delivering end-to-end Oracle Cloud solutions for enterprises across industries.',
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
    flagIcon: '🇬🇧',
    flagSrc: 'https://flagcdn.com/w40/gb.png',
    color: '#dc2626',
    x: '48%',
    y: '12%',
    summary: 'Enabling digital transformation with Oracle Cloud expertise and local knowledge.',
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
    flagIcon: '🇦🇪',
    flagSrc: 'https://flagcdn.com/w40/ae.png',
    color: '#16a34a',
    x: '63%',
    y: '34%',
    summary: 'Driving innovation and efficiency through Oracle Cloud implementations across the UAE.',
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

const deliveryStats = [
  { value: '4+', label: 'Regions', Icon: Globe },
  { value: '50+', label: 'Global Clients', Icon: Users },
  { value: '100+', label: 'Projects Delivered', Icon: BarChart3 },
  { value: '100%', label: 'Commitment to Excellence', Icon: ShieldCheck },
]

function GlobalDelivery() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const activeCountry = selectedCountry ? countryProjects[selectedCountry] : null
  const activeProject = activeCountry ? activeCountry.projects[slideIndex] : null

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="w-full">
        <div className="section-shell mx-auto mb-6 max-w-5xl text-center sm:mb-7">
          <Badge className="mb-3 border-sky-200 bg-white text-black">Global Delivery</Badge>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.05] text-black sm:text-4xl lg:text-[3.0rem]">
            Oracle Cloud delivery, across regions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-black sm:text-base">
            Local insight, global execution for enterprise transformation programs.
          </p>
        </div>

        <div className="relative mt-2 w-full">
          <div
            className="pointer-events-none absolute left-1/2 top-2 hidden h-20 w-20 -translate-x-1/2 rounded-full blur-3xl md:block"
            style={{ background: 'rgba(14,165,233,0.12)' }}
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
                className="group absolute z-10 flex flex-col items-center"
                style={{
                  left: country.x,
                  top: country.y,
                  transform: 'translate(-50%, -36px)',
                }}
                onClick={() => {
                  setSelectedCountry(selectedCountry === code ? null : code)
                  setSlideIndex(0)
                }}
                type="button"
              >
                {/* Pulse Rings */}
                <motion.span
                  className="absolute top-[36px] left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  animate={{ scale: [1, 2.5], opacity: [0.25, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  style={{ border: `2px solid ${country.color}` }}
                />
                <motion.span
                  className="absolute top-[36px] left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  animate={{ scale: [1, 2], opacity: [0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
                  style={{ background: country.color }}
                />

                {/* SVG Pin */}
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill={country.color} className="h-10 w-10 drop-shadow-md">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-[60%] rounded-full bg-white shadow-sm" />
                </div>

                {/* Label */}
                <div className="mt-1 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-[11px] font-bold text-black shadow-md border border-slate-100 transition-colors duration-200 group-hover:border-slate-200">
                  {country.name}
                </div>
              </motion.button>
            ))}

            <AnimatePresence>
              {activeCountry && activeProject ? (
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-3 right-4 z-20 w-[280px] max-w-[88vw] rounded-[22px] border border-sky-200 bg-white p-4 shadow-[0_18px_45px_rgba(0,0,0,0.12)] md:bottom-5 md:right-8 md:w-[320px]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <img
                          src={activeCountry.flagSrc}
                          alt={`${activeCountry.name} flag`}
                          className="h-5 w-5 rounded-full object-cover"
                        />
                        <p className="text-sm font-semibold text-black">{activeCountry.name}</p>
                      </div>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-black">
                        Project {slideIndex + 1} of {activeCountry.projects.length}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCountry(null)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-200 bg-white text-black transition-colors duration-200 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
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
                      <h4 className="mt-3 text-sm font-bold leading-6 text-black">{activeProject.title}</h4>
                      <p className="mt-2 text-xs leading-6 text-black">{activeProject.description}</p>
                      <div className="mt-3 flex items-center gap-2 rounded-2xl border border-sky-200 bg-sky-50 px-3 py-2">
                        <TrendingUp className="h-3.5 w-3.5 text-sky-500" />
                        <p className="text-xs font-semibold text-sky-500">{activeProject.result}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setSlideIndex((p) => (p - 1 + activeCountry.projects.length) % activeCountry.projects.length)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-200 text-black transition-all duration-200 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
                        type="button"
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setSlideIndex((p) => (p + 1) % activeCountry.projects.length)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-200 text-black transition-all duration-200 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
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
                            background: i === slideIndex ? activeCountry.color : '#bae6fd',
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

        <div className="section-shell mt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                whileHover={{ y: -4 }}
                className="group rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-left shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-sky-200 hover:shadow-[0_14px_40px_rgba(37,99,235,0.10)]"
                style={{
                  boxShadow: selectedCountry === code
                    ? `0 16px 40px rgba(37,99,235,0.10), inset 0 0 0 1px ${country.color}22`
                    : undefined,
                }}
                type="button"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 shadow-sm ring-1 ring-slate-100">
                    <img
                      src={country.flagSrc}
                      alt={`${country.name} flag`}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-[0.98rem] font-bold leading-6 text-black sm:text-[1.05rem]">{country.name}</p>
                </div>
                <div
                  className="mt-3 h-0.5 w-10 rounded-full"
                  style={{ background: selectedCountry === code ? country.color : '#3b82f6' }}
                />
                <div className="mt-3 h-px w-full bg-slate-200" />
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {country.summary}
                </p>
              </motion.button>
            ))}
          </div>

          <div className="mx-auto mt-5 max-w-[58rem] rounded-[22px] border border-slate-200 bg-white px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
              {deliveryStats.map(({ value, label, Icon }, index) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 xl:px-5 xl:[&:not(:last-child)]:border-r xl:[&:not(:last-child)]:border-slate-200"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50">
                    <Icon className="h-4.5 w-4.5 text-[#EA580C]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[1.35rem] font-bold leading-none text-[#0EA5E9]">{value}</p>
                    <p className="mt-0.5 text-[13px] font-medium leading-4.5 text-slate-700">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalDelivery
