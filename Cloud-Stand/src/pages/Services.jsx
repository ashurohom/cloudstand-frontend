import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Badge from '../components/ui/Badge'
import { services } from '../data/services'
import { pageVariants } from '../animations/variants'

function Services() {
  useDocumentTitle('Services | CloudStand Consulting')
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
      <section className="relative overflow-hidden pt-12 pb-16 min-h-[50vh] lg:flex lg:items-center bg-white">
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
        <div className="section-shell relative z-20 w-full">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-start text-left relative z-10">
              <motion.div animate={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, scale: 0.9, y: 10 }} transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">OUR SERVICES</Badge>
              </motion.div>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9]" />

              <motion.h1 animate={{ opacity: 1, y: 0 }} className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black text-left" initial={{ opacity: 0, y: 25 }} transition={{ duration: 0.7, delay: 0.1 }}>
                Enterprise Cloud Solutions
                <br />
                Tailored For You
              </motion.h1>

              <motion.p animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#475569] text-left" initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.7, delay: 0.2 }}>
                Discover how our comprehensive suite of Oracle Cloud services can accelerate your digital transformation, optimize operations, and drive measurable business value.
              </motion.p>
            </div>

            <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 40 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:flex lg:w-[45%] lg:justify-end lg:items-center relative lg:-translate-y-6">
              <div className="relative z-10 w-[90%] max-w-[600px] aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-[#0EA5E9]/5 to-[#EA580C]/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[6px] border-white overflow-hidden flex items-center justify-center scale-100 xl:scale-105">
                <img src="/services/service1.png" alt="Services Hero" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-white py-16 lg:py-24">
        <div className="section-shell">
          <div className="flex flex-col space-y-16 sm:space-y-24 lg:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={service.slug} id={service.slug} className={`grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 lg:items-start items-center pt-8 scroll-mt-24`}>
                  
                  {/* TEXT COLUMN */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col items-start ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}
                  >
                    <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">
                      {service.shortTitle || 'SERVICE'}
                    </Badge>
                    <h2 className="text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#000000] mt-4 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-[16px] leading-7 xl:leading-8 text-black/80 text-justify mb-5">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* IMAGE COLUMN */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className={`relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] h-[300px] lg:h-[380px] ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'} w-full lg:mt-[60px]`}
                    style={{ borderRadius: '90px 0 90px 0' }}
                  >
                    <img 
                      src={`/services/service${(index % 8) + 1}.png`} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
                      }}
                    />
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Services
