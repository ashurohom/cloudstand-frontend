import { useEffect, useState } from 'react'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import FeedbackSection from '../components/sections/FeedbackSection'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { pageVariants, slideLeft, slideRight, staggerContainer, staggerItem } from '../animations/variants'

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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
    `rounded-2xl border bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,87,255,0.1)] ${
      errors[field] ? 'border-error focus:border-error' : 'border-[#d7e5ff] focus:border-accent'
    }`

  const scrollToSection = (id) => {
    const target = document.getElementById(id)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="section-padding hero-mesh gpu-layer relative overflow-hidden">
        <AICloudBackground />
        <div className="section-shell relative z-10">
          <Badge>Contact</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            Let&apos;s Plan Your Next Oracle Cloud Move
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            Tell us about your Oracle Cloud priorities and we&apos;ll help shape the right path forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('contact-form')} size="lg" variant="solid">
              Contact
            </Button>
            <Button size="lg" to="/resolve-query" variant="ghost">
              Resolve Query
            </Button>
            <Button onClick={() => scrollToSection('feedback-section')} size="lg" variant="ghost">
              Feedback
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="space-y-5" initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <SectionTitle eyebrow="Reach Us" title="CloudStand Consulting (OPC) Pvt. Ltd." />
            <motion.div animate="visible" className="space-y-5" initial="hidden" variants={staggerContainer}>
              {[
                { icon: MapPin, title: 'Address', value: 'Office No.19, Nirvana Hub, Z Corner, Mundhwa-Manjari Rd, Manjri Bk., Pune - 412307' },
                { icon: Phone, title: 'Phone', value: '+91 9049020793' },
                { icon: Mail, title: 'Email', value: 'hr@cloudstandconsulting.com' },
                { icon: Clock3, title: 'Working Hours', value: 'Monday to Friday, 9:30 AM - 6:30 PM IST' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.title} variants={staggerItem}>
                    <Card className="p-5">
                      <div className="flex gap-4">
                        <motion.span
                          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent"
                          initial={{ scale: 0 }}
                          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                          whileHover={{ rotate: -5, scale: 1.06 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.span>
                        <div>
                          <div className="text-sm uppercase tracking-[0.24em] text-text-muted">{item.title}</div>
                          <div className="mt-2 text-base leading-7 text-slate-900">{item.value}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>

            <Card className="flex min-h-[220px] items-center justify-center p-8">
              <div className="text-center">
                <div className="text-sm uppercase tracking-[0.24em] text-text-muted">Map</div>
                <div className="mt-4 text-2xl font-semibold text-slate-900">Google Maps Placeholder</div>
              </div>
            </Card>
          </motion.div>

          <motion.div id="contact-form" initial="hidden" variants={slideRight} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <SectionTitle
              eyebrow="Inquiry Form"
              title="Share your project goals"
              subtitle="Required fields are highlighted in red on submit."
              subtitleClassName="text-warning"
            />
            <Card className="p-8">
              <motion.form
                className="grid gap-5 md:grid-cols-2"
                initial="hidden"
                onSubmit={handleSubmit}
                variants={staggerContainer}
                viewport={{ once: true, margin: '-80px' }}
                whileInView="visible"
              >
                {[
                  { name: 'name', placeholder: 'Name', type: 'text', className: '' },
                  { name: 'email', placeholder: 'Email', type: 'email', className: '' },
                  { name: 'phone', placeholder: 'Phone', type: 'text', className: '' },
                  { name: 'company', placeholder: 'Company', type: 'text', className: '' },
                ].map((field) => (
                  <motion.div className="flex flex-col gap-2" key={field.name} variants={staggerItem}>
                    <input className={inputClass(field.name)} name={field.name} onChange={handleChange} placeholder={field.placeholder} type={field.type} value={form[field.name]} />
                    {errors[field.name] ? <span className="text-sm text-error">{errors[field.name]}</span> : null}
                  </motion.div>
                ))}
                <motion.div variants={staggerItem}>
                  <select className={inputClass('serviceInterest')} name="serviceInterest" onChange={handleChange} value={form.serviceInterest}>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </motion.div>
                <motion.div className="flex flex-col gap-2" variants={staggerItem}>
                  <select className={inputClass('budget')} name="budget" onChange={handleChange} value={form.budget}>
                    <option value="">Budget Range</option>
                    <option value="<10L">&lt;10L</option>
                    <option value="10-25L">10-25L</option>
                    <option value="25-50L">25-50L</option>
                    <option value="50L+">50L+</option>
                  </select>
                  {errors.budget ? <span className="text-sm text-error">{errors.budget}</span> : null}
                </motion.div>
                <motion.div className="flex flex-col gap-2 md:col-span-2" variants={staggerItem}>
                  <textarea
                    className={`${inputClass('message')} min-h-[160px]`}
                    name="message"
                    onChange={handleChange}
                    placeholder="Message"
                    value={form.message}
                  />
                  {errors.message ? <span className="text-sm text-error">{errors.message}</span> : null}
                </motion.div>
                <motion.div className="md:col-span-2 flex flex-col items-start gap-4" variants={staggerItem}>
                  <Button size="lg" type="submit" variant="solid">
                    Submit
                  </Button>
                  {submitted ? (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
                      initial={{ opacity: 0, y: 8 }}
                    >
                      Thank you. Your consultation request has been captured successfully.
                    </motion.div>
                  ) : null}
                </motion.div>
              </motion.form>
            </Card>
          </motion.div>
        </div>
      </section>

      <FeedbackSection />
    </motion.main>
  )
}

export default Contact
