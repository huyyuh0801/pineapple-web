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

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return []
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

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

        setItems((current) => {
          const existing = current.find((item) => item.slug === product.slug)
          if (existing) {
            return current.map((item) =>
              item.slug === product.slug
                ? { ...item, quantity: item.quantity + amount }
                : item
            )
          }

          return [...current, { ...product, quantity: amount }]
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
