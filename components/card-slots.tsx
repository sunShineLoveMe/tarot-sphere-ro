"use client"

import { motion } from "framer-motion"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"
import { useI18n } from "@/lib/i18n/context"
import type { TarotCard } from "@/lib/tarot/cards"

export interface SelectedCardData {
  card: TarotCard
  reversed: boolean
  cardIndex: number
  position: "past" | "present" | "future"
}

interface CardSlotsProps {
  selectedCards: SelectedCardData[]
  flippedCards: Set<number>
}

export default function CardSlots({ selectedCards, flippedCards }: CardSlotsProps) {
  const dims = useResponsiveDimensions()
  const { t, locale } = useI18n()

  const slotHeight = dims.isMobile
    ? Math.min(dims.height * 0.26, 180)
    : dims.isTablet
      ? Math.min(dims.height * 0.24, 200)
      : Math.min(dims.height * 0.22, 220)
  const slotWidth = slotHeight * 0.6 // 3:5 ratio
  const gap = dims.isMobile ? 12 : dims.isTablet ? 16 : 24

  const positionLabels = {
    past: t.threeCardSpread.positions.past,
    present: t.threeCardSpread.positions.present,
    future: t.threeCardSpread.positions.future,
  }

  const positionOrder: ("past" | "present" | "future")[] = ["past", "present", "future"]

  // Map card IDs to their image filenames
  const cardImageMap: Record<number, string> = {
    0: "00-the-fool.webp",
    1: "01-the-magician.webp",
    2: "02-the-high-priestess.webp",
    3: "03-the-empress.webp",
    4: "04-the-emperor.webp",
    5: "05-the-hierophant.webp",
    6: "06-the-lovers.webp",
    7: "07-the-chariot.webp",
    8: "08-the-strength.webp",
    9: "09-the-hermit.webp",
    10: "10-the-wheel-of-fortune.webp",
    11: "11-the-justice.webp",
    12: "12-the-hanged-man.webp",
    13: "13-the-death.webp",
    14: "14-the-temperance.webp",
    15: "15-the-devil.webp",
    16: "16-the-tower.webp",
    17: "17-the-star.webp",
    18: "18-the-moon.webp",
    19: "19-the-sun.webp",
    20: "20-the-judgement.webp",
    21: "21-the-world.webp",
  }

  const getCardImagePath = (cardId: number) => {
    const filename = cardImageMap[cardId]
    return filename ? `/cards/major/${filename}` : null
  }

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 z-30"
      style={{
        height: dims.isMobile ? "38%" : dims.isTablet ? "35%" : "32%",
        background: "linear-gradient(to top, rgba(10,5,20,0.95) 0%, rgba(10,5,20,0.7) 70%, transparent 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center"
        style={{
          paddingBottom: dims.isMobile ? 16 : dims.isTablet ? 20 : 24,
          gap,
        }}
      >
        {positionOrder.map((position, slotIndex) => {
          const cardData = selectedCards.find((c) => c.position === position)
          const isFlipped = cardData ? flippedCards.has(cardData.cardIndex) : false
          const cardImagePath = cardData ? getCardImagePath(cardData.card.id) : null

          return (
            <motion.div
              key={position}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: slotIndex * 0.1, duration: 0.5 }}
            >
              <motion.p
                className="text-[10px] sm:text-xs tracking-[0.15em] uppercase mb-2"
                style={{
                  color: cardData ? "rgba(115,242,255,0.9)" : "rgba(115,242,255,0.5)",
                  textShadow: cardData ? "0 0 10px rgba(115,242,255,0.5)" : "none",
                }}
              >
                {positionLabels[position]}
              </motion.p>

              <div
                className="relative rounded-xl overflow-visible"
                style={{
                  width: slotWidth,
                  height: slotHeight,
                  perspective: "1000px",
                }}
              >
                {!cardData && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(115,242,255,0.03)",
                    }}
                    animate={{
                      boxShadow: [
                        "inset 0 0 0 2px rgba(255,79,216,0.3), 0 0 20px rgba(255,79,216,0.1)",
                        "inset 0 0 0 2px rgba(115,242,255,0.4), 0 0 30px rgba(115,242,255,0.2)",
                        "inset 0 0 0 2px rgba(255,79,216,0.3), 0 0 20px rgba(255,79,216,0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="absolute inset-2 rounded-lg border-2 border-dashed"
                      style={{ borderColor: "rgba(115,242,255,0.2)" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl opacity-20" style={{ color: "#73F2FF" }}>
                        {slotIndex + 1}
                      </span>
                    </div>
                  </motion.div>
                )}

                {cardData && (
                  <motion.div
                    className="absolute inset-0"
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{
                      scale: 0.3,
                      y: -dims.height * 0.4,
                      rotateY: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      y: 0,
                      rotateY: isFlipped ? 180 : 0,
                      opacity: 1,
                    }}
                    transition={{
                      scale: { duration: 0.6, type: "spring", stiffness: 150, damping: 15 },
                      y: { duration: 0.7, type: "spring", stiffness: 100, damping: 12 },
                      rotateY: { duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    {/* Card Back */}
                    <motion.div
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        background: "linear-gradient(145deg, #1a0a2e 0%, #0d0618 50%, #150a25 100%)",
                        border: "2px solid",
                        borderImage: "linear-gradient(135deg, #FF4FD8, #73F2FF) 1",
                        boxShadow: `
                          0 0 25px rgba(255,79,216,0.4),
                          0 0 50px rgba(115,242,255,0.2),
                          inset 0 0 20px rgba(255,79,216,0.1)
                        `,
                      }}
                    >
                      <div className="w-full h-full p-2 flex items-center justify-center">
                        <div
                          className="w-full h-full rounded-lg border flex items-center justify-center"
                          style={{
                            borderColor: "rgba(115,242,255,0.3)",
                            background: "radial-gradient(circle, rgba(115,242,255,0.08) 0%, transparent 70%)",
                          }}
                        >
                          <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-14 sm:h-14 opacity-60">
                            <defs>
                              <linearGradient id={`slotGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF4FD8" />
                                <stop offset="100%" stopColor="#73F2FF" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke={`url(#slotGrad-${position})`}
                              strokeWidth="1.5"
                            />
                            <polygon
                              points="50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40"
                              fill="none"
                              stroke={`url(#slotGrad-${position})`}
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    {/* Card Front - Real Tarot Card Image */}
                    <motion.div
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #d4af37 0%, #f4e4bc 20%, #d4af37 40%, #f4e4bc 60%, #d4af37 80%, #f4e4bc 100%)",
                          padding: "3px",
                        }}
                      >
                        <div
                          className="w-full h-full rounded-lg overflow-hidden relative"
                          style={{
                            background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
                          }}
                        >
                          {/* Card Image */}
                          {cardImagePath && (
                            <motion.img
                              src={cardImagePath}
                              alt={cardData.card.name[locale as "en" | "zh" | "ro"] || cardData.card.name.en}
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{
                                transform: cardData.reversed ? "rotate(180deg)" : "none",
                              }}
                              animate={{
                                filter: [
                                  "brightness(1) contrast(1)",
                                  "brightness(1.05) contrast(1.02)",
                                  "brightness(1) contrast(1)",
                                ],
                              }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            />
                          )}
                          
                          {/* Golden border overlay */}
                          <div
                            className="absolute inset-[3px] rounded-md pointer-events-none"
                            style={{
                              border: "1px solid rgba(212,175,55,0.5)",
                            }}
                          />

                          {/* Card Name Label Overlay */}
                          <div
                            className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2"
                            style={{
                              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)",
                            }}
                          >
                            <p
                              className="text-[9px] sm:text-[11px] font-semibold tracking-wider truncate text-center"
                              style={{
                                color: "#d4af37",
                                textShadow: "0 0 10px rgba(212,175,55,0.5)",
                              }}
                            >
                              {cardData.card.name[locale as "en" | "zh" | "ro"] || cardData.card.name.en}
                            </p>
                            <p
                              className="text-[7px] sm:text-[9px] text-center"
                              style={{
                                color: cardData.reversed ? "#FF4FD8" : "#73F2FF",
                              }}
                            >
                              {cardData.reversed ? t.tarot.reversed : t.tarot.upright}
                            </p>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        className="absolute -inset-1 rounded-xl pointer-events-none -z-10"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(212,175,55,0.3), 0 0 40px rgba(115,242,255,0.1)",
                            "0 0 30px rgba(212,175,55,0.5), 0 0 60px rgba(255,79,216,0.15)",
                            "0 0 20px rgba(212,175,55,0.3), 0 0 40px rgba(115,242,255,0.1)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,79,216,0.5), rgba(115,242,255,0.5), rgba(255,79,216,0.5), transparent)",
        }}
      />
    </motion.div>
  )
}
