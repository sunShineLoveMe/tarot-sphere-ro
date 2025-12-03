"use client"

import { useState } from "react"
import { I18nProvider } from "@/lib/i18n/context"
import LandingPage from "@/components/landing-page"
import TarotSphere from "@/components/tarot-sphere"

export default function Home() {
  const [showReading, setShowReading] = useState(false)

  return (
    <I18nProvider>
      <main className="min-h-screen overflow-hidden">
        {!showReading ? (
          <LandingPage onStartReading={() => setShowReading(true)} />
        ) : (
          <TarotSphere onBack={() => setShowReading(false)} />
        )}
      </main>
    </I18nProvider>
  )
}
