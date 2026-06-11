import Image from "next/image"

const socialButtonClass =
  "inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#307330]/30 bg-white shadow-2xl shadow-[#307330]/20 ring-4 ring-white/70 backdrop-blur transition hover:-translate-y-0.5 hover:scale-105 hover:bg-[#307330]/5 hover:shadow-xl sm:h-[68px] sm:w-[68px]"

export default function FloatingSocials() {
  return (
    <div className="fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-4 sm:right-3 lg:right-[max(1.25rem,calc((100vw-72rem)/2-4rem))]">
      <a
        href="https://www.facebook.com/profile.php?id=61574933735753"
        target="_blank"
        rel="noreferrer"
        className={socialButtonClass}
        aria-label="Facebook"
        title="Facebook"
      >
        <FacebookIcon />
      </a>

      <a
        href="https://www.tiktok.com/@vietpineapple"
        target="_blank"
        rel="noreferrer"
        className={socialButtonClass}
        aria-label="TikTok"
        title="TikTok"
      >
        <TikTokIcon />
      </a>

      <a
        href="https://zalo.me/0357177160"
        target="_blank"
        rel="noreferrer"
        className={socialButtonClass}
        aria-label="Zalo"
        title="Zalo"
      >
        <Image
          src="/images/zalo.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
      </a>
    </div>
  )
}

function FacebookIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
      />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="black" aria-hidden="true">
      <path d="M12.525 0h3.294c.112 1.21.63 2.353 1.475 3.198.845.845 1.988 1.363 3.198 1.475v3.294c-1.753.043-3.467-.456-4.934-1.403v7.615c0 3.99-3.23 7.22-7.22 7.22S1.118 18.17 1.118 14.18s3.23-7.22 7.22-7.22c.374 0 .74.03 1.101.087v3.59a3.62 3.62 0 0 0-1.101-.171 3.714 3.714 0 1 0 3.714 3.714V0z" />
    </svg>
  )
}
