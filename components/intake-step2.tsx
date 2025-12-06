"use client"

import { motion, AnimatePresence } from "framer-motion"
import SelectCard from "./select-card"
import type { FocusTopic } from "./intake-flow"

interface IntakeStep2Props {
  value: FocusTopic[]
  onChange: (topics: FocusTopic[]) => void
  translations: {
    step2: {
      title: string
      subtitle: string
      options: Record<FocusTopic, string>
      maxWarning: string
    }
  }
}

const topicOptions: FocusTopic[] = ["future", "feelings", "reconciliation", "new_love", "guidance"]

export default function IntakeStep2({ value, onChange, translations }: IntakeStep2Props) {
  const handleToggle = (topic: FocusTopic) => {
    if (value.includes(topic)) {
      onChange(value.filter((t) => t !== topic))
    } else if (value.length < 2) {
      onChange([...value, topic])
    }
  }

  const showWarning = value.length >= 2

  return (
    <div className="space-y-6">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6BD5] to-[#66EFFF]"
        >
          {translations.step2.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-[#66EFFF]/70 mt-2"
        >
          {translations.step2.subtitle}
        </motion.p>
      </div>

      <div className="space-y-3">
        {topicOptions.map((topic, index) => (
          <motion.div
            key={topic}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            <SelectCard
              selected={value.includes(topic)}
              onClick={() => handleToggle(topic)}
              disabled={!value.includes(topic) && value.length >= 2}
            >
              {translations.step2.options[topic]}
            </SelectCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showWarning && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-sm text-[#FF6BD5]/80 px-4 py-2 rounded-lg bg-[#FF6BD5]/10 border border-[#FF6BD5]/20"
          >
            {translations.step2.maxWarning}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
