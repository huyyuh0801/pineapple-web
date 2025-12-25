import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/pineapples"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

export default function ProductsPage() {
  return (
    <main className="bg-gradient-to-b from-white to-neutral-50">
      <Container>
        <div className="py-12 md:py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Sản phẩm
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
            Bấm vào từng loại để xem chi tiết. Ảnh chỉ mang tính minh hoạ — bạn có thể thay ảnh thật để đẹp hơn.
          </p>

          <div className="mt-8 md:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="
                  group
                  overflow-hidden rounded-3xl border bg-white
                  transition-all hover:-translate-y-1 hover:shadow-xl
                "
              >
                {/* ===== IMAGE ===== */}
                <div className="relative h-48 sm:h-52 md:h-56 w-full">
                  {"image" in p && (p as any).image ? (
                    <Image
                      src={(p as any).image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={false}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-emerald-100 via-lime-100 to-yellow-100" />
                  )}

                  {/* overlay nhẹ để chữ nổi hơn nếu ảnh sáng */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>

                {/* ===== CONTENT ===== */}
                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                    {p.name}
                  </h3>

                  <p className="mt-3 text-base md:text-lg text-neutral-600 leading-relaxed">
                    {p.short}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}
