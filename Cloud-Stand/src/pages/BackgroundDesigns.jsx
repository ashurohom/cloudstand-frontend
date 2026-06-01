import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { pageVariants, staggerContainer, staggerItem } from '../animations/variants'

const backgroundDesigns = [
  {
    id: 1,
    name: 'Soft Grid',
    description: 'Clean white base with a visible editorial grid texture.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
      `,
      backgroundSize: '34px 34px',
    },
  },
  {
    id: 2,
    name: 'Dot Matrix',
    description: 'Minimal dotted texture with a gallery-like feel.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.2) 1.1px, transparent 1.1px)',
      backgroundSize: '22px 22px',
      backgroundPosition: '11px 11px',
    },
  },
  {
    id: 3,
    name: 'Diagonal Lines',
    description: 'Fine diagonal strokes for a structured, premium surface.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: 'repeating-linear-gradient(135deg, rgba(0,0,0,0.08) 0 2px, transparent 2px 16px)',
      backgroundSize: 'auto',
    },
  },
  {
    id: 4,
    name: 'Cross Weave',
    description: 'Interlaced texture inspired by fabric and print layouts.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 18px),
        repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 18px),
        repeating-linear-gradient(45deg, rgba(0,0,0,0.035) 0 1px, transparent 1px 24px)
      `,
    },
  },
  {
    id: 5,
    name: 'Concentric Focus',
    description: 'Subtle concentric rings for a more directional visual identity.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        radial-gradient(circle at center, rgba(0,0,0,0.08) 0 2px, transparent 2px 34px, rgba(0,0,0,0.06) 34px 35px, transparent 35px 72px, rgba(0,0,0,0.04) 72px 73px, transparent 73px),
        linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.96))
      `,
      backgroundSize: '220px 220px',
      backgroundPosition: 'center',
    },
  },
  {
    id: 6,
    name: 'Arc Pattern',
    description: 'Repeating arcs to add motion without adding color.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        radial-gradient(circle at 0 100%, transparent 24px, rgba(0,0,0,0.08) 24px 25px, transparent 25px),
        radial-gradient(circle at 100% 0, transparent 24px, rgba(0,0,0,0.08) 24px 25px, transparent 25px)
      `,
      backgroundSize: '60px 60px',
    },
  },
  {
    id: 7,
    name: 'Wave Lines',
    description: 'Flowing horizontal rhythm for softer modern sections.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        radial-gradient(circle at 0 50%, transparent 18px, rgba(0,0,0,0.06) 18px 19px, transparent 19px),
        radial-gradient(circle at 36px 50%, transparent 18px, rgba(0,0,0,0.06) 18px 19px, transparent 19px)
      `,
      backgroundSize: '72px 28px',
      backgroundPosition: '0 0, 36px 14px',
    },
  },
  {
    id: 8,
    name: 'Blueprint Blocks',
    description: 'Boxed modular layout texture for denser content sections.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.07) 1px, transparent 1px),
        linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: '72px 72px, 72px 72px, 18px 18px, 18px 18px',
    },
  },
  {
    id: 9,
    name: 'Polka Dots',
    description: 'Playful polka dots for a friendly, approachable vibe.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.05) 4px, transparent 4px), radial-gradient(rgba(0, 0, 0, 0.05) 4px, transparent 4px)',
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0, 20px 20px',
    },
  },
  {
    id: 10,
    name: 'Subtle Checkerboard',
    description: 'A low-contrast checkerboard pattern for structured yet subtle backgrounds.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02)),
        linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02))
      `,
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0, 20px 20px',
    },
  },
  {
    id: 11,
    name: 'Light Tech Grid',
    description: 'A clean, light background with subtle blue technical grid lines.',
    style: {
      backgroundColor: '#f8fafc',
      backgroundImage: `
        linear-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    },
  },
  {
    id: 12,
    name: 'Gradient Mesh',
    description: 'A smooth, vibrant multi-color gradient mesh for a modern, fluid aesthetic.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        radial-gradient(at 40% 20%, rgba(234, 88, 12, 0.15) 0px, transparent 50%),
        radial-gradient(at 80% 0%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
        radial-gradient(at 0% 50%, rgba(234, 88, 12, 0.1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, rgba(14, 165, 233, 0.1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(234, 88, 12, 0.15) 0px, transparent 50%),
        radial-gradient(at 80% 100%, rgba(14, 165, 233, 0.15) 0px, transparent 50%)
      `,
    },
  },
  {
    id: 13,
    name: 'Isometric Zig-Zag',
    description: 'An engaging zig-zag pattern that creates a sense of depth and movement.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        linear-gradient(135deg, rgba(0,0,0,0.03) 25%, transparent 25%),
        linear-gradient(225deg, rgba(0,0,0,0.03) 25%, transparent 25%),
        linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
        linear-gradient(315deg, rgba(0,0,0,0.03) 25%, transparent 25%)
      `,
      backgroundSize: '40px 40px',
      backgroundPosition: '20px 0, 20px 0, 0 0, 0 0',
    },
  },
  {
    id: 14,
    name: 'Lined Paper',
    description: 'A nostalgic lined paper texture perfect for editorial or educational content.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        linear-gradient(transparent 95%, rgba(14, 165, 233, 0.2) 95%),
        linear-gradient(90deg, transparent 5%, rgba(234, 88, 12, 0.3) 5%, rgba(234, 88, 12, 0.3) 6%, transparent 6%)
      `,
      backgroundSize: '100% 30px, 100% 100%',
    },
  },
  {
    id: 15,
    name: 'Micro Grid Light',
    description: 'A bright, dense grid for a highly technical, structured layout.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
      `,
      backgroundSize: '12px 12px',
    },
  },
  {
    id: 16,
    name: 'Directional Triangles',
    description: 'Large geometric background with two right-facing and one left-facing triangle.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 60,30 0,60' fill='rgba(14,165,233,0.06)'/%3E%3Cpolygon points='0,60 60,90 0,120' fill='rgba(234,88,12,0.06)'/%3E%3Cpolygon points='100,10 40,50 100,90' fill='rgba(0,0,0,0.04)'/%3E%3C/svg%3E")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 17,
    name: 'Diagonal Light Stripes',
    description: 'A very soft, diagonal striped texture for a dynamic light background.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.02) 10px, rgba(0, 0, 0, 0.02) 20px)',
    },
  },
  {
    id: 18,
    name: 'Light Canvas Stipple',
    description: 'A super fine, light dotted texture resembling white canvas or paper.',
    style: {
      backgroundColor: '#fcfcfc',
      backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
      backgroundSize: '8px 8px',
    },
  },
  {
    id: 19,
    name: 'Flowing Orbs',
    description: 'Large geometric circular forms overlapping for a smooth, organic background.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Ccircle cx='0' cy='0' r='50' fill='rgba(14,165,233,0.04)' /%3E%3Ccircle cx='100' cy='100' r='60' fill='rgba(234,88,12,0.04)' /%3E%3Ccircle cx='50' cy='50' r='30' fill='rgba(0,0,0,0.02)' /%3E%3C/svg%3E")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 20,
    name: 'Angular Shards',
    description: 'A dynamic, cutting-edge layout of oversized intersecting polygons.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' fill='rgba(14,165,233,0.03)'/%3E%3Cpolygon points='0,80 80,0 0,0' fill='rgba(234,88,12,0.03)'/%3E%3Cpolygon points='20,100 100,20 100,100' fill='rgba(0,0,0,0.02)'/%3E%3C/svg%3E")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 21,
    name: 'Giant Chevrons',
    description: 'Massive chevron geometric shapes driving the viewer\'s eyes forward.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 50,50 0,100 20,100 70,50 20,0' fill='rgba(14,165,233,0.05)'/%3E%3Cpolygon points='30,0 80,50 30,100 50,100 100,50 50,0' fill='rgba(234,88,12,0.04)'/%3E%3C/svg%3E")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 22,
    name: 'Abstract Sweeps',
    description: 'Elegant sweeping curves for a fluid and polished enterprise feel.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z' fill='rgba(14,165,233,0.04)'/%3E%3Cpath d='M0,70 Q25,20 50,70 T100,70 L100,100 L0,100 Z' fill='rgba(234,88,12,0.04)'/%3E%3C/svg%3E")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 23,
    name: 'Diagonal Blocks',
    description: 'Massive parallel angled blocks giving a strong structured corporate aesthetic.',
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,20 80,100 100,100 20,0 0,0' fill='rgba(14,165,233,0.04)'/%3E%3Cpolygon points='20,100 100,20 100,40 40,100' fill='rgba(234,88,12,0.03)'/%3E%3C/svg%3E")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  },
]

function BackgroundDesigns() {
  useDocumentTitle('Background Design Options | CloudStand Consulting')

  return (
    <motion.main
      animate="animate"
      className="bg-[#faf7f2] pt-20"
      exit="exit"
      initial="initial"
      variants={pageVariants}
    >
      <section className="border-b border-slate-200 bg-white py-14 sm:py-16">
        <div className="section-shell">
          <Badge>Temporary Texture Design Review Page</Badge>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-black sm:text-5xl">
            Background Design Options
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
            Each section below shows one background treatment only, numbered in sequence for quick client feedback.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <motion.div
          className="section-shell flex flex-col gap-8"
          initial="hidden"
          variants={staggerContainer}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {backgroundDesigns.map((design) => (
            <motion.article
              key={design.id}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              variants={staggerItem}
            >
              <div className="border-b border-slate-200 bg-white px-6 py-5 sm:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Badge>{`Design ${design.id}`}</Badge>
                    <h2 className="mt-2 text-2xl font-bold text-black">{design.name}</h2>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-black/65 sm:text-right">
                    {design.description}
                  </p>
                </div>
              </div>

              <div className="h-[320px] w-full sm:h-[380px]" style={design.style} />
            </motion.article>
          ))}
        </motion.div>
      </section>
    </motion.main>
  )
}

export default BackgroundDesigns
