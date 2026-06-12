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
        text-base font-semibold leading-none tracking-wide sm:text-lg md:text-[25px]
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
      <div className="relative mx-auto flex h-[148px] max-w-6xl flex-col items-center justify-center gap-2 px-3 py-2 sm:h-[114px] sm:flex-row sm:gap-4 sm:px-6 sm:py-0 md:h-[126px] md:gap-6">
        <div className="flex shrink-0 items-center leading-tight">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="VietPineapple"
              width={250}
              height={100}
              priority
              className="h-auto max-h-[76px] w-40 object-contain sm:max-h-[105px] sm:w-[16.5rem] md:max-h-[117px] md:w-[18rem] lg:w-[19.5rem]"
            />
          </Link>
        </div>

        <div className="flex w-full min-w-0 flex-1 items-center justify-center sm:h-full sm:w-auto sm:items-end sm:justify-end sm:gap-5 sm:pb-3 md:gap-7 md:pb-4 lg:gap-9">
          <nav className="flex min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 whitespace-nowrap px-10 sm:justify-end sm:px-1 md:gap-x-7 lg:gap-x-9">
            <NavItem href="/">Trang chủ</NavItem>
            <NavItem href="/products">Sản phẩm</NavItem>
            <NavItem href="/about">Giới thiệu</NavItem>
            <NavItem href="/contact">Liên hệ</NavItem>
          </nav>

          <div className="absolute right-3 top-3 sm:static sm:translate-y-2 md:translate-y-2.5">
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  )
}
