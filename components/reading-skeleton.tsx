"use client"

import { motion } from "framer-motion"

interface ReadingSkeletonProps {
  locale?: "en" | "zh" | "ro"
}

export function ReadingSkeleton({ locale = "en" }: ReadingSkeletonProps) {
  const loadingTexts = {
    en: "The cards are revealing their secrets...",
    zh: "塔罗牌正在揭示它们的秘密...",
    ro: "Cărțile își dezvăluie secretele...",
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-6 rounded-2xl"
      style={{
        background: "rgba(15, 10, 32, 0.8)",
        border: "1px solid rgba(115, 242, 255, 0.2)",
      }}
    >
      {/* Loading text */}
      <motion.p
        className="text-center text-[#73F2FF] text-sm italic"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {loadingTexts[locale]}
      </motion.p>

      {/* Skeleton sections */}
      <div className="space-y-4">
        {/* Overview skeleton */}
        <div className="space-y-2">
          <div
            className="h-4 w-32 rounded animate-pulse"
            style={{ background: "rgba(255, 79, 216, 0.3)" }}
          />
          <div
            className="h-16 w-full rounded animate-pulse"
            style={{ background: "rgba(115, 242, 255, 0.1)" }}
          />
        </div>

        {/* Card interpretations skeleton */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div
              className="h-4 w-24 rounded animate-pulse"
              style={{ background: "rgba(255, 79, 216, 0.3)" }}
            />
            <div
              className="h-20 w-full rounded animate-pulse"
              style={{ background: "rgba(115, 242, 255, 0.1)" }}
            />
          </div>
        ))}

        {/* Advice skeleton */}
        <div className="space-y-2">
          <div
            className="h-4 w-28 rounded animate-pulse"
            style={{ background: "rgba(255, 79, 216, 0.3)" }}
          />
          <div
            className="h-24 w-full rounded animate-pulse"
            style={{ background: "rgba(115, 242, 255, 0.1)" }}
          />
        </div>
      </div>

      {/* Mystical loading indicator */}
      <div className="flex justify-center pt-4">
        <motion.div
          className="flex gap-2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
            >
              ✦
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
