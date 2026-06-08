import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Badge from '../components/ui/Badge'
import { pageVariants, staggerContainer } from '../animations/variants'
import { API_ENDPOINTS } from '../config/api'

function TeamCloudStand() {
  useDocumentTitle('Team CloudStand | Careers')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // State for images from Backend API
  const [heroImage, setHeroImage] = useState('/Slider/slider-22.jpeg')
  const [galleryImages, setGalleryImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // --- API INTEGRATION ---
    // Fetch images from backend here
    const fetchTeamImages = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(API_ENDPOINTS.teamCloudStand);
        if (!response.ok) throw new Error('Failed to fetch team images');
        
        const data = await response.json();
        
        if (data.heroImage) setHeroImage(data.heroImage);
        if (data.galleryImages && Array.isArray(data.galleryImages)) {
          setGalleryImages(data.galleryImages);
        }
      } catch (error) {
        console.error('Error fetching team images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeamImages()
  }, [])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  return (
    <motion.main 
      animate="animate" 
      className="pt-20" 
      exit="exit" 
      initial="initial" 
      variants={pageVariants}
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 min-h-[50vh] lg:flex lg:items-center bg-white">
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
        <div className="section-shell relative z-20 w-full">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            
            {/* LEFT CONTENT */}
            <div className="max-w-[760px] lg:w-[60%] flex flex-col items-start text-left relative z-10">
              <motion.div animate={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, scale: 0.9, y: 10 }} transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">TEAM CLOUDSTAND</Badge>
              </motion.div>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#0EA5E9]" />

              <motion.h1 animate={{ opacity: 1, y: 0 }} className="mt-6 text-[40px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.03em] text-black text-left" initial={{ opacity: 0, y: 25 }} transition={{ duration: 0.7, delay: 0.1 }}>
                <span className="text-[#0EA5E9]">Team</span> <span className="text-[#EA580C]">CloudStand</span>
              </motion.h1>

              <motion.div animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-4 text-[16px] leading-8 text-[#475569] text-left max-w-[600px]" initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <p>
                  Team CloudStand reflects our people, culture, and everyday moments that make us who we are.
                </p>
                <p>
                  It showcases our vibrant office life through festival celebrations, team outings, annual events, and fun-filled activities.
                </p>
                <p>
                  We foster a friendly and collaborative environment where learning and enjoyment go hand in hand.
                </p>
              </motion.div>
            </div>

            {/* RIGHT VISUAL - IMAGE */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex lg:w-[45%] lg:justify-end lg:items-center relative"
            >
              <div className="relative z-10 w-[90%] max-w-[600px] aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-[#0EA5E9]/5 to-[#EA580C]/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[6px] border-white overflow-hidden flex items-center justify-center scale-100 xl:scale-105">
                <img 
                  src={heroImage} 
                  alt="Team CloudStand Hero" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
                  }}
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="bg-sky-50/30 py-16 lg:py-24">
        <div className="w-full px-4 md:px-8 lg:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-center mb-12 flex flex-col items-center"
          >
            <Badge className="mb-4 border-sky-200 bg-white text-[#EA580C]">GALLERY</Badge>
            <h2 className="text-[#EA580C] text-[40px] font-bold leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Life at CloudStand
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, margin: '-50px' }}
            className={`grid gap-4 md:gap-6 ${
              galleryImages.length === 1 ? 'grid-cols-1 max-w-md mx-auto w-full' :
              galleryImages.length === 2 ? 'grid-cols-2 max-w-3xl mx-auto w-full' :
              galleryImages.length === 3 ? 'grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto w-full' :
              'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {isLoading ? (
              <div className="col-span-full py-12 text-center text-[#475569] font-semibold tracking-wide">Loading gallery...</div>
            ) : galleryImages.length === 0 ? (
              <div className="col-span-full py-12 text-center text-[#64748B] font-medium tracking-wide">No images currently available.</div>
            ) : galleryImages.map((src, index) => (
              <motion.div 
                key={index}
                onClick={() => openLightbox(index)}
                variants={{
                  initial: { opacity: 0, y: 30, scale: 0.95 },
                  animate: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
                }}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-sm bg-gray-200 cursor-pointer group"
              >
                <img 
                  src={src} 
                  alt={`Team CloudStand moment ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Expand Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#EA580C] transition"
              onClick={closeLightbox}
            >
              <X size={36} />
            </button>
            
            <button 
              className="absolute left-4 lg:left-8 text-white/70 hover:text-white transition bg-black/40 hover:bg-black/80 rounded-full p-2"
              onClick={prevImage}
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={galleryImages[currentIndex]} 
              alt="Lightbox Full Size" 
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              }}
            />

            <button 
              className="absolute right-4 lg:right-8 text-white/70 hover:text-white transition bg-black/40 hover:bg-black/80 rounded-full p-2"
              onClick={nextImage}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}

export default TeamCloudStand
