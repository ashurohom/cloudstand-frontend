import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity, ArrowRight, ChevronDown, Clock3, Cloud, Globe2, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import HealthCheckModal from '../components/ui/HealthCheckModal'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { services } from '../data/services'
import { fadeUp, pageVariants, staggerContainer, staggerItem } from '../animations/variants'
import { API_ENDPOINTS } from '../config/api'
import { useLocation } from 'react-router-dom'
import { countryCodes } from '../data/countryCodes'
import SearchableCountrySelect from '../components/ui/SearchableCountrySelect'

const initialForm = {
  name: '',
  company: '',
  email: '',
  countryCode: '',
  phone: '',
  designation: '',
  serviceInterested: '',
  message: '',
}

const contactInfoCards = [
  {
    title: 'Quick Contact',
    description: 'Speak with a CloudStand specialist about your Oracle roadmap and next steps.',
    value: '+91 9503036784',
    href: 'tel:+919503036784',
    icon: Phone,
    accent: 'Live',
  },
  {
    title: 'Response Time',
    description: 'Most requests are reviewed within one business day with a tailored path forward.',
    value: '24 hr support window',
    href: 'mailto:info@cloudstand.com',
    icon: Clock3,
    accent: 'Fast',
  },
  {
    title: 'Global Presence',
    description: 'We support teams across markets with practical guidance, delivery expertise, and advisory support.',
    value: 'Worldwide consulting',
    href: 'https://maps.google.com/?q=Office+No.19,+Nirvana+Hub,+Keshav+Nagar+-+Manjari+Rd,+z-corner,+Pune+412307',
    icon: Globe2,
    accent: 'Global',
  },
]

const faqs = [
  {
    question: 'What Oracle Cloud services does CloudStand offer?',
    answer:
      'CloudStand provides Oracle Cloud Transformation, Managed Services, Integrations, Reporting & Analytics, Health Checks, Advisory Services, Staffing Augmentation, and Corporate Training. We help organizations maximize the value of their Oracle Cloud investments through end-to-end consulting and support.',
  },
  {
    question: 'What types of Oracle Cloud projects does CloudStand support?',
    answer:
      'We support new implementations, global rollouts, module expansions, system optimizations, integrations, and digital transformation initiatives. Our team works across the entire Oracle Cloud lifecycle—from strategy and deployment to ongoing support.',
  },
  {
    question: 'Which Oracle Fusion Cloud areas do you specialize in?',
    answer:
      'Our expertise spans Oracle Fusion HCM, Payroll, Benefits, Absence Management, Talent Management, Recruiting, Learning, and Workforce Management. We also provide reporting, analytics, integrations, and advisory services to enhance business outcomes.',
  },
  {
    question: 'Do you support Oracle Cloud integrations?',
    answer:
      'Yes, we design and implement secure integrations between Oracle Cloud and third-party systems using OIC, APIs, file-based integrations, and middleware solutions. Our integration services help ensure seamless data flow across your enterprise applications.',
  },
  {
    question: 'Do you provide Oracle Managed Services?',
    answer:
      'Yes, we offer flexible Oracle Managed Services to support application maintenance, issue resolution, release management, and continuous improvement. Our team acts as an extension of your organization to ensure stable and efficient operations.',
  },
  {
    question: 'Do you support global Oracle Cloud deployments?',
    answer:
      'Yes, we have successfully delivered Oracle Cloud projects across the USA, Canada, UK, Germany, UAE, and India. Our global delivery model enables consistent support across multiple regions and time zones.',
  },
  {
    question: 'Can CloudStand work alongside our internal teams?',
    answer:
      'Absolutely. We collaborate closely with business stakeholders, IT teams, and project leaders to complement your internal capabilities. Our approach focuses on partnership, knowledge transfer, and long-term success.',
  },
  {
    question: 'Do you provide health checks and optimization assessments?',
    answer:
      'Yes, we perform comprehensive Oracle Cloud health checks to identify process gaps, configuration issues, and improvement opportunities. Our recommendations help enhance performance, user adoption, compliance, and operational efficiency.',
  },
  {
    question: 'Can you support seasonal payroll and benefits operations?',
    answer:
      'Yes, we provide specialized support for North America payroll and benefits activities, including peak periods and year-end processing. Our experts help organizations manage critical payroll operations accurately and efficiently.',
  },
  {
    question: 'How do I get started with CloudStand?',
    answer:
      'Simply contact us to schedule an initial consultation and discuss your Oracle Cloud goals and challenges. Our team will assess your requirements and recommend the most effective engagement approach.',
  },
]

