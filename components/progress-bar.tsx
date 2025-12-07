"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex gap-2 justify-center items-center">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNum = index + 1
        const isActive = stepNum <= currentStep
        const isCurrent = stepNum === currentStep

        return (
          <div key={index} className="flex items-center gap-2">
            {/* Step indicator */}
            <motion.div
              className="relative"
              initial={false}
              animate={{
                scale: isCurrent ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, #FF6BD5 0%, #66EFFF 100%)"
                    : "rgba(102, 239, 255, 0.1)",
                  border: isActive ? "none" : "2px solid rgba(102, 239, 255, 0.3)",
                  color: isActive ? "white" : "rgba(102, 239, 255, 0.5)",
                  boxShadow: isCurrent
                    ? "0 0 20px rgba(255, 107, 213, 0.6), 0 0 40px rgba(102, 239, 255, 0.4)"
                    : "none",
                }}
              >
                {stepNum}
              </div>

              {isCurrent && (
                <motion.div
                  className="absolute -inset-1 rounded-full pointer-events-none"
                  style={{
                    border: "2px solid transparent",
                    background: "linear-gradient(135deg, rgba(255,107,213,0.4), rgba(102,239,255,0.4)) border-box",
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>

            {/* Connector line */}
            {index < totalSteps - 1 && (
              <div className="w-8 sm:w-12 h-0.5 rounded-full overflow-hidden bg-[#66EFFF]/20">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #FF6BD5, #66EFFF)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{
                    width: currentStep > stepNum ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export { ProgressBar }
