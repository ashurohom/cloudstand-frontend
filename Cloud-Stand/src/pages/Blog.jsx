import { useEffect, useState } from 'react'
import { 
  ArrowRight, 
  CalendarDays, 
  Clock3, 
  MonitorPlay, 
  Users, 
  Sparkles, 
  Cpu, 
  Shield, 
  Mail, 
  ArrowUpRight, 
  Activity, 
  TrendingUp, 
  ChevronRight,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants, staggerContainer, staggerItem } from '../animations/variants'
import { API_ENDPOINTS } from '../config/api'

const quarterlyUpdates = [
  {
    quarter: 'Q1 2026',
    category: 'Artificial Intelligence',
    title: 'Oracle AI Agent Enhancements',
    description: 'Empower operational teams with next-gen autonomous agent reasoning for automatic ticket classification, intelligent routing, and summary dashboards.',
    tag: 'AI',
    Icon: Sparkles,
    badgeColor: 'bg-indigo-50/80 text-[#EA580C] border-indigo-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
  },
  {
    quarter: 'Q2 2026',
    category: 'Finance & ERP',
    title: 'Continuous Ledger Reconciliations',
    description: 'Automate finance close cycles with sub-ledger exception handling, predictive anomaly detection, and unified reporting pipelines.',
    tag: 'ERP',
    Icon: Cpu,
    badgeColor: 'bg-emerald-50/80 text-[#EA580C] border-emerald-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  {
    quarter: 'Q3 2026',
    category: 'Cloud Infrastructure',
    title: 'OCI Zero-Trust Security Framework',
    description: 'Elevate your cloud posture with decentralized key management, automated threat detection, and next-generation database hardware acceleration.',
    tag: 'OCI',
    Icon: Shield,
    badgeColor: 'bg-amber-50/80 text-[#EA580C] border-amber-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  }
]

// webinarVideos removed — replaced by a single featured embed

const recentActivities = [
  {
    category: 'Webinar Highlights',
    title: 'Critical Success Patterns in Oracle HCM Cloud Transitions',
    description: 'Key takeaways from our latest live webinar series, featuring real-world roadmaps, transition timelines, and human capital transformation frameworks.',
    date: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    category: 'Partnership News',
    title: 'CloudStand Certified as a Premium Oracle Cloud Transformation Partner',
    description: 'This strategic certification reinforces our capacity to deliver highly secure, custom integrations, enterprise databases, and ERP migrations globally.',
    date: 'May 08, 2026',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    category: 'OCI Migration Stories',
    title: 'How a Multi-Region Financial SaaS Achieved 40% OCI Performance Gain',
    description: 'An in-depth case study of database sharding and low-latency network topologies executed by CloudStand engineering teams.',
    date: 'Apr 24, 2026',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    category: 'AI Integrations',
    title: 'Launching Autonomous Support Assistants for Payroll Exception Workflows',
    description: 'An interactive chatbot model designed to proactively notify teams of ledger discrepancies, saving hundreds of hours of manual verification.',
    date: 'Apr 11, 2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    category: 'ERP Summit Recap',
    title: 'Key Insights from the CloudStand Executive ERP Summit 2026',
    description: 'A comprehensive summary of enterprise finance modernization, predictive data intelligence, and compliance strategy debates.',
    date: 'Mar 29, 2026',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    category: 'OIC Patterns',
    title: 'Best Practices in Oracle Integration Cloud Error Recovery Schemes',
    description: 'Explore highly resilient integration flows, retry policies, and telemetry models built for modern high-throughput enterprise systems.',
    date: 'Mar 12, 2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    link: '#',
  }
]

function Blog() {
  useDocumentTitle('Insights & Perspectives | CloudStand Insights')
  
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const [hasWebinar, setHasWebinar] = useState(true)
  const [webinarData, setWebinarData] = useState({
    title: 'Future of Oracle Cloud Infrastructure',
    date: 'TBA',
    time: 'TBA',
    speaker: 'TBA',
    venue: 'TBA',
    image: '/webinar-poster.png'
  })

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.liveWebinar)
        if (res.ok) {
          const data = await res.json()
          if (!data || Object.keys(data).length === 0 || (Array.isArray(data) && data.length === 0)) {
            setHasWebinar(false)
          } else {
            setWebinarData({
              title: data.title || 'Future of Oracle Cloud Infrastructure',
              date: data.date || 'TBA',
              time: data.time || 'TBA',
              speaker: data.speaker || 'TBA',
              venue: data.venue || 'TBA',
              image: data.image || '/webinar-poster.png'
            })
            setHasWebinar(true)
          }
        } else {
          setHasWebinar(false)
        }
      } catch (e) {
        console.error("Failed to load webinar data", e)
        setHasWebinar(false)
      }
    }
    fetchWebinar()
  }, [])

  const [showcaseVideos, setShowcaseVideos] = useState({
    featured: 'https://www.youtube.com/embed/qqAyn6sxn0E?si=SpkMVSiy3-ct8ZAH',
    list: []
  })

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.videoShowcase)
        if (res.ok) {
          const data = await res.json()
          setShowcaseVideos({
            featured: data.featured || 'https://www.youtube.com/embed/qqAyn6sxn0E?si=SpkMVSiy3-ct8ZAH',
            list: data.list || []
          })
        }
      } catch (e) {
        console.error("Failed to load showcase videos", e)
      }
    }
    fetchVideos()
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [regForm, setRegForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    currentRole: '',
    areaOfInterest: ''
  })
  const [regErrors, setRegErrors] = useState({})
  const [regSubmitted, setRegSubmitted] = useState(false)
  const [regSubmitting, setRegSubmitting] = useState(false)
  const [regSubmitError, setRegSubmitError] = useState('')

  const handleRegChange = (e) => {
    const { name, value } = e.target
    setRegForm(prev => ({ ...prev, [name]: value }))
    setRegErrors(prev => ({ ...prev, [name]: '' }))
  }

  const closeRegModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setRegSubmitted(false)
      setRegForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        currentRole: '',
        areaOfInterest: ''
      })
      setRegErrors({})
      setRegSubmitting(false)
      setRegSubmitError('')
    }, 300)
  }

  const handleRegSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!regForm.lastName.trim()) newErrors.lastName = 'Required'
    if (regForm.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regForm.email)) {
      newErrors.email = 'Invalid'
    }

    if (Object.keys(newErrors).length > 0) {
      setRegErrors(newErrors)
      return
    }

    setRegErrors({})
    setRegSubmitting(true)
    setRegSubmitError('')

    try {
      const res = await fetch(API_ENDPOINTS.webinarRegistration, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: regForm.firstName,
          last_name: regForm.lastName,
          email: regForm.email,
          phone: regForm.phone,
          linkedin_url: regForm.linkedin,
          current_role: regForm.currentRole,
          area_of_interest: regForm.areaOfInterest,
          webinar_title: webinarData.title || 'Future of Oracle Cloud Infrastructure'
        }),
      })

      if (!res.ok) {
        let errorMsg = 'Failed to complete registration. Please try again.'
        try {
          const errorData = await res.json()
          if (errorData && errorData.message) {
            errorMsg = errorData.message
          }
        } catch (parseErr) {
          // keep default error message
        }
        throw new Error(errorMsg)
      }

      setRegSubmitted(true)

      // Auto-close modal after 5 seconds
      setTimeout(() => {
        closeRegModal()
      }, 5000)
    } catch (e) {
      console.error(e)
      setRegSubmitError(e.message || 'Failed to complete registration. Please try again.')
    } finally {
      setRegSubmitting(false)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim() !== '') {
      setSubscribed(true)
      setTimeout(() => {
        setEmail('')
        setSubscribed(false)
      }, 5000)
    }
  }

  return (
    <motion.main animate="animate" className="relative overflow-hidden pt-20" exit="exit" initial="initial" variants={pageVariants}>
      
      {/* Background Decorative Drifting Blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute left-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#0ea5e9]/12 to-[#8b5cf6]/10 blur-3xl orb-drift" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-10%] top-[60%] h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-[#ea580c]/8 to-[#8b5cf6]/10 blur-3xl orb-drift" style={{ animationDelay: '-6s' }} />

      {/* ==========================================
          Hero Section / Live Webinar (Contact Page Style)
          ========================================== */}
      {!hasWebinar ? (
        <section className="relative overflow-hidden pt-12 pb-16 min-h-[calc(100vh-80px)] lg:flex lg:items-center bg-white">
          <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
          <div className="section-shell relative z-20 w-full">
            <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-[760px] lg:w-[60%] flex flex-col items-start text-left relative z-10">
                <motion.div
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Badge>CloudStand Insights</Badge>
                </motion.div>

                <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9]" />

                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black text-left"
                  initial={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Enterprise Cloud Transformation & <span className="text-[#EA580C]">Expert Webinars</span>
                </motion.h1>

                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#475569] text-left"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Explore our latest research, industry perspectives, and technical roadmaps on Oracle Cloud implementations, AI adoption, and ERP modernization.
                  <br /><br />
                  We regularly host <span className="font-semibold text-[#EA580C]">live expert-led webinars</span> to share these exclusive insights. Stay tuned for our upcoming schedule!
                </motion.p>
              </div>

              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center w-full mt-10 lg:mt-0 lg:w-[45%] lg:items-end relative"
              >
                <div className="relative z-10 w-full max-w-[500px] rounded-[24px] shadow-[0_12px_40px_rgba(14,165,233,0.1)] border border-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Cloud Insights" 
                    className="block w-full h-auto object-cover aspect-[4/3]"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
      <section
        className="relative overflow-hidden pt-12 pb-16 min-h-[calc(100vh-80px)] lg:flex lg:items-center bg-white"
      >
        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />

        <div className="section-shell relative z-20 w-full">
          <div className="flex w-full flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-start text-left relative z-10">
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Badge>Live Webinar</Badge>
              </motion.div>

              {/* BLUE LINE */}
              <div className="mt-3 h-1 w-16 rounded-full bg-[#0EA5E9]" />

              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-black text-left"
                initial={{ opacity: 0, y: 25 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {webinarData.title}
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-[#475569] text-left"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Join Cloud Stand experts to explore OCI modernization, AI integration, enterprise security, and scalable cloud solutions.
              </motion.p>

              {/* COMPACT DETAILS SECTION */}
              <motion.div
                className="mt-6 flex flex-col gap-3 w-full max-w-[580px]"
                initial="hidden"
                variants={staggerContainer}
                viewport={{ once: true, margin: '-80px' }}
                whileInView="visible"
              >
                {/* Date, Time & Venue row (3 columns) */}
                <motion.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-[16px] border border-[rgba(14,165,233,0.16)] bg-white/88 px-5 py-3 shadow-[0_12px_30px_rgba(14,165,233,0.06)] backdrop-blur-md">
                   {/* Date */}
                   <div className="flex items-center gap-3">
                     <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_4px_10px_rgba(14,165,233,0.05)]">
                       <CalendarDays className="h-4 w-4 text-[#0EA5E9]" strokeWidth={2} />
                     </span>
                     <div>
                       <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">Date</p>
                       <p className="mt-0.5 text-[14px] font-semibold text-black">{webinarData.date}</p>
                     </div>
                   </div>

                   {/* Time */}
                   <div className="flex items-center gap-3">
                     <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_4px_10px_rgba(14,165,233,0.05)]">
                       <Clock3 className="h-4 w-4 text-[#0EA5E9]" strokeWidth={2} />
                     </span>
                     <div>
                       <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">Time</p>
                       <p className="mt-0.5 text-[14px] font-semibold text-black">{webinarData.time}</p>
                     </div>
                   </div>

                   {/* Venue */}
                   <div className="flex items-center gap-3">
                     <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_4px_10px_rgba(14,165,233,0.05)]">
                       <MonitorPlay className="h-4 w-4 text-[#0EA5E9]" strokeWidth={2} />
                     </span>
                     <div>
                       <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">Venue</p>
                       <p className="mt-0.5 text-[14px] font-semibold text-black">{webinarData.venue}</p>
                     </div>
                   </div>
                </motion.div>

                {/* Bottom Row: Speaker(s) and Register Button */}
                <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                   {/* Speaker(s) */}
                   <div className="flex flex-1 items-center gap-3 w-full rounded-[16px] border border-[rgba(14,165,233,0.16)] bg-white/88 px-5 py-3 shadow-[0_12px_30px_rgba(14,165,233,0.06)] backdrop-blur-md">
                     <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_4px_10px_rgba(14,165,233,0.05)]">
                       <Users className="h-4 w-4 text-[#0EA5E9]" strokeWidth={2} />
                     </span>
                     <div className="flex-1">
                       <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">Speaker(s)</p>
                       <div className="mt-1.5 flex flex-wrap gap-2">
                         {webinarData.speaker && webinarData.speaker.split(',').map((name, i) => (
                           <span 
                             key={i} 
                             className="inline-flex items-center rounded border border-[rgba(14,165,233,0.16)] bg-transparent px-2.5 py-0.5 text-[14px] font-semibold text-black"
                           >
                             {name.trim()}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>

                   {/* Register Button */}
                   <button
                     onClick={() => setIsModalOpen(true)}
                     className="inline-flex shrink-0 w-full sm:w-auto items-center justify-center gap-3 rounded-[16px] bg-[#EA580C] px-8 py-4 sm:py-3 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(234,88,12,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9480f] h-full min-h-[60px] sm:min-h-0"
                     type="button"
                   >
                     Register Now
                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                       <svg
                         className="h-3.5 w-3.5"
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
                </motion.div>
              </motion.div>

            </div>

            {/* RIGHT VISUAL - IMAGE ONLY */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-start w-full mt-10 lg:w-[45%] lg:items-end relative lg:mt-[74px]"
            >
              <div className="relative z-10 w-full max-w-[500px] rounded-[24px] shadow-[0_12px_40px_rgba(14,165,233,0.1)] border border-slate-100 overflow-hidden">
                <img 
                  src={webinarData.image}
                  alt="Webinar poster" 
                  className="block w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      )}

      {/* ==========================================
          1. FEATURED QUARTERLY UPDATES SECTION
          ========================================== */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-primary/45 border-t border-sky-100/50">
        <div className="section-shell relative z-10">
          <SectionTitle 
            eyebrow="Quarterly Release Hub" 
            title="Quarterly Product Updates" 
            subtitle="Stay updated with the latest Oracle Cloud innovations, platform enhancements, AI capabilities, and enterprise transformation releases."
            align="center"
            titleClassName="!text-[40px]"
          />

          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {quarterlyUpdates.map((update, index) => {
              const Icon = update.Icon
              return (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  className="group relative flex min-h-[345px] overflow-hidden rounded-[26px] border border-[#ececec] bg-white p-4 transition-all duration-500 hover:-translate-y-2 hover:border-[#f97316]"
                >
                  <div className="flex w-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className={`inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] ${update.badgeColor}`}>
                        {update.quarter}
                      </span>

                      <div className="h-2.5 w-12 rounded-full bg-gradient-to-r from-[#f97316] to-[#0EA5E9]" />
                    </div>

                    <div className="relative mt-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#0EA5E9] shadow-[0_8px_16px_rgba(14,165,233,0.04)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="max-w-sm text-[1.25rem] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#0EA5E9]">
                      {update.title}
                    </h3>

                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-justify text-[#5f6368] flex-1 line-clamp-4 whitespace-pre-line">
                      {update.description}
                    </p>

                    <div className="mt-auto h-px w-full bg-[#ececec]" />

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#0EA5E9]">{update.category}</span>
                      <button 
                        type="button"
                        className="flex items-center gap-2 text-sm font-semibold text-[#f97316] transition-all duration-300"
                      >
                        Read Update
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          2. WEBINAR VIDEOS SECTION
          ========================================== */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-slate-950 text-white overflow-hidden">
        {/* Glow Overlay Blobs */}
        <div className="pointer-events-none absolute -right-32 top-[-10%] h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-32 bottom-[-10%] h-[550px] w-[550px] rounded-full bg-orange-600/5 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

        <div className="section-shell relative z-10">
          <div className="mb-16 flex flex-col items-center text-center">
            <Badge light>Video Showcase</Badge>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0EA5E9] to-orange-500" />
            <h2 className="mt-6 text-[40px] font-extrabold tracking-tight text-white">
              Expert Webinar Sessions
            </h2>
            <p className="mt-5 max-w-3xl text-[16px] leading-7 text-slate-400 ">
              Watch enterprise cloud experts discuss Oracle Cloud, integrations, AI transformation, ERP modernization, and OCI best practices.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <iframe
                    className="h-full w-full"
                    src={showcaseVideos.featured}
                    title="CloudStand Featured Webinar"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {showcaseVideos.list.length > 0 && (
            <div className="mt-16 flex flex-wrap justify-center gap-6">
              {showcaseVideos.list.map((videoUrl, index) => (
                <div 
                  key={index} 
                  className="w-full max-w-[500px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[300px]"
                >
                  <div className="relative overflow-hidden rounded-[20px] border border-slate-800 bg-slate-900/50 p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl h-full">
                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        className="h-full w-full"
                        src={videoUrl}
                        title={`CloudStand Video ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ==========================================
          3. RECENT ACTIVITIES / UPDATES SECTION
          ========================================== */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-white">
        <div className="section-shell relative z-10">
          <SectionTitle 
            eyebrow="Activity Feed" 
            title="Recent Updates & Activities" 
            subtitle="Latest cloud transformation activities, customer success stories, webinars, events, and product launches."
            align="center"
            titleClassName="!text-[40px]"
          />

          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {recentActivities.map((act, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-[0_16px_40px_rgba(14,165,233,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_24px_56px_rgba(0,87,255,0.07)]"
              >
                {/* Card Image */}
                <div>
                  <div className="relative aspect-[1.6/1] overflow-hidden rounded-t-[30px] bg-slate-100">
                    <img 
                      src={act.image} 
                      alt={act.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-[#EA580C]">
                      <span>{act.category}</span>
                      <span className="text-slate-400 font-medium">{act.date}</span>
                    </div>

                    <h3 className="mt-4 max-w-sm text-[1.25rem] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#0EA5E9]">
                      {act.title}
                    </h3>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-justify text-[#5f6368] flex-1 line-clamp-4 whitespace-pre-line">
                      {act.description}
                    </p>
                  </div>
                </div>

                {/* Footer Read More Link */}
                <div className="px-7 pb-7 pt-2">
                  <a 
                    href={act.link}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#0EA5E9] transition-all duration-300 group-hover:gap-2 group-hover:text-[#D63B25]"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          4. INSIGHTS NEWSLETTER CTA SECTION
          ========================================== */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-primary/20">
        <div className="section-shell relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: '-60px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[40px] border border-sky-100 bg-white/70 px-8 py-16 shadow-[0_24px_70px_rgba(14,165,233,0.06)] backdrop-blur-lg sm:px-14 lg:py-20"
          >
            {/* Background micro gradient accents inside the CTA panel */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-tr from-[#0ea5e9]/12 to-[#8b5cf6]/12 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-gradient-to-tr from-[#ea580c]/8 to-[#0ea5e9]/8 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <Badge>Stay Ahead of the Curve</Badge>
              <h2 className="mt-6 text-[40px] font-extrabold leading-tight text-slate-900">
                Stay Ahead with <span className="text-gradient">CloudStand Insights</span>
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-text-muted ">
                Get quarterly Oracle Cloud updates, expert webinars, enterprise AI trends, and cloud transformation insights directly in your inbox.
              </p>

              {/* Form Input Block */}
              <div className="mx-auto mt-10 max-w-lg">
                <AnimatePresence mode="wait">
                  {!subscribed ? (
                    <motion.form 
                      onSubmit={handleSubscribe}
                      key="form"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col sm:flex-row gap-3 rounded-[32px] border border-sky-150 bg-white p-2.5 shadow-[0_12px_32px_rgba(14,165,233,0.05)] focus-within:border-orange-300 focus-within:shadow-[0_12px_36px_rgba(14,165,233,0.08)] transition-all duration-300"
                    >
                      <div className="flex flex-1 items-center gap-3 px-4 py-2 sm:py-0">
                        <Mail className="h-5 w-5 text-slate-400 shrink-0" />
                        <input 
                          type="email" 
                          placeholder="Enter your work email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 font-medium"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D63B25] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(214,59,37,0.2)] transition-all duration-300 hover:bg-[#EA580C] hover:shadow-[0_16px_36px_rgba(234,88,12,0.3)] shrink-0"
                      >
                        <span>Subscribe Now</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="rounded-[28px] border border-emerald-200 bg-emerald-50/50 p-6 text-center text-emerald-800 shadow-[0_8px_24px_rgba(16,185,129,0.05)] backdrop-blur-md"
                    >
                      <h4 className="text-lg font-bold">Successfully Subscribed!</h4>
                      <p className="mt-2 text-sm text-emerald-700">
                        Thank you for joining. You will receive your first briefing shortly!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Zero spam. Unsubscribe anytime. Your enterprise information is fully protected.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video modal removed — using a single embedded featured video instead */}

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={closeRegModal}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-[#e2e8f0] z-10"
            >
              <button 
                onClick={closeRegModal}
                className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-6 md:p-10">
                {!regSubmitted ? (
                  <>
                    <div className="mb-8 flex flex-col items-center text-center">
                      <Badge>Webinar Registration</Badge>
                      <h2 className="mt-4 text-[40px] font-bold leading-[1.02] tracking-tight text-[#111827] text-center">
                        Claim Your Spot
                      </h2>
                      <p className="mt-2 text-[16px] leading-relaxed text-[#475569] text-center max-w-[480px] mx-auto">
                        Stay ahead with insights from our Oracle Center of Excellence specialists.
                      </p>
                    </div>

                    <form onSubmit={handleRegSubmit} className="grid gap-2.5 md:grid-cols-2">
                      {/* BASIC INFORMATION SECTION HEADER */}
                      <div className="md:col-span-2">
                        <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Basic Information</h3>
                      </div>

                      {/* FIRST NAME */}
                      <div className="md:col-span-1">
                        <input
                          name="firstName"
                          type="text"
                          placeholder="First Name (Optional)"
                          value={regForm.firstName}
                          onChange={handleRegChange}
                          className={`h-[44px] w-full rounded-[10px] border ${regErrors.firstName ? 'border-red-400' : 'border-[#e2e8f0]'} bg-[#F7F9FC] px-4 text-[14px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none`}
                        />
                      </div>

                      {/* LAST NAME */}
                      <div className="md:col-span-1 relative">
                        <input
                          name="lastName"
                          type="text"
                          placeholder="Last Name *"
                          value={regForm.lastName}
                          onChange={handleRegChange}
                          className={`h-[44px] w-full rounded-[10px] border ${regErrors.lastName ? 'border-red-400' : 'border-[#e2e8f0]'} bg-[#F7F9FC] px-4 text-[14px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none`}
                        />
                      </div>

                      {/* EMAIL */}
                      <div className="md:col-span-2">
                        <input
                          name="email"
                          type="email"
                          placeholder="Work Email Address (Optional)"
                          value={regForm.email}
                          onChange={handleRegChange}
                          className={`h-[44px] w-full rounded-[10px] border ${regErrors.email ? 'border-red-400' : 'border-[#e2e8f0]'} bg-[#F7F9FC] px-4 text-[14px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none`}
                        />
                      </div>

                      {/* PHONE NUMBER */}
                      <div className="md:col-span-1">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Contact Number (Optional)"
                          value={regForm.phone}
                          onChange={handleRegChange}
                          className="h-[44px] w-full rounded-[10px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                        />
                      </div>

                      {/* LINKEDIN */}
                      <div className="md:col-span-1">
                        <input
                          name="linkedin"
                          type="text"
                          placeholder="LinkedIn URL (Optional)"
                          value={regForm.linkedin}
                          onChange={handleRegChange}
                          className={`h-[44px] w-full rounded-[10px] border ${regErrors.linkedin ? 'border-red-400' : 'border-[#e2e8f0]'} bg-[#F7F9FC] px-4 text-[14px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none`}
                        />
                      </div>

                      {/* PROFESSIONAL DETAILS SECTION HEADER */}
                      <div className="md:col-span-2 mt-1 pt-2 border-t border-slate-200/60">
                        <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Professional Details</h3>
                      </div>

                      {/* CURRENT ROLE */}
                      <div className="md:col-span-2">
                        <input
                          name="currentRole"
                          type="text"
                          placeholder="Current Role / Profession (Optional)"
                          value={regForm.currentRole}
                          onChange={handleRegChange}
                          className="h-[44px] w-full rounded-[10px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14px] text-[#111827] placeholder:text-[#94a3b8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                        />
                      </div>

                      {/* AREA OF INTEREST */}
                      <div className="md:col-span-2 relative">
                        <select
                          name="areaOfInterest"
                          value={regForm.areaOfInterest}
                          onChange={handleRegChange}
                          className={`h-[44px] w-full rounded-[10px] border border-[#e2e8f0] bg-[#F7F9FC] px-4 text-[14px] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none appearance-none ${regForm.areaOfInterest === '' ? 'text-[#94a3b8]' : 'text-[#111827]'}`}
                        >
                          <option value="" disabled hidden className="text-slate-400">Select Service Area</option>
                          <option value="Oracle Cloud Transformation" className="text-black">Oracle Cloud Transformation</option>
                          <option value="AI & Automation CoE" className="text-black">AI & Automation CoE</option>
                          <option value="Oracle Integration Cloud (OIC)" className="text-black">Oracle Integration Cloud (OIC)</option>
                          <option value="Oracle Analytics Cloud (OAC)" className="text-black">Oracle Analytics Cloud (OAC)</option>
                          <option value="Managed Services" className="text-black">Managed Services</option>
                          <option value="Health Check & Advisory" className="text-black">Health Check & Advisory</option>
                          <option value="Professional Staffing" className="text-black">Professional Staffing</option>
                          <option value="Corporate Training" className="text-black">Corporate Training</option>
                          <option value="Other" className="text-black">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>

                      {/* BUTTON */}
                      <div className="md:col-span-2 mt-1 text-center">
                        {regSubmitError && (
                          <div className="mb-2 text-sm font-medium text-red-500">
                            {regSubmitError}
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={regSubmitting}
                          className="inline-flex items-center justify-center gap-3 w-full rounded-full bg-gradient-to-r from-[#F97316] to-[#ea580c] px-8 py-3 text-[15.5px] font-semibold text-white shadow-[0_10px_25px_rgba(249,115,22,0.25)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(249,115,22,0.35)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                        >
                          {regSubmitting ? 'Processing Registration...' : 'Complete Registration'}
                          {!regSubmitting && <ArrowRight className="h-4 w-4" />}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827] mb-2">Registration Successful</h3>
                    <p className="text-[#475569] max-w-[350px] mx-auto">
                      Thank you for securing your spot.
                    </p>
                    <button
                      onClick={closeRegModal}
                      className="mt-8 rounded-full border border-slate-200 bg-white px-8 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.main>
  )
}

export default Blog
