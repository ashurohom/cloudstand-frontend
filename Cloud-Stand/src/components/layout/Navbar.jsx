import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Cloud, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { services } from '../../data/services'

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      setServicesOpen(false)
    }
  }, [menuOpen])

  const serviceItems = useMemo(
    () => services.map((service) => ({ label: service.title, path: `/services/${service.slug}`, tagline: service.tagline })),
    [],
  )

  const navClassName = scrolled
    ? 'border-b border-[#d7e5ff] bg-white/90 shadow-soft backdrop-blur-xl'
    : 'border-b border-[#d7e5ff]/60 bg-white/85 backdrop-blur-xl'

  const activeClass = ({ isActive }) =>
    `relative py-2 text-sm transition-colors ${
      isActive ? 'text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent' : 'text-text-muted hover:text-slate-900'
    }`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClassName}`}>
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link className="flex items-center gap-3" to="/" aria-label="CloudStand home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light shadow-glow">
              <Cloud className="h-5 w-5 text-white" />
            </span>
            <div className="leading-tight">
              <div className="font-syne text-lg font-bold text-slate-900">CloudStand</div>
              <div className="text-xs uppercase tracking-[0.24em] text-text-muted">Consulting</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.slice(0, 2).map((item) => (
              <NavLink key={item.path} className={activeClass} to={item.path}>
                {item.label}
              </NavLink>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                className={({ isActive }) =>
                  `relative flex items-center gap-1 py-2 text-sm transition-colors hover:text-slate-900 ${
                    isActive || servicesOpen ? 'text-slate-900' : 'text-text-muted'
                  }`
                }
                to="/services"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </NavLink>
              <AnimatePresence>
                {servicesOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.24 }}
                    className="absolute left-1/2 top-full mt-5 w-[680px] -translate-x-1/2 rounded-[28px] border border-[#d7e5ff] bg-white/95 p-6 backdrop-blur-xl"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.path}
                          className="rounded-2xl border border-[#d7e5ff] bg-[#f8fbff] p-4 transition-all duration-300 hover:border-accent/40 hover:bg-blue-50"
                          to={item.path}
                        >
                          <div className="mb-2 text-sm font-semibold text-slate-900">{item.label}</div>
                          <p className="text-sm leading-6 text-text-muted">{item.tagline}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((item) => (
              <NavLink key={item.path} className={activeClass} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/contact" variant="ghost">
              Contact
            </Button>
            <Button to="/contact" variant="solid">
              Get a Demo
            </Button>
          </div>

          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="button-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e5ff] bg-white text-slate-900 transition hover:border-accent/40 hover:bg-blue-50 lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="border-t border-[#d7e5ff] bg-white/95 px-4 pb-6 pt-4 backdrop-blur-xl lg:hidden"
          >
            <div className="section-shell px-0">
              <div className="flex flex-col gap-3">
                {[...navLinks.slice(0, 2), { label: 'Services', path: '/services' }, ...navLinks.slice(2)].map((item) => (
                  <NavLink
                    key={item.path}
                    className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-sm text-slate-900 transition hover:border-accent/40"
                    onClick={() => setMenuOpen(false)}
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 rounded-[26px] border border-[#d7e5ff] bg-blue-50/70 p-4">
                <div className="mb-3 text-xs uppercase tracking-[0.24em] text-text-muted">Services</div>
                <div className="grid gap-3">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      className="rounded-2xl border border-[#d7e5ff] bg-white px-4 py-3 text-sm transition hover:border-accent/40"
                      onClick={() => setMenuOpen(false)}
                      to={item.path}
                    >
                      <div className="font-medium text-slate-900">{item.label}</div>
                      <div className="mt-1 text-text-muted">{item.tagline}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button className="w-full" to="/contact" variant="ghost">
                  Contact
                </Button>
                <Button className="w-full" to="/contact" variant="solid">
                  Get a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
