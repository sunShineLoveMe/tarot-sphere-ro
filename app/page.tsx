"use client"

import { useState } from "react"
import { I18nProvider } from "@/lib/i18n/context"
import { SoundManagerProvider } from "@/lib/sound/sound-manager"
import LandingPage from "@/components/landing-page"
import TarotSphere from "@/components/tarot-sphere"

export default function Home() {
  const [showReading, setShowReading] = useState(false)

  // Force fresh render
  return (
    <SoundManagerProvider>
      <I18nProvider>
        <main className="min-h-screen overflow-hidden relative bg-background">
          {!showReading ? (
            <LandingPage onStartReading={() => setShowReading(true)} />
          ) : (
            <TarotSphere onBack={() => setShowReading(false)} />
          )}
        </main>
      </I18nProvider>
    </SoundManagerProvider>
  )
}
