import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants } from '../animations/variants'
import { Check } from 'lucide-react'

const reasonsToJoin = [
  'Structured learning and certification-driven growth',
  'Hands-on exposure to Oracle Cloud modules and enterprise projects',
  'Global delivery and onsite opportunities across regions',
  'Remote-friendly and collaborative work culture',
  'Center of Excellence (CoE) driven innovation and R&D exposure',
  'Recognition, rewards, and performance-based growth including project bonuses'
];

const Eyebrow = ({ text, showLine = false, centered = false, isWhite = false }) => (
  <div className={`flex flex-col ${centered ? 'items-center' : 'items-start'} mb-5`}>
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-2 h-2 rounded-full ${isWhite ? 'bg-white' : 'bg-[#EA580C]'}`} />
      <div className={`w-2 h-2 rounded-full ${isWhite ? 'bg-sky-200' : 'bg-[#0EA5E9]'}`} />
      <span className={`text-[12px] font-bold tracking-[0.15em] uppercase ${isWhite ? 'text-white' : 'text-black'}`}>
        {text}
      </span>
    </div>
    {showLine && <div className="h-[3px] w-12 bg-[#0EA5E9]" />}
  </div>
)

function EmpoweringTalent() {
  useDocumentTitle('Cloudstand Consulting | Empowering Talent')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main 
      animate="animate" 
      className="pt-24 font-['Open_Sans'] bg-white pb-32" 
      exit="exit" 
      initial="initial" 
      variants={pageVariants}
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pb-24">
        <div className="section-shell relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <Eyebrow text="CLOUDSTAND CAREERS" showLine={true} centered={true} />
              
              <h1 className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.15] tracking-tight text-[#0F172A]">
                Empowering Talent
              </h1>

              <div className="mt-6 text-[16px] leading-relaxed text-[#5f6368]">
                <p>
                  We are a fast-paced, growing organization specializing in Oracle HCM and enterprise solutions, delivering across North America, India, and other global locations.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center w-full aspect-[4/3]"
            >
              <img 
                src="/Empt/empt_hero_white.png" 
                alt="Empowering Talent Hero" 
                className="w-full h-full object-contain scale-[1.15] lg:scale-[1.25] mix-blend-darken -translate-y-4 lg:-translate-y-8"
                style={{ filter: 'brightness(1.05) contrast(1.15)' }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GROWTH SECTION */}
      <section className="py-16 bg-[#EA580C]">
        <div className="section-shell max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow text="ABOUT GROWTH AT CLOUDSTAND" centered={true} isWhite={true} />
            <h2 className="text-[32px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-white mb-6">
              Continuous Learning & Hands-on Execution
            </h2>
            <p className="text-[16px] leading-relaxed text-white/90 max-w-3xl mx-auto">
              We focus on continuous learning, hands-on execution, and real-time exposure to Oracle Cloud transformation programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN US SECTION */}
      <section className="py-16 bg-white">
        <div className="section-shell max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="mb-10 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow text="WHY JOIN US" centered={true} />
            <h2 className="text-[32px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-[#0F172A]">
              Why Join CloudStand
            </h2>
          </motion.div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 w-full max-w-5xl mx-auto">
            {reasonsToJoin.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2, boxShadow: '0 10px 28px rgba(14,165,233,0.09)' }}
                className="group flex items-center gap-4 rounded-xl border border-[rgba(14,165,233,0.25)] bg-white px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[rgba(14,165,233,0.5)] h-full"
              >
                <span className="inline-flex shrink-0 items-center justify-center text-[#EA580C]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M3 4.5h4.5L14 12l-6.5 7.5H3l6.5-7.5L3 4.5z" />
                    <path d="M10 4.5h4.5L21 12l-6.5 7.5H10l6.5-7.5L10 4.5z" />
                  </svg>
                </span>
                <p className="text-[16px] font-medium leading-relaxed text-black">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CENTER OF EXCELLENCE SECTION */}
      <section className="py-16 bg-white">
        <div className="section-shell max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <Eyebrow text="LEARNING & DEVELOPMENT" centered={true} />
            <h2 className="text-[32px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-[#0F172A] mb-6">
              Center of Excellence
            </h2>
            <p className="text-[16px] leading-relaxed text-[#5f6368]">
              Work with our Center of Excellence team and gain exposure to Oracle and AI-driven transformation projects across industries.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default EmpoweringTalent
