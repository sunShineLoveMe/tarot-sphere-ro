"use client"

import { motion } from "framer-motion"

interface LoadingAnimationProps {
  locale?: "en" | "zh" | "ro"
}

const loadingMessages = {
  en: [
    "Connecting with your energy...",
    "Reading the cards...",
    "Channeling cosmic wisdom...",
  ],
  zh: [
    "连接你的能量...",
    "解读牌面...",
    "汲取宇宙智慧...",
  ],
  ro: [
    "Conectare cu energia ta...",
    "Citire cărților...",
    "Canalizare înțelepciunii cosmice...",
  ],
}

export function LoadingAnimation({ locale = "en" }: LoadingAnimationProps) {
  const messages = loadingMessages[locale]
  
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated orbs */}
      <div className="relative w-24 h-24 mb-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? '#FF4FD8' : i === 1 ? '#A855F7' : '#73F2FF'}40 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5],
              rotate: [0, 120, 240, 360],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Center glow */}
        <motion.div
          className="absolute inset-6 rounded-full"
          style={{
            background: "radial-gradient(circle, #FF4FD8 0%, #A855F7 50%, #73F2FF 100%)",
            filter: "blur(8px)",
          }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Spinning ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-dashed"
          style={{
            borderColor: "rgba(115, 242, 255, 0.4)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated text */}
      <div className="relative w-full text-center">
        {messages.map((message, i) => (
          <motion.p
            key={message}
            className="text-sm text-[#73F2FF]/80 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 3,
              repeat: Infinity,
              repeatDelay: (messages.length - 1) * 3,
            }}
            style={{
              position: i === 0 ? "relative" : "absolute",
              left: i === 0 ? "auto" : "50%",
              transform: i === 0 ? "none" : "translateX(-50%)",
              top: i === 0 ? "auto" : 0,
            }}
          >
            {message}
          </motion.p>
        ))}
      </div>

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#73F2FF]"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
