import { majorArcana, type TarotCard } from "./cards"

export interface DrawnCard {
  position: "past" | "present" | "future"
  card: TarotCard
  reversed: boolean
}

/**
 * Parse card filename to extract id, key, and generate image path
 * Example: "00-the-fool.webp" → { id: 0, key: "the-fool", image: "/cards/major/00-the-fool.webp" }
 */
export function parseCardFilename(filename: string): { id: number; key: string; image: string } {
  // Remove extension
  const baseName = filename.replace(/\.(webp|png|jpg|jpeg)$/i, "")

  // Extract id (first 2 characters) and key (rest after the first dash)
  const match = baseName.match(/^(\d{2})-(.+)$/)

  if (!match) {
    throw new Error(`Invalid card filename format: ${filename}`)
  }

  const id = Number.parseInt(match[1], 10)
  const key = match[2] // e.g., "the-fool", "the-magician"
  const image = `/cards/major/${filename}`

  return { id, key, image }
}

/**
 * Get the image path for a card by its ID
 */
export function getCardImagePath(cardId: number): string {
  const cardImages: Record<number, string> = {
    0: "/cards/major/00-the-fool.webp",
    1: "/cards/major/01-the-magician.webp",
    2: "/cards/major/02-the-high priestess.webp",
    3: "/cards/major/03-the-empress.webp",
    4: "/cards/major/04-the-emperor.webp",
    5: "/cards/major/05-the-hierophant.webp",
    6: "/cards/major/06-the-lovers.webp",
    7: "/cards/major/07-the-chariot.webp",
    8: "/cards/major/08-the-strength.webp",
    9: "/cards/major/09-the-hermit.webp",
    10: "/cards/major/10-the-wheel of fortune.webp",
    11: "/cards/major/11-the-justice.webp",
    12: "/cards/major/12-the-hanged man.webp",
    13: "/cards/major/13-the-death.webp",
    14: "/cards/major/14-the-temperance.webp",
    15: "/cards/major/15-the-devil.webp",
    16: "/cards/major/16-the-tower.webp",
    17: "/cards/major/17-the-star.webp",
    18: "/cards/major/18-the-moon.webp",
    19: "/cards/major/19-the-sun.webp",
    20: "/cards/major/20-the-judgement.webp",
    21: "/cards/major/21-the-world.webp",
  }

  return cardImages[cardId] || "/cards/major/00-the-fool.webp"
}

/**
 * Draw three unique cards for Past, Present, Future positions
 * Each card has a 50% chance of being reversed
 */
export function drawThreeCards(): DrawnCard[] {
  const positions: ("past" | "present" | "future")[] = ["past", "present", "future"]
  const availableCards = [...majorArcana]
  const drawnCards: DrawnCard[] = []

  for (const position of positions) {
    // Pick a random card from remaining cards
    const randomIndex = Math.floor(Math.random() * availableCards.length)
    const selectedCard = availableCards.splice(randomIndex, 1)[0]

    // 50% chance of being reversed
    const reversed = Math.random() < 0.5

    drawnCards.push({
      position,
      card: selectedCard,
      reversed,
    })
  }

  return drawnCards
}

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
