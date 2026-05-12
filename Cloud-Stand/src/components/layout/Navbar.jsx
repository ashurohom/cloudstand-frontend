import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { services } from '../../data/services'
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState('')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  const serviceItems = useMemo(
    () => services.map((service) => ({ label: service.title, path: `/services/${service.slug}`, tagline: service.tagline })),
    [],
  )

  const navClassName = scrolled
    ? 'border-b border-[#d7e5ff] bg-[rgba(255,255,255,0.92)] shadow-[0_4px_24px_rgba(0,87,255,0.06)] backdrop-blur-[20px]'
    : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-none'

  const handleMenuToggle = () => {
    setMenuOpen((current) => {
      const next = !current
      if (!next) {
        setServicesOpen(false)
      }
      return next
    })
  }

  const renderUnderline = (active) =>
    active ? (
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent"
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
                  className="relative py-2 text-sm text-text-muted transition-colors hover:text-slate-900"
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath('')}
                  to={item.path}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`inline-flex items-center gap-2 ${isActive ? 'text-slate-900' : ''}`}>
                        {item.icon ? <item.icon className="h-4 w-4 text-accent" /> : null}
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
              }}
              onMouseLeave={() => {
                setHoveredPath('')
                setServicesOpen(false)
              }}
              variants={fadeUp}
            >
              <NavLink
                className="relative flex items-center gap-1 py-2 text-sm text-text-muted transition-colors hover:text-slate-900"
                to="/services"
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive || servicesOpen ? 'text-slate-900' : ''}>Services</span>
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
                    className="absolute left-1/2 top-full mt-5 w-[680px] -translate-x-1/2 rounded-[28px] border border-[#d7e5ff] bg-white/95 p-6 backdrop-blur-xl"
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <motion.div animate="visible" className="grid grid-cols-2 gap-4" initial="hidden" variants={staggerContainer}>
                      {serviceItems.map((item) => (
                        <motion.div key={item.path} variants={staggerItem}>
                          <Link
                            className="block rounded-2xl border border-[#d7e5ff] bg-[#f8fbff] p-4 transition-all duration-300 hover:border-accent/40 hover:bg-blue-50"
                            to={item.path}
                          >
                            <div className="mb-2 text-sm font-semibold text-slate-900">{item.label}</div>
                            <p className="text-sm leading-6 text-text-muted">{item.tagline}</p>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>

            {navLinks.slice(2).map((item, index) => (
              <motion.div custom={index + 3} key={item.path} variants={fadeUp}>
                <NavLink
                  className="relative py-2 text-sm text-text-muted transition-colors hover:text-slate-900"
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath('')}
                  to={item.path}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`inline-flex items-center gap-2 ${isActive ? 'text-slate-900' : ''}`}>
                        {item.icon ? <item.icon className="h-4 w-4 text-accent" /> : null}
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
            className="hidden items-center gap-3 lg:flex"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <Button to="/contact" variant="ghost">
                Contact
              </Button>
            </motion.div>
            <motion.div variants={fadeUp}>
              <motion.div
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0,87,255,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Button to="/contact" variant="solid">
                  Get a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.button
            animate={{ rotate: menuOpen ? 180 : 0 }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="button-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e5ff] bg-white text-slate-900 transition hover:border-accent/40 hover:bg-blue-50 lg:hidden"
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
            className="overflow-hidden border-t border-[#d7e5ff] bg-white/95 px-4 pb-6 pt-4 backdrop-blur-xl lg:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-shell px-0">
              <motion.div animate="visible" className="flex flex-col gap-3" initial="hidden" variants={staggerContainer}>
                {[...navLinks.slice(0, 2), { label: 'Services', path: '/services' }, ...navLinks.slice(2)].map((item) => (
                  <motion.div key={item.path} variants={staggerItem}>
                    <NavLink
                      className="block rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-sm text-slate-900 transition hover:border-accent/40"
                      onClick={() => setMenuOpen(false)}
                      to={item.path}
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.icon ? <item.icon className="h-4 w-4 text-accent" /> : null}
                        <span>{item.label}</span>
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-[26px] border border-[#d7e5ff] bg-blue-50/70 p-4"
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: 0.08 }}
              >
                <div className="mb-3 text-xs uppercase tracking-[0.24em] text-text-muted">Services</div>
                <motion.div animate="visible" className="grid gap-3" initial="hidden" variants={staggerContainer}>
                  {serviceItems.map((item) => (
                    <motion.div key={item.path} variants={staggerItem}>
                      <Link
                        className="block rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-sm transition hover:border-accent/40"
                        onClick={() => setMenuOpen(false)}
                        to={item.path}
                      >
                        <div className="font-medium text-slate-900">{item.label}</div>
                        <div className="mt-1 text-text-muted">{item.tagline}</div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                animate="visible"
                className="mt-4 grid grid-cols-2 gap-3"
                initial="hidden"
                variants={staggerContainer}
              >
                <motion.div variants={staggerItem}>
                  <Button className="w-full" to="/contact" variant="ghost">
                    Contact
                  </Button>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Button className="w-full" to="/contact" variant="solid">
                    Get a Demo
                  </Button>
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
