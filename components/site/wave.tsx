import { cn } from '@/lib/utils'

export function Wave({
  className,
  fill = 'var(--cream)',
  flip = false,
}: {
  className?: string
  fill?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn('block h-10 w-full sm:h-16', flip && 'rotate-180', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 48 C 180 8, 360 8, 540 36 S 900 80, 1080 52 S 1320 16, 1440 36 L 1440 80 L 0 80 Z"
        fill={fill}
      />
    </svg>
  )
}
