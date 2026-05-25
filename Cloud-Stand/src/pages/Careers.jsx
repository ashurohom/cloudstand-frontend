import { useEffect, useState } from 'react'
import { Briefcase, GraduationCap, Laptop, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HeroTitle from '../components/ui/HeroTitle'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { jobs } from '../data/jobs'
import { iconPop, pageVariants, staggerContainer, staggerItem } from '../animations/variants'

const perks = [
  { icon: Laptop, title: 'Remote Friendly', text: 'Flexible collaboration model for focused delivery and better work rhythms.' },
  { icon: GraduationCap, title: 'Learning Budget', text: 'Continuous upskilling support for certifications, courses, and professional growth.' },
  { icon: Briefcase, title: 'Oracle Training', text: 'Hands-on exposure to Oracle Cloud programs across business functions and industries.' },
  { icon: TrendingUp, title: 'Growth Path', text: 'A clear runway for ownership, client exposure, and advancement as the company scales.' },
]

function Careers() {
  useDocumentTitle('Careers | Join CloudStand Consulting')
  const [selectedRole, setSelectedRole] = useState(jobs[0]?.title ?? '')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="relative overflow-hidden">
{/* FULL SCREEN HERO */}
{/* CONTENT */}
<div className="section-shell relative z-10 flex min-h-[88vh] items-center pt-20 pb-10">

  <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

    {/* LEFT CONTENT */}
    <div>

      {/* BADGE */}
      <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Careers</Badge>
          </motion.div>

      {/* HEADING */}
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        className="mt-7 max-w-4xl text-[3.5rem] font-bold leading-[0.92] tracking-[-0.05em] text-black md:text-[5.6rem]"
      >

        Join Our Team

      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.7,
          delay: 0.25,
        }}
        className="mt-7 max-w-2xl text-[17px] leading-9 text-[#475569]"
      >

        Work on meaningful Oracle Cloud transformation
        programs with a team that values trust,
        ownership and continuous learning.

        <br />
        <br />

        Join a fast-growing consulting environment where
        innovation, collaboration and professional growth
        come together to create impactful enterprise solutions.

      </motion.p>

      {/* BUTTON */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        transition={{
          duration: 0.65,
          delay: 0.4,
        }}
        className="mt-10"
      >

        <button className="rounded-full bg-[#D63B25] px-9 py-4 text-[15px] font-medium text-white shadow-[0_18px_40px_rgba(214,59,37,0.18)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#c5301b]">

          Explore Roles

        </button>

      </motion.div>

    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 40 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      className="relative hidden lg:flex justify-center"
    >

      {/* GLOW */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

      <img
        src="/bgg.png"
        alt="Cloud Illustration"
        className="relative z-10 w-full max-w-[520px] object-contain"
      />

    </motion.div>

  </div>

</div>

</section>
{/* WHY WORK WITH US */}

<section className="relative overflow-hidden bg-[#fcfcfd] py-14">

  {/* SOFT BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.04),transparent_30%)]" />

  {/* ONLY BLUE GLOW */}
  <div className="absolute right-[-80px] top-10 h-[200px] w-[200px] rounded-full bg-blue-50 blur-3xl" />

  <div className="section-shell relative z-10">

    {/* TOP */}
    <div className="max-w-4xl">

      <div className="flex items-center gap-4">

        {/* BLUE + ORANGE LINE */}
        <div className="h-[2px] w-5 bg-[#3b82f6]" />

        <div className="h-[2px] w-5 bg-[#EA580C]" />

        <span className="text-[14px] font-medium uppercase tracking-[0.24em] text-[#64748b]">

          Why Work With Us

        </span>

      </div>

      {/* TITLE */}
      <h2 className="mt-4 max-w-4xl text-[2.1rem] font-bold leading-[1.02] tracking-[-0.02em] text-[#020617] md:text-[3rem]">

        A place to grow

        <br />

        with purpose

      </h2>

      {/* TEXT */}
      <p className="mt-4 max-w-2xl text-[14px] font-normal leading-7 text-[#64748b]">

        We combine meaningful work, continuous learning,
        and a people-first culture to help you achieve
        more in your career.

      </p>

    </div>

    {/* BENEFITS */}
    <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">

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
            className="group relative border-b border-[#edf2f7] pb-6"
          >

            <div className="flex items-start gap-4">

              {/* ICON */}
              <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-2xl bg-[#EA580C]/10 transition-all duration-300 group-hover:bg-[#EA580C]/15">

                <Icon className="h-5 w-5 text-[#EA580C]" />

              </div>

              {/* CONTENT */}
              <div>

                {/* TITLE */}
                <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-[#000000] transition-colors duration-300 group-hover:text-[#EA580C]">

                  {perk.title}

                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 max-w-lg text-[14px] font-normal leading-7 text-[#64748b]">

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

<section className="relative overflow-hidden bg-[#FFFFFF] py-14">

  {/* SOFT BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.05),transparent_28%)]" />

  {/* BLUE GLOW */}
  <div className="absolute left-[-90px] bottom-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

  {/* ORANGE GLOW */}
  <div className="absolute right-[-90px] top-0 h-[220px] w-[220px] rounded-full bg-[#EA580C]/10 blur-3xl" />

  <div className="section-shell relative z-10">

    {/* HEADING */}
    <div className="max-w-4xl">

      <div className="flex items-center gap-4">

        {/* BLUE + ORANGE LINE */}
        <div className="h-[2px] w-6 bg-[#0EA5E9]" />

        <div className="h-[2px] w-6 bg-[#EA580C]" />

        <span className="text-[14px] font-medium uppercase tracking-[0.24em] text-[#64748b]">

          Open Roles

        </span>

      </div>

      {/* TITLE */}
      <h2 className="mt-4 max-w-4xl text-[2.2rem] font-bold leading-[1.02] tracking-[-0.02em] text-[#000000] md:text-[3.1rem]">

        Current opportunities

      </h2>

      {/* TEXT */}
      <p className="mt-4 max-w-2xl text-[15px] font-normal leading-7 text-[#64748b]">

        Join enterprise Oracle Cloud transformation programs
        across ERP, HCM, integration and AI.

      </p>

    </div>

   {/* JOB LIST */}
<div className="mt-10">

  {jobs.map((job, index) => (

    <motion.div
      key={job.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
      }}
      className="group border-b border-[#edf2f7] py-6"
    >

      <div className="flex items-start justify-between gap-8">

        {/* LEFT CONTENT */}
        <div className="max-w-[760px]">

          {/* META */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-normal uppercase tracking-[0.15em] text-[#94a3b8]">

            <span>{job.location}</span>

            <span>•</span>

            <span>{job.type}</span>

            <span>•</span>

            <span>{job.experience}</span>

          </div>

          {/* TITLE */}
          <h3
            className={`mt-3 text-[1.25rem] font-semibold leading-[1.3] tracking-[-0.015em] text-[#000000] transition-colors duration-300 ${
              index % 2 === 0
                ? 'group-hover:text-[#0EA5E9]'
                : 'group-hover:text-[#EA580C]'
            }`}
          >

            {job.title}

          </h3>

          {/* DESCRIPTION UNDER TITLE */}
          <p className="mt-3 max-w-[620px] text-[13px] font-normal leading-7 text-[#64748b]">

            {job.summary}

          </p>

        </div>

        {/* BUTTON */}
        <div className="shrink-0 pt-4">

 <button
  onClick={() => {
    setSelectedRole(job.title)
    setIsModalOpen(true)
  }}
  className="rounded-full bg-[#0EA5E9] px-5 py-2.5 text-[12px] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#0284c7]"
>
  Apply Now
</button>

        </div>

      </div>

    </motion.div>

  ))}

</div>

  </div>

</section>

{isModalOpen && (
  <div className="fixed inset-0 z-[999] overflow-y-auto bg-white">

    <section
      className="relative overflow-hidden py-10 min-h-screen"
      style={{
        backgroundImage: 'url("/app.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute right-8 top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#dbeafe] bg-white text-[22px] text-[#020617] shadow-sm transition-all hover:bg-[#f8fafc]"
      >
        ✕
      </button>

      {/* DECOR */}
      <div className="absolute left-0 top-16 grid grid-cols-4 gap-2.5 opacity-20">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full bg-[#2563eb]"
          />
        ))}
      </div>

      <div className="absolute right-10 top-24 h-2 w-2 rounded-full bg-[#EA580C]" />
      <div className="absolute right-16 top-44 h-2 w-2 rounded-full bg-[#2563eb]" />

      <div className="section-shell relative z-10">

        {/* MAIN */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1fr]">

          {/* LEFT */}
          <div className="max-w-[360px] self-start pt-1">

            {/* LABEL */}
            <div className="flex items-center gap-3">

              <div className="h-[2px] w-9 bg-[#EA580C]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#EA580C]">
                Application Form
              </span>

            </div>

            {/* HEADING */}
            <h2 className="mt-4 text-[2.45rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#020617]">

              Tell us a bit
              <br />

              about yourself

            </h2>

            {/* BLUE LINE */}
            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#2563eb]" />

            {/* TEXT */}
            <p className="mt-4 max-w-sm text-[14px] leading-7 text-[#475569]">

              We’re always looking for talented,
              passionate and driven individuals
              to join our growing team.

            </p>

          </div>

          {/* FORM SIDE */}
          <div>

            {/* FORM CARD */}
            <div className="rounded-[26px] border border-[#fed7aa] bg-white/88 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl">

              {/* TOP */}
              <div className="mb-6 flex items-center gap-3.5">

                {/* ICON */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff6ff]">

                  <svg
                    className="h-6 w-6 text-[#2563eb]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12h6m-6 4h6M8 3h5l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-[#020617]">
                    Application Details
                  </h3>

                  <p className="mt-0.5 text-[13px] text-[#64748b]">
                    Please fill in your details to apply.
                  </p>

                </div>

              </div>

              {/* FORM */}
              <div className="grid gap-4 md:grid-cols-2">

                {/* NAME */}
                <div>

                  <label className="mb-2 block text-[12px] font-medium text-[#020617]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-[50px] w-full rounded-2xl border border-[#dbeafe] bg-white px-4 text-[13px] outline-none transition-all focus:border-[#2563eb]"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="mb-2 block text-[12px] font-medium text-[#020617]">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-[50px] w-full rounded-2xl border border-[#dbeafe] bg-white px-4 text-[13px] outline-none transition-all focus:border-[#2563eb]"
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label className="mb-2 block text-[12px] font-medium text-[#020617]">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-[50px] w-full rounded-2xl border border-[#dbeafe] bg-white px-4 text-[13px] outline-none transition-all focus:border-[#2563eb]"
                  />

                </div>

                {/* POSITION */}
                <div>

                  <label className="mb-2 block text-[12px] font-medium text-[#020617]">
                    Position
                  </label>

                  <div className="flex h-[50px] items-center rounded-2xl border border-[#dbeafe] bg-white px-4 text-[13px] text-[#020617]">

                    {selectedRole}

                  </div>

                </div>

                {/* LINKEDIN */}
                <div className="md:col-span-2">

                  <label className="mb-2 block text-[12px] font-medium text-[#020617]">
                    LinkedIn URL
                  </label>

                  <input
                    type="url"
                    placeholder="https://www.linkedin.com/in/your-profile"
                    className="h-[50px] w-full rounded-2xl border border-[#dbeafe] bg-white px-4 text-[13px] outline-none transition-all focus:border-[#2563eb]"
                  />

                </div>

                {/* COVER NOTE */}
                <div className="md:col-span-2">

                  <label className="mb-2 block text-[12px] font-medium text-[#020617]">
                    Cover Note
                  </label>

                  <textarea
                    placeholder="Tell us a little about yourself, your experience and why you're a good fit."
                    className="min-h-[150px] w-full rounded-[20px] border border-[#dbeafe] bg-white px-4 py-4 text-[13px] leading-7 outline-none transition-all focus:border-[#2563eb]"
                  />

                </div>

                {/* BUTTONS */}
                <div className="md:col-span-2 mt-1 flex flex-wrap items-center gap-3">

                  {/* UPLOAD */}
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-2xl border border-[#dbeafe] bg-[#f8fbff] px-5 py-3 transition-all hover:border-[#2563eb]"
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eff6ff]">

                      <svg
                        className="h-4 w-4 text-[#2563eb]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16V4m0 0-4 4m4-4 4 4M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                    </div>

                    <div className="text-left">

                      <div className="text-[13px] font-medium text-[#020617]">
                        Upload Resume
                      </div>

                      <div className="text-[10px] text-[#64748b]">
                        PDF, DOCX
                      </div>

                    </div>

                  </button>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#EA580C] px-6 py-3 text-[13px] font-medium text-white shadow-[0_10px_25px_rgba(234,88,12,0.20)] transition-all hover:scale-[1.01] hover:bg-[#d9480f]"
                  >

                    Submit Application

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  </div>
)}

    </motion.main>
  )
}

export default Careers
