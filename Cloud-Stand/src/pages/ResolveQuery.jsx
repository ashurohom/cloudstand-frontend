import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BadgeCheck, Check, ChevronDown, CircleHelp, Search, SearchX, Shield, UserCheck, X } from 'lucide-react'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import HeroTitle from '../components/ui/HeroTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { faqCategories, faqEntries } from '../data/faqData'
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

function ResolveQuery() {
  useDocumentTitle('Resolve Your Query | CloudStand Consulting')

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFaqId, setOpenFaqId] = useState(faqEntries[0]?.id ?? '')
  const [feedbackMap, setFeedbackMap] = useState({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  const visibleOpenFaqId = filteredFaqs.some((entry) => entry.id === openFaqId) ? openFaqId : (filteredFaqs[0]?.id ?? '')

  return (
    <motion.main animate="animate" className="overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="hero-mesh hero-particles section-padding relative isolate overflow-hidden">
        <AICloudBackground />
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="section-shell relative z-10"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="inline-flex items-center gap-2">
              <CircleHelp className="h-4 w-4 text-accent" />
              <span>Resolve Your Query</span>
            </Badge>
          </motion.div>
          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[1.02] text-slate-900 md:text-4xl lg:text-5xl">
            <HeroTitle text="Find Answers." />
            <HeroTitle text="Get Clarity." gradient />
          </h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-3xl font-dm-sans text-lg leading-8 text-text-muted"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Browse common questions, filter by topic, and quickly find the Oracle Cloud answers you need.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel mt-10 flex max-w-3xl items-center gap-3 rounded-full border-[#d7e5ff] px-5 py-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
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
                  <motion.div className="glass-panel overflow-hidden rounded-[30px] border-[#d7e5ff]" key={entry.id} variants={staggerChild}>
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
                                  Yes
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
                                  No
                                </button>
                              </div>

                              <button
                                className="text-sm font-medium text-accent transition hover:text-accent-light"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                type="button"
                              >
                                Back to top
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
                We couldn&apos;t find a matching answer for that search. Try a broader term or another topic.
              </p>
            </div>
          )}
        </motion.div>
      </section>
    </motion.main>
  )
}

export default ResolveQuery
