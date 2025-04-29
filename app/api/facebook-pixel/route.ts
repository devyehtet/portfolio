import { type NextRequest, NextResponse } from "next/server"
import { sendFacebookEvent, hashData } from "@/app/lib/facebook"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event_name, email, phone, first_name, last_name, external_id, custom_data } = body

    // Get user data from request
    const userAgent = request.headers.get("user-agent") || ""
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0] || ""
    const referer = request.headers.get("referer") || ""

    // Get cookies
    const cookies = request.cookies
    const fbp = cookies.get("_fbp")?.value
    const fbc = cookies.get("_fbc")?.value

    // Create and send event
    const result = await sendFacebookEvent({
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: referer,
      event_id: `${event_name.toLowerCase()}_${Date.now()}`,
      user_data: {
        em: email ? hashData(email) : undefined,
        ph: phone ? hashData(phone) : undefined,
        fn: first_name ? hashData(first_name) : undefined,
        ln: last_name ? hashData(last_name) : undefined,
        external_id,
        client_ip_address: clientIp,
        client_user_agent: userAgent,
        fbp,
        fbc,
      },
      custom_data,
      action_source: "website",
    })

    if (!result.success) {
      return NextResponse.json({ error: result.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error processing Facebook event:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
