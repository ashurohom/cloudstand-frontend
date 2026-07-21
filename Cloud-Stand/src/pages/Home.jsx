import { useEffect, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../components/ui/Button'
import HealthCheckModal from '../components/ui/HealthCheckModal'
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
  { value: 3, suffix: '', label: 'Global Delivery Centers' },
  { value: 45, suffix: '+', label: 'Oracle Cloud Consultants' },
  { value: 35, suffix: '+', label: 'Project Deliveries' },
  { value: 8, suffix: '+', label: 'Industry Verticals' },
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
      {subtitle ? <p className="text-[16px] leading-7 text-black">{subtitle}</p> : null}
    </div>
  )
}

function Home() {
  useDocumentTitle('Cloudstand Consulting | Home')
  const [isHealthCheckModalOpen, setIsHealthCheckModalOpen] = useState(false)
  const leftPartnerPoints = whyPartnerPoints.slice(0, 5)
  const rightPartnerPoints = whyPartnerPoints.slice(5)
  const featuredCaseStudies = caseStudies.slice(0, 3).map((study, index) => ({
    ...study,
    accent: '#EA580C',
  }))
  const enhancedTestimonials = testimonials
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const total = enhancedTestimonials.length

  useEffect(() => {
    // Force scroll to top on mount to counteract any inherited scroll position during transitions
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 4000)

    return () => clearInterval(timer)
  }, [total, isHovered])

  return (
    <motion.main animate="animate" className="overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <HeroSection />

      <HealthCheckModal 
        isOpen={isHealthCheckModalOpen} 
        onClose={() => setIsHealthCheckModalOpen(false)}
        source="Health Check Analysis"
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col w-full max-w-5xl mx-auto px-2 sm:px-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
              {overviewStats.map((stat, i) => (
                <div key={`stat-${i}`} className="flex flex-col items-center w-full">
                  <AnimatedCounter
                    className="mb-3 text-4xl sm:text-5xl font-bold text-sky-500 text-center"
                    delay={i * 0.12}
                    duration={1800}
                    suffix={stat.suffix}
                    value={stat.value}
                  />
                  <div className="h-[2px] bg-sky-100 my-2 w-[100px]" />
                  <span className="pt-1 text-[13px] sm:text-[15px] font-semibold text-slate-800 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* <GlobalDelivery /> */}

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
                  <h2 className="text-[30px] lg:text-[40px] font-bold tracking-tight text-black">
                    Proven Team Experience
                  </h2>
                  <p className="mt-6 text-[16px] leading-relaxed text-slate-600 font-medium">
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
                      className="group relative flex h-[90px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)]"
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
            <h2 className="mt-6 text-[30px] lg:text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] text-black">
              Why Global Enterprises Choose Cloudstand
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-sky-500" />
            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-7 text-black">
              We combine deep Oracle expertise, agile delivery, and transformation-focused consulting to help organizations modernize operations with confidence
            </p>
          </motion.div>

          <div className="mt-14 grid items-start gap-6 md:grid-cols-2 max-w-6xl mx-auto">

            {/* ── LEFT: Checklist ── */}
            <div className="flex flex-col">
              <div className="grid gap-3">
                {leftPartnerPoints.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -1.5, boxShadow: '0 10px 28px rgba(14,165,233,0.09)' }}
                    className="group flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-4 rounded-xl border border-[rgba(14,165,233,0.25)] bg-white px-5 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[rgba(14,165,233,0.5)]"
                  >
                    <span className="inline-flex shrink-0 items-center justify-center text-[#EA580C]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <p className="text-[16px] font-medium leading-relaxed text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Checklist ── */}
            <div className="flex flex-col">
              <div className="grid gap-3">
                {rightPartnerPoints.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -1.5, boxShadow: '0 10px 28px rgba(14,165,233,0.09)' }}
                    className="group flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-4 rounded-xl border border-[rgba(14,165,233,0.25)] bg-white px-5 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[rgba(14,165,233,0.5)]"
                  >
                    <span className="inline-flex shrink-0 items-center justify-center text-[#EA580C]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <p className="text-[16px] font-medium leading-relaxed text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

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
              className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[12px] font-bold tracking-widest text-slate-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <span>ORACLE TRANSFORMATION</span>
              <span className="text-sky-300">|</span>
              <span>AI & AUTOMATION CoE</span>
              <span className="text-sky-300">|</span>
              <span>HEALTH CHECK & ADVISORY</span>
              <span className="text-sky-300">|</span>
              <span>MANAGED SUPPORT & TRAINING</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-18">
        <div className="section-shell relative z-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Badge className="mb-6">Transformation Stories</Badge>

            <h2 className="text-[30px] lg:text-[40px] font-black leading-[1.15] tracking-tight text-black">
              Driving Scalable Business
              <br />
              Transformation Across Industries
            </h2>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />
            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-7 text-black">
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
                  className="group relative flex h-full overflow-hidden rounded-[26px] border border-[#ececec] bg-white p-4 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#f97316]"
                >
                  <div className="flex w-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-[#EA580C]">
                        {study.category}
                      </span>

                      <div className="h-2.5 w-12 rounded-full bg-gradient-to-r from-[#f97316] to-[#0EA5E9]" />
                    </div>

                    <h3 className="max-w-sm text-[1.25rem] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#0EA5E9]">
                      {study.title}
                    </h3>

                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-[#5f6368] flex-1 line-clamp-4 whitespace-pre-line">
                      {study.summary}
                      {study.result && (
                        <>
                          <br /><br />
                          <span className="font-bold text-black">Result :</span> {study.result}
                        </>
                      )}
                    </p>

                    <div className="mt-auto h-px w-full bg-[#ececec]" />

                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        className="flex items-center gap-2 text-sm font-semibold text-[#f97316] transition-all duration-300 group-hover:gap-4"
                        to={`/case-studies/${study.slug}`}
                      >
                        {study.cta || 'Read More'}
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

          <motion.div
            className="mt-12 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-[#EA580C] px-5 py-3 text-sm font-medium text-[#EA580C] transition-all duration-300 hover:bg-[#EA580C] hover:text-white"
              to="/case-studies"
            >
              View More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#FFFFFF] py-16 sm:py-20 lg:py-28"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 60,30 0,60' fill='rgba(14,165,233,0.06)'/%3E%3Cpolygon points='0,60 60,90 0,120' fill='rgba(234,88,12,0.06)'/%3E%3Cpolygon points='100,10 40,50 100,90' fill='rgba(0,0,0,0.04)'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="delivery-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#delivery-dot-grid)" />
        </svg>

        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)' }}
        />

        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[30px] lg:text-[40px] font-bold leading-tight tracking-tight text-[#000000]">
              Oracle Transformation Delivery Model
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-relaxed text-[#000000]/80">
              A structured, business-focused delivery framework designed to accelerate Oracle Cloud transformation with reduced risk, strong governance, data integrity, and long-term business sustainability.
            </p>
          </div>

          {/* MOBILE VERTICAL VIEW (hidden on lg and above) */}
          <div className="lg:hidden mt-10 relative px-4 sm:px-8 max-w-lg mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute top-4 bottom-4 left-[27px] sm:left-[43px] w-[2px] bg-[#EA580C] z-0" />
            
            <div className="flex flex-col gap-10">
              {deliveryModelSteps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6 z-10"
                >
                  {/* Popping Ring Node */}
                  <div className="relative flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-white mt-1 z-10">
                    <motion.div
                      animate={{ scale: [0.6, 1.5, 2.2], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: index * 0.15 }}
                      className="absolute w-4 h-4 rounded-full border-[2px] border-[#EA580C] bg-transparent"
                    />
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] relative z-20" />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-[16px] font-bold text-[#0EA5E9] mb-1.5">{step.title}</h3>
                    <p className="text-[14px] text-black leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* DESKTOP HORIZONTAL VIEW (hidden below lg) */}
          <div className="hidden lg:block mt-16 w-full pb-8 overflow-x-auto lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="relative min-w-[1000px] lg:min-w-full px-4 lg:px-10 xl:px-12">
              <div className="grid grid-cols-6 gap-0 relative">
                {/* Central Horizontal Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#EA580C] -translate-y-1/2 z-[5]" />

                {deliveryModelSteps.map((step, index) => {
                  const isTop = index % 2 === 0
                  const titleColor = '#0EA5E9'
                  const circleColor = '#EA580C'

                  return (
                    <div key={step.title} className="relative flex justify-center h-[320px]">
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
                        className={`absolute px-1 text-center flex flex-col items-center z-30 ${isTop ? 'bottom-[calc(50%+28px)]' : 'top-[calc(50%+28px)]'}`}
                        style={{
                          width: index === 5 ? '180%' : '110%',
                          left: '50%',
                        }}
                        initial={{ opacity: 0, y: isTop ? 20 : -20, x: index === 5 ? '-60%' : '-50%' }}
                        whileInView={{ opacity: 1, y: 0, x: index === 5 ? '-60%' : '-50%' }}
                        viewport={{ once: false, margin: '-50px' }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 80
                        }}
                      >
                        <h3 className="text-[16px] font-medium mb-1.5" style={{ color: titleColor }}>
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
        <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            <Badge className="border-[rgba(234,88,12,0.25)] bg-white text-[#EA580C] shadow-[0_10px_24px_rgba(14,165,233,0.08)]">
              Testimonials
            </Badge>
            <h2 className="mt-5 text-[30px] lg:text-[40px] font-bold leading-tight text-black">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-7 text-black">
              Trusted by growing enterprises for Oracle Cloud transformation, implementation and long-term support.
            </p>
          </div>

          <div 
            className="min-w-0 h-[580px] sm:h-[480px] lg:h-[450px] flex flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-3xl mx-auto lg:mx-0 w-full"
                exit={{ opacity: 0, x: -36 }}
                initial={{ opacity: 0, x: 42 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-4 flex justify-center lg:justify-start">
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

                <div className="mt-6 h-[3px] w-24 rounded-full bg-[#EA580C] mx-auto lg:mx-0" />

                <div className="mt-6 flex flex-col gap-1 text-sm sm:text-base text-center lg:text-left">
                  <span className="text-lg font-semibold text-[#EA580C]">{enhancedTestimonials[current].name}</span>
                  <span className="text-black/70">
                    {enhancedTestimonials[current].designation}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <span className="font-semibold uppercase tracking-[0.12em] text-black">{enhancedTestimonials[current].region}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-auto flex items-center justify-center lg:justify-start gap-5 pt-8">
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
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <h2 className="mt-6 max-w-3xl text-[30px] lg:text-[40px] font-bold text-white">
                  Unlock Oracle Cloud Value with Best Practices and Agentic AI
                </h2>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <button 
                      onClick={() => setIsHealthCheckModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500 px-8 py-4 text-[16px] font-semibold text-white transition-all hover:border-orange-400 hover:bg-orange-600 shadow-md"
                    >
                      <span className="sm:hidden">System Health Check</span>
                      <span className="hidden sm:inline">Schedule Free System Health Check Analysis</span>
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </motion.div>
                </div>
              </div>

              <Card className="p-6 !bg-white/10 backdrop-blur-md !border-white/20 text-center lg:text-left">
                <div className="text-[12px] font-extrabold uppercase tracking-normal text-white drop-shadow-lg">Value You Receive</div>
                <ul className="mt-4 space-y-3 text-white font-medium drop-shadow-md lg:whitespace-nowrap flex flex-col items-center lg:items-start">
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
