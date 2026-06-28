"use client"

import { useState } from "react"

function PlayIcon() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="white" />
    </svg>
  )
}

function VideoPlaceholder({
  label,
  className,
  onClick,
}: {
  label: string
  className: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} group grid w-full place-items-center overflow-hidden bg-gradient-to-br from-[#307330]/10 via-white to-yellow-100 text-[#307330] ring-1 ring-[#307330]/15 transition hover:from-[#307330]/15 hover:to-yellow-200`}
      aria-label={label}
    >
      <span className="flex flex-col items-center gap-3 px-5 text-lg font-extrabold sm:text-xl">
        <span className="transition group-hover:scale-110">
          <PlayIcon />
        </span>
        {label}
      </span>
    </button>
  )
}

export function DeferredYouTube({ videoId }: { videoId: string }) {
  const [active, setActive] = useState(false)

  if (!active) {
    return (
      <VideoPlaceholder
        label="Xem video VietPineapple"
        className="aspect-video rounded-xl shadow-md"
        onClick={() => setActive(true)}
      />
    )
  }

  return (
    <iframe
      className="aspect-video w-full rounded-xl shadow-md"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
      title="Video VietPineapple"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export function DeferredTikTok({ videoId }: { videoId: string }) {
  const [active, setActive] = useState(false)

  if (!active) {
    return (
      <VideoPlaceholder
        label="Xem video TikTok"
        className="min-h-[560px]"
        onClick={() => setActive(true)}
      />
    )
  }

  return (
    <div className="min-h-[560px] overflow-hidden bg-white">
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        title="TikTok review sản phẩm"
        className="h-[560px] w-full border-0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
