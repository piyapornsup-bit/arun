import { SunMotif } from './sun-motif'

export function EmptyState({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center rounded-[20px] border border-dashed border-sun-200 bg-surface px-6 py-12 text-center">
      <SunMotif className="w-48" />
      <div className="h-1 w-56 rounded-full bg-sun-200" aria-hidden="true" />
      <h3 className="mt-6 font-heading text-xl font-semibold text-ink">{title}</h3>
      {description && <p className="mt-2 max-w-md text-ink-muted">{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}
