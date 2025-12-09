import type { Locale, CardInput } from "./types"
import { loveDeck, type TarotCard } from "@/lib/tarot/cards"

// Get card data by ID
function getCardById(id: number): TarotCard | undefined {
  return loveDeck.find((card) => card.id === id)
}

// Get card name in the specified locale
function getCardName(card: TarotCard, locale: Locale): string {
  return card.name[locale] || card.name.en
}

// Build the system prompt for the AI
export function buildSystemPrompt(locale: Locale): string {
  const languageMap = {
    en: "English",
    zh: "中文 (Chinese)",
    ro: "Română (Romanian)",
  }

  return `You are a professional tarot reader specializing in love and relationships.
Your readings are warm, insightful, and empowering.
You combine traditional tarot wisdom with modern psychological insights.

Guidelines:
- Be compassionate and supportive
- Provide actionable advice
- Focus on empowerment, not prediction
- Respect user privacy and emotions
- Never make absolute predictions about the future

IMPORTANT: Respond ONLY in ${languageMap[locale]}.
Keep your response concise but meaningful.`
}

// Build the user prompt with card context
export function buildReadingPrompt(
  question: string,
  cards: CardInput[],
  locale: Locale
): string {
  const cardDescriptions = cards
    .map((c) => {
      const card = getCardById(c.id)
      if (!card) return null

      const name = getCardName(card, locale)
      const keywords = card.keywords[locale] || card.keywords.en
      const positionLabels = {
        en: { past: "Past", present: "Present", future: "Future" },
        zh: { past: "过去", present: "现在", future: "未来" },
        ro: { past: "Trecut", present: "Prezent", future: "Viitor" },
      }
      const orientationLabels = {
        en: { upright: "Upright", reversed: "Reversed" },
        zh: { upright: "正位", reversed: "逆位" },
        ro: { upright: "Drept", reversed: "Inversat" },
      }

      const position = positionLabels[locale][c.position]
      const orientation = c.reversed
        ? orientationLabels[locale].reversed
        : orientationLabels[locale].upright

      return `- ${position}: ${name} (${orientation})
  Keywords: ${keywords.join(", ")}`
    })
    .filter(Boolean)
    .join("\n")

  const promptTemplates = {
    en: `The user's love question: "${question}"

The three cards drawn:
${cardDescriptions}

Please provide a love tarot reading with the following structure:

## Overall Energy
[One sentence summarizing the combined energy of all three cards]

## Past - [Card Name]
[How this card reflects past influences on the current love situation, 2-3 sentences]

## Present - [Card Name]
[What this card reveals about the current situation and what needs attention, 2-3 sentences]

## Future - [Card Name]
[Potential developments and opportunities ahead, 2-3 sentences]

## Synthesis
[How all three cards work together to answer the user's question, 2-3 sentences]

## Advice
[Specific, actionable guidance based on the reading, 2-3 sentences]

## Affirmation
[A single powerful affirmation for the user to carry with them]`,

    zh: `用户的爱情问题："${question}"

抽到的三张牌：
${cardDescriptions}

请提供以下结构的爱情塔罗解读：

## 整体能量
[用一句话总结三张牌的整体能量]

## 过去 - [牌名]
[这张牌如何反映过去对当前爱情状况的影响，2-3句话]

## 现在 - [牌名]
[这张牌揭示了当前状况以及需要关注的重点，2-3句话]

## 未来 - [牌名]
[未来可能的发展趋势和机遇，2-3句话]

## 综合解读
[三张牌如何共同回答用户的问题，2-3句话]

## 建议
[基于解读的具体、可执行的指导建议，2-3句话]

## 每日肯定语
[一句有力量的肯定语，让用户带着它前行]`,

    ro: `Întrebarea de dragoste a utilizatorului: "${question}"

Cele trei cărți trase:
${cardDescriptions}

Vă rugăm să oferiți o citire de tarot de dragoste cu următoarea structură:

## Energia Generală
[O propoziție care rezumă energia combinată a celor trei cărți]

## Trecut - [Numele Cărții]
[Cum reflectă această carte influențele trecute asupra situației amoroase actuale, 2-3 propoziții]

## Prezent - [Numele Cărții]
[Ce dezvăluie această carte despre situația actuală și ce necesită atenție, 2-3 propoziții]

## Viitor - [Numele Cărții]
[Dezvoltări potențiale și oportunități viitoare, 2-3 propoziții]

## Sinteză
[Cum lucrează toate cele trei cărți împreună pentru a răspunde la întrebarea utilizatorului, 2-3 propoziții]

## Sfat
[Îndrumare specifică și acționabilă bazată pe citire, 2-3 propoziții]

## Afirmație
[O singură afirmație puternică pentru utilizator]`,
  }

  return promptTemplates[locale]
}

