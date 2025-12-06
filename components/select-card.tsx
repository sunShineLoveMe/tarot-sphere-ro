"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SelectCardProps {
  children: ReactNode
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}

export default function SelectCard({ children, selected = false, onClick, disabled = false }: SelectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full px-5 py-4 rounded-xl text-left font-medium
        transition-all duration-300 relative overflow-hidden
        ${disabled && !selected ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
      `}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      style={{
        background: selected
          ? "linear-gradient(135deg, rgba(255, 107, 213, 0.2) 0%, rgba(102, 239, 255, 0.2) 100%)"
          : "rgba(10, 10, 18, 0.7)",
        border: selected ? "2px solid transparent" : "2px solid rgba(102, 239, 255, 0.2)",
        borderImage: selected ? "linear-gradient(135deg, #FF6BD5, #66EFFF) 1" : "none",
        boxShadow: selected
          ? "0 0 20px rgba(255, 107, 213, 0.3), 0 0 40px rgba(102, 239, 255, 0.2), inset 0 0 20px rgba(255, 107, 213, 0.1)"
          : "0 0 10px rgba(0, 0, 0, 0.3)",
        color: selected ? "#fff" : "rgba(255, 255, 255, 0.8)",
      }}
    >
      {/* Selection glow pulse */}
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255, 107, 213, 0.1) 0%, rgba(102, 239, 255, 0.1) 100%)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Check indicator */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #FF6BD5, #66EFFF)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
      )}

      <span className="relative z-10 pr-8">{children}</span>
    </motion.button>
  )
}

export { SelectCard }
