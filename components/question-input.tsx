"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { Heart } from "lucide-react"

interface QuestionInputProps {
  value: string
  onChange: (value: string) => void
}

export default function QuestionInput({ value, onChange }: QuestionInputProps) {
  const { t } = useI18n()

  return (
    <motion.div
      className="w-full max-w-md mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div
        className="relative rounded-2xl p-[1px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255,79,216,0.5) 0%, rgba(115,242,255,0.5) 100%)",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.2)",
              "0 0 25px rgba(255,79,216,0.4), 0 0 40px rgba(115,242,255,0.3)",
              "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div
          className="relative rounded-2xl p-4"
          style={{
            background: "rgba(15,10,32,0.85)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-[#FF4FD8]" />
            <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] font-medium">
              {t.questionInput.label}
            </span>
          </div>

          {/* Input */}
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={t.questionInput.placeholder}
            className="w-full bg-transparent text-foreground/90 text-sm placeholder:text-foreground/30 resize-none focus:outline-none"
            rows={2}
            style={{
              caretColor: "#FF4FD8",
            }}
          />

          {/* Optional indicator */}
          <p className="text-[10px] text-[#73F2FF]/50 mt-2 text-right">{t.questionInput.optional}</p>
        </div>
      </div>
    </motion.div>
  )
}
