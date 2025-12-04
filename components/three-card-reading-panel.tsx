"use client"

import { motion } from "framer-motion"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"
import { useI18n } from "@/lib/i18n/context"
import type { TarotCard } from "@/lib/tarot/cards"
import { getCardReading } from "@/lib/tarot/cards"

export interface SelectedCardData {
  card: TarotCard
  reversed: boolean
  cardIndex: number
  position: "past" | "present" | "future"
}

interface ThreeCardReadingPanelProps {
  selectedCards: SelectedCardData[]
  onReset: () => void
}

export default function ThreeCardReadingPanel({ selectedCards, onReset }: ThreeCardReadingPanelProps) {
  const dims = useResponsiveDimensions()
  const { t, locale } = useI18n()

  const positionLabels = {
    past: t.threeCardSpread.positions.past,
    present: t.threeCardSpread.positions.present,
    future: t.threeCardSpread.positions.future,
  }

  const positionOrder: ("past" | "present" | "future")[] = ["past", "present", "future"]

  const panelVariants = dims.isMobile
    ? {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
      }
    : {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
      }

  return (
    <motion.div
      className={`absolute z-40 ${
        dims.isMobile ? "inset-x-0 bottom-0" : "inset-x-4 md:inset-x-8 bottom-4 md:bottom-8"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`overflow-hidden ${
          dims.isMobile ? "w-full rounded-t-2xl max-h-[60vh]" : "w-full max-w-5xl mx-auto rounded-2xl max-h-[50vh]"
        }`}
        {...panelVariants}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
        style={{
          background: "linear-gradient(135deg, rgba(26,10,46,0.95) 0%, rgba(15,10,32,0.98) 100%)",
          border: "1px solid rgba(255,79,216,0.3)",
          boxShadow: `
            0 0 40px rgba(255,79,216,0.2),
            0 0 80px rgba(115,242,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.1)
          `,
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Decorative top glow */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, #FF4FD8, #73F2FF, #FF4FD8)",
          }}
        />

        {dims.isMobile && (
          <div className="flex justify-center pt-3">
            <div className="w-12 h-1 rounded-full bg-[#73F2FF]/30" />
          </div>
        )}

        <div
          className="h-full overflow-y-auto"
          style={{
            padding: dims.isMobile
              ? `${dims.spacing.md}px ${dims.spacing.md}px ${dims.spacing.lg}px`
              : `${dims.spacing.lg}px`,
          }}
        >
          {/* Three Card Readings */}
          <div className={`grid gap-4 mb-6 ${dims.isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
            {positionOrder.map((position, index) => {
              const cardData = selectedCards.find((c) => c.position === position)
              if (!cardData) return null

              const reading = getCardReading(cardData.card, cardData.reversed, locale)

              return (
                <motion.div
                  key={position}
                  className="rounded-xl p-3 sm:p-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  style={{
                    background: "rgba(115,242,255,0.05)",
                    border: "1px solid rgba(115,242,255,0.2)",
                  }}
                >
                  {/* Position Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-medium tracking-wider uppercase"
                      style={{
                        background: "rgba(255,79,216,0.2)",
                        color: "#FF4FD8",
                      }}
                    >
                      {positionLabels[position]}
                    </span>
                  </div>

                  {/* Card Name */}
                  <h3 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-2">
                    {reading.name}
                    <span className="ml-2 text-xs font-normal text-[#73F2FF]/70">
                      ({cardData.reversed ? t.tarot.reversed : t.tarot.upright})
                    </span>
                  </h3>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {reading.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs text-[#73F2FF]"
                        style={{
                          background: "rgba(115,242,255,0.1)",
                          border: "1px solid rgba(115,242,255,0.2)",
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Interpretation */}
                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">{reading.situation}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Divider */}
          <motion.div
            className="w-full h-px my-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1 }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,79,216,0.5), rgba(115,242,255,0.5), transparent)",
            }}
          />

          {/* Summary Section */}
          <motion.div
            className="mb-4 p-3 sm:p-4 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              background: "linear-gradient(135deg, rgba(255,79,216,0.1) 0%, rgba(115,242,255,0.1) 100%)",
              border: "1px solid rgba(255,79,216,0.2)",
            }}
          >
            <h3 className="text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2">
              {t.threeCardSpread.summary}
            </h3>
            <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
              {t.threeCardSpread.summaryPlaceholder}
            </p>
          </motion.div>

          {/* Reset Button */}
          <motion.div
            className="text-center pb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.button
              onClick={onReset}
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium tracking-wider text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
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
        </div>
      </motion.div>
    </motion.div>
  )
}
