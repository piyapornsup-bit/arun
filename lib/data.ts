export type CategorySlug =
  | 'gift'
  | 'soap'
  | 'shampoo'
  | 'toothbrush'
  | 'toothpaste'
  | 'noodles'
  | 'milk'

export type IconKey =
  | CategorySlug
  | 'news'
  | 'promo'
  | 'party'
  | 'store'
  | 'coins'
  | 'cake'

export type Category = {
  slug: CategorySlug
  name: string
  tint: string
}

export type Product = {
  id: string
  name: string
  category: CategorySlug
  price: number
  originalPrice?: number
  unit: string
  inStock: boolean
  featured: boolean
  promo?: string
  description: string
}

export type Post = {
  id: string
  kind: 'news' | 'promo'
  title: string
  excerpt: string
  body: string[]
  date: string
  validUntil?: string
  icon: IconKey
  relatedProductIds: string[]
}

export const categories: Category[] = [
  { slug: 'gift', name: 'กิ๊ฟช็อป', tint: 'from-rose-100 to-sun-100' },
  { slug: 'soap', name: 'สบู่', tint: 'from-sky-100 to-teal-50' },
  { slug: 'shampoo', name: 'แชมพู', tint: 'from-violet-100 to-sky-50' },
  { slug: 'toothbrush', name: 'แปรงสีฟัน', tint: 'from-teal-100 to-emerald-50' },
  { slug: 'toothpaste', name: 'ยาสีฟัน', tint: 'from-emerald-100 to-sky-50' },
  { slug: 'noodles', name: 'บะหมี่กึ่งสำเร็จรูป', tint: 'from-amber-100 to-sun-200' },
  { slug: 'milk', name: 'นม', tint: 'from-sky-50 to-sun-50' },
]

