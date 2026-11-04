import { getCategory, type IconKey } from '@/lib/data'
import { iconMap } from '@/lib/icons'
import { cn } from '@/lib/utils'

type ImageTileProps = {
  icon: IconKey
  label: string
  tint?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ImageTile({ icon, label, tint, size = 'md', className }: ImageTileProps) {
  const Icon = iconMap[icon]
  const gradient = tint ?? getCategory(icon)?.tint ?? 'from-sun-100 to-sun-50'
  return (
    <div
      role="img"
      aria-label={`ภาพประกอบ: ${label}`}
      className={cn(
        'relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[20px] bg-gradient-to-br p-4 text-center',
        gradient,
        className,
      )}
    >
      <div
        className="absolute -right-8 -bottom-10 size-32 rounded-full bg-white/40 blur-sm"
        aria-hidden="true"
      />
      <span
        className={cn(
          'relative flex items-center justify-center rounded-full bg-white/70 text-sun-700 shadow-sm',
          size === 'lg' ? 'size-28' : size === 'md' ? 'size-16' : 'size-12',
        )}
      >
        <Icon
          className={cn(size === 'lg' ? 'size-14' : size === 'md' ? 'size-8' : 'size-6')}
          aria-hidden="true"
        />
      </span>
      {size !== 'sm' && (
        <span
          className={cn(
            'relative line-clamp-2 font-medium text-ink/75',
            size === 'lg' ? 'max-w-xs text-lg' : 'text-xs',
          )}
          aria-hidden="true"
        >
          {label}
        </span>
      )}
    </div>
  )
}
