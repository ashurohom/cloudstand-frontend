import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { services } from '../../data/services'
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Background Designs', path: '/background-designs' },
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
        path: `/services/${service.slug}`,
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
            <Link aria-label="CloudStand home" className="flex items-center gap-3" to="/">
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
              <NavLink
                className="relative flex items-center gap-1 py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
                to="/services"
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive || servicesOpen ? 'text-[#0EA5E9]' : ''}>Services</span>
                    <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                    {renderUnderline(isActive || servicesOpen || hoveredPath === '/services')}
                  </>
                )}
              </NavLink>

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

            {navLinks.slice(2, 5).map((item, index) => (
              <motion.div custom={index + 4} key={item.path} variants={fadeUp}>
                <NavLink
                  className="relative py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
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
              custom={7}
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
              <NavLink
                className="relative flex items-center gap-1 py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
                to="/careers"
              >
                <span className={isCareersActive || careersOpen ? 'text-[#0EA5E9]' : ''}>Careers</span>
                <motion.span animate={{ rotate: careersOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                {renderUnderline(isCareersActive || careersOpen || hoveredPath === '/careers')}
              </NavLink>

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

            {navLinks.slice(5).map((item, index) => (
              <motion.div custom={index + 8} key={item.path} variants={fadeUp}>
                <NavLink
                  className="relative py-2 text-sm text-black transition-colors hover:text-[#0EA5E9]"
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
            className="overflow-hidden border-t border-sky-200 bg-white px-4 pb-6 pt-4 backdrop-blur-xl lg:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-shell px-0">
              <motion.div animate="visible" className="flex flex-col gap-3" initial="hidden" variants={staggerContainer}>
                {[...navLinks.slice(0, 2), { label: 'Services', path: '/services' }, ...navLinks.slice(2)].map((item) => (
                  <motion.div key={item.path} variants={staggerItem}>
                    <NavLink
                      className="block rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm text-black transition hover:border-orange-400 hover:bg-sky-50"
                      onClick={() => setMenuOpen(false)}
                      to={item.path}
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.icon ? <item.icon className="h-4 w-4 text-sky-500" /> : null}
                        <span>{item.label}</span>
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-[26px] border border-sky-200 bg-sky-50 p-4"
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: 0.08 }}
              >
                <div className="mb-3 text-xs uppercase tracking-[0.24em] text-black">Services</div>
                <motion.div animate="visible" className="grid gap-3" initial="hidden" variants={staggerContainer}>
                  {serviceItems.map((item) => (
                    <motion.div key={item.path} variants={staggerItem}>
                      <Link
                        className="block rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm transition hover:border-orange-400 hover:bg-sky-50"
                        onClick={() => setMenuOpen(false)}
                        to={item.path}
                      >
                        <div className="font-medium text-black">{item.label}</div>
                        <div className="mt-1 text-black">{item.tagline}</div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-[26px] border border-sky-200 bg-white p-4"
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="mb-3 text-xs uppercase tracking-[0.24em] text-black">Careers</div>
                <motion.div animate="visible" className="grid gap-3" initial="hidden" variants={staggerContainer}>
                  {careerItems.map((item) => (
                    <motion.div key={item.path} variants={staggerItem}>
                      <Link
                        className="block rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium text-black transition hover:border-orange-400 hover:bg-white"
                        onClick={() => setMenuOpen(false)}
                        to={item.path}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex justify-center rounded-[26px] border border-sky-200 bg-white p-4"
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: 0.12 }}
              >
                <img
                  alt="Oracle Partner"
                  className="h-16 w-auto object-contain"
                  src="/oracle-partner-logo.png"
                />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
