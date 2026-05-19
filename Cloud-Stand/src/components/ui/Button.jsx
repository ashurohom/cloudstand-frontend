import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonHover } from '../../animations/variants'

const variants = {
  solid:
    'bg-orange-500 text-white hover:bg-[#d63b25] shadow-[0_16px_30px_rgba(234,88,12,0.24)]',
  ghost:
    'border border-sky-200 bg-white text-black hover:border-orange-400 hover:bg-orange-500 hover:text-white',
  white:
    'border border-sky-200 bg-white text-black hover:border-orange-400 hover:bg-orange-500 hover:text-white shadow-[0_16px_30px_rgba(0,0,0,0.08)]',
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
