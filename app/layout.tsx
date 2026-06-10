import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/components/CartContext"
import FloatingSocials from "@/components/FloatingSocials"

export const metadata = {
  title: "VietPineapple",
  description: "Dứa tươi ngon mỗi ngày – đặt hàng nhanh, nhận đúng hẹn.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <CartProvider>
          <Navbar />
          <div className="h-[76px] md:h-[84px]" aria-hidden="true" />
          <FloatingSocials />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
