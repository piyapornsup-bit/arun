import type { Metadata } from 'next'
import { BadgePercent, Bell, Cake, Clock, Coins, Gift, MapPin, Phone, QrCode, Store } from 'lucide-react'
import { PageHeader } from '@/components/site/page-header'
import { CtaBand } from '@/components/site/cta-band'
import { FadeUp } from '@/components/site/fade-up'
import { SunMotif } from '@/components/site/sun-motif'

export const metadata: Metadata = {
  title: 'เกี่ยวกับร้าน',
  description: 'รู้จักร้านรุ่งอรุณ มินิมาร์ท ร้านสะดวกซื้อใกล้บ้าน เวลาเปิดทำการ และสิทธิพิเศษสำหรับสมาชิก',
}

const hours = [
  { day: 'จันทร์ – ศุกร์', time: '08.30–20.00 น.' },
  { day: 'เสาร์ – อาทิตย์', time: '08.30–20.00 น.' },
  { day: 'วันหยุดนักขัตฤกษ์', time: '08.30–20.00 น.' },
]

const perks = [
  { Icon: Coins, title: 'สะสมแต้มทุกการซื้อ', text: 'ซื้อครบ 50 บาท รับ 5 แต้ม สะสมได้ทุกช่องทาง' },
  { Icon: BadgePercent, title: 'ใช้แต้มแทนเงินสด', text: 'แลกแต้มเป็นส่วนลดได้ทุกการซื้อ ทั้งในแอปและที่เคาน์เตอร์' },
  { Icon: QrCode, title: 'รหัส QR สมาชิก', text: 'เปิดในแอปให้พนักงานสแกนที่เคาน์เตอร์ เพื่อสะสมและใช้แต้ม' },
  { Icon: Cake, title: 'ของขวัญวันเกิด', text: 'รับของขวัญวันเกิดส่งตามที่อยู่ที่คุณระบุ' },
  { Icon: Gift, title: 'ของขวัญเทศกาลปีใหม่', text: 'ส่งความสุขต้อนรับปีใหม่ให้สมาชิกทุกคน' },
  { Icon: Bell, title: 'รู้ก่อนใคร', text: 'แจ้งเตือนโปรโมชันและสินค้าใหม่ผ่านแอป' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="เกี่ยวกับร้านรุ่งอรุณ"
        description="ร้านสะดวกซื้อเล็ก ๆ ใกล้บ้าน ที่อยากให้ทุกเช้าของคุณเริ่มต้นอย่างสดใส"
        crumbs={[{ href: '/', label: 'หน้าแรก' }, { label: 'เกี่ยวกับร้าน' }]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <FadeUp as="section" className="space-y-5">
          <h2 className="text-ink">เรื่องราวของเรา</h2>
          <p className="text-lg leading-relaxed text-ink">
            “รุ่งอรุณ” แปลว่าแสงแรกของวันใหม่ เราเริ่มต้นจากร้านขายของชำเล็ก ๆ ในชุมชน
            ด้วยความตั้งใจอยากให้เพื่อนบ้านได้ของใช้ที่ดี ราคาเป็นมิตร และได้รับบริการด้วยรอยยิ้มทุกครั้งที่แวะมา
          </p>
          <p className="leading-relaxed text-ink-muted">
            วันนี้เราพัฒนาแอปรุ่งอรุณ เพื่อให้คุณสั่งของได้สะดวกขึ้น สะสมแต้มได้ทุกการซื้อ
            และรับสิทธิพิเศษสำหรับสมาชิก โดยยังคงความใส่ใจแบบร้านใกล้บ้านเหมือนเดิม
          </p>
          <div className="flex items-end justify-center rounded-[20px] bg-sun-50 pt-6">
            <SunMotif className="w-full max-w-md" />
          </div>
        </FadeUp>

        <div className="space-y-5">
          <FadeUp as="section" className="rounded-[20px] border border-line bg-surface p-6 shadow-warm">
            <h2 className="flex items-center gap-2.5 font-heading text-xl font-semibold text-ink">
              <Clock className="size-6 text-sun-600" aria-hidden="true" />
              เวลาเปิดทำการ
            </h2>
            <p className="mt-2 font-semibold text-teal">เปิดทุกวัน 08.30–20.00 น.</p>
            <dl className="mt-4 divide-y divide-line">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between py-2.5 text-sm">
                  <dt className="text-ink-muted">{h.day}</dt>
                  <dd className="font-heading font-semibold text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>

          <FadeUp as="section" delay={0.05} className="rounded-[20px] border border-line bg-surface p-6 shadow-warm">
            <h2 className="flex items-center gap-2.5 font-heading text-xl font-semibold text-ink">
              <MapPin className="size-6 text-sun-600" aria-hidden="true" />
              ที่ตั้งร้าน
            </h2>
            <div
              className="stripes-out mt-4 flex aspect-[16/9] flex-col items-center justify-center gap-2 rounded-2xl text-center text-sm text-neutral-600"
              role="img"
              aria-label="พื้นที่สำหรับแผนที่ร้าน (ตัวอย่าง)"
            >
              <Store className="size-8" aria-hidden="true" />
              [แผนที่ร้าน – ตัวอย่าง]
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ink-muted" aria-hidden="true" />
                [ที่อยู่ร้าน – ตัวอย่าง] เลขที่ 00 ถนนตัวอย่าง แขวงตัวอย่าง เขตตัวอย่าง กรุงเทพฯ 10000
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-ink-muted" aria-hidden="true" />
                [เบอร์โทร – ตัวอย่าง] 0X-XXX-XXXX
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>

      <FadeUp as="section" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <h2 className="text-ink">สิทธิพิเศษสำหรับสมาชิก</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map(({ Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-[20px] border border-line bg-surface p-5 shadow-warm">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-600">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeUp>

      <div className="pt-16">
        <CtaBand />
      </div>
    </>
  )
}
