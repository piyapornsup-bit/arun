'use client'

import { useSyncExternalStore } from 'react'
import { Timer } from 'lucide-react'
import { cn } from '@/lib/utils'

const DAY = 24 * 60 * 60 * 1000

function subscribe() {
  return () => {}
}

export function CountdownChip({ until, className }: { until: string; className?: string }) {
  const now = useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / DAY),
    () => null,
  )

  if (now === null) {
    return <span className={cn('inline-block h-7 w-24 rounded-full bg-berry/10', className)} aria-hidden="true" />
  }

  const end = new Date(`${until}T23:59:59+07:00`).getTime()
  const daysLeft = Math.ceil((end - now * DAY) / DAY)

  let label: string
  if (daysLeft < 0) label = 'หมดเขตแล้ว'
  else if (daysLeft === 0) label = 'วันสุดท้าย!'
  else label = `เหลืออีก ${daysLeft} วัน`

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold',
        daysLeft < 0 ? 'bg-neutral-200 text-neutral-600' : 'bg-berry/10 text-berry',
        className,
      )}
    >
      <Timer className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  )
}
