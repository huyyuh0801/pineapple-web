export type Product = {
  slug: string
  name: string
  short: string
  price: string
  origin: string
  taste: string
  desc: string
  tags: string[]
  image: string
}

export const products: Product[] = [
  {
    slug: "dua-cau-duc",
    name: "Dứa Cầu Đúc",
    short: "Ngọt, thơm, ít xơ – ăn tươi/ép",
    price: "22.000đ/kg",
    origin: "Hậu Giang",
    taste: "Ngọt thanh, thơm dịu",
    desc: "Ăn tươi hoặc ép nước rất hợp. Mắt nhỏ, ruột vàng, ít xơ, vị ngọt tự nhiên.",
    tags: ["Ít xơ", "Ruột vàng", "Ăn tươi"],
    image: "/images/dua-cau-duc.jpg",
  },
  {
    slug: "dua-md2",
    name: "Dứa MD2",
    short: "Ngọt đậm – hợp ép nước/nhà hàng",
    price: "25.000đ/kg",
    origin: "Tiền Giang",
    taste: "Ngọt đậm, thơm mạnh",
    desc: "Trái to, ruột vàng đậm, vị ngọt rõ. Rất phù hợp cho ép nước, quán cà phê.",
    tags: ["Trái to", "Ngọt đậm", "Nước ép"],
    image: "/images/dua-md2.jpg",
  },
]
