import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const recipient = "nnttrang@vietpineapple.com.vn"

type ContactPayload = {
  name?: string
  phoneNumber?: string
  note?: string
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM ?? user

  if (!host || !user || !pass || !from) {
    return null
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    from,
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ message: "Dữ liệu gửi lên không hợp lệ." }, { status: 400 })
  }

  const name = payload.name?.trim()
  const phoneNumber = payload.phoneNumber?.trim()
  const note = payload.note?.trim()

  if (!name || !phoneNumber) {
    return NextResponse.json(
      { message: "Vui lòng nhập họ tên và số điện thoại." },
      { status: 400 }
    )
  }

  if (!/^\d+$/.test(phoneNumber)) {
    return NextResponse.json(
      { message: "Số điện thoại chỉ được chứa chữ số." },
      { status: 400 }
    )
  }

  const smtpConfig = getSmtpConfig()

  if (!smtpConfig) {
    return NextResponse.json(
      { message: "Máy chủ chưa được cấu hình SMTP." },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: smtpConfig.auth,
  })

  const text = [
    "Có yêu cầu liên hệ mới từ website VietPineapple.",
    "",
    `Họ và tên: ${name}`,
    `Số điện thoại: ${phoneNumber}`,
    "",
    "Ghi chú:",
    note || "(Không có)",
  ].join("\n")

  const safeName = escapeHtml(name)
  const safePhoneNumber = escapeHtml(phoneNumber)
  const safeNote = note ? escapeHtml(note).replace(/\n/g, "<br />") : "(Không có)"

  const html = `
    <div>
      <p>Có yêu cầu liên hệ mới từ website VietPineapple.</p>
      <p><strong>Họ và tên:</strong> ${safeName}</p>
      <p><strong>Số điện thoại:</strong> ${safePhoneNumber}</p>
      <p><strong>Ghi chú:</strong></p>
      <p>${safeNote}</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: smtpConfig.from,
      to: recipient,
      replyTo: smtpConfig.from,
      subject: "[VietPineapple] Yêu cầu tư vấn / đặt hàng",
      text,
      html,
    })

    return NextResponse.json({ message: "Yêu cầu đã được gửi." })
  } catch (error) {
    console.error("Contact email failed", error)

    return NextResponse.json(
      { message: "Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau." },
      { status: 500 }
    )
  }
}
