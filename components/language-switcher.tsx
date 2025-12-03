"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { useI18n } from "@/lib/i18n/context"
import { locales, localeNames, localeFlags } from "@/lib/i18n/locales"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "rgba(115,242,255,0.1)",
          border: "1px solid rgba(115,242,255,0.3)",
          color: "#73F2FF",
        }}
      >
        <Globe className="w-4 h-4" />
        <span>{localeFlags[locale]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 py-2 rounded-xl overflow-hidden min-w-[140px]"
            style={{
              background: "linear-gradient(135deg, rgba(26,10,46,0.98) 0%, rgba(15,10,32,0.98) 100%)",
              border: "1px solid rgba(255,79,216,0.3)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,79,216,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            {locales.map((loc) => (
              <motion.button
                key={loc}
                onClick={() => {
                  setLocale(loc)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                  locale === loc ? "text-[#FF4FD8]" : "text-foreground/80 hover:text-[#73F2FF]"
                }`}
                whileHover={{ x: 4, backgroundColor: "rgba(115,242,255,0.1)" }}
              >
                <span className="text-base">{localeFlags[loc]}</span>
                <span>{localeNames[loc]}</span>
                {locale === loc && (
                  <motion.span layoutId="activeLocale" className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF4FD8]" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
