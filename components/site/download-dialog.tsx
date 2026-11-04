'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { ShieldCheck, X } from 'lucide-react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { AppBadges } from './app-badges'
import { PhoneMockup } from './phone-mockup'
import { QrPlaceholder } from './qr-placeholder'
import { SunMotif } from './sun-motif'
import { pill, type PillProps } from '@/lib/pill'
import { cn } from '@/lib/utils'

type DownloadDialogContextValue = { openDialog: (productName?: string) => void }

const DownloadDialogContext = createContext<DownloadDialogContextValue | null>(null)

export function useDownloadDialog() {
  const ctx = useContext(DownloadDialogContext)
  if (!ctx) throw new Error('useDownloadDialog must be used within DownloadDialogProvider')
  return ctx
}

export function DownloadDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [productName, setProductName] = useState<string | undefined>()

  const openDialog = useCallback((name?: string) => {
    setProductName(name)
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ openDialog }), [openDialog])

  return (
    <DownloadDialogContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto rounded-[28px] border-0 bg-cream p-0 ring-0 shadow-[0_30px_80px_rgba(42,31,20,0.3)] duration-200 data-open:zoom-in-90 sm:max-w-2xl"
        >
          <div className="relative overflow-hidden bg-sunrise px-6 pt-8 text-white sm:px-8">
            <SunMotif
              className="pointer-events-none absolute -bottom-1 left-1/2 w-[520px] -translate-x-1/2 opacity-40"
              sunColor="#FFFFFF"
              rayColor="#FFFFFF"
              glowColor="#FFFFFF"
            />
            <div className="relative grid items-end gap-6 sm:grid-cols-[1fr_auto]">
              <div className="pb-8">
                <DialogTitle className="font-heading text-2xl leading-tight font-bold text-balance sm:text-3xl">
                  สั่งซื้อได้ผ่านแอปรุ่งอรุณเท่านั้น
                </DialogTitle>
                <DialogDescription className="mt-3 text-base leading-relaxed text-white/95">
                  {productName ? (
                    <>
                      อยากได้ <strong className="font-semibold">{productName}</strong> ใช่ไหม?
                      ดาวน์โหลดแอปฟรี แล้วสั่งซื้อพร้อมสะสมแต้มได้ทันที
                    </>
                  ) : (
                    'ดาวน์โหลดแอปฟรี สั่งของใช้ประจำวันได้ง่าย ๆ สะสมแต้มทุกการซื้อ และติดตามสถานะการจัดส่งได้ในแอป'
                  )}
                </DialogDescription>
              </div>
              <PhoneMockup compact className="mx-auto hidden translate-y-6 sm:block" />
            </div>
          </div>

          <div className="grid gap-6 px-6 py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:px-8">
            <div className="space-y-4">
              <AppBadges />
              <p className="flex items-center gap-2 text-sm text-ink-muted">
                <ShieldCheck className="size-4 shrink-0 text-teal" aria-hidden="true" />
                ดาวน์โหลดฟรี ใช้งานได้ทั้ง iOS และ Android
              </p>
            </div>
            <QrPlaceholder className="mx-auto text-ink-muted" />
          </div>

          <DialogClose
            aria-label="ปิดหน้าต่าง"
            className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          >
            <X className="size-5" aria-hidden="true" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </DownloadDialogContext.Provider>
  )
}

type OrderButtonProps = PillProps & {
  productName?: string
  className?: string
  children: React.ReactNode
}

export function OrderButton({ productName, className, children, variant, size }: OrderButtonProps) {
  const { openDialog } = useDownloadDialog()
  return (
    <button
      type="button"
      onClick={() => openDialog(productName)}
      className={cn(pill({ variant, size }), className)}
    >
      {children}
    </button>
  )
}
