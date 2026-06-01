import { useEffect, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import HeroSection from '../components/sections/HeroSection'
import GlobalDelivery from '../components/sections/GlobalDelivery'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { caseStudies } from '../data/caseStudies'
import { testimonials } from '../data/testimonials'
import {
  fadeUp,
  pageVariants,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
} from '../animations/variants'

const deliveryModelSteps = [
  {
    title: 'Discover & Assess',
    description: 'Business Discovery / Analysis',
  },
  {
    title: 'Design & Align',
    description: 'Solution Design, CRP & Business Alignment',
  },
  {
    title: 'Build, Test & Validate',
    description: 'Configuration, SIT, UAT, Integration & Data Validation',
  },
  {
    title: 'Prepare & Transition',
    description: 'Go-Live Readiness & Cutover Management',
  },
  {
    title: 'Go-Live & Stabilize',
    description: 'Production Deployment & Operational Stabilization',
  },
  {
    title: 'Hypercare & Continuous Enablement',
    description: 'Business Transparency, KT, & Real time use of CloudStand Accelerators',
  },
]

const clientExperienceList = [
  'Bukhatir', 'M Group', 'Herriat Watt University', 'Cooper Vision USA',
  'Higher College Technologies', 'Royal Cargo', 'Envision HealthCare',
  'Crawford and Company', 'The River Side Group', 'Hoya INC',
  'Resource Innovation USA', 'Emaar', 'Naresco', 'Aster',
  'Abu Dhabi Islamic Bank', 'Almana Group', 'Vodafone', 'Clayco',
  'Rashed al Rashed', 'Zameel', 'MHp Group', 'American Express',
  'Ford Motors', 'AT & T', 'Technip Energies', 'Zameel Group',
  'Rheem Manufacturing', 'United Lex'
]

const marqueeRow1 = clientExperienceList.slice(0, 14)
const marqueeRow2 = clientExperienceList.slice(14)
const overviewStats = [
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 30, suffix: '+', label: 'Clients' },
  { value: 15, suffix: '+', label: 'Experts' },
  { value: 3, suffix: '', label: 'Countries' },
]

const whyPartnerPoints = [
  'Proven global expertise delivering Oracle solutions across major international markets',
  'Center of Excellence driving AI automation and reusable accelerators',
  'Delivery-first approach ensuring measurable outcomes with precision and accountability',
  'Experienced architects and dynamic professionals driving innovation and agility',
  'Real onsite experience enabling practical, scalable, business-driven solutions delivery',
  <>Complementary health checks, audits, and access to in-house <br /> tools</>,
  'Global delivery model enabling 24/7 support and seamless execution',
  'Business-enabled delivery with documentation, KT, transparency, and reduced dependency',
  'Committed to long-term delivery excellence and trusted client partnerships',
  'Flexible, cost-effective engagement with on-demand support and complementary resources',
]

const whyPartnerStats = [
  { value: 50, suffix: '+', label: 'Enterprise Transformation Projects' },
  { value: 98, suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 5, suffix: '+', label: 'Global Delivery Regions' },
  { value: 15, suffix: '+', label: 'Oracle Certified Specialists' },
]

