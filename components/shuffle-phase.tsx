"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"

export default function ShufflePhase() {
  const dims = useResponsiveDimensions()

  const cards = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        initialAngle: Math.random() * 360,
        delay: Math.random() * 0.5,
        duration: 0.8 + Math.random() * 0.4,
      })),
    [],
  )

  const energyBurstSize = dims.minDimension * 0.5

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cards.map((card) => (
        <ShuffleCard key={card.id} {...card} dims={dims} />
      ))}

      {/* Energy burst effect - responsive size */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: energyBurstSize, height: energyBurstSize }}
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{
          scale: [0, 2, 0],
          opacity: [0.6, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: 2,
          ease: "easeOut",
        }}
        style={{
          width: energyBurstSize,
          height: energyBurstSize,
          background: "radial-gradient(circle, rgba(255,79,216,0.4) 0%, rgba(115,242,255,0.2) 50%, transparent 70%)",
        }}
      />
    </motion.div>
  )
}

interface ShuffleCardProps {
  id: number
  initialAngle: number
  delay: number
  duration: number
  dims: ReturnType<typeof useResponsiveDimensions>
}

function ShuffleCard({ id, initialAngle, delay, duration, dims }: ShuffleCardProps) {
  const randomX = (Math.random() - 0.5) * dims.width * 0.6
  const randomY = (Math.random() - 0.5) * dims.height * 0.5
  const randomRotate = (Math.random() - 0.5) * 720

  return (
    <motion.div
      className="absolute rounded-lg overflow-hidden"
      style={{
        width: dims.cardWidth,
        height: dims.cardHeight,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      }}
      initial={{
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: initialAngle,
        opacity: 0,
      }}
      animate={{
        x: [0, randomX, randomX * 0.5, 0],
        y: [0, randomY, randomY * 0.5, 0],
        rotateX: [0, 180, 360, 0],
        rotateY: [0, randomRotate, 0],
        rotateZ: [initialAngle, initialAngle + 360, initialAngle],
        opacity: [0, 1, 1, 1],
      }}
      transition={{
        duration: 4,
        times: [0, 0.3, 0.7, 1],
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {/* Card with motion blur effect */}
      <div
        className="w-full h-full rounded-lg border border-[#FF4FD8]/50"
        style={{
          background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
          boxShadow: `
            0 0 15px rgba(255,79,216,0.4),
            0 0 30px rgba(115,242,255,0.2)
          `,
        }}
      >
        <div className="w-full h-full flex items-center justify-center p-1 sm:p-2">
          <div
            className="w-full h-full rounded border border-[#73F2FF]/20 flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, rgba(115,242,255,0.05) 0%, transparent 70%)",
            }}
          >
            <span className="text-[#FF4FD8] text-lg sm:text-xl opacity-50">✧</span>
          </div>
        </div>
      </div>

      {/* Motion trail effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,79,216,0.3), rgba(115,242,255,0.3), transparent)",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  )
}
