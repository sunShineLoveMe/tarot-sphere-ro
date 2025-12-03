"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useMemo, useRef } from "react"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"

interface SphereFormationProps {
  onCardSelect: (index: number) => void
}

export default function SphereFormation({ onCardSelect }: SphereFormationProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragRotation, setDragRotation] = useState({ x: 0, y: 0 })
  const lastTouchRef = useRef<{ x: number; y: number } | null>(null)

  const dims = useResponsiveDimensions()

  const cards = useMemo(() => {
    const numCards = 22
    const positions: { x: number; y: number; z: number; rotateX: number; rotateY: number }[] = []
    const phi = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < numCards; i++) {
      const y = 1 - (i / (numCards - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = phi * i

      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      positions.push({
        x: x * dims.sphereRadius,
        y: y * dims.sphereRadius,
        z: z * dims.sphereRadius,
        rotateX: -Math.asin(y) * (180 / Math.PI),
        rotateY: Math.atan2(x, z) * (180 / Math.PI),
      })
    }

    return positions
  }, [dims.sphereRadius])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      lastTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && lastTouchRef.current && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - lastTouchRef.current.x
      const deltaY = e.touches[0].clientY - lastTouchRef.current.y

      setDragRotation((prev) => ({
        x: prev.x + deltaY * 0.3,
        y: prev.y + deltaX * 0.3,
      }))

      lastTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    lastTouchRef.current = null
  }

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ perspective: dims.isMobile ? "1000px" : "1500px" }}
    >
      <motion.div
        className="relative"
        style={{
          width: dims.formationSize,
          height: dims.formationSize,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x + dragRotation.x}deg) rotateY(${rotation.y + dragRotation.y}deg)`,
        }}
        animate={{
          rotateY: [dragRotation.y, dragRotation.y + 360],
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        onMouseMove={(e) => {
          if (dims.isMobile) return
          const rect = e.currentTarget.getBoundingClientRect()
          const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20
          const y = ((e.clientX - rect.left) / rect.width - 0.5) * 20
          setRotation({ x, y })
        }}
        onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {cards.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 cursor-pointer"
            style={{
              width: dims.cardWidth,
              height: dims.cardHeight,
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) rotateY(${pos.rotateY}deg) rotateX(${pos.rotateX}deg)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: hoveredCard === i ? 1.15 : 1,
              opacity: 1,
              z: hoveredCard === i ? pos.z + 20 : pos.z,
            }}
            transition={{
              scale: { duration: 0.3 },
              opacity: { duration: 0.5, delay: i * 0.05 },
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
              <div className="w-full h-full flex items-center justify-center p-2">
                <div
                  className="w-full h-full rounded border border-[#73F2FF]/20 flex items-center justify-center"
                  style={{
                    background: "radial-gradient(circle, rgba(115,242,255,0.05) 0%, transparent 70%)",
                  }}
                >
                  <motion.span
                    className="text-2xl"
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
