export type Product = {
  slug: string
  name: string
  short: string
  price: string
  origin: string
  taste: string
  desc: string
  tags: string[]
}

export const products: Product[] = [
  {
    slug: "dua-cau-duc",
    name: "Dứa Cầu Đúc",
    short: "Ngọt, thơm, ít xơ – ăn tươi/ép",
    price: "18.000đ/kg",
    origin: "Quảng Ninh",
    taste: "Ngọt, thơm, ít xơ",
    desc: "Ăn tươi hoặc ép nước rất hợp. Mắt nhỏ, ruột vàng, thơm dịu.",
    tags: ["Ít xơ", "Ruột vàng", "Thơm"],
  },
  {
    slug: "dua-md2",
    name: "Dứa MD2",
    short: "Ngọt đậm – hợp ép nước/nhà hàng",
    price: "25.000đ/kg",
    origin: "Tiền Giang",
    taste: "Ngọt đậm, thơm mạnh",
    desc: "Trái to, ruột vàng, vị ngọt rõ. Hợp làm nước ép, phục vụ quán.",
    tags: ["Trái to", "Ngọt đậm", "Nước ép"],
  },
]
