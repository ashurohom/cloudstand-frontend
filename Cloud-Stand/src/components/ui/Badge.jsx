import { motion } from 'framer-motion'
import { badgeVariants } from '../../animations/variants'

function Badge({ children, className = '' }) {
  // Strip out old background, border, text, and shadow classes so the new clean design works universally
  const cleanClassName = className
    .split(' ')
    .filter(c => !c.startsWith('bg-') && !c.startsWith('border') && !c.startsWith('text-') && !c.startsWith('shadow'))
    .join(' ')

  return (
    <motion.div
      className={`inline-flex items-center gap-3 ${cleanClassName}`}
      initial="hidden"
      variants={badgeVariants}
      viewport={{ once: true, margin: '-60px' }}
      whileInView="visible"
    >
      <div className="flex items-center gap-1.5">
        <span className="h-[9px] w-[9px] rounded-full bg-[#EA580C]"></span>
        <span className="h-[9px] w-[9px] rounded-full bg-[#0EA5E9]"></span>
      </div>
      <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-black">
        {children}
      </span>
    </motion.div>
  )
}

export default Badge
