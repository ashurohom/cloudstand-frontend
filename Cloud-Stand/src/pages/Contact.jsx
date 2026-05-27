import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Clock3, Globe2, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { fadeUp, pageVariants, staggerContainer, staggerItem } from '../animations/variants'


const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  serviceInterested: services[0]?.title ?? '',
  message: '',
}

const contactInfoCards = [
  {
    title: 'Quick Contact',
    description: 'Speak with a CloudStand specialist about your Oracle roadmap and next steps.',
    value: '+91 9049020793',
    href: 'tel:+919049020793',
    icon: Phone,
    accent: 'Live',
  },
  {
    title: 'Response Time',
    description: 'Most requests are reviewed within one business day with a tailored path forward.',
    value: '24 hr support window',
    href: 'mailto:info@cloudstand.com',
    icon: Clock3,
    accent: 'Fast',
  },
  {
    title: 'Global Presence',
    description: 'We support teams across markets with practical guidance, delivery expertise, and advisory support.',
    value: 'Worldwide consulting',
    href: 'https://maps.google.com/?q=Office+No.19,+Nirvana+Hub,+Z+Corner,+Mundhwa-Manjari+Rd,+Manjri+Bk.,+Pune+-+412307',
    icon: Globe2,
    accent: 'Global',
  },
]

const faqs = [
  {
    question: 'What types of Oracle Cloud projects does CloudStand support?',
    answer:
      'We support Oracle HCM, ERP, Payroll, Integration, BI, and AI-led transformation programs from advisory and implementation through post-go-live optimization.',
  },
  {
    question: 'How quickly can we start a consultation?',
    answer:
      'Most discovery calls are scheduled within 24 hours. We tailor the engagement based on your priorities, timeline, and business goals.',
  },
  {
    question: 'Do you support global operations and multi-region teams?',
    answer:
      'Yes, we regularly partner with distributed organizations and design delivery models that fit regional compliance, governance, and cross-functional alignment.',
  },
  {
    question: 'Can you help with rollout planning and change support?',
    answer:
      'Absolutely. We help teams shape implementation phases, adoption readiness, and operating support so the transformation sustains beyond launch.',
  },
]

function Contact() {
  useDocumentTitle('Contact CloudStand | Oracle Cloud Consultation')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [activeLocation, setActiveLocation] = useState('Pune')
 
  

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

    ;['name', 'company', 'email', 'phone', 'country', 'serviceInterested', 'message'].forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = 'This field is required'
      }
    })

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (form.email && !emailPattern.test(form.email)) {
      nextErrors.email = 'Enter a valid email address'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-4 text-[0.97rem] font-medium text-slate-900 shadow-[0_1px_0_rgba(14,165,233,0.04)] transition-all duration-300 placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 ${
      errors[field] ? 'border-rose-200 focus:ring-rose-100' : ''
    }`

  const scrollToSection = (id) => {
    const target = document.getElementById(id)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
const officeLocations = {
  Pune: {
    address: `Office No.19, Nirvana Hub,
Mundhwa-Manjari Road,
Pune - 412307`,
    map: 'https://www.google.com/maps?q=Office%20No.19,%20Nirvana%20Hub,%20Z%20Corner,%20Mundhwa-Manjari%20Rd,%20Manjri%20Bk.,%20Pune%20-%20412307&z=14&output=embed',
  },

  Texas: {
    address: `5430 Lyndon B Johnson Fwy,
Suite 1200,
Dallas, Texas 75240`,
    map: 'https://www.google.com/maps?q=Dallas+Texas&z=12&output=embed',
  },

  USA: {
    address: `1178 Broadway,
Manhattan,
New York, NY 10001`,
    map: 'https://www.google.com/maps?q=Manhattan+New+York&z=12&output=embed',
  },
}
  

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
     <section

  className="relative overflow-hidden pt-20 pb-24 lg:min-h-[88vh] lg:flex lg:items-center"

  style={{

    backgroundColor: '#ffffff',

    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.085)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.08)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.04)' /%3E%3C/svg%3E")`,

    backgroundSize: '100% 100%',

    backgroundRepeat: 'no-repeat',

    backgroundPosition: 'center',

  }}

