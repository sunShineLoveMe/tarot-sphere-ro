export const locales = ["en", "ro", "zh"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  ro: "Română",
  zh: "中文",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  ro: "🇷🇴",
  zh: "🇨🇳",
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
