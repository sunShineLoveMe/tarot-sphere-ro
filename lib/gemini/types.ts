// Gemini API Types for Tarot Reading

export type Locale = "en" | "zh" | "ro"
export type Position = "past" | "present" | "future"

// Card data for API request
export interface CardInput {
  id: number // Card ID (0-21 for Major Arcana)
  position: Position
  reversed: boolean
}

// API Request
export interface ReadingRequest {
  question: string
  locale: Locale
  cards: CardInput[]
}

// Individual card interpretation
export interface CardInterpretation {
  position: Position
  cardName: string
  interpretation: string
}

// Complete AI reading response
export interface ReadingContent {
  overview: string // Overall energy summary
  cards: CardInterpretation[] // Per-card interpretations
  synthesis: string // Combined three-card reading
  advice: string // Actionable advice
  affirmation: string // Daily affirmation
}

// API Response
export interface ReadingResponse {
  success: boolean
  reading?: ReadingContent
  error?: string
}

// Streaming chunk for real-time display
export interface StreamChunk {
  type: "overview" | "card" | "synthesis" | "advice" | "affirmation" | "error" | "done"
  content?: string
  position?: Position
  cardName?: string
}
