"use client"

import { motion } from "framer-motion"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"

export default function CardStack() {
  const cards = Array.from({ length: 5 })
  const dims = useResponsiveDimensions()

  const stackWidth = dims.cardWidth * 1.2
  const stackHeight = dims.cardHeight * 1.2

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20"
      style={{ paddingBottom: "35%" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative" style={{ width: stackWidth, height: stackHeight }}>
        {cards.map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              zIndex: cards.length - i,
            }}
            initial={{
              y: i * -4,
              x: i * 2,
              rotateZ: (i - 2) * 3,
            }}
            animate={{
              y: [i * -4, i * -6, i * -4],
              rotateZ: [(i - 2) * 3, (i - 2) * 3 + 1, (i - 2) * 3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          >
            {/* Card back design */}
            <div
              className="w-full h-full rounded-xl border-2 border-[#FF4FD8]/50 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                boxShadow: `
                  0 0 20px rgba(255,79,216,0.3),
                  0 0 40px rgba(115,242,255,0.2),
                  inset 0 0 30px rgba(255,79,216,0.1)
                `,
              }}
            >
              {/* Card back pattern */}
              <div className="w-full h-full flex items-center justify-center p-3 sm:p-4">
                <div
                  className="w-full h-full rounded-lg border border-[#73F2FF]/30 flex items-center justify-center"
                  style={{
                    background: "radial-gradient(circle, rgba(115,242,255,0.1) 0%, transparent 70%)",
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-60">
                    <defs>
                      <linearGradient id="cardBackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF4FD8" />
                        <stop offset="100%" stopColor="#73F2FF" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#cardBackGradient)" strokeWidth="1" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#FF4FD8" strokeWidth="0.5" />
                    <polygon
                      points="50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40"
                      fill="none"
                      stroke="url(#cardBackGradient)"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
