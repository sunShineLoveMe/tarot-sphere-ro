"use client"

import { motion } from "framer-motion"

interface TagLangProps {
  lang: "en" | "ro" | "zh"
  size?: "sm" | "md"
}

const langConfig = {
  en: { label: "EN", flag: "🇬🇧", color: "#73F2FF" },
  ro: { label: "RO", flag: "🇷🇴", color: "#FF4FD8" },
  zh: { label: "中文", flag: "🇨🇳", color: "#a855f7" },
}

export default function TagLang({ lang, size = "sm" }: TagLangProps) {
  const config = langConfig[lang]
  const sizeClasses = size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClasses}`}
      style={{
        background: `${config.color}15`,
        border: `1px solid ${config.color}40`,
        color: config.color,
      }}
    >
      <span>{config.flag}</span>
      <span>{config.label}</span>
    </motion.span>
  )
}

export { TagLang }
