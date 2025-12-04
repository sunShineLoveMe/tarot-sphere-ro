"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"
import { useI18n } from "@/lib/i18n/context"
import type { TarotCard } from "@/lib/tarot/cards"
import { getCardReading } from "@/lib/tarot/cards"
import TypewriterText from "./typewriter-text"
import { Heart } from "lucide-react"

export interface SelectedCardData {
  card: TarotCard
  reversed: boolean
  cardIndex: number
  position: "past" | "present" | "future"
}

interface ThreeCardReadingPanelProps {
  selectedCards: SelectedCardData[]
  onReset: () => void
  userQuestion?: string
}

export default function ThreeCardReadingPanel({ selectedCards, onReset, userQuestion }: ThreeCardReadingPanelProps) {
  const dims = useResponsiveDimensions()
  const { t, locale } = useI18n()
  const [typewriterStep, setTypewriterStep] = useState(0)

  const positionLabels = {
    past: t.threeCardSpread.positions.past,
    present: t.threeCardSpread.positions.present,
    future: t.threeCardSpread.positions.future,
  }

  const positionOrder: ("past" | "present" | "future")[] = ["past", "present", "future"]

  const bottomOffset = dims.isMobile ? "42%" : dims.isTablet ? "40%" : "38%"

  // Generate summary vibe based on cards
  const summaryVibe =
    locale === "zh"
      ? "一段关于爱的转变与成长之旅正在展开..."
      : locale === "ro"
        ? "O călătorie de transformare și creștere în dragoste se desfășoară..."
        : "A journey of transformation and growth in love is unfolding..."

  // Generate keywords from all cards
  const allKeywords = selectedCards
    .flatMap((c) => {
      const reading = getCardReading(c.card, c.reversed, locale)
      return reading.keywords.slice(0, 2)
    })
    .slice(0, 5)

  return (
    <motion.div
      className="absolute z-35 left-0 right-0"
      style={{
        bottom: bottomOffset,
        top: dims.isMobile ? 80 : 100,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="h-full mx-2 sm:mx-4 md:mx-8 rounded-2xl overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        style={{
          background: "linear-gradient(135deg, rgba(26,10,46,0.92) 0%, rgba(15,10,32,0.95) 100%)",
          border: "1px solid rgba(255,79,216,0.3)",
          boxShadow: `
            0 0 40px rgba(255,79,216,0.15),
            0 0 80px rgba(115,242,255,0.08),
            inset 0 1px 0 rgba(255,255,255,0.1)
          `,
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Decorative top glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #FF4FD8, #73F2FF, #FF4FD8, transparent)",
          }}
        />

        <div
          className="h-full overflow-y-auto"
          style={{
            padding: dims.isMobile ? "12px" : dims.isTablet ? "16px" : "20px",
          }}
        >
          {userQuestion && (
            <motion.div
              className="mb-3 p-2.5 rounded-xl flex items-start gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(255,79,216,0.08)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <Heart className="w-4 h-4 text-[#FF4FD8] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-[10px] text-[#FF4FD8]/70 uppercase tracking-wider">
                  {t.questionInput.contextLabel}
                </span>
                <p className="text-sm text-foreground/80 mt-0.5">{userQuestion}</p>
              </div>
            </motion.div>
          )}

          <motion.div
            className="mb-3 p-2.5 rounded-xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              background: "linear-gradient(135deg, rgba(115,242,255,0.08) 0%, rgba(255,79,216,0.08) 100%)",
              border: "1px solid rgba(115,242,255,0.15)",
            }}
          >
            <span className="text-[10px] text-[#73F2FF]/70 uppercase tracking-wider block mb-1">
              {t.reading.summaryVibe}
            </span>
            <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] font-medium">
              <TypewriterText text={summaryVibe} speed={40} delay={300} onComplete={() => setTypewriterStep(1)} />
            </p>
          </motion.div>

          {typewriterStep >= 1 && (
            <motion.div
              className="flex flex-wrap gap-1.5 justify-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {allKeywords.map((keyword, i) => (
                <motion.span
                  key={keyword}
                  className="px-2 py-1 rounded-full text-[10px] sm:text-xs text-[#73F2FF]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    background: "rgba(115,242,255,0.1)",
                    border: "1px solid rgba(115,242,255,0.2)",
                  }}
                >
                  {keyword}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Three Card Readings with Typewriter */}
          <div className={`grid gap-3 mb-4 ${dims.isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
            {positionOrder.map((position, index) => {
              const cardData = selectedCards.find((c) => c.position === position)
              if (!cardData) return null

              const reading = getCardReading(cardData.card, cardData.reversed, locale)
              const shouldShow = typewriterStep >= index + 1

              return (
                <motion.div
                  key={position}
                  className="rounded-xl p-2.5 sm:p-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: shouldShow ? 0 : 20, opacity: shouldShow ? 1 : 0 }}
                  transition={{ delay: 0.4 + index * 0.3 }}
                  style={{
                    background: "rgba(115,242,255,0.04)",
                    border: "1px solid rgba(115,242,255,0.15)",
                  }}
                >
                  {/* Position Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium tracking-wider uppercase"
                      style={{
                        background: "rgba(255,79,216,0.15)",
                        color: "#FF4FD8",
                      }}
                    >
                      {positionLabels[position]}
                    </span>
                  </div>

                  {/* Card Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-1.5">
                    {reading.name}
                    <span className="ml-2 text-[10px] sm:text-xs font-normal text-[#73F2FF]/60">
                      ({cardData.reversed ? t.tarot.reversed : t.tarot.upright})
                    </span>
                  </h3>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {reading.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] text-[#73F2FF]"
                        style={{
                          background: "rgba(115,242,255,0.08)",
                          border: "1px solid rgba(115,242,255,0.15)",
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <p className="text-foreground/65 text-[11px] sm:text-xs leading-relaxed">
                    {shouldShow && (
                      <TypewriterText
                        text={reading.situation}
                        speed={20}
                        delay={index * 500}
                        onComplete={() => {
                          if (index === positionOrder.length - 1) {
                            setTypewriterStep(4)
                          } else {
                            setTypewriterStep(index + 2)
                          }
                        }}
                      />
                    )}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Divider */}
          <motion.div
            className="w-full h-px my-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: typewriterStep >= 4 ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,79,216,0.4), rgba(115,242,255,0.4), transparent)",
            }}
          />

          {typewriterStep >= 4 && (
            <motion.div
              className="mb-3 p-2.5 sm:p-3 rounded-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                background: "linear-gradient(135deg, rgba(255,79,216,0.08) 0%, rgba(115,242,255,0.08) 100%)",
                border: "1px solid rgba(255,79,216,0.15)",
              }}
            >
              <h3 className="text-[#FF4FD8] text-[10px] sm:text-xs tracking-wider uppercase mb-1.5">
                {t.reading.advice}
              </h3>
              <p className="text-foreground/70 text-[11px] sm:text-xs leading-relaxed">
                <TypewriterText
                  text={t.threeCardSpread.summaryPlaceholder}
                  speed={15}
                  delay={200}
                  onComplete={() => setTypewriterStep(5)}
                />
              </p>
            </motion.div>
          )}

          {/* Reset Button */}
          {typewriterStep >= 5 && (
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={onReset}
                className="px-5 sm:px-6 py-2 rounded-full font-medium tracking-wider text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(135deg, rgba(255,79,216,0.15) 0%, rgba(115,242,255,0.15) 100%)",
                  border: "1px solid rgba(255,79,216,0.3)",
                  color: "#FF4FD8",
                }}
              >
                {t.tarot.newReading}
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
