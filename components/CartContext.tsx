"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { formatVnd } from "@/lib/format"

export type CartProduct = {
  slug: string
  name: string
  price: number
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
const STORAGE_KEY = "vietpineapple-cart"

export { formatVnd }

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
        : 0
    const quantity =
      typeof candidate.quantity === "number" && Number.isFinite(candidate.quantity)
        ? Math.floor(candidate.quantity)
        : 0

    if (!slug || !name || price <= 0 || quantity <= 0) return []

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

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      setItems(raw ? sanitizeCartItems(JSON.parse(raw)) : [])
    } catch {
      setItems([])
    } finally {
      setReady(true)
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, ready])

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )

    return {
      items,
      totalItems,
      totalPrice,
      addItem(product, quantity = 1) {
        const amount = Math.max(1, Math.floor(quantity))
        if (!Number.isFinite(product.price) || product.price <= 0) return

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
