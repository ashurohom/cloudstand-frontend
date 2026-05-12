import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Mail,
  MessageSquare,
  Search,
  SearchX,
  Shield,
  User,
  UserCheck,
  X,
} from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { faqCategories, faqEntries, faqTopicOptions } from '../data/faqData'
import { pageVariants } from '../animations/variants'

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const initialForm = {
  name: '',
  email: '',
  topic: '',
  query: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const categoryMeta = {
  all: {
    label: 'All Topics',
    description: 'Browse every question in one place.',
    icon: CircleHelp,
  },
  'Service Information': {
    label: 'Service Information',
    description: 'Offerings, timelines, training, and upgrades.',
    icon: BadgeCheck,
  },
  'Engagement & Process': {
    label: 'Engagement & Process',
    description: 'Commercial models, pilots, NDAs, and collaboration.',
    icon: UserCheck,
  },
  'Technical Support': {
    label: 'Technical Support',
    description: 'Support scope, SLAs, integrations, and transitions.',
    icon: Shield,
  },
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightMatch(text, query) {
  const normalized = query.trim()

  if (!normalized) {
    return text
  }

  const pattern = new RegExp(`(${escapeRegExp(normalized)})`, 'gi')
  const parts = text.split(pattern)

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <mark className="rounded bg-blue-100 px-1 text-slate-900" key={`${part}-${index}`}>
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  )
}

function validateField(name, value) {
  const trimmed = value.trim()

  if (name === 'name') {
    if (trimmed.length < 2) {
      return 'Please enter at least 2 characters.'
    }
    return ''
  }

  if (name === 'email') {
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address.'
    }
    return ''
  }

  if (name === 'topic') {
    if (!trimmed) {
      return 'Please select a topic.'
    }
    return ''
  }

  if (name === 'query') {
    if (trimmed.length < 30) {
      return 'Please share at least 30 characters so we can help properly.'
    }
    return ''
  }

  return ''
}

