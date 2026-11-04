'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { formatThaiDate, posts, type Post } from '@/lib/data'
import { ImageTile } from '@/components/site/product-image'
import { PromoRibbon, Chip } from '@/components/site/badges'
import { CountdownChip } from '@/components/site/countdown-chip'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

type Tab = 'all' | 'news' | 'promo'
const tabs: { value: Tab; label: string }[] = [
  { value: 'all', label: 'ทั้งหมด' },
  { value: 'news', label: 'ข่าวสาร' },
  { value: 'promo', label: 'โปรโมชัน' },
]

function PostCard({ post, large }: { post: Post; large?: boolean }) {
  const isPromo = post.kind === 'promo'
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-warm transition-all duration-200 hover:-translate-y-1 hover:shadow-warm-hover',
        large && 'md:grid md:grid-cols-[1.1fr_1fr]',
      )}
    >
      {isPromo && <PromoRibbon>โปรโมชัน</PromoRibbon>}
      <ImageTile
        icon={post.icon}
        label={post.title}
        size={large ? 'lg' : 'md'}
        className={cn('rounded-none', large ? 'aspect-[16/10] md:aspect-auto md:h-full' : 'aspect-[16/9]')}
      />
      <div className={cn('flex flex-1 flex-col gap-3 p-5', large && 'md:justify-center md:p-8')}>
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
          <Chip className={isPromo ? 'bg-berry/10 text-berry' : 'bg-teal/10 text-teal'}>
            {isPromo ? 'โปรโมชัน' : 'ข่าวสาร'}
          </Chip>
          <time dateTime={post.date}>{formatThaiDate(post.date)}</time>
        </div>
        <h2 className={cn('font-heading font-semibold text-ink', large ? 'text-2xl sm:text-3xl' : 'text-lg')}>
          <Link href={`/news/${post.id}`} className="after:absolute after:inset-0 hover:text-sun-700">
            {post.title}
          </Link>
        </h2>
        <p className={cn('text-ink-muted', large ? 'line-clamp-3' : 'line-clamp-2 text-sm')}>{post.excerpt}</p>
        {post.validUntil && (
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 text-ink-muted">
              <CalendarDays className="size-4" aria-hidden="true" />
              ใช้ได้ถึง {formatThaiDate(post.validUntil)}
            </span>
            <CountdownChip until={post.validUntil} />
          </div>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-teal">
          อ่านต่อ
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}

export function NewsBrowser() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const param = searchParams.get('tab')
  const tab: Tab = param === 'news' || param === 'promo' ? param : 'all'

  const list = [...posts]
    .filter((p) => tab === 'all' || p.kind === tab)
    .sort((a, b) => b.date.localeCompare(a.date))

  const onTabChange = (value: Tab) => {
    router.replace(value === 'all' ? '/news' : `/news?tab=${value}`, { scroll: false })
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Tabs value={tab} onValueChange={(v) => onTabChange(v as Tab)}>
        <TabsList
          aria-label="ประเภทข่าวสาร"
          className="h-auto! gap-1 rounded-full border border-line bg-surface p-1.5 shadow-warm"
        >
          {tabs.map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              className="h-11! rounded-full px-5 text-sm font-semibold text-ink-muted data-active:bg-sun-600! data-active:text-white! data-active:shadow-none"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.ul
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((post, i) => (
            <li key={post.id} className={cn(i === 0 && 'md:col-span-2 lg:col-span-3')}>
              <PostCard post={post} large={i === 0} />
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}
