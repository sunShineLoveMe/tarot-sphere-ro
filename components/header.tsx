"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { LogoIcon } from "./logo-icon"
import LanguageSwitcher from "./language-switcher"
import { Sparkles } from "lucide-react"

interface HeaderProps {
  className?: string
}

export function Header({ className = "" }: HeaderProps) {
  const { t } = useI18n()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(10,10,26,0.9) 0%, rgba(10,10,26,0.7) 50%, transparent 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group cursor-pointer">
          <LogoIcon size={32} className="logo-neon md:w-9 md:h-9" />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#FF4FD8] group-hover:opacity-90 transition-opacity">
              Love Tarot
            </span>
            <span className="hidden sm:block text-[10px] text-[#73F2FF]/50 -mt-0.5">{t.hero.aiSubtitle}</span>
          </div>
        </Link>

        {/* Right: Hub Page Link + Language Switcher */}
        <div className="flex items-center gap-3 md:gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link 
              href="/love-tarot-reading" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: "rgba(115,242,255,0.08)",
                border: "1px solid rgba(115,242,255,0.3)",
                color: "#73F2FF",
                textShadow: "0 0 10px rgba(115,242,255,0.5)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t.nav.hub}
            </Link>
          </motion.div>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  )
}

export default Header
