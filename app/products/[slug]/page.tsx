import Link from "next/link"
import { products } from "@/data/pineapples"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <Link href="/products" className="text-lg font-bold text-emerald-700 hover:underline">
          ← Quay lại sản phẩm
        </Link>
        <h1 className="mt-8 text-4xl font-extrabold">Không tìm thấy sản phẩm</h1>
      </main>
    )
  }

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <Link href="/products" className="text-lg font-bold text-emerald-700 hover:underline">
          ← Quay lại sản phẩm
        </Link>

        <h1 className="mt-8 text-5xl font-extrabold md:text-6xl">{product.name}</h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-neutral-50 p-8">
            <div className="text-2xl font-extrabold">Thông tin</div>
            <div className="mt-5 space-y-3 text-lg text-neutral-700">
              <div><b>Giá:</b> {product.price}</div>
              <div><b>Nguồn gốc:</b> {product.origin}</div>
              <div><b>Hương vị:</b> {product.taste}</div>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-8">
            <div className="text-2xl font-extrabold">Mô tả</div>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">{product.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
