export async function sendFacebookEvent(eventData: any): Promise<{ success: boolean; message?: string }> {
    try {
      // Basic validation
      if (!eventData.event_name) {
        return { success: false, message: "Event name is required." }
      }
  
      // Simulate sending the event to Facebook (replace with actual API call)
      console.log("Sending Facebook event:", eventData)
  
      // Simulate a successful response
      return { success: true }
    } catch (error: any) {
      console.error("Error sending Facebook event:", error)
      return { success: false, message: error.message || "Failed to send Facebook event." }
    }
  }
  
  export function hashData(data: string): string {
    // Basic hashing function (replace with a more secure method in production)
    let hash = 0
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }
    return `hashed_${Math.abs(hash)}`
  }
  