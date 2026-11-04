'use client'

import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { formatThaiDate, type Post } from '@/lib/data'
import { ImageTile } from '@/components/site/product-image'
import { PromoRibbon } from '@/components/site/badges'
import { CountdownChip } from '@/components/site/countdown-chip'
import { pill } from '@/lib/pill'
import { cn } from '@/lib/utils'

export function PromoCarousel({ promos }: { promos: Post[] }) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(promos.length - 1, i))
    const item = track.children[clamped] as HTMLElement | undefined
    if (!item) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: reduce ? 'auto' : 'smooth' })
  }, [promos.length])

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement | undefined
    if (!first) return
    const step = first.offsetWidth + 20
    const maxScroll = track.scrollWidth - track.clientWidth
    const next = track.scrollLeft >= maxScroll - 4 ? promos.length - 1 : Math.round(track.scrollLeft / step)
    setIndex(next)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollToIndex(index + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollToIndex(index - 1)
    }
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label="โปรโมชันตอนนี้" onKeyDown={onKeyDown}>
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollToIndex(index - 1)}
          disabled={index === 0}
          aria-label="โปรโมชันก่อนหน้า"
          className={pill({ variant: 'secondary', size: 'icon' })}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollToIndex(index + 1)}
          disabled={index >= promos.length - 1}
          aria-label="โปรโมชันถัดไป"
          className={pill({ variant: 'secondary', size: 'icon' })}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <ul
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {promos.map((promo, i) => (
          <li
            key={promo.id}
            aria-roledescription="slide"
            aria-label={`${i + 1} จาก ${promos.length}`}
            className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
          >
            <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-warm transition-all duration-200 hover:-translate-y-1 hover:shadow-warm-hover">
              <PromoRibbon>โปรโมชัน</PromoRibbon>
              <ImageTile icon={promo.icon} label={promo.title} className="aspect-[16/9] rounded-none" />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-heading text-lg font-semibold text-ink">{promo.title}</h3>
                <p className="line-clamp-2 text-sm text-ink-muted">{promo.excerpt}</p>
                {promo.validUntil && (
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-ink-muted">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      ใช้ได้ถึง {formatThaiDate(promo.validUntil)}
                    </span>
                    <CountdownChip until={promo.validUntil} />
                  </div>
                )}
                <Link
                  href={`/news/${promo.id}`}
                  className={cn(pill({ variant: 'secondary', size: 'sm' }), 'mt-auto self-start')}
                >
                  ดูรายละเอียด
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex justify-center gap-1.5" aria-hidden="true">
        {promos.map((p, i) => (
          <span
            key={p.id}
            className={cn(
              'h-2 rounded-full transition-all duration-200',
              i === index ? 'w-6 bg-sun-600' : 'w-2 bg-sun-200',
            )}
          />
        ))}
      </div>
    </div>
  )
}
