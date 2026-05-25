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
  pageVariants,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
} from '../animations/variants'

const timelineSteps = [
  {
    title: 'Discovery & Assessment',
    description: 'Business process workshops, architecture review, and transformation prioritization.',
  },
  {
    title: 'Solution Design',
    description: 'Future-state design, roadmap definition, governance, and delivery planning.',
  },
  {
    title: 'Implementation',
    description: 'Configuration, testing, data migration support, and user enablement.',
  },
  {
    title: 'Hypercare & Support',
    description: 'Stabilization, optimization, reporting refinement, and ongoing support.',
  },
]

const trustLogos = ['Northstar Group', 'Zenith Retail', 'Meridian Health', 'Apex Works', 'Nova Services', 'Global Edge']
const overviewStats = [
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 30, suffix: '+', label: 'Clients' },
  { value: 15, suffix: '+', label: 'Experts' },
  { value: 3, suffix: '', label: 'Countries' },
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
  const featuredCaseStudies = caseStudies.slice(0, 3).map((study, index) => ({
    ...study,
    accent: '#EA580C',
  }))
  const enhancedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    category: ['HCM', 'ERP', 'OIC'][index] || 'Oracle Cloud',
  }))
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

      <section className="bg-white py-12">
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
                className="flex flex-col items-center justify-center border-r border-sky-200 px-4 py-6 last:border-r-0"
              >
                <AnimatedCounter
                  className="mb-1 inline-block text-4xl font-bold text-sky-500"
                  delay={i * 0.12}
                  duration={1800}
                  suffix={stat.suffix}
                  value={stat.value}
                />
                <span className="text-sm font-medium text-black">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlobalDelivery />

      <section
        className="py-12 sm:py-14 lg:py-16 relative overflow-hidden border-y border-sky-200 bg-black"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url("/bgimage.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <motion.div
          className="section-shell relative z-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true, margin: '-80px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge className="border-sky-200 bg-white text-[#d63b25]">Trusted by growing enterprises</Badge>
            </motion.div>
          </div>
        </motion.div>
        <div className="relative w-full overflow-hidden">
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 25s linear infinite',
            }}
          >
            {[...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos].map((name, index) => (
              <motion.div
                className="rounded-full border border-sky-200 bg-black px-6 py-4 text-sm font-medium text-white"
                key={`${name}-${index}`}
                style={{ marginRight: '20px', flexShrink: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ opacity: 1 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CloudStand — Redesigned Premium Section */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
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

        <div className="section-shell relative z-10 grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ── LEFT: Heading + Checklist ── */}
          <motion.div
            initial="hidden"
            variants={slideLeft}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
            className="flex flex-col"
          >
            <HomeSectionTitle
              className="!mb-6"
              eyebrow="Why CloudStand"
              title="Why Industry Leaders Choose CloudStand"
              subtitle="We combine enterprise-grade Oracle expertise with fast, accountable delivery."
            />

            <div className="flex flex-col gap-3">
              {[
                'Oracle-certified consultants with deep domain expertise',
                'Fixed-price engagements with guaranteed timelines',
                '24/7 post-go-live hypercare support',
                'Agile methodology with weekly sprint reviews',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -1.5, boxShadow: '0 10px 28px rgba(14,165,233,0.09)' }}
                  className="group flex items-center gap-3 rounded-xl border border-[rgba(14,165,233,0.25)] bg-white px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[rgba(14,165,233,0.5)]"
                >
                  {/* Orange check icon in sky-blue pill */}
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(14,165,233,0.2)] bg-sky-50 text-[#EA580C] transition-colors duration-200 group-hover:bg-sky-100">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                  <p className="text-sm font-medium leading-snug text-black">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: 2×2 Floating Stat Cards ── */}
          <div className="relative mt-10 lg:mt-16">
            {/* Abstract Tech Network Background Texture */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.15] overflow-visible">
              <svg className="w-[180%] max-w-[800px] h-auto text-[#0EA5E9]" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Connecting Lines */}
                <path d="M100 150 L200 80 L300 140 L250 250 L120 280 Z" opacity="0.5" />
                <path d="M100 150 L250 250 L320 300" opacity="0.3" />
                <path d="M200 80 L250 250 L180 320 L120 280" opacity="0.4" />
                <path d="M300 140 L320 300" opacity="0.3" />
                <path d="M100 150 L120 280" opacity="0.4" />
                <path d="M300 140 L200 200 L250 250" opacity="0.3" />
                
                {/* Highlight Rings */}
                <circle cx="250" cy="250" r="24" strokeDasharray="4 6" opacity="0.8" />
                <circle cx="200" cy="80" r="16" opacity="0.6" />
                <circle cx="120" cy="280" r="12" strokeDasharray="2 4" opacity="0.6" />
                
                {/* Nodes */}
                <circle cx="100" cy="150" r="4" fill="currentColor" />
                <circle cx="200" cy="80" r="5" fill="currentColor" />
                <circle cx="300" cy="140" r="4" fill="currentColor" />
                <circle cx="250" cy="250" r="6" fill="currentColor" />
                <circle cx="120" cy="280" r="4" fill="currentColor" />
                <circle cx="180" cy="320" r="3" fill="currentColor" />
                <circle cx="320" cy="300" r="4" fill="currentColor" />
                <circle cx="200" cy="200" r="3" fill="currentColor" />
              </svg>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-5"
              initial="hidden"
              variants={slideRight}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
            >
              {[
                { value: 50, suffix: '+', label: 'Projects Delivered' },
                { value: 98, suffix: '%', label: 'Client Satisfaction' },
                { value: 3, suffix: '', label: 'Countries Served' },
                { value: 15, suffix: '+', label: 'Certified Experts' },
              ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                whileHover={{ y: -5, boxShadow: '0 22px 48px rgba(14,165,233,0.13)' }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-3 rounded-3xl border border-[rgba(14,165,233,0.22)] bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[rgba(14,165,233,0.5)]"
              >
                {/* Animated number */}
                <AnimatedCounter
                  className="font-syne text-4xl font-bold tracking-tight text-[#0EA5E9] sm:text-5xl"
                  suffix={item.suffix}
                  value={item.value}
                  delay={index * 0.12}
                  duration={1800}
                />

                {/* Accent line */}
                <motion.div
                  className="h-0.5 w-10 rounded-full bg-[#EA580C] opacity-100"
                  initial={{ scaleX: 0, originX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.14 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                />

                {/* Orange label */}
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-[#EA580C] px-5 py-3 text-sm font-medium text-[#EA580C] transition-all duration-300 hover:bg-[#EA580C] hover:text-white"
                to="/about"
              >
                View More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.05),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.05),transparent_35%)]" />
        <div className="section-shell relative">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#f97316]/30 bg-white px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f97316]">
              Success Stories
            </span>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-black md:text-5xl">
              Transformation outcomes that
              <br />
              stand up in the boardroom
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />
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
                  className={`group relative flex min-h-[345px] overflow-hidden rounded-[26px] bg-white p-4 transition-all duration-500 hover:-translate-y-2 ${
                    index === 0
                      ? 'border border-[#f97316]'
                      : 'border border-[#ececec] hover:border-[#f97316]'
                  }`}
                >
                  <div className="flex w-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full bg-[#fef1e8] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#f97316]">
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
                        View Story
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

      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="section-shell">
          <HomeSectionTitle eyebrow="Process" title="Our Engagement Model" />
          <div className="relative mt-10">
            <motion.div
              className="line-pulse absolute left-0 top-6 hidden h-px w-full bg-sky-200 lg:block"
              initial={{ scaleX: 0, originX: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              whileInView={{ scaleX: 1 }}
            />
            <motion.div
              className="grid gap-8 lg:grid-cols-4"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
            >
              {timelineSteps.map((step, index) => (
                <motion.div key={step.title} variants={staggerItem}>
                  <div className="relative rounded-[28px] border border-sky-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                    <motion.div
                      className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-lg font-bold text-white"
                      initial={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.18 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span initial={{ rotate: -10 }} transition={{ duration: 0.35, delay: index * 0.18 + 0.12 }} whileInView={{ rotate: 0 }} viewport={{ once: true }}>
                        {index + 1}
                      </motion.span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            <h2 className="mt-5 text-4xl font-bold leading-tight text-black sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-black sm:text-lg">
              Trusted by growing enterprises for Oracle Cloud transformation, implementation and long-term support.
            </p>
          </div>

          <div className="min-w-0">
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

                <blockquote className="-mt-1 text-lg leading-7 text-black sm:text-xl lg:text-[1.6rem] lg:leading-[1.45]">
                  {enhancedTestimonials[current].quote}
                </blockquote>

                <div className="mt-6 h-[3px] w-24 rounded-full bg-[#EA580C]" />

                <div className="mt-6 flex flex-col gap-1 text-sm sm:text-base">
                  <span className="text-lg font-semibold text-[#EA580C]">{enhancedTestimonials[current].name}</span>
                  <span className="text-black/70">
                    {enhancedTestimonials[current].designation} · {enhancedTestimonials[current].company}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="font-semibold uppercase tracking-[0.12em] text-black">IN</span>
                  <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-sky-600">
                    {enhancedTestimonials[current].category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-5">
              {enhancedTestimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`rounded-full border-0 transition-all duration-300 ${
                    i === current ? 'w-12 bg-[#D76527]' : 'w-4 bg-[#CFD7E6]'
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
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[40px] border border-sky-200 bg-white p-8 sm:p-12">
            <motion.div
              className="grid items-center gap-8 lg:grid-cols-[1fr_320px]"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <Badge className="border-sky-200 bg-white text-black">Free Strategy Session</Badge>
                <h2 className="mt-6 max-w-3xl text-4xl font-bold text-black sm:text-5xl">
                  Ready to Modernize Your Oracle Ecosystem?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-black">
                  Let&apos;s discuss your transformation roadmap with a free 30-minute consultation.
                </p>
                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Button className="!border-orange-500 !bg-orange-500 !text-white !shadow-none hover:!border-orange-400 hover:!bg-orange-600 hover:!text-white" size="lg" to="/contact" variant="white">
                      Schedule a Free Call
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </div>

              <Card className="p-6">
                <div className="text-base uppercase tracking-normal text-black">What you get</div>
                <div className="mt-4 space-y-3 text-black">
                  <div>30-min free consultation</div>
                  <div>No commitment</div>
                  <div>Oracle experts</div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Home
