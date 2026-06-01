import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight, BarChart3, Cloud, Handshake, Lightbulb, Sparkles, Target, Users } from 'lucide-react'
import { motion } from 'framer-motion'
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
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] lg:min-h-[600px] items-center overflow-hidden bg-[url('/About_Hero.png')] bg-cover bg-center bg-no-repeat" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="section-shell relative z-10 w-full flex flex-col items-start justify-center text-left pt-16 pb-16 -mt-24 lg:-mt-36">
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Who we are</Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#000000]"
          >
            Transforming Oracle Cloud Investments into Business Value
          </motion.h1>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 relative flex flex-col items-center overflow-hidden bg-[#ffffff]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.04)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.04)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        <div className="section-shell relative z-10 w-full pt-4 lg:pt-6">
          {/* Row 1: Left Image (40%), Right Text (60%) */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-12 lg:mb-16">
            <motion.div 
              className="w-full lg:w-[40%]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center py-2 w-full">
                <svg viewBox="0 0 100 100" className="w-32 h-32 lg:w-48 lg:h-48 fill-[#EA580C] drop-shadow-lg">
                  <polygon points="0,0 100,50 0,100" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-[60%] flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed text-[#000000]/80 text-justify">
                Cloudstand Vision is a fast‑growing, innovation‑driven Oracle Cloud consulting firm dedicated to helping global enterprises unlock measurable business value from their cloud investments. Founded in 2022 in India, we have rapidly expanded our global delivery presence. We are recognized as rescue specialists, trusted by organizations to stabilize, recover, and deliver complex, long‑delayed Oracle HCM programs with precision and confidence.
              </p>
            </motion.div>
          </div>

          {/* Row 2: Left Text (60%), Right Image (40%) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-6 mb-4">
            <motion.div 
              className="w-full lg:w-[60%] flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed text-[#000000]/80 text-justify mb-2">
                Our strength lies in deep expertise across the entire Oracle Cloud Suite, enterprise‑grade integrations, and emerging AI‑driven solutions. To fuel continuous innovation, we operate a dedicated Cloud Science Center of Excellence (CoE) focused on building proprietary accelerators, advancing agentic AI capabilities, and strengthening integration frameworks.
              </p>
              <div>
                <p className="font-bold text-[#0EA5E9] mb-1">Our proven track record includes:</p>
                <ul className="list-outside list-disc space-y-1 pl-5 marker:text-[#EA580C] text-[#000000]/80 font-medium">
                  <li>Delivering Oracle Time &amp; Labor solutions for 200,000+ employees</li>
                  <li>Implementing Oracle Payroll solutions for 600,000+ employees across global regions</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-[40%]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center py-2 w-full">
                <svg viewBox="0 0 100 100" className="w-32 h-32 lg:w-48 lg:h-48 fill-[#EA580C] drop-shadow-lg">
                  <polygon points="100,0 0,50 100,100" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Bottom Centered Badge */}
          <div className="flex justify-center pb-4">
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
                  <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">Our Purpose</span>
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
                  <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">Our Future</span>
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
