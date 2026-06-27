"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { formatVnd } from "@/lib/format"

export type CartProduct = {
  slug: string
  name: string
  price: number | null
  unit?: string | null
  image?: string | null
}

export type CartItem = CartProduct & {
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (product: CartProduct, quantity?: number) => void
  decrementItem: (slug: string) => void
  removeItem: (slug: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_PREFIX = "vietpineapple-cart"
const DEVICE_COOKIE = "vietpineapple-device-id"
const LEGACY_STORAGE_KEY = STORAGE_PREFIX

export { formatVnd }

function getCookieValue(name: string) {
  const match = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))

  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null
}

function createDeviceId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID()
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

function getDeviceStorageKey() {
  let deviceId = getCookieValue(DEVICE_COOKIE)

  if (!deviceId) {
    deviceId = createDeviceId()
    document.cookie = `${DEVICE_COOKIE}=${encodeURIComponent(
      deviceId
    )}; Max-Age=31536000; Path=/; SameSite=Lax`
  }

  return `${STORAGE_PREFIX}:${deviceId}`
}

function sanitizeCartItems(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return []

  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return []

    const candidate = item as Partial<CartItem>
    const slug = typeof candidate.slug === "string" ? candidate.slug : ""
    const name = typeof candidate.name === "string" ? candidate.name : ""
    const price =
      typeof candidate.price === "number" && Number.isFinite(candidate.price)
        ? candidate.price
        : null
    const quantity =
      typeof candidate.quantity === "number" && Number.isFinite(candidate.quantity)
        ? Math.floor(candidate.quantity)
        : 0

    if (!slug || !name || quantity <= 0) return []
    if (price !== null && price <= 0) return []

    return [
      {
        slug,
        name,
        price,
        quantity: Math.min(quantity, 99),
        unit: typeof candidate.unit === "string" ? candidate.unit : null,
        image: typeof candidate.image === "string" ? candidate.image : null,
      },
    ]
  })
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [ready, setReady] = useState(false)
  const [storageKey, setStorageKey] = useState<string | null>(null)

  useEffect(() => {
    try {
      const deviceStorageKey = getDeviceStorageKey()
      const raw = window.localStorage.getItem(deviceStorageKey)
      window.localStorage.removeItem(LEGACY_STORAGE_KEY)
      setStorageKey(deviceStorageKey)
      setItems(raw ? sanitizeCartItems(JSON.parse(raw)) : [])
    } catch {
      setItems([])
    } finally {
      setReady(true)
    }
  }, [])

  useEffect(() => {
    if (!ready || !storageKey) return
    window.localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items, ready, storageKey])

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce(
      (sum, item) => sum + (item.price || 0) * item.quantity,
      0
    )

    return {
      items,
      totalItems,
      totalPrice,
      addItem(product, quantity = 1) {
        const amount = Math.max(1, Math.floor(quantity))
        if (
          product.price !== null &&
          (!Number.isFinite(product.price) || product.price <= 0)
        ) {
          return
        }

        setItems((current) => {
          const existing = current.find((item) => item.slug === product.slug)
          if (existing) {
            return current.map((item) =>
              item.slug === product.slug
                ? { ...item, quantity: Math.min(item.quantity + amount, 99) }
                : item
            )
          }

          return [...current, { ...product, quantity: Math.min(amount, 99) }]
        })
      },
      decrementItem(slug) {
        setItems((current) =>
          current.flatMap((item) => {
            if (item.slug !== slug) return [item]
            if (item.quantity <= 1) return []
            return [{ ...item, quantity: item.quantity - 1 }]
          })
        )
      },
      removeItem(slug) {
        setItems((current) => current.filter((item) => item.slug !== slug))
      },
      clearCart() {
        setItems([])
      },
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }
  return context
}
