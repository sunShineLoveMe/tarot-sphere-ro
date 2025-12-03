"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useMemo, useRef } from "react"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"

interface RingFormationProps {
  onCardSelect: (index: number) => void
}

export default function RingFormation({ onCardSelect }: RingFormationProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [dragRotation, setDragRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const lastTouchRef = useRef<number | null>(null)

  const dims = useResponsiveDimensions()

  const cards = useMemo(() => {
    const numCards = 22
    const positions: { x: number; y: number; rotateY: number }[] = []

    for (let i = 0; i < numCards; i++) {
      const angle = (i / numCards) * Math.PI * 2
      positions.push({
        x: Math.sin(angle) * dims.ringRadius,
        y: Math.cos(angle) * dims.ringRadius,
        rotateY: (i / numCards) * 360,
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
      setDragRotation((prev) => prev + deltaX * 0.3)
      lastTouchRef.current = e.touches[0].clientX
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    lastTouchRef.current = null
  }

  const magicCircleSize = dims.isMobile ? dims.ringRadius * 0.5 : dims.ringRadius * 0.7

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ perspective: dims.isMobile ? "1000px" : "1500px" }}
    >
      {/* Floating ring container */}
      <motion.div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${dims.isMobile ? 55 : 65}deg)`,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Rotating card ring */}
        <motion.div
          className="relative"
          style={{
            width: dims.formationSize,
            height: dims.formationSize,
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateZ: [dragRotation, dragRotation + 360] }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {cards.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 cursor-pointer"
              style={{
                width: dims.cardWidth,
                height: dims.cardHeight,
                transformStyle: "preserve-3d",
                transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, 0) rotateX(${dims.isMobile ? -55 : -65}deg) rotateZ(${-pos.rotateY}deg)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredCard === i ? 1.2 : 1,
                opacity: 1,
                y: hoveredCard === i ? -20 : 0,
              }}
              transition={{
                scale: { duration: 0.3 },
                opacity: { duration: 0.5, delay: i * 0.05 },
                y: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(i)}
              onClick={() => onCardSelect(i)}
            >
              <div
                className="w-full h-full rounded-lg border border-[#FF4FD8]/50 overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                  boxShadow:
                    hoveredCard === i
                      ? "0 0 30px rgba(255,79,216,0.6), 0 0 60px rgba(115,242,255,0.4), inset 0 0 20px rgba(255,79,216,0.2)"
                      : "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.1)",
                  borderColor: hoveredCard === i ? "#73F2FF" : "rgba(255,79,216,0.5)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center p-1 sm:p-2">
                  <div
                    className="w-full h-full rounded border border-[#73F2FF]/20 flex items-center justify-center"
                    style={{
                      background: "radial-gradient(circle, rgba(115,242,255,0.05) 0%, transparent 70%)",
                    }}
                  >
                    <motion.span
                      className="text-lg sm:text-xl"
                      animate={{
                        opacity: hoveredCard === i ? 1 : 0.5,
                        scale: hoveredCard === i ? 1.2 : 1,
                      }}
                      style={{
                        color: hoveredCard === i ? "#73F2FF" : "#FF4FD8",
                        textShadow: hoveredCard === i ? "0 0 20px #73F2FF" : "none",
                      }}
                    >
                      ✧
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central magic circle in ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: magicCircleSize,
            height: magicCircleSize,
            transform: `translate(-50%, -50%) rotateX(${dims.isMobile ? -55 : -65}deg)`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
            <defs>
              <linearGradient id="ringCenterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4FD8" />
                <stop offset="100%" stopColor="#73F2FF" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#ringCenterGradient)" strokeWidth="1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#73F2FF" strokeWidth="0.5" />
            <polygon
              points="50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40"
              fill="none"
              stroke="url(#ringCenterGradient)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating instruction */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-center px-4"
        style={{ bottom: dims.isMobile ? dims.spacing.lg : dims.spacing.lg * 2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-[#73F2FF]/70 text-xs sm:text-sm tracking-wider">
          {dims.isMobile ? "✧ Tap a card ✧" : "✧ Choose a card that calls to your heart ✧"}
        </p>
      </motion.div>
    </motion.div>
  )
}
