"use client"

import { useState, useCallback, useRef } from "react"
import type { ReadingContent, ReadingPhase, CardInput, Locale } from "@/lib/gemini/types"

interface UseReadingOptions {
  skeletonDelay?: number // Delay before showing content after skeleton (ms)
  onSuccess?: (reading: ReadingContent) => void
  onError?: (error: string) => void
}

interface UseReadingReturn {
  reading: ReadingContent | null
  phase: ReadingPhase
  error: string | null
  generateReading: (question: string, cards: CardInput[], locale: Locale) => Promise<void>
  reset: () => void
}

export function useReading(options: UseReadingOptions = {}): UseReadingReturn {
  const { skeletonDelay = 500, onSuccess, onError } = options
  
  const [reading, setReading] = useState<ReadingContent | null>(null)
  const [phase, setPhase] = useState<ReadingPhase>("idle")
  const [error, setError] = useState<string | null>(null)
  
  const abortControllerRef = useRef<AbortController | null>(null)

  const generateReading = useCallback(
    async (question: string, cards: CardInput[], locale: Locale) => {
      // Cancel any previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      // Reset state
      setError(null)
      setReading(null)
      setPhase("loading")

      const controller = new AbortController()
      abortControllerRef.current = controller

      // Flag to track if abort was caused by our timeout (not manual cancellation)
      let timedOut = false

      // Set up 45-second timeout - Gemini API can take 10-30s for complex readings
      const TIMEOUT_MS = 45000
      const timeoutId = setTimeout(() => {
        timedOut = true  // Mark as timed out BEFORE aborting
        controller.abort()
      }, TIMEOUT_MS)

      try {
        const response = await fetch("/api/reading", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            cards,
            locale,
          }),
          signal: controller.signal,
        })

        // Clear timeout on response
        clearTimeout(timeoutId)

        const data = await response.json()

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Failed to generate reading")
        }

        // Show skeleton phase
        setPhase("skeleton")
        
        // Wait for skeleton delay before showing content
        await new Promise(resolve => setTimeout(resolve, skeletonDelay))

        // Set the reading and complete
        setReading(data.reading)
        setPhase("complete")
        onSuccess?.(data.reading)
      } catch (err) {
        // Clear timeout on error
        clearTimeout(timeoutId)

        // Handle AbortError
        if (err instanceof Error && err.name === "AbortError") {
          // If timed out, show error to user
          if (timedOut) {
            const timeoutMessage = locale === "zh" 
              ? "请求超时，请重试。" 
              : locale === "ro" 
                ? "Cererea a expirat. Vă rugăm să încercați din nou." 
                : "Request timed out. Please try again."
            console.error("[useReading] Request timed out after 45s")
            setError(timeoutMessage)
            setPhase("error")
            onError?.(timeoutMessage)
          }
          // If manually cancelled (not timeout), just return silently
          return
        }

        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred"
        console.error("[useReading] API Error:", { question, cards, locale, error: errorMessage })
        setError(errorMessage)
        setPhase("error")
        onError?.(errorMessage)
      }
    },
    [skeletonDelay, onSuccess, onError]
  )

  const reset = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    setReading(null)
    setPhase("idle")
    setError(null)
  }, [])

  return {
    reading,
    phase,
    error,
    generateReading,
    reset,
  }
}
