"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlowButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: "primary" | "secondary"
  className?: string
}

export default function GlowButton({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}: GlowButtonProps) {
  const isPrimary = variant === "primary"

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-4 rounded-full font-medium text-base
        flex items-center justify-center gap-2
        transition-all duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.96 }}
      style={{
        background: isPrimary ? "linear-gradient(135deg, #FF6BD5 0%, #66EFFF 100%)" : "rgba(102, 239, 255, 0.1)",
        border: isPrimary ? "none" : "1px solid rgba(102, 239, 255, 0.3)",
        color: isPrimary ? "white" : "#66EFFF",
        boxShadow:
          isPrimary && !disabled ? "0 0 20px rgba(255, 107, 213, 0.4), 0 0 40px rgba(102, 239, 255, 0.2)" : "none",
      }}
    >
      {/* Glow pulse animation for primary variant */}
      {isPrimary && !disabled && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #FF6BD5 0%, #66EFFF 100%)",
            opacity: 0.5,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
      {children}
    </motion.button>
  )
}

export { GlowButton }
