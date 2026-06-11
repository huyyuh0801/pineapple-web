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
        text-[25px] font-semibold leading-none tracking-wide
        !text-[#307330]
        hover:!text-[#307330]
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
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#307330] bg-white">
      <div className="mx-auto flex h-[114px] max-w-6xl items-center gap-4 px-4 sm:px-6 md:h-[126px] md:gap-6">
        <div className="flex shrink-0 items-center leading-tight">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="VietPineapple"
              width={250}
              height={100}
              priority
              className="h-auto max-h-[105px] w-[13.5rem] object-contain sm:w-[16.5rem] md:max-h-[117px] md:w-[18rem] lg:w-[19.5rem]"
            />
          </Link>
        </div>

        <div className="flex h-full min-w-0 flex-1 items-end justify-end gap-5 pb-3 md:gap-7 md:pb-4 lg:gap-9">
          <nav className="flex min-w-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 whitespace-nowrap px-1 md:gap-x-7 lg:gap-x-9">
            <NavItem href="/">Trang chủ</NavItem>
            <NavItem href="/products">Sản phẩm</NavItem>
            <NavItem href="/about">Giới thiệu</NavItem>
            <NavItem href="/contact">Liên hệ</NavItem>
          </nav>

          <div className="translate-y-2 md:translate-y-2.5">
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  )
}
