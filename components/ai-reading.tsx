"use client"

import { motion } from "framer-motion"
import type { ReadingContent } from "@/lib/gemini/types"

interface AIReadingProps {
  reading: ReadingContent
  locale?: "en" | "zh" | "ro"
}

export function AIReading({ reading, locale = "en" }: AIReadingProps) {
  const sectionLabels = {
    en: {
      overview: "✨ Overall Energy",
      past: "⏳ Past",
      present: "🌟 Present",
      future: "🔮 Future",
      synthesis: "🔗 Synthesis",
      advice: "💡 Advice",
      affirmation: "💝 Your Affirmation",
    },
    zh: {
      overview: "✨ 整体能量",
      past: "⏳ 过去",
      present: "🌟 现在",
      future: "🔮 未来",
      synthesis: "🔗 综合解读",
      advice: "💡 建议",
      affirmation: "💝 每日肯定语",
    },
    ro: {
      overview: "✨ Energia Generală",
      past: "⏳ Trecut",
      present: "🌟 Prezent",
      future: "🔮 Viitor",
      synthesis: "🔗 Sinteză",
      advice: "💡 Sfat",
      affirmation: "💝 Afirmația Ta",
    },
  }

  const labels = sectionLabels[locale]
  const positionLabelMap = {
    past: labels.past,
    present: labels.present,
    future: labels.future,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Overview Section */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h3
          className="text-lg font-semibold"
          style={{
            background: "linear-gradient(135deg, #FF4FD8, #73F2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {labels.overview}
        </h3>
        <p className="text-white/90 leading-relaxed">{reading.overview}</p>
      </motion.div>

      {/* Card Interpretations */}
      {reading.cards.map((card, index) => (
        <motion.div
          key={card.position}
          variants={itemVariants}
          className="p-4 rounded-xl space-y-2"
          style={{
            background: "rgba(115, 242, 255, 0.05)",
            border: "1px solid rgba(115, 242, 255, 0.15)",
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#FF4FD8] font-medium">
              {positionLabelMap[card.position as keyof typeof positionLabelMap]}
            </h4>
            <span className="text-[#73F2FF] text-sm">{card.cardName}</span>
          </div>
          <p className="text-white/85 text-sm leading-relaxed">{card.interpretation}</p>
        </motion.div>
      ))}

      {/* Synthesis Section */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h3 className="text-[#FF4FD8] font-semibold">{labels.synthesis}</h3>
        <p className="text-white/90 leading-relaxed">{reading.synthesis}</p>
      </motion.div>

      {/* Advice Section */}
      <motion.div
        variants={itemVariants}
        className="p-4 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(255, 79, 216, 0.1), rgba(115, 242, 255, 0.1))",
          border: "1px solid rgba(255, 79, 216, 0.2)",
        }}
      >
        <h3 className="text-[#73F2FF] font-semibold mb-2">{labels.advice}</h3>
        <p className="text-white/90 leading-relaxed">{reading.advice}</p>
      </motion.div>

      {/* Affirmation Section */}
      <motion.div
        variants={itemVariants}
        className="text-center p-6 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(255, 79, 216, 0.15), rgba(115, 242, 255, 0.15))",
          border: "1px solid rgba(255, 79, 216, 0.3)",
          boxShadow: "0 0 30px rgba(255, 79, 216, 0.2)",
        }}
      >
        <p className="text-xs text-[#73F2FF] uppercase tracking-wider mb-2">{labels.affirmation}</p>
        <p
          className="text-lg font-medium italic"
          style={{
            background: "linear-gradient(135deg, #FF4FD8, #73F2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          "{reading.affirmation}"
        </p>
      </motion.div>
    </motion.div>
  )
}
