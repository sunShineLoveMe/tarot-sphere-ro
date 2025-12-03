"use client"

import { motion } from "framer-motion"
import { useMemo, useState, useEffect } from "react"
import { useResponsiveDimensions } from "@/hooks/use-responsive-dimensions"

export default function MagicBackground() {
  const dims = useResponsiveDimensions()

  const starCount = dims.isMobile ? 60 : 100

  const [stars, setStars] = useState<any[]>([])

  useEffect(() => {
    setStars(
      Array.from({ length: starCount }).map((_, i) => ({
        id: i,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    )
  }, [starCount])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a20] to-[#0a0a1a]" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/sacred-geometry-pattern-with-stars-and-cosmic-ener.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Animated nebula layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,79,216,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(115,242,255,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Stars - responsive count */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.width,
              height: star.height,
              left: star.left,
              top: star.top,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Cosmic dust particles */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  )
}
