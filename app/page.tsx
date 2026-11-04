import { Hero } from '@/components/home/hero'
import { Highlights } from '@/components/home/highlights'
import { PromoCarousel } from '@/components/home/promo-carousel'
import { CategoryRow } from '@/components/home/category-row'
import { AppSteps } from '@/components/home/app-steps'
import { CtaBand } from '@/components/site/cta-band'
import { FadeUp } from '@/components/site/fade-up'
import { ProductCard } from '@/components/site/product-card'
import { SectionHeading } from '@/components/site/section-heading'
import { Wave } from '@/components/site/wave'
import { products, promotions } from '@/lib/data'

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 8)

  return (
    <>
      <Hero />
      <Highlights />

      <FadeUp as="section" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading
          id="promo-title"
          eyebrow="อัปเดตล่าสุด"
          title="โปรโมชันตอนนี้"
          href="/news?tab=promo"
          linkLabel="ดูโปรโมชันทั้งหมด"
        />
        <PromoCarousel promos={promotions} />
      </FadeUp>

      <FadeUp as="section" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading title="หมวดสินค้า" description="เลือกดูสินค้าตามหมวดที่คุณต้องการ" />
        <CategoryRow />
      </FadeUp>

      <FadeUp as="section" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading title="สินค้าแนะนำ" href="/products" linkLabel="ดูสินค้าทั้งหมด" />
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </FadeUp>

      <section className="mt-20 bg-sun-50">
        <Wave fill="var(--sun-50)" flip className="-mt-px bg-cream" />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            center
            eyebrow="ง่ายเพียง 4 ขั้นตอน"
            title="ทำไมต้องใช้แอป"
            description="ทุกการสั่งซื้อเกิดขึ้นในแอปรุ่งอรุณ สะดวก ปลอดภัย และได้แต้มทุกครั้ง"
          />
          <AppSteps />
        </div>
        <Wave className="bg-sun-50" />
      </section>

      <div className="pt-12">
        <CtaBand />
      </div>
    </>
  )
}
