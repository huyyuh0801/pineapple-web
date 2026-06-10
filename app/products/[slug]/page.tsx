import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import QuantityAddToCart from "@/components/QuantityAddToCart"
import { products } from "@/data/pineapples"
import { formatVnd } from "@/lib/format"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function toLines(value: unknown): string[] {
  if (!value) return []
  if (Array.isArray(value)) return value
  if (typeof value === "string") {
    return value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
  }
  return []
}

type DescSection = {
  title: string
  paras: string[]
  bullets: string[]
}

function parseSections(lines: string[]): DescSection[] {
  const sections: DescSection[] = []
  let current: DescSection | null = null

  const pushCurrent = () => {
    if (current && (current.paras.length || current.bullets.length)) {
      sections.push(current)
    }
    current = null
  }

  for (const raw of lines) {
    const text = raw.trim()
    if (!text) continue

    const isHeading = /:\s*$/.test(text)
    const isBullet = /^(-|•)\s+/.test(text)

    if (isHeading) {
      pushCurrent()
      current = { title: text.replace(/:\s*$/, ""), paras: [], bullets: [] }
      continue
    }

    if (!current) {
      current = { title: "Nội dung", paras: [], bullets: [] }
    }

    if (isBullet) {
      current.bullets.push(text.replace(/^(-|•)\s+/, ""))
    } else {
      current.paras.push(text)
    }
  }

  pushCurrent()
  return sections
}

function formatProductPrice(price: number | null, unit?: string | null) {
  if (!price) return "Liên hệ"
  return `${formatVnd(price)}${unit ? `/${unit}` : ""}`
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)

  if (!product) return notFound()

  const bulletsTop = toLines(product.bullets)
  const sections = parseSections(toLines(product.description))

  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-white">
        <Container>
          <div className="py-8 sm:py-10">
            <div className="mb-8">
              <Link
                href="/products"
                className="font-bold text-emerald-800 underline underline-offset-4"
              >
                ← Quay lại sản phẩm
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
              <div className="flex justify-center lg:justify-start">
                <div className="relative h-[240px] w-[220px] sm:h-[360px] sm:w-[320px] md:h-[420px] md:w-[360px]">
                  <Image
                    src={product.image || "/images/product-placeholder.png"}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:pt-2">
                <h1 className="font-serif text-2xl font-extrabold text-emerald-800 sm:text-3xl md:text-4xl">
                  {product.name}
                </h1>

                {bulletsTop.length ? (
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed sm:text-lg">
                    {bulletsTop.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8">
                  <div className="font-serif text-2xl font-extrabold text-emerald-800 sm:text-3xl">
                    {formatProductPrice(product.price, product.unit)}
                  </div>

                  <div className="mt-4">
                    {product.price ? (
                      <QuantityAddToCart
                        product={{
                          slug: product.slug,
                          name: product.name,
                          price: product.price,
                          unit: product.unit,
                          image: product.image,
                        }}
                      />
                    ) : (
                      <div className="grid h-14 w-14 place-items-center bg-neutral-200 text-3xl text-neutral-500 shadow-sm sm:h-20 sm:w-20 sm:text-4xl">
                        🛒
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#lien-he"
                    className="inline-flex w-full items-center justify-center rounded-full bg-lime-200 px-6 py-3 text-base font-extrabold text-emerald-900 transition hover:bg-lime-300 sm:w-auto sm:px-10 sm:text-lg"
                  >
                    LIÊN HỆ ĐẶT HÀNG
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <h2 className="font-serif text-2xl font-extrabold text-emerald-800 sm:text-3xl">
                Mô tả sản phẩm
              </h2>

              <div className="mt-6 space-y-8 text-base leading-relaxed sm:text-[17px]">
                {sections.length ? (
                  sections.map((section, index) => (
                    <div key={index}>
                      <div className="font-extrabold underline underline-offset-4">
                        {section.title}:
                      </div>

                      {section.paras.length ? (
                        <div className="mt-2 space-y-2">
                          {section.paras.map((para, paraIndex) => (
                            <p key={paraIndex}>{para}</p>
                          ))}
                        </div>
                      ) : null}

                      {section.bullets.length ? (
                        <ul className="mt-3 space-y-2 pl-7">
                          {section.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="relative">
                              <span className="absolute -left-5 top-[2px] text-xl leading-none">
                                •
                              </span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))
                ) : (
                  <p>
                    Bạn hãy thêm field <b>description</b> cho sản phẩm này trong{" "}
                    <b>data/pineapples.ts</b>.
                  </p>
                )}
              </div>
            </div>

            <div id="lien-he" className="mt-14 pt-8">
              <div className="grid items-end gap-8 text-center sm:grid-cols-3">
                {[
                  { icon: "🚚", label: "Giao hàng toàn quốc" },
                  { icon: "📞", label: "Hỗ trợ 24/7" },
                  { icon: "🏅", label: "Cam kết chất lượng" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mx-auto text-4xl text-emerald-800 sm:text-5xl">
                      {item.icon}
                    </div>
                    <div className="mt-2 text-sm font-bold text-emerald-800">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
