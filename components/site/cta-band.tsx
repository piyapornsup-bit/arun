import { Download } from 'lucide-react'
import { AppBadges } from './app-badges'
import { OrderButton } from './download-dialog'
import { FadeUp } from './fade-up'
import { SunMotif } from './sun-motif'

export function CtaBand() {
  return (
    <FadeUp as="section" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        aria-labelledby="cta-title"
        className="relative overflow-hidden rounded-[28px] bg-sunrise px-6 py-12 text-center text-white shadow-warm-hover sm:px-12"
      >
        <SunMotif
          className="pointer-events-none absolute -bottom-2 left-1/2 w-[640px] max-w-none -translate-x-1/2 opacity-30"
          sunColor="#FFFFFF"
          rayColor="#FFFFFF"
          glowColor="#FFFFFF"
        />
        <div className="relative">
          <h2 id="cta-title">ดาวน์โหลดแอปวันนี้</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/95">
            สั่งของใช้ใกล้บ้านได้ทุกวัน สะสมแต้ม รับสิทธิพิเศษเฉพาะสมาชิก
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <AppBadges className="justify-center" />
            <OrderButton variant="light" size="sm">
              <Download aria-hidden="true" />
              ดูวิธีดาวน์โหลด
            </OrderButton>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}
