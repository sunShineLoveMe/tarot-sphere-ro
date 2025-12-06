"use client"

import { motion } from "framer-motion"
import SelectCard from "./select-card"
import type { RelationshipStatus } from "./intake-flow"

interface IntakeStep1Props {
  value: RelationshipStatus | null
  onChange: (status: RelationshipStatus) => void
  translations: {
    step1: {
      title: string
      options: Record<RelationshipStatus, string>
    }
  }
}

const statusOptions: RelationshipStatus[] = ["single", "relationship", "complicated", "breakup", "married"]

export default function IntakeStep1({ value, onChange, translations }: IntakeStep1Props) {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl sm:text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF6BD5] to-[#66EFFF]"
      >
        {translations.step1.title}
      </motion.h2>

      <div className="space-y-3">
        {statusOptions.map((status, index) => (
          <motion.div
            key={status}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + index * 0.05 }}
          >
            <SelectCard selected={value === status} onClick={() => onChange(status)}>
              {translations.step1.options[status]}
            </SelectCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
