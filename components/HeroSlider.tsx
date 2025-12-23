"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const IMAGES = ["/images/banner1.jpg", "/images/banner2.jpg", "/images/banner3.jpg"]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const isHoveredRef = useRef(false)

  function goTo(i: number) {
    setFade(false)
    window.setTimeout(() => {
      setIndex(i)
      setFade(true)
    }, 150)
  }

  function prev() {
    goTo(index === 0 ? IMAGES.length - 1 : index - 1)
  }

  function next() {
    goTo(index === IMAGES.length - 1 ? 0 : index + 1)
  }

  // ⏱ Auto slide mỗi 5 giây — dừng khi hover
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!isHoveredRef.current) next()
    }, 5000)

    return () => window.clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div
      className="
        relative w-full overflow-hidden
        h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]
      "
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
    >
      {/* Background blur */}
      <Image
        src={IMAGES[index]}
        alt=""
        fill
        className={`object-cover blur-2xl scale-110 transition-opacity duration-500 ${
          fade ? "opacity-40" : "opacity-0"
        }`}
      />

      {/* Main image */}
      <Image
        src={IMAGES[index]}
        alt="Banner"
        fill
        priority
        className={`object-contain transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
      />

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="
          absolute left-3 sm:left-6 top-1/2 -translate-y-1/2
          rounded-full bg-white/80 p-3 sm:p-4
          shadow-lg backdrop-blur hover:bg-white transition
        "
        aria-label="Previous"
      >
        <ArrowLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="
          absolute right-3 sm:right-6 top-1/2 -translate-y-1/2
          rounded-full bg-white/80 p-3 sm:p-4
          shadow-lg backdrop-blur hover:bg-white transition
        "
        aria-label="Next"
      >
        <ArrowRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-emerald-600 scale-110" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

/* ===== ICONS ===== */
function ArrowLeft() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}
