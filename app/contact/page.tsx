"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

const BRAND = "VietPineapple"
const PHONE = "+849xxxxxxxx" // đổi
const ZALO_LINK = "https://zalo.me/" // đổi (có thể dùng link OA hoặc link chat)
const MESSENGER_LINK = "https://m.me/" // đổi
const EMAIL = "vietpineapple@gmail.com" // đổi nếu muốn nhận mail
const DELIVERY_AREA = "TP.HCM (bạn điền rõ quận/huyện) + ship tỉnh theo đơn" // đổi
const ORDER_HOURS = "08:00 – 20:00 (hằng ngày)" // đổi
const ADDRESS = "Bạn điền địa chỉ/điểm hẹn (nếu có)" // đổi (nếu không có, để trống sẽ ẩn)

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">{children}</div>
}

function IconButton({
  href,
  label,
  children,
  className = "",
}: {
  href: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-2xl border px-4 py-3 text-base md:text-lg font-bold hover:bg-neutral-50 transition ${className}`}
    >
      {children}
    </a>
  )
}

export default function ContactPage() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const quickTemplate = useMemo(() => {
    const lines = [
      `Xin chào ${BRAND},`,
      `Mình muốn đặt: (loại dứa) - (số kg)`,
      `Địa chỉ nhận:`,
      `Thời gian nhận:`,
      `Ghi chú (nếu có):`,
    ]
    return lines.join("\n")
  }, [])

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`[${BRAND}] Liên hệ / Đặt hàng`)
    const body = encodeURIComponent(
      `${name ? `Tên: ${name}\n` : ""}${message ? `Nội dung:\n${message}\n\n` : ""}---\nMẫu đặt nhanh:\n${quickTemplate}\n`
    )
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }, [name, message, quickTemplate])

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(quickTemplate)
      alert("Đã copy mẫu đặt hàng 👌")
    } catch {
      alert("Không copy được. Bạn hãy copy thủ công giúp mình nhé.")
    }
  }

  return (
    <main className="bg-white text-neutral-900">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
        <Container>
          <div className="py-12 md:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Liên hệ
            </h1>
            <p className="mt-5 max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-700">
              Nhắn <b>loại dứa</b> + <b>số kg</b> + <b>địa chỉ</b> + <b>thời gian nhận</b>.
              Mình xác nhận nhanh và sắp lịch giao phù hợp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <IconButton href={ZALO_LINK} label="Nhắn Zalo" className="bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700">
                Nhắn Zalo
              </IconButton>

              <IconButton href={MESSENGER_LINK} label="Messenger">
                Messenger
              </IconButton>

              <IconButton href={`tel:${PHONE}`} label="Gọi điện">
                Gọi {PHONE}
              </IconButton>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl bg-white p-5 border">
                <div className="text-sm font-semibold text-neutral-500">Hotline</div>
                <div className="mt-2 text-lg md:text-xl font-extrabold">{PHONE}</div>
              </div>

              <div className="rounded-3xl bg-white p-5 border">
                <div className="text-sm font-semibold text-neutral-500">Giờ nhận đơn</div>
                <div className="mt-2 text-lg md:text-xl font-extrabold">{ORDER_HOURS}</div>
              </div>

              <div className="rounded-3xl bg-white p-5 border">
                <div className="text-sm font-semibold text-neutral-500">Khu vực giao</div>
                <div className="mt-2 text-base md:text-lg font-bold text-neutral-800">
                  {DELIVERY_AREA}
                </div>
              </div>

              {ADDRESS?.trim() ? (
                <div className="rounded-3xl bg-white p-5 border">
                  <div className="text-sm font-semibold text-neutral-500">Địa chỉ / điểm hẹn</div>
                  <div className="mt-2 text-base md:text-lg font-bold text-neutral-800">
                    {ADDRESS}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* LEFT: QUICK ORDER */}
            <Card>
              <div className="text-2xl md:text-3xl font-extrabold">Đặt nhanh trong 1 phút</div>
              <p className="mt-3 text-base md:text-lg text-neutral-700 leading-relaxed">
                Dùng mẫu dưới đây để đặt hàng nhanh (copy rồi dán vào Zalo/Messenger).
              </p>

              <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-neutral-50 p-5 text-sm md:text-base leading-relaxed border">
{quickTemplate}
              </pre>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={copyTemplate}
                  className="rounded-2xl bg-neutral-900 px-5 py-3 text-base md:text-lg font-extrabold text-white hover:bg-neutral-800 transition"
                >
                  Copy mẫu đặt hàng
                </button>

                <a
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border px-5 py-3 text-base md:text-lg font-bold hover:bg-neutral-50 transition"
                >
                  Mở Zalo
                </a>

                <a
                  href={MESSENGER_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border px-5 py-3 text-base md:text-lg font-bold hover:bg-neutral-50 transition"
                >
                  Mở Messenger
                </a>
              </div>
            </Card>

            {/* RIGHT: CONTACT FORM (NO DB) */}
            <Card>
              <div className="text-2xl md:text-3xl font-extrabold">Gửi tin nhắn qua Email</div>
              <p className="mt-3 text-base md:text-lg text-neutral-700 leading-relaxed">
                Form này không cần database: bấm “Gửi Email” sẽ mở ứng dụng mail trên máy của bạn.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-sm font-semibold text-neutral-600">Tên của bạn</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Huy"
                    className="mt-2 w-full rounded-2xl border px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-neutral-600">Nội dung</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Bạn muốn hỏi gì / đặt loại dứa nào?"
                    rows={5}
                    className="mt-2 w-full rounded-2xl border px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={mailto}
                    className="rounded-2xl bg-emerald-600 px-5 py-3 text-base md:text-lg font-extrabold text-white hover:bg-emerald-700 transition"
                  >
                    Gửi Email
                  </a>

                  <a
                    href={`tel:${PHONE}`}
                    className="rounded-2xl border px-5 py-3 text-base md:text-lg font-bold hover:bg-neutral-50 transition"
                  >
                    Gọi ngay
                  </a>
                </div>

                <p className="text-sm text-neutral-500 leading-relaxed">
                  Email nhận: <b className="text-neutral-700">{EMAIL}</b>
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-12 md:py-16">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Câu hỏi thường gặp</h2>
              <p className="mt-3 max-w-3xl text-base md:text-lg text-neutral-600 leading-relaxed">
                Một số câu hỏi phổ biến để bạn đặt nhanh hơn (nếu cần, mình sẽ tư vấn thêm).
              </p>
            </div>

            <Link
              href="/products"
              className="w-fit rounded-2xl border px-5 py-3 text-base md:text-lg font-bold hover:bg-neutral-50 transition"
            >
              Xem sản phẩm →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Bao lâu thì nhận được hàng?",
                a: "Tuỳ khu vực và thời điểm đặt. Bạn nhắn địa chỉ + giờ nhận, mình sẽ xác nhận ngay khung giao phù hợp.",
              },
              {
                q: "Dứa có phù hợp để ép nước không?",
                a: "Có. Bạn nhắn mục đích (ăn tươi/ép/nấu), mình sẽ tư vấn loại và độ chín phù hợp.",
              },
              {
                q: "Có ship tỉnh không?",
                a: "Có thể (tuỳ đơn). Bạn gửi tỉnh/thành + số lượng, mình kiểm tra phương án vận chuyển phù hợp.",
              },
              {
                q: "Nếu hàng bị dập khi vận chuyển thì sao?",
                a: "Mình hỗ trợ xử lý theo điều kiện cửa hàng. Bạn chụp ảnh khi nhận hàng để mình hỗ trợ nhanh nhất.",
              },
            ].map((item) => (
              <details key={item.q} className="rounded-3xl border bg-white p-6 md:p-7">
                <summary className="cursor-pointer text-lg md:text-xl font-extrabold text-neutral-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-base md:text-lg text-neutral-700 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="bg-neutral-900 py-10 text-neutral-200">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-base md:text-lg">
              © {new Date().getFullYear()} • {BRAND}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={ZALO_LINK} target="_blank" rel="noreferrer" className="hover:underline">
                Zalo
              </a>
              <a href={MESSENGER_LINK} target="_blank" rel="noreferrer" className="hover:underline">
                Messenger
              </a>
              <a href={`tel:${PHONE}`} className="hover:underline">
                Gọi {PHONE}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
