import {
  Cake,
  Coins,
  Gift,
  Megaphone,
  Milk,
  Newspaper,
  PartyPopper,
  ShowerHead,
  Smile,
  SoapDispenserDroplet,
  Soup,
  Sparkles,
  Store,
  type LucideIcon,
} from 'lucide-react'
import type { IconKey } from './data'

export const iconMap: Record<IconKey, LucideIcon> = {
  gift: Gift,
  soap: SoapDispenserDroplet,
  shampoo: ShowerHead,
  toothbrush: Sparkles,
  toothpaste: Smile,
  noodles: Soup,
  milk: Milk,
  news: Newspaper,
  promo: Megaphone,
  party: PartyPopper,
  store: Store,
  coins: Coins,
  cake: Cake,
}
