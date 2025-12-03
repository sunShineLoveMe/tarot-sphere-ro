"use client"

import { motion } from "framer-motion"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"
import { useI18n } from "@/lib/i18n/context"
import type { TarotCard } from "@/lib/tarot/cards"

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

interface ReadingPanelProps {
  onReset: () => void
  reading: CardReading
}

export default function ReadingPanel({ onReset, reading }: ReadingPanelProps) {
  const dims = useResponsiveDimensions()
  const { t } = useI18n()

  const panelVariants = dims.isMobile
    ? {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
      }
    : {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 100, opacity: 0 },
      }

  return (
    <motion.div
      className={`absolute z-40 pointer-events-none ${
        dims.isMobile
          ? "inset-x-0 bottom-0 flex items-end justify-center"
          : "inset-0 flex items-center justify-end px-4 md:px-8"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`pointer-events-auto overflow-hidden ${
          dims.isMobile
            ? "w-full rounded-t-2xl max-h-[70vh]"
            : "w-full max-w-md md:max-w-lg lg:max-w-xl h-[80vh] max-h-[700px] rounded-2xl"
        }`}
        {...panelVariants}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
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
          {/* Card Title */}
          <motion.div
            className="text-center mb-4 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]">
              {reading.name}
            </h2>
            <div
              className="mt-2 sm:mt-3 inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full"
              style={{
                background: reading.reversed ? "rgba(255,79,216,0.1)" : "rgba(115,242,255,0.1)",
                border: `1px solid ${reading.reversed ? "rgba(255,79,216,0.3)" : "rgba(115,242,255,0.3)"}`,
              }}
            >
              <span className={reading.reversed ? "text-[#FF4FD8]" : "text-[#73F2FF]"} style={{ fontSize: "0.875rem" }}>
                {reading.position}
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full h-px my-4 sm:my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,79,216,0.5), rgba(115,242,255,0.5), transparent)",
            }}
          />

          {/* Keywords */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
              {t.tarot.loveKeywords}
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {reading.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm text-[#73F2FF]"
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

          {/* Current Situation */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
              {t.tarot.currentSituation}
            </h3>
            <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">{reading.situation}</p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full h-px my-4 sm:my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,79,216,0.3), rgba(115,242,255,0.3), transparent)",
            }}
          />

          {/* Future Trend */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
              {t.tarot.futureTrend}
            </h3>
            <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">{reading.future}</p>
          </motion.div>

          {/* Advice */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h3 className="text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
              {t.tarot.guidance}
            </h3>
            <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">{reading.advice}</p>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{
              background: "linear-gradient(135deg, rgba(255,79,216,0.1) 0%, rgba(115,242,255,0.1) 100%)",
              border: "1px solid rgba(255,79,216,0.2)",
            }}
          >
            <p className="text-center text-[#73F2FF] text-xs sm:text-sm italic">&quot;{reading.quote}&quot;</p>
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
