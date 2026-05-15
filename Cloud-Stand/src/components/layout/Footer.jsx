import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

function FooterCard({ children, className = '' }) {
  return (
    <div className={`group relative h-full overflow-hidden rounded-[28px] ${className}`}>
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5ff]" />
      <div className="absolute inset-[1px] rounded-[27px] border border-white/80" />
      <div className="absolute inset-0 rounded-[28px] border border-[#d7e5ff] shadow-[0_22px_50px_rgba(15,23,42,0.16)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_30px_70px_rgba(0,87,255,0.18)]" />
      <div className="absolute left-6 right-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-[#0057ff] via-[#64b5ff] to-[#8be0ff]" />
      <div className="absolute -right-10 top-8 h-28 w-28 rounded-full bg-[#0057ff]/10 blur-3xl transition-all duration-300 group-hover:bg-[#0057ff]/15" />
      <div className="absolute -left-8 bottom-6 h-24 w-24 rounded-full bg-[#8be0ff]/20 blur-3xl" />
      <div className="absolute right-5 top-5 h-3 w-3 rounded-full bg-[#0057ff]/12 ring-4 ring-[#eef5ff]" />
      <div className="relative h-full p-5">{children}</div>
    </div>
  )
}

function Footer() {
  const companyLinks = [
    ['About', '/about'],
    ['Careers', '/careers'],
    ['Blog', '/blog'],
    ['Resolve Query', '/resolve-query'],
    ['Contact', '/contact'],
  ]

  return (
    <footer className="hero-particles hero-mesh relative isolate overflow-hidden border-t border-[#d7e5ff] bg-navy">
      <div className="absolute inset-0 opacity-90" />
      <div className="orb-drift absolute left-[6%] top-8 h-32 w-32 rounded-full bg-white/8 blur-3xl" />
      <div className="orb-drift absolute right-[10%] top-16 h-40 w-40 rounded-full bg-[#3d8bff]/18 blur-3xl" />
      <div className="orb-drift absolute bottom-10 left-[28%] h-28 w-28 rounded-full bg-[#8be0ff]/12 blur-3xl" />
      <div className="absolute left-[10%] top-12 h-16 w-28 rounded-full border border-white/12 bg-white/6 blur-[1px]" />
      <div className="absolute right-[18%] top-24 h-12 w-24 rounded-full border border-white/10 bg-white/5 blur-[1px]" />
      <div className="absolute left-[22%] bottom-20 h-14 w-24 rounded-full border border-white/10 bg-white/5 blur-[1px]" />

      <div className="section-shell relative z-10 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FooterCard>
            <img
              src="/cloud-stand-logo.png"
              alt="CloudStand Consulting"
              className="mb-4 h-12 w-auto object-contain"
            />
            <p className="mb-4 text-sm leading-relaxed text-[#5f6f89]">
              Empowering businesses with Oracle Cloud. End-to-end implementation, support and training for global enterprises.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/cloudstandconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e5ff] bg-[#eef5ff] transition-all duration-200 hover:border-[#0057ff] hover:bg-[#0057ff]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-[#0057ff] transition-colors group-hover:fill-white"
                >
                  <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06C21.5 8.58 22 11.1 22 14.38V21h-4v-5.87c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-4z" />
                </svg>
              </a>
              <a
                href="mailto:hr@cloudstandconsulting.com"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e5ff] bg-[#eef5ff] transition-all duration-200 hover:border-[#0057ff] hover:bg-[#0057ff]"
              >
                <Mail className="h-4 w-4 text-[#0057ff] transition-colors group-hover:text-white" />
              </a>
              <a
                href="tel:+919049020793"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e5ff] bg-[#eef5ff] transition-all duration-200 hover:border-[#0057ff] hover:bg-[#0057ff]"
              >
                <Phone className="h-4 w-4 text-[#0057ff] transition-colors group-hover:text-white" />
              </a>
            </div>
          </FooterCard>

          <FooterCard>
            <h3 className="text-sm font-semibold text-[#0f172a]">Services</h3>
            <div className="mb-4 mt-1 h-0.5 w-8 rounded-full bg-[#0057ff]" />
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  className="block text-sm text-[#5f6f89] transition-colors duration-200 hover:text-[#0057ff]"
                  to={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </FooterCard>

          <FooterCard>
            <h3 className="text-sm font-semibold text-[#0f172a]">Company</h3>
            <div className="mb-4 mt-1 h-0.5 w-8 rounded-full bg-[#0057ff]" />
            <div className="space-y-3">
              {companyLinks.map(([label, path]) => (
                <Link
                  key={path}
                  className="block text-sm text-[#5f6f89] transition-colors duration-200 hover:text-[#0057ff]"
                  to={path}
                >
                  {label}
                </Link>
              ))}
            </div>
          </FooterCard>

          <FooterCard>
            <h3 className="text-sm font-semibold text-[#0f172a]">Contact</h3>
            <div className="mb-4 mt-1 h-0.5 w-8 rounded-full bg-[#0057ff]" />
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-[#0057ff]" />
                <p className="text-sm text-[#5f6f89]">Office No.19, Nirvana Hub, Z Corner, Mundhwa-Manjari Rd, Manjri Bk., Pune - 412307</p>
              </div>

              <div className="space-y-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-[#5f6f89]">
                  Contact Numbers
                </p>

                <a href="tel:+919049020793" className="group flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 overflow-hidden rounded-full border border-[#d7e5ff] shadow-sm">
                    <svg aria-hidden="true" viewBox="0 0 60 60" className="h-full w-full">
                      <rect width="60" height="20" fill="#ff9933" />
                      <rect y="20" width="60" height="20" fill="#ffffff" />
                      <rect y="40" width="60" height="20" fill="#138808" />
                      <circle cx="30" cy="30" r="5.5" fill="none" stroke="#000080" strokeWidth="1.6" />
                      <circle cx="30" cy="30" r="0.9" fill="#000080" />
                      <g stroke="#000080" strokeWidth="0.9" strokeLinecap="round">
                        <line x1="30" y1="24.5" x2="30" y2="35.5" />
                        <line x1="24.5" y1="30" x2="35.5" y2="30" />
                        <line x1="26.1" y1="26.1" x2="33.9" y2="33.9" />
                        <line x1="33.9" y1="26.1" x2="26.1" y2="33.9" />
                        <line x1="27.2" y1="24.9" x2="32.8" y2="35.1" />
                        <line x1="32.8" y1="24.9" x2="27.2" y2="35.1" />
                        <line x1="24.9" y1="27.2" x2="35.1" y2="32.8" />
                        <line x1="35.1" y1="27.2" x2="24.9" y2="32.8" />
                      </g>
                    </svg>
                  </span>
                  <p className="text-sm font-medium text-[#0f172a] transition-colors group-hover:text-[#0057ff]">
                    +91 9049020793
                  </p>
                </a>
              </div>

              <a href="mailto:hr@cloudstandconsulting.com" className="group flex gap-3">
                <Mail className="h-4 w-4 flex-none text-[#0057ff]" />
                <span className="text-sm text-[#5f6f89] transition-colors duration-200 group-hover:text-[#0057ff]">
                  hr@cloudstandconsulting.com
                </span>
              </a>

              <div className="flex gap-3">
                <Clock3 className="h-4 w-4 flex-none text-[#0057ff]" />
                <span className="text-sm text-[#5f6f89]">Monday to Friday, 9:30 AM - 6:30 PM IST</span>
              </div>
            </div>
          </FooterCard>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#d7e5ff] bg-[#f5f9ff] py-5">
        <div className="section-shell flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-sm text-[#5f6f89]">
            &copy; 2024 CloudStand Consulting (OPC) Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm text-[#5f6f89]">CIN: U72900PN2022OPC217392</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
