import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHeader } from '@/components/site/page-header'
import { ProductGridSkeleton } from '@/components/site/product-card'
import { ProductsExplorer } from '@/components/products/products-explorer'

export const metadata: Metadata = {
  title: 'สินค้าทั้งหมด',
  description: 'เลือกดูสินค้าของร้านรุ่งอรุณ มินิมาร์ท ทุกหมวด สั่งซื้อได้ผ่านแอปรุ่งอรุณ',
}

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="สินค้าทั้งหมด"
        description="ของใช้ประจำวันคุณภาพดี ราคาเป็นมิตร เลือกดูได้ที่นี่ แล้วสั่งซื้อผ่านแอป"
        crumbs={[{ href: '/', label: 'หน้าแรก' }, { label: 'สินค้า' }]}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
            <ProductGridSkeleton />
          </div>
        }
      >
        <ProductsExplorer />
      </Suspense>
    </>
  )
}
