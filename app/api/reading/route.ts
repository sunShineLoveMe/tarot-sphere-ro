import { NextRequest, NextResponse } from "next/server"
import { getModel, isConfigured } from "@/lib/gemini/client"
import { buildSystemPrompt, buildReadingPrompt, parseReadingResponse } from "@/lib/gemini/prompts"
import type { ReadingRequest, ReadingResponse } from "@/lib/gemini/types"

export async function POST(request: NextRequest) {
  try {
    // Check if API is configured
    if (!isConfigured()) {
      return NextResponse.json<ReadingResponse>(
        {
          success: false,
          error: "AI service is not configured. Please set GEMINI_API_KEY.",
        },
        { status: 503 }
      )
    }

    // Parse request body
    const body: ReadingRequest = await request.json()
    const { question, locale, cards } = body

    // Validate request
    if (!question || !locale || !cards || cards.length !== 3) {
      return NextResponse.json<ReadingResponse>(
        {
          success: false,
          error: "Invalid request. Required: question, locale, and exactly 3 cards.",
        },
        { status: 400 }
      )
    }

    // Validate card positions
    const hasAllPositions = 
      cards.some(c => c.position === "Past") &&
      cards.some(c => c.position === "Present") &&
      cards.some(c => c.position === "Future")

    if (!hasAllPositions) {
      return NextResponse.json<ReadingResponse>(
        {
          success: false,
          error: "Cards must include Past, Present, and Future positions.",
        },
        { status: 400 }
      )
    }

    // Get the Gemini model
    const model = getModel(process.env.GEMINI_MODEL || "gemini-2.5-flash")

    // Build prompts
    const systemPrompt = buildSystemPrompt(locale)
    const userPrompt = buildReadingPrompt(question, cards, locale)

    // Generate content
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }],
        },
      ],
      generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      },
    })

    const response = result.response
    const text = response.text()

    // Parse the response into structured content
    const parsedReading = parseReadingResponse(text)

    return NextResponse.json<ReadingResponse>({
      success: true,
      reading: parsedReading,
    })
  } catch (error) {
    console.error("Reading API error:", error)

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred"

    return NextResponse.json<ReadingResponse>(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
