import Image from "next/image"
import ContactForm from "@/components/ContactForm"

const PHONE = "0357177160"
const ZALO_LINK = "https://zalo.me/0357177160"
const MESSENGER_LINK = "https://m.me/61574933735753"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
}

function MessengerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0084FF"
        d="M12 2C6.477 2 2 6.145 2 11.26c0 2.915 1.455 5.516 3.73 7.214V22l3.405-1.87c.91.252 1.873.39 2.865.39 5.523 0 10-4.145 10-9.26S17.523 2 12 2Zm.994 12.47-2.545-2.714-4.965 2.714 5.456-5.79 2.61 2.714 4.9-2.714-5.456 5.79Z"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.03-.25 1.13.37 2.35.57 3.56.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.21.2 2.43.57 3.56.11.36.03.75-.25 1.03l-2.2 2.2Z"
      />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-gradient-to-b from-[#307330]/5 via-white to-white py-8 sm:py-10 md:py-14">
        <Container>
          <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:gap-8">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[#307330] sm:text-3xl md:text-4xl">
                Liên hệ với chúng tôi
              </h1>
              <p className="mt-4 max-w-4xl text-justify text-base leading-relaxed text-neutral-700 sm:text-lg md:text-xl lg:text-2xl">
                Nếu bạn có bất kỳ câu hỏi nào về sản phẩm, đơn hàng, số lượng
                hoặc cần được tư vấn thêm trước khi mua, hãy liên hệ với chúng
                tôi. Đội ngũ VietPineapple luôn sẵn sàng lắng nghe, hỗ trợ và
                phản hồi trong thời gian nhanh nhất có thể để mang đến cho bạn
                trải nghiệm mua hàng rõ ràng, thuận tiện và an tâm.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="animate-gradient bg-gradient-to-r from-[#307330] via-[#307330] to-yellow-500 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl md:text-3xl">
                  Hotline:{" "}
                  <a href={`tel:${PHONE}`} className="hover:underline">
                    {PHONE}
                  </a>
                </div>

                <div className="flex flex-wrap gap-3 sm:justify-end">
                  <a
                    href={`tel:${PHONE}`}
                    aria-label="Gọi điện"
                    title="Gọi điện"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white text-[#307330] shadow-sm transition hover:bg-neutral-50 sm:h-14 sm:w-14"
                  >
                    <PhoneIcon />
                  </a>
                  <a
                    href={ZALO_LINK}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Nhắn Zalo"
                    title="Nhắn Zalo"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-neutral-50 sm:h-14 sm:w-14"
                  >
                    <Image
                      src="/images/zalo.png"
                      alt=""
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </a>
                  <a
                    href={MESSENGER_LINK}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Messenger"
                    title="Messenger"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-neutral-50 sm:h-14 sm:w-14"
                  >
                    <MessengerIcon />
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  )
}
