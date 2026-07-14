import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants, fadeUp, staggerContainer } from '../animations/variants'
import AnimatedCounter from '../components/ui/AnimatedCounter'

// Placeholder images for sections
const successStories = [
  {
    title: 'Optimized customer engagement and enhanced operations for a leading HR services provider using Gen AI, delivering a 30% productivity boost',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Enabled 2x faster time-to-market for a leading UK based cashless payment system through AI-driven legacy code modernization',
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Automated accounts payable for a global industrial leader using Agentic Process Automation, boosting operational efficiency and delivering annual savings of $300K',
    link: '#',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Streamlined onboarding and insurance checks for a leading healthcare provider with AI, cutting agent effort by ~80% and boosting care quality',
    link: '#',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
  }
];

const awards = [
  {
    title: 'Recognized as a Major Contender by Everest in their Data & AI (D&AI) Services for Mid-Market Enterprises PEAK Matrix® Assessment 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Recognized in Gartner’s Emerging Magic Quadrant for Generative AI Technologies',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Recognized by a leading analyst firm as a Major Contender in Generative AI Services for Microsoft Clouds - UK & US',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Recognized by a leading analyst firm as a Product Challenger in Advanced Analytics and AI Services 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  }
];

function CloudAI() {
  useDocumentTitle('CloudStand Consulting | Cloud AI')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      
      {/* HERO SECTION */}
      <section 
        className="relative overflow-hidden bg-white py-16 lg:py-32"
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
            <pattern id="cloudai-hero-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cloudai-hero-grid)" />
        </svg>

        <motion.div 
          className="section-shell relative z-10 flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Badge>Cloud AI</Badge>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

          <motion.h1
            className="mt-8 max-w-4xl text-[36px] font-bold leading-[1.1] tracking-tight text-black lg:text-[56px]"
            variants={fadeUp}
          >
            Cloud AI - Accelerating Human Potential Through Intelligent Innovation
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569]"
            variants={fadeUp}
          >
            CloudStand AI helps enterprises unlock the power of artificial intelligence to deliver real business value. Our AI Engineering services combine human creativity with machine intelligence - driving transformation across three core dimensions: AI for Technology, AI for Business, and AI for Data.
          </motion.p>

          <motion.div className="mt-10" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1e1b4b] px-8 py-4 font-semibold text-white shadow-lg">
              Empowering the Future with AI
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE AI CAPABILITIES (DARK) */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24">
        <div className="section-shell relative z-10">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] font-bold tracking-tight text-white lg:text-[44px]">
              Our Core AI Capabilities
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* AI for Technology */}
            <motion.div 
              className="group flex flex-col rounded-[24px] bg-[#242424] p-8 transition-colors hover:bg-[#2a2a2a] border border-[#333] hover:border-[#0EA5E9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-[28px] font-bold leading-tight text-white">AI for<br/>Technology</h3>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-400 flex-1">
                We infuse intelligence into every stage of the software development lifecycle-accelerating configuration, coding, testing, and deployment. Our AI-driven approach boosts productivity, enhances quality, and speeds time-to-market for enterprise-grade applications.
              </p>
              <button className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
                <ArrowRight className="h-4 w-4" /> Learn more
              </button>
            </motion.div>

            {/* AI for Business */}
            <motion.div 
              className="group flex flex-col rounded-[24px] bg-[#242424] p-8 transition-colors hover:bg-[#2a2a2a] border border-[#333] hover:border-[#EA580C]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="mb-6 text-[28px] font-bold leading-tight text-white">AI for<br/>Business</h3>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-400 flex-1">
                We help organizations embed AI into business processes to enhance customer experience, decision-making, and operational efficiency. From agentic AI solutions to intelligent process automation, we tailor every innovation to your business context.
              </p>
              <button className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
                <ArrowRight className="h-4 w-4" /> Learn more
              </button>
            </motion.div>

            {/* AI for Data */}
            <motion.div 
              className="group flex flex-col rounded-[24px] bg-[#242424] p-8 transition-colors hover:bg-[#2a2a2a] border border-[#333] hover:border-[#0EA5E9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-6 text-[28px] font-bold leading-tight text-white">AI for<br/>Data</h3>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-400 flex-1">
                Data is the foundation of intelligent enterprises. We modernize and engineer data ecosystems to make them reliable, compliant, and AI-ready, enabling smarter insights and better business outcomes.
              </p>
              <button className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
                <ArrowRight className="h-4 w-4" /> Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCALE AND STRENGTH */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="section-shell">
          <motion.div 
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] font-bold tracking-tight text-black lg:text-[44px]">
              The Scale and Strength of Cloud AI
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              className="flex flex-col items-center justify-center rounded-3xl bg-[#efefef] p-10 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-[48px] font-bold text-[#1e1b4b]"><AnimatedCounter value={3600} suffix="+" className="text-[48px] font-bold text-[#1e1b4b]" /></div>
              <p className="mt-2 text-[18px] font-medium text-gray-600">AI-Trained<br/>professionals</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center justify-center rounded-3xl bg-[#efefef] p-10 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-[48px] font-bold text-[#1e1b4b]"><AnimatedCounter value={100} suffix="+" className="text-[48px] font-bold text-[#1e1b4b]" /></div>
              <p className="mt-2 text-[18px] font-medium text-gray-600">Use cases</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center rounded-3xl bg-[#efefef] p-10 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-[48px] font-bold text-[#1e1b4b]"><AnimatedCounter value={80} suffix="+" className="text-[48px] font-bold text-[#1e1b4b]" /></div>
              <p className="mt-2 text-[18px] font-medium text-gray-600">AI Assets</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center rounded-3xl bg-[#efefef] p-10 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-[48px] font-bold text-[#1e1b4b]"><AnimatedCounter value={550} suffix="+" className="text-[48px] font-bold text-[#1e1b4b]" /></div>
              <p className="mt-2 text-[18px] font-medium text-gray-600">Prompts in CloudStand<br/>Prompt Foundry</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS */}
      <section className="bg-white py-20">
        <div className="section-shell">
          <motion.div 
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] font-bold tracking-tight text-black lg:text-[44px]">
              Customer success with AI
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                className="group relative flex h-[480px] flex-col overflow-hidden rounded-[24px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute inset-0">
                  <img src={story.image} alt="Success story" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  {/* Additional dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-[#1e1b4b]/60 mix-blend-multiply" />
                </div>
                
                <div className="relative z-10 flex h-full flex-col p-8 text-center">
                  <p className="mt-auto text-[18px] font-medium leading-snug text-white">
                    {story.title}
                  </p>
                  <a href={story.link} className="mt-8 inline-flex items-center justify-center gap-1 text-[14px] font-semibold text-sky-300 underline decoration-sky-300/40 underline-offset-4 hover:decoration-sky-300 hover:text-white transition-all">
                    Read the complete story
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITIONS */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="section-shell">
          <motion.div 
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] font-bold tracking-tight text-black lg:text-[44px]">
              Awards & Recognitions
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-[#1e1b4b] transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="h-[200px] w-full overflow-hidden p-2">
                  <img src={award.image} alt="Award" className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-4">
                  <p className="text-[15px] font-medium leading-relaxed text-white">
                    {award.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT TO RESPONSIBLE AI */}
      <section className="bg-white py-20 pb-32">
        <div className="section-shell">
          <motion.div 
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] font-normal tracking-tight text-black lg:text-[44px]">
              CloudStand's Commitment to Ethical and <span className="font-bold">Responsible AI</span>
            </h2>
          </motion.div>

          <motion.div 
            className="mx-auto max-w-[1100px] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[17px] leading-relaxed text-[#475569]">
              At CloudStand, responsible AI is a foundational commitment embedded across every stage of the AI lifecycle. Building on our legacy of innovation since 1982, we prioritize ethical, secure, and transparent AI aligned with global regulations and best practices. Guided by our trust principles, we ensure privacy, fairness, human oversight, and social responsibility in every initiative. Through structured processes, we proactively manage ethical, legal, and operational risks. By staying mindful of potential risks and promoting a culture of awareness and accountability, we strive to ensure our AI solutions contribute positively and meaningfully. This ensures our AI solutions not only deliver value but also uphold the trust and integrity our customers expect.
            </p>
            <div className="mt-10 flex justify-center">
              <Link to="/contact#premium-inquiry" className="inline-flex items-center gap-2 rounded-full bg-[#1e1b4b] px-8 py-4 font-semibold text-white transition-transform hover:-translate-y-1 hover:shadow-lg">
                Start Your AI Journey <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.main>
  )
}

export default CloudAI
