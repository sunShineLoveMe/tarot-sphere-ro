"use client"

import { motion } from "framer-motion"
import type { FormationType } from "./tarot-sphere"

interface FormationToggleProps {
  current: FormationType
  onChange: (type: FormationType) => void
}

export default function FormationToggle({ current, onChange }: FormationToggleProps) {
  return (
    <motion.div
      className="absolute top-24 left-1/2 -translate-x-1/2 z-40 flex gap-2 p-1 rounded-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{
        background: "rgba(15,10,32,0.8)",
        border: "1px solid rgba(255,79,216,0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <button
        onClick={() => onChange("sphere")}
        className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${
          current === "sphere" ? "text-[#73F2FF]" : "text-[#FF4FD8]/60"
        }`}
      >
        {current === "sphere" && (
          <motion.span
            className="absolute inset-0 rounded-full"
            layoutId="formationIndicator"
            style={{
              background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
              border: "1px solid rgba(115,242,255,0.5)",
            }}
          />
        )}
        <span className="relative z-10">Sphere</span>
      </button>
      <button
        onClick={() => onChange("ring")}
        className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${
          current === "ring" ? "text-[#73F2FF]" : "text-[#FF4FD8]/60"
        }`}
      >
        {current === "ring" && (
          <motion.span
            className="absolute inset-0 rounded-full"
            layoutId="formationIndicator"
            style={{
              background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
              border: "1px solid rgba(115,242,255,0.5)",
            }}
          />
        )}
        <span className="relative z-10">Ring</span>
      </button>
    </motion.div>
  )
}
