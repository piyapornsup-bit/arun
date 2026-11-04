import { cn } from '@/lib/utils'

const SIZE = 21

function isFinder(x: number, y: number) {
  const inBox = (bx: number, by: number) => x >= bx && x < bx + 7 && y >= by && y < by + 7
  return inBox(0, 0) || inBox(SIZE - 7, 0) || inBox(0, SIZE - 7)
}

function finderCell(x: number, y: number) {
  const lx = x >= SIZE - 7 ? x - (SIZE - 7) : x
  const ly = y >= SIZE - 7 ? y - (SIZE - 7) : y
  const ring = lx === 0 || lx === 6 || ly === 0 || ly === 6
  const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4
  return ring || core
}

const cells: { x: number; y: number }[] = []
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const filled = isFinder(x, y) ? finderCell(x, y) : (x * 7 + y * 13 + x * y) % 5 < 2
    if (filled) cells.push({ x, y })
  }
}

export function QrPlaceholder({ className, label = true }: { className?: string; label?: boolean }) {
  return (
    <figure className={cn('inline-flex flex-col items-center gap-2', className)}>
      <div className="rounded-2xl bg-surface p-3 shadow-warm">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="size-24"
          role="img"
          aria-label="คิวอาร์โค้ดตัวอย่างสำหรับดาวน์โหลดแอป"
          shapeRendering="crispEdges"
        >
          {cells.map((c) => (
            <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width="1" height="1" fill="#2A1F14" />
          ))}
        </svg>
      </div>
      {label && (
        <figcaption className="text-xs font-medium text-current opacity-90">
          สแกนเพื่อดาวน์โหลด (ตัวอย่าง)
        </figcaption>
      )}
    </figure>
  )
}
