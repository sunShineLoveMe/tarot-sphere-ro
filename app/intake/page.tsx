"use client"

import { I18nProvider } from "@/lib/i18n/context"
import IntakeFlow from "@/components/intake-flow"

export default function IntakePage() {
  return (
    <I18nProvider>
      <IntakeFlow />
    </I18nProvider>
  )
}