>

  {/* SOFT OVERLAY */}
  <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />

  <div className="section-shell relative z-20 w-full">
{/* RIGHT TYPOGRAPHY BACKGROUND */}

<div className="pointer-events-none absolute right-[-40px] top-1/2 hidden -translate-y-1/2 select-none lg:block">

  <div className="text-right leading-[0.8]">

    <div className="text-[7rem] font-black tracking-[-0.08em] text-[#EA580C]/[0.12]">

      ORACLE

    </div>

    <div className="mt-2 text-[6rem] font-black tracking-[-0.08em] text-[#EA580C]/[0.10]">

      CLOUD

    </div>

    <div className="mt-2 text-[5rem] font-black tracking-[-0.08em] text-[#EA580C]/[0.08]">

      CONSULTING

    </div>

  </div>

</div>

    {/* LEFT CONTENT */}
    <div className="max-w-[760px]">

     

      <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Contact CloudStand</Badge>
          </motion.div>

      {/* BLUE LINE */}
      <div className="mt-7 h-1 w-16 rounded-full bg-[#0EA5E9]" />

      {/* HEADING */}
      {/* HEADING */}
<motion.h1
  animate={{ opacity: 1, y: 0 }}
  className="mt-7 text-[3.6rem] font-bold leading-[0.92] tracking-[-0.07em] text-black"
  initial={{ opacity: 0, y: 25 }}
  transition={{ duration: 0.7, delay: 0.1 }}
>

  Let’s Build Something
  <br />

  Exceptional

</motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 max-w-[700px] text-[20px] leading-9 text-[#475569]"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >

        Connect with CloudStand Consulting to discuss
        Oracle Cloud implementation, optimization and
        enterprise transformation strategies tailored
        to your business goals.

      </motion.p>

      {/* BUTTONS */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 flex flex-wrap items-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >

        {/* ORANGE BUTTON */}
        <button className="inline-flex items-center gap-3 rounded-full bg-[#EA580C] px-9 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(234,88,12,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9480f]">

          Book a Consultation

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </span>

        </button>

        {/* SECONDARY BUTTON */}
        <button className="rounded-full border border-[#bfdbfe] bg-white px-9 py-4 text-[15px] font-semibold text-black transition-all duration-300 hover:border-[#0EA5E9] hover:bg-[#f8fbff]">

          Explore FAQs

        </button>

      </motion.div>

 

    </div>

  </div>

</section>


 <section className="relative overflow-hidden bg-white py-24">

  {/* BACKGROUND TEXTURE */}
  <div
    className="absolute inset-0 opacity-[0.5]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.05)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.05)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  />

  <div className="section-shell relative z-10">

    <div className="grid gap-20 lg:grid-cols-[0.85fr_1fr]">

      {/* LEFT SIDE */}
     <div className="max-w-[470px]">

  {/* LABEL */}
  <Badge>Let’s Talk</Badge>

  {/* LINE */}
  <div className="mt-6 h-1 w-14 rounded-full bg-[#0EA5E9]" />

  {/* HEADING */}
  <h2 className="mt-7 text-[2.5rem] font-bold leading-[0.98] tracking-[-0.05em] text-black">

    Start Your
    <br />

    Cloud Journey

  </h2>

  {/* TEXT */}
  <p className="mt-6 max-w-[460px] text-[16px] leading-8 text-[#475569]">

    Connect with our Oracle Cloud specialists to
    discuss implementation, optimization and
    enterprise transformation strategies tailored
    to your business goals.

  </p>

  {/* LOCATION BUTTONS */}
  <div className="mt-10 flex flex-wrap gap-3">

    {[
      'Pune',
      'Texas',
      'USA',
    ].map((location) => (

      <button
        key={location}
        type="button"
        onClick={() => setActiveLocation(location)}
        className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
          activeLocation === location
            ? 'bg-[#EA580C] text-white shadow-[0_10px_24px_rgba(234,88,12,0.22)]'
            : 'border border-[#dbeafe] bg-white text-black hover:border-[#EA580C]'
        }`}
      >

        {location}

      </button>

    ))}

  </div>

  {/* INFO */}
  <div className="mt-12 space-y-8">

    {/* EMAIL */}
    <div>

      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0EA5E9]">
        Email
      </p>

      <h3 className="mt-2 text-[1rem] font-semibold text-black">

        {activeLocation === 'Pune' && 'info@cloudstand.com'}
        {activeLocation === 'Texas' && 'texas@cloudstand.com'}
        {activeLocation === 'USA' && 'usa@cloudstand.com'}

      </h3>

    </div>

    {/* PHONE */}
    <div>

      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0EA5E9]">
        Phone
      </p>

      <h3 className="mt-2 text-[1rem] font-semibold text-black">

        {activeLocation === 'Pune' && '+91 90490 20793'}
        {activeLocation === 'Texas' && '+1 (469) 555-1208'}
        {activeLocation === 'USA' && '+1 (646) 555-9087'}

      </h3>

    </div>

    {/* OFFICE */}
    <div>

      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0EA5E9]">
        Office
      </p>

      <div className="mt-2 text-[1rem] leading-8 text-black">

        {activeLocation === 'Pune' && (
          <>
            Office No.19, Nirvana Hub,
            <br />
            Mundhwa-Manjari Road,
            <br />
            Pune - 412307
          </>
        )}

        {activeLocation === 'Texas' && (
          <>
            5430 Lyndon B Johnson Fwy,
            <br />
            Suite 1200,
            <br />
            Dallas, Texas 75240
          </>
        )}

        {activeLocation === 'USA' && (
          <>
            1178 Broadway,
            <br />
            Manhattan,
            <br />
            New York, NY 10001
          </>
        )}

      </div>

    </div>

  </div>

</div>

      {/* RIGHT SIDE */}
      <div>

        <div className="rounded-[36px] border border-[#dbeafe] bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.06)] backdrop-blur-sm lg:p-10">

          {/* TOP */}
          <div className="mb-8">
            <Badge>Premium Inquiry</Badge>

            <h3 className="mt-4 text-[2.2rem] font-bold tracking-[-0.05em] text-black">
              Tell us about your project
            </h3>

          </div>

          {/* FORM */}
          <motion.form
            className="grid gap-5 md:grid-cols-2"
            initial="hidden"
            onSubmit={handleSubmit}
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >

            {/* NAME */}
            <motion.div variants={staggerItem}>

              <input
                className="h-[60px] w-full rounded-2xl border border-[#dbeafe] bg-white px-5 text-[15px] text-black placeholder:text-[#94a3b8] focus:border-[#0EA5E9] focus:outline-none"
                name="name"
                onChange={handleChange}
                placeholder="Full Name"
                type="text"
                value={form.name}
              />

            </motion.div>

            {/* EMAIL */}
            <motion.div variants={staggerItem}>

              <input
                className="h-[60px] w-full rounded-2xl border border-[#dbeafe] bg-white px-5 text-[15px] text-black placeholder:text-[#94a3b8] focus:border-[#0EA5E9] focus:outline-none"
                name="email"
                onChange={handleChange}
                placeholder="Email Address"
                type="email"
                value={form.email}
              />

            </motion.div>

            {/* COMPANY */}
            <motion.div variants={staggerItem}>

              <input
                className="h-[60px] w-full rounded-2xl border border-[#dbeafe] bg-white px-5 text-[15px] text-black placeholder:text-[#94a3b8] focus:border-[#0EA5E9] focus:outline-none"
                name="company"
                onChange={handleChange}
                placeholder="Company Name"
                type="text"
                value={form.company}
              />

            </motion.div>

            {/* PHONE */}
            <motion.div variants={staggerItem}>

              <input
                className="h-[60px] w-full rounded-2xl border border-[#dbeafe] bg-white px-5 text-[15px] text-black placeholder:text-[#94a3b8] focus:border-[#0EA5E9] focus:outline-none"
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
                type="text"
                value={form.phone}
              />

            </motion.div>

            {/* SERVICE */}
            <motion.div
              className="md:col-span-2"
              variants={staggerItem}
            >

              <div className="relative">

                <select
                  className="h-[60px] w-full appearance-none rounded-2xl border border-[#dbeafe] bg-white px-5 text-[15px] text-black focus:border-[#0EA5E9] focus:outline-none"
                  name="serviceInterested"
                  onChange={handleChange}
                  value={form.serviceInterested}
                >

                  {services.map((service) => (
                    <option
                      key={service.slug}
                      value={service.title}
                    >
                      {service.title}
                    </option>
                  ))}

                </select>

                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#0EA5E9]">
                  ▼
                </div>

              </div>

            </motion.div>

            {/* MESSAGE */}
            <motion.div
              className="md:col-span-2"
              variants={staggerItem}
            >

              <textarea
                className="min-h-[180px] w-full rounded-2xl border border-[#dbeafe] bg-white px-5 py-4 text-[15px] text-black placeholder:text-[#94a3b8] focus:border-[#0EA5E9] focus:outline-none"
                name="message"
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                value={form.message}
              />

            </motion.div>

            {/* BUTTON */}
            <motion.div
              className="md:col-span-2"
              variants={staggerItem}
            >

              <button
                className="inline-flex items-center gap-3 rounded-full bg-[#EA580C] px-8 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#d9480f]"
                type="submit"
              >

                Send Inquiry

                <ArrowRight className="h-4 w-4" />

              </button>

            </motion.div>

          </motion.form>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="relative overflow-hidden bg-white py-24">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 opacity-[0.45]"
    style={{
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.04)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.04)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }}
  />

  <div className="section-shell relative z-10">

    {/* TOP */}
    <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-end">

      {/* LEFT */}
      <div className="max-w-[760px]">

        <Badge>Visit Our Office</Badge>

        {/* LINE */}
        <div className="mt-7 h-1 w-16 rounded-full bg-[#0EA5E9]" />

        {/* HEADING */}
        <h2 className="mt-7 text-[3rem] font-bold leading-[0.95] tracking-[-0.06em] text-black">

          Visit Our
         

          Offices

        </h2>

        {/* TEXT */}
        <p className="mt-7 max-w-[620px] text-[17px] leading-8 text-[#475569]">

          Meet our Oracle Cloud consulting team and
          collaborate with experts driving enterprise
          transformation and cloud innovation.

        </p>

      </div>

      {/* RIGHT ADDRESS CARD */}
      <div className="rounded-[32px] border border-[#dbeafe] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">

        <Badge>Global Locations</Badge>

        {/* LOCATION BUTTONS */}
        <div className="mt-6 flex flex-wrap gap-3">

          {[
            'Pune',
            'Texas',
            'USA',
          ].map((location) => (

            <button
              key={location}
              type="button"
              onClick={() => setActiveLocation(location)}
              className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                activeLocation === location
                  ? 'bg-[#EA580C] text-white shadow-[0_10px_24px_rgba(234,88,12,0.22)]'
                  : 'border border-[#dbeafe] bg-white text-black hover:border-[#EA580C]'
              }`}
            >

              {location}

            </button>

          ))}

        </div>

        {/* ADDRESS */}
        <div className="mt-7">

          <h3 className="text-[1.7rem] font-bold tracking-[-0.04em] text-black">
            {activeLocation}
          </h3>

          <div className="mt-5 whitespace-pre-line text-[16px] leading-8 text-[#475569]">

            {officeLocations[activeLocation].address}

          </div>

        </div>

      </div>

    </div>

    {/* MAP */}
    <div className="mt-14 overflow-hidden rounded-[32px] border border-[#dbeafe] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">

      <div className="overflow-hidden rounded-[24px]">

        <iframe
          title="CloudStand office map"
          src="https://www.google.com/maps?q=Office%20No.19,%20Nirvana%20Hub,%20Z%20Corner,%20Mundhwa-Manjari%20Rd,%20Manjri%20Bk.,%20Pune%20-%20412307&z=14&output=embed"
          className="h-[560px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>

    </div>

  </div>

