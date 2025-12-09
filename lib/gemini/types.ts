// Gemini API Types for Tarot Reading

export type Locale = "en" | "zh" | "ro"
export type Position = "Past" | "Present" | "Future"

// Card data for API request
export interface CardInput {
  position: Position
  name: string      // Card name (e.g., "The Fool", "The Magician")
  reversed: boolean // Whether the card is reversed
}

// API Request
export interface ReadingRequest {
  question: string
  locale: Locale
  cards: CardInput[]
}

// Individual position insight
export interface PositionInsight {
  insight: string    // Short insight sentence
  deepDive: string   // Detailed paragraph
  tags: string[]     // Array of keywords/tags
}

// Complete AI reading response
export interface ReadingContent {
  overallEnergy: string   // Overall energy summary paragraph
  past: PositionInsight
  present: PositionInsight
  future: PositionInsight
}

// API Response
export interface ReadingResponse {
  success: boolean
  reading?: ReadingContent
  error?: string
}

// Reading phase state
export type ReadingPhase = "idle" | "loading" | "skeleton" | "complete" | "error"