function Contact() {
  useDocumentTitle('Cloudstand Consulting | Contact Us')
  const location = useLocation()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [openFaq, setOpenFaq] = useState(0)
  const [activeLocation, setActiveLocation] = useState('Pune')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHealthCheckModalOpen, setIsHealthCheckModalOpen] = useState(false)


  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Full name is required';
    } else if (form.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailPattern.test(form.email)) {
      nextErrors.email = 'Invalid Email';
    }

    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    const phoneDigits = (form.countryCode + form.phone).replace(/\D/g, '');
    if (!form.countryCode) {
      nextErrors.phone = 'Country code is required';
    } else if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(form.phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      nextErrors.phone = 'Enter a valid phone number';
    }

    if (!form.company.trim()) {
      nextErrors.company = 'Company name is required';
    } else if (form.company.trim().length < 2) {
      nextErrors.company = 'Company name must be at least 2 characters';
    }

    if (!form.serviceInterested.trim()) {
      nextErrors.serviceInterested = 'Service Area is required';
    }
    
    if (!form.message.trim()) {
      nextErrors.message = 'Message is required';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch(API_ENDPOINTS.contactInquiry, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: `${form.countryCode} ${form.phone}`,
          designation: form.designation,
          service_interested: form.serviceInterested,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setForm(initialForm);
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to send enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass = (field) =>
    `w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-4 text-[0.97rem] font-medium text-slate-900 shadow-[0_1px_0_rgba(14,165,233,0.04)] transition-all duration-300 placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 ${errors[field] ? 'border-rose-200 focus:ring-rose-100' : ''
    }`

  const scrollToSection = (id) => {
    const target = document.getElementById(id)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const officeLocations = {
    Pune: {
      address: `Office No.19, Nirvana Hub,
Keshav Nagar - Manjari Rd,
z-corner, Pune 412307`,
      map: 'https://www.google.com/maps?q=Office%20No.19,%20Nirvana%20Hub,%20Keshav%20Nagar%20-%20Manjari%20Rd,%20z-corner,%20Pune%20412307&z=14&output=embed',
    },

    Texas: {
      address: `5900 Balcones Dr Suit 100,
Austin, TX 78731`,
      map: 'https://www.google.com/maps?q=Austin+Texas&z=12&output=embed',
    },

    Arkansas: {
      address: `900 SE 5th St, Suite 22,
Bentonville, Arkansas, 72712`,
      map: 'https://www.google.com/maps?q=Bentonville+Arkansas&z=12&output=embed',
    },
  }


  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section
        className="relative overflow-hidden pt-12 pb-16 min-h-[calc(100dvh-80px)] lg:portrait:min-h-[600px] lg:flex lg:items-center bg-white"
      >

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />

        <div className="section-shell relative z-20 w-full">


          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">

            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge>CONTACT CLOUDSTAND</Badge>
            </motion.div>

            {/* BLUE LINE */}
            <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9] mx-auto lg:mx-0" />


            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-black text-center lg:text-left"
              initial={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Let’s Build Something
              <br />
              Exceptional
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#475569] lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >

              Connect with CloudStand Consulting to discuss
              Oracle Cloud implementation, optimization and
              enterprise transformation strategies tailored
              to your business goals.

            </motion.p>

            {/* BUTTONS */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >

              {/* ORANGE BUTTON */}
              <button
                onClick={() => setIsHealthCheckModalOpen(true)}
                className="inline-flex items-center gap-3 rounded-full bg-[#EA580C] px-9 py-4 text-[16px] font-semibold text-white shadow-[0_18px_40px_rgba(234,88,12,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9480f]"
              >

                Book a Consultation

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-5-5 5 5-5 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </span>

              </button>

              {/* SECONDARY BUTTON */}
              <button
                onClick={() =>
                  document.getElementById('faq')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="rounded-full border border-[#bfdbfe] bg-white px-9 py-4 text-[16px] font-semibold text-black transition-all duration-300 hover:border-[#0EA5E9] hover:bg-[#f8fbff]"
              >

                Explore FAQs

              </button>

            </motion.div>
            </div>

            {/* RIGHT VISUAL - IMAGE */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex lg:w-[45%] lg:justify-end lg:items-center relative"
            >
              <div className="relative z-10 w-[90%] max-w-[600px] aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-[#0EA5E9]/5 to-[#EA580C]/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[6px] border-white overflow-hidden flex items-center justify-center scale-100 xl:scale-105">
                <img 
                  src="/Contact/hero.png" 
                  alt="Contact Hero" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section
        id="lets-talk"
        className="relative overflow-hidden bg-white py-16 lg:py-24"
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
            <pattern id="contact-locations-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-locations-dot-grid)" />
        </svg>
        {/* BACKGROUND IMAGE REMOVED */}

        <div className="section-shell relative z-10">

          {/* TOP CONTENT */}
          <div className="flex flex-col items-center text-center">

            {/* LABEL */}
            <div className="w-full text-left md:text-center">
              <Badge>Contact Locations</Badge>
            </div>

            {/* LINE */}
            <div className="mt-6 h-1 w-14 rounded-full bg-[#0EA5E9]" />

            {/* HEADING */}
            <h2 className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-black text-center">
              Our Global Offices
            </h2>

            {/* TEXT */}
            <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#475569] lg:text-center">
              Connect with our Oracle Cloud specialists to
              discuss implementation, optimization and
              enterprise transformation strategies tailored
              to your business goals.
            </p>

          </div>

          {/* OFFICES CARDS */}
          <div className="mx-auto mt-12 grid w-full max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-3 px-4 xl:px-0">

            {/* PUNE */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[48px] w-full overflow-hidden bg-[#0EA5E9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0284c7]">
                <span className="text-white font-bold text-[14px] uppercase tracking-widest">Headquarters</span>
              </div>

              <div 
                className="relative flex flex-1 flex-col p-5 text-center bg-cover bg-center"
                style={{ backgroundImage: 'url("/locations/pune.png")' }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <img src="https://flagcdn.com/w320/in.png" alt="India" className="h-[56px] w-[56px] rounded-full object-cover shadow-sm mb-3" />
                    <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-white">
                      Pune, India
                    </h3>
                  </div>
                  <div className="my-4 h-px w-full bg-white/20" />

                  <div className="flex flex-col flex-1 items-center">
                    <p className="text-[14px] font-medium leading-snug text-white mb-4">
                      Office No.19, Nirvana Hub,<br />
                      Keshav Nagar - Manjari Rd,<br />
                      z-corner, Pune 412307
                    </p>
                    <div className="mt-auto space-y-2.5 flex flex-col items-center">
                      <p className="text-[14.5px] font-bold text-white">
                        +91 9503036784
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TEXAS */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[48px] w-full overflow-hidden bg-[#0EA5E9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0284c7]">
                <span className="text-white font-bold text-[14px] uppercase tracking-widest">US Office</span>
              </div>

              <div 
                className="relative flex flex-1 flex-col p-5 text-center bg-cover bg-center"
                style={{ backgroundImage: 'url("/locations/texas.png")' }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <img src="https://flagcdn.com/w320/us.png" alt="USA" className="h-[56px] w-[56px] rounded-full object-cover shadow-sm mb-3" />
                    <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-white">
                      Texas, USA
                    </h3>
                  </div>
                  <div className="my-4 h-px w-full bg-white/20" />

                  <div className="flex flex-col flex-1 items-center">
                    <p className="text-[14px] font-medium leading-snug text-white mb-4">
                      5900 Balcones Dr Suit 100,<br />
                      Austin, TX 78731
                    </p>
                    <div className="mt-auto space-y-2.5 flex flex-col items-center">
                      <p className="text-[14.5px] font-bold text-white">
                        +1 (512) 903-8971
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ARKANSAS */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[48px] w-full overflow-hidden bg-[#0EA5E9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0284c7]">
                <span className="text-white font-bold text-[14px] uppercase tracking-widest">US Office</span>
              </div>

              <div 
                className="relative flex flex-1 flex-col p-5 text-center bg-cover bg-center"
                style={{ backgroundImage: 'url("/locations/newyork.png")' }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <img src="https://flagcdn.com/w320/us.png" alt="USA" className="h-[56px] w-[56px] rounded-full object-cover shadow-sm mb-3" />
                    <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-white">
                      Arkansas, USA
                    </h3>
                  </div>
                  <div className="my-4 h-px w-full bg-white/20" />

                  <div className="flex flex-col flex-1 items-center">
                    <p className="text-[14px] font-medium leading-snug text-white mb-4">
                      900 SE 5th St, Suite 22,<br />
                      Bentonville , Arkansas , 72712
                    </p>
                    <div className="mt-auto space-y-2.5 flex flex-col items-center">
                      <p className="text-[14.5px] font-bold text-white">
                        +1 (602) 503-9547
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CANADA */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[48px] w-full overflow-hidden bg-[#0EA5E9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0284c7]">
                <span className="text-white font-bold text-[14px] uppercase tracking-widest">Canada Office</span>
              </div>

              <div 
                className="relative flex flex-1 flex-col p-5 text-center bg-cover bg-center"
                style={{ backgroundImage: 'url("/locations/canada.png")' }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <img src="https://flagcdn.com/w320/ca.png" alt="Canada" className="h-[56px] w-[56px] rounded-full object-cover shadow-sm mb-3" />
                    <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-white">
                      Canada
                    </h3>
                  </div>
                  <div className="my-4 h-px w-full bg-white/20" />

                  <div className="flex flex-col flex-1 items-center">
                    <p className="text-[14px] font-medium leading-snug text-white mb-4">
                      1711 carolyn road,<br />
                      missisauga, ontario,<br />
                      l5m 2c9
                    </p>
                    <div className="mt-auto space-y-2.5 flex flex-col items-center">
                      <p className="text-[14.5px] font-bold text-white">
                        +1 (226) 338-7868
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DUBAI */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[48px] w-full overflow-hidden bg-[#0EA5E9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0284c7]">
                <span className="text-white font-bold text-[14px] uppercase tracking-widest">Regional Partner</span>
              </div>

              <div 
                className="relative flex flex-1 flex-col p-5 text-center bg-cover bg-center"
                style={{ backgroundImage: 'url("/locations/dubai.png")' }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <svg viewBox="0 0 512 512" className="h-[56px] w-[56px] shadow-sm rounded-full mb-3">
                      <clipPath id="circle-clip-uae">
                        <circle cx="256" cy="256" r="256" />
                      </clipPath>
                      <g clipPath="url(#circle-clip-uae)">
                        <rect x="128" y="0" width="384" height="170.66" fill="#69A357" />
                        <rect x="128" y="170.66" width="384" height="170.67" fill="#F2F2F2" />
                        <rect x="128" y="341.33" width="384" height="170.66" fill="#1F1F1F" />
                        <rect x="0" y="0" width="128" height="512" fill="#CC4539" />
                      </g>
                    </svg>
                    <h3 className="text-[1.5rem] font-bold leading-none tracking-tight text-white">
                      Dubai, UAE
                    </h3>
                  </div>
                  <div className="my-4 h-px w-full bg-white/20" />

                  <div className="flex flex-col flex-1 items-center">
                    <p className="text-[14px] font-medium leading-snug text-white mb-4">
                      Meydan Grandstand, 6th Floor<br />
                      Meydan Road, Nad Al Sheba<br />
                      Dubai, U.A.E.
                    </p>
                    <div className="mt-auto space-y-2.5 flex flex-col items-center">
                      <p className="text-[14.5px] font-bold text-white">
                        +971 52 867 7172
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EMBEDDED CONTACT FORM SECTION */}
      <section id="premium-enquiry" className="relative overflow-hidden bg-[#F7F9FC] py-16">
        <div className="section-shell relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] border border-[#e2e8f0]">

            {/* LEFT SIDE - IMAGE */}
            <div className="relative h-[250px] lg:h-auto overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Cloud Infrastructure"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/50 to-[#0f172a]/90" />

              <div className="absolute bottom-6 left-6 right-6 text-white z-10 lg:bottom-10 lg:left-10 lg:right-10">
                <div className="h-1.5 w-12 bg-[#F97316] rounded-full mb-4" />
                <h3 className="text-[26px] font-bold leading-tight tracking-tight mb-2">
                  Enterprise Cloud Solutions
                </h3>
                <p className="text-white/80 text-[14.5px] max-w-[300px] leading-relaxed">
                  Accelerating digital transformation with proven Oracle Cloud expertise.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="mb-6 flex flex-col items-center text-center">
                <Badge>Lets Work Together</Badge>
                <h2 className="mt-4 text-[30px] lg:text-[40px] font-bold leading-[1.02] tracking-tight text-[#111827] text-center">
                  Start a Conversation
                </h2>
                <p className="mt-2 text-[16px] leading-relaxed text-[#475569] lg:text-center">
                  Let’s discuss your cloud transformation and enterprise technology needs.
                </p>
              </div>

              {submitted ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">Enquiry Submitted!</h3>
                  <p className="text-[#475569]">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2" noValidate>
                  {/* FULL NAME */}
                  <div className="md:col-span-1">
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      className={`h-[48px] w-full rounded-[12px] border bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#e2e8f0] focus:border-[#2563EB]'}`}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1.5 block px-1">{errors.name}</span>}
                  </div>

                  {/* EMAIL */}
                  <div className="md:col-span-1">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={handleChange}
                      className={`h-[48px] w-full rounded-[12px] border bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#e2e8f0] focus:border-[#2563EB]'}`}
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1.5 block px-1">{errors.email}</span>}
                  </div>

                  {/* COMPANY NAME */}
                  <div className="md:col-span-1">
                    <input
                      name="company"
                      type="text"
                      placeholder="Company Name *"
                      value={form.company}
                      onChange={handleChange}
                      className={`h-[48px] w-full rounded-[12px] border bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none ${errors.company ? 'border-red-500 focus:border-red-500' : 'border-[#e2e8f0] focus:border-[#2563EB]'}`}
                    />
                    {errors.company && <span className="text-xs text-red-500 mt-1.5 block px-1">{errors.company}</span>}
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="md:col-span-1">
                    <div className={`flex h-[48px] w-full rounded-[12px] border bg-[#F7F9FC] text-[14.5px] text-[#111827] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#2563EB]/10 transition-all ${errors.phone ? 'border-red-500 focus-within:border-red-500' : 'border-[#e2e8f0] focus-within:border-[#2563EB]'}`}>
                      <SearchableCountrySelect
                        value={form.countryCode}
                        onChange={handleChange}
                        className="w-[110px] sm:w-[120px] flex-shrink-0 border-r border-[#e2e8f0]"
                      />
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={handleChange}
                        className="flex-1 w-full bg-transparent px-4 placeholder:text-[#94a3b8] outline-none"
                      />
                    </div>
                    {errors.phone && <span className="text-xs text-red-500 mt-1.5 block px-1">{errors.phone}</span>}
                  </div>

                  {/* DESIGNATION DROPDOWN */}
                  <div className="md:col-span-2 relative">
                    <select
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      className={`h-[48px] w-full appearance-none rounded-[12px] border bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none border-[#e2e8f0] focus:border-[#2563EB]`}
                    >
                      <option value="" disabled hidden>Your Designation</option>
                      <option value="Business Owner / Founder">Business Owner / Founder</option>
                      <option value="C-Suite Executive (CEO, CTO, CFO)">C-Suite Executive (CEO, CTO, CFO)</option>
                      <option value="IT Manager / Director">IT Manager / Director</option>
                      <option value="Oracle Consultant">Oracle Consultant</option>
                      <option value="Solution Architect">Solution Architect</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="HR / Payroll Professional">HR / Payroll Professional</option>
                      <option value="Finance Professional">Finance Professional</option>
                      <option value="Student / Fresher">Student / Fresher</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2563EB]">
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </div>

                  {/* SERVICE DROPDOWN */}
                  <div className="md:col-span-2">
                    <div className="relative">
                      <select
                        name="serviceInterested"
                        value={form.serviceInterested}
                        onChange={handleChange}
                        className={`h-[48px] w-full appearance-none rounded-[12px] border bg-[#F7F9FC] px-4 text-[14.5px] text-[#111827] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none ${errors.serviceInterested ? 'border-red-500 focus:border-red-500' : 'border-[#e2e8f0] focus:border-[#2563EB]'}`}
                      >
                        <option value="" disabled hidden>Select Service Area</option>
                        <option value="Oracle Cloud Transformation">Oracle Cloud Transformation</option>
                        <option value="AI & Automation CoE">AI & Automation CoE</option>
                        <option value="Oracle Integration Cloud (OIC)">Oracle Integration Cloud (OIC)</option>
                        <option value="Oracle Analytics Cloud (OAC)">Oracle Analytics Cloud (OAC)</option>
                        <option value="Managed Services">Managed Services</option>
                        <option value="Health Check & Advisory">Health Check & Advisory</option>
                        <option value="Professional Staffing">Professional Staffing</option>
                        <option value="Corporate Training">Corporate Training</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2563EB]">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                    {errors.serviceInterested && <span className="text-xs text-red-500 mt-1.5 block px-1">{errors.serviceInterested}</span>}
                  </div>

                  {/* MESSAGE TEXTAREA */}
                  <div className="md:col-span-2">
                    <textarea
                      name="message"
                      placeholder="Tell us about your project requirements... *"
                      value={form.message}
                      onChange={handleChange}
                      className={`min-h-[100px] w-full rounded-[12px] border bg-[#F7F9FC] p-4 text-[14.5px] text-[#111827] placeholder:text-[#94a3b8] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none resize-y ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#e2e8f0] focus:border-[#2563EB]'}`}
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1.5 block px-1">{errors.message}</span>}
                  </div>

                  {submitError && (
                    <div className="md:col-span-2 text-sm text-red-500 text-center font-medium">
                      {submitError}
                    </div>
                  )}

                  {/* BUTTON */}
                  <div className="md:col-span-2 mt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#F97316] to-[#ea580c] px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_10px_25px_rgba(249,115,22,0.25)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(249,115,22,0.35)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {false && (
      <section className="relative overflow-hidden bg-white py-24">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundColor: '#ffffff',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.04)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.04)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="section-shell relative z-10">

          {/* TOP */}
          <div className="max-w-[760px] mx-auto flex flex-col items-center text-center">

            {/* BADGE */}
            <Badge>Visit Our Headquarters</Badge>

            {/* LINE */}
            <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

            {/* HEADING */}
            <h2 className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-black text-center">

              Our Global


              Headquarters

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[650px] text-[16px] leading-8 text-[#475569] lg:text-center">

              CloudStand Consulting headquarters serves as the
              strategic center for Oracle Cloud transformation,
              enterprise consulting and global delivery operations.
              Our Pune office brings together experienced Oracle
              specialists focused on innovation, implementation
              excellence and long-term client success.

            </p>

          </div>

          {/* MAP */}
          <div className="mt-14 overflow-hidden rounded-[32px] border border-[#dbeafe] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="relative h-[480px] w-full overflow-hidden rounded-[24px] bg-[#EBF3FC]">
              
              {/* BACKGROUND CIRCLES */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                {/* LARGE BUBBLES */}
                <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-[50%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                <div className="absolute top-[35%] left-[30%] w-[300px] h-[200px] rounded-[45%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                <div className="absolute top-[25%] left-[50%] w-[400px] h-[300px] rounded-[50%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                <div className="absolute top-[40%] left-[75%] w-[250px] h-[250px] rounded-[45%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                
                {/* SMALL BUBBLES */}
                <div className="absolute top-[65%] left-[68%] w-[120px] h-[80px] rounded-[50%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                <div className="absolute top-[75%] left-[78%] w-[140px] h-[100px] rounded-[50%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                <div className="absolute top-[50%] left-[88%] w-[100px] h-[160px] rounded-[50%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                <div className="absolute top-[65%] left-[45%] w-[160px] h-[160px] rounded-[50%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
                <div className="absolute top-[10%] left-[30%] w-[120px] h-[120px] rounded-[50%] bg-[#A8D397] mix-blend-multiply blur-[2px]" />
              </div>

              {/* LEGEND */}
              <div className="absolute top-6 left-6 rounded-[12px] bg-white px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.04)] z-10 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#EA580C]" />
                  <span className="text-[12px] font-bold text-slate-700">Office</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#2563EB]" />
                  <span className="text-[12px] font-bold text-slate-700">US Office</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#B45309]" />
                  <span className="text-[12px] font-bold text-slate-700">Regional Partner</span>
                </div>
              </div>

              {/* MARKERS */}
              <div className="absolute inset-0 z-20 pointer-events-none">

                {/* TEXAS */}
                <div className="absolute top-[50%] left-[26%] -translate-x-1/2 flex flex-col items-center">
                  <div className="rounded-[6px] bg-[#1E293B] px-3.5 py-1.5 text-center shadow-lg mb-1 z-10">
                    <p className="text-[11.5px] font-bold text-white uppercase tracking-wide">Texas</p>
                    <p className="text-[10px] text-slate-300">US Office</p>
                  </div>
                  <div className="h-14 w-px bg-[#2563EB]" />
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#2563EB]" />
                    <div className="absolute inset-0 rounded-full bg-[#2563EB] animate-ping opacity-40" />
                  </div>
                </div>

                {/* ARKANSAS */}
                <div className="absolute top-[42%] left-[32%] -translate-x-1/2 flex flex-col items-center">
                  <div className="rounded-[6px] bg-[#1E293B] px-3.5 py-1.5 text-center shadow-lg mb-1 z-10">
                    <p className="text-[11.5px] font-bold text-white uppercase tracking-wide">Arkansas</p>
                    <p className="text-[10px] text-slate-300">US Office</p>
                  </div>
                  <div className="h-10 w-px bg-[#2563EB]" />
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#2563EB]" />
                    <div className="absolute inset-0 rounded-full bg-[#2563EB] animate-ping opacity-40" />
                  </div>
                </div>

                {/* PUNE */}
                <div className="absolute top-[55%] left-[64%] -translate-x-1/2 flex flex-col items-center">
                  <div className="rounded-[6px] bg-[#1E293B] px-3.5 py-1.5 text-center shadow-lg mb-1 z-10">
                    <p className="text-[11.5px] font-bold text-white uppercase tracking-wide">Pune, India</p>
                    <p className="text-[10px] text-orange-300">Headquarters</p>
                  </div>
                  <div className="h-16 w-px bg-[#EA580C]" />
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#EA580C]" />
                    <div className="absolute inset-0 rounded-full bg-[#EA580C] animate-ping opacity-40" />
                  </div>
                </div>

                {/* CANADA */}
                <div className="absolute top-[28%] left-[28%] -translate-x-1/2 flex flex-col items-center">
                  <div className="rounded-[6px] bg-[#1E293B] px-3.5 py-1.5 text-center shadow-lg mb-1 z-10">
                    <p className="text-[11.5px] font-bold text-white uppercase tracking-wide">Canada</p>
                    <p className="text-[10px] text-slate-300">Office</p>
                  </div>
                  <div className="h-8 w-px bg-[#EA580C]" />
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#EA580C]" />
                    <div className="absolute inset-0 rounded-full bg-[#EA580C] animate-ping opacity-40" />
                  </div>
                </div>

                {/* DUBAI */}
                <div className="absolute top-[50%] left-[55%] -translate-x-1/2 flex flex-col items-center">
                  <div className="rounded-[6px] bg-[#1E293B] px-3.5 py-1.5 text-center shadow-lg mb-1 z-10">
                    <p className="text-[11.5px] font-bold text-white uppercase tracking-wide">Dubai</p>
                    <p className="text-[10px] text-slate-300">Office</p>
                  </div>
                  <div className="h-12 w-px bg-[#EA580C]" />
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#EA580C]" />
                    <div className="absolute inset-0 rounded-full bg-[#EA580C] animate-ping opacity-40" />
                  </div>
                </div>

              </div>

              {/* BOTTOM SCROLL ARROW */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all hover:bg-slate-50 hover:scale-105 pointer-events-auto"
                >
                  <ArrowRight className="h-5 w-5 text-slate-500 rotate-90" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </section>
      )}

      <section
        id="faq"
        className="relative overflow-hidden py-24 bg-white"
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
            <pattern id="faq-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0EA5E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-dot-grid)" />
        </svg>

        <div className="section-shell relative z-10">

          <div className="grid gap-14 lg:grid-cols-[0.82fr_1fr] lg:items-start">

            {/* LEFT */}
            <div className="relative overflow-hidden rounded-[36px] border border-[#eef4ff] bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)] lg:p-10">

              {/* INNER GRID */}
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)
            `,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* ORANGE BLUR */}
              <div className="absolute -left-16 top-0 h-[220px] w-[220px] rounded-full bg-[#EA580C]/[0.05] blur-3xl" />

              {/* BLUE BLUR */}
              <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/[0.05] blur-3xl" />

              <div className="relative z-10 flex flex-col items-center text-center">

                <Badge>Frequently Asked Questions</Badge>

                {/* LINE */}
                <div className="mt-6 h-1 w-16 rounded-full bg-[#0EA5E9]" />

                {/* HEADING */}
                <h2 className="mt-6 text-[30px] lg:text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-black text-center">

                  Everything You
                  <br />

                  Need To Know

                </h2>

                {/* TEXT */}
                <p className="mt-6 text-[16px] leading-8 text-[#475569] lg:text-center">

                  Helpful answers about our Oracle Cloud consulting,
                  implementation process, support model and
                  enterprise transformation services.

                </p>

                {/* EXTRA POINTS */}
                <div className="mt-10 space-y-4 self-start lg:self-center text-left">

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-[#EA580C]" />

                    <p className="text-[14px] font-medium text-[#475569]">
                      Oracle certified consulting specialists
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-[#0EA5E9]" />

                    <p className="text-[14px] font-medium text-[#475569]">
                      Global enterprise implementation experience
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-black" />

                    <p className="text-[14px] font-medium text-[#475569]">
                      End to end Oracle Cloud transformation support
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT FAQ */}
            <div className="space-y-2">

              {faqs.map((item, index) => {

                const isOpen = openFaq === index

                return (

                  <motion.div
                    key={item.question}
                    whileHover={{ y: -1 }}
                  >

                    <div className="overflow-hidden rounded-[18px] border border-[#e0efff] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.03)] transition-all duration-300">

                      {/* BUTTON */}
                      <button
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        type="button"
                      >

                        {/* QUESTION */}
                        <span className="text-[14px] font-semibold leading-5 text-black">

                          {item.question}

                        </span>

                        {/* ICON */}
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                            ? 'border-[#EA580C] bg-[#fff7ed] text-[#EA580C]'
                            : 'border-[#dbeafe] bg-[#f8fbff] text-[#0EA5E9]'
                            }`}
                        >

                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                              }`}
                          />

                        </span>

                      </button>

                      {/* ANSWER */}
                      <AnimatePresence initial={false}>

                        {isOpen ? (

                          <motion.div
                            animate={{ opacity: 1, height: 'auto' }}
                            className="overflow-hidden"
                            exit={{ opacity: 0, height: 0 }}
                            initial={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >

                            <div className="border-t border-[#eff6ff] px-4 pb-3 pt-2.5">

                              <p className="text-[13px] leading-6 text-[#475569]">

                                {item.answer}

                              </p>

                            </div>

                          </motion.div>

                        ) : null}

                      </AnimatePresence>

                    </div>

                  </motion.div>

                )
              })}

            </div>

          </div>

        </div>

      </section>
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
              <div>
                <h2 className="mt-6 max-w-3xl text-[30px] lg:text-[40px] font-bold text-white">
                  Unlock Oracle Cloud Value with Best Practices and Agentic AI
                </h2>
                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <button 
                      onClick={() => setIsHealthCheckModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500 px-8 py-4 text-[16px] font-semibold text-white transition-all hover:border-orange-400 hover:bg-orange-600 shadow-md"
                    >
                      Schedule Free System Health Check Analysis
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </motion.div>
                </div>
              </div>

              <Card className="p-6 !bg-white/10 backdrop-blur-md !border-white/20">
                <div className="text-[12px] font-extrabold uppercase tracking-normal text-white drop-shadow-lg">Value You Receive</div>
                <ul className="mt-4 space-y-3 text-white font-medium drop-shadow-md lg:whitespace-nowrap">
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
      <HealthCheckModal 
        isOpen={isHealthCheckModalOpen} 
        onClose={() => setIsHealthCheckModalOpen(false)}
        title="Book a Consultation"
        description="Fill out the details below to book your consultation with our Oracle Cloud experts."
        source="Book Consultation"
      />
    </motion.main>
  )
}

export default Contact
