"use client"

import { motion } from "framer-motion"
import { TarotCardDisplay } from "./tarot-card-display"
import type { DrawnCard } from "@/lib/tarot/utils"
import { useI18n } from "@/lib/i18n/context"

interface TarotSpreadProps {
  cards: DrawnCard[]
  onCardClick?: (card: DrawnCard) => void
  size?: "sm" | "md" | "lg"
}

export function TarotSpread({ cards, onCardClick, size = "md" }: TarotSpreadProps) {
  const { t, locale } = useI18n()

  const getPositionLabel = (position: "past" | "present" | "future") => {
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
    <motion.div
      className="flex justify-center items-end gap-4 md:gap-8 lg:gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, staggerChildren: 0.15 }}
    >
      {cards.map((drawnCard, index) => (
        <motion.div
          key={`${drawnCard.card.id}-${drawnCard.position}`}
          initial={{ opacity: 0, y: 50, rotateY: -30 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{
            delay: index * 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <TarotCardDisplay
            card={drawnCard.card}
            reversed={drawnCard.reversed}
            position={drawnCard.position}
            positionLabel={getPositionLabel(drawnCard.position)}
            onClick={() => onCardClick?.(drawnCard)}
            size={size}
            locale={locale}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TarotSpread
