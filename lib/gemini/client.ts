import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Gemini client
const apiKey = process.env.GEMINI_API_KEY

if (!apiKey) {
  console.warn("GEMINI_API_KEY is not set. AI readings will not work.")
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null

// Get the generative model instance
// Using gemini-2.5-flash as default (current stable model for free tier)
export function getModel(modelName: string = "gemini-3-pro-preview") {
  if (!genAI) {
    throw new Error("Gemini API key not configured")
  }
  return genAI.getGenerativeModel({ model: modelName })
}

// Check if API is configured
export function isConfigured(): boolean {
  return !!apiKey
}
