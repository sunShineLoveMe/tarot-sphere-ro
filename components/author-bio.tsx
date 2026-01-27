"use client"

import { useI18n } from "@/lib/i18n/context"
import { motion } from "framer-motion"
import Image from "next/image"

export function AuthorBio() {
  const { locale } = useI18n()
  
  const content = {
    en: {
      name: "Aria Nightwood",
      bio: "Aria Nightwood is a globally recognized Tarot Consultant and Emotional Wellness Guide. With a background in psychological archetypes and esoteric wisdom, she provides heart-centered guidance that empowers individuals across cultures to find clarity, purpose, and self-love.",
      role: "Global Tarot & Wellness Expert"
    },
    ro: {
      name: "Aria Nightwood",
      bio: "Aria Nightwood este o consultantă în Tarot și ghid în bunăstare emoțională recunoscută la nivel global. Având o experiență în arhetipuri psihologice și înțelepciune ezoterică, ea oferă îndrumări centrate pe inimă care permit indivizilor din diverse culturi să găsească claritate, scop și iubire de sine.",
      role: "Expert Global în Tarot și Bunăstare"
    },
    zh: {
      name: "Aria Nightwood",
      bio: "Aria Nightwood 是一位享誉全球的塔罗顾问与情感疗愈导师。凭借深厚的心理原型研究及秘传智慧背景，她致力于提供深度的心灵指引，赋能来自不同文化背景的人们，帮助他们寻找清晰的方向、生命的意义与真挚的自我关爱。",
      role: "全球塔罗与身心灵专家"
    }
  }

  const current = content[locale as keyof typeof content] || content.en

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#1a0a2e]/60 border border-[#73F2FF]/20"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#FF4FD8]/40 shrink-0">
          <Image
            src="/author-avatar.png"
            alt={current.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-[#73F2FF] mb-1">{current.name}</h4>
          <p className="text-xs text-[#FF4FD8] uppercase tracking-wider font-medium mb-3">{current.role}</p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {current.bio}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
