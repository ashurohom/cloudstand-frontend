import { useEffect } from 'react'
import { ArrowDown, ArrowRight, BarChart3, Check, Cpu, DollarSign, GitBranch, Quote, Star, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import { testimonials } from '../data/testimonials'
import { floatingStats, stats } from '../data/stats'
import {
  badgeVariants,
  cardHover,
  fadeUp,
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

function Home() {
  useDocumentTitle('CloudStand Consulting | Oracle Cloud Transformation Partner')
  const featuredCaseStudies = caseStudies.slice(0, 3)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="hero-mesh hero-particles gpu-layer relative isolate min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0] }}
            className="gpu-layer orb-drift absolute left-[10%] top-24 h-28 w-28 rounded-full border border-blue-100 bg-white/50 blur-[1px]"
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            animate={{ x: [0, -50, 40, 0], y: [0, 30, -50, 0] }}
            className="gpu-layer absolute right-[14%] top-40 h-24 w-24 rotate-12 border border-accent/25 bg-accent/8"
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            className="gpu-layer absolute right-[25%] top-24 h-14 w-14 rounded-full bg-accent-light/15 blur-[1px]"
            transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
          />
          <div className="absolute bottom-28 left-[20%] h-48 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            className="absolute bottom-36 right-[24%] h-20 w-20 rounded-3xl border border-blue-100 bg-white/50"
            transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>

        <div className="section-shell flex min-h-screen flex-col justify-center py-16">
          <div className="max-w-4xl">
            <motion.div
              className="mb-6 inline-flex"
              initial="hidden"
              variants={badgeVariants}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
                <Badge className="border-accent/20 bg-white/70 text-slate-900">Oracle Cloud Specialists since 2022</Badge>
              </motion.div>
            </motion.div>
            <h1 className="max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Transform Your Business with
              </motion.div>
              <motion.div
                className="text-gradient"
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Oracle Cloud
              </motion.div>
            </h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl"
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              End-to-end Oracle HCM, ERP, Payroll, OIC, BI and AI consulting delivered by certified experts who focus on outcomes, not just go-lives.
            </motion.p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.55, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Button size="lg" to="/contact" variant="solid">
                  Rescue Enquiry
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.55, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Button size="lg" to="/case-studies" variant="ghost">
                  View Our Work
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="glass-panel floating-bob mt-14 grid max-w-5xl grid-cols-2 gap-6 rounded-[32px] px-6 py-5 sm:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {floatingStats.map((item, index) => (
              <motion.div key={item.label} variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="font-syne text-2xl font-bold text-slate-900">{item.value}</div>
                <div className="mt-1 text-sm text-text-muted">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
            className="mt-12 flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-text-muted"
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            Scroll
            <ArrowDown className="h-4 w-4 text-accent" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding border-y border-[#d7e5ff] bg-[#eef5ff]">
        <motion.div
          className="section-shell overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true, margin: '-80px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8 flex items-center justify-center">
            <Badge>Trusted by growing enterprises</Badge>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-5">
              {[...trustLogos, ...trustLogos].map((name, index) => (
                <motion.div
                  className="rounded-full border border-[#d7e5ff] bg-white/85 px-6 py-4 text-sm font-medium text-text-muted"
                  key={`${name}-${index}`}
                  transition={{ duration: 0.2 }}
                  whileHover={{ opacity: 1 }}
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-padding diagonal-divider bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Services" title="Our Oracle Cloud Services" subtitle="End-to-end implementation, support, and training" />
          <motion.div className="mb-10 h-1 w-28 rounded-full bg-gradient-to-r from-accent to-accent-light" initial="hidden" variants={lineDraw} viewport={{ once: true, margin: '-80px' }} whileInView="visible" />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon]

              return (
                <motion.div key={service.slug} variants={staggerItem}>
                  <motion.div animate="rest" className="group h-full" initial="rest" variants={cardHover} whileHover="hover">
                    <Card className="h-full border-transparent p-7 transition-all duration-300 group-hover:border-accent/40">
                      <motion.div
                        className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                        initial="rest"
                        style={{ background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.16))` }}
                        variants={iconPop}
                        whileHover="hover"
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-text-muted">{service.tagline}</p>
                      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-light" to={`/services/${service.slug}`}>
                        Explore
                        <motion.span whileHover={{ x: 4 }}>
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <SectionTitle
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
                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-text-muted">{item.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Success Stories" title="Transformation outcomes that stand up in the boardroom" />
          <motion.div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" initial="hidden" variants={staggerContainer} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            {featuredCaseStudies.map((study) => (
              <motion.div key={study.slug} variants={staggerItem}>
                <motion.div className="group min-w-[320px] flex-1 md:min-w-[360px]" transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6 }}>
                  <Card className="h-full p-7 transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-[0_24px_60px_rgba(0,87,255,0.13)]">
                    <Badge className="border-accent/20 bg-blue-50 text-accent">{study.category}</Badge>
                    <div className="mt-5 text-sm uppercase tracking-[0.24em] text-text-muted">{study.company}</div>
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

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="Process" title="Our Engagement Model" />
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

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Testimonials" title="What Our Clients Say" />
          <motion.div className="grid gap-6 lg:grid-cols-3" initial="hidden" variants={staggerContainer} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={staggerItem}>
                <Card className="h-full p-7">
                  <Quote className="h-8 w-8 text-accent" />
                  <p className="mt-5 text-sm leading-7 text-text-muted">{testimonial.quote}</p>
                  <div className="mt-6 flex gap-1 text-gold">
                    {[...Array(5)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ scale: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 20, delay: starIndex * 0.07 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-4 w-4 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="mt-5 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-gold"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Proven Results
                  </motion.div>
                  <div className="mt-6">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-text-muted">
                      {testimonial.designation}, {testimonial.company}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
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
                <div className="text-sm uppercase tracking-[0.24em] text-text-muted">What you get</div>
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
