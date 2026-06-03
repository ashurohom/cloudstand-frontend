import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity, ArrowRight, ChevronDown, Clock3, Cloud, Globe2, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react'
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
  {
    question: 'Which Oracle Cloud modules do you specialize in?',
    answer:
      'Our teams specialize in Oracle HCM, ERP, OIC, Payroll, Analytics, and AI-powered enterprise transformation solutions.',
  },
  {
    question: 'Do you provide post-implementation support?',
    answer:
      'Yes. We offer continuous optimization, managed support, enhancement planning, and operational guidance after go-live.',
  },
  {
    question: 'Can CloudStand work alongside our internal IT team?',
    answer:
      'Yes. We frequently collaborate with internal technology and business teams to ensure smooth execution and knowledge transfer.',
  },
  {
    question: 'Do you support Oracle Cloud integrations?',
    answer:
      'We help organizations build secure and scalable integrations across Oracle Cloud and third-party enterprise platforms.',
  },

]

function Contact() {
  useDocumentTitle('Contact CloudStand | Oracle Cloud Consultation')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [activeLocation, setActiveLocation] = useState('Pune')
  const [isModalOpen, setIsModalOpen] = useState(false)


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
    `w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-4 text-[0.97rem] font-medium text-slate-900 shadow-[0_1px_0_rgba(14,165,233,0.04)] transition-all duration-300 placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 ${errors[field] ? 'border-rose-200 focus:ring-rose-100' : ''
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
        className="relative overflow-hidden pt-12 pb-16 min-h-[calc(100vh-80px)] lg:flex lg:items-center bg-white"
      >

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />

        <div className="section-shell relative z-20 w-full">


          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-start text-left relative z-10">

            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge>CONTACT CLOUDSTAND</Badge>
            </motion.div>

            {/* BLUE LINE */}
            <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9]" />


            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-[50px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-black text-left"
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
              className="mt-6 max-w-[600px] text-[18px] leading-8 text-[#475569] text-left"
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
              className="mt-8 flex flex-wrap justify-start items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >

              {/* ORANGE BUTTON */}
              <button
                onClick={() =>
                  document.getElementById('premium-inquiry')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="inline-flex items-center gap-3 rounded-full bg-[#EA580C] px-9 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(234,88,12,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9480f]"
              >

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
              <button
                onClick={() =>
                  document.getElementById('faq')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="rounded-full border border-[#bfdbfe] bg-white px-9 py-4 text-[15px] font-semibold text-black transition-all duration-300 hover:border-[#0EA5E9] hover:bg-[#f8fbff]"
              >

                Explore FAQs

              </button>

            </motion.div>
            </div>

            {/* RIGHT VISUAL - IMAGE */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex lg:w-[45%] lg:justify-end lg:items-center relative"
            >
              <div className="relative z-10 w-[90%] max-w-[600px] aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-[#0EA5E9]/5 to-[#EA580C]/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[6px] border-white overflow-hidden flex items-center justify-center scale-100 xl:scale-105">
                <img 
                  src="/Contact/hero.png" 
                  alt="Contact Hero" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section
        id="lets-talk"
        className="relative overflow-hidden bg-white py-16 lg:py-24"
      >
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

          {/* TOP CONTENT */}
          <div className="flex flex-col items-center text-center">

            {/* LABEL */}
            <div className="w-full text-left md:text-center">
              <Badge>Contact Locations</Badge>
            </div>

            {/* LINE */}
            <div className="mt-6 h-1 w-14 rounded-full bg-[#0EA5E9]" />

            {/* HEADING */}
            <h2 className="mt-6 text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-black text-center">
              Our Global Offices
            </h2>

            {/* TEXT */}
            <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-[#475569]">
              Connect with our Oracle Cloud specialists to
              discuss implementation, optimization and
              enterprise transformation strategies tailored
              to your business goals.
            </p>

          </div>

          {/* OFFICES CARDS */}
          <div className="mx-auto mt-12 grid max-w-[1050px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">

            {/* PUNE */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[160px] w-full overflow-hidden">
                <img
                  src="/Contact/pune.jpeg"
                  alt="Pune City"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 text-left">
                <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-black">
                  Pune, India
                </h3>
                <div className="my-4 h-px w-full bg-slate-100" />

                <div className="space-y-2.5">
                  <p className="text-[14px] leading-snug text-[#475569]">
                    Office No.19, Nirvana Hub,<br />
                    Mundhwa-Manjari Road,<br />
                    Pune - 412307
                  </p>
                  <p className="text-[14.5px] font-semibold text-black">
                    info@cloudstand.com
                  </p>
                  <p className="text-[14.5px] font-semibold text-black">
                    +91 90490 20793
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TEXAS */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[160px] w-full overflow-hidden">
                <img
                  src="/Contact/texas.jpeg"
                  alt="Dallas Skyline"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 text-left">
                <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-black">
                  Texas, USA
                </h3>
                <div className="my-4 h-px w-full bg-slate-100" />

                <div className="space-y-2.5">
                  <p className="text-[14px] leading-snug text-[#475569]">
                    5430 Lyndon B Johnson Fwy,<br />
                    Suite 1200,<br />
                    Dallas, Texas 75240
                  </p>
                  <p className="text-[14.5px] font-semibold text-black">
                    texas@cloudstand.com
                  </p>
                  <p className="text-[14.5px] font-semibold text-black">
                    +1 (469) 555-1208
                  </p>
                </div>
              </div>
            </motion.div>

            {/* NEW YORK */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[160px] w-full overflow-hidden">
                <img
                  src="/Contact/newyork.jpeg"
                  alt="New York Skyline"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 text-left">
                <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-black">
                  New York, USA
                </h3>
                <div className="my-4 h-px w-full bg-slate-100" />

                <div className="space-y-2.5">
                  <p className="text-[14px] leading-snug text-[#475569]">
                    1178 Broadway,<br />
                    Manhattan,<br />
                    New York, NY 10001
                  </p>
                  <p className="text-[14.5px] font-semibold text-black">
                    usa@cloudstand.com
                  </p>
                  <p className="text-[14.5px] font-semibold text-black">
                    +1 (646) 555-9087
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EMBEDDED CONTACT FORM SECTION */}
      <section id="premium-inquiry" className="relative overflow-hidden bg-[#F7F9FC] py-16">
        <div className="section-shell relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] border border-[#e2e8f0]">

            {/* LEFT SIDE - IMAGE */}
            <div className="relative h-[250px] lg:h-auto overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Cloud Infrastructure"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/50 to-[#0f172a]/90" />

              <div className="absolute bottom-6 left-6 right-6 text-white z-10 lg:bottom-10 lg:left-10 lg:right-10">
                <div className="h-1.5 w-12 bg-[#F97316] rounded-full mb-4" />
                <h3 className="text-[26px] font-bold leading-tight tracking-tight mb-2">
                  Enterprise Cloud Solutions
                </h3>
                <p className="text-white/80 text-[14.5px] max-w-[300px] leading-relaxed">
                  Accelerating digital transformation with proven Oracle Cloud expertise.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="mb-6 flex flex-col items-center text-center">
                <Badge>Premium Inquiry</Badge>
                <h2 className="mt-4 text-[40px] font-bold leading-[1.02] tracking-tight text-[#111827] text-center">
                  Tell Us About Your Project
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#475569] text-center">
                  Let’s discuss your cloud transformation and enterprise technology needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                {/* FULL NAME */}
                <div className="md:col-span-1">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="h-[48px] w-full rounded-[12px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div className="md:col-span-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="h-[48px] w-full rounded-[12px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                  />
                </div>

                {/* COMPANY NAME */}
                <div className="md:col-span-1">
                  <input
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={handleChange}
                    className="h-[48px] w-full rounded-[12px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                  />
                </div>

                {/* PHONE NUMBER */}
                <div className="md:col-span-1">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="h-[48px] w-full rounded-[12px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                  />
                </div>

                {/* SERVICE DROPDOWN */}
                <div className="md:col-span-2 relative">
                  <select
                    name="serviceInterested"
                    value={form.serviceInterested}
                    onChange={handleChange}
                    className="h-[48px] w-full appearance-none rounded-[12px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                  >
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2563EB]">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </div>

                {/* MESSAGE TEXTAREA */}
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="min-h-[100px] w-full rounded-[12px] border border-[#e2e8f0] bg-[#F7F9FC] p-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none resize-y"
                  />
                </div>

                {/* BUTTON */}
                <div className="md:col-span-2 mt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#F97316] to-[#ea580c] px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_10px_25px_rgba(249,115,22,0.25)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(249,115,22,0.35)] hover:-translate-y-1"
                  >
                    Send Inquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </form>
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
          <div className="max-w-[760px] mx-auto flex flex-col items-center text-center">

            {/* BADGE */}
            <Badge>Visit Our Headquarters</Badge>

            {/* LINE */}
            <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

            {/* HEADING */}
            <h2 className="mt-6 text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-black text-center">

              Our Global


              Headquarters

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-[#475569] text-center">

              CloudStand Consulting headquarters serves as the
              strategic center for Oracle Cloud transformation,
              enterprise consulting and global delivery operations.
              Our Pune office brings together experienced Oracle
              specialists focused on innovation, implementation
              excellence and long-term client success.

            </p>

          </div>

          {/* MAP */}
          <div className="mt-14 overflow-hidden rounded-[32px] border border-[#dbeafe] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">

            <div className="overflow-hidden rounded-[24px]">

              <iframe
                title="CloudStand Headquarters Map"
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
        className="relative overflow-hidden bg-[#fcfcfd] py-24"
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

        {/* SOFT GLOW */}
        <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#0EA5E9]/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[#EA580C]/[0.05] blur-3xl" />

        <div className="section-shell relative z-10">

          <div className="grid gap-14 lg:grid-cols-[0.82fr_1fr] lg:items-start">

            {/* LEFT */}
            <div className="relative overflow-hidden rounded-[36px] border border-[#eef4ff] bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)] lg:p-10">

              {/* INNER GRID */}
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)
            `,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* ORANGE BLUR */}
              <div className="absolute -left-16 top-0 h-[220px] w-[220px] rounded-full bg-[#EA580C]/[0.05] blur-3xl" />

              {/* BLUE BLUR */}
              <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/[0.05] blur-3xl" />

              <div className="relative z-10 flex flex-col items-center text-center">

                <Badge>Frequently Asked Questions</Badge>

                {/* LINE */}
                <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

                {/* HEADING */}
                <h2 className="mt-6 text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-black text-center">

                  Everything You
                  <br />

                  Need To Know

                </h2>

                {/* TEXT */}
                <p className="mt-6 text-[17px] leading-8 text-[#475569] text-center">

                  Helpful answers about our Oracle Cloud consulting,
                  implementation process, support model and
                  enterprise transformation services.

                </p>

                {/* EXTRA POINTS */}
                <div className="mt-10 space-y-4">

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-[#EA580C]" />

                    <p className="text-[14px] font-medium text-[#475569]">
                      Oracle-certified consulting specialists
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-[#0EA5E9]" />

                    <p className="text-[14px] font-medium text-[#475569]">
                      Global enterprise implementation experience
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-black" />

                    <p className="text-[14px] font-medium text-[#475569]">
                      End-to-end Oracle Cloud transformation support
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT FAQ */}
            <div className="space-y-2">

              {faqs.map((item, index) => {

                const isOpen = openFaq === index

                return (

                  <motion.div
                    key={item.question}
                    whileHover={{ y: -1 }}
                  >

                    <div className="overflow-hidden rounded-[18px] border border-[#e0efff] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.03)] transition-all duration-300">

                      {/* BUTTON */}
                      <button
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        type="button"
                      >

                        {/* QUESTION */}
                        <span className="text-[14px] font-semibold leading-5 text-black">

                          {item.question}

                        </span>

                        {/* ICON */}
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                            ? 'border-[#EA580C] bg-[#fff7ed] text-[#EA580C]'
                            : 'border-[#dbeafe] bg-[#f8fbff] text-[#0EA5E9]'
                            }`}
                        >

                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
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
                              duration: 0.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >

                            <div className="border-t border-[#eff6ff] px-4 pb-3 pt-2.5">

                              <p className="text-[13px] leading-6 text-[#475569]">

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
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div
            className="relative flex flex-col justify-center overflow-hidden rounded-[40px] border border-sky-200 bg-white p-6 sm:p-10 lg:p-12 min-h-[420px]"
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 50,50 0,100 20,100 70,50 20,0' fill='rgba(14,165,233,0.05)'/%3E%3Cpolygon points='30,0 80,50 30,100 50,100 100,50 50,0' fill='rgba(234,88,12,0.04)'/%3E%3C/svg%3E")`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/Video/HPV3.mp4"
            />
            <motion.div
              className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_500px]"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <h2 className="mt-6 max-w-3xl text-[40px] font-bold text-white">
                  Unlock Oracle Cloud Value with Best Practices and Agentic AI
                </h2>
                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Button className="!border-orange-500 !bg-orange-500 !text-white !shadow-none hover:!border-orange-400 hover:!bg-orange-600 hover:!text-white" size="lg" to="/contact" variant="white">
                      Schedule Free System Health Check Analysis
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </div>

              <Card className="p-6 !bg-white/10 backdrop-blur-md !border-white/20">
                <div className="text-[12px] font-extrabold uppercase tracking-normal text-white drop-shadow-lg">Value You Receive</div>
                <ul className="mt-4 space-y-3 text-white font-medium drop-shadow-md lg:whitespace-nowrap">
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">Diagnostic Assessment Reports</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">Fit-Gap Analysis & Recommendation Roadmap</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">240-Hour Complimentary Engagement</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">No-Obligation, Zero-Pressure Approach</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Contact
