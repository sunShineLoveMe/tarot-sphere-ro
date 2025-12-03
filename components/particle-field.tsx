"use client"

import { motion } from "framer-motion"
import { useMemo, useState, useEffect } from "react"

interface ParticleFieldProps {
  intensity: number
}

export default function ParticleField({ intensity }: ParticleFieldProps) {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 * intensity }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
        color: Math.random() > 0.5 ? "#FF4FD8" : "#73F2FF",
      })),
    )
  }, [intensity])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
