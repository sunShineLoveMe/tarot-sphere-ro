"use client"

import { motion } from "framer-motion"

interface ReadingSkeletonProps {
  locale?: "en" | "zh" | "ro"
}

export function ReadingSkeleton({ locale = "en" }: ReadingSkeletonProps) {
  const loadingTexts = {
    en: "Interpreting the cards...",
    zh: "解读牌面中...",
    ro: "Interpretare în curs...",
  }

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overall Energy Skeleton */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-[#73F2FF]/20 animate-pulse" />
          <div className="h-4 w-32 rounded bg-[#73F2FF]/20 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-white/10 animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-white/10 animate-pulse" />
          <div className="h-4 w-3/5 rounded bg-white/10 animate-pulse" />
        </div>
      </div>

      {/* Position Skeletons */}
      {["Past", "Present", "Future"].map((position, index) => (
        <motion.div
          key={position}
          className="p-4 rounded-xl space-y-3"
          style={{
            background: "rgba(115, 242, 255, 0.05)",
            border: "1px solid rgba(115, 242, 255, 0.1)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Position Header */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-[#FF4FD8]/20 animate-pulse" />
            <div className="h-5 w-24 rounded bg-[#FF4FD8]/20 animate-pulse" />
          </div>

          {/* Insight */}
          <div className="space-y-1">
            <div className="h-3 w-20 rounded bg-[#73F2FF]/15 animate-pulse" />
            <div className="h-4 w-4/5 rounded bg-white/10 animate-pulse" />
          </div>

          {/* Deep Dive */}
          <div className="space-y-1.5">
            <div className="h-3 w-24 rounded bg-[#73F2FF]/15 animate-pulse" />
            <div className="h-4 w-full rounded bg-white/8 animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-white/8 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-white/8 animate-pulse" />
          </div>

          {/* Tags */}
          <div className="flex gap-2 pt-2">
            <div className="h-6 w-16 rounded-full bg-[#73F2FF]/10 animate-pulse" />
            <div className="h-6 w-20 rounded-full bg-[#73F2FF]/10 animate-pulse" />
            <div className="h-6 w-14 rounded-full bg-[#73F2FF]/10 animate-pulse" />
          </div>
        </motion.div>
      ))}

      {/* Loading text */}
      <motion.p
        className="text-center text-sm text-[#73F2FF]/60"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {loadingTexts[locale]}
      </motion.p>
    </motion.div>
  )
}
