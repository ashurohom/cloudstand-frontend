import { ArrowRight, BarChart3, Cpu, DollarSign, GitBranch, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'

const iconMap = { Users, BarChart3, DollarSign, GitBranch, TrendingUp, Cpu }

function Services() {
  useDocumentTitle('Oracle Cloud Services | CloudStand Consulting')
  return (
    <main className="pt-20">
      <section className="section-padding hero-mesh">
        <div className="section-shell">
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]

              return (
                <ScrollReveal key={service.slug} delay={index * 0.06}>
                  <Card className="h-full p-8">
                    <div
                      className="inline-flex h-16 w-16 items-center justify-center rounded-3xl"
                      style={{ background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.18))` }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-slate-900">{service.title}</h2>
                    <p className="mt-4 text-base leading-8 text-text-muted">{service.description}</p>
                    <ul className="mt-6 space-y-3 text-sm text-text-muted">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="rounded-2xl border border-[#d7e5ff] bg-[#f8fbff] px-4 py-3">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
