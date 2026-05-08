import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AIChatbot from './components/ui/AIChatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div {...pageTransition}>
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <motion.div {...pageTransition}>
              <ServiceDetail />
            </motion.div>
          }
        />
        <Route
          path="/case-studies"
          element={
            <motion.div {...pageTransition}>
              <CaseStudies />
            </motion.div>
          }
        />
        <Route
          path="/blog"
          element={
            <motion.div {...pageTransition}>
              <Blog />
            </motion.div>
          }
        />
        <Route
          path="/careers"
          element={
            <motion.div {...pageTransition}>
              <Careers />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div {...pageTransition}>
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-primary text-text">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <AIChatbot />
      </div>
    </BrowserRouter>
  )
}

export default App
