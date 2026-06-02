import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, X } from 'lucide-react'
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
    projects: [
      { id: 1, title: 'Demo Project 1' },
      { id: 2, title: 'Demo Project 2' },
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
    projects: [
      { id: 1, title: 'Cooper Vision USA' },
      { id: 2, title: 'Envision HealthCare' },
      { id: 3, title: 'Resource Innovation USA' },
      { id: 4, title: 'Clayco' },
      { id: 5, title: 'American Express' },
      { id: 6, title: 'Ford Motors' },
      { id: 7, title: 'Rheem Manufacturing' },
      { id: 8, title: 'United Lex' },
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
    projects: [
      { id: 1, title: 'M Group' },
      { id: 2, title: 'Herriot Watt University' },
      { id: 3, title: 'Crawford and Company' },
      { id: 4, title: 'The River Side Group' },
      { id: 5, title: 'AT & T' },
      { id: 6, title: 'Technip Energies' },
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
    projects: [
      { id: 1, title: 'Bukhatir' },
      { id: 2, title: 'Higher College Technologies' },
      { id: 3, title: 'Emaar' },
      { id: 4, title: 'Naresco' },
      { id: 5, title: 'Aster' },
      { id: 6, title: 'Abu Dhabi Islamic Bank' },
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
          <Badge className="mb-3 border-sky-200 bg-white text-[#EA580C]">Global Delivery</Badge>
          <h2 className="mx-auto max-w-4xl text-[40px] font-bold leading-[1.05] text-black">
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
              <div 
                key={code}
                className="absolute z-10"
                style={{ left: country.x, top: country.y }}
              >
                <motion.button
                  className="group absolute flex flex-col items-center justify-center"
                  style={{ transform: 'translate(-50%, -50%)', width: '40px', height: '40px' }}
                  onClick={() => {
                    setSelectedCountry(selectedCountry === code ? null : code)
                    setSlideIndex(0)
                  }}
                  type="button"
                >
                  {/* Central Dot Pointer (instead of teardrop) */}
                  <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-125 shadow-md" style={{ background: country.color }}>
                    <motion.span
                      className="pointer-events-none absolute inset-0 rounded-full"
                      animate={{ scale: [1, 4], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                      style={{ border: `1.5px solid ${country.color}` }}
                    />
                    <motion.span
                      className="pointer-events-none absolute inset-0 rounded-full"
                      animate={{ scale: [1, 4], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                      style={{ border: `1.5px solid ${country.color}` }}
                    />
                    <div className="relative z-20 h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Label (positioned absolutely below the pointer) */}
                  <div className="absolute top-[100%] whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-[11px] font-bold text-black shadow-md border border-slate-100 transition-colors duration-200 group-hover:border-slate-200">
                    {country.name}
                  </div>
                </motion.button>
              </div>
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
                      <h4 className="text-base font-bold leading-6 text-black">{activeProject.title}</h4>
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

      </div>
    </section>
  )
}

export default GlobalDelivery
