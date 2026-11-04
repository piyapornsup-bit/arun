'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Coins } from 'lucide-react'
import { AppBadges } from '@/components/site/app-badges'
import { PhoneMockup } from '@/components/site/phone-mockup'
import { QrPlaceholder } from '@/components/site/qr-placeholder'
import { SunMotif } from '@/components/site/sun-motif'
import { Wave } from '@/components/site/wave'

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-sunrise text-white">
      <SunMotif
        className="pointer-events-none absolute bottom-6 left-1/2 w-[900px] max-w-none -translate-x-1/2 opacity-30 sm:bottom-10"
        sunColor="#FFFFFF"
        rayColor="#FFFFFF"
        glowColor="#FFFFFF"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-6 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pb-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
            <Coins className="size-4" aria-hidden="true" />
            ซื้อครบ 50 บาท ได้ 5 แต้ม ทุกช่องทาง
          </p>
          <h1 id="hero-title" className="mt-5 text-balance drop-shadow-[0_2px_12px_rgba(194,65,12,0.25)]">
            สั่งง่าย สะสมแต้มทุกการซื้อ ผ่านแอปรุ่งอรุณ
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/95">
            ของใช้ประจำวันครบ ใกล้บ้านคุณ เลือกสินค้าได้ในไม่กี่แตะ
            รับแต้มทุกบิล แลกเป็นส่วนลดได้ทันที
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <AppBadges />
            <QrPlaceholder className="hidden text-white sm:inline-flex" />
          </div>
        </motion.div>

        <div className="relative flex justify-center pb-6 lg:justify-end">
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <PhoneMockup className="rotate-[-4deg]" />
          </motion.div>
          <div
            className="absolute top-10 right-0 hidden rounded-2xl bg-surface px-4 py-3 text-ink shadow-warm-hover sm:block lg:-right-4"
            aria-hidden="true"
          >
            <p className="text-xs text-ink-muted">ได้รับแต้มแล้ว</p>
            <p className="font-heading text-lg font-bold text-sun-600">+5 แต้ม</p>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  )
}
