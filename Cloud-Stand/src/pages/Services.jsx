import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import HealthCheckModal from '../components/ui/HealthCheckModal'
import { services } from '../data/services'
import { pageVariants } from '../animations/variants'

function Services() {
  useDocumentTitle('Cloudstand Consulting | Services')
  const location = useLocation()
  const [isHealthCheckModalOpen, setIsHealthCheckModalOpen] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    let animationFrameId = null;
    let timeoutId = null;
    let currentScrollBehavior = document.documentElement.style.scrollBehavior;

    if (location.hash) {
      const id = location.hash.replace('#', '')
      const delay = 100 // Minimal delay before beginning the scroll
      
      timeoutId = setTimeout(() => {
        const element = document.getElementById(`section-${id}`)
        if (element) {
          // Temporarily disable CSS smooth scroll so it doesn't fight with our JS animation
          currentScrollBehavior = document.documentElement.style.scrollBehavior
          document.documentElement.style.scrollBehavior = 'auto'

          // Custom smooth scroll to reduce scrolling speed
          const targetPosition = element.getBoundingClientRect().top + window.scrollY - 80 // 80px offset for navbar
          const startPosition = window.scrollY
          const distance = targetPosition - startPosition
          const duration = 2500 // Increased to 2.5 seconds for a cinematic fly-through effect
          let startTime = null

          // Ease-in-out cubic function for smooth acceleration/deceleration
          const ease = (t, b, c, d) => {
            t /= d / 2
            if (t < 1) return (c / 2) * t * t * t + b
            t -= 2
            return (c / 2) * (t * t * t + 2) + b
          }

          const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const run = ease(timeElapsed, startPosition, distance, duration)
            window.scrollTo(0, run)
            if (timeElapsed < duration) {
              animationFrameId = requestAnimationFrame(animation)
            } else {
              window.scrollTo(0, targetPosition)
              // Restore CSS scroll behavior
              document.documentElement.style.scrollBehavior = currentScrollBehavior
            }
          }

          animationFrameId = requestAnimationFrame(animation)
        }
      }, delay) // Delay to allow page transition before scrolling
    }
    
    if (isFirstRender.current) {
      isFirstRender.current = false
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      document.documentElement.style.scrollBehavior = currentScrollBehavior;
    }
  }, [location])

  return (
    <motion.main 
      animate="animate" 
      className="pt-20" 
      exit="exit" 
      initial="initial" 
      variants={pageVariants}
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        <div className="section-shell relative z-20 w-full pt-10 pb-16 lg:pt-12 lg:pb-24">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12 relative z-10">
            
            {/* LEFT CONTENT */}
            <div className="max-w-[760px] lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div animate={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, scale: 0.9, y: 10 }} transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <Badge className="mb-4">OUR SERVICES</Badge>
              </motion.div>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9]" />

              <motion.h1 animate={{ opacity: 1, y: 0 }} className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black" initial={{ opacity: 0, y: 25 }} transition={{ duration: 0.7, delay: 0.1 }}>
                Enterprise Cloud Solutions
                <br />
                Tailored For You
              </motion.h1>

              <motion.p animate={{ opacity: 1, y: 0 }} className="mt-8 max-w-[600px] text-[16px] leading-8 text-[#475569] lg:text-left" initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.7, delay: 0.2 }}>
                Discover how our comprehensive suite of Oracle Cloud services can accelerate your digital transformation, optimize operations, and drive measurable business value.
              </motion.p>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 lg:mt-0 flex w-full lg:w-[45%] justify-center"
            >
              <img 
                src="/services-img/services_hero_white.png" 
                alt="Cloud Services" 
                className="w-full max-w-[500px] object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <div className="flex flex-col bg-white">
        {services.map((service, index) => {
          const isAlternate = index % 2 === 0;
          return (
            <section
              key={service.slug}
              id={`section-${service.slug}`}
              className={`relative overflow-hidden py-14 lg:py-20 scroll-mt-20 ${isAlternate ? '' : 'border-b border-slate-100'}`}
              style={isAlternate ? {
                backgroundColor: '#ffffff',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 60,30 0,60' fill='rgba(14,165,233,0.06)'/%3E%3Cpolygon points='0,60 60,90 0,120' fill='rgba(234,88,12,0.06)'/%3E%3Cpolygon points='100,10 40,50 100,90' fill='rgba(0,0,0,0.04)'/%3E%3C/svg%3E")`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
              } : { backgroundColor: '#ffffff' }}
            >
              {isAlternate && (
                <>
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id={`service-dot-grid-${index}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#service-dot-grid-${index})`} />
                  </svg>
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }}
                  />
                  <div
                    className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)' }}
                  />
                </>
              )}

              <div className="section-shell relative z-10">
                <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-40px' }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-4"
                  >
                    <Badge className="border-sky-200 bg-white text-[#EA580C]">
                      {service.shortTitle || 'SERVICE'}
                    </Badge>
                  </motion.div>

                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-40px' }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[32px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#000000] mt-4 mb-6 text-center"
                  >
                    {service.title}
                  </motion.h2>

                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-40px' }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[16px] leading-7 xl:leading-8 text-black/80 mb-5 px-4 md:px-8"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div
            className="relative flex flex-col justify-center overflow-hidden rounded-[40px] border border-sky-200 bg-white p-6 sm:p-10 lg:p-12 min-h-[420px]"
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 50,50 0,100 20,100 70,50 20,0' fill='rgba(14,165,233,0.05)'/%3E%3Cpolygon points='30,0 80,50 30,100 50,100 100,50 50,0' fill='rgba(234,88,12,0.04)'/%3E%3C/svg%3E")`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src="/Video/HPV3.mp4"
            />
            <motion.div
              className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_500px]"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <h2 className="mt-6 max-w-3xl text-[30px] lg:text-[40px] font-bold text-white">
                  Unlock Oracle Cloud Value with Best Practices and Agentic AI
                </h2>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <button 
                      onClick={() => setIsHealthCheckModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500 px-8 py-4 text-[16px] font-semibold text-white transition-all hover:border-orange-400 hover:bg-orange-600 shadow-md"
                    >
                      <span className="sm:hidden">System Health Check</span>
                      <span className="hidden sm:inline">Schedule Free System Health Check Analysis</span>
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </motion.div>
                </div>
              </div>

              <Card className="p-6 !bg-white/10 backdrop-blur-md !border-white/20 text-center lg:text-left">
                <div className="text-[12px] font-extrabold uppercase tracking-normal text-white drop-shadow-lg">Value You Receive</div>
                <ul className="mt-4 space-y-3 text-white font-medium drop-shadow-md lg:whitespace-nowrap flex flex-col items-center lg:items-start">
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">Diagnostic Assessment Reports</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">Fit-Gap Analysis & Recommendation Roadmap</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">240-Hour Complimentary Engagement</span>
                  </li>
                  <li className="group flex items-start gap-3">
                    <span className="mt-0.5 flex shrink-0 items-center justify-center text-[#EA580C] drop-shadow-md">
                      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
                        <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                        <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                      </svg>
                    </span>
                    <span className="leading-6">No-Obligation, Zero-Pressure Approach</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <HealthCheckModal isOpen={isHealthCheckModalOpen} onClose={() => setIsHealthCheckModalOpen(false)} />
    </motion.main>
  )
}

export default Services
