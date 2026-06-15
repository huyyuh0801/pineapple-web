import { buildMetadata, jsonLdScript, siteUrl } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Liên hệ VietPineapple - Tư vấn và đặt hàng dứa",
  description:
    "Liên hệ VietPineapple để được tư vấn sản phẩm dứa tươi, nước ép dứa, dứa sấy và đặt hàng nhanh qua hotline, Zalo hoặc form liên hệ.",
  path: "/contact",
  image: "/images/logo1.png",
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
      name: "Liên hệ",
      item: `${siteUrl}/contact`,
    },
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      {children}
    </>
  )
}