function HomeSectionTitle({ eyebrow, title, subtitle, showLine = true, className = '' }) {
  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 items-start text-left ${className}`}>
      {eyebrow ? <Badge className="bg-white">{eyebrow}</Badge> : null}
      <motion.h2
        initial={{ opacity: 0, y: 35, scale: 0.93 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold leading-tight text-black sm:text-4xl text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {showLine ? (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="mt-2 h-1 w-16 rounded-full bg-sky-500"
        />
      ) : null}
      {subtitle ? <p className="text-base leading-7 text-black sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

function Home() {
  useDocumentTitle('CloudStand Consulting | Oracle Cloud Transformation Partner')
  const leftPartnerPoints = whyPartnerPoints.slice(0, 5)
  const rightPartnerPoints = whyPartnerPoints.slice(5)
  const featuredCaseStudies = caseStudies.slice(0, 3).map((study, index) => ({
    ...study,
    accent: '#EA580C',
  }))
  const enhancedTestimonials = testimonials
  const [current, setCurrent] = useState(0)
  const total = enhancedTestimonials.length

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 4000)

    return () => clearInterval(timer)
  }, [total])

  return (
    <motion.main animate="animate" className="overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <HeroSection />

      {/* Thin Animated Marquee Strip */}
      <div className="flex overflow-hidden bg-[#0f172a] py-2.5 border-y border-[rgba(234,88,12,0.2)]">
        <div
          className="flex whitespace-nowrap"
          style={{
            width: 'max-content',
            animation: 'marquee 80s linear infinite',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center text-[11px] sm:text-[13px] font-semibold tracking-[0.15em] text-white/80 uppercase">
              <span className="mx-5">Oracle HCM</span>
              <span className="text-[#EA580C]">•</span>
              <span className="mx-5">ERP Modernization</span>
              <span className="text-[#EA580C]">•</span>
              <span className="mx-5">AI Transformation</span>
              <span className="text-[#EA580C]">•</span>
              <span className="mx-5">Intelligent Integrations</span>
              <span className="text-[#EA580C]">•</span>
              <span className="mx-5">Redwood UX</span>
              <span className="text-[#EA580C]">•</span>
              <span className="mx-5">Payroll Transformation</span>
              <span className="text-[#EA580C]">•</span>
              <span className="mx-5">Global Delivery</span>
              <span className="text-[#EA580C] mr-5">•</span>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white py-8 sm:py-9">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4"
          >
            {overviewStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center justify-center border-r border-sky-200 px-3 py-4 last:border-r-0"
              >
                <AnimatedCounter
                  className="mb-1 inline-block text-3xl font-bold text-sky-500"
                  delay={i * 0.12}
                  duration={1800}
                  suffix={stat.suffix}
                  value={stat.value}
                />
                <span className="text-xs font-medium text-black sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlobalDelivery />

      <section 
        className="relative overflow-hidden py-20 sm:py-24 border-y border-sky-100/50"
        style={{
          backgroundColor: '#f8fafc',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z' fill='rgba(14,165,233,0.02)'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {(() => {
          const clientLogos = [
            "1_Bukhatir.png", "2_mgroup_primarylogo_gradient_bluetext_rgb.png", "3. Herriat Watt University.png",
            "4. CooperVision.png", "5. Higher College Technologies.png", "6. Royal Cargo.png",
            "7. Envision HealthCare.png", "8. Crawford and Company.png", "9. The River Side Group.png",
            "10. Hoya Inc.png", "11. Resource Innovation USA.png", "12. Emaar UAE.png",
            "13. Naresco.png", "14. Aster.png", "15. Abu Dhabi Islamic Bank.png",
            "16. Almana Group.png", "17. Vodafone.png", "18. Clayco USA.png",
            "19. Rashed al Rashed.png", "20_Zameel.png", "21_MHp Group.png",
            "22_American Express.png", "23_Ford Motors.png", "24_AT & T.png",
            "25_Technip Energies.png", "26_Zameel Group.png", "27_Rheem Manufacturing.png",
            "28_United Lex.png"
          ];
          return (
            <>
              <style>
                {`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 60s linear infinite;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}
              </style>
              <div className="section-shell relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-16">
                  <h2 className="text-[40px] font-bold tracking-tight text-black">
                    Proven Team Experience
                  </h2>
                  <p className="mt-6 text-[17px] sm:text-[18px] leading-relaxed text-slate-600 font-medium">
                    Our team brings global delivery experience across North America, EMEA, and APAC, contributing to successful Oracle transformation programs through strategic partnerships and subcontracting models.
                  </p>
                </div>
              </div>

              {/* Full Width Marquee (Outside section-shell) */}
              <div className="w-full relative overflow-hidden py-8 z-10">
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent" />
                
                <div className="animate-marquee flex w-max gap-6 items-center px-4">
                  {[...clientLogos, ...clientLogos].map((logo, idx) => (
                    <div
                      key={idx}
                      className="group relative flex h-[130px] w-[240px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <img
                        src={`/Client Logo/Processed/${logo}`}
                        alt="Client Logo"
                        className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          );
        })()}
      </section>

      {/* Why Partner With CloudStand — Redesigned Premium Section */}
      <section
        className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 60,30 0,60' fill='rgba(14,165,233,0.06)'/%3E%3Cpolygon points='0,60 60,90 0,120' fill='rgba(234,88,12,0.06)'/%3E%3Cpolygon points='100,10 40,50 100,90' fill='rgba(0,0,0,0.04)'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Subtle geometric SVG dot-grid background texture */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="why-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-dot-grid)" />
        </svg>

        {/* Subtle corner accent blobs */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)' }}
        />

        <div className="section-shell relative z-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            variants={fadeUp}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            <Badge className="border-sky-200 bg-white text-[#EA580C]">Why Partner With CloudStand</Badge>
            <h2 className="mt-6 text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] text-black">
              Why Global Enterprises Choose Cloudstand
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-sky-500" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black sm:text-lg">
              We combine deep Oracle expertise, agile delivery, and transformation-focused consulting to help organizations modernize operations with confidence
            </p>
          </motion.div>

          <div className="mt-14 grid items-start gap-6 md:grid-cols-2 max-w-6xl mx-auto">

            {/* ── LEFT: Checklist ── */}
            <motion.div
              initial="hidden"
              variants={slideLeft}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
              className="flex flex-col"
            >
              <div className="grid gap-3">
                {leftPartnerPoints.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -1.5, boxShadow: '0 10px 28px rgba(14,165,233,0.09)' }}
                    className="group flex items-center gap-4 rounded-xl border border-[rgba(14,165,233,0.25)] bg-white px-5 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[rgba(14,165,233,0.5)]"
                  >
                    <span className="inline-flex shrink-0 items-center justify-center text-[#EA580C]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <p className="text-[15px] font-medium leading-relaxed text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Checklist ── */}
            <motion.div
              initial="hidden"
              variants={slideRight}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
              className="flex flex-col"
            >
              <div className="grid gap-3">
                {rightPartnerPoints.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -1.5, boxShadow: '0 10px 28px rgba(14,165,233,0.09)' }}
                    className="group flex items-center gap-4 rounded-xl border border-[rgba(14,165,233,0.25)] bg-white px-5 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[rgba(14,165,233,0.5)]"
                  >
                    <span className="inline-flex shrink-0 items-center justify-center text-[#EA580C]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <p className="text-[15px] font-medium leading-relaxed text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-[#EA580C] px-5 py-3 text-sm font-medium text-[#EA580C] transition-all duration-300 hover:bg-[#EA580C] hover:text-white"
              to="/about"
            >
              Explore Our Expertise
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Premium Trust Strip Below CTA */}
            <motion.div
              className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <span>Oracle Cloud</span>
              <span className="text-sky-300">|</span>
              <span>AI Transformation</span>
              <span className="text-sky-300">|</span>
              <span>Redwood Expertise</span>
              <span className="text-sky-300">|</span>
              <span>Global Delivery</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-18">
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[55%] w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z' fill='rgba(14,165,233,0.04)'/%3E%3Cpath d='M0,70 Q25,20 50,70 T100,70 L100,100 L0,100 Z' fill='rgba(234,88,12,0.04)'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
          }}
        />
        <div className="section-shell relative z-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Badge className="mb-6">Transformation Stories</Badge>

            <h2 className="text-[40px] font-black leading-[1.15] tracking-tight text-black">
              Driving Scalable Business
              <br />
              Transformation Across Industries
            </h2>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black sm:text-lg">
              From workforce transformation to enterprise integrations, we help organizations modernize operations, improve efficiency, and create long-term business value.
            </p>
          </div>

          <motion.div
            className="mt-12 grid gap-6 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {featuredCaseStudies.map((study, index) => (
              <motion.div key={study.slug} variants={staggerItem}>
                <div
                  className="group relative flex min-h-[345px] overflow-hidden rounded-[26px] border border-[#ececec] bg-white p-4 transition-all duration-500 hover:-translate-y-2 hover:border-[#f97316]"
                >
                  <div className="flex w-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-[#EA580C]">
                        {study.category}
                      </span>

                      <div className="h-2.5 w-12 rounded-full bg-gradient-to-r from-[#f97316] to-[#0EA5E9]" />
                    </div>

                    <h3 className="max-w-sm min-h-[104px] text-[1.25rem] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#0EA5E9]">
                      {study.title}
                    </h3>

                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0EA5E9]">
                      {study.company}
                    </p>

                    <p className="mt-4 min-h-[78px] text-[13px] leading-6 text-[#5f6368]">
                      {study.summary}
                    </p>

                    <div className="mt-auto h-px w-full bg-[#ececec]" />

                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        className="flex items-center gap-2 text-sm font-semibold text-[#f97316] transition-all duration-300 group-hover:gap-4"
                        to="/case-studies"
                      >
                        {study.cta || 'View Story'}
                        <span className="transition-colors duration-300 group-hover:text-[#EA580C]">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#FFFFFF] py-12 sm:py-16 lg:py-20"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.04)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.04)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[40px] font-bold leading-tight tracking-tight text-[#000000]">
              Oracle Transformation Delivery Model
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#000000]/80">
              A structured, business-focused delivery framework designed to accelerate Oracle Cloud transformation with reduced risk, strong governance, data integrity, and long-term business sustainability.
            </p>
          </div>

          <div className="mt-16 w-full overflow-x-auto pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="min-w-[1000px] w-full relative">
              <div className="grid grid-cols-6 gap-2 relative">
                {/* Central Horizontal Line */}
                <motion.div
                  className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#EA580C] -translate-y-1/2 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, margin: '-50px' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ originX: 0 }}
                />

                {deliveryModelSteps.map((step, index) => {
                  const isTop = index % 2 === 0
                  const titleColor = '#0EA5E9'
                  const circleColor = '#EA580C'

                  return (
                    <div key={step.title} className="relative flex justify-center h-[280px]">
                      {/* Vertical Line */}
                      <div
                        className={`absolute left-1/2 w-[1px] bg-[#EA580C] -translate-x-1/2 z-0 ${isTop ? 'bottom-1/2 h-7' : 'top-1/2 h-7'
                          }`}
                      />

                      {/* Popping Ring Node */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10">
                        <motion.div
                          animate={{
                            scale: [0.6, 1.2, 1.8, 2.4],
                            opacity: [0, 1, 0.6, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                            times: [0, 0.15, 0.5, 1],
                            delay: index * 0.15
                          }}
                          className="absolute w-4 h-4 rounded-full border-[2px] bg-transparent"
                          style={{ borderColor: circleColor }}
                        />
                        <div
                          className="relative w-2 h-2 rounded-full z-20"
                          style={{ backgroundColor: circleColor }}
                        />
                      </div>

                      {/* Content */}
                      <motion.div
                        className={`absolute w-[95%] px-1 text-center flex flex-col items-center z-30 ${isTop ? 'bottom-[calc(50%+28px)]' : 'top-[calc(50%+28px)]'
                          }`}
                        initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: '-50px' }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 80
                        }}
                      >
                        <h3 className="text-[18px] font-medium mb-1.5" style={{ color: titleColor }}>
                          {step.title}
                        </h3>
                        <p className="text-[14px] font-normal text-black leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(255,255,255,1), rgba(255,255,255,1))
            `,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundPosition: '0 0, 0 0',
            backgroundSize: '24px 24px, 24px 24px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0, 0, 0, 0.18) 1px, transparent 1px)',
            backgroundPosition: '12px 12px',
            backgroundSize: '18px 18px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-52 opacity-[0.62]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.92) 100%), repeating-linear-gradient(120deg, rgba(0,0,0,0.08) 0 2px, transparent 2px 14px)',
          }}
        />

        <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <Badge className="border-[rgba(234,88,12,0.25)] bg-white text-[#EA580C] shadow-[0_10px_24px_rgba(14,165,233,0.08)]">
              Testimonials
            </Badge>
            <h2 className="mt-5 text-[40px] font-bold leading-tight text-black">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-black sm:text-lg">
              Trusted by growing enterprises for Oracle Cloud transformation, implementation and long-term support.
            </p>
          </div>

          <div className="min-w-0 h-[480px] sm:h-[400px] lg:h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-3xl"
                exit={{ opacity: 0, x: -36 }}
                initial={{ opacity: 0, x: 42 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-4">
                  <svg
                    aria-hidden="true"
                    className="h-10 w-10 text-[#EA580C]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="-mt-1 text-sm leading-relaxed text-black sm:text-base lg:text-lg lg:leading-[1.7]">
                  {enhancedTestimonials[current].quote}
                </blockquote>

                <div className="mt-6 h-[3px] w-24 rounded-full bg-[#EA580C]" />

                <div className="mt-6 flex flex-col gap-1 text-sm sm:text-base">
                  <span className="text-lg font-semibold text-[#EA580C]">{enhancedTestimonials[current].name}</span>
                  <span className="text-black/70">
                    {enhancedTestimonials[current].designation}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="font-semibold uppercase tracking-[0.12em] text-black">{enhancedTestimonials[current].region}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-5">
              {enhancedTestimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`rounded-full border-0 transition-all duration-300 ${i === current ? 'w-12 bg-[#D76527]' : 'w-4 bg-[#CFD7E6]'
                    } h-4 cursor-pointer`}
                  onClick={() => setCurrent(i)}
                  type="button"
                />
              ))}
            </div>
          </div>
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
                <div className="text-base font-extrabold uppercase tracking-normal text-white drop-shadow-lg">Value You Receive</div>
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

export default Home
