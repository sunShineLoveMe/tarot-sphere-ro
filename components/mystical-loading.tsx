"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { useEffect } from "react"


interface MysticalLoadingProps {
  isVisible: boolean
}

export default function MysticalLoading({ isVisible }: MysticalLoadingProps) {
  const { t } = useI18n()




  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background: "rgba(10,5,20,0.9)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Central orb */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        {/* Core light ball */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,79,216,0.8) 0%, rgba(115,242,255,0.4) 50%, transparent 70%)",
            boxShadow: "0 0 60px rgba(255,79,216,0.5), 0 0 120px rgba(115,242,255,0.3)",
          }}
        />

        {/* Breathing ring 1 */}
        <motion.div
          className="absolute inset-[-20%] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            border: "2px solid rgba(255,79,216,0.4)",
            boxShadow: "0 0 30px rgba(255,79,216,0.3)",
          }}
        />

        {/* Breathing ring 2 */}
        <motion.div
          className="absolute inset-[-40%] rounded-full"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            border: "1px solid rgba(115,242,255,0.3)",
            boxShadow: "0 0 20px rgba(115,242,255,0.2)",
          }}
        />

        {/* Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#FF4FD8" : "#73F2FF",
              left: "50%",
              top: "50%",
              boxShadow: `0 0 8px ${i % 2 === 0 ? "#FF4FD8" : "#73F2FF"}`,
            }}
            animate={{
              x: [0, Math.cos((i * 30 * Math.PI) / 180) * 80, 0],
              y: [0, Math.sin((i * 30 * Math.PI) / 180) * 80, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Stardust flow */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute w-0.5 h-0.5 rounded-full bg-white/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -30, -60],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <motion.p
        className="mt-8 text-sm sm:text-base tracking-widest"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          color: "#73F2FF",
          textShadow: "0 0 20px rgba(115,242,255,0.5)",
        }}
      >
        {t.loading.connecting}
      </motion.p>
    </motion.div>
  )
}
