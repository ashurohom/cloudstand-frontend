import { useEffect } from 'react'
import { ArrowRight, BarChart3, Cpu, DollarSign, GitBranch, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { cardHover, iconPop, pageVariants, staggerContainer, staggerItem } from '../animations/variants'

const iconMap = { Users, BarChart3, DollarSign, GitBranch, TrendingUp, Cpu }

function Services() {
  useDocumentTitle('Oracle Cloud Services | CloudStand Consulting')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="section-padding hero-mesh gpu-layer relative overflow-hidden">
        <AICloudBackground />
        <div className="section-shell relative z-10">
          <Badge>Oracle Cloud Services</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            Consulting Services for Every Stage of Your Oracle Cloud Journey
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            Implementation, support, training, and optimization services for enterprises building around Oracle Cloud.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Capabilities"
            title="Six core service lines designed for end-to-end transformation"
            subtitle="From implementation strategy to post-go-live stabilization."
          />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon]

              return (
                <motion.div key={service.slug} variants={staggerItem}>
                  <motion.div animate="rest" className="group relative h-full" initial="rest" variants={cardHover} whileHover="hover">
                    <motion.div
                      className="absolute left-0 top-0 h-full w-1 rounded-full"
                      initial={{ scaleY: 0, originY: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      whileHover={{ scaleY: 1 }}
                      style={{ background: `linear-gradient(180deg, ${service.color}, #3d8bff)` }}
                    />
                    <Card className="h-full p-8">
                      <motion.div
                        className="inline-flex h-16 w-16 items-center justify-center rounded-3xl"
                        initial="rest"
                        style={{ background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.18))` }}
                        variants={iconPop}
                        whileHover="hover"
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <h2 className="mt-6 text-3xl font-bold text-slate-900">{service.title}</h2>
                      <p className="mt-4 text-base leading-8 text-text-muted">{service.description}</p>
                      <ul className="mt-6 space-y-3 text-sm text-text-muted">
                        {service.features.slice(0, 3).map((feature) => (
                          <li className="rounded-2xl border border-[#d7e5ff] bg-[#f8fbff] px-4 py-3" key={feature}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" to={`/services/${service.slug}`}>
                        Learn More
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
    </motion.main>
  )
}

export default Services
