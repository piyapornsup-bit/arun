import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Prompt, Noto_Sans_Thai } from 'next/font/google'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { DownloadDialogProvider } from '@/components/site/download-dialog'
import { MotionProvider } from '@/components/site/motion-provider'
import './globals.css'

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['600', '700'],
  variable: '--font-prompt',
  display: 'swap',
})

const notoThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-thai',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ร้านรุ่งอรุณ มินิมาร์ท | สั่งง่าย สะสมแต้มทุกการซื้อ',
    template: '%s | รุ่งอรุณ มินิมาร์ท',
  },
  description:
    'ร้านรุ่งอรุณ มินิมาร์ท ร้านสะดวกซื้อใกล้บ้าน ดูสินค้า ข่าวสาร และโปรโมชันล่าสุด สั่งซื้อและสะสมแต้มได้ผ่านแอปรุ่งอรุณ',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#EA580C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={`${prompt.variable} ${notoThai.variable}`}>
      <body className="antialiased">
        <MotionProvider>
          <DownloadDialogProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:shadow-warm"
            >
              ข้ามไปยังเนื้อหาหลัก
            </a>
            <SiteHeader />
            <main id="main" className="min-h-[60vh]">
              {children}
            </main>
            <SiteFooter />
          </DownloadDialogProvider>
        </MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