export const products: Product[] = [
  {
    id: 'gift-bear-set',
    name: 'ชุดของขวัญตุ๊กตาหมีพร้อมการ์ด',
    category: 'gift',
    price: 259,
    originalPrice: 299,
    unit: 'ชุด',
    inStock: true,
    featured: true,
    promo: 'ลด 40 บาท',
    description:
      'ชุดของขวัญน่ารักพร้อมตุ๊กตาหมีขนนุ่มและการ์ดอวยพร ห่อด้วยกระดาษสีพาสเทลพร้อมโบว์ เหมาะสำหรับมอบให้คนพิเศษในทุกโอกาส',
  },
  {
    id: 'gift-scented-candle',
    name: 'เทียนหอมกลิ่นส้มยูซุ',
    category: 'gift',
    price: 129,
    unit: 'ชิ้น',
    inStock: true,
    featured: false,
    description:
      'เทียนหอมไขถั่วเหลืองกลิ่นส้มยูซุ ช่วยให้รู้สึกสดชื่นผ่อนคลาย จุดได้นานประมาณ 20 ชั่วโมง บรรจุในโหลแก้วพร้อมฝาไม้',
  },
  {
    id: 'soap-herbal-bar',
    name: 'สบู่สมุนไพรขมิ้นน้ำผึ้ง',
    category: 'soap',
    price: 35,
    unit: 'ก้อน 100 กรัม',
    inStock: true,
    featured: true,
    promo: 'ซื้อ 3 จ่าย 2',
    description:
      'สบู่ก้อนสูตรสมุนไพรไทย ผสมขมิ้นชันและน้ำผึ้ง ช่วยทำความสะอาดอย่างอ่อนโยน ผิวนุ่มชุ่มชื้นหลังอาบน้ำ',
  },
  {
    id: 'soap-liquid-milk',
    name: 'ครีมอาบน้ำสูตรน้ำนม',
    category: 'soap',
    price: 89,
    unit: 'ขวด 450 มล.',
    inStock: true,
    featured: false,
    description:
      'ครีมอาบน้ำเนื้อครีมนุ่ม สูตรผสมโปรตีนน้ำนม อ่อนโยนต่อผิว ใช้ได้ทุกวันทั้งครอบครัว กลิ่นหอมละมุน',
  },
  {
    id: 'shampoo-anti-hairfall',
    name: 'แชมพูสูตรลดผมขาดหลุดร่วง',
    category: 'shampoo',
    price: 119,
    originalPrice: 139,
    unit: 'ขวด 340 มล.',
    inStock: true,
    featured: true,
    promo: 'ลด 20 บาท',
    description:
      'แชมพูสูตรอ่อนโยน ผสมสารสกัดอัญชันและมะกรูด ช่วยบำรุงหนังศีรษะ ลดการขาดหลุดร่วงของเส้นผม ผมนุ่มลื่นไม่พันกัน',
  },
  {
    id: 'shampoo-kids',
    name: 'แชมพูเด็กกลิ่นพีช ไม่แสบตา',
    category: 'shampoo',
    price: 79,
    unit: 'ขวด 200 มล.',
    inStock: false,
    featured: true,
    description:
      'แชมพูสำหรับเด็ก สูตรไม่แสบตา ค่า pH สมดุล กลิ่นพีชหอมอ่อน ๆ ใช้ได้ตั้งแต่เด็กเล็ก ผ่านการทดสอบการระคายเคือง',
  },
  {
    id: 'toothbrush-soft',
    name: 'แปรงสีฟันขนนุ่มพิเศษ แพ็ก 2',
    category: 'toothbrush',
    price: 49,
    unit: 'แพ็ก',
    inStock: true,
    featured: true,
    description:
      'แปรงสีฟันขนนุ่มพิเศษ ปลายขนเรียวเล็ก เข้าถึงซอกฟันได้ดี อ่อนโยนต่อเหงือก ด้ามจับกระชับมือ แพ็กละ 2 ด้าม',
  },
  {
    id: 'toothpaste-herbal',
    name: 'ยาสีฟันสมุนไพรเกลือทะเล',
    category: 'toothpaste',
    price: 55,
    unit: 'หลอด 160 กรัม',
    inStock: true,
    featured: true,
    promo: 'แถมแปรงสีฟัน',
    description:
      'ยาสีฟันสูตรสมุนไพรผสมเกลือทะเล ช่วยให้ลมหายใจหอมสดชื่น ลดการสะสมของคราบหินปูน ฟันแข็งแรงด้วยฟลูออไรด์',
  },
  {
    id: 'toothpaste-whitening',
    name: 'ยาสีฟันสูตรฟันขาว มิ้นต์เย็น',
    category: 'toothpaste',
    price: 69,
    unit: 'หลอด 120 กรัม',
    inStock: false,
    featured: false,
    description:
      'ยาสีฟันสูตรช่วยให้ฟันขาวอย่างอ่อนโยน กลิ่นมิ้นต์เย็นสดชื่นยาวนาน ช่วยขจัดคราบชาและกาแฟ',
  },
  {
    id: 'noodles-tomyum',
    name: 'บะหมี่กึ่งสำเร็จรูป รสต้มยำกุ้ง',
    category: 'noodles',
    price: 7,
    unit: 'ซอง 55 กรัม',
    inStock: true,
    featured: true,
    description:
      'บะหมี่กึ่งสำเร็จรูปรสต้มยำกุ้งเข้มข้น หอมเครื่องต้มยำแบบไทยแท้ เส้นเหนียวนุ่ม พร้อมทานใน 3 นาที',
  },
  {
    id: 'noodles-cup-pork',
    name: 'บะหมี่ถ้วย รสหมูสับ',
    category: 'noodles',
    price: 15,
    unit: 'ถ้วย 60 กรัม',
    inStock: true,
    featured: false,
    promo: '6 ถ้วย 80 บาท',
    description:
      'บะหมี่ถ้วยพร้อมทาน รสหมูสับกลมกล่อม เติมน้ำร้อนรอเพียง 3 นาที สะดวกสำหรับมื้อเร่งด่วนทุกเวลา',
  },
  {
    id: 'milk-uht-plain',
    name: 'นมยูเอชที รสจืด',
    category: 'milk',
    price: 13,
    unit: 'กล่อง 225 มล.',
    inStock: true,
    featured: true,
    description:
      'นมโคแท้ 100% ผ่านกรรมวิธียูเอชที รสจืด อุดมด้วยแคลเซียมและโปรตีน เก็บได้นานโดยไม่ต้องแช่เย็นก่อนเปิด',
  },
]

