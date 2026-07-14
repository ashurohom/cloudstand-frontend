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
    category: 'Oracle Fusion HCM 26A',
    title: 'Oracle Fusion HCM 26A',
    description: 'Oracle HCM 26A introduces foundational AI capabilities with strong focus on skills intelligence, employee self-service, and early Redwood adoption across HR processes.',
    tag: 'HCM',
    Icon: Sparkles,
    badgeColor: 'bg-indigo-50/80 text-[#EA580C] border-indigo-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
    fullContent: (
      <div className="space-y-4 text-[15px] leading-relaxed text-[#475569] mt-6 border-t border-[#ececec] pt-6">
        <p>
          Oracle Fusion Cloud HCM 26A continues Oracle’s focus on <strong>embedding artificial intelligence across the employee lifecycle, introducing new AI-assisted experiences, Redwood innovations, and workforce intelligence capabilities</strong> designed to improve productivity, decision-making, and user experience.
        </p>
        <p>
          A key theme of the 26A release is the <strong>expansion of AI-powered assistance</strong> across Human Resources. Organizations can now leverage Employee Self-Service with AI Assistance and Team Management with AI Assistance to simplify routine HR interactions. Additional AI-enabled capabilities include updating employee marital status, changing working hours, managing journeys, viewing employee personal information, and managing personal document records. Workforce leaders can also analyze workforce structures and team composition using AI-assisted insights, while Redwood employment processes now support AI-generated approval comments.
        </p>
        <p>
          <strong>Recruiting</strong> receives several notable enhancements in 26A. Oracle introduces AI Agent Studio support for both Job Requisition Creation and Job Offer Creation flows, enabling organizations to extend and tailor recruiting experiences. Recruiters also benefit from Career Coach enhancements, candidate authenticity improvements within the Job Applicant Screening Advisor, and a redesigned Redwood Interview Schedule Details page that streamlines interview management activities.
        </p>
        <p>
          In <strong>Compensation</strong>, Oracle expands intelligent decision-support capabilities through the introduction of Peer-Group Salary Benchmarking within My Team Compensation Advisor. Organizations can also take advantage of enhancements to AI Assist for generating individual compensation plan instructions, helping improve consistency and efficiency during compensation planning cycles.
        </p>
        <p>
          <strong>Skills intelligence</strong> remains a major focus of the release. Generative AI-powered skill suggestions are now available across multiple talent processes, including learning items, career roles, job requisitions, gigs, and role guides. Employees can also access enhanced skill recommendations within the Redwood Skills Center, supporting workforce agility and skills-based talent development strategies.
        </p>
        <p>
          <strong>Learning and Career Development</strong> continue to evolve through intelligent content discovery. The new Learning Catalog Smart Search Advisor helps learners locate relevant learning opportunities more effectively, while generative AI-driven skill recommendations strengthen career planning and development experiences.
        </p>
        <p>
          <strong>Talent Management</strong> enhancements introduce additional AI-powered capabilities to support performance and growth. The Redwood Employee Goals Assistant Agent helps employees manage goals more efficiently, while Profile Management gains AI-generated summaries of employee feedback. Oracle also extends Dynamic Skills into performance documents, enabling closer alignment between employee skills, development activities, and performance management processes.
        </p>
        <p>
          <strong>Payroll</strong> receives a significant innovation with the introduction of the Payroll Administrator Troubleshooting AI Agent, designed to assist payroll teams in identifying and resolving payroll-related issues more efficiently.
        </p>
        <p>
          With Oracle Fusion HCM 26A, Oracle continues to invest in <strong>AI-driven experiences, Redwood modernization, and skills-focused workforce management,</strong> helping organizations streamline HR operations while empowering employees, managers, and HR teams with intelligent assistance.
        </p>
      </div>
    )
  },
  {
    quarter: 'Q2 2026',
    category: 'Oracle Fusion HCM 26B',
    title: 'Oracle Fusion HCM 26B',
    description: 'Enterprise-wide AI expansion in Oracle HCM 26B across Recruiting, Learning, Payroll, Compensation, and Talent Management to improve HR productivity and decision-making.',
    tag: 'HCM',
    Icon: Cpu,
    badgeColor: 'bg-emerald-50/80 text-[#EA580C] border-emerald-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    fullContent: (
      <div className="space-y-4 text-[15px] leading-relaxed text-[#475569] mt-6 border-t border-[#ececec] pt-6">
        <p>
          Oracle Fusion Cloud HCM 26B introduces significant advancements across <strong>Human Resources, Recruiting, Learning, Talent Management, Compensation, Benefits, Payroll, and Time & Labor.</strong> The release continues Oracle’s investment in Redwood user experiences and embedded AI capabilities designed to enhance productivity, decision-making, and employee engagement.
        </p>
        <p>
          A major highlight of 26B is the <strong>expansion of AI-powered agents</strong> across the HCM suite.
        </p>
        <p>
          In <strong>Learning,</strong> organizations can leverage the Enhanced Skills Library Translation Agent, Enhanced Learning Creation Assistant, Learning Assignment Assistant, Learning Tutor Enhancements, and Ask Oracle: My Team’s Learning Assistant. Additional innovations include automatic import of content provider skills and a new Team Learning and Development Workspace for managers.
        </p>
        <p>
          <strong>Recruiting</strong> receives substantial enhancements through Career Coach updates, including Interview Management Agents, framework improvements, and text assistant support. Recruiters can also benefit from AI-powered candidate search capabilities, Job Application AI Overview, AI-assisted sourcing campaigns, candidate pool creation, and enhanced AI-based candidate rating and sorting. Redwood experiences continue to expand with interview scheduling templates, agency hiring, and hiring event enhancements.
        </p>
        <p>
          Within <strong>Core HR,</strong> Oracle introduces several AI-assisted experiences, including Manage Jobs with AI Assistance, Manage Document Records for Managers and HR Specialists, Resign from Employment with AI Assistance, and enhancements to the Representative Agent. The Personal Information Assistant AI Agent can now update demographic, biographical, phone, and email information. Workflow automation is also strengthened through AI-assisted journey task triggers.
        </p>
        <p>
          <strong>Compensation and Benefits</strong> gain new intelligent capabilities through the Personal Contribution AI Agent, Line Manager Salary Change AI Agent, Compensation Advisor enhancements, Benefits Certification Agent, and Court Order Intake Assistant.
        </p>
        <p>
          <strong>Talent Management</strong> continues its Redwood transformation with updates across Goal Management, Performance Management, Succession Management, Talent Review, and Check-Ins. Key enhancements include AI-generated performance feedback visibility, conversation summaries, succession planning advisor updates, redesigned configuration pages, and expanded role-based controls for goals and performance activities.
        </p>
        <p>
          <strong>Time and Labor</strong> introduces the Time Analyst and enhanced Time Assistant experiences, while Payroll expands troubleshooting capabilities through improvements to the Payroll Administrator Troubleshooting AI Agent.
        </p>
        <p>
          Additional innovations include the <strong>Redwood Style Transaction Console with Embedded AI, Microsoft Teams integration within HCM Communicate, the HCM Professional Concierge, and the Enhanced Time-off Assistant AI Agent.</strong>
        </p>
        <p>
          Oracle Fusion HCM 26B demonstrates Oracle’s continued focus on delivering <strong>AI-assisted workflows, modern Redwood experiences, and operational efficiencies</strong> that help HR teams streamline processes while improving employee and manager experiences across the enterprise.
        </p>
      </div>
    )
  },
  {
    quarter: 'Q3 2026',
    category: 'Oracle Fusion HCM 26C',
    title: 'Oracle Fusion HCM 26C',
    description: 'Focus on HR security, data management, and Redwood-based administrative modernization with AI-assisted troubleshooting in Oracle HCM 26C.',
    tag: 'HCM',
    Icon: Shield,
    badgeColor: 'bg-amber-50/80 text-[#EA580C] border-amber-200/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    fullContent: (
      <div className="space-y-4 text-[15px] leading-relaxed text-[#475569] mt-6 border-t border-[#ececec] pt-6">
        <p>
          Oracle Fusion Cloud HCM 26C introduces enhancements across <strong>Applications Security, HCM Common, HCM Data Loader, HCM Extracts, and HCM Spreadsheet Data Loader.</strong> The release continues Oracle’s focus on Redwood modernization, AI-assisted administration, and improved data management capabilities, helping organizations streamline HR operations while enhancing user experience and governance.
        </p>
        <p>
          A major highlight of 26C is the expansion of AI-powered administrative assistance. Within Applications Security, Oracle introduces <strong>Resolve HCM Data Security Access using AI Assistance,</strong> enabling administrators to analyze and troubleshoot HCM security access more efficiently. This enhancement supports faster issue resolution while simplifying complex security investigations.
        </p>
        <p>
          Applications Security also receives Redwood-enabled administration enhancements through <strong>Configure Roles and Delegations and Manage User Account Quick Action Pages.</strong> Available through Visual Builder, this capability provides a more modern and streamlined experience for managing security-related tasks and user account administration.
        </p>
        <p>
          In HCM Common, Oracle continues its Redwood experience expansion with <strong>Display Optional Regions in Compact Guided Process Redwood Template Pages.</strong> This enhancement provides organizations with greater flexibility when designing Redwood guided process experiences, enabling administrators to tailor page layouts based on business requirements.
        </p>
        <p>
          Data management capabilities are strengthened through several updates in HCM Data Loader (HDL). Oracle introduces the <strong>Redwood Experience for Remove Person Information,</strong> delivering a modern Redwood interface for person information removal processes. In addition, <strong>Business Object Enhancements</strong> provide updates to HDL business object functionality, further improving data loading and maintenance capabilities.
        </p>
        <p>
          Oracle also extends Redwood modernization to HCM Extracts with the introduction of the <strong>Redwood Experience for HCM Extracts.</strong> This enhancement modernizes the extracts experience and aligns it with Oracle’s broader Redwood user experience strategy, helping administrators work more efficiently within a consistent interface.
        </p>
        <p>
          For organizations leveraging HCM Spreadsheet Data Loader (HSDL), Oracle introduces the <strong>AI Agent: Spreadsheet Data Loader Advisor for HSDL.</strong> This AI-powered advisor is designed to assist users working with spreadsheet-based data loads, helping simplify data loading activities and improve operational efficiency.
        </p>
        <p>
          From an implementation perspective, most 26C enhancements are delivered with no <strong>impact to existing business processes,</strong> allowing organizations to adopt new functionality with minimal disruption. Several features require setup to enable the new capabilities, while the HDL Business Object Enhancements are delivered with a small-scale impact and do not require additional setup.
        </p>
        <p>
          Oracle Fusion HCM 26C demonstrates Oracle’s continued investment in <strong>Redwood experiences, AI-driven administration, and modernized data management tools.</strong> These enhancements help organizations improve usability, strengthen governance, and streamline HR administration through intelligent and user-focused innovation.
        </p>
      </div>
    )
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
  useDocumentTitle('Cloudstand Consulting | Insights & Perspectives')
  
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  const [subscribeError, setSubscribeError] = useState('')
  const [expandedUpdate, setExpandedUpdate] = useState(null)

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
    if (!regForm.firstName.trim()) newErrors.firstName = 'Required'
    
    if (!regForm.email.trim()) {
      newErrors.email = 'Required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regForm.email)) {
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

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (email.trim() !== '') {
      setSubscribing(true)
      setSubscribeError('')
      try {
        const endpoint = API_ENDPOINTS.newsletterSubscribe || '/api/newsletter-subscribe/'
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim() }),
        })

        if (!res.ok) {
          let errorMsg = 'Failed to subscribe. Please try again.'
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

        setSubscribed(true)
        setTimeout(() => {
          setEmail('')
          setSubscribed(false)
        }, 5000)
      } catch (e) {
        console.error(e)
        setSubscribeError(e.message || 'Failed to subscribe. Please try again.')
      } finally {
        setSubscribing(false)
      }
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
        <section 
          className="relative overflow-hidden pt-12 pb-16 min-h-[calc(100dvh-80px)] lg:portrait:min-h-[600px] lg:flex lg:items-center bg-white"
          style={{
            backgroundColor: '#ffffff',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 60,30 0,60' fill='rgba(14,165,233,0.06)'/%3E%3Cpolygon points='0,60 60,90 0,120' fill='rgba(234,88,12,0.06)'/%3E%3Cpolygon points='100,10 40,50 100,90' fill='rgba(0,0,0,0.04)'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="blog-dot-grid-1" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-dot-grid-1)" />
          </svg>
          <div className="section-shell relative z-20 w-full">
            <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-[760px] lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
                <motion.div
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Badge>CloudStand Insights</Badge>
                </motion.div>

                <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9] mx-auto lg:mx-0" />

                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black text-center lg:text-left"
                  initial={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Enterprise Cloud Transformation & <span className="text-[#EA580C]">Expert Webinars</span>
                </motion.h1>

                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#475569] text-center lg:text-left"
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
        className="relative overflow-hidden pt-12 pb-16 min-h-[calc(100dvh-80px)] lg:portrait:min-h-[600px] lg:flex lg:items-center bg-white"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 60,30 0,60' fill='rgba(14,165,233,0.06)'/%3E%3Cpolygon points='0,60 60,90 0,120' fill='rgba(234,88,12,0.06)'/%3E%3Cpolygon points='100,10 40,50 100,90' fill='rgba(0,0,0,0.04)'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="blog-dot-grid-2" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-dot-grid-2)" />
        </svg>

        <div className="section-shell relative z-20 w-full">
          <div className="flex w-full flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Badge>Live Webinar</Badge>
              </motion.div>

              {/* BLUE LINE */}
              <div className="mt-3 h-1 w-16 rounded-full bg-[#0EA5E9] mx-auto lg:mx-0" />

              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-black text-center lg:text-left"
                initial={{ opacity: 0, y: 25 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {webinarData.title}
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-[#475569] text-center lg:text-left"
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
                <motion.div variants={staggerItem} className="flex flex-col gap-4 w-full mt-1">
                   {/* Speaker(s) */}
                   <div className="flex items-center gap-3 w-full rounded-[16px] border border-[rgba(14,165,233,0.16)] bg-white/88 px-5 py-3 shadow-[0_12px_30px_rgba(14,165,233,0.06)] backdrop-blur-md">
                     <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_4px_10px_rgba(14,165,233,0.05)]">
                       <Users className="h-4 w-4 text-[#0EA5E9]" strokeWidth={2} />
                     </span>
                     <div className="flex-1">
                       <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">Speaker(s)</p>
                       <div className="mt-1.5 flex flex-wrap gap-2">
                         {webinarData.speaker && webinarData.speaker.split('.').map((name, i) => (
                           <span 
                             key={i} 
                             className="inline-flex items-center bg-transparent py-0.5 text-[14px] font-semibold text-black"
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
                     className="group inline-flex w-auto self-center items-center justify-center gap-3 rounded-full bg-[#EA580C] px-10 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(234,88,12,0.22)] transition-all duration-300 hover:bg-[#d9480f] min-h-[60px]"
                     type="button"
                   >
                     Register Now
                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1.5">
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
          1. WEBINAR VIDEOS SECTION
          ========================================== */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-slate-950 text-white overflow-hidden border-t border-sky-100/50">
        {/* Glow Overlay Blobs */}
        <div className="pointer-events-none absolute -right-32 top-[-10%] h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-32 bottom-[-10%] h-[550px] w-[550px] rounded-full bg-orange-600/5 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

        <div className="section-shell relative z-10">
          <div className="mb-16 flex flex-col items-center text-center">
            <Badge light>Video Showcase</Badge>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0EA5E9] to-orange-500" />
            <h2 className="mt-6 text-[30px] lg:text-[40px] font-extrabold tracking-tight text-white">
              Expert Webinar Sessions
            </h2>
            <p className="mt-5 max-w-3xl text-[16px] leading-7 text-slate-400">
              Watch enterprise cloud experts discuss Oracle Cloud, integrations, AI transformation, ERP modernization, and OCI best practices.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 hover:border-sky-500/30 hover:shadow-[0_30px_60px_rgba(14,165,233,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 aspect-video w-full overflow-hidden rounded-[20px] bg-black shadow-2xl">
                  <iframe
                    className="h-full w-full border-0"
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
            <div className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
              {showcaseVideos.list.map((videoUrl, index) => (
                <div 
                  key={index} 
                  className="group relative w-full max-w-[500px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-1.33rem)] min-w-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/30 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 aspect-video w-full overflow-hidden rounded-[16px] bg-black shadow-inner">
                    <iframe
                      className="h-full w-full border-0"
                      src={videoUrl}
                      title={`CloudStand Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ==========================================
          2. FEATURED QUARTERLY UPDATES SECTION
          ========================================== */}
      <section 
        className="relative overflow-hidden py-24 sm:py-28 lg:py-32 bg-white"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 60,30 0,60' fill='rgba(14,165,233,0.06)'/%3E%3Cpolygon points='0,60 60,90 0,120' fill='rgba(234,88,12,0.06)'/%3E%3Cpolygon points='100,10 40,50 100,90' fill='rgba(0,0,0,0.04)'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="blog-release-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-release-dot-grid)" />
        </svg>
        <div className="section-shell relative z-10">
          <SectionTitle 
            eyebrow="Quarterly Release Hub" 
            title="Quarterly Product Updates" 
            subtitle="Stay updated with the latest Oracle Cloud innovations, platform enhancements, AI capabilities, and enterprise transformation releases."
            align="center"
            titleClassName="!text-[30px] lg:!text-[40px]"
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
              const isExpanded = expandedUpdate === index

              return (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  className={`group relative flex overflow-hidden rounded-[26px] border border-[#ececec] bg-white p-4 transition-all duration-500 hover:border-[#f97316] ${isExpanded ? 'col-span-full' : 'min-h-[345px] hover:-translate-y-2'}`}
                >
                  <div className="flex w-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className={`inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] ${update.badgeColor}`}>
                        {update.quarter}
                      </span>

                      {isExpanded ? (
                        <button 
                          type="button"
                          onClick={() => setExpandedUpdate(null)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      ) : (
                        <div className="h-2.5 w-12 rounded-full bg-gradient-to-r from-[#f97316] to-[#0EA5E9]" />
                      )}
                    </div>

                    <div className="relative mt-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#0EA5E9] shadow-[0_8px_16px_rgba(14,165,233,0.04)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-4 max-w-sm mx-auto text-center text-[1.25rem] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#0EA5E9]">
                      {update.title}
                    </h3>

                    <p className={`mt-4 mb-4 text-[16px] leading-relaxed  text-[#5f6368] flex-1 whitespace-pre-line ${isExpanded ? '' : 'line-clamp-4'}`}>
                      {update.description}
                    </p>

                    <div className="mt-auto h-px w-full bg-[#ececec]" />

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#0EA5E9]">{update.category}</span>
                      {update.fullContent && !isExpanded && (
                        <button 
                          type="button"
                          onClick={() => setExpandedUpdate(index)}
                          className="flex items-center gap-2 text-sm font-semibold text-[#f97316] transition-all duration-300"
                        >
                          Read Update
                          <ChevronRight className="h-4 w-4 transition-transform duration-300" />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {isExpanded && update.fullContent && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {update.fullContent}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          3. RECENT ACTIVITIES / UPDATES SECTION
          ========================================== */}
      {false && (
      <section className="relative py-24 sm:py-28 lg:py-32 bg-white">
        <div className="section-shell relative z-10">
          <SectionTitle 
            eyebrow="Activity Feed" 
            title="Recent Updates & Activities" 
            subtitle="Latest cloud transformation activities, customer success stories, webinars, events, and product launches."
            align="center"
            titleClassName="!text-[30px] lg:!text-[40px]"
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
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-[#5f6368] flex-1 line-clamp-4 whitespace-pre-line">
                      {act.description}
                    </p>
                  </div>
                </div>

                {/* Footer Read More Link Removed */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      )}

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
              <h2 className="mt-6 text-[30px] lg:text-[40px] font-extrabold leading-tight text-slate-900">
                Stay Ahead with <span className="text-gradient">CloudStand Insights</span>
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-text-muted">
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
                        disabled={subscribing}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D63B25] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(214,59,37,0.2)] transition-all duration-300 hover:bg-[#EA580C] hover:shadow-[0_16px_36px_rgba(234,88,12,0.3)] shrink-0 disabled:opacity-70 disabled:hover:bg-[#D63B25] disabled:hover:shadow-[0_12px_28px_rgba(214,59,37,0.2)]"
                      >
                        <span>{subscribing ? 'Subscribing...' : 'Subscribe Now'}</span>
                        {!subscribing && <ArrowRight className="h-4 w-4" />}
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
                {subscribeError && (
                  <p className="mt-3 text-sm text-red-500 font-medium text-center">
                    {subscribeError}
                  </p>
                )}
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

              <div className="p-5 md:p-7">
                {!regSubmitted ? (
                  <>
                    <div className="mb-4 flex flex-col items-center text-center">
                      <Badge>Webinar Registration</Badge>
                      <h2 className="mt-3 text-[28px] md:text-[32px] font-bold leading-[1.02] tracking-tight text-[#111827] text-center">
                        Claim Your Spot
                      </h2>
                      <p className="mt-1 text-[14px] md:text-[15px] leading-relaxed text-[#475569] text-center max-w-[480px] mx-auto">
                        Stay ahead with insights from our Oracle Center of Excellence specialists.
                      </p>
                    </div>

                    <form onSubmit={handleRegSubmit} className="grid gap-2 md:grid-cols-2">
                      {/* BASIC INFORMATION SECTION HEADER */}
                      <div className="md:col-span-2">
                        <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Basic Information</h3>
                      </div>

                      {/* FIRST NAME */}
                      <div className="md:col-span-1">
                        <input
                          name="firstName"
                          type="text"
                          placeholder="First Name *"
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
                          placeholder="Last Name"
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
                          placeholder="Email Address *"
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
                          placeholder="Contact Number"
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
                          placeholder="LinkedIn URL"
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
                          placeholder="Current Role / Profession"
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
