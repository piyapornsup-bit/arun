import Link from 'next/link'
import { Clock, MapPin, Phone } from 'lucide-react'
import { AppBadges } from './app-badges'
import { Logo } from './logo'
import { SunMotif } from './sun-motif'
import { categories } from '@/lib/data'

const pageLinks = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/products', label: 'สินค้าทั้งหมด' },
  { href: '/news', label: 'ข่าวสารและโปรโมชัน' },
  { href: '/about', label: 'เกี่ยวกับร้าน' },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-16 bg-ink text-sun-200">
      <div className="pointer-events-none absolute inset-x-0 -top-px flex justify-center" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sun-400/60 to-transparent" />
      </div>
      <div className="flex justify-center -translate-y-[calc(100%-1px)] absolute inset-x-0 top-0">
        <SunMotif className="w-56 sm:w-72" sunColor="#2A1F14" rayColor="#FB923C" glowColor="#FED7AA" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 pb-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-sun-200/85">
            ร้านสะดวกซื้อใกล้บ้าน สดใหม่ทุกวัน อบอุ่นเหมือนแสงแรกของเช้า
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden="true" />
              <span>เปิดทุกวัน 08.30–20.00 น.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden="true" />
              <span>
                [ที่อยู่ร้าน – ตัวอย่าง] เลขที่ 00 ถนนตัวอย่าง แขวงตัวอย่าง เขตตัวอย่าง กรุงเทพฯ 10000
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden="true" />
              <span>[เบอร์โทร – ตัวอย่าง] 0X-XXX-XXXX</span>
            </li>
          </ul>
        </div>

        <nav aria-label="ลิงก์ในเว็บไซต์">
          <h2 className="font-heading text-base font-semibold text-sun-100">เมนู</h2>
          <ul className="mt-4 space-y-1">
            {pageLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center text-sm hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="หมวดสินค้า">
          <h2 className="font-heading text-base font-semibold text-sun-100">หมวดสินค้า</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products?category=${c.slug}`}
                  className="inline-flex min-h-11 items-center text-sm hover:text-white md:min-h-9"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-semibold text-sun-100">ดาวน์โหลดแอปรุ่งอรุณ</h2>
          <p className="mt-4 text-sm text-sun-200/85">สั่งซื้อ สะสมแต้ม และรับสิทธิพิเศษได้ในแอปเดียว</p>
          <AppBadges variant="light" className="mt-4" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-sun-200/70 sm:px-6">
          © 2569 ร้านรุ่งอรุณ มินิมาร์ท สงวนลิขสิทธิ์ · เว็บไซต์นี้ใช้สำหรับประชาสัมพันธ์ร้านเท่านั้น สั่งซื้อสินค้าได้ผ่านแอป
        </p>
      </div>
    </footer>
  )
}
