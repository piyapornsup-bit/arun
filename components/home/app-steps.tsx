import { CreditCard, ShoppingBasket, Truck, UserPlus } from 'lucide-react'
import { FadeUp } from '@/components/site/fade-up'

const steps = [
  { Icon: UserPlus, title: 'สมัครสมาชิก', text: 'ดาวน์โหลดแอปฟรี สมัครง่ายด้วยเบอร์โทรศัพท์' },
  { Icon: ShoppingBasket, title: 'เลือกสินค้า', text: 'ค้นหาของใช้ประจำวันได้ครบ ดูราคาและโปรโมชันชัดเจน' },
  { Icon: CreditCard, title: 'ชำระเงิน', text: 'โอนผ่านธนาคารหรือพร้อมเพย์ พร้อมใช้แต้มเป็นส่วนลด' },
  { Icon: Truck, title: 'ติดตามการจัดส่ง', text: 'ติดตามสถานะการจัดส่งได้ในแอป' },
]

export function AppSteps() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
      <div
        className="absolute top-8 bottom-8 left-8 w-1 rounded-full bg-gradient-to-b from-sun-200 via-sun-400 to-sun-200 md:top-8 md:right-[12.5%] md:bottom-auto md:left-[12.5%] md:h-1 md:w-auto md:bg-gradient-to-r"
        aria-hidden="true"
      />
      {steps.map(({ Icon, title, text }, i) => (
        <FadeUp as="li" key={title} delay={i * 0.08} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
          <span className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-surface text-sun-600 shadow-warm ring-4 ring-cream">
            <Icon className="size-7" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-sun-600 font-heading text-xs font-bold text-white">
              {i + 1}
            </span>
          </span>
          <div className="pt-2 md:pt-0">
            <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-sm text-ink-muted">{text}</p>
          </div>
        </FadeUp>
      ))}
    </ol>
  )
}
