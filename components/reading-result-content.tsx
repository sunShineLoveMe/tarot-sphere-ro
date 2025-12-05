"use client"

import type React from "react"
import { useState, useMemo, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, Sparkles, Heart, Star, Moon, Sun, RefreshCw } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

import { LanguageSwitcher } from "@/components/language-switcher"

import { MagicBackground } from "@/components/magic-background"
import { TypewriterText } from "@/components/typewriter-text"
import { majorArcana, getCardReading } from "@/lib/tarot/cards"
import { ShareButtons } from "@/components/share-buttons"
import { LogoIcon } from "@/components/logo-icon"
import Link from "next/link"

interface CardData {
  card: (typeof majorArcana)[0]
  reversed: boolean
  position: "past" | "present" | "future"
}

interface ReadingData {
  name: string
  keywords: string[]
  situation: string
  future: string
  advice: string
}

function ReadingResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t, locale } = useI18n()

  const shareCardRef = useRef<HTMLDivElement>(null)

  const [typewriterStep, setTypewriterStep] = useState(0)

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
      // Fallback for old URL format or parse errors
    }
    // Default fallback
    return [
      { card: majorArcana[6], reversed: false, position: "past" as const },
      { card: majorArcana[10], reversed: false, position: "present" as const },
      { card: majorArcana[21], reversed: false, position: "future" as const },
    ]
  }, [searchParams])

  const question = searchParams.get("question") || ""

  const cardReadings = useMemo(() => {
    return cards.map((cardData) => ({
      ...cardData,
      reading: getCardReading(cardData.card, cardData.reversed, locale),
    }))
  }, [cards, locale])

  const [vibeIndex] = useState(() => Math.floor(Math.random() * 5))

  const vibes = useMemo(
    () => [
      "A journey of transformation and growth in love is unfolding.",
      "The universe is aligning to bring clarity to your heart.",
      "Deep emotional healing is paving the way for new connections.",
      "Trust the timing of your love story — it's divinely guided.",
      "Your heart is ready to receive the love it deserves.",
    ],
    [],
  )

  const overallVibes = vibes[vibeIndex]

  const handleStep1Complete = useCallback(() => {
    setTypewriterStep((prev) => Math.max(prev, 1))
  }, [])

  const handleStep2Complete = useCallback(() => {
    setTypewriterStep((prev) => Math.max(prev, 2))
  }, [])

  const handleStep3Complete = useCallback(() => {
    setTypewriterStep((prev) => Math.max(prev, 3))
  }, [])

  const handleStep4Complete = useCallback(() => {
    setTypewriterStep((prev) => Math.max(prev, 4))
    // Trigger step 5 after a delay to show share buttons
    setTimeout(() => {
      setTypewriterStep((prev) => Math.max(prev, 5))
    }, 1500)
  }, [])

  const handleStep5Complete = useCallback(() => {
    setTypewriterStep((prev) => Math.max(prev, 5))
  }, [])





  const getCardName = (card: (typeof majorArcana)[0]) => {
    return card.name[locale as keyof typeof card.name] || card.name.en
  }

  const getKeywords = (card: (typeof majorArcana)[0]) => {
    return card.keywords[locale as keyof typeof card.keywords] || card.keywords.en
  }

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
              ? "由 AI 洞察驱动"
              : locale === "ro"
                ? "Ghidare oferită de inteligență artificială"
                : "Powered by AI Guidance"}
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#73F2FF]/60">{t.readingResult.pageTitle}</p>
        </motion.div>

        {/* Main Content - wrap in ref for screenshot */}
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

          {/* Three Cards Display */}
          <motion.div
            className="flex justify-center gap-4 md:gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {cardReadings.map((cardData, index) => (
              <div key={cardData.card.id} className="text-center">
                <p className="text-xs uppercase tracking-wider text-[#73F2FF] mb-2">
                  {cardData.position === "past"
                    ? t.threeCardSpread.positions.past
                    : cardData.position === "present"
                      ? t.threeCardSpread.positions.present
                      : t.threeCardSpread.positions.future}
                </p>
                <motion.div
                  className="w-20 h-32 md:w-28 md:h-44 rounded-lg overflow-hidden relative"
                  style={{
                    background: "linear-gradient(145deg, #1a0a2e, #2d1b4e)",
                    border: "2px solid",
                    borderImage: "linear-gradient(135deg, #FF4FD8, #73F2FF) 1",
                    boxShadow: "0 0 20px rgba(255, 79, 216, 0.3)",
                    transform: cardData.reversed ? "rotate(180deg)" : "none",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl">{index === 0 ? "🌙" : index === 1 ? "☀️" : "⭐"}</span>
                  </div>
                </motion.div>
                <p className="text-sm font-medium text-white mt-2">{getCardName(cardData.card)}</p>
                <p className="text-xs text-white/50">
                  {cardData.reversed
                    ? `(${locale === "zh" ? "逆位" : locale === "ro" ? "Inversat" : "Reversed"})`
                    : `(${locale === "zh" ? "正位" : locale === "ro" ? "Drept" : "Upright"})`}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Overall Energy */}
          <motion.section
            className="mb-8 p-6 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(255, 79, 216, 0.1), rgba(115, 242, 255, 0.1))",
              border: "1px solid rgba(115, 242, 255, 0.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xs uppercase tracking-wider text-[#73F2FF] mb-3">{t.readingResult.overallEnergy}</p>
            <TypewriterText
              text={overallVibes}
              speed={30}
              className="text-lg md:text-xl text-white/90 italic"
              onComplete={handleStep1Complete}
            />

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {cardReadings.slice(0, 3).map((cardData) =>
                getKeywords(cardData.card)
                  .slice(0, 2)
                  .map((keyword, i) => (
                    <span
                      key={`${cardData.card.id}-${i}`}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(115, 242, 255, 0.15)",
                        border: "1px solid rgba(115, 242, 255, 0.3)",
                        color: "#73F2FF",
                      }}
                    >
                      {keyword}
                    </span>
                  )),
              )}
            </div>
          </motion.section>

          {/* Insight Modules */}
          <AnimatePresence>
            {typewriterStep >= 1 && (
              <InsightModule
                position="past"
                icon={<Moon className="w-5 h-5" />}
                title={t.readingResult.pastInsight.title}
                reading={cardReadings[0].reading}
                cardName={getCardName(cardReadings[0].card)}
                reversed={cardReadings[0].reversed}
                onComplete={handleStep2Complete}
                locale={locale}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {typewriterStep >= 2 && (
              <InsightModule
                position="present"
                icon={<Sun className="w-5 h-5" />}
                title={t.readingResult.presentInsight.title}
                reading={cardReadings[1].reading}
                cardName={getCardName(cardReadings[1].card)}
                reversed={cardReadings[1].reversed}
                onComplete={handleStep3Complete}
                locale={locale}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {typewriterStep >= 3 && (
              <InsightModule
                position="future"
                icon={<Star className="w-5 h-5" />}
                title={t.readingResult.futureInsight.title}
                reading={cardReadings[2].reading}
                cardName={getCardName(cardReadings[2].card)}
                reversed={cardReadings[2].reversed}
                onComplete={handleStep4Complete}
                locale={locale}
              />
            )}
          </AnimatePresence>

          {/* Actionable Advice */}
          <AnimatePresence>
            {typewriterStep >= 4 && (
              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-sm font-semibold text-[#FF4FD8] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {t.readingResult.actionableAdvice.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <AdviceItem
                    title={t.readingResult.actionableAdvice.today}
                    text="Take a moment today to express gratitude for the love in your life."
                    color="#73F2FF"
                  />
                  <AdviceItem
                    title={t.readingResult.actionableAdvice.longTerm}
                    text="Focus on building trust through consistent, honest communication."
                    color="#FF4FD8"
                  />
                  <AdviceItem
                    title={t.readingResult.actionableAdvice.healing}
                    text="Practice self-compassion and release any past hurts that no longer serve you."
                    color="#A855F7"
                  />
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Affirmation */}
          <AnimatePresence>
            {typewriterStep >= 5 && (
              <motion.section
                className="mb-8 p-6 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(255, 79, 216, 0.15))",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Sparkles className="w-6 h-6 text-[#A855F7] mx-auto mb-3" />
                <p className="text-xs uppercase tracking-wider text-[#A855F7] mb-2">
                  {t.readingResult.affirmation.title}
                </p>
                <p className="text-lg md:text-xl text-white italic">"{t.readingResult.affirmation.message}"</p>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Share Buttons */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {typewriterStep >= 5 && (
              <ShareButtons
                cards={cards}
                question={question}
                overallEnergy={overallVibes}
                shareCardRef={shareCardRef}
              />
            )}
          </AnimatePresence>

          {/* New Reading Button */}
          <AnimatePresence>
            {typewriterStep >= 5 && (
              <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function InsightModule({
  position,
  icon,
  title,
  reading,
  cardName,
  reversed,
  onComplete,
  locale,
}: {
  position: "past" | "present" | "future"
  icon: React.ReactNode
  title: string
  reading: ReadingData
  cardName: string
  reversed: boolean
  onComplete: () => void
  locale: string
}) {
  const deepDiveText = `${reading.future} ${reading.advice}`

  return (
    <motion.div
      className="rounded-2xl overflow-hidden mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3" style={{ color: "#73F2FF" }}>
          {icon}
          <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider block mb-1">
              {locale === "zh" ? "过去洞察" : locale === "ro" ? "Insightul din trecut" : "Past Insight"}
            </span>
            <p className="text-foreground/80 text-sm leading-relaxed">
              <TypewriterText text={reading.situation} speed={20} delay={200} />
            </p>
          </div>

          <div>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider block mb-1">
              {locale === "zh" ? "深入洞察" : locale === "ro" ? "Explorarea în profunzime" : "Deep Dive"}
            </span>
            <p className="text-foreground/70 text-sm leading-relaxed">
              <TypewriterText text={deepDiveText} speed={15} delay={800} onComplete={onComplete} />
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {reading.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-2 py-0.5 rounded-full text-[10px]"
                style={{
                  background: "#73F2FF15",
                  color: "#73F2FF",
                  border: "1px solid #73F2FF25",
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function AdviceItem({
  title,
  text,
  color,
}: {
  title: string
  text: string
  color: string
}) {
  return (
    <motion.div
      className="p-4 rounded-lg"
      style={{
        background: "rgba(15, 10, 32, 0.95)",
        border: `1px solid ${color}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color }}>
        {title}
      </h4>
      <p className="text-white/90 text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
}

export { ReadingResultContent }
export default ReadingResultContent
