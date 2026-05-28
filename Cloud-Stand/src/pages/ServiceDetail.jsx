import { useEffect } from 'react'
import { ArrowRight, BarChart3, Check, Cpu, DollarSign, Mail, GitBranch, TrendingUp, Users } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroTitle from '../components/ui/HeroTitle'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import NotFound from './NotFound'
import { fadeIn, fadeUp, pageVariants, slideLeft, staggerContainer, staggerItem } from '../animations/variants'

const iconMap = { Users, BarChart3, DollarSign, GitBranch, TrendingUp, Cpu }

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useDocumentTitle(service ? `${service.title} | CloudStand Consulting` : 'Service Detail | CloudStand Consulting')

  if (!service) {
    return <NotFound />
  }

  const relatedCaseStudy = caseStudies.find((study) => study.slug === service.caseStudySlug)
  const Icon = iconMap[service.icon]

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section
        className="section-padding relative overflow-hidden bg-white"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.04)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.04)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft blur glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="section-shell relative z-10">
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{
              duration: 0.4,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Badge>{service.shortTitle} Practice</Badge>
          </motion.div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <motion.div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl"
                initial={{ scale: 0, opacity: 0 }}
                style={{
                  background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.2))`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                whileInView={{ scale: 1, opacity: 1 }}
              >
                <Icon className="h-7 w-7 text-white" />
              </motion.div>

              <h1 className="max-w-5xl text-3xl font-extrabold leading-[1.02] tracking-[-0.03em] text-slate-900 md:text-4xl lg:text-5xl">
                <HeroTitle
                  className="text-black"
                  text={service.title}
                />
              </h1>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-3xl text-lg leading-8 text-slate-600"
                initial={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.55,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {service.description}
              </motion.p>
            </div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Button size="lg" to="/contact" variant="solid">
                Talk to an Expert
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white font-['Open_Sans']">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Side */}
          <div>
            {/* Heading */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/5 px-4 py-1.5">
                <div className="h-2 w-2 rounded-full bg-[#0EA5E9]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0EA5E9]">
                  What We Offer
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-[2.75rem] lg:text-[3rem]">
                Practical delivery built
                <span className="block text-[#0EA5E9]">
                  around your business
                </span>
              </h2>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  custom={index * 0.8}
                  initial="hidden"
                  variants={slideLeft}
                  viewport={{ once: true, margin: '-80px' }}
                  whileInView="visible"
                  className="rounded-2xl border border-[#0EA5E9]/10 bg-white px-5 py-4 shadow-[0_6px_20px_rgba(14,165,233,0.04)]"
                >

                  {/* Top Border */}
                  <div className="mb-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#EA580C]" />

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <motion.div
                      className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#EA580C]"
                      initial={{ scale: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 320,
                        damping: 18,
                        delay: 0.12 + index * 0.06,
                      }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="h-4 w-4 text-white" />
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EA580C]">
                        Feature 0{index + 1}
                      </span>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {feature}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div>

            {/* Heading */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EA580C]/20 bg-[#EA580C]/5 px-4 py-1.5">
                <div className="h-2 w-2 rounded-full bg-[#EA580C]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#EA580C]">
                  Key Benefits
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-[2.75rem] lg:text-[3rem]">
                What clients gain
              </h2>
            </div>

            {/* Benefits */}
            <motion.div
              className="mt-8 grid gap-5"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
            >
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  variants={staggerItem}
                  className="rounded-2xl border border-[#0EA5E9]/10 bg-white p-6 shadow-[0_8px_22px_rgba(14,165,233,0.05)]"
                >

                  {/* Top Border */}
                  <div className="mb-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#EA580C]" />

                  {/* Top */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#EA580C] text-lg font-extrabold text-white shadow-[0_10px_25px_rgba(234,88,12,0.28)]">
                      0{index + 1}
                    </div>

                  </div>

                  {/* Benefit */}
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {benefit}
                  </p>

                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-16 font-['Open_Sans']">

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[240px] w-[240px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#EA580C]/10 blur-3xl" />
        </div>

        <div className="section-shell relative z-10">

          {/* Heading */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/5 px-5 py-2">
              <div className="h-2 w-2 rounded-full bg-[#0EA5E9]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
                Our Approach
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-black md:text-[2.75rem] lg:text-[3rem]">
              A three-step delivery path

            </h2>
          </div>

          {/* Compact Cards */}
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {service.approach.map((item, index) => (
              <motion.div
                key={item}
                custom={index * 1.2}
                initial="hidden"
                variants={fadeUp}
                viewport={{ once: true, margin: '-80px' }}
                whileInView="visible"
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[26px] border border-[#0EA5E9]/10 bg-white p-6 shadow-[0_12px_32px_rgba(14,165,233,0.06)] transition-all duration-500 hover:border-[#EA580C]/20 hover:shadow-[0_18px_45px_rgba(14,165,233,0.10)]"
              >

                {/* Hover Top Border */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#0EA5E9] to-[#EA580C] transition-all duration-500 group-hover:w-full" />

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#0EA5E9]/10 blur-3xl" />

                  <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#EA580C]/10 blur-3xl" />
                </div>

                <div className="relative z-10">

                  {/* Top */}
                  <div className="flex items-center justify-between">

                    {/* Step Number */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#EA580C] text-lg font-extrabold text-white shadow-[0_10px_25px_rgba(234,88,12,0.28)]">
                      0{index + 1}
                    </div>

                    {/* Small Line */}
                    <div className="h-[2px] w-14 bg-gradient-to-r from-[#0EA5E9] to-[#EA580C]" />
                  </div>

                  {/* Content */}
                  <p className="mt-6 text-[14px] leading-7 text-slate-600">
                    {item}
                  </p>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#EA580C]" />

                    <div className="h-[2px] w-10 bg-[#0EA5E9]/30 transition-all duration-500 group-hover:w-16 group-hover:bg-[#0EA5E9]" />
                  </div>
                </div>

                {/* Shine */}
                <div className="absolute inset-0 overflow-hidden rounded-[26px]">
                  <div className="absolute -left-[120%] top-0 h-full w-[45%] rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {relatedCaseStudy ? (
        <section className="section-padding bg-primary">
          <div className="section-shell">
            <SectionTitle eyebrow="Related Case Study" title={relatedCaseStudy.title} />
            <motion.div initial="hidden" variants={fadeUp} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
              <Card className="overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <img alt={relatedCaseStudy.title} className="h-full min-h-[280px] w-full object-cover" loading="lazy" src={relatedCaseStudy.image} />
                  <div className="p-8">
                    <Badge>{relatedCaseStudy.category}</Badge>
                    <p className="mt-5 text-base leading-8 text-text-muted">{relatedCaseStudy.solution}</p>
                    <p className="mt-4 text-lg font-medium text-slate-900">{relatedCaseStudy.result}</p>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" to="/case-studies">
                        View More Case Studies
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      ) : null}

      <section
        className="relative overflow-hidden bg-white py-20 font-['Open_Sans']"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.04)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.04)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Blur Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-[#EA580C]/10 blur-3xl" />
        </div>

        <div className="section-shell relative z-10">

          {/* Heading */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-white/80 px-5 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#0EA5E9]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
                CTA Form
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-black md:text-[2.75rem] lg:text-[3rem]">
              Start the conversation
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-slate-600">
              Connect with our Oracle Cloud specialists for implementation,
              support, migration, and enterprise transformation services.
            </p>
          </div>

          {/* Form Container */}
          <motion.div
            className="relative mt-14 overflow-hidden rounded-[34px] border border-[#0EA5E9]/10 bg-white/90 shadow-[0_20px_60px_rgba(14,165,233,0.08)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            {/* Hover Glow */}
            <div className="absolute inset-0">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#0EA5E9]/10 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#EA580C]/10 blur-3xl" />
            </div>

            {/* Top Gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0EA5E9] via-[#EA580C] to-[#0EA5E9]" />

            <div className="relative z-10 p-8 md:p-10">

              {/* Form */}
              <motion.form
                className="grid gap-5 md:grid-cols-2"
                initial="hidden"
                variants={staggerContainer}
                viewport={{ once: true, margin: '-80px' }}
                whileInView="visible"
              >

                {[
                  {
                    placeholder: 'Full Name',
                    type: 'text',
                  },
                  {
                    placeholder: 'Business Email',
                    type: 'email',
                  },
                  {
                    placeholder: 'Company Name',
                    type: 'text',
                    full: true,
                  },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className={field.full ? 'md:col-span-2' : ''}
                  >
                    <div className="group relative">

                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="h-14 w-full rounded-[18px] border border-[#0EA5E9]/10 bg-white px-5 text-[14px] font-medium text-black outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#0EA5E9] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.10)]"
                      />

                      {/* Hover Line */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0EA5E9] to-[#EA580C] transition-all duration-500 group-focus-within:w-full" />
                    </div>
                  </motion.div>
                ))}

                {/* Message */}
                <motion.div
                  className="md:col-span-2"
                  variants={staggerItem}
                >
                  <div className="group relative">

                    <textarea
                      placeholder="Tell us about your project requirements..."
                      className="min-h-[160px] w-full rounded-[22px] border border-[#0EA5E9]/10 bg-white px-5 py-4 text-[14px] font-medium text-black outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#0EA5E9] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.10)]"
                    />

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0EA5E9] to-[#EA580C] transition-all duration-500 group-focus-within:w-full" />
                  </div>
                </motion.div>

                {/* Bottom Area */}
                <motion.div
                  className="flex flex-col gap-5 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between"
                  variants={staggerItem}
                >

                  {/* Left Text */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                      <Mail className="h-5 w-5 text-[#0EA5E9]" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-black">
                        Enterprise Oracle Cloud Support
                      </p>

                      <p className="text-xs text-slate-500">
                        Typically responds within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#0EA5E9] px-7 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#EA580C] hover:shadow-[0_12px_30px_rgba(234,88,12,0.25)]"
                  >
                    Send Inquiry

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:translate-x-1">
                      <Mail className="h-4 w-4" />
                    </div>
                  </button>
                </motion.div>
              </motion.form>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-[34px]">
              <div className="absolute -left-[120%] top-0 h-full w-[45%] rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 hover:left-[120%]" />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default ServiceDetail
