import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  serviceInterest: services[0]?.title ?? '',
  budget: '',
  message: '',
}

function Contact() {
  useDocumentTitle('Contact CloudStand | Oracle Cloud Consultation')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    ;['name', 'email', 'phone', 'company', 'budget', 'message'].forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = 'This field is required'
      }
    })

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `rounded-2xl border bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:outline-none ${
      errors[field] ? 'border-red-500 focus:border-red-500' : 'border-[#d7e5ff] focus:border-accent'
    }`

  return (
    <main className="pt-20">
      <section className="section-padding hero-mesh">
        <div className="section-shell">
          <Badge>Contact</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            Let&apos;s Plan Your Next Oracle Cloud Move
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            Tell us about your Oracle Cloud priorities and we&apos;ll help shape the right path forward.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <SectionTitle eyebrow="Reach Us" title="CloudStand Consulting (OPC) Pvt. Ltd." />
            {[
              { icon: MapPin, title: 'Address', value: 'Office No.19, Nirvana Hub, Z Corner, Mundhwa-Manjari Rd, Manjri Bk., Pune - 412307' },
              { icon: Phone, title: 'Phone', value: '+91 9049020793' },
              { icon: Mail, title: 'Email', value: 'hr@cloudstandconsulting.com' },
              { icon: Clock3, title: 'Working Hours', value: 'Monday to Friday, 9:30 AM - 6:30 PM IST' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="p-5">
                  <div className="flex gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm uppercase tracking-[0.24em] text-text-muted">{item.title}</div>
                      <div className="mt-2 text-base leading-7 text-slate-900">{item.value}</div>
                    </div>
                  </div>
                </Card>
              )
            })}

            <Card className="flex min-h-[220px] items-center justify-center p-8">
              <div className="text-center">
                <div className="text-sm uppercase tracking-[0.24em] text-text-muted">Map</div>
                <div className="mt-4 text-2xl font-semibold text-slate-900">Google Maps Placeholder</div>
              </div>
            </Card>
          </div>

          <div>
            <SectionTitle eyebrow="Inquiry Form" title="Share your project goals" subtitle="Required fields are highlighted in red on submit." />
            <Card className="p-8">
              <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <input className={inputClass('name')} name="name" onChange={handleChange} placeholder="Name" value={form.name} />
                  {errors.name ? <span className="text-sm text-red-400">{errors.name}</span> : null}
                </div>
                <div className="flex flex-col gap-2">
                  <input className={inputClass('email')} name="email" onChange={handleChange} placeholder="Email" type="email" value={form.email} />
                  {errors.email ? <span className="text-sm text-red-400">{errors.email}</span> : null}
                </div>
                <div className="flex flex-col gap-2">
                  <input className={inputClass('phone')} name="phone" onChange={handleChange} placeholder="Phone" value={form.phone} />
                  {errors.phone ? <span className="text-sm text-red-400">{errors.phone}</span> : null}
                </div>
                <div className="flex flex-col gap-2">
                  <input className={inputClass('company')} name="company" onChange={handleChange} placeholder="Company" value={form.company} />
                  {errors.company ? <span className="text-sm text-red-400">{errors.company}</span> : null}
                </div>
                <select className={inputClass('serviceInterest')} name="serviceInterest" onChange={handleChange} value={form.serviceInterest}>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <div className="flex flex-col gap-2">
                  <select className={inputClass('budget')} name="budget" onChange={handleChange} value={form.budget}>
                    <option value="">Budget Range</option>
                    <option value="<10L">&lt;10L</option>
                    <option value="10-25L">10-25L</option>
                    <option value="25-50L">25-50L</option>
                    <option value="50L+">50L+</option>
                  </select>
                  {errors.budget ? <span className="text-sm text-red-400">{errors.budget}</span> : null}
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <textarea
                    className={`${inputClass('message')} min-h-[160px]`}
                    name="message"
                    onChange={handleChange}
                    placeholder="Message"
                    value={form.message}
                  />
                  {errors.message ? <span className="text-sm text-red-400">{errors.message}</span> : null}
                </div>
                <div className="md:col-span-2 flex flex-col items-start gap-4">
                  <Button size="lg" type="submit" variant="solid">
                    Submit
                  </Button>
                  {submitted ? (
                    <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                      Thank you. Your consultation request has been captured successfully.
                    </div>
                  ) : null}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
