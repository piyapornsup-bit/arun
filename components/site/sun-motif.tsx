import { cn } from '@/lib/utils'

type SunMotifProps = {
  className?: string
  rayColor?: string
  sunColor?: string
  glowColor?: string
  rays?: number
}

export function SunMotif({
  className,
  rayColor = '#FED7AA',
  sunColor = '#FB923C',
  glowColor = '#FFEDD5',
  rays = 13,
}: SunMotifProps) {
  const rayLines = Array.from({ length: rays }, (_, i) => {
    const angle = Math.PI - (Math.PI * (i + 0.5)) / rays
    const inner = 96
    const outer = i % 2 === 0 ? 150 : 132
    return {
      x1: 200 + Math.cos(angle) * inner,
      y1: 200 - Math.sin(angle) * inner,
      x2: 200 + Math.cos(angle) * outer,
      y2: 200 - Math.sin(angle) * outer,
    }
  })

  return (
    <svg
      viewBox="0 0 400 200"
      className={cn('block', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M 60 200 A 140 140 0 0 1 340 200 Z" fill={glowColor} opacity="0.55" />
      {rayLines.map((r, i) => (
        <line
          key={i}
          x1={r.x1.toFixed(2)}
          y1={r.y1.toFixed(2)}
          x2={r.x2.toFixed(2)}
          y2={r.y2.toFixed(2)}
          stroke={rayColor}
          strokeWidth="9"
          strokeLinecap="round"
        />
      ))}
      <path d="M 120 200 A 80 80 0 0 1 280 200 Z" fill={sunColor} />
      <path d="M 145 200 A 55 55 0 0 1 255 200 Z" fill="#FFFFFF" opacity="0.18" />
    </svg>
  )
}
