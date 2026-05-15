import { useEffect, useState } from 'react'
import { ArrowRight, BarChart3, Check, ChevronLeft, ChevronRight, Cpu, DollarSign, GitBranch, Quote, Sparkles, Star, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import HeroTitle from '../components/ui/HeroTitle'
import RotatingText from '../components/ui/RotatingText'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import { testimonials } from '../data/testimonials'
import { stats } from '../data/stats'
import {
  cardHover,
  iconPop,
  lineDraw,
  pageVariants,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
} from '../animations/variants'

const iconMap = { Users, BarChart3, DollarSign, GitBranch, TrendingUp, Cpu }

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

const serviceBackgrounds = {
  hcm: {
    background:
      'radial-gradient(circle at 18% 22%, rgba(0,87,255,0.34), transparent 26%), linear-gradient(145deg, #0d2040 0%, #132d5d 52%, #0b1732 100%)',
    pattern:
      'linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
  },
  erp: {
    background:
      'radial-gradient(circle at 82% 18%, rgba(61,139,255,0.32), transparent 28%), linear-gradient(145deg, #10254d 0%, #17386d 48%, #0c1832 100%)',
    pattern:
      'linear-gradient(135deg, rgba(255,255,255,0.14) 0 2px, transparent 2px 100%), linear-gradient(45deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 100%)',
  },
  payroll: {
    background:
      'radial-gradient(circle at 22% 20%, rgba(245,158,11,0.34), transparent 24%), linear-gradient(145deg, #3c2506 0%, #6a4308 48%, #201205 100%)',
    pattern:
      'repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 10px, transparent 10px 22px), repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0 10px, transparent 10px 22px)',
  },
  oic: {
    background:
      'radial-gradient(circle at 78% 24%, rgba(79,124,255,0.34), transparent 24%), linear-gradient(145deg, #0d1d45 0%, #18326d 50%, #09142d 100%)',
    pattern:
      'linear-gradient(60deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(120deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
  },
  'bi-analytics': {
    background:
      'radial-gradient(circle at 20% 18%, rgba(20,184,166,0.3), transparent 26%), linear-gradient(145deg, #082c33 0%, #0d4852 46%, #071920 100%)',
    pattern:
      'linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
  },
  'ai-solutions': {
    background:
      'radial-gradient(circle at 75% 18%, rgba(139,92,246,0.34), transparent 26%), linear-gradient(145deg, #1f1540 0%, #32205f 48%, #130d2b 100%)',
    pattern:
      'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.12) 0 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0 2px, transparent 2px)',
  },
}

function HomeSectionTitle({ eyebrow, title, subtitle }) {
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
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#0057ff] to-[#3d8bff]"
      />
      {subtitle ? <p className="text-base leading-7 text-text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

function Home() {
  useDocumentTitle('CloudStand Consulting | Oracle Cloud Transformation Partner')
  const featuredCaseStudies = caseStudies.slice(0, 3)
  const enhancedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    avatar: testimonial.name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase(),
    flag: ['🇮🇳', '🇺🇸', '🇮🇳'][index] || '🌍',
    category: ['HCM', 'ERP', 'OIC'][index] || 'Oracle Cloud',
  }))
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = enhancedTestimonials.length
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % total)
    }, 4000)

    return () => clearInterval(timer)
  }, [total])

  const goNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % total)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  return (
    <motion.main animate="animate" className="overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="hero-particles gpu-layer relative isolate min-h-[calc(100vh-5rem)] overflow-hidden">
        <AICloudBackground />
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-6">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
            <div className="max-w-4xl">
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mb-6 inline-flex"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Badge className="border-accent/20 bg-white/70 text-slate-900">Oracle Cloud Specialists since 2022</Badge>
              </motion.div>
              <h1 className="max-w-5xl text-3xl font-extrabold leading-[1.02] tracking-[-0.03em] text-text-black md:text-4xl lg:text-5xl">
                <HeroTitle text="Transform Your Business" />
                <HeroTitle text="with Oracle Cloud" gradient />
              </h1>
              <div className="mt-5 inline-flex flex-wrap items-center gap-3 text-lg md:text-xl">
                <span
                  className="inline-flex items-center"
                  style={{
                    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    color: '#0f172a',
                    fontSize: 'inherit',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Experts In
                </span>
                <RotatingText />
              </div>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl"
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                End-to-end Oracle HCM, ERP, Payroll, OIC, BI and AI consulting delivered by certified experts who focus on outcomes, not just go-lives.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <Link to="/about">
                  <motion.button
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.97 }}
                    className="relative group flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white shadow-glow"
                    style={{
                      background: 'linear-gradient(135deg, #0a2540 0%, #0057ff 60%, #3d8bff 100%)',
                      backgroundSize: '200% 200%',
                    }}
                  >
                    <motion.span
                      variants={{
                        rest: { x: '-100%', opacity: 0 },
                        hover: { x: '100%', opacity: 1 },
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full"
                      style={{
                        background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%)',
                        pointerEvents: 'none',
                      }}
                    />

                    <motion.span
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: '2px solid #0057ff',
                        pointerEvents: 'none',
                      }}
                    />

                    <motion.span
                      variants={{
                        rest: { rotate: 0, scale: 1 },
                        hover: { rotate: 20, scale: 1.2 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="h-5 w-5 text-[#00FFFF]" />
                    </motion.span>

                    <span className="relative z-10 tracking-normal">
                      Let&apos;s Connect &amp; Explore Solution
                    </span>

                    <motion.span
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 5 },
                      }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </motion.button>
                </Link>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-3 text-center text-xs tracking-normal text-[#5f6f89]"
                >
                  Free consultation
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                alt="Oracle Cloud memory illustration"
                className="h-auto w-full max-w-[440px] object-contain"
                src="/home-page-memory.svg"
              />
            </motion.div>
          </div>

        </div>
      </section>

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

      <section className="py-8 sm:py-10 lg:py-12 bg-primary">
        <div className="section-shell">
          <HomeSectionTitle eyebrow="Services" title="Our Oracle Cloud Services" subtitle="End-to-end implementation, support, and training" />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const serviceBackground = serviceBackgrounds[service.slug]
              const titleClassName = 'text-slate-900'
              const linkClassName = 'text-accent hover:text-accent-light'

                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.div
                      className="group h-full"
                    >
                    <Card className="relative h-full overflow-hidden rounded-[28px] border border-[#d7e5ff] bg-white p-0 transition-all duration-300 hover:translate-y-0 hover:border-accent/30 hover:shadow-[0_24px_60px_rgba(0,87,255,0.13)]">
                      <div className="relative h-full min-h-[320px] overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                        >
                          <div className="absolute inset-0" style={{ background: '#ffffff' }} />
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: serviceBackground.pattern,
                              backgroundSize: '120px 120px',
                            }}
                          />
                          <div
                            className="absolute -left-8 top-10 h-28 w-28 rounded-full blur-3xl"
                            style={{ background: `${service.color}55` }}
                          />
                          <div
                            className="absolute -right-10 bottom-8 h-36 w-36 rounded-full blur-3xl"
                            style={{ background: `${service.color}35` }}
                          />
                          <div className="absolute right-5 top-4 text-[72px] font-black tracking-[-0.08em] text-slate-900/5">
                            {service.shortTitle}
                          </div>
                          <div className="absolute bottom-24 left-5 right-5 flex items-end justify-between">
                            <div className="space-y-2">
                              <div className="h-2 w-16 rounded-full bg-[#d7e5ff]" />
                              <div className="h-2 w-24 rounded-full bg-[#d7e5ff]/75" />
                              <div className="h-2 w-12 rounded-full bg-[#d7e5ff]/55" />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              {[0, 1, 2, 3, 4, 5].map((item) => (
                                <span
                                  key={item}
                                  className="h-3 w-3 rounded-full border border-[#d7e5ff] bg-white/80 backdrop-blur-sm"
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/45 to-transparent" />

                        <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-[#d7e5ff] bg-white/90 p-5 backdrop-blur-md">
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <div className="flex items-center gap-3">
                                <motion.div
                                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                                  initial="rest"
                                  style={{ background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.16))` }}
                                  variants={iconPop}
                                  whileHover="hover"
                                >
                                  <Icon className="h-5 w-5 text-white" />
                                </motion.div>
                                <h3 className={`text-2xl font-semibold ${titleClassName}`}>{service.title}</h3>
                              </div>
                              <p className="mt-4 text-sm leading-7 text-text-muted">{service.tagline}</p>
                            </div>

                            <Link
                              aria-label={`Explore ${service.title}`}
                              className={`mt-1 inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[#d7e5ff] bg-white transition ${linkClassName}`}
                              to={`/services/${service.slug}`}
                            >
                              <motion.span whileHover={{ x: 4 }}>
                                <ArrowRight className="h-5 w-5" />
                              </motion.span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
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

      <section className="py-8 sm:py-10 lg:py-12 bg-primary">
        <div className="section-shell">
          <HomeSectionTitle eyebrow="Success Stories" title="Transformation outcomes that stand up in the boardroom" />
          <motion.div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" initial="hidden" variants={staggerContainer} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            {featuredCaseStudies.map((study) => (
              <motion.div key={study.slug} variants={staggerItem}>
                <motion.div className="group min-w-[320px] flex-1 md:min-w-[360px]" transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6 }}>
                  <Card className="h-full p-7 transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-[0_24px_60px_rgba(0,87,255,0.13)]">
                    <Badge className="border-accent/20 bg-blue-50 text-accent">{study.category}</Badge>
                    <div className="mt-5 text-base uppercase tracking-normal text-text-muted">{study.company}</div>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">{study.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-text-muted">{study.summary}</p>
                    <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" to="/case-studies">
                      Read Case Study
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </Card>
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

      <section className="py-8 sm:py-10 lg:py-12 bg-primary">
        <div className="section-shell">
          <HomeSectionTitle eyebrow="Testimonials" title="What Our Clients Say" />
          <div className="relative mx-auto w-full max-w-3xl">
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7e5ff] bg-white shadow-soft transition-all duration-200 hover:border-[#0057ff] hover:bg-[#0057ff] group"
              type="button"
            >
              <ChevronLeft className="h-5 w-5 text-[#0057ff] transition-colors group-hover:text-white" />
            </button>

            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-3xl border border-[#d7e5ff] bg-white p-10 shadow-soft"
                >
                  <div className="mb-6">
                    <Quote className="h-10 w-10 text-[#0057ff] opacity-30" />
                  </div>

                  <div className="mb-5 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>

                  <p className="mb-8 text-lg font-medium leading-relaxed text-[#0f172a]">
                    "{enhancedTestimonials[current].quote}"
                  </p>

                  <div className="mb-6 h-px bg-[#d7e5ff]" />

                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #0057ff, #3d8bff)' }}
                    >
                      {enhancedTestimonials[current].avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f172a]">
                        {enhancedTestimonials[current].name}
                      </p>
                      <p className="text-sm text-[#5f6f89]">
                        {enhancedTestimonials[current].designation} · {` `}
                        {enhancedTestimonials[current].company}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <span className="text-xl">
                        {enhancedTestimonials[current].flag}
                      </span>
                      <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-xs font-semibold text-[#0057ff]">
                        {enhancedTestimonials[current].category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7e5ff] bg-white shadow-soft transition-all duration-200 hover:border-[#0057ff] hover:bg-[#0057ff] group"
              type="button"
            >
              <ChevronRight className="h-5 w-5 text-[#0057ff] transition-colors group-hover:text-white" />
            </button>

            <div className="mt-8 flex justify-center gap-2">
              {enhancedTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '8px',
                    background: i === current ? '#0057ff' : '#d7e5ff',
                  }}
                  type="button"
                />
              ))}
            </div>
          </div>
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
