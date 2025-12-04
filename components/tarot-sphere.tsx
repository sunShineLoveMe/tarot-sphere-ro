"use client"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useI18n } from "@/lib/i18n/context"
import { getCardByIndex, isReversed } from "@/lib/tarot/cards"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"
import { useSound } from "@/lib/sound/sound-manager"
import MagicBackground from "./magic-background"
import MagicCircle from "./magic-circle"
import CardStack from "./card-stack"
import ShufflePhase from "./shuffle-phase"
import RingFormation from "./ring-formation"
import CardSlots, { type SelectedCardData } from "./card-slots"
import StartButton from "./start-button"
import ParticleField from "./particle-field"
import LanguageSwitcher from "./language-switcher"
import SoundToggle from "./sound-toggle"
import QuestionInput from "./question-input"
import MysticalLoading from "./mystical-loading"
import { ArrowLeft } from "lucide-react"

export type Phase = "idle" | "shuffling" | "formation" | "selecting" | "loading" | "reading"

interface TarotSphereProps {
  onBack?: () => void
}

const MAX_CARDS = 3
const POSITION_ORDER: ("past" | "present" | "future")[] = ["past", "present", "future"]

export default function TarotSphere({ onBack }: TarotSphereProps) {
  const { t } = useI18n()
  const router = useRouter()
  const dims = useResponsiveDimensions()
  const { playSound } = useSound()
  const [phase, setPhase] = useState<Phase>("idle")
  const [selectedCards, setSelectedCards] = useState<SelectedCardData[]>([])
  const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([])
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [userQuestion, setUserQuestion] = useState("")

  const handleStartShuffle = useCallback(() => {
    playSound("shuffle")
    setPhase("shuffling")
    setTimeout(() => {
      setPhase("formation")
    }, 4000)
  }, [playSound])

  const handleCardSelect = useCallback(
    (index: number) => {
      if (phase !== "formation" && phase !== "selecting") return
      if (selectedCardIndices.includes(index)) return
      if (selectedCards.length >= MAX_CARDS) return

      playSound("exit")

      const card = getCardByIndex(index)
      if (!card) return
      const reversed = isReversed()
      const position = POSITION_ORDER[selectedCards.length]

      const newCardData: SelectedCardData = {
        card,
        reversed,
        cardIndex: index,
        position,
      }

      const newSelectedCards = [...selectedCards, newCardData]
      const newSelectedIndices = [...selectedCardIndices, index]

      setSelectedCards(newSelectedCards)
      setSelectedCardIndices(newSelectedIndices)
      setPhase("selecting")

      setTimeout(() => {
        playSound("flip")
        setFlippedCards((prev) => new Set([...prev, index]))

        // Check if all 3 cards are selected
        if (newSelectedCards.length >= MAX_CARDS) {
          setTimeout(() => {
            setPhase("loading")
            setTimeout(() => {
              const cardsData = newSelectedCards.map((c) => ({
                index: c.cardIndex,
                reversed: c.reversed,
                position: c.position,
              }))
              const cardsParam = encodeURIComponent(JSON.stringify(cardsData))
              const questionParam = userQuestion ? `&question=${encodeURIComponent(userQuestion)}` : ""
              router.push(`/reading-result?cards=${cardsParam}${questionParam}`)
            }, 2000)
          }, 1200)
        }
      }, 1000)
    },
    [phase, selectedCards, selectedCardIndices, playSound, router, userQuestion],
  )

  const handleReset = useCallback(() => {
    setPhase("idle")
    setSelectedCards([])
    setSelectedCardIndices([])
    setFlippedCards(new Set())
    setUserQuestion("")
  }, [])

  const showRing = phase === "formation" || phase === "selecting"
  const showSlots = phase === "formation" || phase === "selecting"

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mystical Background */}
      <MagicBackground />

      {/* Particle Field */}
      <ParticleField intensity={phase === "shuffling" ? 2 : 1} />

      {/* Central Magic Circle */}
      <MagicCircle isActive={phase !== "idle"} intensity={phase === "shuffling" ? "high" : "normal"} />

      <AnimatePresence>{phase === "loading" && <MysticalLoading isVisible={true} />}</AnimatePresence>

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

      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <SoundToggle />
        <LanguageSwitcher />
      </div>

      {/* Phase: Idle - Card Stack + Question Input */}
      <AnimatePresence>
        {phase === "idle" && (
          <>
            <CardStack />
            <div className="absolute bottom-36 sm:bottom-44 left-0 right-0 z-30">
              <QuestionInput value={userQuestion} onChange={setUserQuestion} />
            </div>
            <StartButton onStart={handleStartShuffle} />
          </>
        )}
      </AnimatePresence>

      {/* Phase: Shuffling */}
      <AnimatePresence>{phase === "shuffling" && <ShufflePhase />}</AnimatePresence>

      {/* Phase: Formation & Selecting - Ring positioned higher on mobile */}
      <AnimatePresence>
        {showRing && (
          <motion.div
            className="absolute inset-0"
            style={{
              paddingBottom: dims.isMobile ? "40%" : dims.isTablet ? "38%" : "35%",
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.8 }}
          >
            <RingFormation
              onCardSelect={handleCardSelect}
              selectedCards={selectedCardIndices}
              maxCards={MAX_CARDS}
              selectPrompt={t.threeCardSpread.selectPrompt}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSlots && <CardSlots selectedCards={selectedCards} flippedCards={flippedCards} />}
      </AnimatePresence>

      {/* Title - positioned higher on mobile */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none"
        style={{
          top: dims.isMobile ? 60 : dims.isTablet ? 32 : 32,
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#FF4FD8] drop-shadow-[0_0_30px_rgba(255,79,216,0.5)]">
          {t.tarot.title}
        </h1>
        <p className="text-xs sm:text-sm text-[#73F2FF]/70 mt-1 tracking-widest uppercase">{t.tarot.subtitle}</p>
      </div>
    </div>
  )
}
