import { Coins, Milk, Search, Soup, SoapDispenserDroplet, Sunrise, Gift } from 'lucide-react'
import { cn } from '@/lib/utils'

const tiles = [
  { Icon: Soup, name: 'บะหมี่', price: '฿7', tint: 'from-amber-100 to-sun-200' },
  { Icon: Milk, name: 'นมจืด', price: '฿13', tint: 'from-sky-50 to-sun-50' },
  { Icon: SoapDispenserDroplet, name: 'สบู่', price: '฿35', tint: 'from-sky-100 to-teal-50' },
  { Icon: Gift, name: 'ของขวัญ', price: '฿259', tint: 'from-rose-100 to-sun-100' },
]

export function PhoneMockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div
      className={cn(
        'relative rounded-[2.75rem] bg-ink p-2.5 shadow-[0_30px_60px_rgba(42,31,20,0.35)]',
        compact ? 'w-44' : 'w-64 sm:w-72',
        className,
      )}
      role="img"
      aria-label="ภาพจำลองหน้าจอแอปรุ่งอรุณบนโทรศัพท์มือถือ"
    >
      <div className="relative overflow-hidden rounded-[2.25rem] bg-cream">
        <div className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className={cn('bg-sunrise px-4 text-white', compact ? 'pt-9 pb-4' : 'pt-10 pb-5')}>
          <div className="flex items-center gap-1.5">
            <Sunrise className="size-4" aria-hidden="true" />
            <span className="font-heading text-sm font-semibold">รุ่งอรุณ</span>
          </div>
          <div className="mt-3 rounded-2xl bg-white/20 p-3 backdrop-blur-sm">
            <p className="text-[10px] opacity-90">แต้มสะสมของคุณ</p>
            <p className="flex items-center gap-1 font-heading text-2xl font-bold">
              <Coins className="size-5" aria-hidden="true" />
              1,250
            </p>
          </div>
        </div>
        <div className="space-y-3 p-3">
          {!compact && (
            <div className="flex h-8 items-center gap-2 rounded-full bg-surface px-3 text-[11px] text-ink-muted shadow-sm">
              <Search className="size-3.5" aria-hidden="true" />
              ค้นหาสินค้า
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            {tiles.slice(0, compact ? 2 : 4).map(({ Icon, name, price, tint }) => (
              <div key={name} className="rounded-xl bg-surface p-2 shadow-sm">
                <div
                  className={cn(
                    'flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br',
                    tint,
                  )}
                >
                  <Icon className="size-6 text-sun-700" aria-hidden="true" />
                </div>
                <p className="mt-1.5 truncate text-[10px] font-medium text-ink">{name}</p>
                <p className="font-heading text-xs font-bold text-sun-600">{price}</p>
              </div>
            ))}
          </div>
          <div className="flex h-9 items-center justify-center rounded-full bg-sun-600 text-[11px] font-semibold text-white">
            สั่งซื้อเลย
          </div>
        </div>
      </div>
    </div>
  )
}
