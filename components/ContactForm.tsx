"use client"

import { useState, type FormEvent } from "react"

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-base font-bold text-neutral-700 sm:text-xl md:text-2xl">
        {label}
      </span>
      {children}
    </label>
  )
}

export default function ContactForm() {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [note, setNote] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    phoneNumber: "",
  })

  function handleNameChange(value: string) {
    setName(value)
    if (value.trim()) {
      setFieldErrors((current) => ({ ...current, name: "" }))
    }
  }

  function handlePhoneChange(value: string) {
    if (/\D/.test(value)) {
      setFieldErrors((current) => ({
        ...current,
        phoneNumber: "Số điện thoại chỉ được nhập số.",
      }))
    }

    const numbersOnly = value.replace(/\D/g, "")
    setPhoneNumber(numbersOnly)

    if (!/\D/.test(value) && numbersOnly) {
      setFieldErrors((current) => ({ ...current, phoneNumber: "" }))
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedPhoneNumber = phoneNumber.trim()
    const nextFieldErrors = { name: "", phoneNumber: "" }

    if (!trimmedName) {
      nextFieldErrors.name = "Tên không được để trống."
    }

    if (!trimmedPhoneNumber) {
      nextFieldErrors.phoneNumber = "Số điện thoại không được để trống."
    } else if (!/^\d+$/.test(trimmedPhoneNumber)) {
      nextFieldErrors.phoneNumber = "Số điện thoại chỉ được nhập số."
    }

    if (nextFieldErrors.name || nextFieldErrors.phoneNumber) {
      setStatus("error")
      setMessage("")
      setFieldErrors(nextFieldErrors)
      return
    }

    setStatus("sending")
    setMessage("")
    setFieldErrors(nextFieldErrors)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phoneNumber: trimmedPhoneNumber,
          note,
        }),
      })
      const data = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(data.message ?? "Không thể gửi yêu cầu lúc này.")
      }

      setStatus("success")
      setMessage(data.message ?? "Yêu cầu đã được gửi.")
      setName("")
      setPhoneNumber("")
      setNote("")
      setFieldErrors(nextFieldErrors)
    } catch (error) {
      setStatus("error")
      setMessage(
        error instanceof Error
          ? error.message
          : "Không thể gửi yêu cầu lúc này."
      )
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6 md:p-8"
    >
      <div className="text-xl font-extrabold leading-snug text-[#307330] sm:text-2xl md:text-4xl">
        Để lại thông tin cho chúng tôi nếu bạn cần tư vấn
      </div>

      <div className="mt-6 grid gap-5">
        <Field label="Họ và tên">
          <input
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
            placeholder="Nhập tên của bạn"
            aria-invalid={fieldErrors.name ? "true" : "false"}
            className={`mt-3 w-full rounded-xl border px-4 py-3 text-base outline-none transition focus:ring-2 sm:py-4 sm:text-xl md:text-2xl ${
              fieldErrors.name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
                : "focus:border-[#307330] focus:ring-[#307330]/15"
            }`}
          />
          {fieldErrors.name ? (
            <p className="mt-2 text-sm font-bold text-red-600 sm:text-base md:text-lg">
              {fieldErrors.name}
            </p>
          ) : null}
        </Field>

        <Field label="Số điện thoại">
          <input
            value={phoneNumber}
            onChange={(event) => handlePhoneChange(event.target.value)}
            placeholder="Ví dụ: 0357177160"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-invalid={fieldErrors.phoneNumber ? "true" : "false"}
            className={`mt-3 w-full rounded-xl border px-4 py-3 text-base outline-none transition focus:ring-2 sm:py-4 sm:text-xl md:text-2xl ${
              fieldErrors.phoneNumber
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
                : "focus:border-[#307330] focus:ring-[#307330]/15"
            }`}
          />
          {fieldErrors.phoneNumber ? (
            <p className="mt-2 text-sm font-bold text-red-600 sm:text-base md:text-lg">
              {fieldErrors.phoneNumber}
            </p>
          ) : null}
        </Field>

        <Field label="Ghi chú (nếu có)">
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Sản phẩm muốn mua, số lượng, thời gian nhận hàng..."
            rows={5}
            className="mt-3 w-full resize-none rounded-xl border px-4 py-3 text-base outline-none transition focus:border-[#307330] focus:ring-2 focus:ring-[#307330]/15 sm:py-4 sm:text-xl md:text-2xl"
          />
        </Field>

        {message ? (
          <p
            className={`rounded-xl border px-4 py-3 text-base font-bold leading-snug sm:text-lg md:text-xl ${
              status === "success"
                ? "border-[#307330]/20 bg-[#307330]/5 text-[#307330]"
                : "border-red-200 bg-red-50 text-red-600"
            }`}
          >
            {message}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-1">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-[#307330] px-5 py-3 text-base font-extrabold text-white transition hover:bg-[#307330] disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:py-4 sm:text-xl md:text-2xl"
          >
            {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu"}
          </button>
        </div>
      </div>
    </form>
  )
}
