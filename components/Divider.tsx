import React from "react"

export default function Divider({
  title,
  variant = "classic",
  className = "",
}: {
  title?: React.ReactNode
  variant?:
    | "classic"
    | "double"
    | "diamond"
    | "dots"
    | "leaf"
    | "thick"
    | "fade"
    | "split"
  className?: string
}) {
  const T = title ? (
    <span className="shrink px-3 text-center text-lg font-extrabold tracking-wide text-[#307330] sm:px-4 sm:text-xl md:text-2xl">
      {title}
    </span>
  ) : null

  if (variant === "classic") {
    return (
      <div className={`my-10 flex items-center ${className}`}>
        <div className="h-[3px] flex-1 bg-[#307330]/70" />
        {T}
        <div className="h-[3px] flex-1 bg-[#307330]/70" />
      </div>
    )
  }

  if (variant === "double") {
    return (
      <div className={`my-10 ${className}`}>
        <div className="flex items-center">
          <div className="h-[2px] flex-1 bg-[#307330]/70" />
          {T}
          <div className="h-[2px] flex-1 bg-[#307330]/70" />
        </div>
        <div className="mt-2 flex items-center">
          <div className="h-[1px] flex-1 bg-[#307330]/40" />
          <div className="w-[1px]" />
          <div className="h-[1px] flex-1 bg-[#307330]/40" />
        </div>
      </div>
    )
  }

  if (variant === "diamond") {
    return (
      <div className={`my-10 flex items-center ${className}`}>
        <div className="h-[2px] flex-1 bg-[#307330]/60" />
        <span className="mx-3 h-3 w-3 rotate-45 bg-[#307330]/70" />
        {T}
        <span className="mx-3 h-3 w-3 rotate-45 bg-[#307330]/70" />
        <div className="h-[2px] flex-1 bg-[#307330]/60" />
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className={`my-10 flex items-center ${className}`}>
        <div className="flex-1 border-t-2 border-dashed border-[#307330]/60" />
        {T}
        <div className="flex-1 border-t-2 border-dashed border-[#307330]/60" />
      </div>
    )
  }

  if (variant === "leaf") {
    return (
      <div className={`my-10 flex items-center ${className}`}>
        <div className="h-[2px] flex-1 bg-[#307330]/50" />
        <span className="mx-3 text-[#307330] text-xl">🍍</span>
        {T}
        <span className="mx-3 text-[#307330] text-xl">🍍</span>
        <div className="h-[2px] flex-1 bg-[#307330]/50" />
      </div>
    )
  }

  if (variant === "thick") {
    return (
      <div className={`my-10 flex items-center ${className}`}>
        <div className="h-[5px] flex-1 bg-[#307330]/70 rounded-full" />
        {T}
        <div className="h-[5px] flex-1 bg-[#307330]/70 rounded-full" />
      </div>
    )
  }

  if (variant === "fade") {
    return (
      <div className={`my-10 flex items-center ${className}`}>
        <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent to-[#307330]/70" />
        {T}
        <div className="h-[3px] flex-1 bg-gradient-to-l from-transparent to-[#307330]/70" />
      </div>
    )
  }

  // split
  return (
    <div className={`my-10 ${className}`}>
      <div className="flex items-center justify-center">
        {T ?? (
          <span className="px-4 text-xl md:text-2xl font-extrabold tracking-wide text-[#307330]">
            &nbsp;
          </span>
        )}
      </div>
      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-5 h-[3px] bg-[#307330]/70" />
        <div className="col-span-2 h-[3px] bg-[#307330]/80" />
        <div className="col-span-5 h-[3px] bg-[#307330]/70" />
      </div>
    </div>
  )
}
