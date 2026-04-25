"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ApplicationData {
  name: string
  email: string
  message: string
}

export async function sendApplication(data: ApplicationData) {
  try {
    const { name, email, message } = data

    const result = await resend.emails.send({
      from: "Elevare Academy <onboarding@resend.dev>",
      to: "upoznajme2010@gmail.com",
      subject: `New Application - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #c9a227; margin: 0; font-size: 24px;">Elevare International Academy</h1>
            <p style="color: #94a3b8; margin: 10px 0 0 0;">New Application for Enrollment</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e293b; margin-top: 0;">Personal Information</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #64748b;">Name and Surname:</strong></p>
              <p style="margin: 0 0 20px 0; color: #1e293b; font-size: 16px;">${name}</p>
              
              <p style="margin: 0 0 10px 0;"><strong style="color: #64748b;">Email Address:</strong></p>
              <p style="margin: 0 0 20px 0; color: #1e293b; font-size: 16px;">
                <a href="mailto:${email}" style="color: #c9a227;">${email}</a>
              </p>
              
              <p style="margin: 0 0 10px 0;"><strong style="color: #64748b;">Message:</strong></p>
              <p style="margin: 0; color: #1e293b; font-size: 16px; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              This message was sent via the contact form on the Elevare Academy website.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    if (result.error) {
      console.error("Email error:", result.error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true }
  } catch (error) {
    console.error("Server error:", error)
    return { success: false, error: "Server error occurred" }
  }
}
