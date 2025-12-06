"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface IntakeStep3Props {
  value: string
  onChange: (question: string) => void
  translations: {
    step3: {
      title: string
      subtitle: string
      placeholder: string
      charLimit: string
    }
  }
}

const MAX_CHARS = 140

export default function IntakeStep3({ value, onChange, translations }: IntakeStep3Props) {
  const [isFocused, setIsFocused] = useState(false)
  const charCount = value.length
  const isOverLimit = charCount > MAX_CHARS

  return (
    <div className="space-y-6">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6BD5] to-[#66EFFF]"
        >
          {translations.step3.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-[#66EFFF]/70 mt-2"
        >
          {translations.step3.subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={translations.step3.placeholder}
          rows={4}
          className="w-full px-4 py-4 rounded-xl text-white placeholder-white/40 resize-none transition-all duration-300"
          style={{
            background: "rgba(10, 10, 18, 0.8)",
            border: isFocused ? "2px solid transparent" : "2px solid rgba(102, 239, 255, 0.3)",
            borderImage: isFocused ? "linear-gradient(135deg, #FF6BD5, #66EFFF) 1" : "none",
            boxShadow: isFocused
              ? "0 0 20px rgba(255, 107, 213, 0.3), 0 0 40px rgba(102, 239, 255, 0.2)"
              : "0 0 10px rgba(102, 239, 255, 0.1)",
            outline: "none",
          }}
        />

        {/* Character Counter */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span className={`text-sm transition-colors ${isOverLimit ? "text-red-400" : "text-[#66EFFF]/50"}`}>
            {charCount} / {MAX_CHARS}
          </span>
        </div>
      </motion.div>

      {/* Over limit warning */}
      {isOverLimit && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-red-400 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20"
        >
          {translations.step3.charLimit}
        </motion.p>
      )}
    </div>
  )
}
