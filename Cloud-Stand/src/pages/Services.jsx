import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Badge from '../components/ui/Badge'
import { services } from '../data/services'
import { pageVariants } from '../animations/variants'

function Services() {
  useDocumentTitle('Cloudstand Consulting | Services')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          // Adjust scroll position to account for navbar height (approx 80px)
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
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
      <section className="relative overflow-hidden pt-12 pb-16 min-h-[50dvh] lg:portrait:min-h-[400px] lg:flex lg:items-center bg-white">
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
        <div className="section-shell relative z-20 w-full">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-start text-left relative z-10">
              <motion.div animate={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, scale: 0.9, y: 10 }} transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">OUR SERVICES</Badge>
              </motion.div>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9]" />

              <motion.h1 animate={{ opacity: 1, y: 0 }} className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black text-left" initial={{ opacity: 0, y: 25 }} transition={{ duration: 0.7, delay: 0.1 }}>
                Enterprise Cloud Solutions
                <br />
                Tailored For You
              </motion.h1>

              <motion.p animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#475569] text-left" initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.7, delay: 0.2 }}>
                Discover how our comprehensive suite of Oracle Cloud services can accelerate your digital transformation, optimize operations, and drive measurable business value.
              </motion.p>
            </div>

            <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 40 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="mt-10 flex w-full justify-center lg:mt-0 lg:w-[45%] lg:justify-end lg:items-center relative lg:-translate-y-6">
              <div className="relative z-10 w-full max-w-[500px] lg:max-w-full aspect-[4/3] flex items-center justify-center">
                <img src="/services-img/services_hero_white.png" alt="Services Hero" className="w-full h-full object-contain scale-[1.1] lg:scale-[1.2] mix-blend-darken" style={{ filter: 'brightness(1.05) contrast(1.15)' }} onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <div className="flex flex-col bg-white">
        {services.map((service, index) => {
          const isAlternate = index % 2 !== 0;
          return (
            <section
              key={service.slug}
              id={service.slug}
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
                    className="text-[16px] leading-7 xl:leading-8 text-black/80 text-justify mb-5 px-4 md:px-8"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </motion.main>
  )
}

export default Services
