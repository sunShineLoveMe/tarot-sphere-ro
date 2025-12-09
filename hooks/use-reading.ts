"use client"

import { useState, useCallback } from "react"
import type { Locale, CardInput, ReadingContent, ReadingResponse } from "@/lib/gemini/types"

interface UseReadingOptions {
  onSuccess?: (reading: ReadingContent) => void
  onError?: (error: string) => void
}

interface UseReadingReturn {
  reading: ReadingContent | null
  isLoading: boolean
  error: string | null
  generateReading: (question: string, cards: CardInput[], locale: Locale) => Promise<void>
  reset: () => void
}

export function useReading(options: UseReadingOptions = {}): UseReadingReturn {
  const [reading, setReading] = useState<ReadingContent | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reset = useCallback(() => {
    setReading(null)
    setError(null)
    setIsLoading(false)
  }, [])

  const generateReading = useCallback(
    async (question: string, cards: CardInput[], locale: Locale) => {
      setIsLoading(true)
      setError(null)
      setReading(null)

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
        })

        const data: ReadingResponse = await response.json()

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Failed to generate reading")
        }

        if (data.reading) {
          setReading(data.reading)
          options.onSuccess?.(data.reading)
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred"
        setError(errorMessage)
        options.onError?.(errorMessage)
      } finally {
        setIsLoading(false)
      }
    },
    [options]
  )

  return {
    reading,
    isLoading,
    error,
    generateReading,
    reset,
  }
}
