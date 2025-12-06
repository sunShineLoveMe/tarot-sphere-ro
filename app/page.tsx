"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { I18nProvider } from "@/lib/i18n/context"

import LandingPage from "@/components/landing-page"
import TarotSphere from "@/components/tarot-sphere"

export default function Home() {
  const [showReading, setShowReading] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const shouldStartReading = searchParams.get("startReading") === "true"
    if (shouldStartReading) {
      setShowReading(true)
      // Clean up the URL without triggering a page reload
      window.history.replaceState({}, "", "/")
    }
  }, [searchParams])

  return (
    <I18nProvider>
      <main className="min-h-screen overflow-hidden relative bg-background">
        {!showReading ? (
          <LandingPage onStartReading={() => setShowReading(true)} />
        ) : (
          <TarotSphere onBack={() => setShowReading(false)} />
        )}
      </main>
    </I18nProvider>
  )
}
