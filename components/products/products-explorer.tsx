'use client'

import { useDeferredValue, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { categories, products, type CategorySlug } from '@/lib/data'
import { ProductCard, ProductGridSkeleton } from '@/components/site/product-card'
import { EmptyState } from '@/components/site/empty-state'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { pill } from '@/lib/pill'
import { cn } from '@/lib/utils'

type Sort = 'recommended' | 'price-asc' | 'price-desc'

const sortLabels: Record<Sort, string> = {
  recommended: 'แนะนำ',
  'price-asc': 'ราคาต่ำ-สูง',
  'price-desc': 'ราคาสูง-ต่ำ',
}

function isCategory(value: string | null): value is CategorySlug {
  return !!value && categories.some((c) => c.slug === value)
}

export function ProductsExplorer() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paramCategory = searchParams.get('category')
  const category: CategorySlug | 'all' = isCategory(paramCategory) ? paramCategory : 'all'

  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<Sort>('recommended')
  const [inStockOnly, setInStockOnly] = useState(false)

  const deferredQuery = useDeferredValue(query)
  const isStale = deferredQuery !== query

  const setCategory = (slug: CategorySlug | 'all') => {
    const params = new URLSearchParams(searchParams.toString())
    if (slug === 'all') params.delete('category')
    else params.set('category', slug)
    const qs = params.toString()
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false })
  }

  const results = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    const list = products.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (inStockOnly && !p.inStock) return false
      if (q && !`${p.name} ${p.description}`.toLowerCase().includes(q)) return false
      return true
    })
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    return list
  }, [deferredQuery, category, inStockOnly, sort])

  const resetAll = () => {
    setQuery('')
    setInStockOnly(false)
    setSort('recommended')
    setCategory('all')
  }

  const chips: { slug: CategorySlug | 'all'; name: string }[] = [{ slug: 'all', name: 'ทั้งหมด' }, ...categories]

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="sticky top-18 z-30 -mx-4 border-b border-line/70 bg-cream/90 px-4 py-4 backdrop-blur-lg sm:-mx-6 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
            <label htmlFor="product-search" className="sr-only">
              ค้นหาสินค้า
            </label>
            <Input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาสินค้า เช่น นม บะหมี่ สบู่"
              className="h-12 rounded-full border-line bg-surface pr-12 pl-11 text-base shadow-warm focus-visible:border-sun-400 focus-visible:ring-sun-400/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="ล้างคำค้นหา"
                className="absolute top-1/2 right-1 flex size-11 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:text-ink"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>
          <div className="flex items-center justify-between gap-3 md:justify-end">
            <Select value={sort} onValueChange={(v) => setSort(v as Sort)}>
              <SelectTrigger
                aria-label="เรียงลำดับสินค้า"
                className="h-12! min-w-40 rounded-full border-line bg-surface px-4 text-sm shadow-warm"
              >
                <SelectValue>{(v: Sort) => sortLabels[v]}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {(Object.keys(sortLabels) as Sort[]).map((key) => (
                  <SelectItem key={key} value={key}>
                    {sortLabels[key]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <label className="flex min-h-11 cursor-pointer items-center gap-2.5 text-sm font-medium text-ink">
              <Switch
                checked={inStockOnly}
                onCheckedChange={setInStockOnly}
                className="data-checked:bg-teal"
              />
              แสดงเฉพาะสินค้ามีในสต๊อก
            </label>
          </div>
        </div>

        <div
          role="group"
          aria-label="กรองตามหมวดสินค้า"
          className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 sm:-mx-6 sm:px-6"
        >
          {chips.map((c) => {
            const active = category === c.slug
            return (
              <button
                key={c.slug}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(c.slug)}
                className={cn(
                  'inline-flex h-11 shrink-0 items-center rounded-full border px-4 text-sm font-medium transition-colors',
                  active
                    ? 'border-sun-600 bg-sun-600 text-white'
                    : 'border-line bg-surface text-ink hover:border-sun-400 hover:bg-sun-50',
                )}
              >
                {c.name}
              </button>
            )
          })}
        </div>
      </div>

      <p className="py-5 text-sm text-ink-muted" aria-live="polite">
        พบสินค้า <strong className="font-heading text-base text-ink">{results.length}</strong> รายการ
      </p>

      {isStale ? (
        <ProductGridSkeleton count={Math.max(4, Math.min(results.length, 8))} />
      ) : results.length > 0 ? (
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {results.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          title="ไม่พบสินค้าที่คุณค้นหา"
          description="ลองเปลี่ยนคำค้นหา หรือเลือกหมวดสินค้าอื่นดูนะคะ"
        >
          <button type="button" onClick={resetAll} className={pill({ variant: 'secondary' })}>
            ล้างตัวกรองทั้งหมด
          </button>
        </EmptyState>
      )}
    </div>
  )
}
