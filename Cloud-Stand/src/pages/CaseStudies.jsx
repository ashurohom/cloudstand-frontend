import { useMemo, useState } from 'react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { caseStudies } from '../data/caseStudies'

const filters = ['All', 'HCM', 'ERP', 'OIC', 'Payroll', 'BI', 'AI']

function CaseStudies() {
  useDocumentTitle('Case Studies | CloudStand Oracle Cloud Success Stories')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') {
      return caseStudies
    }

    return caseStudies.filter((study) => study.category === activeFilter)
  }, [activeFilter])

  return (
    <main className="pt-20">
      <section className="section-padding hero-mesh">
        <div className="section-shell">
          <Badge>Case Studies</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            Real Oracle Cloud Outcomes for Modern Enterprises
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            A snapshot of the Oracle Cloud programs and modernization outcomes CloudStand helps deliver.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <SectionTitle eyebrow="Filter by Service" title="Outcomes across Oracle Cloud priorities" />
          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`button-ring rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'border-accent bg-accent text-white'
                    : 'border-[#d7e5ff] bg-white text-text-muted hover:border-accent/50 hover:text-slate-900'
                }`}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={index * 0.06}>
                <Card className="overflow-hidden">
                  <img alt={study.title} className="h-64 w-full object-cover" src={study.image} />
                  <div className="p-7">
                    <Badge className="border-accent/20 bg-blue-50 text-accent">{study.category}</Badge>
                    <h2 className="mt-5 text-3xl font-bold text-slate-900">{study.title}</h2>
                    <div className="mt-4 grid gap-4 text-sm leading-7 text-text-muted">
                      <div>
                        <span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Solution:</span> {study.solution}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Result:</span> {study.result}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudies
