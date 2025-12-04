"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"
import { useI18n } from "@/lib/i18n/context"
import type { TarotCard } from "@/lib/tarot/cards"

export interface SelectedCardData {
  card: TarotCard
  reversed: boolean
  cardIndex: number
  position: "past" | "present" | "future"
}

interface ThreeCardSpreadProps {
  selectedCards: SelectedCardData[]
  flippedCards: Set<number>
}

export default function ThreeCardSpread({ selectedCards, flippedCards }: ThreeCardSpreadProps) {
  const dims = useResponsiveDimensions()
  const { t, locale } = useI18n()

  const cardWidth = dims.isMobile ? dims.cardWidth * 1.3 : dims.cardWidth * 1.5
  const cardHeight = dims.isMobile ? dims.cardHeight * 1.3 : dims.cardHeight * 1.5
  const gap = dims.isMobile ? 8 : 16

  const positionLabels = {
    past: t.threeCardSpread.positions.past,
    present: t.threeCardSpread.positions.present,
    future: t.threeCardSpread.positions.future,
  }

  const positionOrder: ("past" | "present" | "future")[] = ["past", "present", "future"]

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-end justify-center" style={{ gap }}>
        {positionOrder.map((position, slotIndex) => {
          const cardData = selectedCards.find((c) => c.position === position)
          const isFlipped = cardData ? flippedCards.has(cardData.cardIndex) : false

          return (
            <motion.div
              key={position}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: slotIndex * 0.1, duration: 0.5 }}
            >
              {/* Position Label */}
              <motion.p
                className="text-xs sm:text-sm tracking-widest uppercase mb-2"
                style={{
                  color: "rgba(115,242,255,0.8)",
                  textShadow: "0 0 10px rgba(115,242,255,0.5)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + slotIndex * 0.1 }}
              >
                {positionLabels[position]}
              </motion.p>

              {/* Card Slot */}
              <div
                className="relative"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  perspective: "1000px",
                }}
              >
                <AnimatePresence>
                  {cardData ? (
                    <motion.div
                      key={cardData.cardIndex}
                      className="absolute inset-0"
                      style={{ transformStyle: "preserve-3d" }}
                      initial={{
                        scale: 0,
                        rotateY: 0,
                        y: -100,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        rotateY: isFlipped ? 180 : 0,
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        scale: { duration: 0.6, type: "spring", stiffness: 200 },
                        rotateY: { duration: 0.8, delay: 0.3 },
                        y: { duration: 0.6, type: "spring" },
                      }}
                    >
                      {/* Card Back */}
                      <motion.div
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                          border: "2px solid rgba(255,79,216,0.5)",
                          boxShadow: `
                            0 0 30px rgba(255,79,216,0.4),
                            0 0 60px rgba(115,242,255,0.2),
                            inset 0 0 30px rgba(255,79,216,0.1)
                          `,
                        }}
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center p-2">
                          <div
                            className="w-full h-full rounded-lg border border-[#73F2FF]/30 flex items-center justify-center"
                            style={{
                              background: "radial-gradient(circle, rgba(115,242,255,0.1) 0%, transparent 70%)",
                            }}
                          >
                            <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16 opacity-70">
                              <defs>
                                <linearGradient
                                  id={`spreadCardGradient-${position}`}
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stopColor="#FF4FD8" />
                                  <stop offset="100%" stopColor="#73F2FF" />
                                </linearGradient>
                              </defs>
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke={`url(#spreadCardGradient-${position})`}
                                strokeWidth="1.5"
                              />
                              <circle cx="50" cy="50" r="35" fill="none" stroke="#FF4FD8" strokeWidth="0.5" />
                              <polygon
                                points="50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40"
                                fill="none"
                                stroke={`url(#spreadCardGradient-${position})`}
                                strokeWidth="1"
                              />
                            </svg>
                          </div>
                        </div>
                      </motion.div>

                      {/* Card Front */}
                      <motion.div
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          background: "linear-gradient(135deg, #1a0a2e 0%, #150820 50%, #1a0a2e 100%)",
                          border: "2px solid rgba(115,242,255,0.6)",
                          boxShadow: `
                            0 0 40px rgba(115,242,255,0.4),
                            0 0 80px rgba(255,79,216,0.2),
                            inset 0 0 30px rgba(115,242,255,0.1)
                          `,
                        }}
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-3">
                          <div
                            className="w-full flex-1 rounded-lg mb-1 sm:mb-2 flex items-center justify-center"
                            style={{
                              background:
                                "radial-gradient(circle, rgba(115,242,255,0.15) 0%, rgba(255,79,216,0.1) 50%, transparent 100%)",
                              boxShadow: "inset 0 0 20px rgba(115,242,255,0.2)",
                            }}
                          >
                            <span className="text-3xl sm:text-5xl opacity-80">♡</span>
                          </div>
                          <div className="text-center">
                            <p className="text-[#73F2FF] text-[10px] sm:text-sm font-semibold tracking-wider truncate max-w-full px-1">
                              {cardData.card.name[locale as keyof typeof cardData.card.name] || cardData.card.name.en}
                            </p>
                            <p className="text-[#FF4FD8] text-[8px] sm:text-xs mt-0.5">
                              {cardData.reversed ? t.tarot.reversed : t.tarot.upright}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(255,79,216,0.3), 0 0 40px rgba(115,242,255,0.15)",
                            "0 0 30px rgba(255,79,216,0.5), 0 0 60px rgba(115,242,255,0.25)",
                            "0 0 20px rgba(255,79,216,0.3), 0 0 40px rgba(115,242,255,0.15)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  ) : (
                    // Empty Slot Placeholder
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        border: "2px dashed rgba(115,242,255,0.3)",
                        background: "rgba(115,242,255,0.05)",
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        borderColor: ["rgba(115,242,255,0.3)", "rgba(255,79,216,0.4)", "rgba(115,242,255,0.3)"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
