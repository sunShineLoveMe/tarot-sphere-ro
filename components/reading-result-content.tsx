"use client"
import { useState, useMemo, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, RefreshCw } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

import { LanguageSwitcher } from "@/components/language-switcher"
import { MagicBackground } from "@/components/magic-background"
import { majorArcana } from "@/lib/tarot/cards"
import { ShareButtons } from "@/components/share-buttons"
import { LogoIcon } from "@/components/logo-icon"
import { TarotSpread } from "@/components/tarot-spread"
import { TarotCardModal } from "@/components/tarot-card-modal"
import { AIReading } from "@/components/ai-reading"
import { ReadingSkeleton } from "@/components/reading-skeleton"
import { LoadingAnimation } from "@/components/loading-animation"
import { useReading } from "@/hooks/use-reading"
import { useDailyLimit } from "@/hooks/use-daily-limit"
import LimitModal from "@/components/limit-modal"
import type { DrawnCard } from "@/lib/tarot/utils"
import type { Locale, CardInput } from "@/lib/gemini/types"
import Link from "next/link"

function ReadingResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t, locale } = useI18n()

  const shareCardRef = useRef<HTMLDivElement>(null)

  const [selectedCard, setSelectedCard] = useState<DrawnCard | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasTriggeredAI, setHasTriggeredAI] = useState(false)
  const [showLimitModal, setShowLimitModal] = useState(false)
  const [limitModalType, setLimitModalType] = useState<"daily-limit" | "share-page" | "error">("daily-limit")
  const [limitChecked, setLimitChecked] = useState(false) // Track if limit check is complete

  // Daily limit hook
  const { canDraw, increaseDrawCount, isSharePage, isLoading: isLimitLoading } = useDailyLimit()

  // AI Reading hook with skeleton delay
  const { reading, phase, error, generateReading, reset } = useReading({
    skeletonDelay: 500, // 0.5s skeleton display
  })

  // Parse cards from URL
  const cards = useMemo(() => {
    try {
      const cardsParam = searchParams.get("cards")
      if (cardsParam) {
        const parsed = JSON.parse(cardsParam) as {
          index: number
          reversed: boolean
          position: "past" | "present" | "future"
        }[]
        return parsed.map((item) => ({
          card: majorArcana.find((c) => c.id === item.index) || majorArcana[0],
          reversed: item.reversed,
          position: item.position,
        }))
      }
    } catch {
      // Fallback for parse errors
    }
    // Default fallback
    return [
      { card: majorArcana[6], reversed: false, position: "past" as const },
      { card: majorArcana[10], reversed: false, position: "present" as const },
      { card: majorArcana[21], reversed: false, position: "future" as const },
    ]
  }, [searchParams])

  const drawnCards: DrawnCard[] = useMemo(() => {
    return cards.map((cardData) => ({
      position: cardData.position,
      card: cardData.card,
      reversed: cardData.reversed,
    }))
  }, [cards])

  const question = searchParams.get("question") || ""

  // Get card name in current locale
  const getCardName = (card: (typeof majorArcana)[0]) => {
    return card.name[locale as keyof typeof card.name] || card.name.en
  }

  console.log("[v0] ReadingResultContent render:", {
    isLimitLoading,
    limitChecked,
    hasTriggeredAI,
    phase,
    isSharePage,
    canDraw,
    cardsLength: cards.length,
    questionExists: !!question,
  })

  // Use ref to track if AI has been triggered (avoids re-render clearing timer)
  const hasTriggeredAIRef = useRef(false)

  // CRITICAL: Check daily limit and trigger AI reading
  useEffect(() => {
    console.log("[v0] Limit check effect running:", {
      isLimitLoading,
      limitChecked,
      hasTriggeredAI,
      isSharePage,
      canDraw,
    })

    // Wait for daily limit hook to fully initialize
    if (isLimitLoading) {
      console.log("[v0] Still loading limit data...")
      return
    }

    // Only run trigger logic once (use ref to avoid race condition)
    if (hasTriggeredAIRef.current) {
      console.log("[v0] AI already triggered via ref, skipping...")
      return
    }

    // Check if this is a share page - show modal immediately
    if (isSharePage) {
      console.log("[v0] This is a share page, showing modal")
      hasTriggeredAIRef.current = true
      setHasTriggeredAI(true)
      setLimitChecked(true)  // Must set this so isInitializing becomes false
      setLimitModalType("share-page")
      setShowLimitModal(true)
      return
    }

    // Check daily limit - if exceeded, show modal immediately
    if (!canDraw) {
      console.log("[v0] Daily limit exceeded, showing modal")
      hasTriggeredAIRef.current = true
      setHasTriggeredAI(true)
      setLimitChecked(true)  // Must set this so isInitializing becomes false
      setLimitModalType("daily-limit")
      setShowLimitModal(true)
      return
    }

    // User is allowed to proceed - trigger AI reading IMMEDIATELY
    if (question && cards.length === 3) {
      console.log("[v0] User can proceed, triggering AI reading NOW")
      
      // Mark as triggered via ref FIRST (prevents race condition)
      hasTriggeredAIRef.current = true
      setHasTriggeredAI(true)
      setLimitChecked(true)
      
      // Increase draw count before API call
      increaseDrawCount()

      // Build card inputs with names
      const cardInputs: CardInput[] = cards.map((c) => ({
        position: c.position === "past" ? "Past" : c.position === "present" ? "Present" : "Future",
        name: getCardName(c.card),
        reversed: c.reversed,
      }))

      console.log("[v0] Calling generateReading with:", {
        question,
        cards: cardInputs,
        locale,
      })

      // Call immediately - no setTimeout needed
      generateReading(question, cardInputs, locale as Locale)
    } else {
      console.log("[v0] Conditions not met for AI reading:", {
        hasTriggeredAI,
        question,
        cardsLength: cards.length,
      })
    }
  }, [
    isLimitLoading,
    hasTriggeredAI,
    question,
    cards,
    locale,
    generateReading,
    canDraw,
    isSharePage,
    increaseDrawCount,
  ])

  const handleCardClick = useCallback((card: DrawnCard) => {
    setSelectedCard(card)
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedCard(null)
  }, [])

  // Check if reading is ready to show share buttons
  const showShareButtons = phase === "complete" && reading

  // Show nothing while limit is being checked (prevents flash of "Preparing...")
  const isInitializing = isLimitLoading || !limitChecked

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MagicBackground />

      <div className="relative z-10 min-h-screen px-4 py-6 md:px-8 md:py-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <motion.button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(115, 242, 255, 0.1)",
              border: "1px solid rgba(115, 242, 255, 0.3)",
              color: "#73F2FF",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </motion.button>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </header>

        {/* Title */}
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/" className="inline-block mb-4">
            <LogoIcon size={56} className="logo-neon mx-auto" />
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold italic mb-2"
            style={{
              background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Love Tarot
          </h1>
          <p className="text-xs text-[#73F2FF]/50 mb-1" style={{ textShadow: "0 0 8px rgba(115,242,255,0.2)" }}>
            {locale === "zh"
              ? "🔮 受古老塔罗智慧引导"
              : locale === "ro"
                ? "🔮 Călăuzit de înțelepciunea veche a tarotului"
                : "🔮 Guided by Ancient Tarot Wisdom"}
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#73F2FF]/60">{t.readingResult.pageTitle}</p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto" ref={shareCardRef}>
          {/* Question Display */}
          {question && (
            <motion.div
              className="mb-8 p-4 rounded-xl text-center"
              style={{
                background: "rgba(255, 79, 216, 0.1)",
                border: "1px solid rgba(255, 79, 216, 0.2)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xs text-[#FF4FD8] uppercase tracking-wider mb-1">{t.readingResult.yourQuestion}</p>
              <p className="text-white/90 italic">"{question}"</p>
            </motion.div>
          )}

          {/* Tarot Cards Spread */}
          <div className="mb-10">
            <TarotSpread cards={drawnCards} onCardClick={handleCardClick} size="md" />
          </div>

          {/* AI Reading Section */}
          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {/* Loading State */}
              {phase === "loading" && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <LoadingAnimation locale={locale as "en" | "zh" | "ro"} />
                </motion.div>
              )}

              {/* Skeleton State */}
              {phase === "skeleton" && (
                <motion.div
                  key="skeleton"
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(15, 10, 32, 0.9)",
                    border: "1px solid rgba(115, 242, 255, 0.3)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ReadingSkeleton locale={locale as "en" | "zh" | "ro"} />
                </motion.div>
              )}

              {/* Complete State - AI Reading */}
              {phase === "complete" && reading && (
                <motion.div
                  key="complete"
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(15, 10, 32, 0.9)",
                    border: "1px solid rgba(115, 242, 255, 0.3)",
                    boxShadow: "0 0 40px rgba(115, 242, 255, 0.15)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AIReading reading={reading} locale={locale as "en" | "zh" | "ro"} />
                </motion.div>
              )}

              {/* Error State */}
              {phase === "error" && (
                <motion.div
                  key="error"
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "rgba(255, 79, 216, 0.1)",
                    border: "1px solid rgba(255, 79, 216, 0.3)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-red-400 mb-4">{error}</p>
                  <motion.button
                    onClick={() => {
                      setHasTriggeredAI(false)
                    }}
                    className="px-6 py-2 rounded-full text-white"
                    style={{
                      background: "linear-gradient(135deg, #FF4FD8, #A855F7)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {locale === "zh" ? "重试" : locale === "ro" ? "Încearcă din nou" : "Try Again"}
                  </motion.button>
                </motion.div>
              )}

              {/* Idle State - Only show when limit is checked AND user can proceed */}
              {phase === "idle" && !hasTriggeredAI && limitChecked && !showLimitModal && canDraw && !isSharePage && (
                <motion.div
                  key="idle"
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "rgba(115, 242, 255, 0.05)",
                    border: "1px solid rgba(115, 242, 255, 0.2)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-[#73F2FF]/60">
                    {locale === "zh" ? "准备中..." : locale === "ro" ? "Se pregătește..." : "Preparing..."}
                  </p>
                </motion.div>
              )}

              {/* Initializing State - Show only while checking limit */}
              {isInitializing && (
                <motion.div
                  key="initializing"
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "rgba(115, 242, 255, 0.05)",
                    border: "1px solid rgba(115, 242, 255, 0.2)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#73F2FF]/60 animate-pulse" />
                    <div
                      className="w-2 h-2 rounded-full bg-[#73F2FF]/60 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-[#73F2FF]/60 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>

        {/* Share Buttons & New Reading */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {showShareButtons && (
              <>
                <ShareButtons
                  cards={cards}
                  question={question}
                  overallEnergy={reading.overallEnergy}
                  shareCardRef={shareCardRef}
                />

                {/* Hide New Reading button on share page */}
                {!isSharePage && (
                  <motion.div
                    className="text-center mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <motion.button
                      onClick={() => router.push("/")}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white"
                      style={{
                        background: "linear-gradient(135deg, #FF4FD8, #A855F7)",
                        boxShadow: "0 0 30px rgba(255, 79, 216, 0.4)",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <RefreshCw className="w-4 h-4" />
                      {locale === "zh" ? "开始新解读" : locale === "ro" ? "Citire Nouă" : "New Reading"}
                    </motion.button>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      <TarotCardModal drawnCard={selectedCard} isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Limit Modal */}
      <LimitModal isOpen={showLimitModal} onClose={() => setShowLimitModal(false)} type={limitModalType} />
    </div>
  )
}

export { ReadingResultContent }
export default ReadingResultContent
