import type { Metadata } from "next"
import LoveTarotClient from "./love-tarot-client"
import { loveTarotHubContent } from "@/lib/hub/love-tarot-content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

export const metadata: Metadata = {
  title: loveTarotHubContent.en.title,
  description: loveTarotHubContent.en.description,
  keywords: loveTarotHubContent.en.keywords,
  openGraph: {
    title: loveTarotHubContent.en.title,
    description: loveTarotHubContent.en.description,
    url: `${siteUrl}/love-tarot-reading`,
    siteName: "Love Tarot Romania",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: loveTarotHubContent.en.title,
    description: loveTarotHubContent.en.description,
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: `${siteUrl}/love-tarot-reading`,
    languages: {
      en: `${siteUrl}/love-tarot-reading`,
      ro: `${siteUrl}/love-tarot-reading`, // i18n context handles internal language state
      "zh-CN": `${siteUrl}/love-tarot-reading`,
    },
  },
}

export default function LoveTarotHubPage() {
  return <LoveTarotClient />
}
