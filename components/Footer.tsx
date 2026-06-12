import Image from "next/image"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#307330] text-white">

      {/* pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:url('/images/pattern-pine.png')] bg-repeat" />

      <Container>
        <div className="relative z-10 flex flex-col gap-4 py-5 sm:py-6 md:flex-row md:items-center md:justify-between">

          {/* LEFT */}
          <div className="text-center text-base leading-relaxed text-white sm:text-xl md:text-left md:text-[25px]">
            
            <div className="mb-1 text-lg font-extrabold sm:text-xl md:text-[25px]">
              Công ty TNHH VietPineapple
            </div>

            <div>Tam Phước, Đồng Nai, Việt Nam</div>
            <div>Hotline: 0357177160</div>

            {/* SOCIAL */}
            <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/profile.php?id=61574933735753"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-3.5 py-2
                  rounded-full
                  bg-white text-[#307330] ring-1 ring-white/70 hover:bg-[#307330]/5
                  shadow-md
                  transition
                "
              >
                <FacebookIcon />
                <span className="text-base font-extrabold text-[#307330] sm:text-xl md:text-[25px]">Facebook</span>
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@vietpineapple"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-3.5 py-2
                  rounded-full
                  bg-white text-[#307330] ring-1 ring-white/70 hover:bg-[#307330]/5
                  shadow-md
                  transition
                "
              >
                <TikTokIcon />
                <span className="text-base font-extrabold text-[#307330] sm:text-xl md:text-[25px]">Tiktok</span>
              </a>

              {/* ZALO */}
              <a
                href="https://zalo.me/0357177160"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-3.5 py-2
                  rounded-full
                  bg-white text-[#307330] ring-1 ring-white/70 hover:bg-[#307330]/5
                  shadow-md
                  transition
                "
              >
                <ZaloIcon />
                <span className="text-base font-extrabold text-[#307330] sm:text-xl md:text-[25px]">Zalo</span>
              </a>

            </div>
          </div>

          {/* RIGHT – LOGO */}
          <div className="flex justify-center md:justify-end">
            <div className="p-0">
              <Image
                src="/images/logo1.png"
                alt="VietPineapple logo"
                width={260}
                height={260}
                className="h-40 w-40 object-contain sm:h-48 sm:w-48 md:h-56 md:w-56"
              />
            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}

{/* ===== ICONS ===== */}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        fill="#1877F2"
        d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
      />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        fill="black"
        d="M12.525 0h3.294c.112 1.21.63 2.353 1.475 3.198.845.845 1.988 1.363 3.198 1.475v3.294c-1.753.043-3.467-.456-4.934-1.403v7.615c0 3.99-3.23 7.22-7.22 7.22S1.118 18.17 1.118 14.18s3.23-7.22 7.22-7.22c.374 0 .74.03 1.101.087v3.59a3.62 3.62 0 0 0-1.101-.171 3.714 3.714 0 1 0 3.714 3.714V0z"
      />
    </svg>
  )
}

function ZaloIcon() {
  return (
    <Image
      src="/images/zalo.png"
      alt="Zalo"
      width={20}
      height={20}
      className="object-contain"
    />
  )
}
