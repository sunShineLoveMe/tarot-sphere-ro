"use client"

import type React from "react"

import { useEffect, useState, useMemo, useRef, useCallback, memo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Heart, Sparkles, Download, Share2, Instagram, Star, Lightbulb, Shield, Flower2 } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { useSound } from "@/lib/sound/sound-manager"
import { getCardByIndex, getCardReading, type TarotCard } from "@/lib/tarot/cards"
import MagicBackground from "./magic-background"
import ParticleField from "./particle-field"
import LanguageSwitcher from "./language-switcher"
import SoundToggle from "./sound-toggle"
import TypewriterText from "./typewriter-text"
import MysticalLoading from "./mystical-loading"

interface CardData {
  card: TarotCard
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

export default function ReadingResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t, locale } = useI18n()
  const { playSound } = useSound()

  const playSoundRef = useRef(playSound)
  playSoundRef.current = playSound

  const [isLoading, setIsLoading] = useState(true)
  const [typewriterStep, setTypewriterStep] = useState(0)
  const [cards, setCards] = useState<CardData[]>([])
  const [userQuestion, setUserQuestion] = useState("")

  const [vibeIndex] = useState(() => Math.floor(Math.random() * 3))

  // Parse URL params to get card data
  useEffect(() => {
    const cardsParam = searchParams.get("cards")
    const questionParam = searchParams.get("question")

    if (cardsParam) {
      try {
        const parsedCards = JSON.parse(decodeURIComponent(cardsParam))
        const cardDataArray: CardData[] = parsedCards.map(
          (c: { index: number; reversed: boolean; position: string }) => ({
            card: getCardByIndex(c.index)!,
            reversed: c.reversed,
            position: c.position as "past" | "present" | "future",
          }),
        )
        setCards(cardDataArray)
      } catch (e) {
        console.error("Failed to parse cards:", e)
      }
    }

    if (questionParam) {
      setUserQuestion(decodeURIComponent(questionParam))
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      playSoundRef.current("reveal")
    }, 2000)

    return () => clearTimeout(timer)
  }, [searchParams])

  const cardReadings = useMemo(() => {
    const readings: Record<string, ReadingData> = {}
    cards.forEach((cardData) => {
      const reading = getCardReading(cardData.card, cardData.reversed, locale)
      readings[cardData.position] = reading
    })
    return readings
  }, [cards, locale])

  const positionLabels = useMemo(
    () => ({
      past: t.threeCardSpread.positions.past,
      present: t.threeCardSpread.positions.present,
      future: t.threeCardSpread.positions.future,
    }),
    [t.threeCardSpread.positions],
  )

  const overallVibes = useMemo(() => {
    const vibes = {
      en: [
        "A journey of transformation and growth in love is unfolding...",
        "The cards reveal a profound shift in your romantic energy...",
        "Love's mysterious dance is guiding you toward clarity...",
      ],
      ro: [
        "O călătorie de transformare și creștere în dragoste se desfășoară...",
        "Cărțile relevă o schimbare profundă în energia ta romantică...",
        "Dansul misterios al dragostei te ghidează spre claritate...",
      ],
      zh: [
        "一段关于爱的转变与成长之旅正在展开...",
        "塔罗牌揭示了你浪漫能量的深刻转变...",
        "爱的神秘舞步正引导你走向清晰...",
      ],
    }
    return vibes[locale][vibeIndex]
  }, [locale, vibeIndex])

  const allKeywords = useMemo(() => {
    return Object.values(cardReadings)
      .flatMap((reading) => reading.keywords.slice(0, 2))
      .slice(0, 5)
  }, [cardReadings])

  const affirmations = useMemo(
    () => ({
      en: "You are worthy of deep and lasting love.",
      ro: "Meriți o dragoste profundă și durabilă.",
      zh: "你值得拥有深厚而持久的爱。",
    }),
    [],
  )

  const adviceContent = useMemo(
    () => ({
      today: {
        en: "Take a moment today to express gratitude for the love in your life, whether romantic, familial, or self-love.",
        ro: "Ia-ți un moment astăzi să exprimi recunoștință pentru dragostea din viața ta.",
        zh: "今天花一点时间，对生命中的爱表达感激。",
      },
      longTerm: {
        en: "Focus on building trust through consistent actions rather than grand gestures. True love grows in the small moments.",
        ro: "Concentrează-te pe construirea încrederii prin acțiuni constante. Adevărata dragoste crește în momentele mici.",
        zh: "专注于通过持续的行动建立信任。真正的爱在小时刻中成长。",
      },
      healing: {
        en: "Practice self-compassion. Your heart has wisdom—listen to it without judgment.",
        ro: "Practică auto-compasiunea. Inima ta are înțelepciune—ascult-o fără judecată.",
        zh: "练习自我慈悲。你的心有智慧——不带评判地倾听它。",
      },
    }),
    [],
  )

  const handleStep1Complete = useCallback(() => setTypewriterStep((prev) => Math.max(prev, 1)), [])
  const handleStep2Complete = useCallback(() => setTypewriterStep((prev) => Math.max(prev, 2)), [])
  const handleStep3Complete = useCallback(() => setTypewriterStep((prev) => Math.max(prev, 3)), [])
  const handleStep4Complete = useCallback(() => setTypewriterStep((prev) => Math.max(prev, 4)), [])
  const handleStep5Complete = useCallback(() => setTypewriterStep((prev) => Math.max(prev, 5)), [])

  if (isLoading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#0a0612]">
        <MagicBackground />
        <ParticleField intensity={1} />
        <MysticalLoading isVisible={true} />
      </div>
    )
  }

  if (cards.length === 0) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#0a0612] flex items-center justify-center">
        <MagicBackground />
        <div className="text-center z-10">
          <p className="text-[#73F2FF]/70 mb-4">No reading data found</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-full text-[#FF4FD8] border border-[#FF4FD8]/30 bg-[#FF4FD8]/10"
          >
            {t.nav.home}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0612]">
      <MagicBackground />
      <ParticleField intensity={1} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between bg-transparent">
        <motion.button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
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

        <motion.h1
          className="absolute left-1/2 -translate-x-1/2 text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.readingResult.pageTitle}
        </motion.h1>

        <div className="flex items-center gap-2">
          <SoundToggle />
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20 pb-12 px-4 max-w-4xl mx-auto">
        {/* Section 2: User Question */}
        {userQuestion && (
          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="p-4 rounded-2xl"
              style={{
                background: "rgba(255,79,216,0.08)",
                border: "1px solid rgba(255,79,216,0.25)",
                boxShadow: "0 0 30px rgba(255,79,216,0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-[#FF4FD8]" />
                <span className="text-xs text-[#FF4FD8]/70 uppercase tracking-wider">
                  {t.readingResult.yourQuestion}
                </span>
              </div>
              <p className="text-foreground/90 text-base sm:text-lg">{userQuestion}</p>
            </div>
          </motion.section>
        )}

        {/* Section 3: Three Cards Display */}
        <motion.section className="mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {["past", "present", "future"].map((position, index) => {
              const cardData = cards.find((c) => c.position === position)
              if (!cardData) return null
              const reading = cardReadings[position]
              if (!reading) return null

              return (
                <motion.div
                  key={position}
                  className="text-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                >
                  {/* Card Visual */}
                  <div
                    className="relative mx-auto mb-3 rounded-xl overflow-hidden aspect-[3/5]"
                    style={{
                      width: "100%",
                      maxWidth: "140px",
                      background: `linear-gradient(135deg, 
                        ${position === "past" ? "rgba(255,79,216,0.3)" : position === "present" ? "rgba(115,242,255,0.3)" : "rgba(168,85,247,0.3)"} 0%, 
                        rgba(15,10,32,0.9) 100%)`,
                      border: `2px solid ${position === "past" ? "rgba(255,79,216,0.5)" : position === "present" ? "rgba(115,242,255,0.5)" : "rgba(168,85,247,0.5)"}`,
                      boxShadow: `0 0 30px ${position === "past" ? "rgba(255,79,216,0.3)" : position === "present" ? "rgba(115,242,255,0.3)" : "rgba(168,85,247,0.3)"}`,
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white/60 mb-2" />
                      <span className="text-[10px] sm:text-xs text-white/80 font-medium text-center leading-tight">
                        {reading.name}
                      </span>
                    </div>
                    {cardData.reversed && (
                      <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded text-[8px] bg-red-500/20 text-red-300 border border-red-500/30">
                        ↻
                      </div>
                    )}
                  </div>

                  {/* Position Label */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-2"
                    style={{
                      background:
                        position === "past"
                          ? "rgba(255,79,216,0.15)"
                          : position === "present"
                            ? "rgba(115,242,255,0.15)"
                            : "rgba(168,85,247,0.15)",
                      color: position === "past" ? "#FF4FD8" : position === "present" ? "#73F2FF" : "#A855F7",
                      border: `1px solid ${position === "past" ? "rgba(255,79,216,0.3)" : position === "present" ? "rgba(115,242,255,0.3)" : "rgba(168,85,247,0.3)"}`,
                    }}
                  >
                    {positionLabels[position as "past" | "present" | "future"]}
                  </span>

                  {/* Card Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-1">
                    {reading.name}
                  </h3>

                  {/* Upright/Reversed */}
                  <span className="text-[10px] sm:text-xs text-[#73F2FF]/60">
                    ({cardData.reversed ? t.tarot.reversed : t.tarot.upright})
                  </span>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1 justify-center mt-2">
                    {reading.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] text-[#73F2FF]"
                        style={{
                          background: "rgba(115,242,255,0.1)",
                          border: "1px solid rgba(115,242,255,0.2)",
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Section 4: Overall Energy */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div
            className="p-5 sm:p-6 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(115,242,255,0.08) 0%, rgba(255,79,216,0.08) 100%)",
              border: "1px solid rgba(115,242,255,0.2)",
              boxShadow: "0 0 40px rgba(115,242,255,0.1), 0 0 60px rgba(255,79,216,0.05)",
            }}
          >
            <span className="text-xs text-[#73F2FF]/70 uppercase tracking-wider block mb-3">
              {t.readingResult.overallEnergy}
            </span>
            <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#FF4FD8] font-medium leading-relaxed">
              <TypewriterText text={overallVibes} speed={40} delay={500} onComplete={handleStep1Complete} />
            </p>

            {typewriterStep >= 1 && (
              <motion.div
                className="flex flex-wrap gap-2 justify-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {allKeywords.map((keyword, i) => (
                  <motion.span
                    key={keyword}
                    className="px-3 py-1.5 rounded-full text-xs text-[#73F2FF] font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background: "rgba(115,242,255,0.12)",
                      border: "1px solid rgba(115,242,255,0.25)",
                    }}
                  >
                    {keyword}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Section 5: Insight Modules */}
        <AnimatePresence>
          {typewriterStep >= 1 && (
            <motion.section
              className="space-y-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Module A: Past Insight */}
              {cardReadings.past && (
                <MemoizedInsightModule
                  title={t.readingResult.pastInsight.title}
                  icon={<Star className="w-5 h-5" />}
                  color="#FF4FD8"
                  reading={cardReadings.past}
                  onComplete={handleStep2Complete}
                  isVisible={typewriterStep >= 1}
                  summaryLabel={t.readingResult.pastInsight.summary}
                  deepDiveLabel={t.readingResult.pastInsight.deepDive}
                />
              )}

              {/* Module B: Present Insight */}
              {cardReadings.present && typewriterStep >= 2 && (
                <MemoizedInsightModule
                  title={t.readingResult.presentInsight.title}
                  icon={<Lightbulb className="w-5 h-5" />}
                  color="#73F2FF"
                  reading={cardReadings.present}
                  onComplete={handleStep3Complete}
                  isVisible={typewriterStep >= 2}
                  summaryLabel={t.readingResult.presentInsight.summary}
                  deepDiveLabel={t.readingResult.pastInsight.deepDive}
                />
              )}

              {/* Module C: Future Insight */}
              {cardReadings.future && typewriterStep >= 3 && (
                <MemoizedInsightModule
                  title={t.readingResult.futureInsight.title}
                  icon={<Shield className="w-5 h-5" />}
                  color="#A855F7"
                  reading={cardReadings.future}
                  onComplete={handleStep4Complete}
                  isVisible={typewriterStep >= 3}
                  summaryLabel={t.readingResult.futureInsight.summary}
                  deepDiveLabel={t.readingResult.futureInsight.opportunities}
                />
              )}
            </motion.section>
          )}
        </AnimatePresence>

        {/* Module D: Actionable Advice */}
        <AnimatePresence>
          {typewriterStep >= 4 && (
            <motion.section className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255,79,216,0.08) 0%, rgba(115,242,255,0.08) 100%)",
                  border: "1px solid rgba(255,79,216,0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Flower2 className="w-5 h-5 text-[#FF4FD8]" />
                  <h3 className="text-sm font-semibold text-[#FF4FD8] uppercase tracking-wider">
                    {t.readingResult.actionableAdvice.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <MemoizedAdviceItem
                    label={t.readingResult.actionableAdvice.today}
                    text={adviceContent.today[locale]}
                    delay={0}
                  />
                  <MemoizedAdviceItem
                    label={t.readingResult.actionableAdvice.longTerm}
                    text={adviceContent.longTerm[locale]}
                    delay={300}
                  />
                  <MemoizedAdviceItem
                    label={t.readingResult.actionableAdvice.healing}
                    text={adviceContent.healing[locale]}
                    delay={600}
                    onComplete={handleStep5Complete}
                  />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Module E: Affirmation */}
        <AnimatePresence>
          {typewriterStep >= 5 && (
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div
                className="p-8 rounded-2xl text-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,79,216,0.12) 0%, rgba(115,242,255,0.12) 50%, rgba(168,85,247,0.12) 100%)",
                  border: "1px solid rgba(255,79,216,0.3)",
                  boxShadow: "0 0 60px rgba(255,79,216,0.15), 0 0 100px rgba(115,242,255,0.1)",
                }}
              >
                {/* Decorative glow */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(255,79,216,0.3), transparent 70%)",
                  }}
                />

                <span className="relative text-xs text-[#73F2FF]/70 uppercase tracking-widest block mb-4">
                  {t.readingResult.affirmation.title}
                </span>

                <motion.p
                  className="relative text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#A855F7] leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  &ldquo;{affirmations[locale]}&rdquo;
                </motion.p>

                <motion.div
                  className="mt-4 flex justify-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-[#FF4FD8]/60" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Section 6: Share Area */}
        <AnimatePresence>
          {typewriterStep >= 5 && (
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="p-5 rounded-2xl text-center"
                style={{
                  background: "rgba(115,242,255,0.05)",
                  border: "1px solid rgba(115,242,255,0.15)",
                }}
              >
                <h3 className="text-sm font-semibold text-[#73F2FF] uppercase tracking-wider mb-4">
                  {t.readingResult.share.title}
                </h3>

                <div className="flex flex-wrap gap-3 justify-center">
                  <ShareButton
                    icon={<Download className="w-4 h-4" />}
                    label={t.readingResult.share.saveReading}
                    color="#73F2FF"
                  />
                  <ShareButton
                    icon={<Share2 className="w-4 h-4" />}
                    label={t.readingResult.share.generateCard}
                    color="#FF4FD8"
                  />
                  <ShareButton
                    icon={<Instagram className="w-4 h-4" />}
                    label={t.readingResult.share.shareToSocial}
                    color="#A855F7"
                  />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* New Reading Button */}
        <AnimatePresence>
          {typewriterStep >= 5 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={() => router.push("/")}
                className="px-8 py-3 rounded-full font-medium tracking-wider text-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,79,216,0.4)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
                  border: "1px solid rgba(255,79,216,0.4)",
                  color: "#FF4FD8",
                }}
              >
                {t.tarot.newReading}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

const MemoizedInsightModule = memo(function InsightModule({
  title,
  icon,
  color,
  reading,
  onComplete,
  isVisible,
  summaryLabel,
  deepDiveLabel,
}: {
  title: string
  icon: React.ReactNode
  color: string
  reading: ReadingData
  onComplete: () => void
  isVisible: boolean
  summaryLabel: string
  deepDiveLabel: string
}) {
  const deepDiveText = useMemo(() => `${reading.future} ${reading.advice}`, [reading.future, reading.advice])

  if (!isVisible) return null

  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: `linear-gradient(135deg, ${color}08 0%, rgba(15,10,32,0.95) 100%)`,
        border: `1px solid ${color}30`,
      }}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3" style={{ color }}>
          {icon}
          <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider block mb-1">{summaryLabel}</span>
            <p className="text-foreground/80 text-sm leading-relaxed">
              <TypewriterText text={reading.situation} speed={20} delay={200} />
            </p>
          </div>

          <div>
            <span className="text-[10px] text-foreground/50 uppercase tracking-wider block mb-1">{deepDiveLabel}</span>
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
                  background: `${color}15`,
                  color: color,
                  border: `1px solid ${color}25`,
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
})

const MemoizedAdviceItem = memo(function AdviceItem({
  label,
  text,
  delay,
  onComplete,
}: {
  label: string
  text: string
  delay: number
  onComplete?: () => void
}) {
  return (
    <div>
      <span className="text-[10px] text-[#73F2FF]/60 uppercase tracking-wider block mb-1">{label}</span>
      <p className="text-foreground/75 text-sm leading-relaxed">
        <TypewriterText text={text} speed={18} delay={delay} onComplete={onComplete} />
      </p>
    </div>
  )
})

// Share Button Component
function ShareButton({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  const { playSound } = useSound()

  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium"
      onClick={() => playSound("click")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: `${color}15`,
        border: `1px solid ${color}30`,
        color: color,
      }}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  )
}
