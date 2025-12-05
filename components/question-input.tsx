"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { Heart, Sparkles } from "lucide-react"

interface QuestionInputProps {
  value: string
  onChange: (value: string) => void
}

const MAX_CHARACTERS = 140

// Energy particle component for mystical effect
function EnergyParticle({ delay, size, color }: { delay: number; size: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${size / 3}px)`,
      }}
      initial={{
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
        y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export default function QuestionInput({ value, onChange }: QuestionInputProps) {
  const { t, locale } = useI18n()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [hasContent, setHasContent] = useState(false)

  const charCount = value.length
  const isOverLimit = charCount > MAX_CHARACTERS
  const isNearLimit = charCount > MAX_CHARACTERS * 0.85

  // Multi-language placeholders
  const placeholder = useMemo(() => {
    switch (locale) {
      case "zh":
        return "说说你心里的爱情问题…"
      case "ro":
        return "Pune o întrebare despre dragoste…"
      default:
        return "Ask a question about love…"
    }
  }, [locale])

  // Auto-grow textarea
  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      const scrollHeight = textarea.scrollHeight
      // Max 3 lines (approximately 72px at 16px line-height * 1.5)
      const maxHeight = 96
      textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`
    }
  }, [value])

  // Update hasContent state
  useEffect(() => {
    setHasContent(value.length > 0)
  }, [value])

  // Handle input with character limit
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (newValue.length <= MAX_CHARACTERS) {
      onChange(newValue)
    }
  }

  // Energy particles for focused state
  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      delay: i * 0.4,
      size: 4 + Math.random() * 4,
      color: i % 2 === 0 ? "rgba(255, 79, 216, 0.6)" : "rgba(115, 242, 255, 0.6)",
    }))
  }, [])

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
          background: isOverLimit
            ? "linear-gradient(135deg, rgba(255,100,100,0.6) 0%, rgba(255,79,216,0.5) 100%)"
            : "linear-gradient(135deg, rgba(255,79,216,0.5) 0%, rgba(115,242,255,0.5) 100%)",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isFocused
              ? [
                  "0 0 20px rgba(255,79,216,0.5), 0 0 40px rgba(115,242,255,0.3)",
                  "0 0 30px rgba(255,79,216,0.6), 0 0 50px rgba(115,242,255,0.4)",
                  "0 0 20px rgba(255,79,216,0.5), 0 0 40px rgba(115,242,255,0.3)",
                ]
              : [
                  "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.2)",
                  "0 0 20px rgba(255,79,216,0.35), 0 0 35px rgba(115,242,255,0.25)",
                  "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.2)",
                ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Energy particles when focused */}
        <AnimatePresence>
          {isFocused && (
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {particles.map((particle) => (
                <EnergyParticle key={particle.id} delay={particle.delay} size={particle.size} color={particle.color} />
              ))}
            </div>
          )}
        </AnimatePresence>

        <div
          className="relative rounded-2xl p-5"
          style={{
            background: "rgba(15,10,32,0.9)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Floating Label */}
          <motion.div
            className="flex items-center gap-2 mb-3"
            animate={{
              y: hasContent || isFocused ? 0 : 8,
              scale: hasContent || isFocused ? 1 : 0.95,
              opacity: hasContent || isFocused ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.div
              animate={{
                rotate: isFocused ? [0, -10, 10, 0] : 0,
                scale: isFocused ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="w-4 h-4 text-[#FF4FD8]" />
            </motion.div>
            <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] font-medium">
              {t.questionInput.label}
            </span>
            {isFocused && (
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                <Sparkles className="w-3 h-3 text-[#73F2FF]" />
              </motion.div>
            )}
          </motion.div>

          {/* Textarea with enhanced styling */}
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              maxLength={MAX_CHARACTERS}
              className="w-full bg-transparent text-foreground/90 placeholder:text-foreground/30 resize-none focus:outline-none leading-relaxed"
              rows={1}
              style={{
                caretColor: "#FF4FD8",
                fontSize: "1rem",
                padding: "0.5rem 0",
                minHeight: "2.5rem",
                lineHeight: "1.6",
              }}
            />

            {/* Animated cursor glow effect when focused and empty */}
            {isFocused && !hasContent && (
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, #FF4FD8, #73F2FF)",
                }}
                animate={{
                  opacity: [1, 0.3, 1],
                  boxShadow: [
                    "0 0 8px rgba(255,79,216,0.8)",
                    "0 0 4px rgba(255,79,216,0.4)",
                    "0 0 8px rgba(255,79,216,0.8)",
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>

          {/* Bottom row: Optional label and character counter */}
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#73F2FF]/10">
            <p className="text-[10px] text-[#73F2FF]/50 uppercase tracking-wider">{t.questionInput.optional}</p>

            {/* Character counter */}
            <motion.div
              className="flex items-center gap-1"
              animate={{
                color: isOverLimit ? "#ff6b6b" : isNearLimit ? "#FFD93D" : "rgba(115, 242, 255, 0.5)",
              }}
            >
              <motion.span
                className="text-xs font-mono"
                animate={{
                  textShadow: isOverLimit
                    ? ["0 0 8px rgba(255,100,100,0.8)", "0 0 12px rgba(255,100,100,1)", "0 0 8px rgba(255,100,100,0.8)"]
                    : "none",
                }}
                transition={{ duration: 0.5, repeat: isOverLimit ? Infinity : 0 }}
              >
                {charCount}
              </motion.span>
              <span className="text-xs font-mono opacity-50">/</span>
              <span className="text-xs font-mono opacity-50">{MAX_CHARACTERS}</span>
            </motion.div>
          </div>

          {/* Over limit warning */}
          <AnimatePresence>
            {isOverLimit && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-xs text-[#FF4FD8]/80 flex items-center gap-1"
              >
                <span>✨</span>
                <span>Keep it concise for a clearer reading</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
