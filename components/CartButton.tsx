"use client"

import Image from "next/image"
import { useState } from "react"
import { formatVnd, useCart } from "./CartContext"

const PHONE = "0357177160"

export default function CartButton() {
  const [open, setOpen] = useState(false)
  const {
    items,
    totalItems,
    totalPrice,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useCart()

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cart-target="true"
        className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition hover:bg-white/60"
        aria-label="Giỏ hàng"
        title="Giỏ hàng"
      >
        <CartIcon />
        {totalItems > 0 ? (
          <span className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-[#307330] px-1 text-xs font-extrabold text-white">
            {totalItems}
          </span>
        ) : null}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Đóng giỏ hàng"
            onClick={() => setOpen(false)}
          />

          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="text-2xl font-extrabold text-[#307330]">
                Giỏ hàng
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border px-3 py-1 text-xl font-bold transition hover:bg-neutral-50"
                aria-label="Đóng"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length ? (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.slug} className="flex gap-3 border-b pb-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded bg-[#307330]/5">
                        <Image
                          src={item.image || "/images/product-placeholder.png"}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="font-extrabold text-[#307330]">
                          {item.name}
                        </div>
                        <div className="mt-1 text-sm font-bold text-neutral-600">
                          {item.price ? formatVnd(item.price) : "Liên hệ"}
                          {item.unit ? `/${item.unit}` : ""}
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => decrementItem(item.slug)}
                            className="grid h-8 w-8 place-items-center rounded border font-extrabold"
                            aria-label="Giảm số lượng"
                          >
                            -
                          </button>
                          <div className="min-w-8 text-center font-extrabold">
                            {item.quantity}
                          </div>
                          <button
                            type="button"
                            onClick={() => addItem(item)}
                            className="grid h-8 w-8 place-items-center rounded border font-extrabold"
                            aria-label="Tăng số lượng"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(item.slug)}
                            className="ml-auto text-sm font-bold text-red-600 hover:underline"
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl bg-[#307330]/5 p-5 text-center font-bold text-neutral-700">
                  Giỏ hàng đang trống.
                </div>
              )}
            </div>

            <div className="border-t px-5 py-4">
              <div className="flex items-center justify-between text-lg font-extrabold">
                <span>Tổng cộng</span>
                <span className="text-[#307330]">{formatVnd(totalPrice)}</span>
              </div>

              <div className="mt-4 grid gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-xl bg-[#307330] px-5 py-3 text-center font-extrabold text-white transition hover:bg-[#307330]"
                >
                  Gọi đặt hàng
                </a>
                {items.length ? (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="rounded-xl border px-5 py-3 font-extrabold transition hover:bg-neutral-50"
                  >
                    Xóa toàn bộ
                  </button>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  )
}

function CartIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM7.2 14.75c-.75 0-1.41-.41-1.75-1.03L2 4H1a1 1 0 1 1 0-2h1.7c.43 0 .81.27.95.68L4.36 5H21a1 1 0 0 1 .95 1.32l-2.4 7.2A2 2 0 0 1 17.65 15H7.2Zm-.2-2h10.65l1.93-5.75H5.03l1.97 5.75Z"
      />
    </svg>
  )
}
