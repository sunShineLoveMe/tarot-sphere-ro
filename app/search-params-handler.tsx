"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

interface SearchParamsHandlerProps {
  onTriggerReading: (skipIdle: boolean) => void
}

export default function SearchParamsHandler({ onTriggerReading }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const shouldStartReading = searchParams.get("startReading") === "true"
    if (shouldStartReading) {
      onTriggerReading(true)
      // Clean up the URL without triggering a page reload
      window.history.replaceState({}, "", "/")
    }
  }, [searchParams, onTriggerReading])

  return null
}
