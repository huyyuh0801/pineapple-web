import Link from "next/link"
import { products } from "@/data/pineapples"
import HeroSlider from "@/components/HeroSlider"

const PHONE = "+849xxxxxxxx" // đổi
const ZALO_LINK = "https://zalo.me/" // đổi

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">{children}</div>
}

function SectionTitle({
  title,
  subtitle,
  moreHref,
  moreText = "Xem thêm →",
}: {
  title: string
  subtitle?: string
  moreHref: string
  moreText?: string
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-3 text-base md:text-lg text-neutral-600 leading-relaxed">{subtitle}</p>
        ) : null}
      </div>

      <Link
        href={moreHref}
        className="w-fit rounded-2xl border px-4 py-2.5 md:px-5 md:py-3 text-base md:text-lg font-bold hover:bg-neutral-50 transition"
      >
        {moreText}
      </Link>
    </div>
  )
}

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <main className="bg-white text-neutral-900">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
        <Container>
          <div className="py-12 md:py-8">
            {/* H1 full-width để không bị cắt gradient */}
            <div className="relative -mx-4 sm:-mx-6 px-1 sm:px-2">
              <h1
                className="
                  text-3xl sm:text-3xl md:text-6xl
                  font-extrabold tracking-tight
                  leading-[1.12] md:leading-[1.1]
                  pb-2
                  bg-gradient-to-r
                  from-yellow-300 via-yellow-400 to-emerald-600
                  bg-clip-text text-transparent
                  animate-gradient
                  drop-shadow-sm
                "
              >
                Ngọt tự nhiên, đúng chất dứa Việt🍍
              </h1>
            </div>

            {/* ===== HERO SLIDER (full width) ===== */}
            <div className="relative mt-10 sm:mt-14 md:mt-16 -mx-4 sm:-mx-6">
              <HeroSlider />
            </div>

            <p className="mt-8 md:mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-700">
              Xem nhanh sản phẩm, giá tham khảo và cách đặt hàng. Đặt đơn đơn giản, nhận hàng đúng hẹn.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/products"
                className="rounded-2xl bg-emerald-600 px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-extrabold text-white hover:bg-emerald-700 transition"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-bold hover:bg-white/70 transition"
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== USP ===== */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-5 md:gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-emerald-50 p-7 md:p-10">
              <div className="text-xl md:text-2xl font-extrabold">🍍 Chọn trái kỹ</div>
              <p className="mt-4 md:mt-5 text-lg md:text-xl leading-relaxed text-neutral-700">
                Ưu tiên độ chín phù hợp, ít xơ, vị ngọt tự nhiên.
              </p>
            </div>

            <div className="rounded-3xl bg-lime-50 p-7 md:p-10">
              <div className="text-xl md:text-2xl font-extrabold">🌱 Nguồn gốc rõ</div>
              <p className="mt-4 md:mt-5 text-lg md:text-xl leading-relaxed text-neutral-700">
                Có thể cung cấp thông tin vùng trồng và đợt thu hoạch.
              </p>
            </div>

            <div className="rounded-3xl bg-yellow-50 p-7 md:p-10">
              <div className="text-xl md:text-2xl font-extrabold">🚚 Giao nhanh</div>
              <p className="mt-4 md:mt-5 text-lg md:text-xl leading-relaxed text-neutral-700">
                Nhận đơn nhanh qua Zalo/điện thoại, giao đúng hẹn.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-14 md:py-20">
        <Container>
          <SectionTitle
            title="Sản phẩm nổi bật"
            subtitle="Một vài loại đang bán. Xem đầy đủ danh mục ở trang Sản phẩm."
            moreHref="/products"
          />

          <div className="mt-8 md:mt-12 grid gap-5 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-3xl border bg-white p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl md:text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-neutral-600 leading-relaxed">
                  {p.short}
                </p>

                <div className="mt-5 md:mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm md:text-base font-extrabold text-emerald-700">
                    {p.price}
                  </span>
                  <span className="text-base md:text-lg font-bold text-emerald-700 group-hover:underline">
                    Xem chi tiết →
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionTitle
            title="Giới thiệu"
            subtitle="Tầm nhìn và giá trị chúng tôi mang đến cho khách hàng."
            moreHref="/about"
            moreText="Xem chi tiết →"
          />

          <div className="mt-8 md:mt-12 grid gap-5 md:gap-8 md:grid-cols-2">
            <Card>
              <div className="text-xl md:text-2xl font-extrabold">Tầm nhìn</div>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-700">
                Trở thành lựa chọn đáng tin cậy khi bạn cần dứa tươi ngon mỗi ngày — đặt nhanh, nhận đúng hẹn,
                chất lượng ổn định theo từng đợt hàng.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base md:text-lg text-neutral-700">
                <li>Ưu tiên trải nghiệm mua hàng đơn giản, minh bạch.</li>
                <li>Giữ chất lượng đồng đều, chọn trái kỹ trước khi giao.</li>
                <li>Xây dựng uy tín lâu dài bằng sự tử tế và nhất quán.</li>
              </ul>
            </Card>

            <Card>
              <div className="text-xl md:text-2xl font-extrabold">Giá trị dành cho khách hàng</div>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-700">
                Bạn nhận được dứa đúng nhu cầu: thơm – ngọt – ít xơ (tuỳ loại), cùng tư vấn sử dụng và bảo quản
                để luôn ngon khi dùng.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base md:text-lg text-neutral-700">
                <li>
                  <b>Dễ đặt:</b> nhắn loại + số kg + địa chỉ + giờ nhận.
                </li>
                <li>
                  <b>Dễ dùng:</b> tư vấn độ chín theo mục đích.
                </li>
                <li>
                  <b>An tâm:</b> đóng gói cẩn thận, hỗ trợ khi phát sinh.
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* ===== CONTACT (CTA) ===== */}
      <section className="bg-gradient-to-r from-emerald-600 to-lime-500 py-14 md:py-20 text-white">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Liên hệ nhanh</h2>
              <p className="mt-3 text-base md:text-lg text-white/90 leading-relaxed">
                Nhắn loại dứa + số kg + địa chỉ + thời gian nhận hàng.
              </p>
            </div>

            <Link
              href="/contact"
              className="w-fit rounded-2xl bg-white px-5 py-3 text-base md:text-lg font-extrabold text-emerald-700 hover:bg-white/90 transition"
            >
              Xem trang liên hệ →
            </Link>
          </div>

          <div className="mt-8 md:mt-12 grid gap-5 md:gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 md:p-8">
              <div className="text-xl md:text-2xl font-extrabold">Hotline</div>
              <p className="mt-3 text-lg md:text-xl">
                <b>{PHONE}</b>
              </p>
              <p className="mt-2 text-base md:text-lg text-white/90">
                Bấm gọi trực tiếp hoặc nhắn Zalo để đặt nhanh.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 md:gap-4">
                <a
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white px-6 py-3 text-base md:text-lg font-extrabold text-emerald-700 hover:bg-white/90 transition"
                >
                  Nhắn Zalo
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-2xl border border-white/70 px-6 py-3 text-base md:text-lg font-bold hover:bg-white/10 transition"
                >
                  Gọi điện
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 md:p-8">
              <div className="text-xl md:text-2xl font-extrabold">Cú pháp đặt hàng</div>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base md:text-lg text-white/90">
                <li>Loại dứa (ví dụ: Dứa MD2)</li>
                <li>Số kg</li>
                <li>Địa chỉ</li>
                <li>Thời gian nhận</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-neutral-900 py-8 md:py-10 text-neutral-300">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm md:text-base">
            <div>© {new Date().getFullYear()} • VietPineapple</div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link href="/">Trang chủ</Link>
              <Link href="/products">Sản phẩm</Link>
              <Link href="/about">Giới thiệu</Link>
              <Link href="/contact">Liên hệ</Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
