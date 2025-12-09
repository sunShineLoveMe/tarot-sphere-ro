import { Suspense } from "react"
import type { Metadata } from "next"
import ReadingResultContent from "@/components/reading-result-content"
import { I18nProvider } from "@/lib/i18n/context"

// Base URL for the site
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

// Card name mapping for metadata
const cardNames: Record<number, string> = {
  0: "The Fool",
  1: "The Magician",
  2: "The High Priestess",
  3: "The Empress",
  4: "The Emperor",
  5: "The Hierophant",
  6: "The Lovers",
  7: "The Chariot",
  8: "Strength",
  9: "The Hermit",
  10: "Wheel of Fortune",
  11: "Justice",
  12: "The Hanged Man",
  13: "Death",
  14: "Temperance",
  15: "The Devil",
  16: "The Tower",
  17: "The Star",
  18: "The Moon",
  19: "The Sun",
  20: "Judgement",
  21: "The World",
}

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams
  const cardsParam = typeof params.cards === "string" ? params.cards : ""
  const question = typeof params.question === "string" ? params.question : ""

  // Parse cards for description
  let cardDescription = "Your Love Tarot Reading"
  try {
    if (cardsParam) {
      const cards = JSON.parse(cardsParam) as { index: number; reversed: boolean; position: string }[]
      const cardNamesList = cards
        .map((c) => cardNames[c.index] || "Unknown")
        .join(", ")
      cardDescription = `Your cards: ${cardNamesList}`
    }
  } catch {
    // Keep default description
  }

  // Build OG image URL with cards parameter
  const ogImageUrl = cardsParam
    ? `${siteUrl}/api/og?cards=${encodeURIComponent(cardsParam)}${question ? `&question=${encodeURIComponent(question.slice(0, 50))}` : ""}`
    : `${siteUrl}/og-default.png`

  // Build canonical URL
  const canonicalUrl = `${siteUrl}/reading-result${cardsParam ? `?cards=${encodeURIComponent(cardsParam)}` : ""}`

  return {
    title: "Your Love Tarot Reading",
    description: question
      ? `"${question.slice(0, 100)}..." - ${cardDescription}`
      : `${cardDescription} - Discover what the cards reveal about your love life.`,
    
    openGraph: {
      type: "article",
      title: "My Love Tarot Reading ✨",
      description: question
        ? `"${question.slice(0, 80)}..." - See my tarot reading!`
        : "See my Love Tarot reading and discover what the cards revealed!",
      url: canonicalUrl,
      siteName: "Love Tarot Romania",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Love Tarot Reading Result",
          type: "image/png",
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title: "My Love Tarot Reading ✨",
      description: question
        ? `"${question.slice(0, 80)}..."`
        : "See what the cards revealed about my love life!",
      images: [ogImageUrl],
    },
    
    // Allow crawlers to index reading results for sharing
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function ReadingResultPage() {
  return (
    <I18nProvider>
      <Suspense fallback={<div className="min-h-screen bg-[#0a0612]" />}>
        <ReadingResultContent />
      </Suspense>
    </I18nProvider>
  )
}