// Parse the AI response into structured content
export function parseReadingResponse(
  response: string,
  locale: Locale
): {
  overview: string
  cards: { position: "past" | "present" | "future"; cardName: string; interpretation: string }[]
  synthesis: string
  advice: string
  affirmation: string
} {
  const sectionPatterns = {
    en: {
      overview: /##\s*Overall Energy\s*\n([\s\S]*?)(?=\n##|$)/i,
      past: /##\s*Past\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      present: /##\s*Present\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      future: /##\s*Future\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      synthesis: /##\s*Synthesis\s*\n([\s\S]*?)(?=\n##|$)/i,
      advice: /##\s*Advice\s*\n([\s\S]*?)(?=\n##|$)/i,
      affirmation: /##\s*Affirmation\s*\n([\s\S]*?)(?=\n##|$)/i,
    },
    zh: {
      overview: /##\s*整体能量\s*\n([\s\S]*?)(?=\n##|$)/i,
      past: /##\s*过去\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      present: /##\s*现在\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      future: /##\s*未来\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      synthesis: /##\s*综合解读\s*\n([\s\S]*?)(?=\n##|$)/i,
      advice: /##\s*建议\s*\n([\s\S]*?)(?=\n##|$)/i,
      affirmation: /##\s*每日肯定语\s*\n([\s\S]*?)(?=\n##|$)/i,
    },
    ro: {
      overview: /##\s*Energia Generală\s*\n([\s\S]*?)(?=\n##|$)/i,
      past: /##\s*Trecut\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      present: /##\s*Prezent\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      future: /##\s*Viitor\s*-\s*(.+?)\s*\n([\s\S]*?)(?=\n##|$)/i,
      synthesis: /##\s*Sinteză\s*\n([\s\S]*?)(?=\n##|$)/i,
      advice: /##\s*Sfat\s*\n([\s\S]*?)(?=\n##|$)/i,
      affirmation: /##\s*Afirmație\s*\n([\s\S]*?)(?=\n##|$)/i,
    },
  }

  const patterns = sectionPatterns[locale]

  const extractSection = (pattern: RegExp, text: string): string => {
    const match = text.match(pattern)
    return match ? match[1].trim() : ""
  }

  const extractCardSection = (
    pattern: RegExp,
    text: string
  ): { cardName: string; interpretation: string } => {
    const match = text.match(pattern)
    return {
      cardName: match ? match[1].trim() : "",
      interpretation: match ? match[2].trim() : "",
    }
  }

  const pastCard = extractCardSection(patterns.past, response)
  const presentCard = extractCardSection(patterns.present, response)
  const futureCard = extractCardSection(patterns.future, response)

  return {
    overview: extractSection(patterns.overview, response),
    cards: [
      { position: "past", ...pastCard },
      { position: "present", ...presentCard },
      { position: "future", ...futureCard },
    ],
    synthesis: extractSection(patterns.synthesis, response),
    advice: extractSection(patterns.advice, response),
    affirmation: extractSection(patterns.affirmation, response),
  }
}
