import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import {
  AlertCircle,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Globe,
  Globe2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Settings,
  Star,
  TrendingUp,
  Type,
  User,
  UserRound,
  UserX,
} from 'lucide-react'

const countryOptions = [
  { value: 'United States', label: 'United States', flag: '\u{1F1FA}\u{1F1F8}' },
  { value: 'United Kingdom', label: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates', flag: '\u{1F1E6}\u{1F1EA}' },
  { value: 'India', label: 'India', flag: '\u{1F1EE}\u{1F1F3}' },
  { value: 'Australia', label: 'Australia', flag: '\u{1F1E6}\u{1F1FA}' },
  { value: 'Canada', label: 'Canada', flag: '\u{1F1E8}\u{1F1E6}' },
  { value: 'Singapore', label: 'Singapore', flag: '\u{1F1F8}\u{1F1EC}' },
  { value: 'Other', label: 'Other', flag: '\u{1F30D}' },
]

const serviceOptions = [
  'Oracle HCM Cloud',
  'Oracle ERP Cloud',
  'Oracle Payroll',
  'Oracle Integration Cloud (OIC)',
  'BI & Analytics',
  'AI Solutions',
  'Multiple Services',
]

const displayOptions = [
  { value: 'full', title: 'Full Name', subtitle: '& Company', icon: UserRound },
  { value: 'first', title: 'First Name', subtitle: 'Only', icon: Type },
  { value: 'anonymous', title: 'Anonymous', subtitle: '', icon: UserX },
]

const ratingLabels = {
  1: { text: 'Poor', className: 'text-red-400' },
  2: { text: 'Fair', className: 'text-orange-400' },
  3: { text: 'Good', className: 'text-yellow-400' },
  4: { text: 'Very Good', className: 'text-blue-400' },
  5: { text: 'Excellent! \u{1F389}', className: 'text-emerald-500' },
}

const initialFormState = {
  name: '',
  designation: '',
  company: '',
  country: '',
  service: '',
  rating: 0,
  outcome: '',
  feedback: '',
  displayPreference: 'full',
  permission: false,
}

const cardMotion = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function FieldWrapper({ children, className = '', error, field, shakeField }) {
  return (
    <motion.div
      animate={shakeField === field ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
      className={`flex flex-col gap-2 ${className}`}
      transition={{ duration: 0.4 }}
    >
      {children}
      <AnimatePresence mode="wait">
        {error ? (
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-[#FCA5A5]"
            exit={{ opacity: 0, y: -4 }}
            initial={{ opacity: 0, y: -4 }}
          >
            {error}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}

function FeedbackSection() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [validFields, setValidFields] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [shakeField, setShakeField] = useState('')
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, experts: 0, countries: 0 })
  const feedbackRef = useRef(null)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })
  const nameRef = useRef(null)
  const designationRef = useRef(null)
  const companyRef = useRef(null)
  const countryRef = useRef(null)
  const serviceRef = useRef(null)
  const ratingRef = useRef(null)
  const feedbackFieldRef = useRef(null)
  const permissionRef = useRef(null)

  useEffect(() => {
    if (!statsInView) {
      return undefined
    }

    const targets = { projects: 50, satisfaction: 98, experts: 15, countries: 3 }
    const duration = 1300
    const frameRate = 30
    const totalSteps = Math.round(duration / frameRate)
    let step = 0

    const interval = window.setInterval(() => {
      step += 1
      const progress = Math.min(step / totalSteps, 1)

      setCounts({
        projects: Math.round(targets.projects * progress),
        satisfaction: Math.round(targets.satisfaction * progress),
        experts: Math.round(targets.experts * progress),
        countries: Math.round(targets.countries * progress),
      })

      if (progress >= 1) {
        window.clearInterval(interval)
      }
    }, frameRate)

    return () => window.clearInterval(interval)
  }, [statsInView])

  const statPills = [
    { icon: Star, label: '4.9/5 Rating' },
    { icon: Globe2, label: '3 Countries' },
    { icon: BriefcaseBusiness, label: '50+ Projects' },
  ]

  const sidebarItems = [
    'Helps us refine Oracle delivery for global clients',
    'Guides enterprises in UAE, UK & USA',
    'Featured on our website (with permission)',
    'Shapes our service roadmap',
  ]

  const progressItems = [
    { country: 'United States', flag: '\u{1F1FA}\u{1F1F8}', value: 45 },
    { country: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', value: 32 },
    { country: 'UAE', flag: '\u{1F1E6}\u{1F1EA}', value: 23 },
  ]

  const summaryCountry = countryOptions.find((country) => country.value === formData.country)
  const summaryRating = Math.max(formData.rating, 0)

  const confettiDots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        id: index,
        left: 45 + ((index * 13) % 30),
        top: 46 + ((index * 7) % 10),
        x: ((index * 37) % 400) - 200,
        y: -300 + ((index * 29) % 400),
        color: ['#0057FF', '#3D8BFF', '#60A5FA', '#10B981', '#F59E0B'][index % 5],
        delay: index * 0.02,
      })),
    [],
  )

  const feedbackCounterClass =
    charCount > 100 ? 'text-emerald-600' : charCount > 50 ? 'text-accent' : 'text-text-muted'

  const isSubmitDisabled =
    isLoading ||
    !formData.name.trim() ||
    !formData.designation.trim() ||
    !formData.company.trim() ||
    !formData.country ||
    !formData.service ||
    formData.rating < 1 ||
    formData.feedback.trim().length < 50 ||
    !formData.permission

  const focusFirstError = (validationErrors) => {
    const refs = {
      name: nameRef.current,
      designation: designationRef.current,
      company: companyRef.current,
      country: countryRef.current,
      service: serviceRef.current,
      rating: ratingRef.current,
      feedback: feedbackFieldRef.current,
      permission: permissionRef.current,
    }
    const order = ['name', 'designation', 'company', 'country', 'service', 'rating', 'feedback', 'permission']
    const firstField = order.find((field) => validationErrors[field])

    if (!firstField) {
      return
    }

    const target = refs[firstField]
    if (target && typeof target.scrollIntoView === 'function') {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.setTimeout(() => {
      if (target && typeof target.focus === 'function') {
        target.focus()
      }
    }, 250)
  }

  const validate = (data) => {
    const validationErrors = {}

    if (data.name.trim().length < 2) {
      validationErrors.name = 'Please enter at least 2 characters.'
    }
    if (!data.designation.trim()) {
      validationErrors.designation = 'Designation is required.'
    }
    if (!data.company.trim()) {
      validationErrors.company = 'Company is required.'
    }
    if (!data.country) {
      validationErrors.country = 'Please select your country.'
    }
    if (!data.service) {
      validationErrors.service = 'Please select the service you experienced.'
    }
    if (data.rating < 1) {
      validationErrors.rating = 'Please rate your overall experience.'
    }
    if (data.feedback.trim().length < 50) {
      validationErrors.feedback = 'Feedback must be at least 50 characters.'
    }
    if (!data.permission) {
      validationErrors.permission = 'Permission is required to submit this form.'
    }

    return validationErrors
  }

  const validateField = (field, value) => {
    const validationErrors = validate({ ...formData, [field]: value })
    return validationErrors[field] || ''
  }

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const handleBlur = (field) => {
    setTouched((current) => ({ ...current, [field]: true }))
    const fieldError = validateField(field, formData[field])

    setErrors((current) => ({ ...current, [field]: fieldError }))
    setValidFields((current) => ({ ...current, [field]: !fieldError }))
  }

  const handleTextareaChange = (event) => {
    const { value } = event.target
    updateField('feedback', value)
    setCharCount(value.length)
    event.target.style.height = 'auto'
    event.target.style.height = `${Math.min(event.target.scrollHeight, 260)}px`
  }

  const triggerShake = (field) => {
    setShakeField(field)
    window.setTimeout(() => setShakeField(''), 420)
  }

  // TODO: Replace with Django API call
  // POST /api/feedback/submit/
  // Headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrfToken }
  // Body: JSON.stringify(formData)
  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validate(formData)
    setTouched({
      name: true,
      designation: true,
      company: true,
      country: true,
      service: true,
      rating: true,
      feedback: true,
      permission: true,
    })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setValidFields((current) => {
        const nextState = { ...current }
        Object.keys(validationErrors).forEach((field) => {
          nextState[field] = false
        })
        return nextState
      })

      const [firstField] = Object.keys(validationErrors)
      if (firstField) {
        triggerShake(firstField)
      }

      focusFirstError(validationErrors)
      return
    }

    setErrors({})
    setIsLoading(true)
    await new Promise((resolve) => window.setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleSubmitAnother = () => {
    setFormData(initialFormState)
    setErrors({})
    setTouched({})
    setValidFields({})
    setIsSubmitted(false)
    setCharCount(0)
    setHoveredRating(0)

    if (feedbackFieldRef.current) {
      feedbackFieldRef.current.style.height = '152px'
    }
  }

  const handleContactScroll = (event) => {
    event.preventDefault()
    const target =
      document.getElementById('contact-form') ||
      document.querySelector('main form') ||
      document.querySelector('form')

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (typeof target.focus === 'function') {
        window.setTimeout(() => target.focus(), 250)
      }
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getFieldState = (field) => {
    if (errors[field]) {
      return 'error'
    }
    if (touched[field] && validFields[field]) {
      return 'valid'
    }
    return 'default'
  }

  const getInputClasses = (field, hasIcon = true) => {
    const state = getFieldState(field)
    const base =
      'w-full rounded-[18px] border bg-white/90 text-slate-900 placeholder:text-text-muted transition-all duration-200 focus:outline-none'
    const padding = hasIcon ? 'pl-12 pr-11' : 'px-4 pr-11'
    const stateClasses =
      state === 'error'
        ? 'border-[#EF4444] focus:border-[#EF4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.18)]'
        : state === 'valid'
          ? 'border-[#10B981] focus:border-[#10B981] focus:shadow-[0_0_0_3px_rgba(16,185,129,0.18)]'
          : 'border-[#d7e5ff] focus:border-[#3D8BFF] focus:shadow-[0_0_0_3px_rgba(0,87,255,0.15)]'

    return `${base} ${padding} py-3.5 ${stateClasses}`
  }

  const renderFieldStatus = (field) => {
    const state = getFieldState(field)

    if (state === 'error') {
      return <AlertCircle className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#EF4444]" />
    }

    if (state === 'valid') {
      return <CheckCircle2 className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#10B981]" />
    }

    return null
  }

  return (
    <section
      className="relative overflow-hidden bg-primary text-slate-900"
      id="feedback-section"
      ref={feedbackRef}
    >
      <div
        className="h-20 w-full bg-[#eef5ff]"
        style={{ clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="hero-mesh relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          className="pointer-events-none absolute left-[-8rem] top-[-6rem] h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: 'rgba(0, 87, 255, 0.07)' }}
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 22, 0] }}
          className="pointer-events-none absolute bottom-[-7rem] right-[-5rem] h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ background: 'rgba(61, 139, 255, 0.05)' }}
          transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
        />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(61, 139, 255, 0.18), transparent 22%), radial-gradient(circle at 80% 25%, rgba(0, 87, 255, 0.12), transparent 28%), linear-gradient(130deg, rgba(247, 251, 255, 0.98), rgba(237, 244, 255, 0.96), rgba(220, 232, 255, 0.94), rgba(247, 251, 255, 0.98))',
          }}
        />

        <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            <motion.div
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/70 px-4 py-2 text-base font-medium uppercase tracking-normal text-accent backdrop-blur-xl"
              variants={cardMotion}
              custom={0}
            >
              <MessageSquare className="h-4 w-4 text-accent-light" />
              <span>Client Feedback</span>
            </motion.div>

            <motion.h2
              className="mt-6 text-4xl font-extrabold leading-[0.95] text-slate-900 sm:text-5xl lg:text-[4.35rem]"
              variants={cardMotion}
              custom={0.15}
            >
              Share Your
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #0057FF, #3D8BFF, #60A5FA)' }}
              >
                Experience With Us
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-3xl text-base leading-8 text-text-muted sm:text-lg"
              variants={cardMotion}
              custom={0.25}
            >
              Serving teams across {countryOptions[0].flag} USA · {countryOptions[1].flag} UK · {countryOptions[2].flag} UAE and beyond — your feedback shapes how we
              deliver Oracle Cloud excellence
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
              initial="hidden"
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
            >
              {statPills.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    className="inline-flex min-w-[165px] items-center justify-center gap-2 rounded-full border border-accent/15 bg-white/75 px-5 py-3 text-sm font-medium text-slate-900 shadow-soft backdrop-blur-xl"
                    custom={0.35 + index * 0.1}
                    variants={cardMotion}
                  >
                    <Icon className={`h-4.5 w-4.5 ${index === 0 ? 'text-gold' : 'text-accent-light'}`} />
                    <span>{item.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)] lg:items-start">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-panel rounded-[20px] border-accent/15 bg-white/80 p-5 shadow-soft backdrop-blur-2xl sm:p-8 lg:p-10"
                  exit={{ opacity: 0, y: -18 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-8">
                    <div className="text-base uppercase tracking-normal text-text-muted">Your Opinion Matters</div>
                    <h3 className="mt-3 text-[24px] font-bold text-slate-900">Leave Your Feedback</h3>
                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      Takes less than 2 minutes · Used to improve our Oracle delivery for global clients
                    </p>
                    <div className="mt-5 h-px w-full bg-gradient-to-r from-[#0057FF] via-[#3D8BFF] to-transparent" />
                  </div>

                  <form className={`${isLoading ? 'pointer-events-none opacity-50' : ''}`} onSubmit={handleSubmit}>
                    <div className="grid gap-5 md:grid-cols-2">
                      <FieldWrapper error={errors.name} field="name" shakeField={shakeField}>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted" htmlFor="feedback-name">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                          <input
                            className={getInputClasses('name')}
                            id="feedback-name"
                            name="name"
                            onBlur={() => handleBlur('name')}
                            onChange={(event) => updateField('name', event.target.value)}
                            placeholder="Your full name"
                            ref={nameRef}
                            type="text"
                            value={formData.name}
                          />
                          {renderFieldStatus('name')}
                        </div>
                      </FieldWrapper>

                      <FieldWrapper error={errors.designation} field="designation" shakeField={shakeField}>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted" htmlFor="feedback-designation">
                          Designation *
                        </label>
                        <div className="relative">
                          <Briefcase className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                          <input
                            className={getInputClasses('designation')}
                            id="feedback-designation"
                            name="designation"
                            onBlur={() => handleBlur('designation')}
                            onChange={(event) => updateField('designation', event.target.value)}
                            placeholder="e.g. HR Director"
                            ref={designationRef}
                            type="text"
                            value={formData.designation}
                          />
                          {renderFieldStatus('designation')}
                        </div>
                      </FieldWrapper>

                      <FieldWrapper error={errors.company} field="company" shakeField={shakeField}>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted" htmlFor="feedback-company">
                          Company *
                        </label>
                        <div className="relative">
                          <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                          <input
                            className={getInputClasses('company')}
                            id="feedback-company"
                            name="company"
                            onBlur={() => handleBlur('company')}
                            onChange={(event) => updateField('company', event.target.value)}
                            placeholder="Your organization"
                            ref={companyRef}
                            type="text"
                            value={formData.company}
                          />
                          {renderFieldStatus('company')}
                        </div>
                      </FieldWrapper>

                      <FieldWrapper error={errors.country} field="country" shakeField={shakeField}>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted" htmlFor="feedback-country">
                          Country *
                        </label>
                        <div className="relative">
                          <Globe className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                          <select
                            className={`${getInputClasses('country')} appearance-none`}
                            id="feedback-country"
                            name="country"
                            onBlur={() => handleBlur('country')}
                            onChange={(event) => updateField('country', event.target.value)}
                            ref={countryRef}
                            value={formData.country}
                          >
                            <option value="">Select your country</option>
                            {countryOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.flag} {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                        </div>
                      </FieldWrapper>

                      <FieldWrapper className="md:col-span-2" error={errors.service} field="service" shakeField={shakeField}>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted" htmlFor="feedback-service">
                          Service Experienced *
                        </label>
                        <div className="relative">
                          <Settings className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                          <select
                            className={`${getInputClasses('service')} appearance-none`}
                            id="feedback-service"
                            name="service"
                            onBlur={() => handleBlur('service')}
                            onChange={(event) => updateField('service', event.target.value)}
                            ref={serviceRef}
                            value={formData.service}
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                        </div>
                      </FieldWrapper>

                      <FieldWrapper className="md:col-span-2" error={errors.rating} field="rating" shakeField={shakeField}>
                        <div className="flex flex-col gap-3 rounded-[18px] border border-accent/15 bg-[#f8fbff]/90 p-5">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">Star Rating *</div>
                              <div className="mt-2 text-base font-medium text-slate-900">Rate Your Overall Experience</div>
                            </div>
                            <div className={`text-sm font-semibold ${ratingLabels[hoveredRating || formData.rating]?.className || 'text-text-muted'}`}>
                              {ratingLabels[hoveredRating || formData.rating]?.text || 'Choose a rating'}
                            </div>
                          </div>
                          <div
                            className="flex flex-wrap items-center gap-2"
                            onMouseLeave={() => setHoveredRating(0)}
                            ref={ratingRef}
                            tabIndex={-1}
                          >
                            {[1, 2, 3, 4, 5].map((value) => {
                              const isActive = value <= (hoveredRating || formData.rating)
                              const isSelected = value <= formData.rating

                              return (
                                <motion.button
                                  key={value}
                                  animate={{ scale: isSelected ? 1.2 : 1 }}
                                  className="rounded-full p-1.5"
                                  onClick={() => {
                                    updateField('rating', value)
                                    setTouched((current) => ({ ...current, rating: true }))
                                    setValidFields((current) => ({ ...current, rating: true }))
                                  }}
                                  onHoverStart={() => setHoveredRating(value)}
                                  onFocus={() => setHoveredRating(value)}
                                  onBlur={() => {
                                    setHoveredRating(0)
                                    handleBlur('rating')
                                  }}
                                  transition={{ type: 'spring', stiffness: 340, damping: 18 }}
                                  type="button"
                                >
                                  <Star
                                    className={`h-8 w-8 transition-colors duration-200 ${
                                      isActive
                                        ? 'fill-[#F59E0B] text-[#F59E0B]'
                                        : 'text-[#9bb0ca]'
                                    }`}
                                    strokeWidth={1.9}
                                  />
                                </motion.button>
                              )
                            })}
                          </div>
                        </div>
                      </FieldWrapper>

                      {/* <FieldWrapper className="md:col-span-2" error={errors.outcome} field="outcome" shakeField={shakeField}>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted" htmlFor="feedback-outcome">
                          Project Result (Optional)
                        </label>
                        <div className="relative">
                          <TrendingUp className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-text-muted" />
                          <input
                            className={getInputClasses('outcome')}
                            id="feedback-outcome"
                            name="outcome"
                            onChange={(event) => updateField('outcome', event.target.value)}
                            placeholder="e.g. 40% cost reduction, live in 3 months"
                            type="text"
                            value={formData.outcome}
                          />
                        </div>
                        <span className="text-xs italic text-[#B9851A]">✦ Specific metrics make your feedback more impactful</span>
                      </FieldWrapper> */}

                      <FieldWrapper className="md:col-span-2" error={errors.feedback} field="feedback" shakeField={shakeField}>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted" htmlFor="feedback-message">
                          Your Feedback *
                        </label>
                        <div className="relative">
                          <textarea
                            className={`${getInputClasses('feedback', false)} min-h-[152px] resize-none pl-4 pr-11 pt-3.5`}
                            id="feedback-message"
                            name="feedback"
                            onBlur={() => handleBlur('feedback')}
                            onChange={handleTextareaChange}
                            placeholder={
                              'Tell us about your experience with CloudStand...\nWhat went well? What impact did this project have on your team or organization?'
                            }
                            ref={feedbackFieldRef}
                            rows={6}
                            value={formData.feedback}
                          />
                          {errors.feedback ? (
                            <AlertCircle className="pointer-events-none absolute right-4 top-4 h-4.5 w-4.5 text-[#EF4444]" />
                          ) : touched.feedback && validFields.feedback ? (
                            <CheckCircle2 className="pointer-events-none absolute right-4 top-4 h-4.5 w-4.5 text-[#10B981]" />
                          ) : null}
                          <div className={`absolute bottom-3 right-4 text-xs font-medium ${feedbackCounterClass}`}>
                            {charCount} / 600
                          </div>
                        </div>
                      </FieldWrapper>

                      {/* <div className="md:col-span-2">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                          Display Preference
                        </div>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {displayOptions.map((option) => {
                            const Icon = option.icon
                            const selected = formData.displayPreference === option.value

                            return (
                              <motion.button
                                key={option.value}
                                className={`relative rounded-[18px] border p-4 text-left transition-all duration-200 ${
                                  selected
                                    ? 'border-[#3D8BFF] bg-[rgba(0,87,255,0.08)] shadow-[0_10px_30px_rgba(0,87,255,0.08)]'
                                    : 'border-[#d7e5ff] bg-white/85 hover:border-[#3D8BFF]/60'
                                }`}
                                layout
                                onClick={() => updateField('displayPreference', option.value)}
                                type="button"
                              >
                                {selected ? (
                                  <span className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0057FF] text-white">
                                    <Check className="h-3.5 w-3.5" />
                                  </span>
                                ) : null}
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${
                                      selected ? 'bg-[#0057FF]/12 text-[#3D8BFF]' : 'bg-[#eef5ff] text-text-muted'
                                    }`}
                                  >
                                    <Icon className="h-5 w-5" />
                                  </span>
                                  <div>
                                    <div className="font-semibold text-slate-900">{option.title}</div>
                                    <div className="text-sm text-text-muted">{option.subtitle}</div>
                                  </div>
                                </div>
                              </motion.button>
                            )
                          })}
                        </div>
                      </div> */}

                      <FieldWrapper className="md:col-span-2" error={errors.permission} field="permission" shakeField={shakeField}>
                        <label
                          className={`flex cursor-pointer items-start gap-3 rounded-[18px] border p-4 transition-colors duration-200 ${
                            errors.permission
                              ? 'border-[#EF4444] bg-[rgba(239,68,68,0.06)]'
                              : 'border-accent/15 bg-white/85 hover:border-[#3D8BFF]/60'
                          }`}
                          htmlFor="feedback-permission"
                        >
                          <input
                            checked={formData.permission}
                            className="sr-only"
                            id="feedback-permission"
                            onBlur={() => handleBlur('permission')}
                            onChange={(event) => {
                              updateField('permission', event.target.checked)
                              setTouched((current) => ({ ...current, permission: true }))
                              setValidFields((current) => ({ ...current, permission: event.target.checked }))
                            }}
                            ref={permissionRef}
                            type="checkbox"
                          />
                          <motion.span
                            animate={{ backgroundColor: formData.permission ? '#0057FF' : '#f8fbff' }}
                            className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                              formData.permission ? 'border-[#0057FF]' : 'border-[#3D8BFF]'
                            }`}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.svg
                              fill="none"
                              height="14"
                              viewBox="0 0 14 14"
                              width="14"
                            >
                              <motion.path
                                animate={{ pathLength: formData.permission ? 1 : 0, opacity: formData.permission ? 1 : 0 }}
                                d="M2 7.2L5.2 10.4L12 3.6"
                                initial={false}
                                stroke="#FFFFFF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                transition={{ duration: 0.28 }}
                              />
                            </motion.svg>
                          </motion.span>
                          <span className="text-sm leading-6 text-text-muted">
                            I permit CloudStand Consulting to display this feedback as a testimonial on their
                            website and marketing materials
                          </span>
                        </label>
                      </FieldWrapper>

                      <div className="md:col-span-2">
                        <motion.button
                          className={`flex h-14 w-full items-center justify-center gap-3 rounded-[18px] font-semibold text-white transition-all duration-200 ${
                            isSubmitDisabled
                              ? 'cursor-not-allowed opacity-50'
                              : 'hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,87,255,0.4)] active:scale-[0.98]'
                          }`}
                          disabled={isSubmitDisabled}
                          style={{ backgroundImage: 'linear-gradient(135deg, #0057FF, #0040CC)' }}
                          type="submit"
                        >
                          {isLoading ? (
                            <>
                              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Feedback</span>
                              <Send className="h-4.5 w-4.5" />
                            </>
                          )}
                        </motion.button>
                        <div className="mt-3 text-center text-xs text-text-muted">🔒 Your feedback is secure and confidential</div>
                      </div>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-panel relative overflow-hidden rounded-[20px] border-accent/15 bg-white/82 p-6 shadow-soft backdrop-blur-2xl sm:p-8 lg:p-10"
                  exit={{ opacity: 0, y: 16 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {confettiDots.map((dot) => (
                      <motion.div
                        key={dot.id}
                        animate={{ x: dot.x, y: dot.y, opacity: 0 }}
                        className="absolute h-1.5 w-1.5 rounded-full"
                        initial={{ x: 0, y: 0, opacity: 1 }}
                        style={{ backgroundColor: dot.color, left: `${dot.left}%`, top: `${dot.top}%` }}
                        transition={{ duration: 1.5, delay: dot.delay, ease: 'easeOut' }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.svg className="h-24 w-24" fill="none" viewBox="0 0 120 120">
                      <motion.circle
                        animate={{ pathLength: 1 }}
                        cx="60"
                        cy="60"
                        initial={{ pathLength: 0 }}
                        r="42"
                        stroke="#10B981"
                        strokeWidth="6"
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />
                      <motion.path
                        animate={{ pathLength: 1 }}
                        d="M42 61.5L54 73.5L80 47.5"
                        initial={{ pathLength: 0 }}
                        stroke="#10B981"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="6"
                        transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
                      />
                    </motion.svg>

                    <h3 className="mt-6 text-3xl font-bold text-slate-900">
                      Thank You, {formData.name.trim().split(' ')[0] || 'there'}! {'\u{1F389}'}
                    </h3>
                    <p className="mt-3 text-base text-text-muted">Your feedback has been received successfully.</p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <div className="rounded-full border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.08)] px-4 py-2 text-sm text-[#FCD34D]">
                        {'★'.repeat(summaryRating)}
                        {'☆'.repeat(Math.max(5 - summaryRating, 0))}
                      </div>
                      <div className="rounded-full border border-accent/15 bg-[#f8fbff] px-4 py-2 text-sm text-slate-900">
                        {summaryCountry?.flag || '\u{1F30D}'} {summaryCountry?.label || 'Global'}
                      </div>
                      <div className="rounded-full border border-accent/15 bg-[#f8fbff] px-4 py-2 text-sm text-slate-900">
                        {formData.service}
                      </div>
                    </div>

                    <div className="mt-8 w-full rounded-[20px] border border-dashed border-[#d7e5ff] bg-[#f8fbff] p-5 text-left">
                      <p className="text-base leading-7 text-slate-900">
                        &quot;
                        {formData.feedback.length > 120
                          ? `${formData.feedback.slice(0, 120).trim()}...`
                          : formData.feedback}
                        &quot;
                      </p>
                      <div className="mt-4 text-sm text-text-muted">
                        — {formData.name}, {formData.designation} at {formData.company}
                      </div>
                    </div>

                    <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                      <button
                        className="inline-flex flex-1 items-center justify-center rounded-[16px] border border-accent/20 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:border-[#3D8BFF] hover:bg-[#f8fbff]"
                        onClick={handleSubmitAnother}
                        type="button"
                      >
                        ← Submit Another
                      </button>
                      <a
                        className="inline-flex flex-1 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#0057FF,#0040CC)] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,87,255,0.35)]"
                        href="/"
                      >
                        Go to Home →
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="hidden gap-5 md:grid lg:sticky lg:top-6">
              <motion.div
                className="glass-panel rounded-[20px] border-accent/15 bg-white/80 p-6 backdrop-blur-xl"
                initial={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.65, delay: 0.4 }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="border-l-4 border-[#3D8BFF] pl-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0057FF]/10 text-accent">
                      <MessageSquare className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-base uppercase tracking-normal text-text-muted">Why Share Your Feedback?</div>
                      <h4 className="mt-2 text-xl font-bold text-slate-900">Why It Matters</h4>
                    </div>
                  </div>
                  <div className="mt-5 space-y-4">
                    {sidebarItems.map((item, index) => (
                      <div
                        key={item}
                        className="group flex items-start gap-3 text-sm leading-6 text-text-muted"
                      >
                        <motion.span
                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eef5ff] text-accent-light"
                          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                          whileHover={{ y: -3 }}
                        >
                          {index === 0 ? <TrendingUp className="h-4.5 w-4.5" /> : null}
                          {index === 1 ? <Globe2 className="h-4.5 w-4.5" /> : null}
                          {index === 2 ? <Star className="h-4.5 w-4.5" /> : null}
                          {index === 3 ? <Send className="h-4.5 w-4.5" /> : null}
                        </motion.span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-panel rounded-[20px] border-accent/15 bg-white/80 p-6 backdrop-blur-xl"
                initial={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.65, delay: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="text-base uppercase tracking-normal text-text-muted">Global Client Base</div>
                <h4 className="mt-2 text-xl font-bold text-slate-900">Our Clients Are From</h4>
                <div className="mt-6 space-y-4">
                  {progressItems.map((item) => (
                    <div key={item.country}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-900">
                        <span>
                          {item.flag} {item.country}
                        </span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-[#e5eefc]">
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          style={{ backgroundImage: 'linear-gradient(90deg, #0057FF, #3D8BFF)' }}
                          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                          viewport={{ once: true, margin: '-80px' }}
                          whileInView={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-text-muted">&amp; growing across 3 continents</div>
              </motion.div>

              <motion.div
                className="glass-panel rounded-[20px] border-accent/15 bg-white/80 p-6 backdrop-blur-xl"
                initial={{ opacity: 0, x: 40 }}
                ref={statsRef}
                transition={{ duration: 0.65, delay: 0.6 }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="text-base uppercase tracking-normal text-text-muted">Quick Stats</div>
                <h4 className="mt-2 text-xl font-bold text-slate-900">Performance Snapshot</h4>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { value: `${counts.projects}+`, label: 'Completed Projects' },
                    { value: `${counts.satisfaction}%`, label: 'Satisfaction Rate' },
                    { value: `${counts.experts}+`, label: 'Oracle Experts' },
                    { value: `${counts.countries}`, label: 'Countries Served' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[18px] border border-accent/10 bg-[#f8fbff] p-4"
                    >
                      <div className="text-3xl font-bold text-accent">{item.value}</div>
                      <div className="mt-2 text-sm leading-6 text-text-muted">{item.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="glass-panel rounded-[20px] border-accent/15 bg-white/80 p-6 backdrop-blur-xl"
                initial={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.65, delay: 0.7 }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="text-base uppercase tracking-normal text-text-muted">Prefer To Talk?</div>
                <h4 className="mt-2 text-xl font-bold text-slate-900">Speak With Our Team Directly</h4>
                <p className="mt-3 text-sm leading-6 text-text-muted">Rather speak with our team directly?</p>
                <div className="mt-5 space-y-3 text-sm text-slate-900">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4.5 w-4.5 text-accent-light" />
                    <span>+91 9049020793</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4.5 w-4.5 text-accent-light" />
                    <span>info@cloudstand.com</span>
                  </div>
                </div>
                <button
                  className="mt-6 inline-flex items-center justify-center rounded-[16px] border border-accent/20 bg-[#eef5ff] px-5 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:border-[#3D8BFF] hover:bg-[#dfeaff]"
                  onClick={handleContactScroll}
                  type="button"
                >
                  Contact Us Now →
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
