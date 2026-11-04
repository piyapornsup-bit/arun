import { Play, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

const stores = [
  { id: 'ios', top: 'ดาวน์โหลดบน', name: 'App Store', Icon: Smartphone },
  { id: 'android', top: 'ดาวน์โหลดได้ที่', name: 'Google Play', Icon: Play },
]

export function AppBadges({ className, variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  return (
    <ul className={cn('flex flex-wrap gap-3', className)} aria-label="ช่องทางดาวน์โหลดแอป">
      {stores.map(({ id, top, name, Icon }) => (
        <li key={id}>
          <a
            href={`#download-${id}`}
            aria-label={`${top} ${name} (ลิงก์ตัวอย่าง)`}
            className={cn(
              'inline-flex h-14 min-w-44 items-center gap-3 rounded-full px-5 transition-all duration-200 hover:-translate-y-0.5',
              variant === 'dark'
                ? 'bg-ink text-white shadow-warm hover:shadow-warm-hover'
                : 'bg-surface text-ink shadow-warm hover:shadow-warm-hover',
            )}
          >
            <Icon className="size-6 shrink-0" aria-hidden="true" />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[11px] opacity-80">{top}</span>
              <span className="font-heading text-base font-semibold">{name}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
