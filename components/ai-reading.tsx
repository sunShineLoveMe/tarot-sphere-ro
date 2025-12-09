"use client"

import { motion } from "framer-motion"
import { Sparkles, Moon, Sun, Star } from "lucide-react"
import type { ReadingContent, PositionInsight } from "@/lib/gemini/types"

interface AIReadingProps {
  reading: ReadingContent
  locale?: "en" | "zh" | "ro"
}

const positionIcons = {
  past: Moon,
  present: Sun,
  future: Star,
}

const positionLabels = {
  en: { past: "Past Influences", present: "Present Situation", future: "Future Path" },
  zh: { past: "过去的影响", present: "当前状况", future: "未来之路" },
  ro: { past: "Influențe Trecute", present: "Situația Prezentă", future: "Calea Viitoare" },
}

const sectionLabels = {
  en: { insight: "Insight", deepDive: "Deep Dive", tags: "Keywords" },
  zh: { insight: "洞察", deepDive: "深入解读", tags: "关键词" },
  ro: { insight: "Perspectivă", deepDive: "Analiză", tags: "Cuvinte Cheie" },
}

const overallEnergyLabels = {
  en: "Overall Energy",
  zh: "整体能量",
  ro: "Energia Generală",
}

export function AIReading({ reading, locale = "en" }: AIReadingProps) {
  const labels = positionLabels[locale]
  const sections = sectionLabels[locale]
  const overallLabel = overallEnergyLabels[locale]

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Overall Energy */}
      <motion.div
        className="p-5 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255, 79, 216, 0.1), rgba(115, 242, 255, 0.1))",
          border: "1px solid rgba(115, 242, 255, 0.2)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-[#FF4FD8]" />
          <h3 className="text-sm font-semibold text-[#FF4FD8] uppercase tracking-wider">
            {overallLabel}
          </h3>
        </div>
        <p className="text-white/90 leading-relaxed">{reading.overallEnergy}</p>
      </motion.div>

      {/* Position Insights */}
      {(["past", "present", "future"] as const).map((position, index) => {
        const Icon = positionIcons[position]
        const data = reading[position]
        const colors = {
          past: { primary: "#A855F7", bg: "rgba(168, 85, 247, 0.1)", border: "rgba(168, 85, 247, 0.2)" },
          present: { primary: "#FF4FD8", bg: "rgba(255, 79, 216, 0.1)", border: "rgba(255, 79, 216, 0.2)" },
          future: { primary: "#73F2FF", bg: "rgba(115, 242, 255, 0.1)", border: "rgba(115, 242, 255, 0.2)" },
        }
        const color = colors[position]

        return (
          <PositionCard
            key={position}
            icon={<Icon className="w-5 h-5" style={{ color: color.primary }} />}
            title={labels[position]}
            data={data}
            color={color}
            sections={sections}
            delay={0.2 + index * 0.15}
          />
        )
      })}
    </motion.div>
  )
}

interface PositionCardProps {
  icon: React.ReactNode
  title: string
  data: PositionInsight
  color: { primary: string; bg: string; border: string }
  sections: { insight: string; deepDive: string; tags: string }
  delay: number
}

function PositionCard({ icon, title, data, color, sections, delay }: PositionCardProps) {
  return (
    <motion.div
      className="p-5 rounded-xl"
      style={{
        background: color.bg,
        border: `1px solid ${color.border}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: color.primary }}>
          {title}
        </h3>
      </div>

      {/* Insight */}
      <div className="mb-4">
        <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{sections.insight}</p>
        <p className="text-white/90 font-medium">{data.insight}</p>
      </div>

      {/* Deep Dive */}
      <div className="mb-4">
        <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{sections.deepDive}</p>
        <p className="text-white/70 text-sm leading-relaxed">{data.deepDive}</p>
      </div>

      {/* Tags */}
      <div>
        <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">{sections.tags}</p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="px-3 py-1 rounded-full text-xs"
              style={{
                background: `${color.primary}15`,
                color: color.primary,
                border: `1px solid ${color.primary}30`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.1 + i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
