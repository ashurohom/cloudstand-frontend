import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    ['Oracle HCM Cloud', '/services/hcm'],
    ['Oracle ERP Cloud', '/services/erp'],
    ['Oracle Payroll', '/services/payroll'],
    ['Oracle Integration Cloud', '/services/oic'],
    ['BI & Analytics', '/services/bi-analytics'],
    ['AI Solutions', '/services/ai-solutions'],
  ]

  const companyLinks = [
    ['About Us', '/about'],
    ['Careers', '/careers'],
    ['Blog', '/blog'],
    ['Case Studies', '/case-studies'],
    ['Resolve Query', '/resolve-query'],
  ]

  const listItemClassName =
    'cursor-pointer text-sm text-gray-300 transition duration-200 hover:text-orange-400'

  return (
    <footer className="bg-[#0A0F1F] text-white">
      <div className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="max-w-xs text-sm leading-7 text-gray-300">
                Oracle Cloud Specialists since 2022, delivering end-to-end HCM, ERP, Payroll, OIC, BI & AI solutions.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/cloudstandconsulting"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 transition duration-200 hover:text-orange-400"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06C21.5 8.58 22 11.1 22 14.38V21h-4v-5.87c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-4z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@cloudstand.com"
                  className="text-gray-300 transition duration-200 hover:text-orange-400"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919049020793"
                  className="text-gray-300 transition duration-200 hover:text-orange-400"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                &copy; {currentYear} CloudStand Consulting. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white">Services</h3>
              <ul className="mt-5 space-y-3">
                {serviceLinks.map(([label, to]) => (
                  <li key={to}>
                    <Link className={listItemClassName} to={to}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white">Company</h3>
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

            <div>
              <h3 className="text-base font-semibold text-white">Get in Touch</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-300">
                <p className="cursor-pointer transition duration-200 hover:text-orange-400">
                  Office No.19, Nirvana Hub, Z Corner, Mundhwa-Manjari Rd, Manjri Bk., Pune - 412307
                </p>
                <a
                  href="tel:+919049020793"
                  className="block cursor-pointer transition duration-200 hover:text-orange-400"
                >
                  +91 9049020793
                </a>
                <a
                  href="mailto:info@cloudstand.com"
                  className="block cursor-pointer transition duration-200 hover:text-orange-400"
                >
                  info@cloudstand.com
                </a>
                <a
                  href="mailto:careers@cloudstand.com"
                  className="block cursor-pointer transition duration-200 hover:text-orange-400"
                >
                  careers@cloudstand.com
                </a>
                <p className="cursor-pointer transition duration-200 hover:text-orange-400">
                  Mon - Fri, 9:30 AM - 6:30 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
