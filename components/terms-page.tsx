"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { I18nProvider } from "@/lib/i18n/context"
import MagicBackground from "./magic-background"
import LanguageSwitcher from "./language-switcher"
import { ArrowLeft, ChevronDown, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div
      className="rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
        border: "1px solid rgba(255,79,216,0.2)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-[#73F2FF]">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <ChevronDown className="w-5 h-5 text-[#FF4FD8]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="px-6 pb-4 text-foreground/70 text-sm leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function TermsContent() {
  const { t } = useI18n()

  return (
    <div className="relative min-h-screen">
      <MagicBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[#73F2FF] border border-[#73F2FF]/30 hover:bg-[#73F2FF]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </motion.button>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Content */}
      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-[700px] mx-auto">
          {/* Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <FileText className="w-8 h-8 text-[#FF4FD8]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-2">
              {t.legal.terms.title}
            </h1>
            <p className="text-foreground/50 text-sm">{t.legal.terms.lastUpdated}</p>
          </motion.div>

          {/* Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <AccordionItem title={t.legal.terms.sections.acceptance.title} defaultOpen>
              <p>{t.legal.terms.sections.acceptance.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.description.title}>
              <p>{t.legal.terms.sections.description.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.noAdvice.title}>
              <p>{t.legal.terms.sections.noAdvice.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.eligibility.title}>
              <p>{t.legal.terms.sections.eligibility.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.userResponsibilities.title}>
              <p className="mb-3">{t.legal.terms.sections.userResponsibilities.content}</p>
              <ul className="list-disc list-inside space-y-2">
                {t.legal.terms.sections.userResponsibilities.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.aiDisclaimer.title}>
              <p>{t.legal.terms.sections.aiDisclaimer.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.limitation.title}>
              <p>{t.legal.terms.sections.limitation.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.intellectualProperty.title}>
              <p>{t.legal.terms.sections.intellectualProperty.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.termination.title}>
              <p>{t.legal.terms.sections.termination.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.governingLaw.title}>
              <p>{t.legal.terms.sections.governingLaw.content}</p>
            </AccordionItem>

            <AccordionItem title={t.legal.terms.sections.contact.title}>
              <p>{t.legal.terms.sections.contact.content}</p>
            </AccordionItem>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default function TermsPage() {
  return (
    <I18nProvider>
      <TermsContent />
    </I18nProvider>
  )
}
