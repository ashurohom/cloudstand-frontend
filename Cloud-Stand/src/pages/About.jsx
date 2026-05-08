import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'

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
  return (
    <main className="pt-20">
      <section className="section-padding hero-mesh">
        <div className="section-shell">
          <Badge>About CloudStand</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            The Team Behind <span className="text-gradient">Confident Oracle Cloud Delivery</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            A Pune-based Oracle Cloud consulting firm helping global clients modernize operations with sharper delivery, better governance, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <Card className="h-full p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-accent">Mission</div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Build Oracle Cloud programs that create real business momentum.</h2>
              <p className="mt-4 text-base leading-8 text-text-muted">
                We focus on implementation quality, adoption, and outcomes that matter to leadership teams, not just technical completion.
              </p>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Card className="h-full p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-accent">Vision</div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Become the most trusted Oracle Cloud transformation partner for growth-stage enterprises.</h2>
              <p className="mt-4 text-base leading-8 text-text-muted">
                CloudStand aims to combine global delivery discipline with the agility and attention clients often miss in larger consulting models.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Our Story" title="Built by Oracle practitioners who value execution" />
          <div className="space-y-6 text-base leading-8 text-text-muted">
            <p>
              Founded in 2022, CloudStand was built by Oracle practitioners who had seen both sides of enterprise transformation: ambitious leadership goals and the delivery gaps that often slow them down.
            </p>
            <p>
              We created CloudStand to give clients a more focused Oracle Cloud partner, one that combines strategic clarity with hands-on delivery depth across HCM, ERP, Payroll, OIC, BI, and emerging AI use cases.
            </p>
            <p>
              From Pune, we support global organizations that need a responsive, accountable team capable of guiding transformation from discovery through hypercare with the same rigor at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Values" title="How we show up on every engagement" align="center" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map(([title, description], index) => (
              <ScrollReveal key={title} delay={index * 0.08}>
                <Card className="h-full p-7">
                  <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="Leadership" title="A focused team with enterprise delivery instincts" />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <Card className="p-7">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light font-syne text-2xl font-bold text-white">
                    {member.initials}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{member.title}</p>
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent" href="#">
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
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
        </div>
      </section>
    </main>
  )
}

export default About
