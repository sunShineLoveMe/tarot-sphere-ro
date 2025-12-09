"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { TarotCard } from "@/lib/tarot/cards"
import { getCardImagePath } from "@/lib/tarot/utils"

interface TarotCardDisplayProps {
  card: TarotCard
  reversed: boolean
  position: "past" | "present" | "future"
  positionLabel: string
  onClick?: () => void
  size?: "sm" | "md" | "lg"
  locale?: string
}

export function TarotCardDisplay({
  card,
  reversed,
  position,
  positionLabel,
  onClick,
  size = "md",
  locale = "en",
}: TarotCardDisplayProps) {
  const sizeClasses = {
    sm: "w-20 h-32",
    md: "w-28 h-44 md:w-32 md:h-52",
    lg: "w-36 h-56 md:w-44 md:h-72",
  }

  const cardName = card.name[locale as keyof typeof card.name] || card.name.en
  const imagePath = getCardImagePath(card.id)

  return (
    <div className="flex flex-col items-center">
      {/* Position Label */}
      <p className="text-xs uppercase tracking-wider text-[#73F2FF] mb-2 font-medium">{positionLabel}</p>

      {/* Card Container */}
      <motion.div
        className={`${sizeClasses[size]} relative cursor-pointer group`}
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Card Frame - Golden border with glow */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(145deg, #D4AF37, #B8860B, #FFD700, #DAA520)",
            padding: "3px",
            boxShadow: `
              0 0 20px rgba(212, 175, 55, 0.4),
              0 0 40px rgba(212, 175, 55, 0.2),
              0 10px 30px rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0a0612]">
            {/* Card Image Container */}
            <div className="relative w-full h-full" style={{ aspectRatio: "3/5" }}>
              <Image
                src={imagePath || "/placeholder.svg"}
                alt={cardName}
                fill
                className={`object-cover transition-transform duration-300 ${reversed ? "rotate-180" : ""}`}
                sizes="(max-width: 768px) 120px, 180px"
                priority
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Click to view indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] text-white/80 bg-black/50 px-2 py-1 rounded-full">
                  {locale === "zh" ? "点击查看" : locale === "ro" ? "Click pentru detalii" : "Click to view"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reversed indicator glow */}
        {reversed && (
          <div
            className="absolute -inset-1 rounded-2xl opacity-50 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255, 79, 216, 0.3), rgba(168, 85, 247, 0.3))",
              filter: "blur(8px)",
            }}
          />
        )}
      </motion.div>

      {/* Card Name */}
      <p className="text-sm md:text-base font-medium text-white mt-3 text-center">{cardName}</p>

      {/* Upright/Reversed indicator */}
      <p className="text-xs text-white/50 mt-1">
        {reversed
          ? `(${locale === "zh" ? "逆位" : locale === "ro" ? "Inversat" : "Reversed"})`
          : `(${locale === "zh" ? "正位" : locale === "ro" ? "Drept" : "Upright"})`}
      </p>
    </div>
  )
}

export default TarotCardDisplay
