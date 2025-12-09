import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Email configuration
const FROM_EMAIL = "contact@zhiyunllm.com"
const TO_EMAIL = "chris@zhiyunllm.com"

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 503 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, message" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Initialize Resend client (lazy initialization to avoid build-time errors)
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Love Tarot Contact <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Love Tarot] New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a0a2e 0%, #0d0618 100%); padding: 30px; border-radius: 16px; color: white;">
            <h1 style="color: #FF4FD8; margin-bottom: 20px; text-align: center;">
              ✨ New Contact Form Submission
            </h1>
            
            <div style="background: rgba(115, 242, 255, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <h2 style="color: #73F2FF; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Sender Information
              </h2>
              <p style="margin: 8px 0; color: #ffffff;">
                <strong style="color: #FF4FD8;">Name:</strong> ${name}
              </p>
              <p style="margin: 8px 0; color: #ffffff;">
                <strong style="color: #FF4FD8;">Email:</strong> 
                <a href="mailto:${email}" style="color: #73F2FF;">${email}</a>
              </p>
            </div>
            
            <div style="background: rgba(255, 79, 216, 0.1); padding: 20px; border-radius: 12px;">
              <h2 style="color: #73F2FF; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Message
              </h2>
              <p style="margin: 0; color: #ffffff; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(115, 242, 255, 0.2); text-align: center;">
              <p style="color: rgba(255, 255, 255, 0.5); font-size: 12px; margin: 0;">
                This message was sent from tarotromania.com contact form
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from tarotromania.com contact form
      `.trim(),
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        { success: false, error: error.message || "Failed to send email" },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
