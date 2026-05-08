import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionTitle from '../components/ui/SectionTitle'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { blogCategories, blogs } from '../data/blogs'

function Blog() {
  useDocumentTitle('Insights & Perspectives | CloudStand Blog')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') {
      return blogs
    }

    return blogs.filter((blog) => blog.category === activeCategory)
  }, [activeCategory])

  const featuredPost = blogs.find((blog) => blog.featured) ?? blogs[0]
  const gridPosts = filteredBlogs.filter((blog) => blog.slug !== featuredPost.slug)

  return (
    <main className="pt-20">
      <section className="section-padding hero-mesh">
        <div className="section-shell">
          <Badge>Insights & Perspectives</Badge>
          <h1 className="mt-6 max-w-5xl font-['DM_Sans'] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[5.25rem]">
            Oracle Cloud Insights for Leaders Driving Change
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            Practical thinking on Oracle Cloud transformation, delivery, integration, analytics, and enterprise AI.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-shell">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <img alt={featuredPost.title} className="h-full min-h-[320px] w-full object-cover" src={featuredPost.image} />
              <div className="p-8 lg:p-10">
                <Badge>{featuredPost.category}</Badge>
                <h2 className="mt-5 text-4xl font-bold text-slate-900">{featuredPost.title}</h2>
                <p className="mt-5 text-base leading-8 text-text-muted">{featuredPost.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" type="button">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Card>

          <div className="mt-12">
            <SectionTitle eyebrow="Categories" title="Browse articles by topic" />
            <div className="mb-10 flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  className={`button-ring rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? 'border-accent bg-accent text-white'
                      : 'border-[#d7e5ff] bg-white text-text-muted hover:border-accent/40 hover:text-slate-900'
                  }`}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {gridPosts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.06}>
                  <Card className="h-full overflow-hidden">
                    <img alt={post.title} className="h-52 w-full object-cover" src={post.image} />
                    <div className="p-6">
                      <Badge>{post.category}</Badge>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{post.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-text-muted">{post.excerpt}</p>
                      <div className="mt-5 flex gap-4 text-sm text-text-muted">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent" type="button">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
