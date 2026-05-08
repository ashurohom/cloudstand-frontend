import { useState } from 'react'
import { Briefcase, GraduationCap, Laptop, TrendingUp } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { jobs } from '../data/jobs'

const perks = [
  { icon: Laptop, title: 'Remote Friendly', text: 'Flexible collaboration model for focused delivery and better work rhythms.' },
  { icon: GraduationCap, title: 'Learning Budget', text: 'Continuous upskilling support for certifications, courses, and professional growth.' },
  { icon: Briefcase, title: 'Oracle Training', text: 'Hands-on exposure to Oracle Cloud programs across business functions and industries.' },
  { icon: TrendingUp, title: 'Growth Path', text: 'A clear runway for ownership, client exposure, and advancement as the company scales.' },
]

function Careers() {
  useDocumentTitle('Careers | Join CloudStand Consulting')
  const [selectedRole, setSelectedRole] = useState(jobs[0]?.title ?? '')

  return (
    <main className="pt-20">
      <section className="section-padding hero-mesh">
        <div className="section-shell">
          <Badge>Careers</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            Build the Future of Oracle Cloud Consulting With Us
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            Work on meaningful Oracle Cloud transformation programs with a team that values trust, ownership, and continuous learning.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Why Work With Us" title="A place to grow with high-impact enterprise work" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {perks.map((perk, index) => {
              const Icon = perk.icon

              return (
                <ScrollReveal key={perk.title} delay={index * 0.06}>
                  <Card className="h-full p-7">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-accent/15 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-slate-900">{perk.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-text-muted">{perk.text}</p>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <div className="section-shell">
          <SectionTitle eyebrow="Open Roles" title="Current opportunities" />
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 0.06}>
                <Card className="p-7">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{job.title}</h2>
                      <div className="mt-3 flex flex-wrap gap-3 text-sm text-text-muted">
                        <span>{job.location}</span>
                        <span>{job.type}</span>
                        <span>{job.experience}</span>
                      </div>
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-text-muted">{job.summary}</p>
                    </div>
                    <Button size="lg" variant="solid">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Application Form" title="Tell us a bit about yourself" subtitle="UI only form with no backend submission." />
          <Card className="p-8">
            <form className="grid gap-5 md:grid-cols-2">
              <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none" placeholder="Name" type="text" />
              <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none" placeholder="Email" type="email" />
              <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none" placeholder="Phone" type="tel" />
              <select
                className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 focus:border-accent focus:outline-none"
                onChange={(event) => setSelectedRole(event.target.value)}
                value={selectedRole}
              >
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
              <input className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none md:col-span-2" placeholder="LinkedIn URL" type="url" />
              <textarea className="min-h-[150px] rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none md:col-span-2" placeholder="Cover Note" />
              <div className="md:col-span-2 flex flex-wrap gap-4">
                <button className="button-ring rounded-full border border-[#d7e5ff] bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-accent/40" type="button">
                  Upload Resume
                </button>
                <Button size="lg" variant="solid">
                  Submit Application
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default Careers