export const posts: Post[] = [
  {
    id: 'promo-points-double',
    kind: 'promo',
    title: 'สะสมแต้มทุกการซื้อ ใช้เป็นส่วนลดได้ทุกช่องทาง',
    excerpt: 'ซื้อครบ 50 บาท ได้ 5 แต้ม ทั้งในแอปและที่หน้าร้าน แลกแต้มเป็นส่วนลดได้ทันที',
    body: [
      'สมาชิกรุ่งอรุณสะสมแต้มได้ทุกการซื้อ ไม่ว่าจะสั่งผ่านแอปหรือซื้อที่เคาน์เตอร์ ซื้อครบ 50 บาท ได้ 5 แต้ม',
      'นำแต้มไปใช้เป็นส่วนลดได้ โดย 10 แต้ม แลกส่วนลด 1 บาท เลือกใช้แต้มในหน้าชำระเงินของแอป หรือแจ้งพนักงานที่เคาน์เตอร์',
      'เปิดรหัส QR สมาชิกในแอปให้พนักงานสแกน เพื่อสะสมและใช้แต้มที่หน้าร้านได้ทันที แต้มจากการสั่งผ่านแอปจะเข้าบัญชีหลังร้านตรวจสอบการชำระเงินเรียบร้อย',
    ],
    date: '2026-11-01',
    icon: 'coins',
    relatedProductIds: ['noodles-tomyum', 'milk-uht-plain', 'soap-herbal-bar', 'toothpaste-herbal'],
  },
  {
    id: 'promo-oral-care',
    kind: 'promo',
    title: 'ยาสีฟันแถมแปรงสีฟัน',
    excerpt: 'ซื้อยาสีฟันสมุนไพรเกลือทะเล รับฟรีแปรงสีฟันขนนุ่ม 1 ด้าม',
    body: [
      'ดูแลรอยยิ้มของทุกคนในบ้าน เมื่อซื้อยาสีฟันสมุนไพรเกลือทะเลขนาด 160 กรัม รับฟรีแปรงสีฟันขนนุ่มพิเศษ 1 ด้ามทันที',
      'โปรโมชันมีจำนวนจำกัด เมื่อของแถมหมดแล้วขอสงวนสิทธิ์ในการยุติโปรโมชันโดยไม่ต้องแจ้งให้ทราบล่วงหน้า',
    ],
    date: '2026-11-01',
    validUntil: '2026-12-15',
    icon: 'toothpaste',
    relatedProductIds: ['toothpaste-herbal', 'toothbrush-soft', 'toothpaste-whitening'],
  },
  {
    id: 'promo-noodle-box',
    kind: 'promo',
    title: 'บะหมี่ถ้วย 6 ถ้วย เพียง 80 บาท',
    excerpt: 'ตุนไว้ทานยามหิว บะหมี่ถ้วยรสหมูสับ ซื้อครบ 6 ถ้วยราคาพิเศษ',
    body: [
      'มื้อด่วนก็อร่อยได้ บะหมี่ถ้วยรสหมูสับ ปกติถ้วยละ 15 บาท ซื้อครบ 6 ถ้วยจ่ายเพียง 80 บาท ประหยัดทันที 10 บาท',
      'สามารถคละซื้อในบิลเดียวกันได้ และยังสะสมแต้มตามปกติทุกช่องทาง',
    ],
    date: '2026-11-02',
    validUntil: '2026-11-30',
    icon: 'noodles',
    relatedProductIds: ['noodles-cup-pork', 'noodles-tomyum', 'milk-uht-plain'],
  },
  {
    id: 'promo-gift-season',
    kind: 'promo',
    title: 'ชุดของขวัญลดพิเศษรับเทศกาลปีใหม่',
    excerpt: 'ชุดของขวัญตุ๊กตาหมีพร้อมการ์ด ลดทันที 40 บาท ห่อของขวัญฟรี',
    body: [
      'ส่งความสุขต้อนรับปีใหม่ให้คนที่คุณรัก ชุดของขวัญตุ๊กตาหมีพร้อมการ์ดอวยพร ลดราคาทันที 40 บาท',
      'พิเศษ! บริการห่อของขวัญฟรีทุกชิ้น',
    ],
    date: '2026-11-03',
    validUntil: '2027-01-05',
    icon: 'gift',
    relatedProductIds: ['gift-bear-set', 'gift-scented-candle'],
  },
  {
    id: 'news-app-launch',
    kind: 'news',
    title: 'เปิดตัวแอปรุ่งอรุณเวอร์ชันใหม่ สั่งง่ายกว่าเดิม',
    excerpt: 'แอปรุ่งอรุณเวอร์ชันใหม่ ค้นหาสินค้าไวขึ้น ดูแต้มสะสมและรหัส QR สมาชิกได้ทันที',
    body: [
      'เราตั้งใจพัฒนาแอปรุ่งอรุณเวอร์ชันใหม่เพื่อให้ทุกคนในชุมชนสั่งของใช้ประจำวันได้ง่ายที่สุด หน้าตาสะอาดตา ตัวอักษรอ่านง่าย เหมาะกับทุกวัย',
      'ฟีเจอร์ใหม่ ได้แก่ การค้นหาสินค้าแบบรวดเร็ว หน้าสรุปแต้มสะสม รหัส QR สมาชิกสำหรับใช้ที่เคาน์เตอร์ และการติดตามสถานะการจัดส่ง',
      'ดาวน์โหลดหรืออัปเดตแอปได้แล้ววันนี้ ทั้งบน App Store และ Google Play',
    ],
    date: '2026-10-20',
    icon: 'news',
    relatedProductIds: ['milk-uht-plain', 'noodles-tomyum', 'soap-herbal-bar'],
  },
  {
    id: 'news-new-hours',
    kind: 'news',
    title: 'ร้านรุ่งอรุณเปิดทุกวัน 08.30–20.00 น.',
    excerpt: 'เปิดให้บริการทุกวันไม่เว้นวันหยุด สั่งผ่านแอปได้ตลอดเวลา',
    body: [
      'ร้านรุ่งอรุณ มินิมาร์ท เปิดให้บริการทุกวัน ตั้งแต่เวลา 08.30 ถึง 20.00 น. รวมถึงวันหยุดนักขัตฤกษ์',
      'สั่งซื้อผ่านแอปได้ตลอดเวลา ร้านจะตรวจสอบการชำระเงินและจัดเตรียมสินค้าในเวลาทำการ',
    ],
    date: '2026-10-28',
    icon: 'store',
    relatedProductIds: ['milk-uht-plain', 'noodles-cup-pork'],
  },
  {
    id: 'news-birthday-gift',
    kind: 'news',
    title: 'สมาชิกรับของขวัญวันเกิดฟรี',
    excerpt: 'ระบุวันเกิดและที่อยู่ในแอป แล้วรับของขวัญวันเกิดส่งถึงบ้าน',
    body: [
      'รุ่งอรุณอยากร่วมเป็นส่วนหนึ่งในวันพิเศษของคุณ สมาชิกที่ระบุวันเกิดและที่อยู่จัดส่งในแอป จะได้รับของขวัญวันเกิดจากร้านส่งตามที่อยู่ที่ระบุ',
      'ตรวจสอบและอัปเดตที่อยู่จัดส่งในแอปให้เป็นปัจจุบัน เพื่อให้ของขวัญถึงมือคุณอย่างถูกต้อง',
    ],
    date: '2026-10-15',
    icon: 'cake',
    relatedProductIds: ['gift-bear-set', 'gift-scented-candle'],
  },
  {
    id: 'news-new-year-fair',
    kind: 'news',
    title: 'ของขวัญปีใหม่ส่งถึงบ้านสมาชิก',
    excerpt: 'ร้านเตรียมของขวัญเทศกาลปีใหม่ให้สมาชิก จัดส่งตามที่อยู่ในแอป',
    body: [
      'เทศกาลปีใหม่นี้ ร้านรุ่งอรุณเตรียมของขวัญสำหรับสมาชิก จัดส่งตามที่อยู่จัดส่งที่บันทึกไว้ในแอป',
      'กรุณาตรวจสอบที่อยู่ให้ถูกต้องก่อนวันจัดส่ง สมาชิกจะได้รับการแจ้งเตือนเมื่อร้านจัดส่งของขวัญแล้ว',
    ],
    date: '2026-11-02',
    icon: 'party',
    relatedProductIds: ['gift-bear-set', 'noodles-tomyum'],
  },
]

export const promotions = posts.filter((p) => p.kind === 'promo')

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id)
}

export function getPost(id: string) {
  return posts.find((p) => p.id === id)
}

export function formatBaht(value: number) {
  return `฿${value.toLocaleString('th-TH')}`
}

export function formatThaiDate(iso: string) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${Number(y) + 543}`
}
