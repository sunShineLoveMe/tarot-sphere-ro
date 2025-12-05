"use client"

import { Suspense } from "react"
import ReadingResultContent from "@/components/reading-result-content"
import { I18nProvider } from "@/lib/i18n/context"


export default function ReadingResultPage() {
  return (
    <I18nProvider>
      <Suspense fallback={<div className="min-h-screen bg-[#0a0612]" />}>
        <ReadingResultContent />
      </Suspense>
    </I18nProvider>
  )
}
