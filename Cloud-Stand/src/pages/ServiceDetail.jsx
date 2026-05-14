import { useEffect } from 'react'
import { ArrowRight, BarChart3, Check, Cpu, DollarSign, Mail, GitBranch, TrendingUp, Users } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import NotFound from './NotFound'
import { fadeIn, fadeUp, pageVariants, slideLeft, staggerContainer, staggerItem } from '../animations/variants'

const iconMap = { Users, BarChart3, DollarSign, GitBranch, TrendingUp, Cpu }

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useDocumentTitle(service ? `${service.title} | CloudStand Consulting` : 'Service Detail | CloudStand Consulting')

  if (!service) {
    return <NotFound />
  }

  const relatedCaseStudy = caseStudies.find((study) => study.slug === service.caseStudySlug)
  const Icon = iconMap[service.icon]

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="section-padding gpu-layer relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${service.color}18, rgba(10,22,40,1) 42%, rgba(7,16,29,1) 100%)` }}>
        <AICloudBackground />
        <div className="section-shell relative z-10">
          <motion.div custom={0} initial="hidden" variants={fadeIn} viewport={{ once: true }} whileInView="visible">
            <Badge>{service.shortTitle} Practice</Badge>
          </motion.div>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <motion.div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl"
                initial={{ scale: 0, opacity: 0 }}
                style={{ background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.2))` }}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
              >
                <Icon className="h-7 w-7 text-white" />
              </motion.div>
              <motion.h1
                className="max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]"
                custom={4}
                initial="hidden"
                variants={fadeUp}
                viewport={{ once: true }}
                whileInView="visible"
              >
                {service.title} Services That Move Enterprise Operations Forward
              </motion.h1>
              <motion.p
                className="mt-6 max-w-3xl text-lg leading-8 text-text-muted"
                custom={5}
                initial="hidden"
                variants={fadeIn}
                viewport={{ once: true }}
                whileInView="visible"
              >
                {service.description}
              </motion.p>
            </div>
            <Button size="lg" to="/contact" variant="solid">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionTitle eyebrow="What We Offer" title="Practical delivery built around your business needs" />
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  className="flex items-start gap-3 rounded-2xl border border-[#d7e5ff] bg-[#f8fbff] px-5 py-4 text-sm leading-7 text-text-muted"
                  custom={index * 0.8}
                  initial="hidden"
                  key={feature}
                  variants={slideLeft}
                  viewport={{ once: true, margin: '-80px' }}
                  whileInView="visible"
                >
                  <motion.span
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent"
                    initial={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.12 + index * 0.06 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="h-4 w-4" />
                  </motion.span>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Key Benefits" title="What clients gain" />
            <motion.div
              className="grid gap-5"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
            >
              {service.benefits.map((benefit, index) => (
                <motion.div key={benefit} variants={staggerItem}>
                  <Card className="p-6">
                    <div className="text-sm uppercase tracking-[0.24em] text-accent">Benefit {index + 1}</div>
                    <p className="mt-3 text-base leading-8 text-slate-900">{benefit}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="Our Approach" title="A three-step delivery path" />
          <div className="relative">
            <motion.div
              className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-accent-light to-transparent lg:block"
              initial={{ scaleY: 0, originY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ scaleY: 1 }}
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {service.approach.map((item, index) => (
                <motion.div
                  custom={index * 1.2}
                  initial="hidden"
                  key={item}
                  variants={fadeUp}
                  viewport={{ once: true, margin: '-80px' }}
                  whileInView="visible"
                >
                  <Card className="h-full p-7">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-base leading-8 text-text-muted">{item}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedCaseStudy ? (
        <section className="section-padding bg-primary">
          <div className="section-shell">
            <SectionTitle eyebrow="Related Case Study" title={relatedCaseStudy.title} />
            <motion.div initial="hidden" variants={fadeUp} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
              <Card className="overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <img alt={relatedCaseStudy.title} className="h-full min-h-[280px] w-full object-cover" loading="lazy" src={relatedCaseStudy.image} />
                  <div className="p-8">
                    <Badge>{relatedCaseStudy.category}</Badge>
                    <p className="mt-5 text-base leading-8 text-text-muted">{relatedCaseStudy.solution}</p>
                    <p className="mt-4 text-lg font-medium text-slate-900">{relatedCaseStudy.result}</p>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" to="/case-studies">
                        View More Case Studies
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle
            eyebrow="CTA Form"
            title="Start the conversation"
            subtitle="UI only form for service-specific outreach."
            subtitleClassName="text-warning"
          />
          <Card className="p-8">
            <motion.form
              className="grid gap-5 md:grid-cols-2"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
            >
              {[
                <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,87,255,0.1)]" placeholder="Name" type="text" />,
                <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,87,255,0.1)]" placeholder="Email" type="email" />,
                <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,87,255,0.1)] placeholder:text-text-muted md:col-span-2" placeholder="Company" type="text" />,
              ].map((field, index) => (
                <motion.div key={index} variants={staggerItem}>
                  {field}
                </motion.div>
              ))}
              <motion.div className="md:col-span-2" variants={staggerItem}>
                <textarea className="min-h-[150px] w-full rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,87,255,0.1)]" placeholder="Message" />
              </motion.div>
              <motion.div className="md:col-span-2" variants={staggerItem}>
                <button className="button-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-light" type="button">
                  Send Inquiry
                  <Mail className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.form>
          </Card>
        </div>
      </section>
    </motion.main>
  )
}

export default ServiceDetail
