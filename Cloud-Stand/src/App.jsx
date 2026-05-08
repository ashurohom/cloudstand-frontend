import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Services />} path="/services" />
        <Route element={<ServiceDetail />} path="/services/:slug" />
        <Route element={<CaseStudies />} path="/case-studies" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Careers />} path="/careers" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
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
