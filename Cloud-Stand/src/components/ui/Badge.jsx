function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#d7e5ff] bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-text-muted backdrop-blur ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
