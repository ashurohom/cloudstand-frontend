import { ArrowRight, BarChart3, Cpu, DollarSign, GitBranch, Mail, TrendingUp, Users } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import NotFound from './NotFound'

const iconMap = { Users, BarChart3, DollarSign, GitBranch, TrendingUp, Cpu }

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <NotFound />
  }

  useDocumentTitle(`${service.title} | CloudStand Consulting`)

  const relatedCaseStudy = caseStudies.find((study) => study.slug === service.caseStudySlug)
  const Icon = iconMap[service.icon]

  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: `linear-gradient(135deg, ${service.color}18, rgba(10,22,40,1) 42%, rgba(7,16,29,1) 100%)` }}>
        <div className="section-shell">
          <Badge>{service.shortTitle} Practice</Badge>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl"
                style={{ background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.2))` }}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h1 className="max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
                {service.title} Services That Move Enterprise Operations Forward
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">{service.description}</p>
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
                <ScrollReveal key={feature} delay={index * 0.04}>
                  <div className="rounded-2xl border border-[#d7e5ff] bg-[#f8fbff] px-5 py-4 text-sm leading-7 text-text-muted">
                    {feature}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Key Benefits" title="What clients gain" />
            <div className="grid gap-5">
              {service.benefits.map((benefit, index) => (
                <ScrollReveal key={benefit} delay={index * 0.08}>
                  <Card className="p-6">
                    <div className="text-sm uppercase tracking-[0.24em] text-accent">Benefit {index + 1}</div>
                    <p className="mt-3 text-base leading-8 text-slate-900">{benefit}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="Our Approach" title="A three-step delivery path" />
          <div className="grid gap-6 lg:grid-cols-3">
            {service.approach.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.08}>
                <Card className="h-full p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-base leading-8 text-text-muted">{item}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {relatedCaseStudy ? (
        <section className="section-padding bg-primary">
          <div className="section-shell">
            <SectionTitle eyebrow="Related Case Study" title={relatedCaseStudy.title} />
            <Card className="overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <img alt={relatedCaseStudy.title} className="h-full min-h-[280px] w-full object-cover" src={relatedCaseStudy.image} />
                <div className="p-8">
                  <Badge>{relatedCaseStudy.category}</Badge>
                  <p className="mt-5 text-base leading-8 text-text-muted">{relatedCaseStudy.solution}</p>
                  <p className="mt-4 text-lg font-medium text-slate-900">{relatedCaseStudy.result}</p>
                  <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" to="/case-studies">
                    View More Case Studies
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="CTA Form" title="Start the conversation" subtitle="UI only form for service-specific outreach." />
          <Card className="p-8">
            <form className="grid gap-5 md:grid-cols-2">
              <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none" placeholder="Name" type="text" />
              <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none" placeholder="Email" type="email" />
              <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none md:col-span-2" placeholder="Company" type="text" />
              <textarea className="min-h-[150px] rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none md:col-span-2" placeholder="Message" />
              <div className="md:col-span-2">
                <button className="button-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-light" type="button">
                  Send Inquiry
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default ServiceDetail
