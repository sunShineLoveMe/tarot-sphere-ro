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
      console.log("[v0] generateReading called with:", { question, cards, locale })

      // Cancel any previous request
      if (abortControllerRef.current) {
        console.log("[v0] Aborting previous request")
        abortControllerRef.current.abort()
      }

      // Reset state
      setError(null)
      setReading(null)
      setPhase("loading")
      console.log("[v0] Phase set to 'loading'")

      const controller = new AbortController()
      abortControllerRef.current = controller

      // Flag to track if abort was caused by our timeout (not manual cancellation)
      let timedOut = false

      const TIMEOUT_MS = 30000
      console.log("[v0] Setting 30s timeout for API call")
      const timeoutId = setTimeout(() => {
        console.error("[v0] Request timed out after 30s")
        timedOut = true // Mark as timed out BEFORE aborting
        controller.abort()
      }, TIMEOUT_MS)

      try {
        console.log("[v0] Sending POST request to /api/reading...")
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
        console.log("[v0] Received response:", { status: response.status, ok: response.ok })

        const data = await response.json()
        console.log("[v0] Response data:", { success: data.success, hasReading: !!data.reading, error: data.error })

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Failed to generate reading")
        }

        // Show skeleton phase
        console.log("[v0] Phase set to 'skeleton'")
        setPhase("skeleton")

        // Wait for skeleton delay before showing content
        console.log("[v0] Waiting for skeleton delay:", skeletonDelay, "ms")
        await new Promise((resolve) => setTimeout(resolve, skeletonDelay))

        // Set the reading and complete
        console.log("[v0] Phase set to 'complete', showing reading")
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
            const timeoutMessage =
              locale === "zh"
                ? "请求超时，请重试。"
                : locale === "ro"
                  ? "Cererea a expirat. Vă rugăm să încercați din nou."
                  : "Request timed out. Please try again."
            console.error("[v0] Request timed out, showing error to user")
            setError(timeoutMessage)
            setPhase("error")
            onError?.(timeoutMessage)
          } else {
            console.log("[v0] Request manually cancelled")
          }
          // If manually cancelled (not timeout), just return silently
          return
        }

        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred"
        console.error("[v0] API Error:", {
          question,
          cards,
          locale,
          error: errorMessage,
          stack: err instanceof Error ? err.stack : undefined,
        })
        setError(errorMessage)
        setPhase("error")
        onError?.(errorMessage)
      }
    },
    [skeletonDelay, onSuccess, onError],
  )

  const reset = useCallback(() => {
    if (abortControllerRef.current) {
      console.log("[v0] Aborting current request in reset")
      abortControllerRef.current.abort()
    }
    setReading(null)
    setPhase("idle")
    setError(null)
    console.log("[v0] State reset to idle")
  }, [])

  return {
    reading,
    phase,
    error,
    generateReading,
    reset,
  }
}
