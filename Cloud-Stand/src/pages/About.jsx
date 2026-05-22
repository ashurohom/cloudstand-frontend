import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight, BarChart3, Cloud, Handshake, Lightbulb, Sparkles, Target, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { iconPop, pageVariants, slideLeft, slideRight, staggerContainer, staggerItem } from '../animations/variants'

const values = [
  ['Innovation', 'We modernize enterprise operations with practical, future-ready Oracle Cloud thinking.'],
  ['Excellence', 'We hold delivery quality, governance, and user adoption to a high standard.'],
  ['Transparency', 'Clients get clear plans, honest progress reporting, and accountable execution.'],
  ['Partnership', 'We work as an extension of client teams to solve business problems, not just technical tasks.'],
]

const team = [
  {
    initials: 'AS',
    name: 'Aditi Shah',
    title: 'Founder & Oracle Cloud Director',
  },
  {
    initials: 'RM',
    name: 'Rohan Mehta',
    title: 'Delivery Lead, ERP & Finance',
  },
  {
    initials: 'NK',
    name: 'Nisha Kulkarni',
    title: 'Practice Lead, HCM & Payroll',
  },
  {
    initials: 'CS',
    name: 'Client Success Desk',
    title: 'Program Coordination & Support',
  },
]

const storyMilestones = [
  { label: 'Founded', Icon: Users, accent: '#0EA5E9' },
  { label: 'Growth', Icon: BarChart3, accent: '#EA580C' },
  { label: 'Innovation', Icon: Lightbulb, accent: '#0EA5E9' },
  { label: 'Partnership', Icon: Handshake, accent: '#EA580C' },
  { label: 'Impact', Icon: Target, accent: '#0EA5E9' },
]

const aboutSectionSpacing = 'py-10 sm:py-12 lg:py-14'

