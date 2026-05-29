import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight, BarChart3, Cloud, Handshake, Lightbulb, Sparkles, Target, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { fadeUp, iconPop, pageVariants, slideLeft, slideRight, staggerContainer, staggerItem } from '../animations/variants'

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



const aboutSectionSpacing = 'py-10 sm:py-12 lg:py-14'

function AboutSectionHeader({ eyebrow, title, subtitle, align = 'left', showLine = true }) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 ${isCenter ? 'mx-auto items-center text-center' : 'items-start text-left'}`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      {showLine ? <div className="h-1 w-20 rounded-full bg-[#0EA5E9]" /> : null}
      <motion.div
        initial="hidden"
        variants={fadeUp}
        viewport={{ once: false, margin: '-60px' }}
        whileInView="visible"
      >
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-4 text-base leading-7 text-black/75 sm:text-lg">{subtitle}</p> : null}
      </motion.div>
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
      <section className={`${aboutSectionSpacing} relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[rgba(14,165,233,0.018)]`}>
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
        <div className="section-shell relative z-10 grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 pt-8 lg:pt-12">
          <div className="flex flex-col justify-center">
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge>Who we are</Badge>
            </motion.div>
            <h1 className="mt-6 max-w-5xl text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] text-black">
              Transforming Oracle Cloud Investments into Business Value
            </h1>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-3xl space-y-4 text-justify text-base leading-7 text-black/75"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>
                Cloudstand Vision is a fast‑growing, innovation‑driven Oracle Cloud consulting firm dedicated to helping global enterprises unlock measurable business value from their cloud investments. Founded in 2022 in India, we have rapidly expanded our global delivery presence with operational offices in the United States and India, supporting clients across North America, EMEA, and APAC.
              </p>
              <p>
                We are recognized as rescue specialists, trusted by organizations to stabilize, recover, and deliver complex, long‑delayed Oracle HCM programs with precision and confidence. Our strength lies in deep expertise across the entire Oracle Cloud Suite, enterprise‑grade integrations, and emerging AI‑driven solutions that accelerate transformation outcomes.
              </p>
              <p>
                Our services span consulting, implementation, and managed services, enabling enterprises to adopt scalable, future‑ready operating models. With strong capabilities in security, data governance, and risk management, we safeguard enterprise ecosystems through robust functional security practices, compliance‑aligned frameworks, and secure Oracle Cloud architectures.
              </p>
              <p>
                To fuel continuous innovation, we operate a dedicated Cloud Science Center of Excellence (CoE) focused on building proprietary accelerators, advancing agentic AI capabilities, and strengthening integration frameworks—enhancing delivery efficiency, predictability, and business insights across engagements.
              </p>
              <p className="text-left font-semibold text-[#0EA5E9]">Our proven track record includes:</p>
              <ul className="list-inside list-disc space-y-2 text-left pl-4 marker:text-[#EA580C]">
                <li>Delivering Oracle Time &amp; Labor solutions for 200,000+ employees</li>
                <li>Implementing Oracle Payroll solutions for 600,000+ employees across global regions</li>
              </ul>
              <p>
                As a growing and ambitious organization, our focus is firmly on delivering quality, building credibility, and earning trust. This is further strengthened through complementary accelerators and service capabilities that enhance delivery efficiency and client outcomes.
              </p>
            </motion.div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#EA580C] px-4 py-2 text-sm font-medium text-[#EA580C] w-fit">
              <Cloud className="h-4 w-4" />
              <span>Trusted Oracle Cloud focused on clarity, speed, and lasting business impact.</span>
            </div>
          </div>

          <motion.div
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="relative grid grid-cols-2 gap-4 h-full"
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-4 pt-10 h-full">
              <div className="overflow-hidden rounded-[24px] border border-[rgba(14,165,233,0.22)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex-1 min-h-[150px]">
                <img src="/texas.jpeg" alt="CloudStand Operations" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[rgba(14,165,233,0.22)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex-1 min-h-[150px]">
                <img src="/Contact_Header.jpeg" alt="CloudStand Global" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-4 pb-10 h-full">
              <div className="overflow-hidden rounded-[24px] border border-[rgba(14,165,233,0.22)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex-1 min-h-[150px]">
                <img src="/Aboutus2.jpeg" alt="CloudStand Expertise" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[rgba(14,165,233,0.22)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex-1 min-h-[150px]">
                <img src="/newyork.jpeg" alt="Global Reach" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`${aboutSectionSpacing} bg-white`}>
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <motion.div initial="hidden" variants={slideLeft} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <div className="h-full rounded-[28px] border border-[rgba(14,165,233,0.22)] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
              <Badge>Mission</Badge>
              <p className="mt-4 text-base leading-8 text-black/75">
                To deliver Oracle Cloud transformation with integrity, innovation, and unwavering security—leveraging automation and AI to reduce risks, optimize costs, and accelerate business results for our clients.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" variants={slideRight} viewport={{ once: true, margin: '-80px' }} whileInView="visible">
            <div className="h-full rounded-[28px] border border-[rgba(14,165,233,0.22)] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
              <Badge>Vision</Badge>
              <p className="mt-4 text-base leading-8 text-black/75">
                To be the most trusted Oracle Cloud transformation partner by sustaining unwavering integrity, fostering world‑class talent, and continuously delivering success through automation, AI‑driven innovation, and outcome‑focused secured solutions.
              </p>
            </div>
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
          <AboutSectionHeader align="center" eyebrow="Leadership" title="A focused team with enterprise delivery instincts" />
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
