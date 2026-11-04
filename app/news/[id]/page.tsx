import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Smartphone } from 'lucide-react'
import { formatThaiDate, getPost, getProduct, posts, type Product } from '@/lib/data'
import { ImageTile } from '@/components/site/product-image'
import { Chip } from '@/components/site/badges'
import { CountdownChip } from '@/components/site/countdown-chip'
import { OrderButton } from '@/components/site/download-dialog'
import { ProductCard } from '@/components/site/product-card'
import { SectionHeading } from '@/components/site/section-heading'
import { pill } from '@/lib/pill'

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = getPost(id)
  if (!post) return { title: 'ไม่พบข่าว' }
  return { title: post.title, description: post.excerpt }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = getPost(id)
  if (!post) notFound()

  const isPromo = post.kind === 'promo'
  const related = post.relatedProductIds
    .map((pid) => getProduct(pid))
    .filter((p): p is Product => Boolean(p))
    .slice(0, 4)

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Link href="/news" className={pill({ variant: 'ghost', size: 'sm' })}>
        <ArrowLeft aria-hidden="true" />
        กลับไปหน้าข่าวสาร
      </Link>

      <article className="mx-auto mt-4 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
          <Chip className={isPromo ? 'bg-berry/10 text-berry' : 'bg-teal/10 text-teal'}>
            {isPromo ? 'โปรโมชัน' : 'ข่าวสาร'}
          </Chip>
          <time dateTime={post.date}>ประกาศเมื่อ {formatThaiDate(post.date)}</time>
        </div>
        <h1 className="mt-4 text-[clamp(1.875rem,4vw,3rem)] text-balance text-ink">{post.title}</h1>

        {post.validUntil && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-ink">
              <CalendarDays className="size-5 text-berry" aria-hidden="true" />
              ใช้ได้ถึง {formatThaiDate(post.validUntil)}
            </span>
            <CountdownChip until={post.validUntil} />
          </div>
        )}

        <ImageTile icon={post.icon} label={post.title} size="lg" className="mt-8 aspect-[16/9] shadow-warm" />

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {isPromo && (
          <div className="mt-10 flex flex-col items-start gap-4 rounded-[20px] bg-sun-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-heading text-lg font-semibold text-ink">รับสิทธิ์โปรโมชันนี้ได้ในแอปรุ่งอรุณ</p>
            <OrderButton>
              <Smartphone aria-hidden="true" />
              ดาวน์โหลดแอป
            </OrderButton>
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="pt-16" aria-labelledby="related-title">
          <SectionHeading id="related-title" title="สินค้าที่เกี่ยวข้อง" href="/products" linkLabel="ดูสินค้าทั้งหมด" />
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <li key={p.id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
