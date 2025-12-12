import { type NextRequest, NextResponse } from "next/server"
import { getModel, isConfigured } from "@/lib/gemini/client"
import { buildSystemPrompt, buildReadingPrompt, parseReadingResponse } from "@/lib/gemini/prompts"
import type { ReadingRequest, ReadingResponse } from "@/lib/gemini/types"

export async function POST(request: NextRequest) {
  console.log("[v0] Reading API called")

  try {
    // Check if API is configured
    if (!isConfigured()) {
      console.error("[v0] Gemini API not configured")
      return NextResponse.json<ReadingResponse>(
        {
          success: false,
          error: "AI service is not configured. Please set GEMINI_API_KEY.",
        },
        { status: 503 },
      )
    }

    // Parse request body
    const body: ReadingRequest = await request.json()
    const { question, locale, cards } = body

    console.log("[v0] Reading API request:", { question, locale, cardsCount: cards?.length })

    // Validate request
    if (!question || !locale || !cards || cards.length !== 3) {
      console.error("[v0] Invalid request:", { hasQuestion: !!question, locale, cardsCount: cards?.length })
      return NextResponse.json<ReadingResponse>(
        {
          success: false,
          error: "Invalid request. Required: question, locale, and exactly 3 cards.",
        },
        { status: 400 },
      )
    }

    // Validate card positions
    const hasAllPositions =
      cards.some((c) => c.position === "Past") &&
      cards.some((c) => c.position === "Present") &&
      cards.some((c) => c.position === "Future")

    if (!hasAllPositions) {
      console.error("[v0] Missing card positions")
      return NextResponse.json<ReadingResponse>(
        {
          success: false,
          error: "Cards must include Past, Present, and Future positions.",
        },
        { status: 400 },
      )
    }

    console.log("[v0] Getting Gemini model...")
    // Get the Gemini model
    const model = getModel(process.env.GEMINI_MODEL || "gemini-2.5-flash")

    // Build prompts
    const systemPrompt = buildSystemPrompt(locale)
    const userPrompt = buildReadingPrompt(question, cards, locale)

    console.log("[v0] Calling Gemini API...")
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

    console.log("[v0] Gemini API response received")
    const response = result.response
    const text = response.text()

    console.log("[v0] Parsing response...")
    // Parse the response into structured content
    const parsedReading = parseReadingResponse(text)

    console.log("[v0] Reading generated successfully")
    return NextResponse.json<ReadingResponse>({
      success: true,
      reading: parsedReading,
    })
  } catch (error) {
    console.error("[v0] Reading API error:", error)

    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"

    return NextResponse.json<ReadingResponse>(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 },
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
