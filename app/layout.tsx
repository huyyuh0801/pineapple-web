import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pineapple Farm",
  description: "Dứa tươi ngon mỗi ngày – đặt hàng nhanh qua Zalo/điện thoại.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
