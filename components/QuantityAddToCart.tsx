"use client"

import { useState } from "react"
import AddToCartButton from "./AddToCartButton"
import { type CartProduct } from "./CartContext"

export default function QuantityAddToCart({
  product,
  compact = false,
}: {
  product: CartProduct
  compact?: boolean
}) {
  const [quantity, setQuantity] = useState(1)

  function updateQuantity(value: number) {
    if (Number.isNaN(value)) {
      setQuantity(1)
      return
    }

    setQuantity(Math.max(1, Math.min(99, Math.floor(value))))
  }

  const controlSize = compact ? "h-9 w-9" : "h-11 w-11"
  const inputSize = compact ? "h-9 w-12" : "h-11 w-14"

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => updateQuantity(quantity - 1)}
        className={`${controlSize} rounded border bg-white text-lg font-extrabold text-emerald-800 transition hover:bg-lime-50`}
        aria-label="Giảm số lượng"
      >
        -
      </button>

      <input
        value={quantity}
        onChange={(event) => updateQuantity(Number(event.target.value))}
        inputMode="numeric"
        className={`${inputSize} rounded border text-center font-extrabold text-emerald-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-lime-200`}
        aria-label="Số lượng"
      />

      <button
        type="button"
        onClick={() => updateQuantity(quantity + 1)}
        className={`${controlSize} rounded border bg-white text-lg font-extrabold text-emerald-800 transition hover:bg-lime-50`}
        aria-label="Tăng số lượng"
      >
        +
      </button>

      <AddToCartButton
        product={product}
        quantity={quantity}
        className={`${controlSize} inline-flex items-center justify-center rounded bg-emerald-700 text-white transition-all duration-200 hover:bg-emerald-800`}
        title="Thêm vào giỏ hàng"
      >
        🛒
      </AddToCartButton>
    </div>
  )
}
