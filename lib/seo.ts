import type { Metadata } from "next"

export const siteUrl = "https://www.vietpineapple.com.vn"
export const siteName = "VietPineapple"
export const siteTitle = "VietPineapple - Dứa tươi, nước ép dứa và đặc sản từ dứa"
export const siteDescription =
  "VietPineapple cung cấp dứa MD2 tươi, nước ép dứa nguyên chất và sản phẩm từ dứa được chọn lọc từ trang trại tại Đồng Nai."
export const sitePhone = "0357177160"
export const siteLogo = `${siteUrl}/images/logo1.png`

type SeoConfig = {
  title?: string
  description?: string
  path?: string
  image?: string
}

export function absoluteUrl(path = "") {
  if (!path) return siteUrl
  if (path.startsWith("http")) return path
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}

export function buildMetadata({
  title = siteTitle,
  description = siteDescription,
  path = "",
  image = "/images/logo1.png",
}: SeoConfig = {}): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  }
}

