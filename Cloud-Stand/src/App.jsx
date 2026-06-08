import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AIChatbot from './components/ui/AIChatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ResolveQuery from './pages/ResolveQuery'
import BackgroundDesigns from './pages/BackgroundDesigns'
import TeamCloudStand from './pages/TeamCloudStand'
import EmpoweringTalent from './pages/EmpoweringTalent'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Services />} path="/services" />
        <Route element={<CaseStudies />} path="/case-studies" />
        <Route element={<CaseStudyDetail />} path="/case-studies/:slug" />
        <Route element={<Blog />} path="/insights" />
        <Route element={<Navigate replace to="/insights" />} path="/blog" />
        <Route element={<TeamCloudStand />} path="/team-cloudstand" />
        <Route element={<EmpoweringTalent />} path="/empowering-talent" />
        <Route element={<ResolveQuery />} path="/rescue-hub" />
        <Route element={<ResolveQuery />} path="/resolve-query" />
        <Route element={<Careers />} path="/careers" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<BackgroundDesigns />} path="/background-designs" />
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
