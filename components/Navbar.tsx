"use client"

import Image from "next/image"
import Link from "next/link"
import CartButton from "./CartButton"

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        font-[Faustina]
        whitespace-nowrap
        text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide
        text-emerald-900
        hover:text-emerald-950
        transition
        hover:underline underline-offset-4
      "
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-300">
      <div className="mx-auto flex min-h-[76px] max-w-6xl items-center gap-4 px-4 py-2 sm:px-6 md:min-h-[84px] md:gap-6">
        <div className="flex shrink-0 items-center leading-tight">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="VietPineapple"
              width={220}
              height={88}
              priority
              className="h-auto w-32 object-contain sm:w-40 md:w-44 lg:w-48"
            />
          </Link>
        </div>

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-5 overflow-x-auto whitespace-nowrap px-1 md:gap-7 lg:gap-9">
          <NavItem href="/">Trang chủ</NavItem>
          <NavItem href="/products">Sản phẩm</NavItem>
          <NavItem href="/about">Giới thiệu</NavItem>
          <NavItem href="/contact">Liên hệ</NavItem>
        </nav>

        <div className="flex shrink-0 items-center justify-end">
          <CartButton />
        </div>
      </div>
    </header>
  )
}
