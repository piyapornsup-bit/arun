import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SunMotif } from './sun-motif'
import { Wave } from './wave'

type Crumb = { href?: string; label: string }

export function PageHeader({
  title,
  description,
  crumbs,
}: {
  title: string
  description?: string
  crumbs: Crumb[]
}) {
  return (
    <div className="relative overflow-hidden bg-sunrise text-white">
      <SunMotif
        className="pointer-events-none absolute right-[-60px] bottom-0 w-[360px] opacity-35 sm:right-10"
        sunColor="#FFFFFF"
        rayColor="#FFFFFF"
        glowColor="#FFFFFF"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-10 sm:px-6 sm:pt-10">
        <nav aria-label="เส้นทางนำทาง">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-white/90">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1
              return (
                <li key={c.label} className="flex items-center gap-1">
                  {c.href && !last ? (
                    <Link href={c.href} className="inline-flex min-h-11 items-center rounded hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="inline-flex min-h-11 items-center font-semibold text-white">
                      {c.label}
                    </span>
                  )}
                  {!last && <ChevronRight className="size-4 opacity-80" aria-hidden="true" />}
                </li>
              )
            })}
          </ol>
        </nav>
        <h1 className="mt-1 text-balance">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-lg text-white/95">{description}</p>}
      </div>
      <Wave />
    </div>
  )
}
