import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHeader } from '@/components/site/page-header'
import { NewsBrowser } from '@/components/news/news-browser'

export const metadata: Metadata = {
  title: 'ข่าวสารและโปรโมชัน',
  description: 'ติดตามข่าวสารและโปรโมชันล่าสุดจากร้านรุ่งอรุณ มินิมาร์ท',
}

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="ข่าวสารและโปรโมชัน"
        description="อัปเดตความเคลื่อนไหวของร้าน และโปรโมชันดี ๆ ที่ไม่ควรพลาด"
        crumbs={[{ href: '/', label: 'หน้าแรก' }, { label: 'ข่าวสารและโปรโมชัน' }]}
      />
      <Suspense fallback={<div className="mx-auto h-96 max-w-6xl" />}>
        <NewsBrowser />
      </Suspense>
    </>
  )
}
