import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BadgePercent, ChevronRight, Coins, ShieldCheck, Smartphone, Truck } from 'lucide-react'
import { formatBaht, getCategory, getProduct, products } from '@/lib/data'
import { ImageTile } from '@/components/site/product-image'
import { Chip, PromoRibbon, StockBadge } from '@/components/site/badges'
import { OrderButton } from '@/components/site/download-dialog'
import { ProductCard } from '@/components/site/product-card'
import { SectionHeading } from '@/components/site/section-heading'
import { FadeUp } from '@/components/site/fade-up'

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: 'ไม่พบสินค้า' }
  return { title: product.name, description: product.description }
}

const trustNotes = [
  { Icon: ShieldCheck, text: 'สินค้าแท้ คัดสรรคุณภาพทุกชิ้น' },
  { Icon: Coins, text: 'ซื้อครบ 50 บาท รับ 5 แต้ม' },
  { Icon: Truck, text: 'ติดตามการจัดส่งได้ในแอป' },
]

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()

  const category = getCategory(product.category)
  const related = products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 4)

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <nav aria-label="เส้นทางนำทาง">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-muted">
          <li className="flex items-center gap-1">
            <Link href="/" className="inline-flex min-h-11 items-center hover:text-sun-700">หน้าแรก</Link>
            <ChevronRight className="size-4" aria-hidden="true" />
          </li>
          <li className="flex items-center gap-1">
            <Link href="/products" className="inline-flex min-h-11 items-center hover:text-sun-700">สินค้า</Link>
            <ChevronRight className="size-4" aria-hidden="true" />
          </li>
          {category && (
            <li className="flex items-center gap-1">
              <Link
                href={`/products?category=${category.slug}`}
                className="inline-flex min-h-11 items-center hover:text-sun-700"
              >
                {category.name}
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
            </li>
          )}
          <li aria-current="page" className="inline-flex min-h-11 items-center font-medium text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative">
          {product.promo && <PromoRibbon className="top-5 py-1.5 text-sm">{product.promo}</PromoRibbon>}
          <ImageTile
            icon={product.category}
            label={product.name}
            size="lg"
            className="aspect-square shadow-warm lg:sticky lg:top-24"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            {category && <Chip>{category.name}</Chip>}
            <StockBadge inStock={product.inStock} />
          </div>
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink">{product.name}</h1>
          <p className="text-ink-muted">{product.unit}</p>
          <p className="flex items-baseline gap-3">
            <span className="font-heading text-4xl font-bold text-sun-600">{formatBaht(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-ink-muted line-through">
                <span className="sr-only">ราคาเดิม </span>
                {formatBaht(product.originalPrice)}
              </span>
            )}
          </p>
          <p className="leading-relaxed text-ink">{product.description}</p>

          {product.promo && (
            <div className="flex items-start gap-3 rounded-[20px] border border-berry/20 bg-berry/5 p-4">
              <BadgePercent className="mt-0.5 size-6 shrink-0 text-berry" aria-hidden="true" />
              <div>
                <p className="font-heading font-semibold text-berry">โปรโมชัน: {product.promo}</p>
                <p className="mt-1 text-sm text-ink-muted">รับสิทธิ์เมื่อสั่งซื้อผ่านแอปรุ่งอรุณ</p>
              </div>
            </div>
          )}

          <OrderButton size="lg" productName={product.name} className="w-full sm:w-auto sm:self-start">
            <Smartphone aria-hidden="true" />
            สั่งซื้อผ่านแอป
          </OrderButton>
          {!product.inStock && (
            <p className="text-sm text-ink-muted">
              สินค้าหมดชั่วคราว เปิดการแจ้งเตือนในแอปเพื่อรับข่าวเมื่อสินค้าเข้า
            </p>
          )}

          <ul className="grid gap-3 border-t border-line pt-5 sm:grid-cols-3">
            {trustNotes.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-ink-muted">
                <Icon className="size-5 shrink-0 text-teal" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FadeUp as="section" className="pt-16">
        <SectionHeading title="สินค้าที่เกี่ยวข้อง" href="/products" linkLabel="ดูสินค้าทั้งหมด" />
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {related.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </FadeUp>
    </div>
  )
}
