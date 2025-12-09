import type { Locale, CardInput, ReadingContent, PositionInsight } from "./types"

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

IMPORTANT: 
1. Respond ONLY in ${languageMap[locale]}.
2. Return your response as a valid JSON object (no markdown, no code blocks).
3. Keep your response concise but meaningful.`
}

// Build the user prompt with card context
export function buildReadingPrompt(
  question: string,
  cards: CardInput[],
  locale: Locale
): string {
  const pastCard = cards.find(c => c.position === "Past")
  const presentCard = cards.find(c => c.position === "Present")
  const futureCard = cards.find(c => c.position === "Future")

  const formatCard = (card: CardInput | undefined) => {
    if (!card) return "Unknown"
    return `${card.name} (${card.reversed ? "Reversed" : "Upright"})`
  }

  const promptTemplates = {
    en: `The user's love question: "${question}"

The three cards drawn:
- Past: ${formatCard(pastCard)}
- Present: ${formatCard(presentCard)}
- Future: ${formatCard(futureCard)}

Provide a love tarot reading as a JSON object with this exact structure:
{
  "overallEnergy": "One paragraph summarizing the combined energy of all three cards and the overall message for this reading.",
  "past": {
    "insight": "A short, impactful sentence about past influences.",
    "deepDive": "A detailed paragraph (2-3 sentences) explaining how ${pastCard?.name || 'this card'} reflects past influences on the current love situation.",
    "tags": ["keyword1", "keyword2", "keyword3"]
  },
  "present": {
    "insight": "A short, impactful sentence about the current situation.",
    "deepDive": "A detailed paragraph (2-3 sentences) explaining what ${presentCard?.name || 'this card'} reveals about the current situation.",
    "tags": ["keyword1", "keyword2", "keyword3"]
  },
  "future": {
    "insight": "A short, impactful sentence about future potential.",
    "deepDive": "A detailed paragraph (2-3 sentences) explaining the potential developments and opportunities ahead based on ${futureCard?.name || 'this card'}.",
    "tags": ["keyword1", "keyword2", "keyword3"]
  }
}

Return ONLY the JSON object, no additional text.`,

    zh: `用户的爱情问题："${question}"

抽到的三张牌：
- 过去：${formatCard(pastCard)}
- 现在：${formatCard(presentCard)}
- 未来：${formatCard(futureCard)}

请以 JSON 对象格式提供爱情塔罗解读，使用以下精确结构:
{
  "overallEnergy": "一段话总结三张牌的整体能量和解读的核心信息。",
  "past": {
    "insight": "关于过去影响的简短有力的一句话。",
    "deepDive": "详细段落（2-3句话），解释${pastCard?.name || '这张牌'}如何反映过去对当前爱情状况的影响。",
    "tags": ["关键词1", "关键词2", "关键词3"]
  },
  "present": {
    "insight": "关于当前状况的简短有力的一句话。",
    "deepDive": "详细段落（2-3句话），解释${presentCard?.name || '这张牌'}揭示的当前状况。",
    "tags": ["关键词1", "关键词2", "关键词3"]
  },
  "future": {
    "insight": "关于未来潜力的简短有力的一句话。",
    "deepDive": "详细段落（2-3句话），基于${futureCard?.name || '这张牌'}解释未来可能的发展和机遇。",
    "tags": ["关键词1", "关键词2", "关键词3"]
  }
}

只返回 JSON 对象，不要有其他文字。`,

    ro: `Întrebarea de dragoste a utilizatorului: "${question}"

Cele trei cărți trase:
- Trecut: ${formatCard(pastCard)}
- Prezent: ${formatCard(presentCard)}
- Viitor: ${formatCard(futureCard)}

Oferă o citire de tarot pentru dragoste ca obiect JSON cu această structură exactă:
{
  "overallEnergy": "Un paragraf care rezumă energia combinată a celor trei cărți și mesajul general.",
  "past": {
    "insight": "O propoziție scurtă și de impact despre influențele trecute.",
    "deepDive": "Un paragraf detaliat (2-3 propoziții) explicând cum ${pastCard?.name || 'această carte'} reflectă influențele trecute.",
    "tags": ["cuvânt1", "cuvânt2", "cuvânt3"]
  },
  "present": {
    "insight": "O propoziție scurtă și de impact despre situația actuală.",
    "deepDive": "Un paragraf detaliat (2-3 propoziții) despre ce dezvăluie ${presentCard?.name || 'această carte'}.",
    "tags": ["cuvânt1", "cuvânt2", "cuvânt3"]
  },
  "future": {
    "insight": "O propoziție scurtă și de impact despre potențialul viitor.",
    "deepDive": "Un paragraf detaliat (2-3 propoziții) despre dezvoltările potențiale bazate pe ${futureCard?.name || 'această carte'}.",
    "tags": ["cuvânt1", "cuvânt2", "cuvânt3"]
  }
}

Returnează DOAR obiectul JSON, fără text suplimentar.`,
  }

  return promptTemplates[locale]
}

// Parse the AI response into structured content
export function parseReadingResponse(response: string): ReadingContent {
  // Try to parse as JSON directly
  try {
    // Remove potential markdown code blocks
    let cleanResponse = response.trim()
    if (cleanResponse.startsWith("```json")) {
      cleanResponse = cleanResponse.slice(7)
    }
    if (cleanResponse.startsWith("```")) {
      cleanResponse = cleanResponse.slice(3)
    }
    if (cleanResponse.endsWith("```")) {
      cleanResponse = cleanResponse.slice(0, -3)
    }
    cleanResponse = cleanResponse.trim()

    const parsed = JSON.parse(cleanResponse)
    
    // Validate and return with defaults
    return {
      overallEnergy: parsed.overallEnergy || "The cards reveal a transformative journey in your love life.",
      past: validatePositionInsight(parsed.past),
      present: validatePositionInsight(parsed.present),
      future: validatePositionInsight(parsed.future),
    }
  } catch {
    // Return fallback if parsing fails
    console.error("Failed to parse Gemini response as JSON:", response.substring(0, 200))
    return getDefaultReading()
  }
}

function validatePositionInsight(data: unknown): PositionInsight {
  if (!data || typeof data !== "object") {
    return {
      insight: "A significant influence is present.",
      deepDive: "The cards suggest important energies at play in this area of your journey.",
      tags: ["transformation", "growth", "insight"],
    }
  }

  const obj = data as Record<string, unknown>
  return {
    insight: typeof obj.insight === "string" ? obj.insight : "A significant influence is present.",
    deepDive: typeof obj.deepDive === "string" ? obj.deepDive : "The cards suggest important energies at play.",
    tags: Array.isArray(obj.tags) ? obj.tags.filter((t): t is string => typeof t === "string") : ["insight", "growth"],
  }
}

function getDefaultReading(): ReadingContent {
  return {
    overallEnergy: "The cards reveal a journey of transformation and growth in your love life.",
    past: {
      insight: "Past experiences have shaped your current path.",
      deepDive: "The energies from your past continue to influence your present situation, offering lessons and wisdom.",
      tags: ["reflection", "lessons", "growth"],
    },
    present: {
      insight: "The present moment holds important opportunities.",
      deepDive: "Right now, you are at a crossroads where your choices will shape your romantic future significantly.",
      tags: ["choices", "awareness", "potential"],
    },
    future: {
      insight: "New possibilities are emerging on the horizon.",
      deepDive: "The future holds promise for positive developments, though the path forward requires intention and trust.",
      tags: ["hope", "transformation", "trust"],
    },
  }
}
