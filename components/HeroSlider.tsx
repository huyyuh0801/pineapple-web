"use client"

import Image from "next/image"
import { useState } from "react"

const DEFAULT_IMAGES = [
  "/images/banner2.png",
  "/images/banner3.png",
  "/images/banner4.png",
]

export default function HeroSlider({
  images = DEFAULT_IMAGES,
}: {
  images?: string[]
}) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  function goTo(i: number) {
    setFade(false)
    setTimeout(() => {
      setIndex(i)
      setFade(true)
    }, 150)
  }

  function prev() {
    goTo(index === 0 ? images.length - 1 : index - 1)
  }

  function next() {
    goTo(index === images.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="w-full flex flex-col -mt-2 sm:-mt-4 md:-mt-5">
      {/* ===== IMAGE WRAPPER ===== */}
      <div className="relative w-full">

        {/* KHUNG */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/9.5]">

          <Image
            src={images[index]}
            alt="Sản phẩm và trang trại VietPineapple"
            fill
            preload
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* LEFT */}
          <button
            type="button"
            onClick={prev}
            aria-label="Ảnh trước"
            className="
              absolute left-2 sm:left-3 top-1/2 -translate-y-1/2
              bg-black/40 hover:bg-black/60
              text-white
              w-8 h-8 sm:w-10 sm:h-10
              flex items-center justify-center
              rounded-full
              transition
              backdrop-blur
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* RIGHT */}
          <button
            type="button"
            onClick={next}
            aria-label="Ảnh tiếp theo"
            className="
              absolute right-2 sm:right-3 top-1/2 -translate-y-1/2
              bg-black/40 hover:bg-black/60
              text-white
              w-8 h-8 sm:w-10 sm:h-10
              flex items-center justify-center
              rounded-full
              transition
              backdrop-blur
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* DOT */}
      <div className="mt-1 flex gap-2 sm:gap-3 justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Xem ảnh ${i + 1}`}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition ${
              i === index ? "bg-[#307330] scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
