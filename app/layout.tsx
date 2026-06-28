import "./globals.css"
import { Faustina } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/components/CartContext"
import FloatingSocials from "@/components/FloatingSocials"
import {
  buildMetadata,
  jsonLdScript,
  siteDescription,
  siteLogo,
  siteName,
  sitePhone,
  siteUrl,
} from "@/lib/seo"

export const metadata = buildMetadata()

const faustina = Faustina({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
  display: "swap",
  variable: "--font-faustina",
})

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: siteLogo,
  description: siteDescription,
  telephone: sitePhone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tam Phước",
    addressRegion: "Đồng Nai",
    addressCountry: "VN",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61574933735753",
    "https://www.tiktok.com/@vietpineapple",
    "https://zalo.me/0357177160",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: ["Viet Pineapple", "VietPineapple Việt Nam"],
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={faustina.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd)}
        />
        <CartProvider>
          <Navbar />
          <div className="h-[148px] sm:h-[114px] md:h-[126px]" aria-hidden="true" />
          <FloatingSocials />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
