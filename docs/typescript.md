# Typescript 类型

罗列字段非全部，仅供参考。

```typescript
export interface Announcement {
  id?: number
  title: string
  content?: string
  is_link?: boolean
  link?: string
  is_visible?: boolean
  expired_at?: string
  status?: string | number
}

export interface Category {
  id: number
  title: string
  is_visible?: boolean
  sort_id?: number
  children?: Product[]
}

export interface Machine {
  id: number
  name: string
  imei: string
  shop_id?: number
  model_id?: number
  content_type?: number | string
  machine_type?: number | string
  status?: string | number
  is_online?: boolean
  cover_image?: string
  media_type?: number | string
  contact?: string
  tel?: string
  lng_lat?: string
  address?: string
  qrcode?: string
  products?: Product[]
  announcement?: Announcement
  categories?: Category[]
}

export interface Good {
  id?: number
  name: string
  description?: string
  price: number | string
  original_price: number | string
  thumb: string
  media: string[]
  content: string
}

export interface Channel {
  id: number
  name: string
  sort_id: number
}

export interface Product {
  id: number
  is_latest: boolean
  is_sticky: boolean
  sort_id: number
  status: boolean
  category: Category
  good: Good
  channel: Channel
  max_total?: number
  category_id?: number | string
  good_id?: number | string
  quantity?: number
}
```