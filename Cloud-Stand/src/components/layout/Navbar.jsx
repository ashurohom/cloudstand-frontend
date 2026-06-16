import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { services } from '../../data/services'
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
]

const careerItems = [
  {
    label: 'Team CloudStand',
    path: '/team-cloudstand',
  },
  {
    label: 'Empowering Talent',
    path: '/empowering-talent',
  },
  {
    label: 'Career',
    path: '/careers',
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [careersOpen, setCareersOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState('')
  const location = useLocation()

  const serviceItems = useMemo(
    () =>
      services.map((service) => ({
        label: service.title,
        path: `/services#${service.slug}`,
      })),
    [],
  )
  const isCareersActive = careerItems.some((item) => item.path === location.pathname)

  const navClassName = 'border-b border-sky-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]'

  const handleMenuToggle = () => {
    setMenuOpen((current) => {
      const next = !current
      if (!next) {
        setServicesOpen(false)
        setCareersOpen(false)
      }
      return next
    })
  }

  const handleNavClick = (path) => {
    setMenuOpen(false)
    setServicesOpen(false)
    setCareersOpen(false)
    setHoveredPath('')
    if (typeof path === 'string' && path.includes('#')) {
      // The Services page useEffect will handle the scrolling, 
      // just don't scroll to top here so they don't fight.
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const renderUnderline = (active) =>
    active ? (
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#0EA5E9]"
        layoutId="nav-underline"
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    ) : null

  return (
    <motion.header
      className={`gpu-layer smooth-transition fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClassName}`}
      initial={false}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link aria-label="CloudStand home" className="flex items-center gap-3" onClick={() => handleNavClick('/')} to="/">
              <img
                alt="CloudStand Consulting"
                className="h-12 w-auto object-contain sm:h-14"
                src="/cloud-stand-logo.png"
              />
            </Link>
          </motion.div>

          <motion.nav
            animate="visible"
            className="hidden items-center gap-8 lg:flex"
            initial="hidden"
            variants={staggerContainer}
          >
            {navLinks.slice(0, 2).map((item, index) => (
              <motion.div custom={index} key={item.path} variants={fadeUp}>
                <NavLink
                  className="relative py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
                  onClick={() => handleNavClick(item.path)}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath('')}
                  to={item.path}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`inline-flex items-center gap-2 ${isActive ? 'text-[#0EA5E9]' : ''}`}>
                        {item.icon ? <item.icon className="h-4 w-4 text-sky-500" /> : null}
                        <span>{item.label}</span>
                      </span>
                      {renderUnderline(isActive || hoveredPath === item.path)}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              className="relative"
              custom={2}
              onMouseEnter={() => {
                setHoveredPath('/services')
                setServicesOpen(true)
                setCareersOpen(false)
              }}
              onMouseLeave={() => {
                setHoveredPath('')
                setServicesOpen(false)
              }}
              variants={fadeUp}
            >
              <Link
                to="/services"
                className="relative flex items-center gap-1 py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
                onClick={() => handleNavClick('/services')}
              >
                <span className={servicesOpen || location.pathname.startsWith('/services') ? 'text-[#0EA5E9]' : ''}>Services</span>
                <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                {renderUnderline(servicesOpen || location.pathname.startsWith('/services') || hoveredPath === '/services')}
              </Link>

              <AnimatePresence mode="wait">
                {servicesOpen ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute left-0 top-full mt-3 w-[420px] overflow-hidden border border-sky-200 bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <motion.div animate="visible" className="grid gap-1" initial="hidden" variants={staggerContainer}>
                      {serviceItems.map((item) => (
                        <motion.div key={item.path} variants={staggerItem}>
                          <Link
                            className="group flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:text-[#0EA5E9]"
                            onClick={() => handleNavClick(item.path)}
                            to={item.path}
                          >
                            <span
                              aria-hidden="true"
                              className="h-0 w-0 shrink-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-l-current border-t-transparent text-[#EA580C] transition-colors duration-200 group-hover:text-[#0EA5E9]"
                            />
                            <span className="block flex-1 leading-6">{item.label}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>

            {navLinks.slice(2, 4).map((item, index) => (
              <motion.div custom={index + 4} key={item.path} variants={fadeUp}>
                <NavLink
                  className="relative py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
                  onClick={() => handleNavClick(item.path)}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath('')}
                  to={item.path}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`inline-flex items-center gap-2 ${isActive ? 'text-[#0EA5E9]' : ''}`}>
                        {item.icon ? <item.icon className="h-4 w-4 text-sky-500" /> : null}
                        <span>{item.label}</span>
                      </span>
                      {renderUnderline(isActive || hoveredPath === item.path)}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              className="relative"
              custom={6}
              onMouseEnter={() => {
                setHoveredPath('/careers')
                setCareersOpen(true)
                setServicesOpen(false)
              }}
              onMouseLeave={() => {
                setHoveredPath('')
                setCareersOpen(false)
              }}
              variants={fadeUp}
            >
              <button
                className="relative flex items-center gap-1 py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
                onClick={() => setCareersOpen(!careersOpen)}
              >
                <span className={isCareersActive || careersOpen ? 'text-[#0EA5E9]' : ''}>Careers</span>
                <motion.span animate={{ rotate: careersOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                {renderUnderline(isCareersActive || careersOpen || hoveredPath === '/careers')}
              </button>

              <AnimatePresence mode="wait">
                {careersOpen ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute left-0 top-full mt-3 w-[240px] overflow-hidden border border-sky-200 bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    <motion.div animate="visible" className="grid gap-1" initial="hidden" variants={staggerContainer}>
                      {careerItems.map((item) => (
                        <motion.div key={item.path} variants={staggerItem}>
                          <Link
                            className="group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-black transition-all duration-200 hover:text-[#0EA5E9]"
                            onClick={() => handleNavClick(item.path)}
                            to={item.path}
                          >
                            <span
                              aria-hidden="true"
                              className="h-0 w-0 shrink-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-l-current border-t-transparent text-[#EA580C] transition-colors duration-200 group-hover:text-[#0EA5E9]"
                            />
                            <span className="block flex-1">{item.label}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>

            {navLinks.slice(4).map((item, index) => (
              <motion.div custom={index + 7} key={item.path} variants={fadeUp}>
                <NavLink
                  className="relative py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
                  onClick={() => handleNavClick(item.path)}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath('')}
                  to={item.path}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`inline-flex items-center gap-2 ${isActive ? 'text-[#0EA5E9]' : ''}`}>
                        {item.icon ? <item.icon className="h-4 w-4 text-sky-500" /> : null}
                        <span>{item.label}</span>
                      </span>
                      {renderUnderline(isActive || hoveredPath === item.path)}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            animate="visible"
            className="hidden items-center lg:flex"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <img
                alt="Oracle Partner"
                className="h-14 w-auto object-contain"
                src="/oracle-partner-logo.png"
              />
            </motion.div>
          </motion.div>

          <motion.button
            animate={{ rotate: menuOpen ? 180 : 0 }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="button-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-200 bg-white text-black transition hover:border-orange-400 hover:bg-orange-500 hover:text-white lg:hidden"
            onClick={handleMenuToggle}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            type="button"
            whileTap={{ scale: 0.97 }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                initial={{ opacity: 0, rotate: 90 }}
                key={menuOpen ? 'close' : 'open'}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-y-auto max-h-[calc(100vh-80px)] border-t border-sky-200 bg-white px-4 pb-6 pt-4 backdrop-blur-xl lg:hidden shadow-lg"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-shell px-0">
              <motion.div animate="visible" className="flex flex-col gap-3" initial="hidden" variants={staggerContainer}>
                
                {/* 1. Home and About */}
                {navLinks.slice(0, 2).map((item) => (
                  <motion.div key={item.path} variants={staggerItem}>
                    <NavLink
                      className="block rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-orange-400 hover:bg-sky-50"
                      onClick={() => handleNavClick(item.path)}
                      to={item.path}
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.icon ? <item.icon className="h-4 w-4 text-sky-500" /> : null}
                        <span>{item.label}</span>
                      </span>
                    </NavLink>
                  </motion.div>
                ))}

                {/* 2. Services Accordion */}
                <motion.div variants={staggerItem} className="flex flex-col">
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-orange-400 hover:bg-sky-50"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-2 pt-2"
                      >
                        <div className="flex flex-col gap-1 border-l-2 border-sky-200 pl-4 py-2 ml-2">
                          {serviceItems.map((item) => (
                            <Link 
                              key={item.path} 
                              to={item.path} 
                              onClick={() => handleNavClick(item.path)} 
                              className="text-sm font-medium text-black hover:text-[#0EA5E9] py-2 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* 3. Case Studies and Insights */}
                {navLinks.slice(2, 4).map((item) => (
                  <motion.div key={item.path} variants={staggerItem}>
                    <NavLink
                      className="block rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-orange-400 hover:bg-sky-50"
                      onClick={() => handleNavClick(item.path)}
                      to={item.path}
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.icon ? <item.icon className="h-4 w-4 text-sky-500" /> : null}
                        <span>{item.label}</span>
                      </span>
                    </NavLink>
                  </motion.div>
                ))}

                {/* 4. Careers Accordion */}
                <motion.div variants={staggerItem} className="flex flex-col">
                  <button 
                    onClick={() => setCareersOpen(!careersOpen)}
                    className="flex w-full items-center justify-between rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-orange-400 hover:bg-sky-50"
                  >
                    <span>Careers</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${careersOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {careersOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-2 pt-2"
                      >
                        <div className="flex flex-col gap-1 border-l-2 border-sky-200 pl-4 py-2 ml-2">
                          {careerItems.map((item) => (
                            <Link 
                              key={item.path} 
                              to={item.path} 
                              onClick={() => handleNavClick(item.path)} 
                              className="text-sm font-medium text-black hover:text-[#0EA5E9] py-2 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* 5. Contact */}
                {navLinks.slice(4).map((item) => (
                  <motion.div key={item.path} variants={staggerItem}>
                    <NavLink
                      className="block rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-orange-400 hover:bg-sky-50"
                      onClick={() => handleNavClick(item.path)}
                      to={item.path}
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.icon ? <item.icon className="h-4 w-4 text-sky-500" /> : null}
                        <span>{item.label}</span>
                      </span>
                    </NavLink>
                  </motion.div>
                ))}

                {/* Oracle Logo */}
                <motion.div variants={staggerItem} className="mt-6 flex justify-center pb-4">
                  <img
                    alt="Oracle Partner"
                    className="h-16 w-auto object-contain"
                    src="/oracle-partner-logo.png"
                  />
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
