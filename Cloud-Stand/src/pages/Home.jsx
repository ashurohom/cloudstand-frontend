import { useEffect, useState } from 'react'
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react'
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
import { stats } from '../data/stats'
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
  { number: '50+', label: 'Projects' },
  { number: '30+', label: 'Clients' },
  { number: '15+', label: 'Experts' },
  { number: '3', label: 'Countries' },
]

function HomeSectionTitle({ eyebrow, title, subtitle, showLine = true }) {
  return (
    <div className="mb-12 flex max-w-3xl flex-col gap-4 items-start text-left">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <motion.h2
        initial={{ opacity: 0, y: 35, scale: 0.93 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl text-4xl md:text-5xl"
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
          className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#0057ff] to-[#3d8bff]"
        />
      ) : null}
      {subtitle ? <p className="text-base leading-7 text-text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

function Home() {
  useDocumentTitle('CloudStand Consulting | Oracle Cloud Transformation Partner')
  const featuredCaseStudies = caseStudies.slice(0, 3)
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

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total)
  }

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  return (
    <motion.main animate="animate" className="overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <HeroSection />

      <section className="py-12">
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
                className="flex flex-col items-center justify-center border-r border-[#d7e5ff] px-4 py-6 last:border-r-0"
              >
                <span
                  className="mb-1 text-4xl font-bold"
                  style={{ color: '#EA580C' }}
                >
                  {stat.number}
                </span>
                <span className="text-sm font-medium text-[#5f6f89]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlobalDelivery />

      <section
        className="py-12 sm:py-14 lg:py-16 relative overflow-hidden border-y border-[#d7e5ff] bg-[#0a2540]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10, 37, 64, 0.78), rgba(10, 37, 64, 0.78)), url("/bgimage.png")',
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
              <Badge className="border-white/20 bg-white/10 text-[#d63b25]">Trusted by growing enterprises</Badge>
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
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium text-white/85 backdrop-blur-sm"
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

      <section className="py-8 sm:py-10 lg:py-12 bg-[#eef5ff]">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <HomeSectionTitle
              eyebrow="Why CloudStand"
              title="Why Industry Leaders Choose CloudStand"
              subtitle="We combine enterprise-grade Oracle expertise with fast, accountable delivery."
            />
            <div className="space-y-4">
              {[
                'Oracle-certified consultants with deep domain expertise',
                'Fixed-price engagements with guaranteed timelines',
                '24/7 post-go-live hypercare support',
                'Agile methodology with weekly sprint reviews',
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-[#d7e5ff] bg-white p-4 shadow-[0_10px_30px_rgba(24,67,148,0.05)]"
                >
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-base leading-7 text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            initial="hidden"
            variants={slideRight}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {stats.map((item, index) => (
              <motion.div key={item.label} variants={staggerItem}>
                <Card className="p-7">
                  <AnimatedCounter suffix={item.suffix} value={item.value} />
                  <motion.div className="mt-4 h-1 w-16 rounded-full bg-gold" initial={{ scaleX: 0, originX: 0 }} transition={{ duration: 0.6, delay: index * 0.12 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} />
                  <p className="mt-4 text-base uppercase tracking-normal text-text-muted">{item.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="section-shell">
          <HomeSectionTitle eyebrow="Success Stories" title="Transformation outcomes that stand up in the boardroom" showLine={false} />
          <motion.div
            className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-0"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {featuredCaseStudies.map((study) => (
              <motion.div key={study.slug} variants={staggerItem}>
                <motion.div
                  className="group relative h-full pt-5 md:px-7 md:first:pl-0 md:last:pr-0"
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-1 w-14 rounded-full transition-all duration-300 group-hover:w-20"
                    style={{ background: study.accent }}
                  />
                  <div className="pointer-events-none absolute right-0 top-6 hidden h-[calc(100%-2.5rem)] w-px bg-[#d7e5ff] md:block group-last:hidden" />

                  <div className="h-full">
                    <div className="flex items-center gap-3">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA580C]">{study.category}</div>
                      <span className="h-px flex-1 bg-[#d7e5ff] md:hidden" />
                    </div>
                    <div className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-text-muted">{study.company}</div>
                    <h3 className="mt-4 max-w-[18ch] text-[1.9rem] font-semibold leading-[1.15] text-slate-900">
                      {study.title}
                    </h3>
                    <p className="mt-4 max-w-[34ch] text-sm leading-7 text-text-muted">{study.summary}</p>
                    <Link className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent" to="/case-studies">
                      Read Case Study
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12 bg-[#eef5ff]">
        <div className="section-shell">
          <HomeSectionTitle eyebrow="Process" title="Our Engagement Model" />
          <div className="relative mt-10">
            <motion.div
              className="line-pulse absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-accent to-accent-light lg:block"
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
                  <div className="relative rounded-[28px] border border-[#d7e5ff] bg-white p-6 shadow-[0_10px_30px_rgba(24,67,148,0.05)]">
                    <motion.div
                      className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white"
                      initial={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.18 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span initial={{ rotate: -10 }} transition={{ duration: 0.35, delay: index * 0.18 + 0.12 }} whileInView={{ rotate: 0 }} viewport={{ once: true }}>
                        {index + 1}
                      </motion.span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        style={{ background: '#ffffff' }}
        className="relative overflow-hidden py-6"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(234,88,12,0.1) 0%, transparent 72%)',
            transform: 'translate(28%, -28%)',
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,87,255,0.08) 0%, transparent 72%)',
            transform: 'translate(-28%, 28%)',
          }}
        />

        <div className="section-shell relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
          >
            <Badge className="mb-3 border-accent/20 bg-white/70 text-slate-900">Testimonials</Badge>
            <h2 className="text-2xl font-bold leading-tight text-[#0f172a] md:text-[2rem]">
              Client feedback
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-transparent py-1"
          >
            <div className="flex flex-col gap-4">
              <div className="min-w-0">
                <span className="mb-3 inline-flex px-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EA580C]">
                  {enhancedTestimonials[current].category}
                </span>

                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={`${current}-quote`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-none pr-0 text-sm leading-6 text-[#334155] sm:text-[15px] md:text-base"
                  >
                    "{enhancedTestimonials[current].quote}"
                  </motion.blockquote>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${current}-meta`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
                  >
                    <span className="font-semibold text-[#0f172a]">
                      {enhancedTestimonials[current].name}
                    </span>
                    <span className="text-[#94a3b8]">/</span>
                    <span className="text-[#5f6f89]">
                      {enhancedTestimonials[current].designation}, {enhancedTestimonials[current].company}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1.5">
                  {enhancedTestimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{
                        width: i === current ? '18px' : '6px',
                        height: '6px',
                        borderRadius: '9999px',
                        background: i === current ? '#EA580C' : '#cbdcfb',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                      type="button"
                      aria-label={`Show testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={goPrev}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#5f6f89] transition-all duration-200 hover:text-[#EA580C]"
                    type="button"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={goNext}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#5f6f89] transition-all duration-200 hover:text-[#EA580C]"
                    type="button"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12 bg-[#f7fbff]">
        <div className="section-shell">
          <div className="hero-mesh gpu-layer relative overflow-hidden rounded-[40px] border border-[#d7e5ff] p-8 sm:p-12">
            <motion.div
              animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
              className="gpu-layer absolute left-[8%] top-[10%] h-36 w-36 rounded-full bg-accent/10 blur-3xl"
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              animate={{ x: [0, -22, 0], y: [0, 18, 0] }}
              className="gpu-layer absolute bottom-[8%] right-[10%] h-40 w-40 rounded-full bg-accent-light/10 blur-3xl"
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="grid items-center gap-8 lg:grid-cols-[1fr_320px]"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <Badge className="border-accent/20 bg-white/70 text-slate-900">Free Strategy Session</Badge>
                <h2 className="mt-6 max-w-3xl text-4xl font-bold text-slate-900 sm:text-5xl">
                  Ready to Modernize Your Oracle Ecosystem?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
                  Let&apos;s discuss your transformation roadmap with a free 30-minute consultation.
                </p>
                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(0,87,255,0.28)' }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" to="/contact" variant="white">
                      Schedule a Free Call
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </div>

              <Card className="p-6">
                <div className="text-base uppercase tracking-normal text-text-muted">What you get</div>
                <div className="mt-4 space-y-3 text-slate-900">
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
