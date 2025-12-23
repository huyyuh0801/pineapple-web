export default function AboutPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <h1 className="text-5xl font-extrabold md:text-6xl">Giới thiệu</h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-neutral-700">
          Chúng tôi cung cấp dứa tươi với tiêu chí <b>tươi – sạch – dễ mua</b>.
          Khách đặt nhanh qua Zalo/điện thoại, giao đúng giờ, đóng gói cẩn thận và hỗ trợ đổi nếu hàng bị dập.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-neutral-50 p-8">
            <div className="text-2xl font-extrabold">Cam kết</div>
            <p className="mt-4 text-lg text-neutral-700">
              Đổi nếu hàng lỗi do vận chuyển (theo điều kiện cửa hàng).
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-50 p-8">
            <div className="text-2xl font-extrabold">Phục vụ</div>
            <p className="mt-4 text-lg text-neutral-700">
              Bán lẻ & sỉ, tư vấn chọn loại phù hợp: ăn tươi / ép nước.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
