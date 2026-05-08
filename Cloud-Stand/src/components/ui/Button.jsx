import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonHover } from '../../animations/variants'

const variants = {
  solid:
    'bg-accent text-white hover:bg-accent-light shadow-[0_16px_30px_rgba(0,87,255,0.28)]',
  ghost:
    'border border-slate-300 bg-white text-slate-900 hover:border-accent/60 hover:bg-blue-50',
  white:
    'bg-white text-accent hover:bg-slate-100 shadow-[0_16px_30px_rgba(255,255,255,0.12)]',
}

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm sm:text-base',
}

const MotionLink = motion(Link)
const MotionAnchor = motion.a
const MotionButton = motion.button

function Button({
  children,
  variant = 'solid',
  size = 'md',
  className = '',
  to,
  href,
  type = 'button',
  ...props
}) {
  const baseClassName = `button-ring smooth-transition inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <MotionLink
        className={baseClassName}
        initial="rest"
        to={to}
        variants={buttonHover}
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <MotionAnchor
        className={baseClassName}
        href={href}
        initial="rest"
        variants={buttonHover}
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {children}
      </MotionAnchor>
    )
  }

  return (
    <MotionButton
      className={baseClassName}
      initial="rest"
      type={type}
      variants={buttonHover}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export default Button
