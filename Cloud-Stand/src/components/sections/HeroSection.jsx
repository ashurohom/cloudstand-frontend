import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_ENDPOINTS } from '../../config/api'

const DEFAULT_SLIDES = [
  {
    image: '/Slider/slider-1.png',
    heading: 'Building Future-Ready Enterprises with Intelligent Oracle Transformation',
    subheading:
      'Helping organizations modernize operations, empower people, and accelerate growth through Oracle Cloud, AI-driven innovation, and scalable digital experiences. ',
    button: { label: 'Explore Solutions', to: '/services' },
  },
  {
    image: '/Slider/slider-2.png',
    heading: 'Reimagining Workforce Experiences with Oracle HCM Cloud ',
    subheading: 'Streamline hire-to-retire operations, strengthen employee engagement, and enable smarter workforce decisions through connected HR transformation. ',
    button: { label: 'Discover HCM', to: '/case-studies' },
  },
  {
    image: '/Slider/slider-3.png',
    heading: 'Enabling Smarter Financial Operations with Oracle ERP Cloud',
    subheading: 'Create connected, agile, and data-driven enterprise processes that improve visibility, operational efficiency, and business performance. ',
    button: { label: 'Explore ERP', to: '/case-studies' },
  },
  {
    image: '/Slider/slider-4.png',
    heading: 'Connecting Enterprise Ecosystems Through Intelligent Integration ',
    subheading: 'Seamlessly integrate applications, automate workflows, and create scalable digital environments with Oracle Integration Cloud solutions. ',
    button: { label: 'Learn About Integrations', to: '/services/integrations-reports-analytics-solutions' },
  },
]

const AUTO_SLIDE_MS = 5000
const RESUME_AFTER_INTERACTION_MS = 10000
const TEXT_EXIT_MS = 300

const FALLBACK_SLIDE_COPY = DEFAULT_SLIDES.map(({ heading, subheading, button }) => ({
  heading,
  subheading,
  button,
}))

function HeroSection({ slides = DEFAULT_SLIDES }) {
  const [apiSlides, setApiSlides] = useState(null)

  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.heroSlider)
        const result = await response.json()
        if (result.status && result.data && result.data.length > 0) {
          const formattedSlides = result.data.map((slide) => ({
            image: slide.image,
            heading: slide.title,
            subheading: slide.description,
            button: { label: 'Explore Solutions', to: '/services' },
          }))
          
          // Preload images before swapping to prevent grey screen flash
          const imagePromises = formattedSlides.map((slide) => {
            return new Promise((resolve, reject) => {
              const img = new Image()
              img.src = slide.image
              img.onload = resolve
              img.onerror = resolve // Resolve anyway to avoid breaking the whole slider if one fails
            })
          })

          await Promise.all(imagePromises)
          
          // Now that images are in browser cache, it will swap instantly with zero delay
          setApiSlides(formattedSlides)
        }
      } catch (error) {
        console.error('Failed to fetch hero slides:', error)
      }
    }
    fetchHeroSlides()
  }, [])

  const activeSlides = apiSlides || slides

  const safeSlides = useMemo(
    () =>
      activeSlides
        .map((slide, index) => {
          if (!slide) return null

          if (typeof slide === 'string') {
            const fallbackCopy = FALLBACK_SLIDE_COPY[index] ?? FALLBACK_SLIDE_COPY[0]

            return {
              image: slide,
              heading: fallbackCopy.heading,
              subheading: fallbackCopy.subheading,
              button: fallbackCopy.button,
            }
          }

          if (!slide.image) return null

          return slide
        })
        .filter(Boolean),
    [activeSlides]
  )
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTextSlide, setActiveTextSlide] = useState(0)
  const [isTextVisible, setIsTextVisible] = useState(true)
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false)
  const resumeTimeoutRef = useRef(null)
  const textTransitionTimeoutRef = useRef(null)
  const hasMountedRef = useRef(false)

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
    if (!safeSlides.length) return undefined

    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      setActiveTextSlide(currentSlide)
      setIsTextVisible(true)
      return undefined
    }

    setIsTextVisible(false)

    if (textTransitionTimeoutRef.current) {
      clearTimeout(textTransitionTimeoutRef.current)
    }

    textTransitionTimeoutRef.current = setTimeout(() => {
      setActiveTextSlide(currentSlide)
      setIsTextVisible(true)
    }, TEXT_EXIT_MS)

    return () => {
      if (textTransitionTimeoutRef.current) {
        clearTimeout(textTransitionTimeoutRef.current)
      }
    }
  }, [currentSlide, safeSlides.length])

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }

      if (textTransitionTimeoutRef.current) {
        clearTimeout(textTransitionTimeoutRef.current)
      }
    }
  }, [])

  if (!safeSlides.length) {
    return null
  }

  return (
    <section className="relative flex min-h-[100dvh] lg:portrait:min-h-[600px] items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-slate-950">
        {safeSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-slate-950 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-center w-full">
          <div
            key={activeTextSlide}
            className={`hero-slide-copy flex flex-col min-h-[420px] sm:min-h-[360px] md:min-h-[320px] w-full ${isTextVisible ? 'hero-slide-copy--visible' : 'hero-slide-copy--hidden'}`}
          >
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="hero-slide-heading text-[2.1rem] font-extrabold leading-tight tracking-[-0.03em] text-white drop-shadow-[0_6px_22px_rgba(0,0,0,0.55)] sm:text-[2.7rem] lg:text-[3.35rem]">
                {safeSlides[activeTextSlide]?.heading}
              </h1>

              <p className="hero-slide-subheading mx-auto mt-6 max-w-3xl text-[16px] leading-7 text-white/90 drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] lg:text-xl">
                {safeSlides[activeTextSlide]?.subheading}
              </p>
            </div>

            {safeSlides[activeTextSlide]?.button && (
              <div className="mt-auto flex items-center justify-center shrink-0 pt-8">
                <Link
                  to={safeSlides[activeTextSlide].button.to}
                  className="inline-flex min-w-[210px] items-center justify-center rounded-lg border-[0.5px] border-orange-400 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-[#d63b25] hover:bg-[#d63b25] hover:text-white hover:shadow-[0_16px_36px_rgba(234,88,12,0.28)]"
                >
                  {safeSlides[activeTextSlide].button.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide dots for current state and direct navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {safeSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goToSlide(index, true)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide ? 'h-2.5 w-8 bg-orange-500' : 'h-2.5 w-2.5 bg-sky-200 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