</section>

     <section
  id="faq"
  className="relative overflow-hidden bg-white py-24"
>

  {/* BACKGROUND TEXTURE */}
  <div
    className="absolute inset-0 opacity-[0.18]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)
      `,
      backgroundSize: '24px 24px',
    }}
  />

  <div className="section-shell relative z-10">

    <div className="grid gap-16 lg:grid-cols-[0.78fr_1fr]">

      {/* LEFT */}
      <div className="max-w-[460px]">

        <Badge>Frequently Asked Questions</Badge>

        {/* LINE */}
        <div className="mt-7 h-1 w-16 rounded-full bg-[#0EA5E9]" />

        {/* HEADING */}
        <h2 className="mt-7 text-[3rem] font-bold leading-[0.95] tracking-[-0.06em] text-black">

          Everything You
          <br />

          Need To Know

        </h2>

        {/* TEXT */}
        <p className="mt-7 text-[17px] leading-8 text-[#475569]">

          Helpful answers about our Oracle Cloud consulting,
          implementation process, support model and
          enterprise transformation services.

        </p>

      </div>

      {/* RIGHT FAQ */}
      <div className="space-y-5">

        {faqs.map((item, index) => {

          const isOpen = openFaq === index

          return (

            <motion.div
              key={item.question}
              whileHover={{ y: -2 }}
            >

              <div className="overflow-hidden rounded-[28px] border border-[#dbeafe] bg-white shadow-[0_15px_40px_rgba(15,23,42,0.04)] transition-all duration-300">

                {/* BUTTON */}
                <button
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  type="button"
                >

                  {/* QUESTION */}
                  <span className="text-[1.02rem] font-semibold leading-7 text-black">

                    {item.question}

                  </span>

                  {/* ICON */}
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#EA580C] bg-[#fff7ed] text-[#EA580C]'
                        : 'border-[#dbeafe] bg-[#f8fbff] text-[#0EA5E9]'
                    }`}
                  >

                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />

                  </span>

                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>

                  {isOpen ? (

                    <motion.div
                      animate={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                      exit={{ opacity: 0, height: 0 }}
                      initial={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >

                      <div className="border-t border-[#eff6ff] px-7 pb-7 pt-5">

                        <p className="text-[15px] leading-8 text-[#475569]">

                          {item.answer}

                        </p>

                      </div>

                    </motion.div>

                  ) : null}

                </AnimatePresence>

              </div>

            </motion.div>

          )
        })}

      </div>

    </div>

  </div>

