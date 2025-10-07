interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-wrapper">{children}</div>
    </section>
  )
}

export function PageHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="flex flex-col items-start gap-4 md:gap-6">
      <h1 className="heading-1">{title}</h1>
      {description && (
        <p className="text-xl text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>
}