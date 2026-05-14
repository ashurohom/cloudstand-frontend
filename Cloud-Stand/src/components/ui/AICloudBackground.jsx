import { motion } from 'framer-motion'
import { CircuitBoard, Cloud, Cpu, Database, GitBranch, Globe, Layers, Network, Zap } from 'lucide-react'

const cloudItems = [
  { id: 'cloud1', className: 'left-[5%] top-[8%] h-40 w-40', opacity: 0.1, duration: 6.8 },
  { id: 'cloud2', className: 'right-[10%] top-[15%] h-24 w-24', opacity: 0.08, duration: 8.4 },
  { id: 'cloud3', className: 'left-[2%] top-[55%] hidden h-32 w-32 md:block', opacity: 0.09, duration: 10.2 },
  { id: 'cloud4', className: 'right-[5%] top-[70%] h-20 w-20', opacity: 0.07, duration: 7.2 },
  { id: 'cloud5', className: 'right-[25%] top-[30%] h-28 w-28', opacity: 0.11, duration: 9.6 },
  { id: 'cloud6', className: 'left-[20%] top-[80%] hidden h-16 w-16 md:block', opacity: 0.07, duration: 11.4 },
  { id: 'cloud7', className: 'left-[45%] top-[5%] h-36 w-36', opacity: 0.12, duration: 8.9 },
  { id: 'cloud8', className: 'right-[30%] top-[60%] h-14 w-14', opacity: 0.08, duration: 6.4 },
]

const techItems = [
  { id: 'icon1', Icon: Cpu, className: 'left-[15%] top-[20%] h-12 w-12', opacity: 0.1, duration: 7.4 },
  { id: 'icon2', Icon: Database, className: 'right-[15%] top-[40%] h-14 w-14', opacity: 0.09, duration: 11.8 },
  { id: 'icon3', Icon: GitBranch, className: 'left-[35%] top-[65%] hidden h-11 w-11 md:block', opacity: 0.08, duration: 9.1 },
  { id: 'icon4', Icon: Layers, className: 'right-[35%] top-[10%] h-12 w-12', opacity: 0.09, duration: 12.6 },
  { id: 'icon5', Icon: Zap, className: 'right-[20%] top-[75%] h-10 w-10', opacity: 0.1, duration: 8.3 },
  { id: 'icon6', Icon: Globe, className: 'left-[8%] top-[45%] hidden h-12 w-12 md:block', opacity: 0.08, duration: 13.4 },
  { id: 'icon7', Icon: Network, className: 'right-[5%] top-[25%] h-12 w-12', opacity: 0.1, duration: 10.7 },
  { id: 'icon8', Icon: CircuitBoard, className: 'left-[55%] top-[85%] hidden h-10 w-10 md:block', opacity: 0.08, duration: 7.9 },
]

const networkLines = [
  { id: 'line1', x1: 5, y1: 10, x2: 20, y2: 35, duration: 4.6 },
  { id: 'line2', x1: 20, y1: 35, x2: 45, y2: 12, duration: 5.8 },
  { id: 'line3', x1: 45, y1: 12, x2: 70, y2: 28, duration: 6.4 },
  { id: 'line4', x1: 70, y1: 28, x2: 90, y2: 15, duration: 7.2 },
  { id: 'line5', x1: 10, y1: 60, x2: 35, y2: 75, duration: 5.1 },
  { id: 'line6', x1: 35, y1: 75, x2: 65, y2: 65, duration: 6.9 },
]

function AICloudBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="hero-mesh absolute inset-0" />

      {cloudItems.map((cloudItem) => (
        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.07, cloudItem.opacity, 0.07] }}
          className={`absolute ${cloudItem.className} text-accent`}
          key={cloudItem.id}
          style={{ willChange: 'transform' }}
          transition={{ duration: cloudItem.duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Cloud className="h-full w-full" strokeWidth={1.5} />
        </motion.div>
      ))}

      {techItems.map(({ id, Icon, className, opacity, duration }) => (
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0], opacity: [0.08, 0.13, 0.08] }}
          className={`absolute ${className} text-accent`}
          key={id}
          style={{ opacity, willChange: 'transform' }}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="h-full w-full" strokeWidth={1.5} />
        </motion.div>
      ))}

      <motion.svg
        animate={{ rotate: 360 }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        viewBox="0 0 600 600"
      >
        <circle
          cx="300"
          cy="300"
          fill="none"
          r="240"
          stroke="#0057FF"
          strokeDasharray="8 12"
          strokeOpacity="0.06"
          strokeWidth="1.5"
        />
      </motion.svg>

      <motion.svg
        animate={{ rotate: -360 }}
        className="absolute right-[-4%] top-1/2 h-[400px] w-[400px] -translate-y-1/2"
        style={{ willChange: 'transform' }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          fill="none"
          r="160"
          stroke="#3D8BFF"
          strokeDasharray="4 16"
          strokeOpacity="0.05"
          strokeWidth="1"
        />
      </motion.svg>

      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {networkLines.map((line) => (
          <line
            key={line.id}
            stroke="#0057FF"
            strokeOpacity="0.06"
            strokeWidth="1"
            x1={line.x1}
            x2={line.x2}
            y1={line.y1}
            y2={line.y2}
          />
        ))}
        {networkLines.map((line) => (
          <motion.circle
            animate={{ cx: [line.x1, line.x2], cy: [line.y1, line.y2] }}
            fill="#0057FF"
            initial={{ cx: line.x1, cy: line.y1 }}
            key={`${line.id}-dot`}
            opacity="0.3"
            r="0.6"
            style={{ willChange: 'transform' }}
            transition={{ duration: line.duration, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        className="gpu-layer absolute left-[-5%] top-[-10%] h-96 w-96"
        style={{
          background: 'radial-gradient(circle, rgba(0,87,255,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        className="gpu-layer absolute bottom-[10%] right-[-5%] h-80 w-80"
        style={{
          background: 'radial-gradient(circle, rgba(61,139,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        className="gpu-layer absolute left-[40%] top-[40%] h-64 w-64"
        style={{
          background: 'radial-gradient(circle, rgba(0,87,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default AICloudBackground
