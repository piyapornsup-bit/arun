import Link from 'next/link'
import { Sunrise } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="รุ่งอรุณ มินิมาร์ท หน้าแรก"
      className={cn('inline-flex min-h-11 items-center gap-2.5 rounded-full', className)}
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-sunrise text-white shadow-warm">
        <Sunrise className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-heading text-lg font-bold',
            inverted ? 'text-sun-100' : 'text-ink',
          )}
        >
          รุ่งอรุณ
        </span>
        <span
          className={cn(
            'text-xs font-medium tracking-wide',
            inverted ? 'text-sun-200' : 'text-sun-700',
          )}
        >
          มินิมาร์ท
        </span>
      </span>
    </Link>
  )
}
