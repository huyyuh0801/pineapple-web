"use client"

import { useState } from "react"
import { type CartProduct, useCart } from "./CartContext"

function findVisibleCartTarget() {
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>("[data-cart-target='true']")
  )

  return targets.find((target) => {
    const rect = target.getBoundingClientRect()
    const style = window.getComputedStyle(target)
    return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden"
  })
}

function flyToCart(source: HTMLElement) {
  const target = findVisibleCartTarget()
  if (!target) return

  const sourceRect = source.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  const startX = sourceRect.left + sourceRect.width / 2
  const startY = sourceRect.top + sourceRect.height / 2
  const endX = targetRect.left + targetRect.width / 2
  const endY = targetRect.top + targetRect.height / 2

  const flyer = document.createElement("div")
  flyer.textContent = "🛒"
  flyer.className =
    "pointer-events-none fixed z-[200] grid h-10 w-10 place-items-center rounded-full bg-lime-200 text-2xl shadow-xl"
  flyer.style.left = `${startX - 20}px`
  flyer.style.top = `${startY - 20}px`
  document.body.appendChild(flyer)

  const animation = flyer.animate(
    [
      { transform: "translate(0, 0) scale(1)", opacity: 1 },
      {
        transform: `translate(${endX - startX}px, ${
          endY - startY
        }px) scale(0.2) rotate(12deg)`,
        opacity: 0.15,
      },
    ],
    {
      duration: 650,
      easing: "cubic-bezier(.2,.8,.2,1)",
    }
  )

  source.animate(
    [
      { transform: "scale(1)", filter: "brightness(1)" },
      { transform: "scale(1.12)", filter: "brightness(1.25)" },
      { transform: "scale(1)", filter: "brightness(1)" },
    ],
    { duration: 260, easing: "ease-out" }
  )

  animation.onfinish = () => {
    flyer.remove()
    target.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.22)" },
        { transform: "scale(1)" },
      ],
      { duration: 220, easing: "ease-out" }
    )
  }
}

export default function AddToCartButton({
  product,
  className = "",
  children,
  disabled = false,
  title = "Thêm vào giỏ hàng",
  quantity = 1,
}: {
  product: CartProduct
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  title?: string
  quantity?: number
}) {
  const { addItem } = useCart()
  const [active, setActive] = useState(false)

  return (
    <span className="inline-flex">
      <button
        type="button"
        onClick={(event) => {
          flyToCart(event.currentTarget)
          setActive(true)
          window.setTimeout(() => setActive(false), 300)
          addItem(product, quantity)
        }}
        disabled={disabled}
        className={`${className} ${active ? "ring-4 ring-lime-300/80" : ""}`}
        aria-label={title}
        title={title}
      >
        {children ?? <CartPlusIcon />}
      </button>
    </span>
  )
}

function CartPlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM7.2 14.75c-.75 0-1.41-.41-1.75-1.03L2 4H1a1 1 0 1 1 0-2h1.7c.43 0 .81.27.95.68L4.36 5H21a1 1 0 0 1 .95 1.32l-2.4 7.2A2 2 0 0 1 17.65 15H7.2Zm-.2-2h10.65l1.93-5.75H5.03l1.97 5.75ZM12 8h2V6a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2Z"
      />
    </svg>
  )
}
