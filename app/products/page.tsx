import Link from "next/link"
import { products } from "@/data/pineapples"

export default function ProductsPage() {
  return (
    <main className="bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <h1 className="text-5xl font-extrabold md:text-6xl">Sản phẩm</h1>
        <p className="mt-6 text-xl text-neutral-700">Bấm vào từng loại để xem chi tiết.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group rounded-3xl border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-extrabold">{p.name}</h3>
              <p className="mt-4 text-lg text-neutral-600">{p.short}</p>

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-base font-extrabold text-emerald-700">
                  {p.price}
                </span>
                <span className="text-lg font-bold text-emerald-700 group-hover:underline">
                  Xem chi tiết →
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
