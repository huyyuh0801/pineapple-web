import Image from "next/image"
import Link from "next/link"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">{children}</div>
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 backdrop-blur">
      {children}
    </span>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
        <Container>
          <div className="py-12 md:py-16">
            <div className="flex flex-wrap gap-2">
              <Pill>Nông sản sạch</Pill>
              <Pill>Chọn trái kỹ</Pill>
              <Pill>Giao đúng hẹn</Pill>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Giới thiệu về VietPineapple
            </h1>

            <p className="mt-6 max-w-4xl text-lg md:text-xl leading-relaxed text-neutral-700">
              VietPineapple được tạo ra với mong muốn mang đến trải nghiệm mua dứa{" "}
              <b>tươi – sạch – dễ mua</b> cho mọi người. Chúng tôi chọn dứa theo{" "}
              <b>độ chín phù hợp</b> (ăn liền/để vài ngày), ưu tiên{" "}
              <b>ít xơ – thơm – vị ngọt tự nhiên</b>, đóng gói cẩn thận và giao đúng
              khung giờ đã hẹn.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-2xl bg-emerald-600 px-6 py-3 text-base md:text-lg font-extrabold text-white hover:bg-emerald-700 transition"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border px-6 py-3 text-base md:text-lg font-bold hover:bg-white/70 transition"
              >
                Liên hệ đặt hàng
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FARM STORY + IMAGE ===== */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Câu chuyện nông trại
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-700">
                Chúng tôi tin rằng trái cây ngon không chỉ đến từ giống tốt, mà còn từ
                cách chăm đất, chăm cây và thu hoạch đúng thời điểm. VietPineapple hợp
                tác với các vườn trồng uy tín, chọn dứa theo tiêu chí rõ ràng và
                kiểm tra kỹ trước khi giao đến tay bạn.
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-6 text-base md:text-lg text-neutral-700">
                <li>
                  Ưu tiên dứa chín vừa, thơm mạnh, phù hợp nhu cầu: ăn tươi / ép / nấu.
                </li>
                <li>Chọn trái theo độ đều, hạn chế dập/cấn, đóng gói chắc chắn.</li>
                <li>
                  Tư vấn cách bảo quản: để mát, cắt sẵn, làm nước ép… để luôn ngon.
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border bg-neutral-50">
              <div className="relative h-[260px] sm:h-[360px] md:h-[420px] w-full">
                <Image
                  src="/images/farm-1.jpg"
                  alt="Nông trại VietPineapple"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="text-lg font-extrabold">Tươi từ vườn đến tay bạn</div>
                <p className="mt-2 text-sm md:text-base text-neutral-600 leading-relaxed">
                  Hình ảnh minh hoạ khu vực trồng/thu hoạch. Bạn có thể thay bằng ảnh
                  thật của nông trại để tăng độ tin cậy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-12 md:py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-emerald-50 p-7 md:p-8">
              <div className="text-xl font-extrabold">🍍 Chất lượng ổn định</div>
              <p className="mt-3 text-base md:text-lg text-neutral-700 leading-relaxed">
                Mỗi đợt hàng đều được chọn theo tiêu chí: chín vừa, thơm, ít xơ,
                hạn chế dập/cấn.
              </p>
            </div>

            <div className="rounded-3xl bg-lime-50 p-7 md:p-8">
              <div className="text-xl font-extrabold">🤝 Minh bạch & tử tế</div>
              <p className="mt-3 text-base md:text-lg text-neutral-700 leading-relaxed">
                Tư vấn đúng nhu cầu, báo giá rõ ràng, hỗ trợ xử lý nếu phát sinh do
                vận chuyển (theo điều kiện cửa hàng).
              </p>
            </div>

            <div className="rounded-3xl bg-yellow-50 p-7 md:p-8">
              <div className="text-xl font-extrabold">🚚 Nhanh & đúng hẹn</div>
              <p className="mt-3 text-base md:text-lg text-neutral-700 leading-relaxed">
                Nhận đơn nhanh qua kênh liên hệ, giao trong khung giờ hẹn trước,
                đóng gói cẩn thận.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Góc hình ảnh nông trại
              </h2>
              <p className="mt-3 text-base md:text-lg text-neutral-600 leading-relaxed">
                Bạn có thể thay bằng ảnh thật: vườn, thu hoạch, đóng gói, giao hàng…
                để trang “Giới thiệu” thuyết phục hơn.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/images/farm-2.jpg", label: "Vườn dứa" },
              { src: "/images/farm-3.jpg", label: "Thu hoạch" },
              { src: "/images/farm-4.jpg", label: "Đóng gói" },
              { src: "/images/farm-1.jpg", label: "Giao hàng" },
            ].map((item) => (
              <div key={item.src} className="overflow-hidden rounded-3xl border bg-neutral-50">
                <div className="relative h-[180px] w-full">
                  <Image src={item.src} alt={item.label} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-base font-extrabold">{item.label}</div>
                  <p className="mt-1 text-sm text-neutral-600">
                    Ảnh minh hoạ — đổi bằng ảnh thật của bạn.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== SERVICE / COMMITMENT ===== */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Chúng tôi phục vụ thế nào?</h2>
          <p className="mt-4 max-w-4xl text-base md:text-lg text-neutral-700 leading-relaxed">
            Mục tiêu của VietPineapple là giúp bạn mua dứa dễ dàng như một tin nhắn.
            Bạn chỉ cần gửi <b>loại dứa</b> + <b>số kg</b> + <b>địa chỉ</b> + <b>giờ nhận</b>,
            chúng tôi sẽ xác nhận và giao đúng hẹn.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card>
              <div className="text-xl md:text-2xl font-extrabold">Cam kết</div>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base md:text-lg text-neutral-700">
                <li>Chọn trái kỹ, hạn chế dập/cấn.</li>
                <li>Đóng gói chắc chắn, giao hàng đúng khung giờ hẹn.</li>
                <li>Hỗ trợ xử lý nếu phát sinh do vận chuyển (theo điều kiện cửa hàng).</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xl md:text-2xl font-extrabold">Tư vấn & gợi ý</div>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base md:text-lg text-neutral-700">
                <li>Ăn tươi: chọn trái thơm, chín vừa.</li>
                <li>Ép nước: ưu tiên vị ngọt đậm, nhiều nước.</li>
                <li>Bảo quản: hướng dẫn để tủ mát/cắt sẵn đúng cách.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-emerald-600 to-lime-500 py-14 md:py-20 text-white">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Quý khách đã sẵn sàng lựa chọn sản phẩm hay cần được tư vấn?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-2xl bg-white px-6 py-3 text-base md:text-lg font-extrabold text-emerald-700 hover:bg-white/90 transition"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl bg-amber-300 px-6 py-3 text-base md:text-lg font-extrabold text-emerald-950 shadow-lg shadow-emerald-900/20 ring-2 ring-white/70 transition hover:bg-amber-200 hover:shadow-xl"
              >
                Cần tư vấn
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
