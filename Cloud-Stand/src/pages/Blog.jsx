import { useEffect, useState } from 'react'
import { 
  ArrowRight, 
  CalendarDays, 
  Clock3, 
  MonitorPlay, 
  Users, 
  Play, 
  Sparkles, 
  Cpu, 
  Shield, 
  Mail, 
  ArrowUpRight, 
  X, 
  Activity, 
  TrendingUp, 
  ChevronRight, 
  Video, 
  ExternalLink 
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants, staggerContainer, staggerItem } from '../animations/variants'

const webinarInfo = [
  { label: 'Date', value: '12 Aug 2026', Icon: CalendarDays },
  { label: 'Time', value: '07:00 PM IST', Icon: Clock3 },
  { label: 'Speaker', value: 'Oracle Experts', Icon: Users },
  { label: 'Venue', value: 'Online Event', Icon: MonitorPlay },
]

// Place your uploaded webinar poster in the `public/` folder as `webinar-poster.png` (or .jpg/.webp)
// The app will reference it from the public root at '/webinar-poster.png'
const webinarPoster = '/webinar-poster.png'

const quarterlyUpdates = [
  {
    quarter: 'Q1 2026',
    category: 'Artificial Intelligence',
    title: 'Oracle AI Agent Enhancements',
    description: 'Empower operational teams with next-gen autonomous agent reasoning for automatic ticket classification, intelligent routing, and summary dashboards.',
    tag: 'AI',
    Icon: Sparkles,
    badgeColor: 'bg-indigo-50/80 text-indigo-600 border-indigo-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
  },
  {
    quarter: 'Q2 2026',
    category: 'Finance & ERP',
    title: 'Continuous Ledger Reconciliations',
    description: 'Automate finance close cycles with sub-ledger exception handling, predictive anomaly detection, and unified reporting pipelines.',
    tag: 'ERP',
    Icon: Cpu,
    badgeColor: 'bg-emerald-50/80 text-emerald-600 border-emerald-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  {
    quarter: 'Q3 2026',
    category: 'Cloud Infrastructure',
    title: 'OCI Zero-Trust Security Framework',
    description: 'Elevate your cloud posture with decentralized key management, automated threat detection, and next-generation database hardware acceleration.',
    tag: 'OCI',
    Icon: Shield,
    badgeColor: 'bg-amber-50/80 text-amber-600 border-amber-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  }
]

const webinarVideos = [
  // 2 Featured (large top)
  {
    id: 'webinar-1',
    title: 'Architecting Oracle HCM Cloud for Global Scale',
    speaker: 'Marcus Vance, Chief Enterprise Architect',
    date: 'May 12, 2026',
    duration: '45 mins',
    category: 'HCM',
    thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Dummy modal video
    featured: true,
  },
  {
    id: 'webinar-2',
    title: 'Leveraging AI for Predictable ERP Insights',
    speaker: 'Sarah Jenkins, VP of Financial Solutions',
    date: 'Apr 28, 2026',
    duration: '52 mins',
    category: 'AI / ERP',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    featured: true,
  },
  // 3 Smaller (bottom grid)
  {
    id: 'webinar-3',
    title: 'Building Resilient Integration Bridges with OIC',
    speaker: 'Dave Kincaid, Principal Integration Director',
    date: 'Mar 15, 2026',
    duration: '38 mins',
    category: 'Integration',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 'webinar-4',
    title: 'Modernizing Oracle Database Security Policies',
    speaker: 'Elena Rostova, Lead Cybersecurity Architect',
    date: 'Feb 19, 2026',
    duration: '42 mins',
    category: 'OCI Security',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    featured: false,
  },
  {
    id: 'webinar-5',
    title: 'Designing Real-time Dashboards for Oracle Analytics',
    speaker: 'Rajesh Mehta, Head of Business Intelligence',
    date: 'Jan 22, 2026',
    duration: '35 mins',
    category: 'Analytics',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    featured: false,
  }
]

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
  const [activeVideo, setActiveVideo] = useState(null)

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
          KEEP: Hero Section / Live Webinar (EXACTLY AS IT WAS)
          ========================================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 12% 20%, rgba(14,165,233,0.12), transparent 28%), radial-gradient(circle at 88% 18%, rgba(214,59,37,0.08), transparent 24%), linear-gradient(180deg, rgba(255,255,255,1), rgba(255,255,255,1))',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[6%] top-24 h-40 w-40 rounded-full blur-3xl"
          style={{ background: 'rgba(14,165,233,0.12)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-20 h-44 w-44 rounded-full blur-3xl"
          style={{ background: 'rgba(214,59,37,0.10)' }}
        />

        <div className="section-shell relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-3xl">
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center rounded-full bg-[#0EA5E9] px-5 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(14,165,233,0.20)]">
                  Live Webinar
                </span>
              </motion.div>

              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 max-w-4xl font-['Open_Sans'] text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-black sm:text-[44px] xl:text-[48px]"
                initial={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                Future of <span className="text-[#D63B25]">Oracle</span> Cloud Infrastructure
              </motion.h1>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-2xl font-['Open_Sans'] text-base leading-8 text-black/68 sm:text-lg"
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Join Cloud Stand experts to explore OCI modernization, AI integration, enterprise security, and scalable cloud solutions.
              </motion.p>

              <motion.div
                className="mt-8 grid gap-4 sm:grid-cols-2"
                initial="hidden"
                variants={staggerContainer}
                viewport={{ once: true, margin: '-80px' }}
                whileInView="visible"
              >
                {webinarInfo.map(({ label, value, Icon }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="rounded-[24px] border border-[rgba(14,165,233,0.16)] bg-white/88 px-5 py-4 shadow-[0_18px_44px_rgba(14,165,233,0.08)] backdrop-blur-md"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_8px_20px_rgba(14,165,233,0.08)]">
                        <Icon className="h-5 w-5 text-[#0EA5E9]" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">{label}</p>
                        <p className="mt-1 text-base font-semibold text-black">{value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-[#D63B25] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(214,59,37,0.22)] transition-all duration-300 hover:bg-[#EA580C]"
                  type="button"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_12px_26px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#D63B25] hover:text-[#D63B25]"
                  type="button"
                >
                  Learn More
                </button>
              </motion.div>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 text-sm font-medium text-black/70"
                initial={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                Only <span className="font-semibold text-[#D63B25]">50 Seats</span> Left! Reserve your spot now.
              </motion.p>
            </div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
              initial={{ opacity: 0, x: 28 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >

              <div className="relative overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(14,165,233,0.1)] border border-slate-100">
                <img
                  src={webinarPoster}
                  alt="Webinar poster"
                  className="block w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                  className={`group relative overflow-hidden rounded-[28px] border border-sky-200/60 bg-white p-8 shadow-[0_16px_36px_rgba(14,165,233,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_22px_48px_rgba(0,87,255,0.08)] ${update.glowColor}`}
                >
                  {/* Decorative Subtle Glowing Circle Behind Icon on Card Hover */}
                  <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-tr from-[#0ea5e9]/5 to-[#8b5cf6]/5 blur-2xl transition-all duration-500 group-hover:scale-125" />

                  {/* Header Row */}
                  <div className="relative flex items-center justify-between">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${update.badgeColor}`}>
                      {update.quarter}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {update.tag}
                    </span>
                  </div>

                  {/* Icon Block */}
                  <div className="relative mt-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-slate-50 text-[#0EA5E9] shadow-[0_8px_16px_rgba(14,165,233,0.04)] transition-all duration-300 group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(14,165,233,0.22)]">
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="relative mt-6 font-['Open_Sans'] text-xl font-bold text-slate-900 group-hover:text-[#D63B25] transition-colors duration-300">
                    {update.title}
                  </h3>
                  <p className="relative mt-4 text-[0.92rem] leading-7 text-text-muted">
                    {update.description}
                  </p>

                  {/* Footer Row CTA */}
                  <div className="relative mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 group-hover:text-[#0EA5E9] transition-colors">
                      {update.category}
                    </span>
                    <button 
                      type="button"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#0EA5E9] transition-all duration-300 group-hover:gap-2 group-hover:text-[#D63B25]"
                    >
                      Read Update
                      <ChevronRight className="h-4 w-4" />
                    </button>
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
            <span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-orange-400">
              Video Showcase
            </span>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0EA5E9] to-orange-500" />
            <h2 className="mt-6 font-['Open_Sans'] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Expert Webinar Sessions
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
              Watch enterprise cloud experts discuss Oracle Cloud, integrations, AI transformation, ERP modernization, and OCI best practices.
            </p>
          </div>

          {/* Featured Top Webinars (2 Columns) */}
          <div className="grid gap-8 lg:grid-cols-2">
            {webinarVideos.filter(v => v.featured).map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true, margin: '-60px' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/60 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-500 hover:border-slate-700 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)]"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-950">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Vignette */}
                  <div className="absolute inset-0 bg-slate-950/40 transition-opacity duration-500 group-hover:bg-slate-950/20" />
                  
                  {/* Play Button Glow Ring */}
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="absolute inset-0 flex items-center justify-center"
                    type="button"
                  >
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_12px_28px_rgba(234,88,12,0.3)] transition-transform duration-300 group-hover:scale-110">
                      <span className="absolute -inset-2 rounded-full border border-orange-500/30 animate-ping opacity-75" />
                      <Play className="ml-1 h-8 w-8 fill-current" />
                    </span>
                  </button>

                  {/* Duration Badge */}
                  <span className="absolute bottom-4 right-4 rounded-lg bg-slate-950/80 px-2.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
                    {video.duration}
                  </span>
                  {/* Category Tag */}
                  <span className="absolute left-4 top-4 rounded-lg bg-orange-600/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    {video.category}
                  </span>
                </div>

                {/* Meta details */}
                <div className="mt-6 px-2 pb-2">
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">{video.date}</span>
                  <h3 className="mt-2 font-['Open_Sans'] text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-400">
                    {video.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">
                    Speaker: <strong className="font-semibold text-slate-200">{video.speaker}</strong>
                  </p>
                  
                  <button 
                    onClick={() => setActiveVideo(video)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500"
                    type="button"
                  >
                    <span>Watch Webinar</span>
                    <Video className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Smaller Bottom Grid (3 Columns) */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webinarVideos.filter(v => !v.featured).map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                viewport={{ once: true, margin: '-60px' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-[24px] border border-slate-850 bg-slate-900/40 p-4 transition-all duration-500 hover:border-slate-750 hover:bg-slate-900 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-950">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 transition-opacity duration-500 group-hover:bg-slate-950/30" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="absolute inset-0 flex items-center justify-center"
                    type="button"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </button>

                  <span className="absolute bottom-2 right-2 rounded bg-slate-950/80 px-2 py-0.5 text-[0.68rem] font-semibold tracking-wider text-white backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>

                {/* Info block */}
                <div className="mt-4 px-1">
                  <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-wider text-orange-400">
                    <span>{video.category}</span>
                    <span>{video.date}</span>
                  </div>
                  <h4 className="mt-2 font-['Open_Sans'] text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-400 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400 truncate">
                    {video.speaker}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-orange-600">
                      <span>{act.category}</span>
                      <span className="text-slate-400 font-medium">{act.date}</span>
                    </div>

                    <h3 className="mt-4 font-['Open_Sans'] text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#0EA5E9]">
                      {act.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-text-muted">
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
              <span className="inline-flex items-center rounded-full bg-[#0EA5E9]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                Stay Ahead of the Curve
              </span>
              <h2 className="mt-6 font-['Open_Sans'] text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Stay Ahead with <span className="text-gradient">CloudStand Insights</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
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
                      <h4 className="font-['Open_Sans'] text-lg font-bold">Successfully Subscribed!</h4>
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

      {/* ==========================================
          VIDEO MODAL OVERLAY (DYNAMIC POPUP)
          ========================================== */}
      {activeVideo && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow Effects */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

              {/* Modal Header */}
              <div className="relative z-10 flex items-start justify-between border-b border-slate-800/80 px-6 py-5">
                <div>
                  <span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
                    {activeVideo.category}
                  </span>
                  <h3 className="mt-2 font-['Open_Sans'] text-xl font-bold leading-snug text-white sm:text-2xl">
                    {activeVideo.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {activeVideo.speaker} • <span className="font-semibold text-slate-300">{activeVideo.date}</span>
                  </p>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Video Screen Container */}
              <div className="relative aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`${activeVideo.videoUrl}?autoplay=1&mute=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Custom Mock Interactive Bar */}
              <div className="relative z-10 border-t border-slate-800/80 px-6 py-4 bg-slate-950/40">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Streaming in 1080p Ultra HD</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>Duration: <strong className="text-white">{activeVideo.duration}</strong></span>
                    <button 
                      onClick={() => {
                        window.open("https://www.oracle.com/cloud/", "_blank");
                      }}
                      className="inline-flex items-center gap-1 text-orange-400 transition hover:text-orange-300"
                      type="button"
                    >
                      <span>Resource Library</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

    </motion.main>
  )
}

export default Blog
