import Badge from './Badge'

function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" />
      <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base leading-7 text-text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
