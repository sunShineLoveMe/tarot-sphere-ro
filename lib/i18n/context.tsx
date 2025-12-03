"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { type Locale, defaultLocale, isValidLocale } from "./locales"
import { getTranslations, type Translations } from "./translations"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    if (isValidLocale(newLocale)) {
      setLocaleState(newLocale)
      const url = new URL(window.location.href)
      url.pathname = `/${newLocale}${url.pathname.replace(/^\/(en|zh)/, "")}`
      window.history.pushState({}, "", url.toString())
    }
  }, [])

  const t = getTranslations(locale)

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
