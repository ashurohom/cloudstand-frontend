import { ArrowDown, ArrowRight, BarChart3, Check, Cpu, DollarSign, GitBranch, Quote, Star, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import ScrollReveal from '../components/ui/ScrollReveal'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import { testimonials } from '../data/testimonials'
import { floatingStats, stats } from '../data/stats'

const iconMap = { Users, BarChart3, DollarSign, GitBranch, TrendingUp, Cpu }

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

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

  return (
    <main className="overflow-hidden pt-20">
      <section className="hero-mesh hero-particles relative isolate min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-24 h-28 w-28 rounded-full border border-blue-100 bg-white/50 blur-[1px] animate-float" />
          <div className="absolute right-[14%] top-40 h-24 w-24 rotate-12 border border-accent/25 bg-accent/8 animate-pulse-slow" />
          <div className="absolute bottom-28 left-[20%] h-48 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          <div className="absolute bottom-36 right-[24%] h-20 w-20 rounded-3xl border border-blue-100 bg-white/50 animate-float" />
        </div>

        <div className="section-shell flex min-h-screen flex-col justify-center py-16">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <Badge className="mb-6 border-accent/20 bg-white/70 text-slate-900">Oracle Cloud Specialists since 2022</Badge>
            </motion.div>
            <motion.h1
              className="max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block">Transform Your</span>
              <span className="block">
                Business with <span className="text-gradient">Oracle</span>
              </span>
              <span className="block text-gradient">Cloud</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              End-to-end Oracle HCM, ERP, Payroll, OIC, BI and AI consulting delivered by certified experts who focus on outcomes, not just go-lives.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" to="/contact" variant="solid">
                Get a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" to="/case-studies" variant="ghost">
                View Our Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="glass-panel mt-14 grid max-w-5xl grid-cols-2 gap-6 rounded-[32px] px-6 py-5 sm:grid-cols-4"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {floatingStats.map((item) => (
              <div key={item.label}>
                <div className="font-syne text-2xl font-bold text-slate-900">{item.value}</div>
                <div className="mt-1 text-sm text-text-muted">{item.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce text-accent" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding border-y border-[#d7e5ff] bg-[#eef5ff]">
        <div className="section-shell overflow-hidden">
          <div className="mb-8 flex items-center justify-center">
            <Badge>Trusted by growing enterprises</Badge>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-5">
              {[...trustLogos, ...trustLogos].map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="rounded-full border border-[#d7e5ff] bg-white/85 px-6 py-4 text-sm font-medium text-text-muted"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding diagonal-divider bg-primary">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Services"
            title="Our Oracle Cloud Services"
            subtitle="End-to-end implementation, support, and training"
          />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon]

              return (
                <motion.div key={service.slug} variants={serviceVariants}>
                  <Card className="h-full p-7">
                    <div
                      className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.16))` }}
                    >
                      <Icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-text-muted">{service.tagline}</p>
                    <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-light" to={`/services/${service.slug}`}>
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
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
          </ScrollReveal>

          <ScrollReveal className="grid gap-5 sm:grid-cols-2">
            {stats.map((item) => (
              <Card key={item.label} className="p-7">
                <AnimatedCounter suffix={item.suffix} value={item.value} />
                <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
                <p className="mt-4 text-sm uppercase tracking-[0.24em] text-text-muted">{item.label}</p>
              </Card>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Success Stories" title="Transformation outcomes that stand up in the boardroom" />
          <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredCaseStudies.map((study) => (
              <Card key={study.slug} className="min-w-[320px] flex-1 p-7 md:min-w-[360px]">
                <Badge className="border-accent/20 bg-blue-50 text-accent">{study.category}</Badge>
                <div className="mt-5 text-sm uppercase tracking-[0.24em] text-text-muted">{study.company}</div>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{study.summary}</p>
                <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" to="/case-studies">
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="Process" title="Our Engagement Model" />
          <div className="relative mt-10">
            <motion.div
              className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-accent to-accent-light lg:block"
              initial={{ scaleX: 0, transformOrigin: 'left center' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
            <div className="grid gap-8 lg:grid-cols-4">
              {timelineSteps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 0.1}>
                  <div className="relative rounded-[28px] border border-[#d7e5ff] bg-white p-6 shadow-[0_10px_30px_rgba(24,67,148,0.05)]">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Testimonials" title="What Our Clients Say" />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                <Card className="h-full p-7">
                  <Quote className="h-8 w-8 text-accent" />
                  <p className="mt-5 text-sm leading-7 text-text-muted">{testimonial.quote}</p>
                  <div className="mt-6 flex gap-1 text-gold">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-6">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-text-muted">
                      {testimonial.designation}, {testimonial.company}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7fbff]">
        <div className="section-shell">
          <div className="hero-mesh relative overflow-hidden rounded-[40px] border border-[#d7e5ff] p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px]">
              <div>
                <Badge className="border-accent/20 bg-white/70 text-slate-900">Free Strategy Session</Badge>
                <h2 className="mt-6 max-w-3xl text-4xl font-bold text-slate-900 sm:text-5xl">
                  Ready to Modernize Your Oracle Ecosystem?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
                  Let&apos;s discuss your transformation roadmap with a free 30-minute consultation.
                </p>
                <div className="mt-8">
                  <Button size="lg" to="/contact" variant="white">
                    Schedule a Free Call
                  </Button>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
