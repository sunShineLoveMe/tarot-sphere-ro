"use client"

import { useState, useCallback, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useI18n } from "@/lib/i18n/context"
import MagicBackground from "./magic-background"
import ParticleField from "./particle-field"
import LanguageSwitcher from "./language-switcher"
import IntakeStep1 from "./intake-step1"
import IntakeStep2 from "./intake-step2"
import IntakeStep3 from "./intake-step3"
import ProgressBar from "./progress-bar"
import GlowButton from "./glow-button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LogoIcon } from "./logo-icon"

export type RelationshipStatus = "single" | "relationship" | "complicated" | "breakup" | "married"
export type FocusTopic = "future" | "feelings" | "reconciliation" | "new_love" | "guidance"

export interface LoveTarotInput {
  language: "en" | "ro" | "zh"
  relationshipStatus: RelationshipStatus
  focusTopics: FocusTopic[]
  userQuestion?: string
}

export default function IntakeFlow() {
  const { t, locale } = useI18n()
  const router = useRouter()

  const [currentStep, setCurrentStep] = useState(1)
  const [relationshipStatus, setRelationshipStatus] = useState<RelationshipStatus | null>(null)
  const [focusTopics, setFocusTopics] = useState<FocusTopic[]>([])
  const [userQuestion, setUserQuestion] = useState("")
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  const intakeT = useMemo(() => {
    return t.intake || getDefaultIntakeTranslations(locale)
  }, [t, locale])

  const handleNext = useCallback(() => {
    if (currentStep < 3) {
      setDirection("forward")
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep])

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setDirection("backward")
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const handleComplete = useCallback(() => {
    if (!relationshipStatus) return

    const input: LoveTarotInput = {
      language: locale as "en" | "ro" | "zh",
      relationshipStatus,
      focusTopics,
      userQuestion: userQuestion.trim() || undefined,
    }

    // Store intake data in sessionStorage and navigate to tarot reading
    sessionStorage.setItem("loveTarotInput", JSON.stringify(input))
    router.push("/?startReading=true")
  }, [locale, relationshipStatus, focusTopics, userQuestion, router])

  const canProceedStep1 = relationshipStatus !== null
  const canProceedStep2 = focusTopics.length >= 1 && focusTopics.length <= 2

  const slideVariants = {
    enter: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <MagicBackground />
      <ParticleField intensity={1.5} />

      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
          style={{
            background: "rgba(115,242,255,0.1)",
            border: "1px solid rgba(115,242,255,0.3)",
            color: "#73F2FF",
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{t.nav.home}</span>
        </Link>

        <div className="flex items-center gap-3">
          <LogoIcon size={32} className="logo-neon hidden sm:block" />
          <LanguageSwitcher />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-20 left-4 right-4 z-40">
        <ProgressBar currentStep={currentStep} totalSteps={3} />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-32">
        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full max-w-lg"
            >
              <IntakeStep1 value={relationshipStatus} onChange={setRelationshipStatus} translations={intakeT} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full max-w-lg"
            >
              <IntakeStep2 value={focusTopics} onChange={setFocusTopics} translations={intakeT} />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full max-w-lg"
            >
              <IntakeStep3 value={userQuestion} onChange={setUserQuestion} translations={intakeT} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="fixed bottom-6 left-4 right-4 z-50 flex gap-4 max-w-lg mx-auto">
        {currentStep > 1 && (
          <GlowButton onClick={handleBack} variant="secondary" className="flex-1">
            {intakeT.buttons.back}
          </GlowButton>
        )}

        {currentStep < 3 ? (
          <GlowButton
            onClick={handleNext}
            disabled={currentStep === 1 ? !canProceedStep1 : !canProceedStep2}
            className="flex-1"
          >
            {intakeT.buttons.next}
          </GlowButton>
        ) : (
          <GlowButton onClick={handleComplete} disabled={!canProceedStep1} className="flex-1">
            {intakeT.buttons.beginShuffle}
          </GlowButton>
        )}
      </div>
    </div>
  )
}

// Default translations for intake flow
function getDefaultIntakeTranslations(locale: string) {
  const translations = {
    en: {
      step1: {
        title: "Where are you in love right now?",
        options: {
          single: "Single – looking for love",
          relationship: "In a relationship",
          complicated: "It's complicated / situationship",
          breakup: "Recently broke up / no contact",
          married: "Married / long-term partner",
        },
      },
      step2: {
        title: "What do you want guidance on?",
        subtitle: "Select 1-2 topics",
        options: {
          future: "Future of this connection",
          feelings: "Their feelings & intentions",
          reconciliation: "Chances of reconciliation",
          new_love: "New love entering my life",
          guidance: "General love guidance",
        },
        maxWarning: "Choose up to 2 topics for a clearer reading.",
      },
      step3: {
        title: "What's on your heart?",
        subtitle: "Optional",
        placeholder: "Example: We haven't talked in 2 weeks…",
        charLimit: "Try to keep it under 140 characters.",
      },
      buttons: {
        back: "Back",
        next: "Next",
        beginShuffle: "Begin Shuffle ✦",
      },
    },
    ro: {
      step1: {
        title: "În ce punct ești în dragoste acum?",
        options: {
          single: "Singur(ă) – caut iubire",
          relationship: "Într-o relație",
          complicated: "Este complicat",
          breakup: "Despărțire recentă / fără contact",
          married: "Căsătorit(ă) / relație pe termen lung",
        },
      },
      step2: {
        title: "Despre ce ai nevoie de îndrumare?",
        subtitle: "Selectează 1-2 subiecte",
        options: {
          future: "Viitorul acestei conexiuni",
          feelings: "Sentimentele și intențiile lor",
          reconciliation: "Șansele de reconciliere",
          new_love: "Iubire nouă în viața mea",
          guidance: "Îndrumare generală în dragoste",
        },
        maxWarning: "Alege maximum 2 pentru o citire mai clară.",
      },
      step3: {
        title: "Ce ai pe suflet?",
        subtitle: "Opțional",
        placeholder: "Exemplu: Nu am vorbit de 2 săptămâni…",
        charLimit: "Păstrează textul sub 140 de caractere.",
      },
      buttons: {
        back: "Înapoi",
        next: "Următorul",
        beginShuffle: "Începe Amestecarea ✦",
      },
    },
    zh: {
      step1: {
        title: "你目前的爱情状态是？",
        options: {
          single: "单身，期待爱情",
          relationship: "恋爱中",
          complicated: "关系复杂",
          breakup: "刚分手 / 断联",
          married: "已婚 / 长期关系",
        },
      },
      step2: {
        title: "你想获得哪方面的指引？",
        subtitle: "选择 1-2 项",
        options: {
          future: "这段关系的未来",
          feelings: "对方的感受和意图",
          reconciliation: "复合的可能性",
          new_love: "新恋情的到来",
          guidance: "一般爱情指引",
        },
        maxWarning: "最多选择 2 项，以便给出更清晰的解读。",
      },
      step3: {
        title: "你心里想问的问题是？",
        subtitle: "可选",
        placeholder: "例如：我们已经两周没有联系了…",
        charLimit: "请保持在 140 字以内。",
      },
      buttons: {
        back: "返回",
        next: "下一步",
        beginShuffle: "开始洗牌 ✦",
      },
    },
  }

  return translations[locale as keyof typeof translations] || translations.en
}

export { getDefaultIntakeTranslations }
