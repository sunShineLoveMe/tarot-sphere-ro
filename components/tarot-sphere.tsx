"use client"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { getCardByIndex, isReversed, getCardReading, type TarotCard } from "@/lib/tarot/cards"
import MagicBackground from "./magic-background"
import MagicCircle from "./magic-circle"
import CardStack from "./card-stack"
import ShufflePhase from "./shuffle-phase"
import RingFormation from "./ring-formation"
import SelectedCard from "./selected-card"
import ReadingPanel from "./reading-panel"
import StartButton from "./start-button"
import ParticleField from "./particle-field"
import LanguageSwitcher from "./language-switcher"
import { ArrowLeft } from "lucide-react"

export type Phase = "idle" | "shuffling" | "formation" | "selected" | "reading"

interface CardReading {
  card: TarotCard
  reversed: boolean
  name: string
  keywords: string[]
  position: string
  situation: string
  future: string
  advice: string
  quote: string
}

interface TarotSphereProps {
  onBack?: () => void
}

export default function TarotSphere({ onBack }: TarotSphereProps) {
  const { t, locale } = useI18n()
  const [phase, setPhase] = useState<Phase>("idle")
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentReading, setCurrentReading] = useState<CardReading | null>(null)

  const handleStartShuffle = useCallback(() => {
    setPhase("shuffling")
    setTimeout(() => {
      setPhase("formation")
    }, 4000)
  }, [])

  const handleCardSelect = useCallback(
    (index: number) => {
      if (phase !== "formation") return

      const card = getCardByIndex(index)
      const reversed = isReversed()
      const reading = getCardReading(card, reversed, locale)

      setSelectedCardIndex(index)
      setCurrentReading({
        card,
        reversed,
        ...reading,
      })
      setPhase("selected")

      setTimeout(() => {
        setIsFlipped(true)
        setTimeout(() => {
          setPhase("reading")
        }, 1500)
      }, 1500)
    },
    [phase, locale],
  )

  const handleReset = useCallback(() => {
    setPhase("idle")
    setSelectedCardIndex(null)
    setIsFlipped(false)
    setCurrentReading(null)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mystical Background */}
      <MagicBackground />

      {/* Particle Field */}
      <ParticleField intensity={phase === "shuffling" ? 2 : 1} />

      {/* Central Magic Circle */}
      <MagicCircle
        isActive={phase !== "idle"}
        intensity={phase === "shuffling" ? "high" : phase === "reading" ? "elevated" : "normal"}
      />

      {onBack && (
        <motion.button
          onClick={onBack}
          className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(115,242,255,0.15)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "rgba(115,242,255,0.1)",
            border: "1px solid rgba(115,242,255,0.3)",
            color: "#73F2FF",
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{t.nav.home}</span>
        </motion.button>
      )}

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Phase: Idle - Card Stack */}
      <AnimatePresence>
        {phase === "idle" && (
          <>
            <CardStack />
            <StartButton onStart={handleStartShuffle} label={t.tarot.startShuffle} />
          </>
        )}
      </AnimatePresence>

      {/* Phase: Shuffling */}
      <AnimatePresence>{phase === "shuffling" && <ShufflePhase />}</AnimatePresence>

      {/* Phase: Formation */}
      <AnimatePresence>
        {phase === "formation" && <RingFormation onCardSelect={handleCardSelect} selectHint={t.tarot.selectCard} />}
      </AnimatePresence>

      {/* Phase: Selected Card */}
      <AnimatePresence>
        {(phase === "selected" || phase === "reading") && selectedCardIndex !== null && (
          <SelectedCard cardIndex={selectedCardIndex} isFlipped={isFlipped} />
        )}
      </AnimatePresence>

      {/* Phase: Reading Panel */}
      <AnimatePresence>
        {phase === "reading" && currentReading && <ReadingPanel onReset={handleReset} reading={currentReading} />}
      </AnimatePresence>

      {/* Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#FF4FD8] drop-shadow-[0_0_30px_rgba(255,79,216,0.5)]">
          {t.tarot.title}
        </h1>
        <p className="text-sm text-[#73F2FF]/70 mt-2 tracking-widest uppercase">{t.tarot.subtitle}</p>
      </div>
    </div>
  )
}
