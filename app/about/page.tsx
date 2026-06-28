import Image from "next/image"
import Divider from "@/components/Divider"
import { buildMetadata, jsonLdScript, siteUrl } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Giới thiệu VietPineapple - Câu chuyện trang trại dứa tại Đồng Nai",
  description:
    "Tìm hiểu câu chuyện VietPineapple, trang trại dứa tại Tam Phước, Đồng Nai với định hướng canh tác tử tế, chọn lọc kỹ và giữ trọn hương vị tự nhiên.",
  path: "/about",
  image: "/images/farm-1.png",
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
      name: "Giới thiệu",
      item: `${siteUrl}/about`,
    },
  ],
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function ArticleImage({
  src,
  alt,
  align,
  tall = false,
}: {
  src: string
  alt: string
  align: "left" | "right"
  tall?: boolean
}) {
  return (
    <div
      className={[
        "relative my-5 h-56 overflow-hidden rounded bg-neutral-50 ring-1 ring-[#307330]/15 sm:h-64",
        tall ? "md:h-80" : "md:h-64",
        align === "left"
          ? "md:float-left md:mr-8 md:w-[46%]"
          : "md:float-right md:ml-8 md:w-[46%]",
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 46vw"
        quality={60}
        className="object-cover"
      />
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      {/* ===== STARTUP STORY ===== */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-[#307330] sm:text-4xl md:text-5xl">
              Câu chuyện VietPineapple
            </h1>

            <div className="mt-8 text-justify text-base italic leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
              <p>
                VietPineapple bắt đầu từ một vườn dứa nhỏ, nơi chúng tôi học cách
                quan sát từng luống cây, từng mùa nắng mưa và từng dấu hiệu chín tự
                nhiên của trái. Từ những ngày đầu chăm vườn, mong muốn của chúng tôi
                rất giản dị: làm ra những trái dứa ngọt lành, sạch sẽ, có thể ăn ngon
                ngay khi đến tay khách hàng.
              </p>

              <ArticleImage
                src="/images/farm-1.png"
                alt="Vườn dứa VietPineapple"
                align="right"
              />

              <p className="mt-5">
                Với chúng tôi, một trái dứa ngon không chỉ nằm ở vị ngọt. Nó đến từ
                đất được chăm kỹ, cây được theo dõi đều đặn, trái được để đủ thời gian
                để lên hương và được chọn bằng sự cẩn thận trước khi rời khỏi vườn.
                Mỗi lứa dứa đều được kiểm tra để hạn chế trái non, trái dập, trái quá
                chín, giữ lại hương vị tươi tự nhiên và cảm giác an tâm khi sử dụng.
              </p>

              <ArticleImage
                src="/images/farm-4.png"
                alt="Nông trại dứa lúc nắng sớm"
                align="left"
                tall
              />

              <p className="mt-5">
                VietPineapple được xây dựng với niềm tin rằng nông sản tử tế nên đến
                với khách hàng theo cách thật gần gũi và dễ dàng. Bạn không cần phải
                đi xa để tìm một trái dứa ngon; chúng tôi muốn đưa hương vị từ vườn
                dứa đến tận nhà bạn, trong từng đơn hàng được chọn kỹ, đóng gói cẩn
                thận và giao đúng hẹn.
              </p>

              <ArticleImage
                src="/images/farm-3.png"
                alt="Dứa đang phát triển"
                align="right"
              />

              <p className="mt-5">
                Mỗi trái dứa khi được gửi đi đều mang theo câu chuyện của mảnh đất,
                của người chăm vườn và của sự kiên nhẫn trong từng giai đoạn. Chúng
                tôi không chọn cách làm vội, không chạy theo số lượng bằng mọi giá,
                mà ưu tiên sự ổn định của chất lượng, sự rõ ràng trong tư vấn và niềm
                tin lâu dài của khách hàng.
              </p>

              <div className="clear-both" />
            </div>

            <div className="mt-10">
              <Divider
                title={
                  <span className="text-xl font-bold sm:text-2xl md:text-[32px]">
                    &quot;HONEST FARMING - HONEST FLAVOR&quot;
                  </span>
                }
                variant="diamond"
              />

              <p className="mx-auto mt-6 max-w-4xl text-justify text-base italic leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                “Hương vị ngon thật sự bắt đầu từ mảnh đất lành, cách trồng tử tế và
                sự kiên nhẫn chờ trái chín tự nhiên. Tại VietPineapple, chúng tôi
                chọn làm nông trung thực - không hoá chất, không ép nhanh - để mỗi
                trái dứa giữ trọn vị ngon mà bạn có thể tin tưởng.”
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 text-center sm:grid-cols-3 md:grid-cols-5 md:gap-6">
                {[
                  { label: "Sản phẩm hữu cơ", icon: "/images/icon1.png" },
                  { label: "Canh tác tử tế", icon: "/images/icon2.png" },
                  { label: "Không hoá chất", icon: "/images/icon3.png" },
                  { label: "Chín tự nhiên", icon: "/images/icon4.png" },
                  { label: "Giữ trọn vị ngon", icon: "/images/icon5.png" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        sizes="(max-width: 640px) 96px, 112px"
                        quality={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-1 text-lg font-bold sm:text-xl">
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
