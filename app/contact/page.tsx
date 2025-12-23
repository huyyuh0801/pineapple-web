const PHONE = "+849xxxxxxxx" // đổi
const ZALO_LINK = "https://zalo.me/" // đổi
const MESSENGER_LINK = "https://m.me/" // đổi

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-r from-emerald-600 to-lime-500 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h1 className="text-5xl font-extrabold md:text-6xl">Liên hệ</h1>
        <p className="mt-6 text-xl text-white/90">
          Nhắn loại dứa + số kg + địa chỉ + thời gian nhận hàng. Mình xác nhận ngay.
        </p>

        <div className="mt-10 space-y-3 text-xl">
          <div><b>Hotline:</b> {PHONE}</div>
          <div><b>Kênh:</b> Zalo / Messenger</div>
          <div><b>Khu vực giao:</b> (Bạn điền)</div>
          <div><b>Giờ nhận đơn:</b> (Ví dụ 8:00–20:00)</div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={ZALO_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-8 py-4 text-xl font-extrabold text-emerald-700 hover:bg-white/90"
          >
            Nhắn Zalo
          </a>
          <a
            href={MESSENGER_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/70 px-8 py-4 text-xl font-bold hover:bg-white/10"
          >
            Messenger
          </a>
          <a
            href={`tel:${PHONE}`}
            className="rounded-2xl border border-white/70 px-8 py-4 text-xl font-bold hover:bg-white/10"
          >
            Gọi điện
          </a>
        </div>
      </div>
    </main>
  )
}
