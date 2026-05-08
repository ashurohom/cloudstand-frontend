function Card({ children, className = '' }) {
  return (
    <div
      className={`glass-panel rounded-[28px] border-[#d7e5ff] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
