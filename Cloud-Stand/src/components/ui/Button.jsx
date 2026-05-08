import { Link } from 'react-router-dom'

const variants = {
  solid:
    'bg-accent text-white hover:bg-accent-light active:scale-[0.98] shadow-[0_16px_30px_rgba(0,87,255,0.28)]',
  ghost:
    'border border-slate-300 bg-white text-slate-900 hover:border-accent/60 hover:bg-blue-50 active:scale-[0.98]',
  white:
    'bg-white text-accent hover:bg-slate-100 active:scale-[0.98] shadow-[0_16px_30px_rgba(255,255,255,0.12)]',
}

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm sm:text-base',
}

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
  const baseClassName = `button-ring inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link className={baseClassName} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={baseClassName} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={baseClassName} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
