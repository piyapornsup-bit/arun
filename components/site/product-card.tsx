import Link from 'next/link'
import { Smartphone } from 'lucide-react'
import { formatBaht, getCategory, type Product } from '@/lib/data'
import { ImageTile } from './product-image'
import { Chip, PromoRibbon, StockBadge } from './badges'
import { OrderButton } from './download-dialog'

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category)
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface p-2.5 shadow-warm transition-all duration-200 hover:-translate-y-1 hover:shadow-warm-hover sm:p-3">
      {product.promo && <PromoRibbon>{product.promo}</PromoRibbon>}
      <Link
        href={`/products/${product.id}`}
        className="block rounded-[16px]"
        aria-label={`ดูรายละเอียด ${product.name}`}
        tabIndex={-1}
      >
        <ImageTile icon={product.category} label={product.name} className="aspect-square rounded-[16px]" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 px-1 pt-3 pb-1">
        <div className="flex flex-wrap items-center gap-1.5">
          {category && <Chip>{category.name}</Chip>}
        </div>
        <h3 className="line-clamp-2 text-sm leading-snug font-semibold text-ink sm:text-base">
          <Link href={`/products/${product.id}`} className="rounded hover:text-sun-700">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-ink-muted">{product.unit}</p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-2">
          <p className="flex items-baseline gap-1.5">
            <span className="font-heading text-xl font-bold text-sun-600">{formatBaht(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-ink-muted line-through">
                <span className="sr-only">ราคาเดิม </span>
                {formatBaht(product.originalPrice)}
              </span>
            )}
          </p>
          <StockBadge inStock={product.inStock} />
        </div>
        <OrderButton size="sm" productName={product.name} className="mt-1 w-full">
          <Smartphone aria-hidden="true" />
          สั่งซื้อผ่านแอป
        </OrderButton>
      </div>
    </article>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-[20px] border border-line bg-surface p-3 shadow-warm" aria-hidden="true">
      <div className="aspect-square animate-pulse rounded-[16px] bg-sun-100" />
      <div className="mt-3 h-5 w-16 animate-pulse rounded-full bg-sun-100" />
      <div className="mt-2 h-4 w-full animate-pulse rounded bg-sun-50" />
      <div className="mt-1.5 h-4 w-2/3 animate-pulse rounded bg-sun-50" />
      <div className="mt-4 h-6 w-20 animate-pulse rounded bg-sun-100" />
      <div className="mt-3 h-11 w-full animate-pulse rounded-full bg-sun-100" />
    </div>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div role="status" aria-label="กำลังโหลดสินค้า" className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}
