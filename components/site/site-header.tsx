'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Download, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from './logo'
import { OrderButton } from './download-dialog'
import { pill } from '@/lib/pill'
import { cn } from '@/lib/utils'

export const navLinks = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/products', label: 'สินค้า' },
  { href: '/news', label: 'ข่าวสารและโปรโมชัน' },
  { href: '/about', label: 'เกี่ยวกับร้าน' },
]

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/80 backdrop-blur-lg supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="เมนูหลัก" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      pill({ variant: 'ghost', size: 'sm' }),
                      'text-[15px] font-medium',
                      active && 'bg-sun-100 text-sun-700',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <OrderButton size="sm" className="hidden sm:inline-flex">
            <Download aria-hidden="true" />
            ดาวน์โหลดแอป
          </OrderButton>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="เปิดเมนู"
              className={cn(pill({ variant: 'ghost', size: 'icon' }), 'lg:hidden')}
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] border-line bg-cream p-6">
              <SheetTitle className="sr-only">เมนูนำทาง</SheetTitle>
              <Logo />
              <nav aria-label="เมนูมือถือ" className="mt-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const active = isActive(pathname, link.href)
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-ink transition-colors hover:bg-sun-100',
                            active && 'bg-sun-100 text-sun-700',
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <OrderButton className="mt-auto w-full">
                <Download aria-hidden="true" />
                ดาวน์โหลดแอป
              </OrderButton>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
