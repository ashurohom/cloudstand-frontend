import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { iconPop, pageVariants, slideLeft, slideRight, staggerContainer, staggerItem } from '../animations/variants'

const values = [
  ['Innovation', 'We modernize enterprise operations with practical, future-ready Oracle Cloud thinking.'],
  ['Excellence', 'We hold delivery quality, governance, and user adoption to a high standard.'],
  ['Transparency', 'Clients get clear plans, honest progress reporting, and accountable execution.'],
  ['Partnership', 'We work as an extension of client teams to solve business problems, not just technical tasks.'],
]

const team = [
  { initials: 'AS', name: 'Aditi Shah', title: 'Founder & Oracle Cloud Director' },
  { initials: 'RM', name: 'Rohan Mehta', title: 'Delivery Lead, ERP & Finance' },
  { initials: 'NK', name: 'Nisha Kulkarni', title: 'Practice Lead, HCM & Payroll' },
]

function About() {
  useDocumentTitle('About CloudStand | Oracle Cloud Consulting Team')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="section-padding hero-mesh gpu-layer relative overflow-hidden">
        <AICloudBackground />
        <div className="section-shell relative z-10">
          <Badge>About CloudStand</Badge>
          <motion.h1
            className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]"
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            The Team Behind <span className="text-gradient">Confident Oracle Cloud Delivery</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl text-lg leading-8 text-text-muted"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            A Pune-based Oracle Cloud consulting firm helping global clients modernize operations with sharper delivery, better governance, and measurable outcomes.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <motion.div initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <Card className="h-full p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-accent">Mission</div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Build Oracle Cloud programs that create real business momentum.</h2>
              <p className="mt-4 text-base leading-8 text-text-muted">
                We focus on implementation quality, adoption, and outcomes that matter to leadership teams, not just technical completion.
              </p>
            </Card>
          </motion.div>
          <motion.div initial="hidden" variants={slideRight} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <Card className="h-full p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-accent">Vision</div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Become the most trusted Oracle Cloud transformation partner for growth-stage enterprises.</h2>
              <p className="mt-4 text-base leading-8 text-text-muted">
                CloudStand aims to combine global delivery discipline with the agility and attention clients often miss in larger consulting models.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Our Story" title="Built by Oracle practitioners who value execution" />
          <motion.div
            className="space-y-6 text-base leading-8 text-text-muted"
            initial="hidden"
            variants={slideRight}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            <p>
              Founded in 2022, CloudStand was built by Oracle practitioners who had seen both sides of enterprise transformation: ambitious leadership goals and the delivery gaps that often slow them down.
            </p>
            <p>
              We created CloudStand to give clients a more focused Oracle Cloud partner, one that combines strategic clarity with hands-on delivery depth across HCM, ERP, Payroll, OIC, BI, and emerging AI use cases.
            </p>
            <p>
              From Pune, we support global organizations that need a responsive, accountable team capable of guiding transformation from discovery through hypercare with the same rigor at every step.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle align="center" eyebrow="Values" title="How we show up on every engagement" />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {values.map(([title, description]) => (
              <motion.div key={title} variants={staggerItem}>
                <Card className="h-full p-7">
                  <motion.span className="inline-flex rounded-2xl bg-blue-50 p-3 text-accent" initial="rest" variants={iconPop} whileHover="hover">
                    <Sparkles className="h-5 w-5" />
                  </motion.span>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="Leadership" title="A focused team with enterprise delivery instincts" />
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={staggerItem}>
                <Card className="p-7">
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light font-syne text-2xl font-bold text-white"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.06, boxShadow: '0 16px 36px rgba(0,87,255,0.2)' }}
                  >
                    {member.initials}
                  </motion.div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{member.title}</p>
                  <motion.a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent" href="#" whileHover={{ x: 4 }}>
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <motion.div initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <Card className="flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Planning your Oracle Cloud roadmap?</h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-text-muted">
                  Let&apos;s map out the right implementation, support, or optimization path for your business.
                </p>
              </div>
              <Button size="lg" to="/contact" variant="solid">
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default About
