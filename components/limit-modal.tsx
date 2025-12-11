"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { Sparkles, Moon, Home } from "lucide-react"
import Link from "next/link"

interface LimitModalProps {
  isOpen: boolean
  onClose: () => void
  type: "daily-limit" | "share-page" | "error"
}

export default function LimitModal({ isOpen, onClose, type }: LimitModalProps) {
  const { locale } = useI18n()

  // Mystical messages based on type
  const messages = {
    "daily-limit": {
      title: {
        en: "Your Energy Journey Awaits",
        zh: "你的能量之旅等待着你",
        ro: "Călătoria ta energetică te așteaptă",
      },
      message: {
        en: "Your energy insights for today are complete ✨ The stars will align again tomorrow for new guidance.",
        zh: "今日的能量洞察已完成 ✨ 明天星星会再次为你指引新的方向。",
        ro: "Perspectivele tale energetice pentru azi sunt complete ✨ Stelele se vor alinia din nou mâine.",
      },
      icon: Moon,
    },
    "share-page": {
      title: {
        en: "Begin Your Own Journey",
        zh: "开启你自己的旅程",
        ro: "Începe-ți propria călătorie",
      },
      message: {
        en: "To begin a new reading, return to the home page ✨",
        zh: "要开始新的占卜，请返回首页 ✨",
        ro: "Pentru a începe o nouă citire, reveniți la pagina principală ✨",
      },
      icon: Sparkles,
    },
    "error": {
      title: {
        en: "Something Went Wrong",
        zh: "出了点问题",
        ro: "Ceva nu a mers bine",
      },
      message: {
        en: "We couldn't complete your reading right now. Please try again in a few moments.",
        zh: "我们无法完成你的占卜。请稍后重试。",
        ro: "Nu am putut finaliza citirea ta acum. Vă rugăm să încercați din nou.",
      },
      icon: Moon,
    },
  }

  const content = messages[type]
  const Icon = content.icon
  const localeKey = locale as "en" | "zh" | "ro"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(26,10,46,0.95) 0%, rgba(15,10,32,0.98) 100%)",
              border: "1px solid rgba(255,79,216,0.3)",
              boxShadow: "0 0 60px rgba(255,79,216,0.2), 0 0 120px rgba(115,242,255,0.1)",
            }}
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(255,79,216,0.4) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative p-8 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", damping: 15 }}
                className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
                  border: "1px solid rgba(255,79,216,0.4)",
                }}
              >
                <Icon className="w-10 h-10 text-[#FF4FD8]" />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]"
              >
                {content.title[locale] || content.title.en}
              </motion.h2>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-foreground/80 leading-relaxed mb-8"
              >
                {content.message[locale] || content.message.en}
              </motion.p>

              {/* Decorative stars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-2 mb-8"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="w-1.5 h-1.5 rounded-full bg-[#73F2FF]/60"
                  />
                ))}
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-3"
              >
                {type === "share-page" ? (
                  <Link href="/">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white"
                      style={{
                        background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
                        boxShadow: "0 0 20px rgba(255,79,216,0.3)",
                      }}
                    >
                      <Home className="w-5 h-5" />
                      <span>{locale === "zh" ? "返回首页" : locale === "ro" ? "Înapoi Acasă" : "Return Home"}</span>
                    </motion.button>
                  </Link>
                ) : type === "error" ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white"
                    style={{
                      background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
                      boxShadow: "0 0 20px rgba(255,79,216,0.3)",
                    }}
                  >
                    <span>{locale === "zh" ? "重试" : locale === "ro" ? "Încearcă din nou" : "Try Again"}</span>
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full px-6 py-3 rounded-xl font-medium text-[#73F2FF]"
                    style={{
                      background: "rgba(115,242,255,0.1)",
                      border: "1px solid rgba(115,242,255,0.3)",
                    }}
                  >
                    {locale === "zh" ? "我知道了" : locale === "ro" ? "Am înțeles" : "I Understand"}
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