function AboutSectionHeader({ eyebrow, title, subtitle, align = 'left', showLine = true }) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 ${isCenter ? 'mx-auto items-center text-center' : 'items-start text-left'}`}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-[rgba(14,165,233,0.28)] bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-[#D63B25]">
          {eyebrow}
        </span>
      ) : null}
      {showLine ? <div className="h-1 w-20 rounded-full bg-[#0EA5E9]" /> : null}
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base leading-7 text-black/75 sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

function StoryIllustration() {
  return (
    <div className="relative h-[320px] overflow-hidden sm:h-[380px] lg:h-[420px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '42px 42px',
        }}
      />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[42%] opacity-80">
        <div
          className="absolute inset-x-[8%] bottom-[8%] h-[48%]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(14,165,233,0.28) 0 1.6px, transparent 1.7px)',
            backgroundSize: '10px 10px',
            clipPath: 'polygon(8% 42%, 22% 28%, 35% 34%, 49% 22%, 60% 30%, 78% 18%, 91% 28%, 86% 63%, 67% 88%, 44% 79%, 28% 91%, 12% 72%)',
          }}
        />
        {[12, 42, 71, 88].map((left) => (
          <div
            key={left}
            className="absolute bottom-[10%] h-3.5 w-3.5 rounded-full border-2 border-[#EA580C] shadow-[0_0_0_6px_rgba(234,88,12,0.10)]"
            style={{ backgroundColor: 'rgba(14,165,233,0.12)', left: `${left}%` }}
          />
        ))}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M12 76 C24 50, 35 90, 42 58 S63 28, 71 62 S84 40, 88 26" fill="none" stroke="rgba(234,88,12,0.35)" strokeWidth="0.4" />
          <path d="M12 76 C24 50, 35 90, 42 58 S63 28, 71 62 S84 40, 88 26" fill="none" stroke="rgba(14,165,233,0.22)" strokeWidth="0.7" />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-[7%] top-[10%] flex h-[34%] items-end gap-2 opacity-85">
        {[38, 54, 72, 108, 82, 128, 92].map((height) => (
          <div
            key={height}
            className="w-7 rounded-t-[12px] border border-[rgba(14,165,233,0.18)]"
            style={{ background: 'linear-gradient(180deg, rgba(14,165,233,0.32), rgba(14,165,233,0.08))', height }}
          >
            <div className="mx-auto mt-3 h-[72%] w-[62%] opacity-60" style={{ backgroundImage: 'radial-gradient(circle, rgba(14,165,233,0.9) 0 1px, transparent 1.2px)', backgroundSize: '6px 8px' }} />
          </div>
        ))}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="absolute -right-2 bottom-0 h-28 w-20"
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute bottom-0 left-8 h-20 w-3 rounded-full bg-[rgba(14,165,233,0.20)]" />
          <div className="absolute bottom-10 left-3 h-20 w-14 rounded-t-[999px] rounded-b-[18px] border border-[rgba(14,165,233,0.22)] [clip-path:polygon(50%_0%,100%_65%,70%_65%,70%_100%,30%_100%,30%_65%,0%_65%)]" style={{ background: 'linear-gradient(180deg, rgba(14,165,233,1), rgba(14,165,233,0.18))' }} />
        </motion.div>
      </div>

      <div className="absolute left-[7%] top-[13%]">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          className="relative rounded-[30px] border border-[rgba(14,165,233,0.25)] px-8 py-7 shadow-[0_16px_34px_rgba(14,165,233,0.12)]"
          style={{ background: 'linear-gradient(180deg, rgba(14,165,233,0.08), rgba(14,165,233,0.02))' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute -inset-3 rounded-[38px] border border-[rgba(14,165,233,0.10)]" />
          <Cloud className="h-20 w-20 text-[#0EA5E9]" strokeWidth={1.7} />
        </motion.div>
      </div>

      <svg className="absolute bottom-[16%] left-[10%] h-[48%] w-[78%]" viewBox="0 0 100 36" preserveAspectRatio="none">
        <defs>
          <linearGradient id="story-road-fill" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(14,165,233,0.22)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.36)" />
          </linearGradient>
        </defs>
        <path
          d="M0 30 C10 26, 12 11, 24 14 S39 29, 50 23 S61 8, 73 12 S87 28, 100 4"
          fill="none"
          stroke="rgba(14,165,233,0.12)"
          strokeLinecap="round"
          strokeWidth="9"
        />
        <path
          d="M0 30 C10 26, 12 11, 24 14 S39 29, 50 23 S61 8, 73 12 S87 28, 100 4"
          fill="none"
          stroke="url(#story-road-fill)"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <path
          d="M0 30 C10 26, 12 11, 24 14 S39 29, 50 23 S61 8, 73 12 S87 28, 100 4"
          fill="none"
          stroke="rgba(234,88,12,0.55)"
          strokeDasharray="2 3"
          strokeLinecap="round"
          strokeWidth="0.8"
        />
      </svg>

      <div className="absolute inset-x-[7%] bottom-[16%] top-[34%]">
        {storyMilestones.map(({ label, Icon, accent }, index) => {
          const positions = [
            'left-[0%] top-[60%]',
            'left-[21%] top-[40%]',
            'left-[43%] top-[28%]',
            'left-[64%] top-[17%]',
            'left-[83%] top-[2%]',
          ]

          return (
            <motion.div
              key={label}
              animate={{ y: [0, -5, 0] }}
              className={`absolute ${positions[index]} flex flex-col items-center`}
              transition={{ duration: 3 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="mb-2 text-xs font-semibold text-[#0EA5E9]">{label}</div>
              <div className="rounded-full border border-[rgba(14,165,233,0.18)] p-2 shadow-[0_14px_26px_rgba(14,165,233,0.10)]" style={{ background: 'linear-gradient(180deg, rgba(14,165,233,0.10), rgba(14,165,233,0.03))' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(14,165,233,0.18)] shadow-[inset_0_-8px_18px_rgba(14,165,233,0.10)]" style={{ background: 'linear-gradient(180deg, rgba(14,165,233,0.12), rgba(14,165,233,0.03))' }}>
                  <Icon className="h-6 w-6" color={accent} strokeWidth={1.9} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function About() {
  useDocumentTitle('About CloudStand | Oracle Cloud Consulting Team')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className={`${aboutSectionSpacing} relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[rgba(14,165,233,0.03)]`}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)
            `,
            backgroundPosition: 'center',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center rounded-full border border-[rgba(14,165,233,0.28)] bg-white px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.20em] text-[#D63B25]">
                About CloudStand
              </span>
            </motion.div>
            <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-4xl lg:text-5xl">
              We Are CloudStand
            </h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-black/75"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              A Pune-based Oracle Cloud consulting firm helping global clients modernize operations through sharper delivery, stronger governance, and measurable business outcomes. We partner with organizations across HCM, ERP, Payroll, OIC, BI, and AI initiatives to simplify transformation, improve execution quality, and build long-term operational resilience.
            </motion.p>
            <motion.div
              animate={{ opacity: [0.55, 1, 0.55], x: [0, 8, 0] }}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#EA580C] px-4 py-2 text-sm font-medium text-[#EA580C]"
              initial={{ opacity: 0, y: 12 }}
              transition={{
                opacity: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 0.45, delay: 0.75, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <Cloud className="h-4 w-4" />
              <span>Trusted Oracle Cloud focused on clarity, speed, and lasting business impact.</span>
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="relative"
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-[28px] border border-[rgba(14,165,233,0.22)] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
              <img
                src="/Aboutus.jpeg"
                alt="CloudStand team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`${aboutSectionSpacing} bg-white`}>
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <motion.div initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <div className="h-full rounded-[28px] border border-[rgba(14,165,233,0.22)] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
              <div className="text-base uppercase tracking-normal text-[#EA580C]">Mission</div>
              <h2 className="mt-4 text-3xl font-bold text-black">Build Oracle Cloud programs that create real business momentum.</h2>
              <p className="mt-4 text-base leading-8 text-black/75">
                We focus on implementation quality, adoption, and outcomes that matter to leadership teams, not just technical completion.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" variants={slideRight} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <div className="h-full rounded-[28px] border border-[rgba(14,165,233,0.22)] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
              <div className="text-base uppercase tracking-normal text-[#EA580C]">Vision</div>
              <h2 className="mt-4 text-3xl font-bold text-black">Become the most trusted Oracle Cloud transformation partner for growth-stage enterprises.</h2>
              <p className="mt-4 text-base leading-8 text-black/75">
                CloudStand aims to combine global delivery discipline with the agility and attention clients often miss in larger consulting models.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-shell bg-white">
        <div className="flex items-center gap-2">
          <div className="h-1 w-40 rounded-full bg-[#D63B25]" />
          <div className="h-1 w-1 rounded-full bg-[#D63B25]" />
          <div className="h-1 w-1 rounded-full bg-[#D63B25]" />
        </div>
      </div>

      <section className={`${aboutSectionSpacing} bg-white`}>
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="relative"
            initial="hidden"
            variants={slideLeft}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            <StoryIllustration />
          </motion.div>
          <motion.div
            className="space-y-6 text-base leading-8 text-black/75"
            initial="hidden"
            variants={slideRight}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            <AboutSectionHeader eyebrow="Our Story" title="Built by Oracle practitioners who value execution" showLine={false} />
            <p>
              Founded in 2022, CloudStand was built by Oracle practitioners who had seen both sides of enterprise transformation: ambitious leadership goals and the delivery gaps that often slow them down.
            </p>
            <p>
              We created CloudStand to give clients a more focused Oracle Cloud partner, one that combines strategic clarity with hands-on delivery depth across HCM, ERP, Payroll, OIC, BI, and emerging AI use cases.
            </p>
            <p>
              From Pune, we support global organizations that need a responsive, accountable team capable of guiding transformation from discovery through hypercare with the same rigor at every step.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`${aboutSectionSpacing} bg-white`}>
        <div className="section-shell">
          <AboutSectionHeader align="center" eyebrow="Values" title="How we show up on every engagement" />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-80px' }}
            whileInView="visible"
          >
            {values.map(([title, description]) => (
              <motion.div key={title} variants={staggerItem}>
                <div className="h-full rounded-[28px] border border-[rgba(14,165,233,0.22)] bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
                  <motion.span className="inline-flex rounded-2xl border border-[rgba(14,165,233,0.2)] bg-[rgba(14,165,233,0.08)] p-3 text-[#EA580C]" initial="rest" variants={iconPop} whileHover="hover">
                    <Sparkles className="h-5 w-5" />
                  </motion.span>
                  <h3 className="mt-5 text-2xl font-semibold text-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/75">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={`${aboutSectionSpacing} bg-white`}>
        <div className="section-shell">
          <AboutSectionHeader eyebrow="Leadership" title="A focused team with enterprise delivery instincts" />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <div key={member.name}>
                <div className="mx-auto flex h-[355px] w-full max-w-[270px] flex-col overflow-hidden rounded-[30px] border border-[rgba(14,165,233,0.22)] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
                  <div className="relative h-28 overflow-hidden bg-[linear-gradient(135deg,rgba(14,165,233,0.14),rgba(234,88,12,0.14))]">
                    <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(14,165,233,0.18)]" />
                  </div>

                  <div className="relative flex flex-1 flex-col px-5 pb-6 pt-16 text-center">
                    <div className="absolute left-1/2 top-0 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white bg-[#EA580C] font-syne text-3xl font-bold text-white shadow-[0_10px_22px_rgba(0,0,0,0.10)]">
                      {member.initials}
                    </div>

                    <div className="flex h-[170px] flex-col justify-center rounded-[22px] border border-[rgba(14,165,233,0.14)] bg-[rgba(14,165,233,0.03)] px-4 py-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#0EA5E9]">Team ID</p>
                      <h3 className="mt-3 min-h-[64px] text-2xl font-semibold leading-tight text-black">{member.name}</h3>
                      <p className="mt-3 min-h-[48px] text-sm leading-6 text-black/75">{member.title}</p>
                    </div>

                    <a className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-medium text-[#D63B25]" href="#">
                      LinkedIn
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${aboutSectionSpacing} bg-white`}>
        <div className="section-shell">
          <motion.div initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <div className="relative flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[rgba(14,165,233,0.22)] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] lg:flex-row lg:items-center">
              <div
                className="pointer-events-none absolute inset-0 rounded-[28px]"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 12% 20%, rgba(14,165,233,0.09) 0, transparent 20%),
                    radial-gradient(circle at 88% 78%, rgba(234,88,12,0.08) 0, transparent 18%),
                    linear-gradient(135deg, transparent 0 42%, rgba(14,165,233,0.05) 42% 43%, transparent 43% 100%),
                    linear-gradient(135deg, transparent 0 58%, rgba(234,88,12,0.04) 58% 59%, transparent 59% 100%),
                    linear-gradient(rgba(14,165,233,0.035) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(14,165,233,0.035) 1px, transparent 1px)
                  `,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, center, center',
                  backgroundSize: 'auto, auto, auto, auto, 56px 56px, 56px 56px',
                }}
              />
              <div>
                <h2 className="text-3xl font-bold text-black">Planning your Oracle Cloud roadmap?</h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-black/75">
                  Let&apos;s map out the right implementation, support, or optimization path for your business.
                </p>
              </div>
              <Link
                className="relative inline-flex items-center justify-center gap-2 rounded-full border border-[#EA580C] bg-[#EA580C] px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_30px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D63B25] lg:text-base"
                to="/contact"
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default About
