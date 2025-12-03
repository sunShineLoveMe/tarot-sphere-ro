"use client"

import { motion } from "framer-motion"

interface StartButtonProps {
  onStart: () => void
}

export default function StartButton({ onStart }: StartButtonProps) {
  return (
    <motion.div
      className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.button
        onClick={onStart}
        className="relative px-10 py-4 rounded-full font-semibold text-lg tracking-wider overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
          border: "2px solid transparent",
          backgroundClip: "padding-box",
        }}
      >
        {/* Animated border */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #FF4FD8, #73F2FF, #FF4FD8)",
            backgroundSize: "200% 100%",
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Glow effect */}
        <motion.span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: "0 0 30px rgba(255,79,216,0.5), 0 0 60px rgba(115,242,255,0.3)",
          }}
        />

        {/* Button text */}
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]">
          ✧ Start Shuffle ✧
        </span>
      </motion.button>
    </motion.div>
  )
}
