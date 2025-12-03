"use client"

import { motion } from "framer-motion"

interface MagicCircleProps {
  isActive: boolean
  intensity: "normal" | "high" | "elevated"
}

export default function MagicCircle({ isActive, intensity }: MagicCircleProps) {
  const glowIntensity = {
    normal: 0.3,
    high: 0.7,
    elevated: 0.5,
  }

  const rotationSpeed = {
    normal: 60,
    high: 20,
    elevated: 40,
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      {/* Outer ring */}
      <motion.div
        className="absolute w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] md:w-[800px] md:h-[800px] md:max-w-none md:max-h-none"
        animate={{
          rotate: 360,
          opacity: isActive ? glowIntensity[intensity] : 0.1,
        }}
        transition={{
          rotate: {
            duration: rotationSpeed[intensity],
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          opacity: { duration: 1 },
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4FD8" />
              <stop offset="50%" stopColor="#73F2FF" />
              <stop offset="100%" stopColor="#FF4FD8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer circle */}
          <circle
            cx="200"
            cy="200"
            r="195"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="1"
            filter="url(#glow)"
          />

          {/* Inner decorative circles */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="#FF4FD8" strokeWidth="0.5" opacity="0.5" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="#73F2FF" strokeWidth="0.5" opacity="0.3" />

          {/* Sacred geometry - hexagram */}
          <polygon
            points="200,20 350,280 50,280"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <polygon
            points="200,380 350,120 50,120"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="0.5"
            opacity="0.4"
          />

          {/* Runes/symbols around the circle */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const x = 200 + 185 * Math.cos(angle)
            const y = 200 + 185 * Math.sin(angle)
            return (
              <text
                key={i}
                x={x}
                y={y}
                fill="#FF4FD8"
                fontSize="12"
                textAnchor="middle"
                dominantBaseline="middle"
                opacity="0.6"
              >
                ✧
              </text>
            )
          })}
        </svg>
      </motion.div>

      {/* Middle ring - counter rotation */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] md:w-[550px] md:h-[550px] md:max-w-none md:max-h-none"
        animate={{
          rotate: -360,
          opacity: isActive ? glowIntensity[intensity] * 0.8 : 0.05,
        }}
        transition={{
          rotate: {
            duration: rotationSpeed[intensity] * 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          opacity: { duration: 1 },
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle
            cx="200"
            cy="200"
            r="195"
            fill="none"
            stroke="#73F2FF"
            strokeWidth="1"
            strokeDasharray="10 5"
            filter="url(#glow)"
          />

          {/* Inner pentagram */}
          <polygon
            points="200,10 238,150 390,150 268,230 306,370 200,280 94,370 132,230 10,150 162,150"
            fill="none"
            stroke="#73F2FF"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Breathing pulse effect */}
      <motion.div
        className="absolute w-[45vw] h-[45vw] max-w-[300px] max-h-[300px] md:w-[400px] md:h-[400px] md:max-w-none md:max-h-none rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: isActive ? [0.1, 0.2, 0.1] : 0,
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(255,79,216,0.2) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
