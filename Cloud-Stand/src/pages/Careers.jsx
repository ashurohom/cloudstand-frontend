import { useEffect, useState } from 'react'
import { Briefcase, GraduationCap, Laptop, TrendingUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroTitle from '../components/ui/HeroTitle'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { jobs as fallbackJobs } from '../data/jobs'
import { API_ENDPOINTS } from '../config/api'
import { iconPop, pageVariants, staggerContainer, staggerItem } from '../animations/variants'

const perks = [
  { icon: Laptop, title: 'Remote Friendly', text: 'Flexible collaboration model for focused delivery and better work rhythms.' },
  { icon: GraduationCap, title: 'Learning Budget', text: 'Continuous upskilling support for certifications, courses, and professional growth.' },
  { icon: Briefcase, title: 'Oracle Training', text: 'Hands-on exposure to Oracle Cloud programs across business functions and industries.' },
  { icon: TrendingUp, title: 'Growth Path', text: 'A clear runway for ownership, client exposure, and advancement as the company scales.' },
]

const formatPostedDate = (dateString) => {
  if (!dateString) return null;
  if (dateString.includes(',')) {
    const parts = dateString.split(',');
    if (parts.length >= 2) {
      return `${parts[0]}, ${parts[1]}`.trim();
    }
  }
  const parsed = new Date(dateString);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  return dateString;
}

function Careers() {
  useDocumentTitle('Cloudstand Consulting | Careers')
  const [selectedRole, setSelectedRole] = useState(fallbackJobs[0]?.title ?? '')
  const [expandedRoles, setExpandedRoles] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleRole = (id) => {
    setExpandedRoles(prev => ({ ...prev, [id]: !prev[id] }))
  }
  const [resumeFile, setResumeFile] = useState(null)
  
  const [openRoles, setOpenRoles] = useState([])
  const [rolesLoading, setRolesLoading] = useState(true)
  
  const [appForm, setAppForm] = useState({ name: '', email: '', linkedin: '', phone: '', experience: '', coverNote: '' })
  const [appErrors, setAppErrors] = useState({})
  const [appSubmitted, setAppSubmitted] = useState(false)
  const [appSubmitting, setAppSubmitting] = useState(false)
  const [appSubmitError, setAppSubmitError] = useState('')

  const closeAppModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setAppForm({ name: '', email: '', linkedin: '', phone: '', experience: '', coverNote: '' })
      setResumeFile(null)
      setAppErrors({})
      setAppSubmitted(false)
      setAppSubmitting(false)
      setAppSubmitError('')
    }, 300)
  }

  const handleAppSubmit = async () => {
    const newErrors = {}
    if (!appForm.name.trim()) newErrors.name = 'Required'
    if (!appForm.email.trim()) newErrors.email = 'Required'
    if (!appForm.linkedin.trim()) newErrors.linkedin = 'Required'
    if (!appForm.experience) newErrors.experience = 'Required'
    if (!resumeFile) newErrors.resume = 'Required'

    if (Object.keys(newErrors).length > 0) {
      setAppErrors(newErrors)
      return
    }

    setAppErrors({})
    setAppSubmitting(true)
    setAppSubmitError('')

    try {
      const formData = new FormData()
      formData.append('role_title', selectedRole)
      formData.append('name', appForm.name)
      formData.append('email', appForm.email)
      if (appForm.phone) formData.append('phone', appForm.phone)
      formData.append('experience', appForm.experience)
      formData.append('linkedin_url', appForm.linkedin)
      if (appForm.coverNote) formData.append('cover_note', appForm.coverNote)
      formData.append('resume', resumeFile)

      const res = await fetch(API_ENDPOINTS.applyRole, {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Failed to submit application')

      setAppSubmitted(true)

      setTimeout(() => {
        closeAppModal()
      }, 3000)
    } catch (e) {
      console.error(e)
      setAppSubmitError('Failed to submit application. Please try again.')
    } finally {
      setAppSubmitting(false)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.openRoles)
        if (res.ok) {
          const data = await res.json()
          setOpenRoles(data)
          if (data.length > 0) {
            setSelectedRole(data[0].title)
          }
        } else {
          setOpenRoles([])
          setSelectedRole('')
        }
      } catch (e) {
        setOpenRoles([])
        setSelectedRole('')
      } finally {
        setRolesLoading(false)
      }
    }
    fetchRoles()
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section
        className="relative overflow-hidden pt-12 pb-16 min-h-[calc(100dvh-80px)] lg:portrait:min-h-[600px] lg:flex lg:items-center bg-white"
      >
        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />

        <div className="section-shell relative z-20 w-full">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-center text-center relative z-10 mx-auto lg:mx-0">
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Badge>Careers</Badge>
              </motion.div>

              {/* BLUE LINE */}
              <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9]" />

              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black"
                initial={{ opacity: 0, y: 25 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Join Our Team
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-[600px] text-[16px] leading-relaxed text-[#475569]"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Join CloudStand to be part of a fast-paced environment where real opportunities meet real ownership. Work on impactful Oracle transformation projects with global exposure and continuous learning.
                <br />
                <br />
                If you are ready to grow, innovate, and take ownership, this is where ambition turns into opportunity.
              </motion.p>

              {/* BUTTON */}
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex flex-wrap justify-center items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <button
                  onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 rounded-full bg-[#EA580C] px-9 py-4 text-[16px] font-semibold text-white shadow-[0_18px_40px_rgba(234,88,12,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9480f]"
                  type="button"
                >
                  Explore Roles
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
              </motion.div>
            </div>

            {/* RIGHT VISUAL - IMAGE */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex lg:w-[45%] lg:justify-end lg:items-center relative"
            >
              <div className="relative z-10 w-[90%] max-w-[600px] aspect-[4/3] flex items-center justify-center">
                <img 
                  src="/Career/career_hero_white.png" 
                  alt="Careers Hero" 
                  className="w-full h-full object-contain scale-[1.1] lg:scale-[1.25] mix-blend-darken"
                  style={{ filter: 'brightness(1.05) contrast(1.15)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* WHY WORK WITH US */}

<section 
  className="relative overflow-hidden bg-white py-10"
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
      <pattern id="career-why-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#career-why-dot-grid)" />
  </svg>

  {/* SOFT BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.04),transparent_30%)]" />

  {/* ONLY BLUE GLOW */}
  <div className="absolute right-[-80px] top-10 h-[200px] w-[200px] rounded-full bg-blue-50 blur-3xl" />

  <div className="section-shell relative z-10">

    {/* TOP */}
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

      <Badge>Why Work With Us</Badge>

      {/* TITLE */}
      <h2 className="mt-4 max-w-4xl text-[36px] font-bold leading-[1.02] tracking-[-0.02em] text-[#020617]">
        A place to grow with purpose
      </h2>

      {/* TEXT */}
      <p className="mt-3 max-w-2xl text-[15px] font-normal leading-7 text-[#64748b]">
        We combine meaningful work, continuous learning,
        and a people-first culture to help you achieve
        more in your career.
      </p>

    </div>

    {/* BENEFITS */}
    <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">

      {perks.map((perk, index) => {

        const Icon = perk.icon

        return (

          <motion.div
            key={perk.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
            className="group relative pb-4"
          >

            <div className="flex items-start gap-4">

              {/* ICON */}
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#EA580C]/10 transition-all duration-300 group-hover:bg-[#EA580C]/15">

                <Icon className="h-5 w-5 text-[#EA580C]" />

              </div>

              {/* CONTENT */}
              <div>

                {/* TITLE */}
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#000000] transition-colors duration-300 group-hover:text-[#EA580C]">

                  {perk.title}

                </h3>

                {/* DESCRIPTION */}
                <p className="mt-1.5 max-w-lg text-[14px] font-normal leading-relaxed text-[#64748b]">

                  {perk.text}

                </p>

              </div>

            </div>

          </motion.div>

        )

      })}

    </div>

  </div>

</section>
{/* OPEN ROLES */}

<section 
  id="open-roles" 
  className="relative overflow-hidden bg-[#FFFFFF] py-14"
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
      <pattern id="career-roles-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#career-roles-dot-grid)" />
  </svg>

  {/* SOFT BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.05),transparent_28%)]" />

  {/* BLUE GLOW */}
  <div className="absolute left-[-90px] bottom-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

  {/* ORANGE GLOW */}
  <div className="absolute right-[-90px] top-0 h-[220px] w-[220px] rounded-full bg-[#EA580C]/10 blur-3xl" />

  <div className="section-shell relative z-10">

    {/* HEADING */}
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

      <Badge>Open Roles</Badge>

      {/* TITLE */}
      <h2 className="mt-4 max-w-4xl text-[36px] font-bold leading-[1.02] tracking-[-0.02em] text-[#000000]">

        Current Opportunities

      </h2>

      {/* TEXT */}
      <p className="mt-3 max-w-2xl text-[15px] font-normal leading-7 text-[#64748b]">

        Join enterprise Oracle Cloud transformation programs
        across ERP, HCM, integration and AI.

      </p>

    </div>

   {/* JOB LIST */}
<div className="mt-12 grid gap-6">

  {rolesLoading ? (
    <div className="text-center py-10 text-slate-500">Loading open roles...</div>
  ) : openRoles.length === 0 ? (
    <div className="text-center py-10 text-slate-500">No open roles currently available. Please check back later.</div>
  ) : (
    openRoles.map((job, index) => (
      <motion.div
        key={job.id || index}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.35,
          delay: index * 0.05,
        }}
        className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-[24px] border border-slate-100 bg-white p-6 md:p-8 shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EA580C]/30 hover:shadow-[0_20px_40px_rgba(14,165,233,0.08)]"
      >
        {/* LEFT CONTENT */}
        <div className="max-w-[700px]">
          {/* TITLE */}
          <h3 className="text-xl md:text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#EA580C]">
            {job.title}
          </h3>

          {/* META PILLS */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors group-hover:bg-[#0EA5E9]/10 group-hover:text-[#0EA5E9]">
              {job.location}
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors group-hover:bg-[#0EA5E9]/10 group-hover:text-[#0EA5E9]">
              {job.type}
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors group-hover:bg-[#0EA5E9]/10 group-hover:text-[#0EA5E9]">
              {job.experience}
            </span>
            {job.created_at && (
              <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors group-hover:bg-[#0EA5E9]/10 group-hover:text-[#0EA5E9]">
                Posted: {formatPostedDate(job.created_at)}
              </span>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[14px] leading-relaxed text-[#64748b]">
            {job.summary}
          </p>

          {/* EXTRA DETAILS FROM BACKEND */}
          <AnimatePresence>
            {expandedRoles[job.id || index] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-4 text-[14px] text-[#475569]">
                  {job.key_responsibilities && (
                    <div>
                      <strong className="text-slate-800 block mb-1">Key Responsibilities:</strong>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.key_responsibilities.split('.').map((item, i) => (
                          item.trim() && <li key={i}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {job.requirements && (
                    <div>
                      <strong className="text-slate-800 block mb-1">Requirements:</strong>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements.split('.').map((item, i) => (
                          item.trim() && <li key={i}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {job.preferred && (
                    <div>
                      <strong className="text-slate-800 block mb-1">Preferred:</strong>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.preferred.split('.').map((item, i) => (
                          item.trim() && <li key={i}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {job.additional_advantage && (
                    <div>
                      <strong className="text-slate-800 block mb-1">Additional Advantage:</strong>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.additional_advantage.split('.').map((item, i) => (
                          item.trim() && <li key={i}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {job.benefits && (
                    <div>
                      <strong className="text-slate-800 block mb-1">Benefits:</strong>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.benefits.split('.').map((item, i) => (
                          item.trim() && <li key={i}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BUTTONS */}
        <div className="shrink-0 md:pl-6 pt-4 md:pt-0 flex flex-col items-center md:items-end justify-center w-full md:w-auto gap-4">
          <button
            onClick={() => {
              setSelectedRole(job.title)
              setIsModalOpen(true)
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0EA5E9] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(14,165,233,0.2)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#0284c7] hover:shadow-[0_12px_25px_rgba(14,165,233,0.3)]"
          >
            Apply Now
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button 
            onClick={() => toggleRole(job.id || index)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors"
            title={expandedRoles[job.id || index] ? "Show less details" : "Show full details"}
          >
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedRoles[job.id || index] ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </motion.div>
    ))
  )}

</div>

  </div>

</section>

{isModalOpen && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/60 backdrop-blur-[2px] p-4 sm:p-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="relative w-full max-w-2xl max-h-[95dvh] lg:portrait:max-h-[800px] overflow-y-auto rounded-[24px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-slate-200 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={closeAppModal}
        className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
      >
        ✕
      </button>

      <div className="p-5 md:p-6">
        {appSubmitted ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">Application Submitted!</h3>
            <p className="text-[#475569]">Thank you for applying. We will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <div className="mb-3">
              <h2 className="text-[22px] font-bold text-[#111827]">Apply for {selectedRole}</h2>
              <p className="mt-1 text-[13px] text-[#475569]">Please fill in your details to submit your application.</p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {/* FULL NAME */}
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#111827]">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={appForm.name}
                  onChange={(e) => {
                    setAppForm(prev => ({...prev, name: e.target.value}))
                    setAppErrors(prev => ({...prev, name: ''}))
                  }}
                  className={`h-[40px] w-full rounded-[10px] border bg-slate-50 px-3 text-[13px] outline-none transition-all focus:bg-white ${appErrors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0EA5E9]'}`} 
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#111827]">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  value={appForm.email}
                  onChange={(e) => {
                    setAppForm(prev => ({...prev, email: e.target.value}))
                    setAppErrors(prev => ({...prev, email: ''}))
                  }}
                  className={`h-[40px] w-full rounded-[10px] border bg-slate-50 px-3 text-[13px] outline-none transition-all focus:bg-white ${appErrors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0EA5E9]'}`} 
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-1 block text-[12px] font-medium text-[#111827]">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  value={appForm.phone}
                  onChange={(e) => setAppForm(prev => ({...prev, phone: e.target.value}))}
                  className="h-[40px] w-full rounded-[10px] border border-slate-200 bg-slate-50 px-3 text-[13px] outline-none transition-all focus:border-[#0EA5E9] focus:bg-white" 
                />
              </div>

              {/* EXPERIENCE */}
              <div className="relative">
                <label className="mb-1 block text-[12px] font-medium text-[#111827]">Years of Experience *</label>
                <select 
                  value={appForm.experience}
                  onChange={(e) => {
                    setAppForm(prev => ({...prev, experience: e.target.value}))
                    setAppErrors(prev => ({...prev, experience: ''}))
                  }}
                  className={`h-[40px] w-full rounded-[10px] border bg-slate-50 px-3 text-[13px] text-slate-700 outline-none transition-all focus:bg-white appearance-none cursor-pointer ${appErrors.experience ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0EA5E9]'}`}
                >
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8+">8+ years</option>
                </select>
                <div className="pointer-events-none absolute bottom-3 right-3 text-slate-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="md:col-span-2">
                <label className="mb-1 block text-[12px] font-medium text-[#111827]">LinkedIn Profile URL *</label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/in/username" 
                  value={appForm.linkedin}
                  onChange={(e) => {
                    setAppForm(prev => ({...prev, linkedin: e.target.value}))
                    setAppErrors(prev => ({...prev, linkedin: ''}))
                  }}
                  className={`h-[40px] w-full rounded-[10px] border bg-slate-50 px-3 text-[13px] outline-none transition-all focus:bg-white ${appErrors.linkedin ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0EA5E9]'}`} 
                />
              </div>

              {/* COVER NOTE */}
              <div className="md:col-span-2">
                <label className="mb-1 block text-[12px] font-medium text-[#111827]">Cover Note</label>
                <textarea 
                  placeholder="Briefly tell us why you are a great fit..." 
                  value={appForm.coverNote}
                  onChange={(e) => setAppForm(prev => ({...prev, coverNote: e.target.value}))}
                  className="min-h-[60px] w-full resize-none rounded-[10px] border border-slate-200 bg-slate-50 px-3 py-2 text-[13px] leading-relaxed outline-none transition-all focus:border-[#0EA5E9] focus:bg-white" 
                />
              </div>

              {/* ERROR ALERT */}
              {appSubmitError && (
                <div className="md:col-span-2 text-sm text-red-500 text-center font-medium">
                  {appSubmitError}
                </div>
              )}

              {/* SUBMIT SECTION */}
              <div className="md:col-span-2 mt-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                <label className={`group flex cursor-pointer items-center gap-2 rounded-full border bg-slate-50 px-5 py-2 text-[13px] font-semibold transition-colors hover:bg-white ${appErrors.resume ? 'border-red-500 text-red-600 hover:border-red-600 hover:text-red-600' : 'border-slate-200 text-slate-700 hover:border-[#0EA5E9] hover:text-[#0EA5E9]'}`}>
                  <svg className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 shrink-0 ${appErrors.resume ? 'text-red-500' : 'text-[#0EA5E9]'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                  <span className="truncate max-w-[150px]">{resumeFile ? resumeFile.name : 'Attach Resume'}</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setResumeFile(e.target.files[0])
                        setAppErrors(prev => ({...prev, resume: ''}))
                      }
                    }}
                  />
                </label>
                <button 
                  onClick={handleAppSubmit}
                  type="button" 
                  disabled={appSubmitting}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea580c] px-7 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(249,115,22,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(249,115,22,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {appSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  </div>
)}

    </motion.main>
  )
}

export default Careers
