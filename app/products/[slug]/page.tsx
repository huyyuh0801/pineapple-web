import Link from "next/link"
import { products } from "@/data/pineapples"
import ProductDetailClient from "@/components/ProductDetailClient"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function normalizeSlug(s: string) {
  return decodeURIComponent(s).trim().toLowerCase()
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: rawSlug } = await params
  const slug = normalizeSlug(rawSlug)

  const product = products.find((p) => normalizeSlug(p.slug) === slug)

  if (!product) {
    return (
      <main className="bg-white">
        <Container>
          <div className="py-12 md:py-16">
            <Link
              href="/products"
              className="text-base md:text-lg font-bold text-emerald-700 hover:underline"
            >
              ← Quay lại sản phẩm
            </Link>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Không tìm thấy sản phẩm
            </h1>
            <p className="mt-3 text-base md:text-lg text-neutral-600">
              Slug hiện tại: <b className="text-neutral-800">{rawSlug}</b>
            </p>

            <div className="mt-6 rounded-3xl border bg-neutral-50 p-6 md:p-8">
              <div className="text-lg md:text-xl font-extrabold">Cách sửa nhanh</div>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-base md:text-lg text-neutral-700">
                <li>
                  Kiểm tra <b>slug</b> trong <code>data/pineapples.ts</code> có đúng không.
                </li>
                <li>
                  Slug nên là chữ thường, không dấu, không khoảng trắng. Ví dụ:{" "}
                  <code>dua-md2</code>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
    )
  }

  const ORDER = {
    zalo: "https://zalo.me/", // đổi
    messenger: "https://m.me/", // đổi (optional)
    phone: "+849xxxxxxxx", // đổi (optional)
  }

  return (
    <main className="bg-gradient-to-b from-white to-neutral-50">
      <Container>
        <div className="py-10 md:py-14">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/products"
              className="text-base md:text-lg font-bold text-emerald-700 hover:underline"
            >
              ← Quay lại sản phẩm
            </Link>

            <Link
              href="/contact"
              className="text-base md:text-lg font-bold text-neutral-700 hover:underline"
            >
              Cần tư vấn? → Liên hệ
            </Link>
          </div>

          <div className="mt-7">
            <ProductDetailClient product={product as any} orderLinks={ORDER} />
          </div>

          <div className="mt-10 md:mt-14 rounded-3xl border bg-white p-6 md:p-8">
            <div className="text-xl md:text-2xl font-extrabold">Gợi ý sản phẩm khác</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {products
                .filter((p) => p.slug !== product.slug)
                .slice(0, 6)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="rounded-full bg-neutral-100 px-4 py-2 text-sm md:text-base font-semibold text-neutral-800 hover:bg-neutral-200 transition"
                  >
                    {p.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
