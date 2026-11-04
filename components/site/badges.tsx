import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StockBadge({ inStock, className }: { inStock: boolean; className?: string }) {
  return inStock ? (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal',
        className,
      )}
    >
      <Check className="size-3.5" aria-hidden="true" />
      มีสินค้า
    </span>
  ) : (
    <span
      className={cn(
        'stripes-out inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-neutral-600',
        className,
      )}
    >
      <X className="size-3.5" aria-hidden="true" />
      สินค้าหมด
    </span>
  )
}

export function PromoRibbon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'absolute top-3 left-0 z-10 rounded-r-full bg-berry py-1 pr-3.5 pl-3 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(190,18,60,0.3)]',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-sun-100 px-2.5 py-1 text-xs font-medium text-sun-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
