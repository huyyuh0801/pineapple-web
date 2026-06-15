import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/pineapples";
import HeroSlider from "@/components/HeroSlider";
import Divider from "@/components/Divider";
import QuantityAddToCart from "@/components/QuantityAddToCart";
import { formatVnd } from "@/lib/format";
import { buildMetadata, jsonLdScript, siteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: siteUrl,
    },
  ],
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
  );
}

function formatProductPrice(price: number | null, unit?: string | null) {
  if (!price) return "Liên hệ";
  return `${formatVnd(price)}${unit ? `/${unit}` : ""}`;
}

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <main className="bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      {/* ===== HERO ===== */}
      <section className="relative bg-white">
        {/* pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:url('/images/pattern-pine.png')] bg-repeat" />

        {/* 🔥 FIX: Banner sát navbar */}
        <div className="-mt-2">
          <HeroSlider />
        </div>

        <Container>
          {/* 🔥 FIX: bỏ khoảng trống trên */}
          <div className="pt-0 pb-4">
            {/* ===== QUOTE ===== */}
            <div className="pt-6 pb-8 text-center">
              <div className="mx-auto max-w-4xl">
                <Divider
                  title={
                    <span className="text-xl sm:text-2xl md:text-[32px] font-bold">
                      &quot;HONEST FARMING - HONEST FLAVOR&quot;
                    </span>
                  }
                  variant="diamond"
                />

                <p className="mt-4 text-justify italic text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                  “Chúng tôi tin rằng hương vị ngon thật sự không thể vội vàng.
                  Nó bắt đầu từ mảnh đất lành, từ cách trồng tử tế và sự kiên
                  nhẫn lắng nghe tín hiệu chín mùi của tự nhiên. Tại
                  VietPineapple, chúng tôi chọn giữ vững con đường ấy — không
                  hoá chất, không ép nhanh — chỉ làm đúng những gì cần làm để
                  trái dứa được là chính nó. Với chúng tôi, làm nông trung thực
                  không chỉ là một phương pháp, mà là cách duy nhất để tạo nên
                  hương vị mà bạn có thể đặt trọn niềm tin.”
                </p>
              </div>

              {/* ICON ROW */}
              <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
                {[
                  { label: "Sản phẩm hữu cơ", icon: "/images/icon1.png" },
                  { label: "Canh tác tử tế", icon: "/images/icon2.png" },
                  { label: "Không hoá chất", icon: "/images/icon3.png" },
                  { label: "Chín tự nhiên", icon: "/images/icon4.png" },
                  { label: "Giữ trọn vị ngon", icon: "/images/icon5.png" },
                ].map((it) => (
                  <div key={it.label} className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 md:h-30 md:w-30">
                      <Image
                        src={it.icon}
                        alt={it.label}
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-0 text-base font-bold sm:text-lg md:text-xl">
                      {it.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== FEATURED PRODUCTS ===== */}
            <div className="pt-2">
              <Divider
                title={
                  <span className="text-xl sm:text-2xl md:text-[32px] font-bold">
                    SẢN PHẨM NỔI BẬT
                  </span>
                }
                variant="diamond"
              />

              <div className="grid gap-10 pb-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-14">
                {featured.map((p) => (
                  <div
                    key={p.slug}
                    className="relative group transition-all duration-300 ease-out hover:-translate-y-2 hover:drop-shadow-xl"
                  >
                    <Link href={`/products/${p.slug}`} className="block">
                      <div className="relative h-56 w-full overflow-hidden rounded bg-[#307330]/5 sm:h-60 md:h-64">
                        <Image
                          src={p.image || "/images/product-placeholder.png"}
                          alt={p.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-3"
                        />
                      </div>
                    </Link>

                    <div className="mt-6 text-left">
                      <Link
                        href={`/products/${p.slug}`}
                        className="text-xl font-extrabold text-[#307330] underline underline-offset-4 transition-colors group-hover:text-[#307330]"
                      >
                        {p.name}
                      </Link>

                      <div className="mt-3 space-y-1 text-base leading-relaxed text-neutral-800">
                        {(p.short || "")
                          .split("\n")
                          .filter(Boolean)
                          .map((line: string, i: number) => (
                            <div key={i}>{line}</div>
                          ))}
                      </div>

                      <div className="mt-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <Link
                          href={`/products/${p.slug}`}
                          className="text-sm font-bold text-[#307330] underline underline-offset-4"
                        >
                          Xem chi tiết →
                        </Link>
                      </div>

                      <div className="mt-4">
                        <div className="text-lg font-extrabold text-[#307330]">
                          {formatProductPrice(p.price, p.unit)}
                        </div>

                        <div className="mt-3">
                          {p.price ? (
                            <QuantityAddToCart
                              product={{
                                slug: p.slug,
                                name: p.name,
                                price: p.price,
                                unit: p.unit,
                                image: p.image,
                              }}
                              compact
                            />
                          ) : (
                            <div className="h-10 w-10" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pb-10 text-center">
                <Link
                  href="/products"
                  className="inline-flex rounded-full bg-[#307330] px-7 py-3 text-base font-extrabold text-white transition hover:bg-[#307330] sm:text-lg"
                >
                  Xem tất cả sản phẩm
                </Link>
              </div>
            </div>

            {/* ===== FARM ===== */}
            <Divider
              title={
                  <span className="text-xl sm:text-2xl md:text-[32px] font-bold">
                  TRANG TRẠI VIETPINEAPPLE
                </span>
              }
              variant="diamond"
            />

            <p className="mx-auto mb-8 max-w-4xl text-justify italic text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
              Trang trại VietPineapple được chăm sóc theo hướng xanh sạch, chú
              trọng từng giai đoạn từ chọn giống, làm đất, tưới tiêu đến theo
              dõi độ chín tự nhiên của trái. Mỗi luống dứa đều được kiểm tra kỹ
              để cây phát triển khỏe, hạn chế tác động không cần thiết và giữ
              trọn hương vị tươi ngon, an toàn khi đến tay khách hàng.
            </p>

            <div className="grid gap-4 md:grid-cols-2 pb-6">
              <div className="grid gap-4">
                <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden rounded border">
                  <Image
                    src="/images/farm-1.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-28 overflow-hidden rounded border sm:h-36">
                    <Image
                      src="/images/farm-2.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-28 overflow-hidden rounded border sm:h-36">
                    <Image
                      src="/images/farm-3.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="relative h-48 sm:h-60 md:h-[300px] overflow-hidden rounded border">
                  <Image
                    src="/images/farm-4.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 overflow-hidden rounded border sm:h-36">
                  <Image
                    src="/images/farm-5.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* ===== BENEFITS ===== */}
            <div className="pt-6 pb-10">
              <Divider
                title={
                  <span className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#307330]">
                    CÔNG DỤNG TUYỆT VỜI CỦA DỨA
                  </span>
                }
                variant="diamond"
              />

              <div className="mx-auto mt-6 max-w-4xl space-y-4 text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                <p>
                  • <strong>Tăng cường hệ miễn dịch:</strong> Giàu Vitamin C và
                  chất chống oxy hóa, giúp cơ thể chống lại nhiễm trùng và cảm
                  cúm.
                </p>

                <p>
                  • <strong>Hỗ trợ tiêu hóa:</strong> Chất xơ giúp nhu động ruột
                  khỏe mạnh. Enzyme bromelain hỗ trợ tiêu hóa protein và giảm
                  đầy bụng.
                </p>

                <p>
                  • <strong>Chống viêm & giảm đau:</strong> Bromelain giúp giảm
                  viêm, hỗ trợ xương khớp và các vấn đề viêm nhiễm.
                </p>

                <p>
                  • <strong>Làm đẹp da & tóc:</strong> Vitamin C giúp sản sinh
                  collagen, giúp da săn chắc, tóc khỏe.
                </p>

                <p>
                  • <strong>Tốt cho xương:</strong> Cung cấp mangan, canxi,
                  magie giúp xương chắc khỏe.
                </p>

                <p>
                  • <strong>Hỗ trợ giảm cân:</strong> Ít calo, nhiều chất xơ
                  giúp no lâu.
                </p>

                <p>
                  • <strong>Cải thiện thị lực:</strong> Vitamin A giúp bảo vệ
                  mắt.
                </p>

                <p>
                  • <strong>Tốt cho tim mạch:</strong> Hỗ trợ tuần hoàn và giảm
                  huyết áp.
                </p>

                <p>
                  • <strong>Có tiềm năng chống ung thư:</strong> Bromelain hỗ
                  trợ miễn dịch và ức chế tế bào xấu.
                </p>
              </div>
            </div>
            {/* ===== VIDEO ===== */}
            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-4xl aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-md"
                  src="https://www.youtube.com/embed/I5tSvObKad8"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
