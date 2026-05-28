import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, Clock3, MonitorPlay, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { blogCategories, blogs } from '../data/blogs'
import { pageVariants, staggerContainer, staggerItem } from '../animations/variants'


const webinarInfo = [
  { label: 'Date', value: '12 Aug 2026', Icon: CalendarDays },
  { label: 'Time', value: '07:00 PM IST', Icon: Clock3 },
  { label: 'Speaker', value: 'Oracle Experts', Icon: Users },
  { label: 'Venue', value: 'Online Event', Icon: MonitorPlay },

]

function Blog() {
  useDocumentTitle('Insights & Perspectives | CloudStand Insights')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') {
      return blogs
    }

    return blogs.filter((blog) => blog.category === activeCategory)
  }, [activeCategory])

  const featuredPost = blogs.find((blog) => blog.featured) ?? blogs[0]
  const gridPosts = filteredBlogs.filter((blog) => blog.slug !== featuredPost.slug)
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 12% 20%, rgba(14,165,233,0.12), transparent 28%), radial-gradient(circle at 88% 18%, rgba(214,59,37,0.08), transparent 24%), linear-gradient(180deg, rgba(255,255,255,1), rgba(255,255,255,1))',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[6%] top-24 h-40 w-40 rounded-full blur-3xl"
          style={{ background: 'rgba(14,165,233,0.12)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-20 h-44 w-44 rounded-full blur-3xl"
          style={{ background: 'rgba(214,59,37,0.10)' }}
        />

        <div className="section-shell relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-3xl">
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center rounded-full bg-[#0EA5E9] px-5 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(14,165,233,0.20)]">
                  Live Webinar
                </span>
              </motion.div>

              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 max-w-4xl font-['Open_Sans'] text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-black sm:text-[44px] xl:text-[48px]"
                initial={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                Future of <span className="text-[#D63B25]">Oracle</span> Cloud Infrastructure
              </motion.h1>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-2xl font-['Open_Sans'] text-base leading-8 text-black/68 sm:text-lg"
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Join Cloud Stand experts to explore OCI modernization, AI integration, enterprise security, and scalable cloud solutions.
              </motion.p>

              <motion.div
                className="mt-8 grid gap-4 sm:grid-cols-2"
                initial="hidden"
                variants={staggerContainer}
                viewport={{ once: true, margin: '-80px' }}
                whileInView="visible"
              >
                {webinarInfo.map(({ label, value, Icon }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="rounded-[24px] border border-[rgba(14,165,233,0.16)] bg-white/88 px-5 py-4 shadow-[0_18px_44px_rgba(14,165,233,0.08)] backdrop-blur-md"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_8px_20px_rgba(14,165,233,0.08)]">
                        <Icon className="h-5 w-5 text-[#0EA5E9]" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">{label}</p>
                        <p className="mt-1 text-base font-semibold text-black">{value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-[#D63B25] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(214,59,37,0.22)] transition-all duration-300 hover:bg-[#EA580C]"
                  type="button"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_12px_26px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#D63B25] hover:text-[#D63B25]"
                  type="button"
                >
                  Learn More
                </button>
              </motion.div>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 text-sm font-medium text-black/70"
                initial={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                Only <span className="font-semibold text-[#D63B25]">50 Seats</span> Left! Reserve your spot now.
              </motion.p>
            </div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="relative"
              initial={{ opacity: 0, x: 28 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                aria-hidden="true"
                className="absolute left-10 top-10 h-44 w-44 rounded-full blur-3xl"
                style={{ background: 'rgba(14,165,233,0.14)' }}
              />
              <div
                aria-hidden="true"
                className="absolute bottom-10 right-8 h-40 w-40 rounded-full blur-3xl"
                style={{ background: 'rgba(214,59,37,0.10)' }}
              />

              <div className="relative overflow-hidden rounded-[34px] border border-[rgba(14,165,233,0.18)] bg-white p-6 shadow-[0_30px_80px_rgba(14,165,233,0.10)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(14,165,233,0.05), transparent 36%, rgba(214,59,37,0.04) 100%)',
                  }}
                />

                <div className="relative z-10 min-h-[420px]">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-[rgba(14,165,233,0.18)] bg-white shadow-[0_18px_36px_rgba(14,165,233,0.10)]">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(14,165,233,0.10)]">
                      <div className="absolute h-20 w-20 rounded-full border border-[rgba(14,165,233,0.18)]" />
                      <div className="absolute h-28 w-28 rounded-full border border-[rgba(214,59,37,0.12)]" />
                      <div className="text-3xl font-bold text-[#0EA5E9]">OCI</div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute left-0 top-10 w-[48%] rounded-[24px] border border-[rgba(14,165,233,0.16)] bg-white/92 p-4 shadow-[0_16px_36px_rgba(14,165,233,0.10)] backdrop-blur-md"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">AI Readiness</p>
                      <div className="h-2.5 w-2.5 rounded-full bg-[#0EA5E9]" />
                    </div>
                    <div className="mt-4 flex items-end gap-2">
                      <div className="h-10 w-3 rounded-full bg-[rgba(14,165,233,0.22)]" />
                      <div className="h-14 w-3 rounded-full bg-[rgba(14,165,233,0.42)]" />
                      <div className="h-20 w-3 rounded-full bg-[#0EA5E9]" />
                      <div className="h-12 w-3 rounded-full bg-[rgba(234,88,12,0.55)]" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute right-0 top-20 w-[46%] rounded-[24px] border border-[rgba(214,59,37,0.14)] bg-white/92 p-4 shadow-[0_16px_36px_rgba(214,59,37,0.10)] backdrop-blur-md"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#D63B25]">Enterprise Security</p>
                    <div className="mt-4 rounded-[18px] border border-[rgba(14,165,233,0.14)] bg-[rgba(14,165,233,0.05)] px-4 py-3">
                      <div className="flex items-center justify-between text-sm font-semibold text-black">
                        <span>Infrastructure Health</span>
                        <span className="text-[#0EA5E9]">98%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-[rgba(14,165,233,0.10)]">
                        <div className="h-2 rounded-full bg-[#0EA5E9]" style={{ width: '98%' }} />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 left-[10%] right-[10%] rounded-[28px] border border-[rgba(14,165,233,0.16)] bg-white/95 p-5 shadow-[0_20px_44px_rgba(0,0,0,0.06)] backdrop-blur-md"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[rgba(14,165,233,0.10)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#0EA5E9]">
                        Cloud Scale
                      </span>
                      <span className="rounded-full bg-[rgba(214,59,37,0.10)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#D63B25]">
                        AI Integration
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-[18px] border border-[rgba(14,165,233,0.14)] bg-white px-3 py-3 text-center shadow-[0_8px_20px_rgba(14,165,233,0.06)]">
                        <div className="text-xl font-bold text-[#0EA5E9]">24/7</div>
                        <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black">Uptime</div>
                      </div>
                      <div className="rounded-[18px] border border-[rgba(214,59,37,0.14)] bg-white px-3 py-3 text-center shadow-[0_8px_20px_rgba(214,59,37,0.06)]">
                        <div className="text-xl font-bold text-[#D63B25]">AI</div>
                        <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black">Insights</div>
                      </div>
                      <div className="rounded-[18px] border border-[rgba(14,165,233,0.14)] bg-white px-3 py-3 text-center shadow-[0_8px_20px_rgba(14,165,233,0.06)]">
                        <div className="text-xl font-bold text-[#EA580C]">OCI</div>
                        <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black">Modernize</div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="absolute left-[16%] top-[56%] h-2.5 w-2.5 rounded-full bg-[#0EA5E9]/70" />
                  <div className="absolute right-[18%] top-[48%] h-2 w-2 rounded-full bg-[#D63B25]/60" />
                  <div className="absolute right-[28%] top-[14%] h-1.5 w-1.5 rounded-full bg-[#EA580C]/70" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* INSIGHTS HUB */}
<section className="bg-white py-24">

  <div className="section-shell">

    {/* HEADER */}
    <div className="max-w-3xl">

      <Badge>Latest Updates</Badge>

      <h2 className="mt-6 text-[32px] md:text-[46px] font-bold leading-[0.96] tracking-[-0.05em] text-black">

        Product Updates,
        <br />

        Webinar Replays &
        <br />

        Recent Activities

      </h2>

      <p className="mt-6 text-[17px] leading-8 text-[#64748b]">

        Stay updated with Oracle Cloud innovations,
        quarterly releases, webinar sessions and
        Cloud Stand enterprise activities.

      </p>

    </div>

    {/* QUARTERLY UPDATES */}
    <div className="mt-16">

      <div className="flex items-center justify-between">

        <h3 className="text-[26px] font-bold text-black">
          Quarterly Updates
        </h3>

        <button className="text-[14px] font-semibold text-[#EA580C]">
          View All
        </button>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {[1,2,3].map((item) => (

          <div
            key={item}
            className="rounded-[28px] border border-[#e2e8f0] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
          >

            <span className="inline-flex rounded-full bg-[#fff1e8] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EA580C]">

              Q2 2026

            </span>

            <h4 className="mt-5 text-[24px] font-bold leading-[1.06] text-black">

              Oracle HCM
              AI Enhancements

            </h4>

            <p className="mt-4 text-[15px] leading-7 text-[#64748b]">

              New AI-driven workforce planning,
              predictive analytics and employee
              experience improvements.

            </p>

            <button className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0EA5E9]">

              Read Update

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        ))}

      </div>

    </div>

    {/* WEBINAR VIDEOS */}
    <div className="mt-24">

      <div className="flex items-center justify-between">

        <h3 className="text-[26px] font-bold text-black">
          Webinar Replays
        </h3>

        <button className="text-[14px] font-semibold text-[#EA580C]">
          Browse Videos
        </button>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {[1,2].map((item) => (

          <div
            key={item}
            className="overflow-hidden rounded-[30px] border border-[#e2e8f0] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
          >

            <div className="relative h-[260px] bg-[#f8fafc]">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                alt="webinar"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="p-7">

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EA580C]">

                Webinar Replay

              </p>

              <h4 className="mt-3 text-[24px] font-bold leading-[1.06] text-black">

                Future of Oracle
                Cloud Infrastructure

              </h4>

              <p className="mt-4 text-[15px] leading-7 text-[#64748b]">

                Explore OCI modernization,
                enterprise AI integration and
                scalable cloud strategies.

              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9] px-6 py-3 text-[13px] font-semibold text-white">

                Watch Replay

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* RECENT ACTIVITIES */}
    <div className="mt-24">

      <div className="flex items-center justify-between">

        <h3 className="text-[26px] font-bold text-black">
          Recent Activities
        </h3>

        <button className="text-[14px] font-semibold text-[#EA580C]">
          View Gallery
        </button>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {[1,2,3].map((item) => (

          <div
            key={item}
            className="overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
          >

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              alt="activity"
              className="h-[240px] w-full object-cover"
            />

            <div className="p-6">

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0EA5E9]">

                June 2026

              </p>

              <h4 className="mt-3 text-[22px] font-bold leading-[1.08] text-black">

                Oracle Cloud
                Leadership Workshop

              </h4>

              <p className="mt-4 text-[15px] leading-7 text-[#64748b]">

                Cloud Stand experts conducted
                enterprise transformation workshops
                for global business leaders.

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
{/* INSIGHTS HUB */}
<section className="bg-white py-24">

  <div className="section-shell">

    {/* HEADER */}
    <div className="max-w-3xl">

      <Badge>Latest Updates</Badge>

      <h2 className="mt-6 text-[34px] md:text-[52px] font-bold leading-[0.94] tracking-[-0.06em] text-black">

        Oracle Cloud
        <br />

        Insights Hub

      </h2>

      <p className="mt-6 text-[17px] leading-8 text-[#64748b]">

        Discover quarterly Oracle Cloud updates,
        enterprise transformation insights,
        webinar replays and Cloud Stand activities.

      </p>

    </div>

    {/* FEATURED VIDEO */}
    <div className="mt-16">

      <div className="overflow-hidden rounded-[40px] border border-[#e2e8f0] bg-black shadow-[0_30px_80px_rgba(15,23,42,0.10)]">

        <button
          onClick={() => setActiveVideo('/videos/webinar.mp4')}
          className="group relative block w-full text-left"
          type="button"
        >

          {/* VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[620px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          >

            <source
              src="/videos/webinar.mp4"
              type="video/mp4"
            />

          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 backdrop-blur-md transition-all duration-300 group-hover:scale-110">

              <div className="ml-1 border-y-[14px] border-l-[22px] border-y-transparent border-l-black" />

            </div>

          </div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">

            <div className="max-w-3xl">

              <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">

                Webinar Replay

              </span>

              <h3 className="mt-6 text-[34px] md:text-[58px] font-bold leading-[0.92] tracking-[-0.06em] text-white">

                Future of Oracle
                <br />

                Cloud Infrastructure

              </h3>

              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/75">

                Explore OCI modernization,
                AI-powered enterprise systems,
                cloud transformation strategies
                and scalable infrastructure solutions.

              </p>

              {/* META */}
              <div className="mt-8 flex flex-wrap gap-4">

                <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">

                    Duration

                  </p>

                  <p className="mt-1 text-[14px] font-semibold text-white">

                    45 Minutes

                  </p>

                </div>

                <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">

                    Speaker

                  </p>

                  <p className="mt-1 text-[14px] font-semibold text-white">

                    Oracle Experts

                  </p>

                </div>

              </div>

            </div>

          </div>

        </button>

      </div>

    </div>

    {/* QUARTERLY UPDATES */}
    <div className="mt-24">

      <div className="flex items-center justify-between">

        <h3 className="text-[28px] font-bold text-black">
          Quarterly Updates
        </h3>

        <button className="text-[14px] font-semibold text-[#EA580C]">
          View All
        </button>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {[1,2,3].map((item) => (

          <div
            key={item}
            className="rounded-[30px] border border-[#e2e8f0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
          >

            <span className="inline-flex rounded-full bg-[#fff1e8] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EA580C]">

              Q2 2026

            </span>

            <h4 className="mt-5 text-[26px] font-bold leading-[1.02] tracking-[-0.04em] text-black">

              Oracle HCM
              AI Enhancements

            </h4>

            <p className="mt-5 text-[15px] leading-8 text-[#64748b]">

              New AI-powered workforce planning,
              predictive analytics and employee
              experience modernization updates.

            </p>

            <button className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0EA5E9]">

              Read Update

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

{/* VIDEO MODAL */}
{activeVideo && (

  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6">

    {/* CLOSE */}
    <button
      onClick={() => setActiveVideo(null)}
      className="absolute right-6 top-6 text-5xl font-light text-white"
      type="button"
    >

      ×

    </button>

    {/* VIDEO */}
    <video
      controls
      autoPlay
      className="max-h-[90vh] w-full max-w-6xl rounded-[24px] bg-black"
    >

      <source
        src={activeVideo}
        type="video/mp4"
      />

    </video>

  </div>

)}
      
    </motion.main>
  )
}

export default Blog
