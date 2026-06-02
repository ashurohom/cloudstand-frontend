import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, BarChart3, Cloud, Handshake, Lightbulb, Sparkles, Target, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { fadeUp, iconPop, pageVariants, slideLeft, slideRight, staggerContainer, staggerItem } from '../animations/variants'





const aboutSectionSpacing = 'py-10 sm:py-12 lg:py-14'





function About() {
  useDocumentTitle('About CloudStand | Oracle Cloud Consulting Team')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="py-6 sm:py-8 lg:py-10 relative flex flex-col items-center bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        
        <div className="section-shell relative z-10 w-full pt-4 lg:pt-6">
          <div className="flex flex-col space-y-16 sm:space-y-24 lg:space-y-32 mb-16 mt-8">
            
            {/* Row 1: 60% Text / 40% Image */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">Our Story</Badge>
                <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#000000] mt-4 mb-6">
                  Transforming Oracle Cloud Investments into Business Value
                </h2>
                <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-4">
                  Cloudstand Vision is a fast-growing, innovation-driven Oracle Cloud consulting firm helping organizations maximize the value of their Oracle Cloud investments. Founded in 2022 in India, we have expanded our global delivery footprint with operations in the United States and India, serving clients across North America, EMEA, and APAC.
                </p>
                <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify">
                  We specialize in Oracle Cloud consulting, implementation, managed services, and enterprise transformation initiatives, enabling organizations to build scalable, future-ready business operations.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] h-[350px] lg:h-[450px]"
              >
                <img src="/Contact_Header.jpeg" alt="Our Story" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Row 2: 40% Image / 60% Text */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] h-[350px] lg:h-[450px]"
              >
                <img src="/slider-33.jpeg" alt="What Makes Us Different" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">What Makes Us Different</Badge>
                <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#000000] mt-4 mb-6">
                  Trusted Oracle Experts for Complex Transformations
                </h2>
                <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-5">
                  We are recognized for our ability to stabilize, recover, and successfully deliver complex Oracle programs that require deep functional, technical, and industry expertise. Organizations rely on us to address critical challenges, accelerate project outcomes, and drive long-term success.
                </p>
                <p className="font-bold text-[#0EA5E9] mb-3">Our expertise spans:</p>
                <ul className="space-y-2 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {[
                    'Oracle HCM Cloud',
                    'Oracle SCM Cloud',
                    'Oracle ERP Cloud',
                    'Oracle CX Cloud',
                    'Oracle Integrations & OIC',
                    'Analytics & Reporting',
                    'Functional Security & Governance',
                    'AI & Agentic AI Enablement'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-sm">
                        <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
                          <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                          <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                        </svg>
                      </span>
                      <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify">
                  With strong capabilities in security, compliance, data governance, and risk management, we help organizations build secure and resilient Oracle Cloud ecosystems.
                </p>
              </motion.div>
            </div>

            {/* Row 3: 60% Text / 40% Image */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">Innovation & Impact</Badge>
                <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#000000] mt-4 mb-6">
                  Driving Results Through Expertise and Innovation
                </h2>
                <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify mb-5">
                  Our dedicated Cloud Science Center of Excellence (CoE) focuses on developing proprietary accelerators, advancing AI-driven capabilities, and strengthening integration frameworks that improve delivery efficiency, predictability, and business insights.
                </p>
                <p className="font-bold text-[#0EA5E9] mb-3">Our Impact:</p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Oracle Time & Labor solutions delivered for 200,000+ employees',
                    'Oracle Payroll implementations supporting 600,000+ employees globally',
                    'Global delivery capabilities across multiple industries and regions',
                    'Flexible consulting, managed services, and staff augmentation models'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-sm">
                        <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
                          <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                          <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                        </svg>
                      </span>
                      <span className="text-[15px] xl:text-base leading-normal text-black/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify">
                  As a growing and ambitious organization, we remain focused on delivering quality, building credibility, and earning long-term client trust through measurable business outcomes and continuous innovation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] h-[350px] lg:h-[450px]"
              >
                <img src="/newyork.jpeg" alt="Innovation & Impact" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>

          {/* Trusted Badge */}
          <div className="flex justify-center pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-[#EA580C] px-6 py-3 text-base font-semibold text-[#EA580C] shadow-sm bg-[#FFFFFF]"
            >
              <Cloud className="h-5 w-5" />
              <span>Trusted Oracle Cloud Experts</span>
            </motion.div>
          </div>
        </div>
      </section>
      <section className={`${aboutSectionSpacing} bg-white`}>
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission Section */}
            <motion.div 
              initial="hidden" 
              variants={fadeUp} 
              viewport={{ once: true, margin: '-80px' }} 
              whileInView="visible"
              className="flex flex-col xl:flex-row rounded-[32px] border border-[rgba(14,165,233,0.22)] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="w-full xl:w-[45%] h-56 xl:h-auto relative overflow-hidden bg-black flex-shrink-0">
                <img src="/Contact_Header.jpeg" alt="Mission" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5 lg:p-6">
                  <span className="text-white/80 text-[12px] font-semibold tracking-wider uppercase">Our Purpose</span>
                </div>
              </div>
              
              <div className="w-full xl:w-[55%] p-6 lg:p-8 flex flex-col justify-start bg-white">
                <div>
                  <Badge>Mission</Badge>
                </div>
                <p className="mt-4 text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify">
                  To deliver Oracle Cloud transformation with integrity, innovation, and unwavering security—leveraging automation and AI to reduce risks, optimize costs, and accelerate business results for our clients.
                </p>
              </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div 
              initial="hidden" 
              variants={fadeUp} 
              viewport={{ once: true, margin: '-80px' }} 
              whileInView="visible"
              className="flex flex-col-reverse xl:flex-row rounded-[32px] border border-[rgba(14,165,233,0.22)] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="w-full xl:w-[55%] p-6 lg:p-8 flex flex-col justify-start bg-white">
                <div>
                  <Badge>Vision</Badge>
                </div>
                <p className="mt-4 text-[15px] xl:text-base leading-7 xl:leading-8 text-black/80 text-justify">
                  To be the most trusted Oracle Cloud transformation partner by sustaining unwavering integrity, fostering world‑class talent, and continuously delivering success through automation, AI‑driven innovation, and outcome‑focused secured solutions.
                </p>
              </div>

              <div className="w-full xl:w-[45%] h-56 xl:h-auto relative overflow-hidden bg-black flex-shrink-0">
                <img src="/texas.jpeg" alt="Vision" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5 lg:p-6">
                  <span className="text-white/80 text-[12px] font-semibold tracking-wider uppercase">Our Future</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default About
