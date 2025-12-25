"use client"

import Image from "next/image"

type Product = {
  slug: string
  name: string
  price: string // ví dụ: "25.000đ/kg"
  origin?: string
  taste?: string
  desc?: string
  tags: string[]
  image?: string
}

function parsePriceVND(priceText: string) {
  // Lấy số trong chuỗi "25.000đ/kg" -> 25000
  const digits = priceText.replace(/[^\d]/g, "")
  const n = Number(digits)
  return Number.isFinite(n) && n > 0 ? n : null
}

function formatVND(n: number) {
  return n.toLocaleString("vi-VN") + "đ"
}

export default function ProductDetailClient({
  product,
  orderLinks,
}: {
  product: Product
  orderLinks: {
    zalo: string
    messenger?: string
    phone?: string
  }
}) {
  const unit = parsePriceVND(product.price)
  const [qty, setQty] = useState(1) // kg

  const total = unit ? unit * qty : null

  const orderText = encodeURIComponent(
    `Mình muốn đặt:\n- Sản phẩm: ${product.name}\n- Số lượng: ${qty} kg\n- Giá tham khảo: ${product.price}\n- Ghi chú: `
  )

  const zaloHref = orderLinks.zalo.includes("?")
    ? `${orderLinks.zalo}&text=${orderText}`
    : `${orderLinks.zalo}?text=${orderText}`

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* LEFT: IMAGE */}
      <div className="rounded-3xl border bg-white overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-sm font-semibold text-neutral-600">
                (Chưa có ảnh) • Thêm image trong data để hiển thị
              </div>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {product.tags?.map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs md:text-sm font-semibold text-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: INFO / BUY BOX */}
      <div className="space-y-6">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-base md:text-lg font-extrabold text-emerald-700">
              {product.price}
            </span>

            {total !== null ? (
              <span className="text-base md:text-lg font-semibold text-neutral-700">
                Tổng tạm tính: <b>{formatVND(total)}</b>
              </span>
            ) : (
              <span className="text-sm md:text-base text-neutral-500">
                (Không tính được tổng vì giá không phải dạng số)
              </span>
            )}
          </div>

          {/* Quick meta */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 text-base md:text-lg text-neutral-700">
            {product.origin ? (
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="text-sm font-semibold text-neutral-500">Nguồn gốc</div>
                <div className="mt-1 font-bold">{product.origin}</div>
              </div>
            ) : null}

            {product.taste ? (
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="text-sm font-semibold text-neutral-500">Hương vị</div>
                <div className="mt-1 font-bold">{product.taste}</div>
              </div>
            ) : null}
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <div className="text-sm font-semibold text-neutral-600">Số lượng (kg)</div>

            <div className="mt-2 flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="rounded-2xl border px-4 py-2 text-lg font-extrabold hover:bg-neutral-50 transition"
                aria-label="Giảm"
              >
                −
              </button>

              <div className="min-w-[76px] rounded-2xl border bg-white px-4 py-2 text-center text-lg font-extrabold">
                {qty}
              </div>

              <button
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="rounded-2xl border px-4 py-2 text-lg font-extrabold hover:bg-neutral-50 transition"
                aria-label="Tăng"
              >
                +
              </button>

              <div className="ml-auto text-sm md:text-base text-neutral-500">
                Gợi ý: 2–3kg cho gia đình
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={zaloHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-600 px-6 py-3 text-center text-base md:text-lg font-extrabold text-white hover:bg-emerald-700 transition"
            >
              Đặt qua Zalo
            </a>

            {orderLinks.phone ? (
              <a
                href={`tel:${orderLinks.phone}`}
                className="rounded-2xl border px-6 py-3 text-center text-base md:text-lg font-extrabold hover:bg-neutral-50 transition"
              >
                Gọi ngay
              </a>
            ) : (
              <a
                href={orderLinks.messenger || "#"}
                target={orderLinks.messenger ? "_blank" : undefined}
                rel={orderLinks.messenger ? "noreferrer" : undefined}
                className="rounded-2xl border px-6 py-3 text-center text-base md:text-lg font-extrabold hover:bg-neutral-50 transition"
              >
                Nhắn Messenger
              </a>
            )}
          </div>

          <p className="mt-4 text-sm md:text-base text-neutral-500 leading-relaxed">
            * Giá mang tính tham khảo, có thể thay đổi theo mùa/đợt hàng. Đặt nhanh bằng cách nhắn
            “{product.name} + {qty}kg + địa chỉ + giờ nhận”.
          </p>
        </div>

        {/* Description */}
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <div className="text-xl md:text-2xl font-extrabold">Mô tả sản phẩm</div>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-700">
            {product.desc || "Đang cập nhật mô tả chi tiết cho sản phẩm này."}
          </p>

          <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
            <div className="text-sm font-semibold text-neutral-600">Mẹo sử dụng</div>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-base md:text-lg text-neutral-700">
              <li>Ăn tươi: chọn độ chín thơm vừa.</li>
              <li>Ép: để mát 30 phút trước khi ép sẽ ngon hơn.</li>
              <li>Bảo quản: bọc kín, để ngăn mát 1–2 ngày sau khi cắt.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from "react"
