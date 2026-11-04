import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  href?: string
  linkLabel?: string
  className?: string
  center?: boolean
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  href,
  linkLabel = 'ดูทั้งหมด',
  className,
  center,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between',
        center && 'items-center text-center sm:flex-col sm:items-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', center && 'mx-auto')}>
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold tracking-wide text-sun-600">{eyebrow}</p>
        )}
        <h2 id={id} className="text-ink">
          {title}
        </h2>
        {description && <p className="mt-2 text-ink-muted">{description}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full font-semibold text-teal hover:underline"
        >
          {linkLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
