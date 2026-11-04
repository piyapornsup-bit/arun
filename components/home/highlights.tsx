import { Gift, Coins, BadgePercent } from 'lucide-react'
import { FadeUp } from '@/components/site/fade-up'

const items = [
  { Icon: Coins, title: 'ซื้อครบ 50 บาท ได้ 5 แต้ม', text: 'สะสมแต้มอัตโนมัติทุกการซื้อ ทั้งในแอปและที่หน้าร้าน' },
  { Icon: BadgePercent, title: 'ใช้แต้มเป็นส่วนลดได้ทุกการซื้อ', text: '10 แต้ม แลกส่วนลด 1 บาท ในแอปหรือที่เคาน์เตอร์' },
  { Icon: Gift, title: 'สมาชิกรับของขวัญวันเกิดและเทศกาลปีใหม่', text: 'ของขวัญส่งตามที่อยู่ที่คุณระบุในแอป' },
]

export function Highlights() {
  return (
    <section aria-label="สิทธิประโยชน์สมาชิก" className="relative z-10 mx-auto -mt-2 max-w-6xl px-4 sm:px-6">
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map(({ Icon, title, text }, i) => (
          <FadeUp as="li" key={title} delay={i * 0.06}>
            <div className="flex h-full items-start gap-4 rounded-[20px] border border-line bg-surface p-5 shadow-warm">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-600">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{text}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </ul>
    </section>
  )
}
