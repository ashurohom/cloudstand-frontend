import { BriefcaseBusiness, Mail, MapPin, Phone, PlayCircle, SendHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

function Footer() {
  return (
    <footer className="relative border-t border-[#d7e5ff] bg-navy">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="section-shell py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-5">
            <div>
              <img
                alt="CloudStand Consulting"
                className="h-14 w-auto object-contain sm:h-16"
                src="/cloud-stand-logo.png"
              />
              <p className="mt-3 max-w-sm text-sm leading-7 text-blue-100">
                Empowering Businesses with Oracle Cloud through implementation, support, training, and practical transformation strategy.
              </p>
            </div>
            <div className="flex gap-3">
              {[BriefcaseBusiness, SendHorizontal, PlayCircle].map((Icon, index) => (
                <a
                  key={index}
                  aria-label="Social media link"
                  className="button-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-blue-100 transition hover:border-accent/50 hover:text-white"
                  href="#"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="mt-5 space-y-3 text-sm text-blue-100">
              {services.map((service) => (
                <Link key={service.slug} className="block transition hover:text-white" to={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="mt-5 space-y-3 text-sm text-blue-100">
              {[
                ['About', '/about'],
                ['Careers', '/careers'],
                ['Blog', '/blog'],
                ['Resolve Query', '/resolve-query'],
                ['Contact', '/contact'],
              ].map(([label, path]) => (
                <Link key={path} className="block transition hover:text-white" to={path}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-blue-100">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-none text-accent" />
                <span>Office No.19, Nirvana Hub, Z Corner, Mundhwa-Manjari Rd, Manjri Bk., Pune - 412307</span>
              </div>
              <div className="flex gap-3">
                <Phone className="h-4 w-4 flex-none text-accent" />
                <span>+91 9049020793</span>
              </div>
              <div className="flex gap-3">
                <Mail className="h-4 w-4 flex-none text-accent" />
                <span>hr@cloudstandconsulting.com</span>
              </div>
              <div className="rounded-[24px] border border-[#d7e5ff] bg-white p-4">
                <div className="mb-3 text-sm font-medium text-slate-900">Newsletter</div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    aria-label="Newsletter email"
                    className="w-full rounded-full border border-[#d7e5ff] bg-white px-4 py-3 text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none"
                    placeholder="Your email"
                    type="email"
                  />
                  <button
                    className="button-ring rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-light"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-blue-100 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 CloudStand Consulting (OPC) Pvt. Ltd. All rights reserved.</p>
          <p>CIN: U72900PN2022OPC217392</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
