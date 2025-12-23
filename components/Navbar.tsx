"use client"

import Image from "next/image"
import Link from "next/link"

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        rounded-xl
        px-6 py-3
        text-2xl font-extrabold tracking-tight
        !text-emerald-700
        hover:!text-emerald-800
        hover:bg-emerald-50
        transition
      "
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-10 px-6 py-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="VietPineapple Logo"
            width={160}
            height={80}
            priority
            quality={100}
            className="h-20 w-40 object-contain"
          />
        </Link>

        {/* DESKTOP TABS */}
        <nav className="hidden items-center gap-2 lg:flex">
          <NavItem href="/">Trang chủ</NavItem>
          <NavItem href="/about">Giới thiệu</NavItem>
          <NavItem href="/products">Sản phẩm</NavItem>
          <NavItem href="/contact">Liên hệ</NavItem>

          {/* SOCIAL ICONS (DESKTOP) */}
          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/17oS9bw3RH/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 hover:bg-blue-50 transition"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.tiktok.com/@vietpineapple?_r=1&_t=ZS-92SzJyQIsE8"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 transition"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </nav>
      </div>

      {/* MOBILE */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-5 lg:hidden">
        <div className="flex flex-wrap gap-3">
          <NavItem href="/">Trang chủ</NavItem>
          <NavItem href="/about">Giới thiệu</NavItem>
          <NavItem href="/products">Sản phẩm</NavItem>
          <NavItem href="/contact">Liên hệ</NavItem>
        </div>

        {/* SOCIAL ICONS (MOBILE) */}
        <div className="mt-3 flex items-center gap-3">
          <a
            href="https://www.facebook.com/share/17oS9bw3RH/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 hover:bg-blue-50 transition"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>

          <a
            href="https://www.tiktok.com/@vietpineapple?_r=1&_t=ZS-92SzJyQIsE8"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 transition"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>
    </header>
  )
}

/* ===== ICONS ===== */
/* Ép màu Facebook để chắc chắn không bị đen do CSS/override */
function FacebookIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
      />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525 0h3.294c.112 1.21.63 2.353 1.475 3.198.845.845 1.988 1.363 3.198 1.475v3.294c-1.753.043-3.467-.456-4.934-1.403v7.615c0 3.99-3.23 7.22-7.22 7.22S1.118 18.17 1.118 14.18s3.23-7.22 7.22-7.22c.374 0 .74.03 1.101.087v3.59a3.62 3.62 0 0 0-1.101-.171 3.714 3.714 0 1 0 3.714 3.714V0z" />
    </svg>
  )
}
