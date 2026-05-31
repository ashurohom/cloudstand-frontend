import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    ['Agentic AI and Digital Enablment', '/services/agentic-ai'],
    ['Managed Service', '/services/managed-service'],
    ['Health Check and Advisory Services', '/services/health-check'],
    ['Seasonal Supoort - Benefits and EOY', '/services/seasonal-support'],
    ['Staffing and Training', '/services/staffing-training'],
  ]

  const companyLinks = [
    ['Home', '/'],
    ['AI Labs', '/ai-labs'],
    ['About', '/about'],
    ['Contact', '/contact'],
    ['Careers', '/careers'],
  ]

  const listItemClassName =
    'cursor-pointer text-sm text-sky-100 transition duration-200 hover:text-orange-500'

  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white">
      {/* Top Border Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent" />
      
      <div className="relative z-10 pt-16 pb-0">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:flex lg:justify-between justify-items-start text-left w-full">
            
            {/* Column 1: Company */}
            <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-white">Company</h3>
              <div className="mt-2 h-[2px] w-12 bg-[#EA580C]" />
              <ul className="mt-5 space-y-3">
                {companyLinks.map(([label, to]) => (
                  <li key={to}>
                    <Link className={listItemClassName} to={to}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-white">Services</h3>
              <div className="mt-2 h-[2px] w-12 bg-[#EA580C]" />
              <ul className="mt-5 space-y-3">
                {serviceLinks.map(([label]) => (
                  <li key={label}>
                    <span className="text-sm text-sky-100">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-white">Contact</h3>
              <div className="mt-2 h-[2px] w-12 bg-[#EA580C]" />
              <div className="mt-5 space-y-4 text-sm leading-7 text-sky-100 flex flex-col items-start">
                <p className="font-medium text-white">
                  India | USA
                </p>
                <div className="flex items-center justify-start gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#EA580C]" />
                  <a
                    href="mailto:info@cloudsandconsulting.com"
                    className="cursor-pointer transition duration-200 hover:text-orange-500"
                  >
                    info@cloudsandconsulting.com
                  </a>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#EA580C]" />
                  <div className="flex items-center gap-2">
                    <a href="tel:+91XXXXXXXXX" className="cursor-pointer transition duration-200 hover:text-orange-500">
                      +91-XXXXXXXXX
                    </a>
                    <span className="text-sky-100/50">|</span>
                    <a href="tel:+1XXXXXXXXXX" className="cursor-pointer transition duration-200 hover:text-orange-500">
                      +1-XXX-XXX-XXXX
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Ask an Expert & Partner Logo */}
            <div className="flex flex-col items-center sm:items-start lg:items-center">
              <Link 
                to="/contact" 
                className="inline-block px-6 py-2.5 bg-[#EA580C] hover:bg-[#c2410a] text-white text-sm font-semibold rounded-full transition-colors mb-8 shadow-md"
              >
                Ask an Expert
              </Link>
              
              <div className="flex w-full justify-center sm:justify-start lg:justify-center items-center gap-6 mb-8">
                {/* LinkedIn Icon */}
                <a
                  href="https://linkedin.com/company/cloudstandconsulting"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_24px_rgba(10,102,194,0.6)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="relative z-10 h-8 w-8 fill-current">
                    <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06C21.5 8.58 22 11.1 22 14.38V21h-4v-5.87c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-4z" />
                  </svg>
                </a>
                
                {/* YouTube Icon */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2937] text-sky-100 transition-all duration-300 hover:scale-110 hover:bg-[#FF0000] hover:text-white"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M21.582 6.186a2.665 2.665 0 0 0-1.876-1.884C17.953 3.84 12 3.84 12 3.84s-5.953 0-7.706.462a2.665 2.665 0 0 0-1.876 1.884C1.953 7.95 1.953 12 1.953 12s0 4.05.465 5.814a2.665 2.665 0 0 0 1.876 1.884c1.753.462 7.706.462 7.706.462s5.953 0 7.706-.462a2.665 2.665 0 0 0 1.876-1.884c.465-1.764.465-5.814.465-5.814s0-4.05-.465-5.814ZM9.953 15.545V8.454l6.327 3.546-6.327 3.545Z" />
                  </svg>
                </a>
              </div>

              <div className="flex w-full justify-center sm:justify-start lg:justify-center">
                <img 
                  src="/oracle-partner-logo.png" 
                  alt="Oracle Partner" 
                  className="w-52 h-auto object-contain bg-white px-4 py-3 rounded-md shadow-sm"
                />
              </div>
            </div>

          </div>

          <div className="mt-16 pt-6 pb-6 flex justify-start items-center">
            <p className="text-sm text-sky-100/70 text-left">
              &copy; {currentYear} CloudStand Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
