import Link from 'next/link'
import { categories } from '@/lib/data'
import { iconMap } from '@/lib/icons'
import { cn } from '@/lib/utils'

export function CategoryRow() {
  return (
    <ul className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-7 lg:overflow-visible lg:px-0">
      {categories.map((c) => {
        const Icon = iconMap[c.slug]
        return (
          <li key={c.slug} className="shrink-0">
            <Link
              href={`/products?category=${c.slug}`}
              className="group flex w-28 flex-col items-center gap-3 rounded-[20px] border border-line bg-surface p-4 text-center shadow-warm transition-all duration-200 hover:-translate-y-1 hover:shadow-warm-hover lg:w-full"
            >
              <span
                className={cn(
                  'flex size-16 items-center justify-center rounded-full bg-gradient-to-br text-sun-700 transition-transform duration-200 group-hover:scale-105',
                  c.tint,
                )}
              >
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <span className="text-sm leading-snug font-medium text-ink">{c.name}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
