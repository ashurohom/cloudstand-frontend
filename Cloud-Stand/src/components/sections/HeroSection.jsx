import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_SLIDES = [
  '/Slider/slider-1.jpeg',
  '/Slider/slider-2.jpeg',
  '/Slider/slider-3.jpeg',
  '/Slider/slider-4.jpeg',
]

const AUTO_SLIDE_MS = 5000
const RESUME_AFTER_INTERACTION_MS = 10000

function HeroSection({ slides = DEFAULT_SLIDES }) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false)
  const resumeTimeoutRef = useRef(null)

  // Resume auto-play after a short idle period whenever the user interacts.
  const pauseAutoSlideTemporarily = () => {
    setIsAutoSlidePaused(true)

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoSlidePaused(false)
    }, RESUME_AFTER_INTERACTION_MS)
  }

  const goToSlide = (index, isUserAction = false) => {
    if (!safeSlides.length) return

    if (isUserAction) {
      pauseAutoSlideTemporarily()
    }

    setCurrentSlide((index + safeSlides.length) % safeSlides.length)
  }

  const goToNext = (isUserAction = false) => {
    goToSlide(currentSlide + 1, isUserAction)
  }

  const goToPrevious = (isUserAction = false) => {
    goToSlide(currentSlide - 1, isUserAction)
  }

  // Auto-advance every 5 seconds. Cleanup prevents stale intervals on unmount.
  useEffect(() => {
    if (!safeSlides.length || isAutoSlidePaused) return undefined

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % safeSlides.length)
    }, AUTO_SLIDE_MS)

    return () => clearInterval(intervalId)
  }, [isAutoSlidePaused, safeSlides.length])

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [])

  if (!safeSlides.length) {
    return null
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {safeSlides.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white drop-shadow-[0_6px_22px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            Transform Your Business with Oracle Cloud
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/90 drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] sm:text-lg lg:text-xl">
            End-to-end Oracle HCM, ERP, Payroll, OIC, BI and AI consulting delivered by certified experts.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-[#EA580C] px-8 py-3.5 text-base font-semibold text-white shadow-[0_16px_34px_rgba(234,88,12,0.28)] transition-all duration-300 hover:bg-[#f97316] hover:shadow-[0_20px_40px_rgba(234,88,12,0.34)]"
            >
              Let&apos;s Connect
            </Link>

            <Link
              to="/services"
              className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/70 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/12"
            >
              Explore Solutions
            </Link>

            <Link
              to="/rescue-hub"
              className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#EA580C]/80 bg-[#EA580C]/18 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#EA580C]/28"
            >
              Rescue Hub
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots for current state and direct navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {safeSlides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            onClick={() => goToSlide(index, true)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide ? 'h-2.5 w-8 bg-white' : 'h-2.5 w-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
