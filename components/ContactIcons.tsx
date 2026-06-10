import Image from "next/image"

const PHONE = "0357177160"
const ZALO_LINK = "https://zalo.me/0357177160"
const MESSENGER_LINK = "https://m.me/61574933735753"

export default function ContactIcons() {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-3">
      <a
        href={`tel:${PHONE}`}
        aria-label="Gọi điện"
        title="Gọi điện"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white text-emerald-800 shadow-sm transition hover:bg-neutral-50"
      >
        <PhoneIcon />
      </a>
      <a
        href={ZALO_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Nhắn Zalo"
        title="Nhắn Zalo"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-neutral-50"
      >
        <Image
          src="/images/zalo.png"
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      </a>
      <a
        href={MESSENGER_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Messenger"
        title="Messenger"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-neutral-50"
      >
        <MessengerIcon />
      </a>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.03-.25 1.13.37 2.35.57 3.56.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.21.2 2.43.57 3.56.11.36.03.75-.25 1.03l-2.2 2.2Z"
      />
    </svg>
  )
}

function MessengerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0084FF"
        d="M12 2C6.477 2 2 6.145 2 11.26c0 2.915 1.455 5.516 3.73 7.214V22l3.405-1.87c.91.252 1.873.39 2.865.39 5.523 0 10-4.145 10-9.26S17.523 2 12 2Zm.994 12.47-2.545-2.714-4.965 2.714 5.456-5.79 2.61 2.714 4.9-2.714-5.456 5.79Z"
      />
    </svg>
  )
}
