import Link from 'next/link'
import { Home, ShoppingBasket } from 'lucide-react'
import { SunMotif } from '@/components/site/sun-motif'
import { pill } from '@/lib/pill'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center sm:py-24">
      <div className="relative">
        <SunMotif className="w-72 sm:w-96" />
        <p className="absolute inset-x-0 bottom-2 font-heading text-6xl font-bold text-white drop-shadow-[0_2px_8px_rgba(194,65,12,0.4)] sm:text-7xl">
          404
        </p>
      </div>
      <div className="h-1.5 w-80 max-w-full rounded-full bg-sun-200" aria-hidden="true" />
      <h1 className="mt-8 text-[clamp(1.75rem,4vw,2.5rem)] text-ink">ไม่พบหน้าที่คุณต้องการ</h1>
      <p className="mt-3 text-lg text-ink-muted">
        หน้านี้อาจถูกย้ายหรือไม่มีอยู่แล้ว ลองกลับไปเริ่มต้นใหม่ที่หน้าแรกนะคะ
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={pill()}>
          <Home aria-hidden="true" />
          กลับหน้าแรก
        </Link>
        <Link href="/products" className={pill({ variant: 'secondary' })}>
          <ShoppingBasket aria-hidden="true" />
          ดูสินค้า
        </Link>
      </div>
    </section>
  )
}
