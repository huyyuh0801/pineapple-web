import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "VietPineapple",
  description: "Dứa tươi ngon mỗi ngày – đặt hàng nhanh, nhận đúng hẹn.",
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
