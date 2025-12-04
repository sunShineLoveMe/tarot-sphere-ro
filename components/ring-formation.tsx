"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo, useRef } from "react"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"
import { useI18n } from "@/lib/i18n/context"

interface RingFormationProps {
  onCardSelect: (index: number) => void
  selectedCards: number[]
  maxCards: number
  selectPrompt: string
}

export default function RingFormation({ onCardSelect, selectedCards, maxCards, selectPrompt }: RingFormationProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [dragRotation, setDragRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const lastTouchRef = useRef<number | null>(null)

  const dims = useResponsiveDimensions()
  const { t } = useI18n()

  const cards = useMemo(() => {
    const numCards = 22
    const positions: {
      x: number
      y: number
      angle: number
      tiltX: number
      tiltY: number
    }[] = []

    for (let i = 0; i < numCards; i++) {
      const angle = (i / numCards) * Math.PI * 2 - Math.PI / 2
      const tiltAngle = 15

      positions.push({
        x: Math.cos(angle) * dims.ringRadius,
        y: Math.sin(angle) * dims.ringRadius,
        angle: (angle * 180) / Math.PI + 90,
        tiltX: Math.sin(angle) * tiltAngle,
        tiltY: -Math.cos(angle) * tiltAngle,
      })
    }

    return positions
  }, [dims.ringRadius])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      lastTouchRef.current = e.touches[0].clientX
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && lastTouchRef.current !== null && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - lastTouchRef.current
      setDragRotation((prev) => prev + deltaX * 0.5)
      lastTouchRef.current = e.touches[0].clientX
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    lastTouchRef.current = null
  }

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index) || selectedCards.length >= maxCards) return
    onCardSelect(index)
  }

  const auraSize = dims.isMobile ? dims.ringRadius * 1.2 : dims.ringRadius * 1.4

  const remainingCards = maxCards - selectedCards.length

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Outer aura ring */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: dims.ringRadius * 2.4,
          height: dims.ringRadius * 2.4,
          background:
            "radial-gradient(circle, transparent 40%, rgba(255,79,216,0.1) 60%, rgba(115,242,255,0.15) 80%, transparent 100%)",
          boxShadow: "0 0 80px 20px rgba(255,79,216,0.15), 0 0 120px 40px rgba(115,242,255,0.1)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Inner ring border */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: dims.ringRadius * 2,
          height: dims.ringRadius * 2,
          border: "1px solid rgba(115,242,255,0.3)",
          boxShadow: "inset 0 0 60px rgba(255,79,216,0.2), 0 0 40px rgba(115,242,255,0.15)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, -360],
        }}
        transition={{
          scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      />

      {/* Sacred geometry outer */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: auraSize,
          height: auraSize,
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="ringAuraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4FD8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#73F2FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF4FD8" stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="url(#ringAuraGradient)"
            strokeWidth="0.5"
            filter="url(#glow)"
          />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#73F2FF" strokeWidth="0.3" opacity="0.5" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="#FF4FD8" strokeWidth="0.3" opacity="0.4" />
          <polygon
            points="100,20 130,60 170,60 140,90 150,140 100,110 50,140 60,90 30,60 70,60"
            fill="none"
            stroke="url(#ringAuraGradient)"
            strokeWidth="0.5"
            opacity="0.6"
            filter="url(#glow)"
          />
          <polygon
            points="100,40 112,75 150,75 120,95 130,130 100,110 70,130 80,95 50,75 88,75"
            fill="none"
            stroke="#73F2FF"
            strokeWidth="0.3"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Sacred geometry inner */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: auraSize * 0.6,
          height: auraSize * 0.6,
        }}
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          rotate: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#FF4FD8" strokeWidth="0.5" opacity="0.4" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#73F2FF" strokeWidth="0.5" opacity="0.5" />
          <polygon points="50,15 80,70 20,70" fill="none" stroke="#73F2FF" strokeWidth="0.5" opacity="0.5" />
          <polygon points="50,85 80,30 20,30" fill="none" stroke="#FF4FD8" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Card ring container */}
      <motion.div
        className="relative"
        style={{
          width: dims.ringRadius * 2.2,
          height: dims.ringRadius * 2.2,
        }}
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: [dragRotation, dragRotation + 360],
          }}
          transition={{
            duration: 180,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {cards.map((pos, i) => {
            const isHovered = hoveredCard === i
            const isSelected = selectedCards.includes(i)

            return (
              <AnimatePresence key={i}>
                {!isSelected && (
                  <motion.div
                    className="absolute cursor-pointer"
                    style={{
                      width: dims.cardWidth,
                      height: dims.cardHeight,
                      left: "50%",
                      top: "50%",
                      transformOrigin: "center center",
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: isHovered ? 1.15 : 1,
                      x: pos.x - dims.cardWidth / 2,
                      y: pos.y - dims.cardHeight / 2,
                      rotate: pos.angle,
                      rotateX: pos.tiltX,
                      rotateY: pos.tiltY,
                      z: isHovered ? 30 : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                      transition: { duration: 0.5 },
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: i * 0.04 },
                      scale: { duration: 0.4, type: "spring", stiffness: 300 },
                      x: { duration: 0.6, delay: i * 0.04 },
                      y: { duration: 0.6, delay: i * 0.04 },
                      rotate: { duration: 0.6, delay: i * 0.04 },
                      z: { duration: 0.3 },
                    }}
                    whileHover={{
                      y: pos.y - dims.cardHeight / 2 - 15,
                      transition: { duration: 0.2 },
                    }}
                    onHoverStart={() => setHoveredCard(i)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onTouchStart={(e) => {
                      e.stopPropagation()
                      setHoveredCard(i)
                    }}
                    onClick={() => handleCardClick(i)}
                  >
                    <motion.div
                      className="w-full h-full rounded-lg overflow-hidden"
                      style={{
                        background: "linear-gradient(145deg, #1a0a2e 0%, #0d0618 50%, #150a25 100%)",
                        border: `1.5px solid ${isHovered ? "#73F2FF" : "rgba(255,79,216,0.5)"}`,
                        boxShadow: isHovered
                          ? `0 0 25px rgba(115,242,255,0.7), 0 0 50px rgba(255,79,216,0.5), 0 0 80px rgba(115,242,255,0.3), inset 0 0 30px rgba(255,79,216,0.15)`
                          : `0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.15), inset 0 0 15px rgba(255,79,216,0.1)`,
                        transformStyle: "preserve-3d",
                      }}
                      animate={{
                        boxShadow: isHovered
                          ? `0 0 25px rgba(115,242,255,0.7), 0 0 50px rgba(255,79,216,0.5), 0 0 80px rgba(115,242,255,0.3), inset 0 0 30px rgba(255,79,216,0.15)`
                          : `0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.15), inset 0 0 15px rgba(255,79,216,0.1)`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full flex items-center justify-center p-2">
                        <div
                          className="w-full h-full rounded border flex items-center justify-center"
                          style={{
                            borderColor: isHovered ? "rgba(115,242,255,0.5)" : "rgba(255,79,216,0.3)",
                            background:
                              "radial-gradient(ellipse at center, rgba(115,242,255,0.08) 0%, transparent 60%)",
                          }}
                        >
                          <motion.div
                            className="flex flex-col items-center gap-1"
                            animate={{
                              opacity: isHovered ? 1 : 0.6,
                              scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-60">
                              <defs>
                                <linearGradient id={`ringCardBackGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#FF4FD8" />
                                  <stop offset="100%" stopColor="#73F2FF" />
                                </linearGradient>
                              </defs>
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke={`url(#ringCardBackGradient-${i})`}
                                strokeWidth="1"
                              />
                              <circle cx="50" cy="50" r="35" fill="none" stroke="#FF4FD8" strokeWidth="0.5" />
                              <polygon
                                points="50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40"
                                fill="none"
                                stroke={`url(#ringCardBackGradient-${i})`}
                                strokeWidth="0.5"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          background: "radial-gradient(ellipse at center, rgba(115,242,255,0.2) 0%, transparent 70%)",
                          filter: "blur(10px)",
                          transform: "scale(1.3)",
                        }}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            )
          })}
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 4,
            height: 4,
            background: i % 2 === 0 ? "#FF4FD8" : "#73F2FF",
            boxShadow: `0 0 10px ${i % 2 === 0 ? "#FF4FD8" : "#73F2FF"}`,
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: [
              Math.cos((i / 8) * Math.PI * 2) * (dims.ringRadius * 1.3),
              Math.cos((i / 8) * Math.PI * 2 + Math.PI * 2) * (dims.ringRadius * 1.3),
            ],
            y: [
              Math.sin((i / 8) * Math.PI * 2) * (dims.ringRadius * 1.3),
              Math.sin((i / 8) * Math.PI * 2 + Math.PI * 2) * (dims.ringRadius * 1.3),
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-center px-4"
        style={{ bottom: dims.isMobile ? dims.spacing.lg : dims.spacing.lg * 1.5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.p
          className="text-xs sm:text-sm tracking-[0.2em] uppercase"
          style={{
            color: "rgba(115,242,255,0.9)",
            textShadow: "0 0 20px rgba(115,242,255,0.5)",
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {remainingCards === 3
            ? selectPrompt
            : remainingCards === 2
              ? t.threeCardSpread.cardsRemaining.two
              : remainingCards === 1
                ? t.threeCardSpread.cardsRemaining.one
                : ""}
        </motion.p>
        <motion.p className="text-[10px] sm:text-xs mt-2 tracking-widest" style={{ color: "rgba(255,79,216,0.6)" }}>
          ✧ {t.formation.wheelOfFate} ✧
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
