'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, message: 'Please fill out all fields.' }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['info@yehtet.com'],
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    if (error) {
      console.error('Error sending email:', error)
      return { success: false, message: 'Failed to send email. Please try again later.' }
    }

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Please try again later.' }
  }
}