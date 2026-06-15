import Image from "next/image"
import Link from "next/link"
import ContactIcons from "@/components/ContactIcons"
import Divider from "@/components/Divider"
import QuantityAddToCart from "@/components/QuantityAddToCart"
import { products } from "@/data/pineapples"
import { formatVnd } from "@/lib/format"
import { buildMetadata, jsonLdScript, siteUrl } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Sản phẩm VietPineapple - Dứa MD2, nước ép dứa và đặc sản từ dứa",
  description:
    "Xem các sản phẩm VietPineapple gồm dứa MD2 tươi, nước ép dứa nguyên chất, dứa sấy dẻo và các sản phẩm từ dứa.",
  path: "/products",
  image: "/images/dua_md2.png",
})

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
    {
      "@type": "ListItem",
      position: 2,
      name: "Sản phẩm",
      item: `${siteUrl}/products`,
    },
  ],
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function formatProductPrice(price: number | null, unit?: string | null) {
  if (!price) return "Liên hệ"
  return `${formatVnd(price)}${unit ? `/${unit}` : ""}`
}

function TikTokEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="min-h-[560px] overflow-hidden bg-white">
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        title="TikTok review SP"
        className="h-[560px] w-full border-0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <main className="bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <section className="bg-white">
        <Container>
          <div className="pt-10">
            <Divider title="TẤT CẢ SẢN PHẨM" variant="diamond" />
          </div>

          <div className="grid gap-10 pb-16 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-14 lg:pb-20">
            {products.map((p) => {
              const comingSoon = Boolean(p.comingSoon)

              return (
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

                      {comingSoon ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rotate-[-18deg] border-4 border-[#307330] bg-white/70 px-4 py-2 text-lg font-extrabold text-[#307330] sm:px-6 sm:text-xl">
                            COMING SOON
                          </div>
                        </div>
                      ) : null}
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

                    {!comingSoon ? (
                      <div className="mt-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <Link
                          href={`/products/${p.slug}`}
                          className="text-sm font-bold text-[#307330] underline underline-offset-4"
                        >
                          Xem chi tiết →
                        </Link>
                      </div>
                    ) : null}

                    <div className="mt-4">
                      <div className="text-lg font-extrabold text-[#307330]">
                        {formatProductPrice(p.price, p.unit)}
                      </div>

                      <div className="mt-3">
                        {!comingSoon && p.price ? (
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
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#307330]/10 py-14">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 rounded-full bg-[#307330]/15 px-4 py-4 text-center text-lg font-extrabold text-[#307330] sm:flex-row sm:text-xl">
            <span>LIÊN HỆ ĐẶT HÀNG</span>
            <ContactIcons />
          </div>

          <div className="mt-10 grid gap-8 text-center sm:grid-cols-3 sm:gap-10">
            {[
              { icon: "🚚", label: "Giao hàng toàn quốc" },
              { icon: "📞", label: "Hỗ trợ 24/7" },
              { icon: "🏅", label: "Cam kết chất lượng" },
            ].map((it) => (
              <div key={it.label}>
                <div className="mx-auto text-4xl sm:text-5xl">{it.icon}</div>
                <div className="mt-3 text-base font-bold text-[#307330] sm:text-lg">
                  {it.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {[
              "7585355968448335125",
              "7522382828106042642",
              "7578679910122720520",
            ].map((videoId) => (
              <TikTokEmbed key={videoId} videoId={videoId} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
