import { useEffect, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AICloudBackground from '../components/ui/AICloudBackground'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import HeroTitle from '../components/ui/HeroTitle'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { blogCategories, blogs } from '../data/blogs'
import { pageVariants, staggerContainer, staggerItem } from '../animations/variants'

function Blog() {
  useDocumentTitle('Insights & Perspectives | CloudStand Blog')
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

  return (
    <motion.main animate="animate" className="pt-20" exit="exit" initial="initial" variants={pageVariants}>
      <section className="section-padding hero-mesh gpu-layer relative overflow-hidden">
        <AICloudBackground />
        <div className="section-shell relative z-10">
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Insights & Perspectives</Badge>
          </motion.div>
          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[1.02] tracking-[-0.03em] text-slate-900 md:text-4xl lg:text-5xl">
            <HeroTitle text="Insights & Perspectives" />
          </h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-text-muted"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Practical thinking on Oracle Cloud transformation, delivery, integration, analytics, and enterprise AI.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="overflow-hidden">
                  <motion.img
                    alt={featuredPost.title}
                    className="h-full min-h-[320px] w-full object-cover"
                    loading="lazy"
                    src={featuredPost.image}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.04 }}
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <Badge>{featuredPost.category}</Badge>
                  <h2 className="mt-5 text-4xl font-bold text-slate-900">{featuredPost.title}</h2>
                  <p className="mt-5 text-base leading-8 text-text-muted">{featuredPost.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted">
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <motion.button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" type="button" whileHover={{ x: 4 }}>
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="mt-12">
            <SectionTitle eyebrow="Categories" title="Browse articles by topic" />
            <div className="mb-10 flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  className={`button-ring rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? 'border-accent bg-accent text-white'
                      : 'border-[#d7e5ff] bg-white text-text-muted hover:border-accent/40 hover:text-slate-900'
                  }`}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-80px' }}
              whileInView="visible"
            >
              {gridPosts.map((post) => (
                <motion.div key={post.slug} variants={staggerItem}>
                  <Card className="h-full overflow-hidden">
                    <div className="overflow-hidden">
                      <motion.img
                        alt={post.title}
                        className="h-52 w-full object-cover"
                        loading="lazy"
                        src={post.image}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.04 }}
                      />
                    </div>
                    <div className="p-6">
                      <motion.div whileHover={{ scale: 1.06 }}>
                        <Badge>{post.category}</Badge>
                      </motion.div>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{post.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-text-muted">{post.excerpt}</p>
                      <div className="mt-5 flex gap-4 text-sm text-text-muted">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <motion.button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" type="button" whileHover={{ x: 4 }}>
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Blog