</section>

      <section className="py-16 bg-white">

  <div className="section-shell">

    <motion.div
      className="relative overflow-hidden rounded-[30px] border border-[#bfdbfe] bg-[#fcfcfc] px-7 py-8 lg:px-10 lg:py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">

        {/* LEFT SIDE */}
        <div className="max-w-[650px]">

          {/* LABEL */}
          <Badge>Free Strategy Session</Badge>

          {/* HEADING */}
          <h2 className="mt-6 text-[2.6rem] font-bold leading-[0.95] tracking-[-0.06em] text-black">

            Ready to Modernize
            <br />

            Your Oracle Ecosystem?

          </h2>

          {/* TEXT */}
          <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-[#475569]">

            Let&apos;s discuss your Oracle Cloud roadmap with
            a focused 30-minute consultation designed around
            transformation, optimization and business growth.

          </p>

          {/* BUTTON */}
          <div className="mt-8">

            <button
              onClick={() => scrollToSection('contact-form')}
              className="inline-flex items-center gap-3 rounded-full bg-[#EA580C] px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#d9480f]"
            >

              Schedule a Free Call

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="rounded-[26px] border border-[#bfdbfe] bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0EA5E9]">
            What You Get
          </p>

          <div className="mt-6 space-y-5">

            {/* ITEM */}
            <div className="flex items-start gap-3">

              <div className="mt-2 h-2 w-2 rounded-full bg-[#EA580C]" />

              <p className="text-[15px] font-medium leading-7 text-black">
                30-minute free consultation
              </p>

            </div>

            {/* ITEM */}
            <div className="flex items-start gap-3">

              <div className="mt-2 h-2 w-2 rounded-full bg-[#0EA5E9]" />

              <p className="text-[15px] font-medium leading-7 text-black">
                No commitment required
              </p>

            </div>

            {/* ITEM */}
            <div className="flex items-start gap-3">

              <div className="mt-2 h-2 w-2 rounded-full bg-black" />

              <p className="text-[15px] font-medium leading-7 text-black">
                Direct Oracle experts access
              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>
    </motion.main>
  )
}

export default Contact