function ResolveQuery() {
  useDocumentTitle('Resolve Your Query | CloudStand Consulting')

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFaqId, setOpenFaqId] = useState(faqEntries[0]?.id ?? '')
  const [feedbackMap, setFeedbackMap] = useState({})
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [shakeCount, setShakeCount] = useState(0)

  const queryFormRef = useRef(null)
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const topicInputRef = useRef(null)
  const queryInputRef = useRef(null)
  const submitTimeoutRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    return () => {
      if (submitTimeoutRef.current) {
        window.clearTimeout(submitTimeoutRef.current)
      }
    }
  }, [])

  const categoryCounts = useMemo(() => {
    const counts = faqCategories.reduce((accumulator, category) => {
      accumulator[category] = faqEntries.filter((entry) => entry.category === category).length
      return accumulator
    }, {})

    return {
      all: faqEntries.length,
      ...counts,
    }
  }, [])

  const categoryCards = useMemo(
    () => [
      { id: 'all', ...categoryMeta.all, count: categoryCounts.all },
      ...faqCategories.map((category) => ({
        id: category,
        ...categoryMeta[category],
        count: categoryCounts[category],
      })),
    ],
    [categoryCounts],
  )

  const filteredFaqs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return faqEntries.filter((entry) => {
      const categoryMatches = activeCategory === 'all' || entry.category === activeCategory
      const searchMatches =
        !normalizedSearch ||
        entry.question.toLowerCase().includes(normalizedSearch) ||
        entry.answer.toLowerCase().includes(normalizedSearch) ||
        entry.category.toLowerCase().includes(normalizedSearch)

      return categoryMatches && searchMatches
    })
  }, [activeCategory, searchTerm])

  const scrollToForm = () => {
    queryFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const fieldRefs = {
    name: nameInputRef,
    email: emailInputRef,
    topic: topicInputRef,
    query: queryInputRef,
  }

  const visibleOpenFaqId = filteredFaqs.some((entry) => entry.id === openFaqId) ? openFaqId : (filteredFaqs[0]?.id ?? '')

  const updateFieldState = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }))

    if (touched[name] || errors[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = Object.keys(initialForm).reduce((accumulator, field) => {
      const error = validateField(field, form[field])
      if (error) {
        accumulator[field] = error
      }
      return accumulator
    }, {})

    setErrors(nextErrors)
    setTouched({
      name: true,
      email: true,
      topic: true,
      query: true,
    })

    if (Object.keys(nextErrors).length > 0) {
      setShakeCount((current) => current + 1)
      const firstErrorField = ['name', 'email', 'topic', 'query'].find((field) => nextErrors[field])
      fieldRefs[firstErrorField]?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      fieldRefs[firstErrorField]?.current?.focus()
      return
    }

    setIsSubmitting(true)
    setIsSubmitted(false)

    // TODO: POST /api/queries/submit/ when Django ready
    submitTimeoutRef.current = window.setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setForm(initialForm)
      setErrors({})
      setTouched({})
    }, 1500)
  }

  const resetSubmission = () => {
    setIsSubmitted(false)
    setIsSubmitting(false)
    setForm(initialForm)
    setErrors({})
    setTouched({})
  }

  const inputClassName = (field) => {
    const hasError = touched[field] && errors[field]
    const isValid = touched[field] && !errors[field] && form[field].trim()

    return `button-ring w-full rounded-[24px] border bg-white/90 px-12 py-3.5 text-sm text-slate-900 placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:ring-0 ${
      hasError
        ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.12)]'
        : isValid
          ? 'border-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]'
          : 'border-[#d7e5ff] focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,87,255,0.12)]'
    }`
  }

  const renderFieldStatus = (field) => {
    if (touched[field] && !errors[field] && form[field].trim()) {
      return <Check className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-500" />
    }

    return null
  }

  return (
    <motion.main animate="animate" className="overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="hero-mesh hero-particles section-padding relative isolate">
        <motion.div
          animate={{
            x: [0, 32, -14, 0],
            y: [0, -24, 20, 0],
          }}
          className="orb-drift absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,87,255,0.16),transparent_68%)] blur-3xl"
          transition={{ duration: 16, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          animate={{
            x: [0, -28, 16, 0],
            y: [0, 20, -26, 0],
          }}
          className="absolute right-[-7rem] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(61,139,255,0.14),transparent_68%)] blur-3xl"
          transition={{ duration: 20, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="section-shell relative z-10"
          initial="hidden"
          variants={sectionReveal}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <Badge className="inline-flex items-center gap-2">
            <CircleHelp className="h-4 w-4 text-accent" />
            <span>Resolve Your Query</span>
          </Badge>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1] text-slate-900 sm:text-5xl lg:text-[5.1rem]">
            <span>Find Answers.</span>
            <br />
            <span className="text-gradient">Get Clarity.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-dm-sans text-lg leading-8 text-text-muted">
            Search common questions, explore support topics, and send our team a confidential query if you still need a hand.
          </p>

          <div className="glass-panel mt-10 flex max-w-3xl items-center gap-3 rounded-full border-[#d7e5ff] px-5 py-3">
            <Search className="h-5 w-5 flex-none text-accent" />
            <input
              aria-label="Search FAQs"
              className="w-full bg-transparent text-sm text-slate-900 placeholder:text-text-muted focus:outline-none"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by keyword, topic, or phrase..."
              type="text"
              value={searchTerm}
            />
            {searchTerm ? (
              <button
                aria-label="Clear search"
                className="button-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e5ff] bg-white text-text-muted transition hover:border-accent/50 hover:text-slate-900"
                onClick={() => setSearchTerm('')}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </motion.div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <motion.div
          className="section-shell"
          initial="hidden"
          variants={sectionReveal}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Choose a topic</h2>
            <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
              Narrow the FAQ list by topic or keep everything visible while you search.
            </p>
          </div>

          <motion.div
            animate="visible"
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            variants={staggerList}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {categoryCards.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id

              return (
                <motion.button
                  className={`glass-panel relative overflow-hidden rounded-[28px] p-6 text-left ${
                    isActive ? 'border-accent bg-[#eff6ff]' : 'border-[#d7e5ff] bg-white/85'
                  }`}
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  type="button"
                  variants={staggerChild}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#d7e5ff] bg-white px-3 py-1 text-xs font-medium text-text-muted">
                      {category.count} Questions
                      {isActive ? <Check className="h-3.5 w-3.5 text-accent" /> : null}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{category.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{category.description}</p>
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      <section className="section-padding bg-primary">
        <motion.div
          className="section-shell"
          initial="hidden"
          variants={sectionReveal}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
                {filteredFaqs.length} result{filteredFaqs.length === 1 ? '' : 's'} for your current filter.
              </p>
            </div>
          </div>

          {filteredFaqs.length > 0 ? (
            <motion.div
              animate="visible"
              className="space-y-4"
              initial="hidden"
              variants={staggerList}
              viewport={{ once: true }}
              whileInView="visible"
            >
              {filteredFaqs.map((entry) => {
                const isOpen = visibleOpenFaqId === entry.id
                const helpfulState = feedbackMap[entry.id] ?? ''

                return (
                  <motion.div
                    className="glass-panel overflow-hidden rounded-[30px] border-[#d7e5ff]"
                    key={entry.id}
                    variants={staggerChild}
                  >
                    <button
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
                      onClick={() => setOpenFaqId((current) => (current === entry.id ? '' : entry.id))}
                      type="button"
                    >
                      <div>
                        <div className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-text-muted">{entry.category}</div>
                        <h3 className="text-lg font-semibold leading-7 text-slate-900 sm:text-xl">
                          {highlightMatch(entry.question, searchTerm)}
                        </h3>
                      </div>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown className="h-5 w-5 text-accent" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          animate={{ height: 'auto', opacity: 1 }}
                          className="overflow-hidden"
                          exit={{ height: 0, opacity: 0 }}
                          initial={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="border-t border-[#d7e5ff] px-6 py-5 sm:px-7">
                            <p className="text-base leading-8 text-text-muted">{highlightMatch(entry.answer, searchTerm)}</p>

                            <div className="mt-6 flex flex-col gap-4 border-t border-[#d7e5ff] pt-5 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                                <span>Was this helpful?</span>
                                <button
                                  className={`rounded-full border px-3 py-1.5 transition ${
                                    helpfulState === 'up'
                                      ? 'border-accent bg-blue-50 text-accent'
                                      : 'border-[#d7e5ff] bg-white text-text-muted hover:border-accent/50 hover:text-slate-900'
                                  }`}
                                  onClick={() => setFeedbackMap((current) => ({ ...current, [entry.id]: 'up' }))}
                                  type="button"
                                >
                                  👍
                                </button>
                                <button
                                  className={`rounded-full border px-3 py-1.5 transition ${
                                    helpfulState === 'down'
                                      ? 'border-accent bg-blue-50 text-accent'
                                      : 'border-[#d7e5ff] bg-white text-text-muted hover:border-accent/50 hover:text-slate-900'
                                  }`}
                                  onClick={() => setFeedbackMap((current) => ({ ...current, [entry.id]: 'down' }))}
                                  type="button"
                                >
                                  👎
                                </button>
                              </div>

                              <button
                                className="text-sm font-medium text-accent transition hover:text-accent-light"
                                onClick={scrollToForm}
                                type="button"
                              >
                                Still need help? →
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          ) : (
            <div className="glass-panel rounded-[32px] border-[#d7e5ff] px-8 py-14 text-center">
              <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-accent">
                <SearchX className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">No results</h3>
              <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-text-muted">
                We couldn&apos;t find a matching answer for that search. Try a broader term or send us your query below.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      <section className="section-padding bg-[#eef5ff]">
        <motion.div
          className="section-shell"
          initial="hidden"
          variants={sectionReveal}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Need a direct response?</h2>
            <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
              Reach us through the contact route that fits your situation best.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="glass-panel rounded-[30px] p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <MessageSquare className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-[#d7e5ff] bg-white px-3 py-1 text-xs font-medium text-text-muted">24hr Response</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Send Us a Message</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-text-muted">
                Share project context, goals, or support concerns and our team will follow up with the right next step.
              </p>
              <div className="mt-8">
                <Button size="lg" to="/contact" variant="solid">
                  Go to Contact
                </Button>
              </div>
            </div>

            <div className="glass-panel rounded-[30px] p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <Mail className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-[#d7e5ff] bg-white px-3 py-1 text-xs font-medium text-text-muted">
                  hr@cloudstandconsulting.com
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Email Our Team</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-text-muted">
                Prefer email? Reach out directly and we&apos;ll route your message to the right consultant.
              </p>
              <div className="mt-8">
                <Button href="mailto:hr@cloudstandconsulting.com" size="lg" variant="ghost">
                  Write an Email
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-padding bg-primary" id="query-form" ref={queryFormRef}>
        <motion.div
          className="section-shell"
          initial="hidden"
          variants={sectionReveal}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Submit your query</h2>
            <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
              Share the details and we&apos;ll get back to you with a thoughtful response within 24 hours.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_360px]">
            <motion.div
              animate={shakeCount ? { x: [0, -7, 7, -5, 5, 0] } : { x: 0 }}
              className="glass-panel rounded-[32px] p-6 sm:p-8"
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[520px] flex-col items-center justify-center text-center"
                    exit={{ opacity: 0, y: -8 }}
                    initial={{ opacity: 0, y: 8 }}
                    key="success"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ scale: 1 }}
                      className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500"
                      initial={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </motion.span>
                    <h3 className="mt-6 text-3xl font-semibold text-slate-900">Thank you for reaching out.</h3>
                    <p className="mt-4 max-w-lg text-base leading-7 text-text-muted">
                      Your query has been captured successfully. Our team will review it and respond within 24 hours.
                    </p>
                    <div className="mt-8">
                      <Button onClick={resetSubmission} size="lg" variant="ghost">
                        Submit Another
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5"
                    exit={{ opacity: 0, y: -8 }}
                    initial={{ opacity: 0, y: 8 }}
                    key="form"
                    onSubmit={handleSubmit}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="query-name">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                        <input
                          className={inputClassName('name')}
                          id="query-name"
                          name="name"
                          onBlur={handleBlur}
                          onChange={(event) => updateFieldState('name', event.target.value)}
                          placeholder="Your full name"
                          ref={nameInputRef}
                          type="text"
                          value={form.name}
                        />
                        {renderFieldStatus('name')}
                      </div>
                      {touched.name && errors.name ? <p className="mt-2 text-sm text-red-500">{errors.name}</p> : null}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="query-email">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                        <input
                          className={inputClassName('email')}
                          id="query-email"
                          name="email"
                          onBlur={handleBlur}
                          onChange={(event) => updateFieldState('email', event.target.value)}
                          placeholder="name@company.com"
                          ref={emailInputRef}
                          type="email"
                          value={form.email}
                        />
                        {renderFieldStatus('email')}
                      </div>
                      {touched.email && errors.email ? <p className="mt-2 text-sm text-red-500">{errors.email}</p> : null}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="query-topic">
                        Topic
                      </label>
                      <div className="relative">
                        <CircleHelp className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                        <select
                          className={inputClassName('topic')}
                          id="query-topic"
                          name="topic"
                          onBlur={handleBlur}
                          onChange={(event) => updateFieldState('topic', event.target.value)}
                          ref={topicInputRef}
                          value={form.topic}
                        >
                          <option value="">Select a topic</option>
                          {faqTopicOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {renderFieldStatus('topic')}
                      </div>
                      {touched.topic && errors.topic ? <p className="mt-2 text-sm text-red-500">{errors.topic}</p> : null}
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <label className="block text-sm font-medium text-slate-900" htmlFor="query-message">
                          Query
                        </label>
                        <span className="text-xs font-medium text-text-muted">{form.query.length}/800</span>
                      </div>
                      <div className="relative">
                        <textarea
                          className={`min-h-[200px] resize-none rounded-[24px] px-4 py-4 ${inputClassName('query').replace('px-12', '').replace('py-3.5', '')}`}
                          id="query-message"
                          maxLength={800}
                          name="query"
                          onBlur={handleBlur}
                          onChange={(event) => updateFieldState('query', event.target.value)}
                          placeholder="Share your question, current challenge, and any context that would help us respond."
                          ref={queryInputRef}
                          value={form.query}
                        />
                        {touched.query && !errors.query && form.query.trim() ? (
                          <Check className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-emerald-500" />
                        ) : null}
                      </div>
                      {touched.query && errors.query ? <p className="mt-2 text-sm text-red-500">{errors.query}</p> : null}
                    </div>

                    <div className="pt-2">
                      <Button className="min-w-[180px]" disabled={isSubmitting} size="lg" type="submit" variant="solid">
                        {isSubmitting ? 'Sending...' : 'Submit Query'}
                      </Button>
                    </div>

                    <div className="rounded-[24px] border border-[#d7e5ff] bg-[#f8fbff] px-4 py-3 text-sm text-text-muted">
                      <span>🔒 Confidential</span>
                      <span className="mx-2">·</span>
                      <span>⚡ 24hr Response</span>
                      <span className="mx-2">·</span>
                      <span>✅ No Commitment</span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="hidden xl:block">
              <div className="sticky top-28 space-y-5">
                <div className="glass-panel rounded-[30px] p-6">
                  <h3 className="text-2xl font-semibold text-slate-900">Our Commitment</h3>
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        icon: Clock3,
                        title: 'Fast response',
                        description: 'We aim to acknowledge every valid query within 24 hours.',
                      },
                      {
                        icon: Shield,
                        title: 'Confidential handling',
                        description: 'Sensitive project and business details are treated with care.',
                      },
                      {
                        icon: UserCheck,
                        title: 'Human guidance',
                        description: 'Your message is reviewed by our consulting team, not a generic queue.',
                      },
                    ].map((item) => {
                      const Icon = item.icon

                      return (
                        <div className="flex gap-4" key={item.title}>
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <div className="text-base font-semibold text-slate-900">{item.title}</div>
                            <p className="mt-1 text-sm leading-6 text-text-muted">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="glass-panel rounded-[30px] p-6">
                  <h3 className="text-2xl font-semibold text-slate-900">Contact Details</h3>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-text-muted">
                    <p>
                      <span className="font-medium text-slate-900">Phone:</span> +91 9049020793
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Email:</span> hr@cloudstandconsulting.com
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Address:</span> Office No.19 Nirvana Hub Pune-412307
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Hours:</span> Mon-Sat 9AM-6:30PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  )
}

export default ResolveQuery
