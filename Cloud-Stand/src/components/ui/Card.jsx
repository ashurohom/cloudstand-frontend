function Card({ children, className = '' }) {
  return (
    <div
      className={`glass-panel rounded-[28px] border-sky-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
