"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Sparkles } from "lucide-react"
import type { DrawnCard } from "@/lib/tarot/utils"
import { getCardImagePath } from "@/lib/tarot/utils"
import { getCardReading } from "@/lib/tarot/cards"
import { useI18n } from "@/lib/i18n/context"

interface TarotCardModalProps {
  drawnCard: DrawnCard | null
  isOpen: boolean
  onClose: () => void
}

export function TarotCardModal({ drawnCard, isOpen, onClose }: TarotCardModalProps) {
  const { t, locale } = useI18n()

  if (!drawnCard) return null

  const { card, reversed, position } = drawnCard
  const cardName = card.name[locale as keyof typeof card.name] || card.name.en
  const keywords = card.keywords[locale as keyof typeof card.keywords] || card.keywords.en
  const imagePath = getCardImagePath(card.id)
  const reading = getCardReading(card, reversed, locale)

  const getPositionLabel = () => {
    switch (position) {
      case "past":
        return t.threeCardSpread?.positions?.past || "Past"
      case "present":
        return t.threeCardSpread?.positions?.present || "Present"
      case "future":
        return t.threeCardSpread?.positions?.future || "Future"
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div
              className="relative w-full max-w-4xl max-h-full overflow-y-auto rounded-3xl p-6 md:p-8"
              style={{
                background: "linear-gradient(145deg, rgba(15, 10, 32, 0.98), rgba(26, 10, 46, 0.98))",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                boxShadow: "0 0 60px rgba(212, 175, 55, 0.2), 0 0 120px rgba(255, 79, 216, 0.1)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Card Image */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <p className="text-xs uppercase tracking-wider text-[#73F2FF] mb-3">{getPositionLabel()}</p>

                  <div
                    className="relative w-40 h-64 md:w-52 md:h-80 rounded-2xl overflow-hidden"
                    style={{
                      background: "linear-gradient(145deg, #D4AF37, #B8860B, #FFD700)",
                      padding: "4px",
                      boxShadow: "0 0 30px rgba(212, 175, 55, 0.5), 0 15px 40px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div className="w-full h-full rounded-[12px] overflow-hidden bg-[#0a0612]">
                      <Image
                        src={imagePath || "/placeholder.svg"}
                        alt={cardName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 160px, 208px"
                        priority
                      />
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white mt-4 text-center">{cardName}</h2>
                  <p className="text-sm mt-1" style={{ color: reversed ? "#FF4FD8" : "#73F2FF" }}>
                    {reversed
                      ? locale === "zh"
                        ? "逆位"
                        : locale === "ro"
                          ? "Inversat"
                          : "Reversed"
                      : locale === "zh"
                        ? "正位"
                        : locale === "ro"
                          ? "Drept"
                          : "Upright"}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 justify-center mt-4 max-w-[200px]">
                    {keywords.slice(0, 4).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          background: "rgba(115, 242, 255, 0.15)",
                          border: "1px solid rgba(115, 242, 255, 0.3)",
                          color: "#73F2FF",
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reading Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FF4FD8] mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {locale === "zh" ? "当前情况" : locale === "ro" ? "Situația actuală" : "Current Situation"}
                    </h3>
                    <p className="text-white/90 leading-relaxed">{reading.situation}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#73F2FF] mb-2">
                      {locale === "zh" ? "未来展望" : locale === "ro" ? "Viitorul" : "Future Outlook"}
                    </h3>
                    <p className="text-white/80 leading-relaxed">{reading.future}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#A855F7] mb-2">
                      {locale === "zh" ? "建议" : locale === "ro" ? "Sfat" : "Advice"}
                    </h3>
                    <p className="text-white/80 leading-relaxed">{reading.advice}</p>
                  </div>

                  {/* Quote */}
                  {card.quote && (
                    <div
                      className="p-4 rounded-xl mt-6"
                      style={{
                        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(255, 79, 216, 0.1))",
                        border: "1px solid rgba(168, 85, 247, 0.2)",
                      }}
                    >
                      <p className="text-white/90 italic text-center">
                        "{card.quote[locale as keyof typeof card.quote] || card.quote.en}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TarotCardModal
